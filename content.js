/* ==========================================================================
   ВСЕ ТЕКСТЫ И ССЫЛКИ САЙТА.
   Это единственный файл, который нужно править, чтобы поменять содержимое.
   HTML и CSS трогать не надо.

   Правила простые:
   - текст пишется в кавычках: "вот так";
   - после каждой строки стоит запятая — её не убирай;
   - блоки в квадратных скобках [ ... ] это списки: можно добавлять
     и удалять элементы, копируя соседние вместе с фигурными скобками.

   Сейчас здесь ПРИМЕР данных, чтобы сайт выглядел готовым.
   Замени его на свой.
   ========================================================================== */


/* --- Фото ---------------------------------------------------------------
   Положи снимок в эту же папку и впиши имя файла, например "photo.jpg".
   Лучше вертикальный, примерно 800×1000 точек. */
const PHOTO = "IMG_9562.JPG";


/* --- Контакты ------------------------------------------------------------
   Ссылки на почту и соцсети лежат НЕ здесь, а прямо в index.html —
   в разделе «03 — Контакты» и в двух кнопках на первом экране.

   Чтобы поменять ссылку: открой index.html, найди нужную строку
   и замени адрес в href="…". */


/* --- Логотипы ------------------------------------------------------------
   В полях logo пишется короткое имя логотипа, например "ukrtb".
   Сами картинки вшиты в файл logos.css.
   Пусто — вместо логотипа встанет квадратик с первой буквой названия. */


