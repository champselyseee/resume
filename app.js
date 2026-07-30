/* ==========================================================================
   Логика бланка: язык, режим печати (тема), навигация, появление разделов.
   Тексты живут в content.js — этот файл менять обычно не нужно.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  var LANGS = ["ru", "en", "fr"];
  var current = "ru";

  /* Контакты не рисуются скриптом — они прописаны прямо в index.html
     вместе с логотипами. Там же меняются ссылки. */


  /* ---------- Помощники ---------- */

  function $(id) { return document.getElementById(id); }

  function remember(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function recall(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function esc(text) {
    return String(text).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function initials(fullName) {
    return fullName.trim().split(/\s+/).slice(0, 2)
      .map(function (w) { return w.charAt(0).toUpperCase(); })
      .join("");
  }

  function num(i) { return String(i + 1).padStart(2, "0"); }

  // Квадратик логотипа. Картинка ищется двумя способами:
  //   1) правило .logo--<имя> в logos.css (логотипы, вшитые прямо в стили);
  //   2) файл logos/<имя>.png — ЭТОГО ДОСТАТОЧНО для новых логотипов:
  //      положи картинку в папку logos/ и впиши это имя в content.js.
  // Можно писать и с расширением: logo: "open.png" — тогда берётся ровно этот файл.
  // Логотипа нет — рисуем первую букву названия.
  function logoHTML(name, label) {
    if (name) {
      var safe = String(name).trim().replace(/[^A-Za-z0-9._-]/g, "");
      var file = safe.indexOf(".") === -1 ? safe + ".png" : safe;
      var cls = safe.replace(/\.[^.]*$/, "");
      return '<span class="logo logo--' + esc(cls) +
             '" style="' + esc("--logo-file:url('logos/" + file + "')") +
             '" aria-hidden="true"></span>';
    }
    var letter = String(label || "").trim().charAt(0).toUpperCase();
    return '<span class="logo logo--empty" aria-hidden="true">' + esc(letter) + "</span>";
  }

  // Кнопка-ссылка в строке (кейс-чемпионат, курс, работа...).
  // Ссылки нет — кнопки нет, строка выглядит как обычно.
  function goHTML(url, label) {
    if (!url) return "";
    return '<a class="row__go" href="' + esc(url) + '"' +
           ' target="_blank" rel="noopener noreferrer"' +
           ' aria-label="' + esc(label) + '" title="' + esc(label) + '">↗</a>';
  }

  // Логотип и ссылку берём из русского блока, если в текущем языке не заданы.
  // Так их достаточно вписать ОДИН раз (в ru) — работает на всех языках.
  function fromBase(item, base, index, key) {
    if (item && item[key]) return item[key];
    var ref = (base || [])[index];
    return (ref && ref[key]) || "";
  }

  // Правило для логотипов-файлов. Пишем его через :where(...) — у такого
  // селектора нулевая важность, поэтому вшитые в logos.css картинки
  // (.logo--telegram и т.п.) остаются главнее, а для всех остальных имён
  // подхватывается файл из папки logos/.
  (function addLogoFileRule() {
    var style = document.createElement("style");
    style.textContent = ":where(.logo){background-image:var(--logo-file)}";
    document.head.appendChild(style);
  })();


  /* ---------- Язык ---------- */

  function pickStartLanguage() {
    var saved = recall("lang");
    if (LANGS.indexOf(saved) !== -1) return saved;

    var browser = (navigator.language || "ru").slice(0, 2).toLowerCase();
    return LANGS.indexOf(browser) !== -1 ? browser : "ru";
  }

  function setLanguage(lang) {
    var t = CONTENT[lang];
    if (!t) return;

    current = lang;
    root.setAttribute("lang", lang);
    remember("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t[el.getAttribute("data-i18n")];
      if (typeof value === "string") el.textContent = value;
    });

    document.title = t.metaTitle;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t.metaDescription);

    // Имя в две строки
    var parts = t.name.trim().split(/\s+/);
    var first = parts.shift();
    $("heroName").innerHTML = "<span>" + esc(first) + "</span>" +
      (parts.length ? "<span>" + esc(parts.join(" ")) + "</span>" : "");

    $("introText").textContent = t.greeting;
    $("skipLink").textContent = t.skipLabel;
    $("sectionNav").setAttribute("aria-label", t.navLabel);
    $("formKicker").textContent = "01 · " + t.kicker;
    $("photoName").textContent = t.name;
    $("monogram").textContent = initials(t.name);
    $("monogram").setAttribute("aria-label", t.topLabel);
    $("themeToggle").setAttribute("aria-label", t.themeLabel);
    $("footerName").textContent = t.name;
    $("footerYear").textContent = "© " + new Date().getFullYear() + " · " + t.footerNote;

    // Графы. Вторым аргументом — русский блок: из него берутся логотипы и
    // ссылки, если в текущем языке они не заданы.
    var ru = CONTENT.ru;
    $("educationList").innerHTML  = rowsHTML(t.education,  ru.education);
    $("coursesList").innerHTML    = rowsHTML(t.courses,    ru.courses);
    $("experienceList").innerHTML = rowsHTML(t.experience, ru.experience);
    $("casesList").innerHTML      = rowsHTML(t.cases,      ru.cases);

    // Навыки по группам
    $("skillsList").innerHTML = t.skillGroups.map(function (group) {
      return '<div class="skillgroup">' +
               '<h4 class="skillgroup__title">' + esc(group.title) + "</h4>" +
               '<ul class="skills">' +
                 group.items.map(function (s) { return '<li class="skill">' + esc(s) + "</li>"; }).join("") +
               "</ul>" +
             "</div>";
    }).join("");

    // Проекты
    $("projectsList").innerHTML = t.projects.map(function (p, i) {
      var url = fromBase(p, ru.projects, i, "url");
      var inner =
        logoHTML(fromBase(p, ru.projects, i, "logo"), p.name) +
        '<span class="link__num">' + num(i) + "</span>" +
        '<span class="link__body">' +
          '<span class="link__name">' + esc(p.name) + "</span>" +
          (p.note ? '<span class="link__note">' + esc(p.note) + "</span>" : "") +
        "</span>";

      if (url) {
        return "<li>" +
                 '<a class="link" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' +
                   inner + '<span class="link__arrow" aria-hidden="true">→</span>' +
                 "</a>" +
               "</li>";
      }
      // Ссылки пока нет — строка-заготовка, по ней нельзя кликнуть
      return "<li><div class=\"link link--empty\">" + inner +
             '<span class="link__arrow" aria-hidden="true">—</span></div></li>';
    }).join("");

    document.querySelectorAll(".lang").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    showMode();
  }

  function rowsHTML(list, base) {
    return (list || []).map(function (item, i) {
      return '<li class="row">' +
               '<span class="row__years">' + esc(item.years) + "</span>" +
               '<span class="row__body">' +
                 '<span class="row__head">' +
                   logoHTML(fromBase(item, base, i, "logo"), item.place) +
                   '<span class="row__place">' + esc(item.place) + "</span>" +
                   goHTML(fromBase(item, base, i, "url"), item.place) +
                 "</span>" +
                 (item.note ? '<span class="row__note">' + esc(item.note) + "</span>" : "") +
               "</span>" +
             "</li>";
    }).join("");
  }


  /* ---------- Режим печати: оригинал / негатив ---------- */

  function showMode() {
    var t = CONTENT[current];
    var dark = root.getAttribute("data-theme") === "dark";
    $("modeValue").textContent = dark ? t.modeDark : t.modeLight;
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    remember("theme", theme);
    showMode();
  }


  /* ---------- Разделы «печатаются» при прокрутке ---------- */

  function revealOnScroll() {
    var records = document.querySelectorAll(".record");

    if (!("IntersectionObserver" in window)) {
      records.forEach(function (r) { r.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add("is-visible");
          observer.unobserve(item.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    records.forEach(function (r) { observer.observe(r); });
  }


  /* ---------- Навигация: подсветка текущего раздела ---------- */

  function trackSections() {
    var links = document.querySelectorAll(".nav__link");

    function markActive(id) {
      links.forEach(function (link) {
        link.setAttribute("aria-current", link.getAttribute("data-target") === id ? "true" : "false");
      });
    }

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        markActive(link.getAttribute("data-target"));
      });
    });

    if (!("IntersectionObserver" in window)) return;

    // Раздел считается текущим, когда пересекает середину экрана
    var spy = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) markActive(item.target.id);
      });
    }, { rootMargin: "-50% 0px -45% 0px", threshold: 0 });

    document.querySelectorAll(".record").forEach(function (s) { spy.observe(s); });

    // В самом верху страницы ни один раздел не активен
    var top = document.querySelector(".mast");
    if (top) {
      new IntersectionObserver(function (items) {
        items.forEach(function (item) { if (item.isIntersecting) markActive(null); });
      }, { rootMargin: "0px 0px -60% 0px", threshold: 0 }).observe(top);
    }
  }


  /* ---------- Запуск ---------- */

  var photo = $("photo");
  photo.src = PHOTO;
  photo.addEventListener("error", function () {
    photo.closest(".photo").classList.add("is-empty");
  });

  setLanguage(pickStartLanguage());
  revealOnScroll();
  trackSections();

  document.querySelectorAll(".lang").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });

  $("themeToggle").addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // Пока режим не выбран вручную — следуем за системной настройкой
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!recall("theme")) setTheme(e.matches ? "dark" : "light");
  });

})();
