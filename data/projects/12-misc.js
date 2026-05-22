/* Прочее, учебное и плохо классифицируемое.
   Поле category у каждого проекта определяет раздел на сайте —
   часть записей здесь относится к другим категориям. */
module.exports = [
  {
    id: "cipherlink", name: "CipherLink", aka: "Защищённый канал связи",
    category: "crypto", status: "done", year: 2026,
    langs: ["Python"], tags: ["Шифрование", "Клиент-сервер", "Безопасность"],
    short: {
      ru: "Защищённый канал передачи сообщений и файлов с клиент-серверной архитектурой.",
      en: "A secure channel for transmitting messages and files with a client-server architecture.",
      uk: "Захищений канал передачі повідомлень і файлів із клієнт-серверною архітектурою.",
    },
    body: {
      ru: [
        "CipherLink — защищённый канал связи: клиент и сервер, шифрование всего передаваемого, продуманная архитектура взаимодействия.",
        "Проект сделан основательно, не как набросок: к нему прилагается документация по структуре, аудит используемых форматов и набор тестов. Это видно по тому, насколько аккуратно разложены клиентская и серверная части.",
        "Один из моих заходов в тему защищённой передачи данных — наряду с ECDH-чатом и мессенджером shadowlink. Каждый такой проект добавляет понимания того, как строить безопасную связь.",
      ],
      en: [
        "CipherLink is a secure communication channel: a client and a server, encryption of everything transmitted, a thought-out interaction architecture.",
        "The project is done thoroughly, not as a sketch: it comes with structure documentation, an audit of the formats used and a test suite. You can see it in how tidily the client and server parts are laid out.",
        "One of my takes on secure data transfer — alongside the ECDH chat and the shadowlink messenger. Each such project adds to the understanding of how to build secure communication.",
      ],
      uk: [
        "CipherLink — захищений канал зв'язку: клієнт і сервер, шифрування переданого, продумана архітектура.",
        "Проєкт зроблено ґрунтовно: документація, аудит форматів, набір тестів.",
        "Один із моїх заходів у тему захищеної передачі даних.",
      ],
    },
    features: {
      ru: ["Защищённый канал для сообщений и файлов", "Клиент-серверная архитектура", "Шифрование всего передаваемого", "Документация структуры, аудит форматов, тесты"],
      en: ["A secure channel for messages and files", "A client-server architecture", "Encryption of everything transmitted", "Structure documentation, a format audit, tests"],
      uk: ["Захищений канал для повідомлень і файлів", "Клієнт-серверна архітектура", "Шифрування переданого", "Документація структури, аудит форматів, тести"],
    },
  },
  {
    id: "good-training-language", name: "Хороший Учебный Язык", aka: "ХУЯ",
    category: "emu", status: "done", year: 2026,
    langs: ["Rust", "fasm", "x86-64"], tags: ["Язык программирования", "Компилятор", "Форк", "Кириллический синтаксис"],
    github: "https://github.com/AlexMelanFromRingo/good_training_language_fork",
    short: {
      ru: "Учебный компилируемый язык с кириллическим синтаксисом — форк, который я отрефакторил и довёл до ума.",
      en: "An educational compiled language with Cyrillic syntax — a fork I refactored and finished.",
      uk: "Навчальна компільована мова з кириличним синтаксисом — форк, який я відрефакторив і довів до ладу.",
    },
    body: {
      ru: [
        "«Хороший Учебный Язык» (ХУЯ) — учебный компилируемый язык программирования, где код пишется кириллицей, а файлы имеют расширение .хуя. Идейно он вдохновлён Учебным Алгоритмическим Языком академика Ершова. Изначально это была первоапрельская шутка одного автора — но шутка, которая внезапно оказалась более-менее полноценным языком, на котором реально можно что-то писать.",
        "Я форкнул проект и довёл его до ума. Оригинал был написан второпях — с багами и незаконченными кусками, без нормальной документации. Моя работа здесь — рефакторинг кодовой базы и закрытие TODO, которые автор оставил незавершёнными. Это не моя разработка с нуля, но это полноценное доведение чужого черновика до рабочего состояния.",
        "Компилятор написан на Rust. Программу на ХУЯ можно скомпилировать через ассемблер fasm в нативный исполняемый файл под Linux x86-64 — либо запустить через интерпретатор промежуточного представления, и этот путь уже кроссплатформенный.",
      ],
      en: [
        "The 'Good Training Language' is an educational compiled programming language where code is written in Cyrillic and files use the .хуя extension. It's conceptually inspired by academician Ershov's Educational Algorithmic Language. It started as one author's April Fools' joke — but a joke that turned out to be a more or less complete language you can actually write in.",
        "I forked the project and brought it up to standard. The original was written in a hurry — with bugs and unfinished parts, no real documentation. My work here is refactoring the codebase and closing the TODOs the author left unfinished. It isn't my from-scratch creation, but it is a full job of taking someone's draft to a working state.",
        "The compiler is written in Rust. A program can be compiled via the fasm assembler into a native Linux x86-64 executable — or run through an intermediate-representation interpreter, which is the cross-platform path.",
      ],
      uk: [
        "«Хороша Навчальна Мова» — навчальна компільована мова програмування, де код пишеться кирилицею, а файли мають розширення .хуя. Ідейно вона натхненна Навчальною Алгоритмічною Мовою академіка Єршова. Спершу це був першоквітневий жарт одного автора — але жарт, що несподівано виявився більш-менш повноцінною мовою.",
        "Я форкнув проєкт і довів його до ладу. Оригінал було написано поспіхом — із багами й незавершеними частинами. Моя робота тут — рефакторинг кодової бази та закриття TODO, які автор лишив незавершеними.",
        "Компілятор написаний на Rust. Програму можна скомпілювати через асемблер fasm у нативний виконуваний файл під Linux x86-64 — або запустити через інтерпретатор проміжного представлення.",
      ],
    },
    features: {
      ru: ["Кириллический синтаксис, файлы с расширением .хуя", "Компиляция в нативный бинарник x86-64 через fasm (Linux)", "Кроссплатформенный интерпретатор промежуточного представления", "Компилятор написан на Rust", "Мой вклад: рефакторинг кодовой базы и завершение TODO оригинального автора"],
      en: ["Cyrillic syntax, files with the .хуя extension", "Compilation to a native x86-64 binary via fasm (Linux)", "Cross-platform intermediate-representation interpreter", "Compiler written in Rust", "My contribution: codebase refactoring and finishing the original author's TODOs"],
      uk: ["Кириличний синтаксис, файли з розширенням .хуя", "Компіляція в нативний бінарник x86-64 через fasm (Linux)", "Кросплатформений інтерпретатор проміжного представлення", "Компілятор написаний на Rust", "Мій внесок: рефакторинг кодової бази та завершення TODO оригінального автора"],
    },
  },
  {
    id: "obs-overlays", name: "OBS Scene Overlays", aka: "Оверлеи для стримов",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "CSS", "JavaScript"], tags: ["OBS", "Стриминг", "Анимация"],
    github: "https://github.com/AlexMelanFromRingo/OBSscene",
    short: {
      ru: "Набор анимированных оверлеев для OBS в стиле «цифрового мозга» — для стримов про ИИ и код.",
      en: "A set of animated 'digital brain' OBS overlays — for AI and coding streams.",
      uk: "Набір анімованих оверлеїв для OBS у стилі «цифрового мозку» — для стрімів про ШІ та код.",
    },
    body: {
      ru: [
        "Комплект оверлеев для стриминга через OBS, выдержанных в единой светлой теме «цифрового мозга»: экраны AFK и BRB, заставка «скоро начнём», экран завершения стрима, анимация скачущих нейронов, нижняя плашка с подписью.",
        "Технически каждый оверлей — это самостоятельная HTML-страница, которая добавляется в OBS как браузерный источник. К набору прилагается готовая к импорту коллекция сцен — поставил и стримишь.",
        "Сделано специально для стримов про ИИ и программирование — тему, которая мне близка и которой посвящён мой проект neuro-streamer.",
      ],
      en: [
        "A set of OBS streaming overlays kept in a single light 'digital brain' theme: AFK and BRB screens, a 'starting soon' splash, a stream-ending screen, a bouncing-neurons animation, a lower third with a caption.",
        "Technically each overlay is a self-contained HTML page added to OBS as a browser source. The set comes with a ready-to-import scene collection — install it and stream.",
        "Made specifically for AI and coding streams — a theme close to me and the subject of my neuro-streamer project.",
      ],
      uk: [
        "Комплект оверлеїв для стримінгу через OBS у єдиній світлій темі «цифрового мозку»: екрани AFK і BRB, заставка «скоро почнемо», екран завершення, анімація нейронів, нижня плашка.",
        "Кожен оверлей — самостійна HTML-сторінка як браузерне джерело. Є готова до імпорту колекція сцен.",
        "Зроблено для стрімів про ШІ та програмування.",
      ],
    },
    features: {
      ru: ["Экраны AFK, BRB, «скоро начнём», завершение стрима", "Анимация скачущих нейронов, нижняя плашка", "Каждый оверлей — HTML-страница как браузерный источник", "Готовая к импорту коллекция сцен OBS", "Единая светлая тема «цифрового мозга»"],
      en: ["AFK, BRB, 'starting soon' and stream-ending screens", "A bouncing-neurons animation, a lower third", "Each overlay an HTML page used as a browser source", "A ready-to-import OBS scene collection", "A single light 'digital brain' theme"],
      uk: ["Екрани AFK, BRB, «скоро почнемо», завершення стріму", "Анімація нейронів, нижня плашка", "Кожен оверлей — HTML-сторінка як браузерне джерело", "Готова до імпорту колекція сцен OBS", "Єдина світла тема «цифрового мозку»"],
    },
  },
  {
    id: "it-project-manager", name: "IT Project Manager", aka: "Менеджер проектов",
    category: "misc", status: "done", year: 2026,
    langs: ["C#"], tags: ["Управление проектами", "Приложение", ".NET"],
    short: {
      ru: "Приложение для управления IT-проектами: задачи, статусы, команда.",
      en: "An application for managing IT projects: tasks, statuses, team.",
      uk: "Застосунок для керування IT-проєктами: задачі, статуси, команда.",
    },
    body: {
      ru: [
        "Настольное приложение на C# для ведения IT-проектов: задачи и их статусы, распределение работы по людям, отслеживание хода проекта.",
        "Управление проектами — отдельная дисциплина, и полезно увидеть её с обеих сторон: и как разработчик, который выполняет задачи, и как тот, кто строит инструмент для управления этими задачами.",
        "Один из моих проектов в экосистеме .NET и C# — направлении, где я тоже хотел набрать практики.",
      ],
      en: [
        "A C# desktop application for running IT projects: tasks and their statuses, distributing work to people, tracking project progress.",
        "Project management is its own discipline, and it's useful to see it from both sides: as a developer who completes tasks, and as the one building the tool for managing those tasks.",
        "One of my projects in the .NET and C# ecosystem — a direction where I also wanted to gain practice.",
      ],
      uk: [
        "Настільний застосунок на C# для ведення IT-проєктів: задачі, статуси, розподіл роботи.",
        "Управління проєктами — окрема дисципліна, корисно побачити її з обох боків.",
        "Один із моїх проєктів в екосистемі .NET і C#.",
      ],
    },
    features: {
      ru: ["Управление задачами и их статусами", "Распределение работы по людям", "Отслеживание хода проекта", "Настольное приложение в экосистеме .NET / C#"],
      en: ["Managing tasks and their statuses", "Distributing work to people", "Tracking project progress", "A desktop app in the .NET / C# ecosystem"],
      uk: ["Керування задачами та їхніми статусами", "Розподіл роботи по людях", "Відстеження ходу проєкту", "Настільний застосунок в екосистемі .NET / C#"],
    },
  },
  {
    id: "p-np-roadmap", name: "P vs NP Roadmap", aka: "Граница сложности",
    category: "misc", status: "concept", year: 2026,
    langs: ["Python"], tags: ["Теория сложности", "Исследование", "Алгоритмы"],
    short: {
      ru: "Исследовательская карта вокруг знаменитой нерешённой проблемы P против NP.",
      en: "A research roadmap around the famous unsolved P versus NP problem.",
      uk: "Дослідницька карта навколо знаменитої нерозв'язаної проблеми P проти NP.",
    },
    body: {
      ru: [
        "P против NP — одна из главных нерешённых задач информатики и математики. Упрощённо: правда ли, что любую задачу, решение которой легко проверить, так же легко и найти. За её решение назначен приз в миллион долларов.",
        "Этот проект — попытка систематизировать подходы к проблеме: что про неё известно, какие пути к решению пробовали, где проходит граница изученного.",
        "Чисто исследовательская работа, без прикладного результата. Тут ценна сама постановка вопроса и масштаб задачи, к которой не подступиться нахрапом.",
      ],
      en: [
        "P versus NP is one of the central unsolved problems of computer science and mathematics. Simplified: is it true that any problem whose solution is easy to verify is just as easy to find. A million-dollar prize is set for its solution.",
        "This project is an attempt to systematize approaches to the problem: what's known about it, which paths to a solution have been tried, where the frontier of the studied lies.",
        "Pure research work, with no applied result. What's valuable here is the framing of the question itself and the scale of a problem you can't take by storm.",
      ],
      uk: [
        "P проти NP — одна з головних нерозв'язаних задач інформатики й математики. За її розв'язання призначено приз у мільйон доларів.",
        "Цей проєкт — спроба систематизувати підходи до проблеми та межу вивченого.",
        "Суто дослідницька робота — цінна сама постановка питання.",
      ],
    },
    features: {
      ru: ["Систематизация подходов к проблеме P vs NP", "Карта того, что про проблему известно", "Граница изученного в теории сложности", "Чисто исследовательская работа"],
      en: ["Systematizing approaches to the P vs NP problem", "A map of what's known about the problem", "The frontier of the studied in complexity theory", "Pure research work"],
      uk: ["Систематизація підходів до проблеми P vs NP", "Карта того, що про проблему відомо", "Межа вивченого в теорії складності", "Суто дослідницька робота"],
    },
  },
  {
    id: "primary-tests", name: "Primality Tests", aka: "Тесты простоты",
    category: "misc", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Математика", "Алгоритмы", "Простые числа"],
    short: {
      ru: "Реализация и сравнение алгоритмов проверки чисел на простоту.",
      en: "Implementation and comparison of algorithms for primality testing.",
      uk: "Реалізація та порівняння алгоритмів перевірки чисел на простоту.",
    },
    body: {
      ru: [
        "Проверить, простое ли число, можно по-разному. Наивный перебор делителей точен, но безнадёжно медленный на больших числах. Вероятностные тесты вроде Миллера-Рабина быстрые, но дают ответ с очень малой вероятностью ошибки.",
        "Этот проект собирает несколько таких алгоритмов в одном месте и сравнивает их по скорости и надёжности — наглядно показывает компромиссы между ними.",
        "Простые числа — фундамент криптографии (RSA, генерация ключей целиком на них держится), так что для меня эта тема не абстрактная математика, а прикладная база.",
      ],
      en: [
        "Checking whether a number is prime can be done in different ways. Naive trial division is exact but hopelessly slow on large numbers. Probabilistic tests like Miller-Rabin are fast but give an answer with a very small error probability.",
        "This project gathers several such algorithms in one place and compares them by speed and reliability — clearly showing the trade-offs between them.",
        "Prime numbers are the foundation of cryptography (RSA, key generation rest entirely on them), so for me this topic isn't abstract maths but an applied base.",
      ],
      uk: [
        "Перевірити, чи просте число, можна по-різному: наївний перебір точний, але повільний; ймовірнісні тести швидкі, але з малою ймовірністю помилки.",
        "Цей проєкт збирає кілька алгоритмів і порівнює їх за швидкістю та надійністю.",
        "Прості числа — фундамент криптографії, тож тема не абстрактна.",
      ],
    },
    features: {
      ru: ["Несколько алгоритмов проверки простоты", "Сравнение по скорости и надёжности", "Наглядные компромиссы между методами", "Прикладная база для криптографии"],
      en: ["Several primality-testing algorithms", "Comparison by speed and reliability", "Clear trade-offs between the methods", "An applied base for cryptography"],
      uk: ["Кілька алгоритмів перевірки простоти", "Порівняння за швидкістю та надійністю", "Наочні компроміси між методами", "Прикладна база для криптографії"],
    },
  },
  {
    id: "odd-bouquets", name: "Odd Bouquets", aka: "Комбинаторная задача",
    category: "misc", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Комбинаторика", "Алгоритмы", "Математика"],
    short: {
      ru: "Решение комбинаторной задачи о составлении букетов на Rust.",
      en: "A Rust solution to a combinatorial bouquet-arrangement problem.",
      uk: "Розв'язання комбінаторної задачі про складання букетів на Rust.",
    },
    body: {
      ru: [
        "Маленький, но изящный алгоритмический проект — решение комбинаторной задачи о составлении букетов.",
        "Это из тех задач, где главное не объём кода, а найти правильный способ думать. Когда подход выбран верно, решение получается короткое и красивое; когда нет — тонешь в переборе.",
        "Люблю такие вещи: чистая логика, конкретная задача, никакого лишнего обвеса вокруг.",
      ],
      en: [
        "A small but elegant algorithmic project — solving a combinatorial problem about arranging bouquets.",
        "It's one of those tasks where what matters isn't the volume of code but finding the right way to think. When the approach is chosen correctly, the solution turns out short and beautiful; when not, you drown in brute force.",
        "I like things like this: pure logic, a concrete task, no unnecessary scaffolding around it.",
      ],
      uk: [
        "Маленький, але витончений алгоритмічний проєкт — розв'язання комбінаторної задачі про букети.",
        "Із тих задач, де головне — знайти правильний спосіб думати.",
        "Люблю такі речі: чиста логіка, конкретна задача.",
      ],
    },
    features: {
      ru: ["Решение комбинаторной задачи о букетах", "Акцент на правильном способе думать", "Короткое и изящное решение на Rust", "Чистая алгоритмическая логика"],
      en: ["Solving a combinatorial bouquet problem", "A focus on the right way to think", "A short, elegant Rust solution", "Pure algorithmic logic"],
      uk: ["Розв'язання комбінаторної задачі про букети", "Акцент на правильному способі думати", "Коротке й витончене рішення на Rust", "Чиста алгоритмічна логіка"],
    },
  },
  {
    id: "sd-localization", name: "SD WebUI Localization", aka: "Локализация RU/UK",
    category: "misc", status: "done", year: 2026,
    langs: ["Python"], tags: ["Локализация", "Stable Diffusion", "Перевод"],
    github: "https://github.com/AlexMelanFromRingo/sd-webui-localization-ru-uk",
    short: {
      ru: "Русская и украинская локализация интерфейса Stable Diffusion WebUI.",
      en: "Russian and Ukrainian localization of the Stable Diffusion WebUI interface.",
      uk: "Російська та українська локалізація інтерфейсу Stable Diffusion WebUI.",
    },
    body: {
      ru: [
        "Stable Diffusion WebUI (AUTOMATIC1111) — самый популярный интерфейс для генерации изображений нейросетями. Но он англоязычный, а в нём много специфических терминов.",
        "Я сделал перевод его интерфейса на русский и украинский — это не разовая фраза, а аккуратная работа со всеми элементами интерфейса и сохранением смысла технических терминов.",
        "Локализация — это вклад в комьюнити: инструмент становится доступнее тем, кому английский мешает разобраться. Маленькая, но полезная работа для других людей.",
      ],
      en: [
        "Stable Diffusion WebUI (AUTOMATIC1111) is the most popular interface for neural image generation. But it's English-only, and it has a lot of specific terms.",
        "I made a translation of its interface into Russian and Ukrainian — not a one-off phrase but careful work with all the interface elements and preserving the meaning of technical terms.",
        "Localization is a contribution to the community: the tool becomes more accessible to those for whom English is a barrier to understanding. Small but useful work for other people.",
      ],
      uk: [
        "Stable Diffusion WebUI (AUTOMATIC1111) — найпопулярніший інтерфейс для генерації зображень нейромережами, але англомовний.",
        "Я зробив переклад його інтерфейсу російською та українською — акуратна робота з усіма елементами.",
        "Локалізація — це внесок у спільноту.",
      ],
    },
    features: {
      ru: ["Локализация Stable Diffusion WebUI на RU и UK", "Аккуратная работа со всеми элементами интерфейса", "Сохранение смысла технических терминов", "Вклад в комьюнити — доступность инструмента"],
      en: ["Localization of Stable Diffusion WebUI into RU and UK", "Careful work with all interface elements", "Preserving the meaning of technical terms", "A community contribution — tool accessibility"],
      uk: ["Локалізація Stable Diffusion WebUI на RU та UK", "Акуратна робота з усіма елементами інтерфейсу", "Збереження сенсу технічних термінів", "Внесок у спільноту — доступність інструмента"],
    },
  },
  {
    id: "anya-lab", name: "Laboratory Work", aka: "Лабораторные на C++",
    category: "misc", status: "done", year: 2026,
    langs: ["C++"], tags: ["Учебное", "C++", "Алгоритмы"],
    short: {
      ru: "Сборник лабораторных работ на C++ с реализацией учебных алгоритмов.",
      en: "A collection of C++ lab assignments implementing educational algorithms.",
      uk: "Збірка лабораторних робіт на C++ із реалізацією навчальних алгоритмів.",
    },
    body: {
      ru: [
        "Набор лабораторных работ на C++ — учебные алгоритмы и задачи разной сложности.",
        "Помимо собственно решений, для меня это был способ держать руку на C++ — языке, который никуда не девается, остаётся фундаментом системного и высокопроизводительного кода, и которым важно владеть уверенно.",
        "Учебные работы — это рутина, но именно та рутина, на которой держится база. Без неё сложные проекты не на чем строить.",
      ],
      en: [
        "A set of C++ lab assignments — educational algorithms and tasks of varying difficulty.",
        "Beyond the solutions themselves, for me this was a way to keep my hand in C++ — a language that isn't going anywhere, remains the foundation of systems and high-performance code, and is important to know confidently.",
        "Lab work is routine, but exactly the routine the fundamentals rest on. Without it there's nothing to build complex projects on.",
      ],
      uk: [
        "Набір лабораторних робіт на C++ — навчальні алгоритми й задачі різної складності.",
        "Для мене це був спосіб тримати руку на C++ — мові, що лишається фундаментом системного коду.",
        "Навчальні роботи — це рутина, на якій тримається база.",
      ],
    },
    features: {
      ru: ["Сборник лабораторных работ на C++", "Учебные алгоритмы разной сложности", "Поддержание уверенного владения C++", "Рутина, на которой держится база"],
      en: ["A collection of C++ lab assignments", "Educational algorithms of varying difficulty", "Keeping a confident grasp of C++", "The routine the fundamentals rest on"],
      uk: ["Збірка лабораторних робіт на C++", "Навчальні алгоритми різної складності", "Підтримання впевненого володіння C++", "Рутина, на якій тримається база"],
    },
  },
  {
    id: "dig-die-analysis", name: "Game Analysis", aka: "Анализ игровой механики",
    category: "misc", status: "done", year: 2026,
    langs: ["C#"], tags: ["Анализ данных", "Игры", "Статистика"],
    short: {
      ru: "Анализ игровой механики и статистики на основе игровых данных.",
      en: "Analysis of game mechanics and statistics based on gameplay data.",
      uk: "Аналіз ігрової механіки та статистики на основі ігрових даних.",
    },
    body: {
      ru: [
        "Проект по анализу игровой механики: собираются данные о ходе игры, и в них ищутся закономерности — что работает, что нет, насколько сбалансированы механики.",
        "Это про взгляд на игру не глазами игрока, а глазами аналитика: цифры вместо ощущений. То, что кажется «слишком сильным» на эмоциях, можно подтвердить или опровергнуть статистикой.",
        "Сделано на C#. Данные есть везде, и из игровых при правильном вопросе тоже можно вытащить интересные выводы.",
      ],
      en: [
        "A project analysing game mechanics: data about the course of a game is collected, and patterns are searched for in it — what works, what doesn't, how balanced the mechanics are.",
        "It's about looking at a game not through a player's eyes but an analyst's: numbers instead of feelings. What seems 'too strong' emotionally can be confirmed or refuted with statistics.",
        "Built in C#. Data is everywhere, and gameplay data too, with the right question, can yield interesting conclusions.",
      ],
      uk: [
        "Проєкт з аналізу ігрової механіки: збираються дані про хід гри, у них шукаються закономірності.",
        "Це погляд на гру очима аналітика: цифри замість відчуттів.",
        "Зроблено на C#. Дані є всюди.",
      ],
    },
    features: {
      ru: ["Сбор данных о ходе игры", "Поиск закономерностей и оценка баланса", "Взгляд на игру глазами аналитика", "Реализация на C#"],
      en: ["Collecting data about the course of a game", "Finding patterns and assessing balance", "Looking at a game through an analyst's eyes", "Implemented in C#"],
      uk: ["Збір даних про хід гри", "Пошук закономірностей та оцінка балансу", "Погляд на гру очима аналітика", "Реалізація на C#"],
    },
  },
  {
    id: "gpu-computings", name: "GPU Computing", aka: "Вычисления на видеокарте",
    category: "misc", status: "done", year: 2024,
    langs: ["Python", "CUDA"], tags: ["GPU", "Параллельные вычисления", "CUDA"],
    short: {
      ru: "Эксперименты с параллельными вычислениями на GPU — хэши и матрицы.",
      en: "Experiments with parallel computation on the GPU — hashes and matrices.",
      uk: "Експерименти з паралельними обчисленнями на GPU — хеші та матриці.",
    },
    body: {
      ru: [
        "Видеокарта — это тысячи маленьких ядер. Если задачу удаётся разбить на множество одинаковых независимых кусочков, она ускоряется в десятки и сотни раз по сравнению с процессором.",
        "В этом проекте я экспериментировал с вычислениями на GPU через CUDA: хэширование Blake2s, операции с матрицами — то, что хорошо ложится на параллельную модель.",
        "Эти ранние опыты потом окупились: на их фундаменте выросли blakeout-gpu (GPU-майнинг), BIP39-GPU и другие мои проекты с CUDA и OpenCL.",
      ],
      en: [
        "A graphics card is thousands of small cores. If a task can be split into many identical independent pieces, it speeds up tens and hundreds of times compared to a CPU.",
        "In this project I experimented with GPU computation via CUDA: Blake2s hashing, matrix operations — things that map well onto the parallel model.",
        "These early experiments later paid off: blakeout-gpu (GPU mining), BIP39-GPU and my other CUDA and OpenCL projects grew on their foundation.",
      ],
      uk: [
        "Відеокарта — це тисячі маленьких ядер. Якщо задачу розбити на однакові незалежні шматки, вона прискорюється вдесятеро й більше.",
        "Тут я експериментував з обчисленнями на GPU через CUDA: хешування Blake2s, операції з матрицями.",
        "Ці досліди потім окупилися в blakeout-gpu, BIP39-GPU та інших проєктах.",
      ],
    },
    features: {
      ru: ["Параллельные вычисления на GPU через CUDA", "Хэширование Blake2s и операции с матрицами", "Ускорение в десятки и сотни раз против CPU", "Фундамент для blakeout-gpu и BIP39-GPU"],
      en: ["Parallel GPU computation via CUDA", "Blake2s hashing and matrix operations", "Tens-to-hundreds-fold speedup over CPU", "A foundation for blakeout-gpu and BIP39-GPU"],
      uk: ["Паралельні обчислення на GPU через CUDA", "Хешування Blake2s та операції з матрицями", "Прискорення в десятки й сотні разів проти CPU", "Фундамент для blakeout-gpu і BIP39-GPU"],
    },
  },
  {
    id: "python-gui", name: "Python GUI Experiments", aka: "Эксперименты с интерфейсами",
    category: "misc", status: "done", year: 2023,
    langs: ["Python"], tags: ["GUI", "Tkinter", "Qt"],
    short: {
      ru: "Серия экспериментов с построением графических интерфейсов на Python.",
      en: "A series of experiments with building graphical interfaces in Python.",
      uk: "Серія експериментів із побудовою графічних інтерфейсів на Python.",
    },
    body: {
      ru: [
        "Несколько проектов, где я осваивал создание десктопных интерфейсов на Python — пробовал и Tkinter, и Qt, и визуальную сборку форм.",
        "Это был переход от голых скриптов, которые работают в консоли, к программам с окнами, кнопками и полями — со своей логикой событий и состояний.",
        "Из этих опытов потом вырос отдельный инструмент VisualConvert, который автоматизирует перевод визуальных UI-макетов в код.",
      ],
      en: [
        "Several projects where I picked up building desktop interfaces in Python — I tried Tkinter, Qt and visual form assembly.",
        "It was the transition from bare scripts that run in the console to programs with windows, buttons and fields — with their own event and state logic.",
        "The separate VisualConvert tool, which automates turning visual UI layouts into code, later grew from these experiments.",
      ],
      uk: [
        "Кілька проєктів, де я освоював створення десктопних інтерфейсів на Python — Tkinter, Qt, візуальна збірка форм.",
        "Це був перехід від голих скриптів до програм із вікнами та кнопками.",
        "Із цих дослідів виріс інструмент VisualConvert.",
      ],
    },
    features: {
      ru: ["Освоение GUI на Python: Tkinter и Qt", "Переход от консольных скриптов к программам с окнами", "Логика событий и состояний интерфейса", "Из этого вырос инструмент VisualConvert"],
      en: ["Learning Python GUI: Tkinter and Qt", "From console scripts to windowed programs", "Interface event and state logic", "The VisualConvert tool grew from this"],
      uk: ["Освоєння GUI на Python: Tkinter і Qt", "Перехід від консольних скриптів до програм із вікнами", "Логіка подій і станів інтерфейсу", "Із цього виріс інструмент VisualConvert"],
    },
  },
  {
    id: "app-todo", name: "TODO App", aka: "Веб-приложение задач",
    category: "misc", status: "done", year: 2023,
    langs: ["Python", "Flask"], tags: ["Flask", "Веб", "База данных"],
    short: {
      ru: "Веб-приложение для управления задачами на Flask с базой данных.",
      en: "A Flask web app for task management with a database.",
      uk: "Вебзастосунок для керування задачами на Flask із базою даних.",
    },
    body: {
      ru: [
        "Полноценное веб-приложение списка задач: добавление, изменение статусов, хранение в базе данных, миграции схемы.",
        "Список дел — классический учебный проект по веб-разработке именно потому, что он маленький, но затрагивает всё сразу: маршрутизацию, шаблоны, формы, работу с базой, структуру приложения.",
        "Здесь я на практике связал все части воедино — Flask, маршруты, базу данных — и понял, как из них собирается рабочее веб-приложение.",
      ],
      en: [
        "A full to-do web app: adding tasks, changing statuses, storage in a database, schema migrations.",
        "A to-do list is a classic web-development learning project precisely because it's small but touches everything at once: routing, templates, forms, database work, app structure.",
        "Here I tied all the parts together in practice — Flask, routes, the database — and understood how a working web app is assembled from them.",
      ],
      uk: [
        "Повноцінний вебзастосунок списку задач: додавання, статуси, зберігання в базі, міграції.",
        "Список справ — класичний навчальний проєкт: маленький, але торкається всього одразу.",
        "Тут я на практиці зв'язав усі частини воєдино — Flask, маршрути, базу даних.",
      ],
    },
    features: {
      ru: ["Веб-приложение списка задач на Flask", "Добавление задач и смена статусов", "Хранение в базе данных, миграции схемы", "Связка маршрутов, шаблонов, форм и базы"],
      en: ["A Flask to-do-list web app", "Adding tasks and changing statuses", "Database storage, schema migrations", "Tying together routes, templates, forms and the database"],
      uk: ["Вебзастосунок списку задач на Flask", "Додавання задач і зміна статусів", "Зберігання в базі, міграції схеми", "Зв'язка маршрутів, шаблонів, форм і бази"],
    },
  },
  {
    id: "first-db", name: "First Database", aka: "Первые опыты с БД",
    category: "misc", status: "learning", year: 2021,
    langs: ["Python"], tags: ["База данных", "SQLite", "Учебное"],
    short: {
      ru: "Первые опыты работы с базами данных — хранение и запросы.",
      en: "First experiences with databases — storage and queries.",
      uk: "Перші досліди роботи з базами даних — зберігання та запити.",
    },
    body: {
      ru: [
        "Ранние эксперименты с базами данных: как сохранять данные надолго, как доставать их обратно запросами, как связать всё это с программой.",
        "До баз данных программа всё забывает после закрытия. После них появляется память, которая переживает перезапуск — и это меняет то, какие программы вообще можно писать.",
        "Базы лежат в основе почти всего серьёзного софта, и именно с этих первых опытов начиналось их понимание. Маленький, но важный камень в фундаменте.",
      ],
      en: [
        "Early experiments with databases: how to store data for the long term, how to retrieve it back with queries, how to tie it all into a program.",
        "Before databases a program forgets everything after it closes. After them there's memory that survives a restart — and that changes what kinds of programs you can write at all.",
        "Databases underpin almost all serious software, and understanding them started with exactly these first experiments. A small but important stone in the foundation.",
      ],
      uk: [
        "Ранні експерименти з базами даних: як зберігати дані надовго, як діставати їх запитами.",
        "До баз даних програма все забуває після закриття. Після них з'являється пам'ять, що переживає перезапуск.",
        "Маленький, але важливий камінь у фундаменті.",
      ],
    },
    features: {
      ru: ["Первые опыты с хранением данных в БД", "Запросы и извлечение данных", "Связка базы данных с программой", "Ранний камень в фундаменте навыков"],
      en: ["First experiences with storing data in a database", "Queries and data retrieval", "Tying a database to a program", "An early stone in the foundation of skills"],
      uk: ["Перші досліди зі зберіганням даних у БД", "Запити та вилучення даних", "Зв'язка бази даних із програмою", "Ранній камінь у фундаменті навичок"],
    },
  },
  {
    id: "first-parser", name: "First Parser", aka: "Первый парсер",
    category: "misc", status: "learning", year: 2021,
    langs: ["Python"], tags: ["Парсинг", "Учебное", "Веб"],
    short: {
      ru: "Первые опыты с парсингом данных из интернета.",
      en: "First experiences with parsing data from the internet.",
      uk: "Перші досліди з парсингом даних з інтернету.",
    },
    body: {
      ru: [
        "С чего-то начинался мой парсинг — здесь именно с этого. Ранние скрипты, которые забирают данные с веб-страниц и раскладывают их в удобный вид.",
        "Наивно по исполнению, но в этом и ценность как стартовой точки: именно отсюда выросли все мои поздние парсеры, боты и инструменты сбора данных.",
        "Оставляю на сайте честно — видно, с чего всё начиналось, и насколько далеко это потом ушло.",
      ],
      en: [
        "My scraping started somewhere — right here. Early scripts that pull data from web pages and arrange it into a usable form.",
        "Naive in execution, but that's exactly its value as a starting point: all my later parsers, bots and data-collection tools grew from here.",
        "I keep it on the site honestly — you can see where it all began and how far it later went.",
      ],
      uk: [
        "Із чогось починався мій парсинг — саме з цього. Ранні скрипти, що забирають дані з вебсторінок.",
        "Наївно за виконанням, але саме звідси виросли всі мої пізні парсери й боти.",
        "Лишаю на сайті чесно — видно, з чого все починалося.",
      ],
    },
    features: {
      ru: ["Ранние скрипты парсинга веб-страниц", "Извлечение данных и приведение к удобному виду", "Стартовая точка всех поздних парсеров", "Оставлен честно как часть истории"],
      en: ["Early web-page scraping scripts", "Extracting data and arranging it usefully", "The starting point of all later parsers", "Kept honestly as part of the history"],
      uk: ["Ранні скрипти парсингу вебсторінок", "Вилучення даних і приведення до зручного вигляду", "Стартова точка всіх пізніх парсерів", "Лишений чесно як частина історії"],
    },
  },
  {
    id: "language-change", name: "Language Change", aka: "Смена раскладки текста",
    category: "misc", status: "done", year: 2022,
    langs: ["Python"], tags: ["Текст", "Утилита"],
    short: {
      ru: "Утилита для исправления текста, набранного не в той раскладке.",
      en: "A utility for fixing text typed in the wrong keyboard layout.",
      uk: "Утиліта для виправлення тексту, набраного не в тій розкладці.",
    },
    body: {
      ru: [
        "Утилита, которая переводит текст между раскладками клавиатуры: «руддщ» снова становится «hello», а набранная не на том языке фраза — читаемой.",
        "Маленькая бытовая мелочь, но из тех, что реально экономят нервы — каждый сталкивался с тем, что начал печатать, не глядя, и получил бессмыслицу.",
        "Позже эта идея переросла в более продвинутый rust-layout-switcher, где добавилось и удобное переключение самой раскладки.",
      ],
      en: [
        "A utility that converts text between keyboard layouts: 'руддщ' becomes 'hello' again, and a phrase typed in the wrong language becomes readable.",
        "A small everyday thing, but of the kind that genuinely saves your nerves — everyone has started typing without looking and got gibberish.",
        "This idea later grew into the more advanced rust-layout-switcher, which also added convenient switching of the layout itself.",
      ],
      uk: [
        "Утиліта, що перекладає текст між розкладками: «руддщ» знову стає «hello».",
        "Маленька побутова дрібниця, але з тих, що економлять нерви.",
        "Згодом ця ідея переросла в просунутіший rust-layout-switcher.",
      ],
    },
    features: {
      ru: ["Перевод текста между раскладками клавиатуры", "Исправление набранного не на том языке", "Бытовая утилита, экономящая нервы", "Переросла в rust-layout-switcher"],
      en: ["Converting text between keyboard layouts", "Fixing text typed in the wrong language", "An everyday utility that saves your nerves", "Grew into rust-layout-switcher"],
      uk: ["Переклад тексту між розкладками клавіатури", "Виправлення набраного не тією мовою", "Побутова утиліта, що економить нерви", "Переросла в rust-layout-switcher"],
    },
  },
  {
    id: "soundsplit", name: "SoundSplit", aka: "Извлечение нот из звука",
    category: "misc", status: "done", year: 2024,
    langs: ["Python"], tags: ["Аудио", "Обработка звука", "Музыка"],
    short: {
      ru: "Инструмент для извлечения нот из аудио и воспроизведения их через простой синтезатор.",
      en: "A tool for extracting notes from audio and playing them through a simple synthesizer.",
      uk: "Інструмент для вилучення нот з аудіо та відтворення їх через простий синтезатор.",
    },
    body: {
      ru: [
        "SoundSplit раскладывает звук на ноты: анализирует аудиозапись, определяет звучащие в ней частоты и достаёт из них мелодию.",
        "Есть и обратная часть — простой синтезатор-«пищалка», который проигрывает извлечённую мелодию заново, уже как набор чистых тонов.",
        "Проект на стыке цифровой обработки сигналов и музыки — тема, к которой приятно возвращаться: тут математика частот превращается во что-то, что можно услышать.",
      ],
      en: [
        "SoundSplit breaks sound down into notes: it analyses an audio recording, detects the frequencies sounding in it and extracts the melody from them.",
        "There's a reverse part too — a simple beeper synthesizer that plays the extracted melody back, now as a set of clean tones.",
        "A project at the intersection of digital signal processing and music — a theme pleasant to return to: here the maths of frequencies turns into something you can hear.",
      ],
      uk: [
        "SoundSplit розкладає звук на ноти: аналізує аудіо, визначає частоти й дістає мелодію.",
        "Є й зворотна частина — простий синтезатор-«пищалка».",
        "Проєкт на стику обробки сигналів і музики.",
      ],
    },
    features: {
      ru: ["Извлечение нот из аудиозаписи", "Анализ звучащих частот", "Простой синтезатор для воспроизведения мелодии", "Стык обработки сигналов и музыки"],
      en: ["Extracting notes from an audio recording", "Analysis of the sounding frequencies", "A simple synthesizer to play the melody back", "An intersection of signal processing and music"],
      uk: ["Вилучення нот з аудіозапису", "Аналіз звучних частот", "Простий синтезатор для відтворення мелодії", "Стик обробки сигналів і музики"],
    },
  },
];
