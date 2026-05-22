/* ============================================================
 *  Генератор статического сайта-портфолио Alex Melan.
 *  Источник данных: data/site.js + data/projects/*.js
 *  Выход: index.html, 404.html, projects/<id>.html, _tg/<id>.md
 *  Запуск: node build.js
 * ============================================================ */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const { profile, traits, categories, statuses, ui } = require("./data/site.js");

const CODING_SINCE = 2018;
const LANGS = ["ru", "en", "uk"];

/* ---------- загрузка проектов ---------- */
const projDir = path.join(ROOT, "data", "projects");
let projects = [];
for (const f of fs.readdirSync(projDir).filter((f) => f.endsWith(".js")).sort()) {
  const arr = require(path.join(projDir, f));
  if (Array.isArray(arr)) projects = projects.concat(arr);
}

/* ---------- проверка целостности ---------- */
const catIds = new Set(categories.map((c) => c.id));
const seen = new Set();
for (const p of projects) {
  if (!p.id) throw new Error("Проект без id: " + JSON.stringify(p).slice(0, 80));
  if (seen.has(p.id)) throw new Error("Дублирующийся id: " + p.id);
  seen.add(p.id);
  if (!catIds.has(p.category)) throw new Error(`Проект ${p.id}: неизвестная категория ${p.category}`);
  if (!statuses[p.status]) throw new Error(`Проект ${p.id}: неизвестный статус ${p.status}`);
}
console.log(`Загружено проектов: ${projects.length}`);

/* ---------- утилиты ---------- */
const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const catById = (id) => categories.find((c) => c.id === id);

/* трёхъязычный инлайн-блок: один <span data-l> на язык */
function tl(obj, cls) {
  const c = cls ? ` class="${cls}"` : "";
  return LANGS.map(
    (l) => `<span data-l="${l}"${c}>${esc(obj[l] != null ? obj[l] : obj.ru)}</span>`
  ).join("");
}
/* строка интерфейса по ключу */
const T = (key, cls) => {
  const o = ui[key];
  if (!o) throw new Error("Нет строки UI: " + key);
  return tl(o, cls);
};
/* трёхъязычные абзацы */
function tParas(obj) {
  let out = "";
  for (const l of LANGS) {
    const arr = (obj && obj[l]) || (obj && obj.ru) || [];
    for (const p of arr) out += `<p data-l="${l}">${esc(p)}</p>`;
  }
  return out;
}
/* трёхъязычный список */
function tList(obj) {
  let out = "";
  for (const l of LANGS) {
    const arr = (obj && obj[l]) || (obj && obj.ru) || [];
    for (const it of arr) out += `<li data-l="${l}">${esc(it)}</li>`;
  }
  return out;
}

