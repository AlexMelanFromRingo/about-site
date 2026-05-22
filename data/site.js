/* ============================================================
 *  Глобальные данные сайта: профиль, категории, переводы UI.
 *  Тексты проектов лежат в data/projects/*.js
 * ============================================================ */

const profile = {
  name: "Alex Melan",
  handle: "AKA Melan",
  github: "https://github.com/AlexMelanFromRingo",
  discord: "alex_melan",
  tagline: {
    ru: "Разработчик, исследователь ИБ и нейросетей",
    en: "Developer, security & neural-network researcher",
    uk: "Розробник, дослідник ІБ та нейромереж",
  },
  intro: {
    ru: [
      "Привет! Я Alex Melan. Программирую со школьных времён, а компьютеры и информационная безопасность — увлечение с детства.",
      "Изучаю много языков и направлений: криптология, нейросети, децентрализованные вычисления, защита информации, эмуляция железа. Этот сайт — живой архив всего, что я успел собрать.",
    ],
    en: [
      "Hi! I'm Alex Melan. I've been coding since school, and computers and information security have been my passion since childhood.",
      "I explore a lot of languages and fields: cryptology, neural networks, decentralized computing, information security, hardware emulation. This site is a living archive of everything I've built.",
    ],
    uk: [
      "Привіт! Я Alex Melan. Програмую зі шкільних часів, а комп'ютери та інформаційна безпека — захоплення з дитинства.",
      "Вивчаю багато мов і напрямів: криптологія, нейромережі, децентралізовані обчислення, захист інформації, емуляція заліза. Цей сайт — живий архів усього, що я зібрав.",
    ],
  },
};

/* --- Карточки «обо мне» --- */
const traits = [
  {
    icon: "code",
    title: { ru: "Разработчик", en: "Developer", uk: "Розробник" },
    text: {
      ru: "Rust, Python, Java, C/C++, C#, Go, Lua и не только",
      en: "Rust, Python, Java, C/C++, C#, Go, Lua and more",
      uk: "Rust, Python, Java, C/C++, C#, Go, Lua та інше",
    },
  },
  {
    icon: "brain",
    title: { ru: "Исследователь ML", en: "ML researcher", uk: "Дослідник ML" },
    text: {
      ru: "Нейросети, GAN, обучение моделей и аналитика данных",
      en: "Neural networks, GANs, model training and data analytics",
      uk: "Нейромережі, GAN, навчання моделей та аналітика даних",
    },
  },
  {
    icon: "shield",
    title: { ru: "Специалист по ИБ", en: "Security specialist", uk: "Фахівець з ІБ" },
    text: {
      ru: "Криптология, хэш-функции, протоколы аутентификации, Wi-Fi",
      en: "Cryptology, hash functions, authentication protocols, Wi-Fi",
      uk: "Криптологія, хеш-функції, протоколи автентифікації, Wi-Fi",
    },
  },
  {
    icon: "network",
    title: { ru: "Децентрализованные сети", en: "Decentralized networks", uk: "Децентралізовані мережі" },
    text: {
      ru: "Yggdrasil, mesh-маршрутизация, блокчейн, оверлейные сети",
      en: "Yggdrasil, mesh routing, blockchain, overlay networks",
      uk: "Yggdrasil, mesh-маршрутизація, блокчейн, оверлейні мережі",
    },
  },
  {
    icon: "cpu",
    title: { ru: "Низкий уровень", en: "Low-level enthusiast", uk: "Низький рівень" },
    text: {
      ru: "Эмуляторы CPU, ретро-железо, ассемблер и системное программирование",
      en: "CPU emulators, retro hardware, assembly and systems programming",
      uk: "Емулятори CPU, ретро-залізо, асемблер та системне програмування",
    },
  },
  {
    icon: "server",
    title: { ru: "Администратор серверов", en: "Server admin", uk: "Адміністратор серверів" },
    text: {
      ru: "Игровые серверы Minecraft, хостинг, плагины и стабильность",
      en: "Minecraft game servers, hosting, plugins and uptime",
      uk: "Ігрові сервери Minecraft, хостинг, плагіни та стабільність",
    },
  },
];

