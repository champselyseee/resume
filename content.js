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
const PHOTO = "photo.webp";


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
    name: "Камиль Валиуллин, 17 лет",

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
         url: "https://www.open.edu/openlearn/profiles/zr768727"
      },
      {
        years: "2025,2026",
        place: "Вечерняя Школа МИЭФ",
        note: "Предметы - Оценка активов, управление Инвест портфелем, Эволюционная Экономика, Микроэкономика, Теория Игр. Дипломный проект - 2 место в общем зачёте",
        logo: "icef",
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
        years: "2024, 2025",
        place: "Кейс-чемпионат «Ключ» х 2",
        note: "Финал. Проведение cust-dev, product-market fit, построение финансовых моделей проектов, питч",
        logo: "key",
      },
      {
        years: "2026",
        place: "Олимпиады «Финатлон» и «Высшая проба Финансы»",
        note: "Призёр и Победитель",
        logo: "fin",
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
        name: "Собственный инвест портфель",
        note: "Диверсифицирован - ЦФА, валютные облигации, Облигации AAA-BB, Акции Компаний 1 и 2 эшелона. Торгую 3 года - с 14 лет. Фундаментальный, Технический, Мультипликаторный, DCF и МСФО анализы для принятия решений. >4000$ активов",
        url: "",
        logo: "",
      },
      {
        name: "Умная детская игрушка - МИИШКА",
        note: "Создание питчдека, питч перед инвесторами SBER500, финмодель проекта, операционная деятельность",
        url: "https://miishka.ru",
        logo: "",
      },
       {
        name: "Сайт-телеграм бот для подготовки к егэ",
        note: "База данных, фронт-енд, бек-енд, API интеграция. Проект создан с нуля - 251 проверка на 31.07.26",
        url: "https://expertege.valiullin.uk",
        logo: "bear",
      },
    ],

    contactsTitle: "Контакты",
    contactsNote: "Открыт к предложениям и стажировкам. Пишите в любом удобном мессенджере",

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
    name: "Kamil Valiullin, 17",

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
        place: "Financial University under the Government of the Russian Federation, Moscow",
        note: "Economics and Finance programme.",
        logo: "finuniver",
      },
    ],

    coursesTitle: "Courses and training",
    courses: [
      {
        years: "2026",
        place: "OpenUniversity",
        note: "Reading IFRS statements, multiples and company valuation, assessing a company's liquidity and solvency",
        logo: "opem",
        url: "https://www.open.edu/openlearn/profiles/zr768727",
      },
      {
        years: "2025,2026",
        place: "ICEF Evening School",
        note: "Subjects — asset valuation, investment portfolio management, evolutionary economics, microeconomics, game theory. Graduation project — 2nd place in the overall standings",
        logo: "icef",
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
        years: "2025",
        place: "LaunchBase startup",
        note: "Junior marketer: building marketing strategies, lead generation, cold sales, analysis and day-to-day operations in Excel",
        logo: "",
      },
      {
        years: "2025-2026",
        place: "Tommy Hilfiger store",
        note: "Sales assistant: 1C, goods receiving and stock records, sales, writing sales scripts, creating training guides.",
        logo: "tommy",
      },
    ],

    casesTitle: "Case competitions",
    cases: [
      {
        years: "2024, 2025",
        place: "«Klyuch» case championship × 2",
        note: "Finalist. Customer development, product-market fit, building financial models for the projects, pitching",
        logo: "key",
      },
      {
        years: "2026",
        place: "«Finatlon» and «Vysshaya Proba Finance» olympiads",
        note: "Prize winner and winner",
        logo: "fin",
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
        name: "My own investment portfolio",
        note: "Diversified — digital financial assets, FX bonds, AAA–BB bonds, blue-chip and second-tier equities. Trading for 3 years, since the age of 14. Fundamental, technical, multiples, DCF and IFRS analysis behind every decision. Over $4,000 in assets",
        url: "",
        logo: "",
      },
      {
        name: "MIISHKA — a smart toy for kids",
        note: "Building the pitch deck, pitching to SBER500 investors, the project's financial model, day-to-day operations",
        url: "https://miishka.ru",
        logo: "",
      },
      {
        name: "Website and Telegram bot for exam preparation",
        note: "Database, front end, back end, API integration. Built from scratch — 251 papers checked as of 31.07.26",
        url: "https://expertege.valiullin.uk",
        logo: "bear",
      },
    ],

    contactsTitle: "Contacts",
    contactsNote: "Open to offers and internships. Message me on whichever messenger suits you",

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
    name: "Kamil Valiullin, 17 ans",

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
        place: "Université financière près le Gouvernement de la Fédération de Russie, Moscou",
        note: "Filière « Économie et finance ».",
        logo: "finuniver",
      },
    ],

    coursesTitle: "Formations et stages",
    courses: [
      {
        years: "2026",
        place: "OpenUniversity",
        note: "Lecture des états financiers IFRS, multiples et évaluation d'entreprise, analyse de la liquidité et de la solvabilité",
        logo: "opem",
        url: "https://www.open.edu/openlearn/profiles/zr768727",
      },
      {
        years: "2025,2026",
        place: "École du soir de l'ICEF",
        note: "Matières — évaluation d'actifs, gestion de portefeuille d'investissement, économie évolutionniste, microéconomie, théorie des jeux. Projet de fin d'études — 2e place au classement général",
        logo: "icef",
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
        years: "2025",
        place: "Startup « LaunchBase »",
        note: "Marketeur junior : élaboration de stratégies marketing, génération de leads, vente à froid, analyse et gestion opérationnelle sur Excel",
        logo: "",
      },
      {
        years: "2025-2026",
        place: "Magasin « Tommy Hilfiger »",
        note: "Vendeur-conseil : 1C, réception et suivi des stocks, vente, rédaction de scripts de vente, création de guides.",
        logo: "tommy",
      },
    ],

    casesTitle: "Concours de cas",
    cases: [
      {
        years: "2024, 2025",
        place: "Championnat de cas « Kliutch » × 2",
        note: "Finaliste. Customer development, product-market fit, construction des modèles financiers des projets, pitch",
        logo: "key",
      },
      {
        years: "2026",
        place: "Olympiades « Finatlon » et « Vysshaya proba — Finance »",
        note: "Lauréat et vainqueur",
        logo: "fin",
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
        name: "Mon propre portefeuille d'investissement",
        note: "Diversifié — actifs financiers numériques, obligations en devises, obligations AAA–BB, actions de premier et de second rang. Je trade depuis 3 ans, depuis mes 14 ans. Analyses fondamentale, technique, par multiples, DCF et IFRS pour chaque décision. Plus de 4 000 $ d'actifs",
        url: "",
        logo: "",
      },
      {
        name: "MIISHKA — un jouet intelligent pour enfants",
        note: "Création du pitch deck, pitch devant les investisseurs SBER500, modèle financier du projet, activité opérationnelle",
        url: "https://miishka.ru",
        logo: "",
      },
      {
        name: "Site et bot Telegram pour la préparation à l'examen d'État",
        note: "Base de données, front-end, back-end, intégration d'API. Projet créé de zéro — 251 copies corrigées au 31.07.26",
        url: "https://expertege.valiullin.uk",
        logo: "bear",
      },
    ],

    contactsTitle: "Contacts",
    contactsNote: "Ouvert aux offres et aux stages. Écrivez-moi sur la messagerie de votre choix",

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