/* ---------- иконки (Lucide-стиль, stroke) ---------- */
const ICON = {
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  brain:
    '<path d="M12 5a3 3 0 1 0-5.997.142M12 5a3 3 0 1 1 5.997.142M12 5v14M6.003 5.142A3 3 0 0 0 4 8c0 .5.1 1 .3 1.4M18 5.142A3 3 0 0 1 20 8c0 .5-.1 1-.3 1.4M5 14a3 3 0 1 0 3 3M19 14a3 3 0 1 1-3 3"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  network:
    '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  server:
    '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  cube: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  bot: '<rect x="4" y="8" width="16" height="12" rx="2.5"/><path d="M12 4v4M9 14v.01M15 14v.01M2 13v3M22 13v3"/>',
  coins:
    '<circle cx="9" cy="9" r="6"/><path d="M16.5 3.8a6 6 0 0 1 0 11.4M9 6v6M6.5 9h5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.9 6 4 9-.1 3-1.5 6.3-4 9-2.5-2.7-3.9-6-4-9 .1-3 1.5-6.3 4-9z"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  gamepad:
    '<path d="M6 11h4M8 9v4M15 11h.01M18 13h.01"/><rect x="2" y="6" width="20" height="12" rx="5"/>',
  terminal: '<path d="m5 8 4 4-4 4M13 16h6"/><rect x="2" y="3" width="20" height="18" rx="2"/>',
  sparkles:
    '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  github:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.5-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.9 1.5a13.4 13.4 0 0 0-7 0C6.1 1.7 4.9 2.1 4.9 2.1a4.9 4.9 0 0 0-.1 3.7 5.3 5.3 0 0 0-1.5 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22"/>',
  arrowLeft: '<path d="m12 19-7-7 7-7M19 12H5"/>',
  arrowUp: '<path d="m18 15-6-6-6 6"/>',
  arrowRight: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  discord:
    '<path d="M18.9 5.6A16 16 0 0 0 14.9 4l-.3.5a13 13 0 0 1 3.5 1.7 12 12 0 0 0-10.2 0A13 13 0 0 1 11.4 4.5L11.1 4A16 16 0 0 0 7.1 5.6C3.6 11 4.2 16.2 4.4 18.4A16 16 0 0 0 9.3 21l.7-1.4a10 10 0 0 1-2.3-1.1l.6-.4a11 11 0 0 0 9.4 0l.6.4a10 10 0 0 1-2.3 1.1L16.7 21a16 16 0 0 0 4.9-2.6c.2-2.7.8-7.8-2.7-12.8zM9.7 15.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm4.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
};
function icon(name, size = 20, cls = "") {
  const p = ICON[name] || ICON.sparkles;
  return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

/* ---------- статистика ---------- */
const allLangs = new Set();
projects.forEach((p) => (p.langs || []).forEach((l) => allLangs.add(l)));
const stats = {
  projects: projects.length,
  langs: allLangs.size,
  cats: categories.filter((c) => projects.some((p) => p.category === c.id)).length,
  years: new Date().getFullYear() - CODING_SINCE,
};

/* ---------- сортировка проектов ---------- */
const statusRank = { active: 0, done: 1, concept: 2, learning: 3, archived: 4 };
function sortProjects(list) {
  return list.slice().sort((a, b) => {
    if (!!b.featured !== !!a.featured) return a.featured ? -1 : 1;
    const sr = (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9);
    if (sr) return sr;
    return a.name.localeCompare(b.name, "en");
  });
}

/* ============================================================
 *  Общий каркас страницы
 * ============================================================ */
function head(title, desc, depth) {
  const base = depth ? "../" : "";
  return `<!DOCTYPE html>
<html lang="ru" data-lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="author" content="Alex Melan">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:type" content="website">
<link rel="icon" href="${base}assets/img/favicon.ico" type="image/x-icon">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/css/site.css">
<script>(function(){var d=document.documentElement;d.classList.add('js');try{var l=localStorage.getItem('lang');if(['ru','en','uk'].indexOf(l)<0)l='ru';d.setAttribute('data-lang',l);d.setAttribute('lang',l);}catch(e){}})();</script>
</head>
<body>`;
}

function nav(depth) {
  const base = depth ? "../" : "";
  return `<header class="nav" id="nav">
  <div class="wrap flex items-center justify-between h-16">
    <a href="${base}index.html" class="flex items-center gap-2.5 group">
      <span class="grid h-9 w-9 place-items-center rounded-xl font-mono font-bold text-white" style="background:linear-gradient(135deg,var(--color-brand),var(--color-violet))">AM</span>
      <span class="hidden sm:block font-semibold tracking-tight">Alex&nbsp;Melan</span>
    </a>
    <nav class="hidden md:flex items-center gap-8">
      <a href="${base}index.html#about" class="nav-link">${T("nav.about")}</a>
      <a href="${base}index.html#projects" class="nav-link">${T("nav.projects")}</a>
      <a href="${base}index.html#contact" class="nav-link">${T("nav.contact")}</a>
    </nav>
    <div class="flex items-center gap-3">
      <div class="lang-switch" id="langSwitch">
        <button class="lang-btn" data-lang="ru">RU</button>
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="uk">UA</button>
      </div>
      <a href="${esc(profile.github)}" target="_blank" rel="noopener" class="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60 text-muted transition-colors hover:text-fg hover:border-brand/50" aria-label="GitHub">${icon("github", 18)}</a>
      <button class="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface/60 text-muted" id="menuBtn" aria-label="Меню">${icon("menu", 18)}</button>
    </div>
  </div>
  <div class="md:hidden hidden border-t border-line-soft bg-ink-soft" id="mobileMenu">
    <div class="wrap flex flex-col py-3">
      <a href="${base}index.html#about" class="py-2.5 text-sm text-muted">${T("nav.about")}</a>
      <a href="${base}index.html#projects" class="py-2.5 text-sm text-muted">${T("nav.projects")}</a>
      <a href="${base}index.html#contact" class="py-2.5 text-sm text-muted">${T("nav.contact")}</a>
    </div>
  </div>
</header>`;
}

function footer(depth) {
  const base = depth ? "../" : "";
  const year = new Date().getFullYear();
  return `<footer class="border-t border-line-soft mt-24">
  <div class="wrap py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2.5">
      <span class="grid h-8 w-8 place-items-center rounded-lg font-mono text-xs font-bold text-white" style="background:linear-gradient(135deg,var(--color-brand),var(--color-violet))">AM</span>
      <span class="text-sm text-muted">© ${year} Alex Melan</span>
    </div>
    <p class="text-xs text-faint">${T("footer.built")}</p>
    <a href="${esc(profile.github)}" target="_blank" rel="noopener" class="flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors">${icon("github", 16)} AlexMelanFromRingo</a>
  </div>
</footer>
<button id="toTop" class="fixed bottom-7 right-7 z-40 grid h-12 w-12 place-items-center rounded-full text-white opacity-0 pointer-events-none transition-all duration-300" style="background:linear-gradient(135deg,var(--color-brand),var(--color-violet));box-shadow:0 10px 28px -8px rgba(76,141,255,.6)" aria-label="Наверх">${icon("arrowUp", 20)}</button>
<script src="${base}assets/js/site.js"></script>
</body>
</html>`;
}

/* ============================================================
 *  Карточка проекта (для главной)
 * ============================================================ */
function projectCard(p) {
  const cat = catById(p.category);
  const st = statuses[p.status];
  const langTags = (p.langs || [])
    .map((l) => `<span class="tag">${esc(l)}</span>`)
    .join("");
  const searchStr = [
    p.name,
    p.aka || "",
    (p.langs || []).join(" "),
    (p.tags || []).join(" "),
    p.short && p.short.ru,
    p.short && p.short.en,
    cat.name.ru,
  ]
    .join(" ")
    .toLowerCase();

  return `<a href="projects/${p.id}.html" class="pcard reveal" data-cat="${p.category}" data-search="${esc(searchStr)}" style="--cat:${cat.color}">
  <div class="flex items-center justify-between mb-3">
    <span class="chip" style="border-color:${cat.color}33"><span class="dot" style="background:${cat.color}"></span>${tl(cat.name)}</span>
    <span class="flex items-center gap-1.5 font-mono text-[11px]" style="color:${st.color}"><span class="dot" style="background:${st.color}"></span>${tl(st.label)}</span>
  </div>
  <h3 class="pcard-title">${esc(p.name)}${p.aka ? ` <span class="text-faint font-normal">· ${esc(p.aka)}</span>` : ""}</h3>
  <p class="mt-2 mb-4 text-sm leading-relaxed text-muted grow">${tl(p.short)}</p>
  <div class="flex flex-wrap items-center gap-1.5">
    ${langTags}
    <span class="ml-auto inline-flex items-center gap-1 text-xs font-medium text-faint group-hover:text-brand">${T("card.more")} ${icon("arrowRight", 13)}</span>
  </div>
</a>`;
}

/* ============================================================
 *  Главная страница
 * ============================================================ */
function buildIndex() {
  const traitCards = traits
    .map(
      (tr) => `<div class="trait reveal">
    <div class="trait-ico" style="color:var(--color-brand-bright)">${icon(tr.icon, 22)}</div>
    <h3 class="font-semibold mb-1">${tl(tr.title)}</h3>
    <p class="text-sm text-muted leading-relaxed">${tl(tr.text)}</p>
  </div>`
    )
    .join("\n");

  /* фильтры по категориям */
  const usedCats = categories.filter((c) => projects.some((p) => p.category === c.id));
  const filters =
    `<button class="filter active" data-filter="all">${T("filter.all")}<span class="filter-count">${projects.length}</span></button>` +
    usedCats
      .map((c) => {
        const n = projects.filter((p) => p.category === c.id).length;
        return `<button class="filter" data-filter="${c.id}"><span class="dot" style="background:${c.color}"></span>${tl(c.name)}<span class="filter-count">${n}</span></button>`;
      })
      .join("");

  /* группы проектов */
  const groups = usedCats
    .map((c) => {
      const list = sortProjects(projects.filter((p) => p.category === c.id));
      const cards = list.map(projectCard).join("\n");
      return `<section class="proj-group" data-group="${c.id}">
    <div class="group-head reveal">
      <span class="grid h-10 w-10 place-items-center rounded-xl" style="background:${c.color}1a;color:${c.color}">${icon(c.icon, 20)}</span>
      <div>
        <h3 class="text-lg font-semibold leading-tight">${tl(c.name)}</h3>
        <p class="text-xs text-faint">${tl(c.desc)}</p>
      </div>
      <span class="ml-auto font-mono text-sm text-faint">${list.length}</span>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5">
      ${cards}
    </div>
  </section>`;
    })
    .join("\n");

  const stat = (val, key) =>
    `<div class="text-center"><div class="text-3xl sm:text-4xl font-bold gradient-text">${val}</div><div class="text-xs sm:text-sm text-faint mt-1">${T(key)}</div></div>`;

  const body = `${nav(0)}
<main>
  <!-- Hero -->
  <section class="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
    <div class="wrap">
      <div class="reveal in inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 mb-7">
        <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" style="animation:pulse-ring 2s ease-out infinite"></span><span class="relative inline-flex h-2 w-2 rounded-full bg-brand"></span></span>
        <span class="font-mono text-xs text-muted">${tl(profile.tagline)}</span>
      </div>
      <h1 class="reveal in text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
        <span data-l="ru">Привет, я </span><span data-l="en">Hi, I'm </span><span data-l="uk">Привіт, я </span><span class="gradient-text shimmer">Alex Melan</span>
      </h1>
      <div class="reveal in mt-6 max-w-2xl space-y-3 text-base sm:text-lg text-muted leading-relaxed">
        ${tParas(profile.intro)}
      </div>
      <div class="reveal in mt-8 flex flex-wrap gap-3">
        <a href="#projects" class="btn btn-primary">${icon("layers", 17)} ${T("hero.cta1")}</a>
        <a href="${esc(profile.github)}" target="_blank" rel="noopener" class="btn btn-ghost">${icon("github", 17)} ${T("hero.cta2")}</a>
      </div>
      <div class="reveal in mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
        ${stat(stats.projects, "stats.projects")}
        ${stat(stats.langs, "stats.langs")}
        ${stat(stats.cats, "stats.cats")}
        ${stat(stats.years + "+", "stats.years")}
      </div>
    </div>
  </section>

  <!-- About -->
  <section id="about" class="wrap py-16 scroll-mt-24">
    <div class="reveal"><span class="eyebrow">${icon("sparkles", 14)} 01 — ${T("nav.about")}</span></div>
    <h2 class="h-section reveal mb-10">${T("about.title")}</h2>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${traitCards}
    </div>
  </section>

  <!-- Projects -->
  <section id="projects" class="wrap py-16 scroll-mt-24">
    <div class="reveal"><span class="eyebrow">${icon("layers", 14)} 02 — ${T("nav.projects")}</span></div>
    <h2 class="h-section reveal">${T("projects.title")}</h2>
    <p class="reveal mt-3 max-w-2xl text-muted">${T("projects.lead")}</p>

    <div class="reveal mt-8 relative">
      <span class="absolute left-4 top-1/2 -translate-y-1/2 text-faint">${icon("search", 18)}</span>
      <input type="text" id="search" class="search" placeholder="" autocomplete="off">
      <span class="sr-only">${T("search.ph")}</span>
    </div>
    <div class="reveal mt-4 flex flex-wrap gap-2" id="filters">
      ${filters}
    </div>

    <div class="mt-10 space-y-14" id="projectGroups">
      ${groups}
    </div>
    <div id="noResults" class="hidden py-20 text-center text-muted">
      <div class="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-surface text-faint">${icon("search", 24)}</div>
      ${T("filter.none")}
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="wrap py-16 scroll-mt-24">
    <div class="reveal"><span class="eyebrow">${icon("sparkles", 14)} 03 — ${T("nav.contact")}</span></div>
    <div class="reveal rounded-3xl border border-line bg-surface/60 p-8 sm:p-12 overflow-hidden relative">
      <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl" style="background:radial-gradient(circle,var(--color-brand),transparent)"></div>
      <h2 class="h-section relative">${T("contact.title")}</h2>
      <p class="relative mt-3 max-w-xl text-muted">${T("contact.lead")}</p>
      <div class="relative mt-7 flex flex-wrap gap-3">
        <a href="${esc(profile.github)}" target="_blank" rel="noopener" class="btn btn-primary">${icon("github", 17)} GitHub</a>
        <span class="btn btn-ghost">${icon("discord", 17)} ${esc(profile.discord)}</span>
      </div>
    </div>
  </section>
</main>
${footer(0)}`;

  const html =
    head(
      "Alex Melan — разработчик, исследователь ИБ и нейросетей",
      "Портфолио Alex Melan: " +
        stats.projects +
        " проектов — Minecraft-плагины, криптография, нейросети, эмуляторы, децентрализованные сети.",
      0
    ) + body;
  fs.writeFileSync(path.join(ROOT, "index.html"), html);
}

/* ============================================================
 *  Страница проекта
 * ============================================================ */
function buildProjectPage(p) {
  const cat = catById(p.category);
  const st = statuses[p.status];
  const related = sortProjects(projects.filter((x) => x.category === p.category && x.id !== p.id)).slice(0, 3);

  const langChips = (p.langs || []).map((l) => `<span class="tag">${esc(l)}</span>`).join("");
  const tagChips = (p.tags || []).map((tg) => `<span class="chip">${esc(tg)}</span>`).join("");

  const features =
    p.features && (p.features.ru || []).length
      ? `<h2>${T("proj.features")}</h2><ul>${tList(p.features)}</ul>`
      : "";

  const sourceBtn = p.github
    ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" class="btn btn-primary">${icon("github", 17)} ${T("proj.source")}</a>`
    : `<span class="btn btn-ghost opacity-70">${icon("lock", 16)} ${T("proj.nosource")}</span>`;

  const relatedHtml = related.length
    ? `<section class="wrap py-10">
    <h2 class="text-lg font-semibold mb-5">${T("proj.related")}</h2>
    <div class="grid gap-4 sm:grid-cols-3">
      ${related
        .map(
          (r) => `<a href="${r.id}.html" class="pcard" style="--cat:${catById(r.category).color}">
        <span class="chip mb-3 self-start" style="border-color:${catById(r.category).color}33"><span class="dot" style="background:${catById(r.category).color}"></span>${tl(catById(r.category).name)}</span>
        <h3 class="pcard-title">${esc(r.name)}</h3>
        <p class="mt-2 text-sm text-muted">${tl(r.short)}</p>
      </a>`
        )
        .join("\n")}
    </div>
  </section>`
    : "";

  const body = `${nav(1)}
<main class="pt-24">
  <div class="wrap py-6">
    <a href="../index.html#projects" class="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors">${icon("arrowLeft", 16)} ${T("proj.back")}</a>
  </div>

  <article class="wrap">
    <header class="border-b border-line-soft pb-8">
      <div class="flex flex-wrap items-center gap-2.5 mb-5">
        <span class="chip" style="border-color:${cat.color}55;color:${cat.color}">${icon(cat.icon, 13)} ${tl(cat.name)}</span>
        <span class="flex items-center gap-1.5 font-mono text-xs" style="color:${st.color}"><span class="dot" style="background:${st.color}"></span>${tl(st.label)}</span>
        ${p.year ? `<span class="font-mono text-xs text-faint">${p.year}</span>` : ""}
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight">${esc(p.name)}</h1>
      ${p.aka ? `<p class="mt-1 font-mono text-sm text-faint">${esc(p.aka)}</p>` : ""}
      <p class="mt-4 max-w-2xl text-lg text-muted leading-relaxed">${tl(p.short)}</p>
      <div class="mt-6 flex flex-wrap items-center gap-3">
        ${sourceBtn}
        <div class="flex flex-wrap gap-1.5">${langChips}</div>
      </div>
    </header>

    <div class="grid lg:grid-cols-[1fr_280px] gap-10 py-10">
      <div class="prose-block">
        <h2>${T("proj.overview")}</h2>
        ${tParas(p.body)}
        ${features}
      </div>
      <aside class="space-y-1 lg:border-l lg:border-line-soft lg:pl-8 h-fit">
        <div class="meta-row"><span class="text-faint">${T("proj.category")}</span><span class="font-medium" style="color:${cat.color}">${tl(cat.name)}</span></div>
        <div class="meta-row"><span class="text-faint">${T("proj.status")}</span><span class="font-medium" style="color:${st.color}">${tl(st.label)}</span></div>
        ${p.year ? `<div class="meta-row"><span class="text-faint">${tl({ ru: "Год", en: "Year", uk: "Рік" })}</span><span class="font-mono">${p.year}</span></div>` : ""}
        <div class="pt-5">
          <div class="text-faint text-sm mb-2">${T("proj.stack")}</div>
          <div class="flex flex-wrap gap-1.5">${langChips}</div>
        </div>
        ${
          tagChips
            ? `<div class="pt-4"><div class="text-faint text-sm mb-2">${tl({ ru: "Теги", en: "Tags", uk: "Теги" })}</div><div class="flex flex-wrap gap-1.5">${tagChips}</div></div>`
            : ""
        }
      </aside>
    </div>
  </article>
  ${relatedHtml}
</main>
${footer(1)}`;

  const html =
    head(
      `${p.name} — Alex Melan`,
      (p.short && p.short.ru) || p.name,
      1
    ) + body;
  fs.writeFileSync(path.join(ROOT, "projects", p.id + ".html"), html);
}

/* ============================================================
 *  Страница 404
 * ============================================================ */
function build404() {
  const body = `${nav(0)}
<main class="min-h-[80vh] grid place-items-center wrap text-center">
  <div>
    <div class="text-[120px] sm:text-[180px] font-extrabold leading-none gradient-text">404</div>
    <h1 class="text-2xl font-bold mt-2">${T("404.title")}</h1>
    <p class="text-muted mt-3">${T("404.text")}</p>
    <a href="index.html" class="btn btn-primary mt-7">${icon("arrowLeft", 16)} ${T("404.home")}</a>
  </div>
</main>
${footer(0)}`;
  fs.writeFileSync(path.join(ROOT, "404.html"), head("404 — Alex Melan", "Страница не найдена", 0) + body);
}

/* ============================================================
 *  TG-посты (русский, Markdown) — для канала
 * ============================================================ */
function buildTgPosts() {
  const dir = path.join(ROOT, "_tg");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // персональная закрывающая строка по статусу проекта
  const closers = {
    done:     "Проект закончен и работает. Код открыт — заходите, разбирайте, пользуйтесь.",
    active:   "Проект ещё в работе — пилю дальше, каждый коммит делает его лучше.",
    concept:  "Пока это прототип: идея рабочая, но до полировки руки ещё дойдут.",
    learning: "Это из раннего, ещё учебное. Оставляю честно — с таких штук всё и начиналось.",
    broken:   "Скажу честно: проект недопилен и местами сломан. Но идея и часть кода живые.",
    archived: "Проект в архиве — больше не развиваю, но пусть остаётся частью истории.",
  };

  let index =
    "# Посты для Telegram-канала\n\n" +
    "По одному файлу на проект — готовые тексты в формате дев-блога.\n" +
    `Всего постов: ${projects.length}. Сгруппированы по категориям.\n`;

  const byCat = {};
  for (const p of projects) (byCat[p.category] = byCat[p.category] || []).push(p);

  for (const c of categories) {
    const list = byCat[c.id];
    if (!list) continue;
    index += `\n## ${c.name.ru}\n`;
    const sorted = sortProjects(list);
    for (const p of sorted) {
      const langs = (p.langs || []).join(", ");
      const tags = (p.tags || [])
        .map((t) => "#" + t.replace(/[^A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9]/g, ""))
        .join(" ");
      const related = sorted.filter((x) => x.id !== p.id).slice(0, 3).map((x) => x.name);
      const paras = (p.body && p.body.ru) || [(p.short && p.short.ru) || ""];

      let md = `🔹 ${p.name}${p.aka ? ` — ${p.aka}` : ""}\n`;
      md += `${c.name.ru} · ${statuses[p.status].label.ru}`;
      if (p.year) md += ` · ${p.year}`;
      md += `\n\n${"—".repeat(20)}\n\n`;
      md += paras.join("\n\n") + "\n\n";

      if (p.features && p.features.ru && p.features.ru.length) {
        md += "⚙️ Что внутри:\n";
        for (const f of p.features.ru) md += `— ${f}\n`;
        md += "\n";
      }
      if (langs) md += `🛠 Стек: ${langs}.\n`;
      if (related.length) md += `🧩 Рядом по теме у меня: ${related.join(", ")}.\n`;
      md += `\n${closers[p.status] || ""}\n`;
      if (p.github) md += `\n👉 Исходники: ${p.github}\n`;
      else md += `\n👉 Исходники пока не выкладывал в открытый доступ.\n`;
      if (tags) md += `\n${tags}\n`;

      fs.writeFileSync(path.join(dir, p.id + ".md"), md);
      index += `- ${p.name} — \`${p.id}.md\`\n`;
    }
  }
  fs.writeFileSync(path.join(dir, "_INDEX.md"), index);
}

/* ============================================================
 *  Запуск
 * ============================================================ */
buildIndex();
projects.forEach(buildProjectPage);
build404();
buildTgPosts();
console.log(
  `Готово: index.html, 404.html, ${projects.length} страниц проектов, ${projects.length} TG-постов.`
);
console.log(`Статистика: ${stats.projects} проектов, ${stats.langs} языков, ${stats.cats} категорий.`);