/* --- Категории проектов --- */
const categories = [
  {
    id: "minecraft", color: "#5ac46a", icon: "cube",
    name: { ru: "Minecraft: плагины и моды", en: "Minecraft: plugins & mods", uk: "Minecraft: плагіни та моди" },
    desc: {
      ru: "Серверные плагины на Paper и моды на Fabric/Forge — от аутентификации до асинхронной генерации мира.",
      en: "Paper server plugins and Fabric/Forge mods — from authentication to async world generation.",
      uk: "Серверні плагіни на Paper і моди на Fabric/Forge — від автентифікації до асинхронної генерації світу.",
    },
  },
  {
    id: "crypto", color: "#ffb454", icon: "lock",
    name: { ru: "Криптография и безопасность", en: "Cryptography & security", uk: "Криптографія та безпека" },
    desc: {
      ru: "Шифры, хэш-функции, кошельки, протоколы аутентификации и образовательные демо по криптологии.",
      en: "Ciphers, hash functions, wallets, authentication protocols and educational cryptology demos.",
      uk: "Шифри, хеш-функції, гаманці, протоколи автентифікації та освітні демо з криптології.",
    },
  },
  {
    id: "ml", color: "#a98bff", icon: "brain",
    name: { ru: "Нейросети и машинное обучение", en: "Neural networks & ML", uk: "Нейромережі та ML" },
    desc: {
      ru: "Генеративные модели, перцептроны с нуля, дообучение LLM и эксперименты с компьютерным зрением.",
      en: "Generative models, perceptrons from scratch, LLM fine-tuning and computer-vision experiments.",
      uk: "Генеративні моделі, перцептрони з нуля, донавчання LLM та експерименти з комп'ютерним зором.",
    },
  },
  {
    id: "net", color: "#2bd4e8", icon: "network",
    name: { ru: "Сети и децентрализация", en: "Networks & decentralization", uk: "Мережі та децентралізація" },
    desc: {
      ru: "Mesh-маршрутизация, оверлейные сети, прокси, обход DPI и протоколы передачи данных.",
      en: "Mesh routing, overlay networks, proxies, DPI bypass and data-transfer protocols.",
      uk: "Mesh-маршрутизація, оверлейні мережі, проксі, обхід DPI та протоколи передачі даних.",
    },
  },
  {
    id: "emu", color: "#ff7a90", icon: "cpu",
    name: { ru: "Эмуляторы и низкий уровень", en: "Emulators & low-level", uk: "Емулятори та низький рівень" },
    desc: {
      ru: "Эмуляторы процессоров и ретро-компьютеров, операционные системы, компиляторы и работа с железом.",
      en: "CPU and retro-computer emulators, operating systems, compilers and bare-metal work.",
      uk: "Емулятори процесорів і ретро-комп'ютерів, операційні системи, компілятори та робота із залізом.",
    },
  },
  {
    id: "bots", color: "#4c8dff", icon: "bot",
    name: { ru: "Боты и автоматизация", en: "Bots & automation", uk: "Боти та автоматизація" },
    desc: {
      ru: "Боты для Telegram и Discord, парсеры, userbot-инструменты и автоматизация рутины.",
      en: "Telegram and Discord bots, parsers, userbot tooling and routine automation.",
      uk: "Боти для Telegram і Discord, парсери, userbot-інструменти та автоматизація рутини.",
    },
  },
  {
    id: "blockchain", color: "#f7c948", icon: "coins",
    name: { ru: "Блокчейн и криптовалюты", en: "Blockchain & cryptocurrencies", uk: "Блокчейн та криптовалюти" },
    desc: {
      ru: "Собственные блокчейны, HD-кошельки, форк-фабрики и инструменты для работы с криптовалютами.",
      en: "Custom blockchains, HD wallets, fork factories and cryptocurrency tooling.",
      uk: "Власні блокчейни, HD-гаманці, форк-фабрики та інструменти для роботи з криптовалютами.",
    },
  },
  {
    id: "web", color: "#56d364", icon: "globe",
    name: { ru: "Веб и инструменты", en: "Web & tools", uk: "Веб та інструменти" },
    desc: {
      ru: "Интерактивные веб-демо, утилиты для разработчиков, визуализации и образовательные сайты.",
      en: "Interactive web demos, developer utilities, visualizations and educational sites.",
      uk: "Інтерактивні веб-демо, утиліти для розробників, візуалізації та освітні сайти.",
    },
  },
  {
    id: "android", color: "#7ee787", icon: "phone",
    name: { ru: "Android-приложения", en: "Android apps", uk: "Android-застосунки" },
    desc: {
      ru: "Мобильные приложения на Kotlin и Java: уведомления, кошельки, нейросети и эксперименты.",
      en: "Mobile apps in Kotlin and Java: notifications, wallets, neural networks and experiments.",
      uk: "Мобільні застосунки на Kotlin і Java: сповіщення, гаманці, нейромережі та експерименти.",
    },
  },
  {
    id: "games", color: "#ff9e64", icon: "gamepad",
    name: { ru: "Игры и графика", en: "Games & graphics", uk: "Ігри та графіка" },
    desc: {
      ru: "Игры, трассировка лучей, шейдеры, воксели и графические эксперименты.",
      en: "Games, ray tracing, shaders, voxels and graphics experiments.",
      uk: "Ігри, трасування променів, шейдери, воксели та графічні експерименти.",
    },
  },
  {
    id: "sys", color: "#8b98a9", icon: "terminal",
    name: { ru: "Системное и CLI", en: "Systems & CLI", uk: "Системне та CLI" },
    desc: {
      ru: "Утилиты командной строки, серверы, мониторинг и небольшие системные инструменты.",
      en: "Command-line utilities, servers, monitoring and small systems tools.",
      uk: "Утиліти командного рядка, сервери, моніторинг та невеликі системні інструменти.",
    },
  },
  {
    id: "misc", color: "#c0c8d4", icon: "sparkles",
    name: { ru: "Прочее и учебное", en: "Misc & learning", uk: "Інше та навчальне" },
    desc: {
      ru: "Учебные проекты, эксперименты, курсовые работы и всё, что не уместилось в другие разделы.",
      en: "Learning projects, experiments, coursework and everything that didn't fit elsewhere.",
      uk: "Навчальні проєкти, експерименти, курсові роботи та все, що не вмістилося в інші розділи.",
    },
  },
];