/* --- Тексты на трёх языках ---------------------------------------------- */
const CONTENT = {

  /* ============================ РУССКИЙ ============================ */
  ru: {
    metaTitle: "Камиль Валиуллин — визитка",
    metaDescription: "Студент экономического направления. Образование, опыт, навыки, проекты и контакты.",

    greeting: "Приятно познакомиться!",   // надпись-штемпель при загрузке
    kicker: "Портфолио · 2026",
    name: "Камиль Валиуллин",

    // Вместо должности — то, что ты хочешь сказать работодателю первым
    statement: "Готов взяться за любую работу в сфере",
    tagline: "Очень хочу работать и набираться опыта: возьмусь за задачи любого уровня, быстро разбираюсь в новом и довожу начатое до результата.",

    aboutTitle: "Обо мне",

    educationTitle: "Учебные заведения",
    education: [
      {
        years: "2023 — 2024",
        place: "УКРТБ, Уфа",
        note: "Курсы с дипломом: разработка мобильных приложений, системное администрирование.",
        logo: "ukrtb",
      },
      {
        years: "2026 — 2030",
        place: "Финансовый университет при Правительстве РФ, Москва",
        note: "Направление «Экономика и финансы».",
        logo: "finuniver",
      },
    ],

    coursesTitle: "Курсы и тренинги",
    courses: [
      {
        years: "2026",
        place: "OpenUniversity",
        note: "Чтение отчётов МСФО, мультипликаторы и оценка компании, оценка Ликвидности и платёжеспособности компании",
        logo: "opem",
      },
      {
        years: "2025",
        place: "Отчётность по МСФО: как читать",
        note: "Баланс, отчёт о прибылях, движение денежных средств.",
        logo: "",
      },
      {
        years: "2024",
        place: "Оценка компаний: DCF и мультипликаторы",
        note: "Ставка дисконтирования, прогноз потоков, терминальная стоимость.",
        logo: "",
      },
    ],

    experienceTitle: "Работа",
    experience: [
      {
        years: "2025",
        place: "Стартап «LaunchBase»",
        note: "Junior-Marketer : разработка маркетингов стратегий, привлечение лидов, холодные продажи, анализ и ведение операционки в Excel",
        logo: "",
      },
      {
        years: "2025-2026",
        place: "Магазин «Tommy Hilfiger»",
        note: "Продавец-консультант: 1С, приёмка и учёт товара, продажи, формирование скриптов продаж, создание методичек.",
        logo: "tommy",
      },
    ],

    casesTitle: "Кейс-чемпионаты и конкурсы",
    cases: [
      {
        years: "2025",
        place: "Кейс-чемпионат «Название»",
        note: "Финал. Оценка компании методом DCF и защита решения перед жюри.",
        logo: "",
      },
      {
        years: "2024",
        place: "Студенческая олимпиада по экономике",
        note: "Призёр регионального этапа.",
        logo: "",
      },
    ],

    skillsTitle: "Навыки",
    skillGroups: [
      {
        title: "Финансы и отчётность",
        items: ["Чтение отчётности МСФО", "Оценка методом DCF", "Мультипликаторы", "Финансовая модель", "Юнит-экономика", "Анализ отчётности РСБУ"],
      },
      {
        title: "Инструменты",
        items: ["Excel: сводные, ПРОСМОТРX, Power Query", "Google Таблицы", "Claude Code", "SQL — базовый", "Power BI", "PowerPoint"],
      },
      {
        title: "Языки",
        items: ["Русский — родной", "Английский — B2", "Французский — B2"],
      },
    ],

    projectsTitle: "Проекты",
    projectsNote: "Работы, к которым я причастен. Ссылки открываются в новой вкладке.",
    projects: [
      {
        name: "Оценка компании «Пример»",
        note: "DCF-модель и защита оценки. Excel + презентация.",
        url: "",
        logo: "",
      },
      {
        name: "Дашборд продаж",
        note: "Сводка по выручке и воронке для отдела продаж.",
        url: "",
        logo: "",
      },
    ],

    contactsTitle: "Контакты",
    contactsNote: "Открыт к предложениям и стажировкам. Пишите — отвечаю в течение дня.",

    footerNote: "Все права защищены",
    themeLabel: "Сменить тему",
    topLabel: "Наверх",
    modeLabel: "Режим",
    modeLight: "Оригинал",
    modeDark: "Негатив",
    photoLabel: "Фото",
    sheetLabel: "Лист",
    navLabel: "Разделы",
    skipLabel: "Перейти к содержанию",
  },


  /* ============================ ENGLISH ============================ */
  en: {
    metaTitle: "Kamil Valiullin — personal card",
    metaDescription: "Economics student. Education, experience, skills, projects and contacts.",

    greeting: "Nice to meet you!",
    kicker: "Portfolio · 2026",
    name: "Kamil Valiullin",

    statement: "Ready to take on any work in the field",
    tagline: "I really want to work and gain experience: I will take tasks of any level, pick up new things quickly and see them through.",

    aboutTitle: "About me",

    educationTitle: "Education",
    education: [
      {
        years: "2023 — 2024",
        place: "UKRTB College, Ufa",
        note: "Diploma programme: mobile app development and system administration.",
        logo: "ukrtb",
      },
      {
        years: "2026 — 2030",
        place: "Financial University under the Government of the Russian Federation",
        note: "Economics and Finance programme.",
        logo: "finuniver",
      },
    ],

    coursesTitle: "Courses and training",
    courses: [
      {
        years: "2025",
        place: "Financial modelling in Excel",
        note: "Building a model from scratch, scenarios, error checking.",
        logo: "",
      },
      {
        years: "2025",
        place: "How to read IFRS statements",
        note: "Balance sheet, P&L, cash flow statement.",
        logo: "",
      },
      {
        years: "2024",
        place: "Company valuation: DCF and multiples",
        note: "Discount rate, cash flow forecast, terminal value.",
        logo: "",
      },
    ],

    experienceTitle: "Work",
    experience: [
      {
        years: "2025 — now",
        place: "Startup Name",
        note: "Analyst intern: data extraction, weekly reporting, automation of routine Excel calculations.",
        logo: "",
      },
      {
        years: "2023 — 2024",
        place: "Retail Store Name",
        note: "Sales assistant: checkout, goods receiving and stock records, customer service.",
        logo: "",
      },
    ],

    casesTitle: "Case competitions",
    cases: [
      {
        years: "2025",
        place: "Case championship Name",
        note: "Finalist. DCF valuation of a company and defence before the jury.",
        logo: "",
      },
      {
        years: "2024",
        place: "Student economics olympiad",
        note: "Regional stage prize winner.",
        logo: "",
      },
    ],

    skillsTitle: "Skills",
    skillGroups: [
      {
        title: "Finance and reporting",
        items: ["Reading IFRS statements", "DCF valuation", "Trading multiples", "Financial modelling", "Unit economics", "Russian GAAP analysis"],
      },
      {
        title: "Tools",
        items: ["Excel: pivots, XLOOKUP, Power Query", "Google Sheets", "Claude Code", "SQL — basic", "Power BI", "PowerPoint"],
      },
      {
        title: "Languages",
        items: ["Russian — native", "English — B2", "French — B2"],
      },
    ],

    projectsTitle: "Projects",
    projectsNote: "Work I took part in. Links open in a new tab.",
    projects: [
      {
        name: "Valuation of Example Co.",
        note: "DCF model and valuation defence. Excel plus slide deck.",
        url: "",
        logo: "",
      },
      {
        name: "Sales dashboard",
        note: "Revenue and funnel overview for the sales team.",
        url: "",
        logo: "",
      },
    ],

    contactsTitle: "Contacts",
    contactsNote: "Open to offers and internships. Drop me a line — I usually reply the same day.",

    footerNote: "All rights reserved",
    themeLabel: "Switch theme",
    topLabel: "Back to top",
    modeLabel: "Mode",
    modeLight: "Original",
    modeDark: "Negative",
    photoLabel: "Photo",
    sheetLabel: "Sheet",
    navLabel: "Sections",
    skipLabel: "Skip to content",
  },


  /* ============================ FRANÇAIS ============================ */
  fr: {
    metaTitle: "Kamil Valiullin — carte de visite",
    metaDescription: "Étudiant en économie. Formation, expérience, compétences, projets et contacts.",

    greeting: "Enchanté !",
    kicker: "Portfolio · 2026",
    name: "Kamil Valiullin",

    statement: "Prêt à accepter tout travail dans le domaine",
    tagline: "J'ai vraiment envie de travailler et d'acquérir de l'expérience : je prends des tâches de tout niveau, j'apprends vite et je vais au bout.",

    aboutTitle: "À propos",

    educationTitle: "Établissements",
    education: [
      {
        years: "2023 — 2024",
        place: "Collège UKRTB, Oufa",
        note: "Formation diplômante : développement d'applications mobiles et administration système.",
        logo: "ukrtb",
      },
      {
        years: "2026 — 2030",
        place: "Université financière près le Gouvernement de la Fédération de Russie",
        note: "Filière « Économie et finance ».",
        logo: "finuniver",
      },
    ],

    coursesTitle: "Formations et stages",
    courses: [
      {
        years: "2025",
        place: "Modélisation financière sur Excel",
        note: "Construction d'un modèle, scénarios, contrôle des erreurs.",
        logo: "",
      },
      {
        years: "2025",
        place: "Lire les états financiers IFRS",
        note: "Bilan, compte de résultat, tableau des flux de trésorerie.",
        logo: "",
      },
      {
        years: "2024",
        place: "Évaluation d'entreprise : DCF et multiples",
        note: "Taux d'actualisation, prévision des flux, valeur terminale.",
        logo: "",
      },
    ],

    experienceTitle: "Emplois",
    experience: [
      {
        years: "2025 — auj.",
        place: "Startup « Nom »",
        note: "Stagiaire analyste : extraction de données, reporting hebdomadaire, automatisation des calculs sur Excel.",
        logo: "",
      },
      {
        years: "2023 — 2024",
        place: "Magasin « Nom »",
        note: "Vendeur-conseil : caisse, réception et suivi des stocks, relation client.",
        logo: "",
      },
    ],

    casesTitle: "Concours de cas",
    cases: [
      {
        years: "2025",
        place: "Championnat de cas « Nom »",
        note: "Finaliste. Évaluation d'une entreprise par DCF et soutenance devant le jury.",
        logo: "",
      },
      {
        years: "2024",
        place: "Olympiade étudiante d'économie",
        note: "Lauréat de l'étape régionale.",
        logo: "",
      },
    ],

    skillsTitle: "Compétences",
    skillGroups: [
      {
        title: "Finance et reporting",
        items: ["Lecture des états IFRS", "Évaluation par DCF", "Multiples de marché", "Modélisation financière", "Économie unitaire", "Analyse des états russes"],
      },
      {
        title: "Outils",
        items: ["Excel : TCD, RECHERCHEX, Power Query", "Google Sheets", "Claude Code", "SQL — base", "Power BI", "PowerPoint"],
      },
      {
        title: "Langues",
        items: ["Russe — langue maternelle", "Anglais — B2", "Français — B2"],
      },
    ],

    projectsTitle: "Projets",
    projectsNote: "Travaux auxquels j'ai participé. Les liens s'ouvrent dans un nouvel onglet.",
    projects: [
      {
        name: "Évaluation de la société « Exemple »",
        note: "Modèle DCF et soutenance. Excel et présentation.",
        url: "",
        logo: "",
      },
      {
        name: "Tableau de bord des ventes",
        note: "Suivi du chiffre d'affaires et du tunnel de vente.",
        url: "",
        logo: "",
      },
    ],

    contactsTitle: "Contacts",
    contactsNote: "Ouvert aux offres et aux stages. Écrivez-moi, je réponds dans la journée.",

    footerNote: "Tous droits réservés",
    themeLabel: "Changer de thème",
    topLabel: "Haut de page",
    modeLabel: "Mode",
    modeLight: "Original",
    modeDark: "Négatif",
    photoLabel: "Photo",
    sheetLabel: "Feuille",
    navLabel: "Sections",
    skipLabel: "Aller au contenu",
  },
};
