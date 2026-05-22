/* ===========================================================
 *  Клиентский скрипт сайта Alex Melan
 *  Язык, навигация, анимации, поиск и фильтры проектов.
 * =========================================================== */
(function () {
  "use strict";

  /* ---------- Переключатель языка ---------- */
  var root = document.documentElement;
  function setLang(lang) {
    if (["ru", "en", "uk"].indexOf(lang) < 0) lang = "ru";
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    try { localStorage.setItem("lang", lang); } catch (e) {}
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  }
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });
  setLang(root.getAttribute("data-lang") || "ru");

  /* ---------- Шапка: фон при прокрутке ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
    var top = document.getElementById("toTop");
    if (top) {
      var show = window.scrollY > 480;
      top.style.opacity = show ? "1" : "0";
      top.style.pointerEvents = show ? "auto" : "none";
      top.style.transform = show ? "translateY(0)" : "translateY(12px)";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Кнопка «наверх» ---------- */
  var toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Мобильное меню ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { mobileMenu.classList.add("hidden"); });
    });
  }

  /* ---------- Появление при прокрутке ----------
     Обработчик скролла вместо IntersectionObserver: надёжно показывает
     элементы при любом скролле, в том числе при переходе по якорю и
     быстром «броске» страницы, когда IO перепрыгивает элементы. */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduce) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var checkReveals = function () {
      var vh = window.innerHeight;
      for (var i = reveals.length - 1; i >= 0; i--) {
        if (reveals[i].getBoundingClientRect().top < vh * 0.9) {
          reveals[i].classList.add("in");
          reveals.splice(i, 1);
        }
      }
    };
    var revealTick = false;
    var onReveal = function () {
      if (revealTick) return;
      revealTick = true;
      requestAnimationFrame(function () { checkReveals(); revealTick = false; });
    };
    window.addEventListener("scroll", onReveal, { passive: true });
    window.addEventListener("resize", onReveal);
    checkReveals();
    setTimeout(checkReveals, 350); // повтор после подгрузки шрифтов
  }

  /* ---------- 3D-наклон карточек ---------- */
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".pcard, .trait").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          "perspective(900px) rotateY(" + px * 5 + "deg) rotateX(" + -py * 5 +
          "deg) translateY(-6px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---------- Поиск и фильтры проектов ---------- */
  var search = document.getElementById("search");
  var filters = document.getElementById("filters");
  if (search || filters) {
    var cards = Array.prototype.slice.call(document.querySelectorAll(".pcard[data-search]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".proj-group"));
    var noResults = document.getElementById("noResults");
    var activeFilter = "all";
    var query = "";

    function apply() {
      var total = 0;
      cards.forEach(function (c) {
        var okCat = activeFilter === "all" || c.dataset.cat === activeFilter;
        var okText = !query || c.dataset.search.indexOf(query) >= 0;
        var show = okCat && okText;
        c.style.display = show ? "" : "none";
        if (show) total++;
      });
      groups.forEach(function (g) {
        var any = g.querySelectorAll('.pcard[data-search]:not([style*="display: none"])').length;
        g.style.display = any ? "" : "none";
      });
      if (noResults) noResults.classList.toggle("hidden", total > 0);
    }

    if (search) {
      search.addEventListener("input", function () {
        query = search.value.trim().toLowerCase();
        apply();
      });
    }
    if (filters) {
      filters.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter");
        if (!btn) return;
        filters.querySelectorAll(".filter").forEach(function (f) { f.classList.remove("active"); });
        btn.classList.add("active");
        activeFilter = btn.dataset.filter;
        apply();
      });
    }
  }

  /* плейсхолдер поиска из перевода */
  var searchEl = document.getElementById("search");
  if (searchEl) {
    var phData = { ru: "Поиск по проектам, языкам, тегам…", en: "Search projects, languages, tags…", uk: "Пошук за проєктами, мовами, тегами…" };
    function setPh() { searchEl.setAttribute("placeholder", phData[root.getAttribute("data-lang")] || phData.ru); }
    setPh();
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.addEventListener("click", setPh);
    });
  }
})();