/* --- Статусы проектов --- */
const statuses = {
  done:     { color: "#56d364", label: { ru: "Завершён",   en: "Completed",   uk: "Завершений" } },
  active:   { color: "#4c8dff", label: { ru: "В развитии", en: "In progress", uk: "У розвитку" } },
  concept:  { color: "#a98bff", label: { ru: "Прототип",   en: "Prototype",   uk: "Прототип" } },
  learning: { color: "#ffb454", label: { ru: "Учебный",    en: "Learning",    uk: "Навчальний" } },
  broken:   { color: "#e5736b", label: { ru: "Требует доработки", en: "Needs work", uk: "Потребує доробки" } },
  archived: { color: "#8b98a9", label: { ru: "В архиве",   en: "Archived",    uk: "В архіві" } },
};

/* --- Строки интерфейса --- */
const ui = {
  "nav.about":     { ru: "Обо мне",   en: "About",     uk: "Про мене" },
  "nav.projects":  { ru: "Проекты",   en: "Projects",  uk: "Проєкти" },
  "nav.contact":   { ru: "Контакты",  en: "Contacts",  uk: "Контакти" },
  "hero.cta1":     { ru: "Смотреть проекты", en: "Browse projects", uk: "Дивитись проєкти" },
  "hero.cta2":     { ru: "GitHub", en: "GitHub", uk: "GitHub" },
  "stats.projects":{ ru: "проектов",  en: "projects",  uk: "проєктів" },
  "stats.langs":   { ru: "языков",    en: "languages", uk: "мов" },
  "stats.cats":    { ru: "направлений", en: "fields",  uk: "напрямів" },
  "stats.years":   { ru: "лет в коде", en: "years coding", uk: "років у коді" },
  "about.title":   { ru: "Чем я занимаюсь", en: "What I do", uk: "Чим я займаюсь" },
  "projects.title":{ ru: "Мои проекты", en: "My projects", uk: "Мої проєкти" },
  "projects.lead": {
    ru: "Большой архив того, что я разрабатывал — от Minecraft-плагинов до эмуляторов процессоров.",
    en: "A large archive of what I've built — from Minecraft plugins to CPU emulators.",
    uk: "Великий архів того, що я розробляв — від Minecraft-плагінів до емуляторів процесорів.",
  },
  "search.ph":     { ru: "Поиск по проектам, языкам, тегам…", en: "Search projects, languages, tags…", uk: "Пошук за проєктами, мовами, тегами…" },
  "filter.all":    { ru: "Все", en: "All", uk: "Усі" },
  "filter.none":   { ru: "Ничего не найдено. Попробуйте другой запрос.", en: "Nothing found. Try another query.", uk: "Нічого не знайдено. Спробуйте інший запит." },
  "filter.reset":  { ru: "Сбросить", en: "Reset", uk: "Скинути" },
  "card.more":     { ru: "Подробнее", en: "Details", uk: "Детальніше" },
  "contact.title": { ru: "Связаться", en: "Get in touch", uk: "Зв'язатися" },
  "contact.lead":  {
    ru: "Открыт к обсуждению проектов, вопросам по коду и совместной разработке.",
    en: "Open to discussing projects, code questions and collaboration.",
    uk: "Відкритий до обговорення проєктів, питань щодо коду та спільної розробки.",
  },
  "footer.built":  { ru: "Сайт собран статически, исходники на GitHub.", en: "Statically generated, sources on GitHub.", uk: "Сайт зібраний статично, вихідники на GitHub." },
  "proj.back":     { ru: "Все проекты", en: "All projects", uk: "Усі проєкти" },
  "proj.overview": { ru: "О проекте", en: "Overview", uk: "Про проєкт" },
  "proj.features": { ru: "Особенности", en: "Features", uk: "Особливості" },
  "proj.stack":    { ru: "Технологии", en: "Tech stack", uk: "Технології" },
  "proj.status":   { ru: "Статус", en: "Status", uk: "Статус" },
  "proj.category": { ru: "Категория", en: "Category", uk: "Категорія" },
  "proj.source":   { ru: "Открыть на GitHub", en: "View on GitHub", uk: "Відкрити на GitHub" },
  "proj.nosource": { ru: "Исходники не опубликованы", en: "Sources not published", uk: "Вихідники не опубліковані" },
  "proj.related":  { ru: "Похожие проекты", en: "Related projects", uk: "Схожі проєкти" },
  "404.title":     { ru: "Страница не найдена", en: "Page not found", uk: "Сторінку не знайдено" },
  "404.text":      { ru: "Такой страницы нет. Возможно, ссылка устарела.", en: "This page doesn't exist. The link may be outdated.", uk: "Такої сторінки немає. Можливо, посилання застаріло." },
  "404.home":      { ru: "На главную", en: "Go home", uk: "На головну" },
};

module.exports = { profile, traits, categories, statuses, ui };
