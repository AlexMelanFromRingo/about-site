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
      ru: ["CipherLink — защищённый канал связи: клиент и сервер, шифрование передаваемого, продуманная архитектура. Проект сделан основательно — с документацией по структуре, аудитом форматов и набором тестов.", "Один из моих заходов в тему защищённой передачи данных, рядом с ECDH-чатом и мессенджером shadowlink."],
      en: ["CipherLink is a secure communication channel: a client and a server, encryption of what's transmitted, a thought-out architecture. The project is done thoroughly — with structure documentation, a format audit and a test suite.", "One of my takes on secure data transfer, alongside the ECDH chat and the shadowlink messenger."],
      uk: ["CipherLink — захищений канал зв'язку: клієнт і сервер, шифрування переданого, продумана архітектура. Проєкт зроблено ґрунтовно — з документацією, аудитом форматів і набором тестів.", "Один із моїх заходів у тему захищеної передачі даних."],
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
      ru: ["Настольное приложение на C# для ведения IT-проектов: задачи, их статусы, распределение по людям. Управление проектами — отдельная дисциплина, и полезно увидеть её с обеих сторон: и как разработчик, и как тот, кто строит инструмент для управления.", "Один из моих проектов в экосистеме .NET и C#."],
      en: ["A C# desktop application for running IT projects: tasks, their statuses, assignment to people. Project management is its own discipline, and it's useful to see it from both sides — as a developer and as the one building the management tool.", "One of my projects in the .NET and C# ecosystem."],
      uk: ["Настільний застосунок на C# для ведення IT-проєктів: задачі, їхні статуси, розподіл по людях.", "Один із моїх проєктів в екосистемі .NET і C#."],
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
      ru: ["P против NP — одна из главных нерешённых задач информатики и математики, за её решение назначен миллион долларов. Этот проект — попытка систематизировать подходы к проблеме и границу того, что про неё известно.", "Чисто исследовательская работа: тут интересна сама постановка вопроса и масштаб задачи."],
      en: ["P versus NP is one of the central unsolved problems of computer science and mathematics, with a million-dollar prize for its solution. This project is an attempt to systematize approaches to the problem and the frontier of what's known about it.", "Pure research work: the interest here is in the question itself and the scale of the problem."],
      uk: ["P проти NP — одна з головних нерозв'язаних задач інформатики й математики. Цей проєкт — спроба систематизувати підходи до проблеми та межу того, що про неї відомо.", "Суто дослідницька робота."],
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
      ru: ["Проверить, простое ли число, можно по-разному — от наивного перебора до вероятностных тестов вроде Миллера-Рабина. Этот проект собирает несколько алгоритмов и сравнивает их по скорости и надёжности.", "Простые числа — фундамент криптографии, так что тема для меня не абстрактная."],
      en: ["Checking whether a number is prime can be done in different ways — from naive trial division to probabilistic tests like Miller-Rabin. This project gathers several algorithms and compares them by speed and reliability.", "Prime numbers are the foundation of cryptography, so the topic isn't abstract for me."],
      uk: ["Перевірити, чи просте число, можна по-різному — від наївного перебору до ймовірнісних тестів на кшталт Міллера-Рабіна. Цей проєкт збирає кілька алгоритмів і порівнює їх.", "Прості числа — фундамент криптографії."],
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
      ru: ["Маленький, но изящный алгоритмический проект: решение комбинаторной задачи о букетах. Из тех задач, где главное — найти правильный способ думать, а код потом получается коротким.", "Люблю такие вещи: чистая логика, никакого лишнего обвеса."],
      en: ["A small but elegant algorithmic project: solving a combinatorial problem about bouquets. One of those tasks where the main thing is finding the right way to think, and the code then turns out short.", "I like things like this: pure logic, no unnecessary scaffolding."],
      uk: ["Маленький, але витончений алгоритмічний проєкт: розв'язання комбінаторної задачі про букети. Із тих задач, де головне — знайти правильний спосіб думати.", "Люблю такі речі: чиста логіка, жодного зайвого обвісу."],
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
      ru: ["Stable Diffusion WebUI (AUTOMATIC1111) — самый популярный интерфейс для генерации изображений нейросетями, но англоязычный. Я сделал перевод его интерфейса на русский и украинский.", "Локализация — это вклад в комьюнити: инструмент становится доступнее тем, кому английский мешает."],
      en: ["Stable Diffusion WebUI (AUTOMATIC1111) is the most popular interface for neural image generation, but it's English-only. I made a translation of its interface into Russian and Ukrainian.", "Localization is a contribution to the community: the tool becomes more accessible to those for whom English is a barrier."],
      uk: ["Stable Diffusion WebUI (AUTOMATIC1111) — найпопулярніший інтерфейс для генерації зображень нейромережами, але англомовний. Я зробив переклад його інтерфейсу російською та українською.", "Локалізація — це внесок у спільноту."],
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
      ru: ["Набор лабораторных работ на C++ — учебные алгоритмы и задачи. Помогал с ними и заодно держал руку на C++, языке, который никуда не девается и которым важно владеть.", "Учебные работы — это рутина, но рутина, на которой держится база."],
      en: ["A set of C++ lab assignments — educational algorithms and tasks. I helped with them and kept my hand in C++, a language that isn't going anywhere and is important to know.", "Lab work is routine, but the routine that the fundamentals rest on."],
      uk: ["Набір лабораторних робіт на C++ — навчальні алгоритми й задачі. Допомагав із ними й заразом тримав руку на C++.", "Навчальні роботи — це рутина, але рутина, на якій тримається база."],
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
      ru: ["Проект по анализу игровой механики: сбор данных о ходе игры и поиск в них закономерностей — что работает, что нет, где баланс. Это про взгляд на игру не как игрок, а как аналитик.", "Данные есть везде, и из игровых тоже можно вытащить интересные выводы."],
      en: ["A project analysing game mechanics: collecting data about how a game unfolds and finding patterns in it — what works, what doesn't, where the balance lies. It's about looking at a game not as a player but as an analyst.", "Data is everywhere, and gameplay data too can yield interesting conclusions."],
      uk: ["Проєкт з аналізу ігрової механіки: збір даних про хід гри та пошук у них закономірностей.", "Дані є всюди, і з ігрових теж можна витягти цікаві висновки."],
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
      ru: ["Видеокарта — это тысячи маленьких ядер, и если задачу удаётся распараллелить, она ускоряется в десятки раз. Здесь я экспериментировал с вычислениями на GPU: хэширование Blake2s, операции с матрицами.", "Эти опыты потом окупились в blakeout-gpu, BIP39-GPU и других проектах с CUDA и OpenCL."],
      en: ["A GPU is thousands of small cores, and if a task can be parallelised it speeds up tenfold. Here I experimented with GPU computation: Blake2s hashing, matrix operations.", "These experiments later paid off in blakeout-gpu, BIP39-GPU and other CUDA and OpenCL projects."],
      uk: ["Відеокарта — це тисячі маленьких ядер, і якщо задачу вдається розпаралелити, вона прискорюється вдесятеро. Тут я експериментував з обчисленнями на GPU.", "Ці досліди потім окупилися в blakeout-gpu, BIP39-GPU та інших проєктах."],
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
      ru: ["Несколько проектов, где я осваивал создание десктопных интерфейсов на Python — Tkinter, Qt, визуальная сборка форм. От голых скриптов к программам с окнами и кнопками.", "Из этих опытов потом вырос инструмент VisualConvert для перевода UI-макетов в код."],
      en: ["Several projects where I picked up building desktop interfaces in Python — Tkinter, Qt, visual form assembly. From bare scripts to programs with windows and buttons.", "The VisualConvert tool for turning UI layouts into code later grew from these experiments."],
      uk: ["Кілька проєктів, де я освоював створення десктопних інтерфейсів на Python — Tkinter, Qt, візуальна збірка форм.", "Із цих дослідів потім виріс інструмент VisualConvert."],
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
      ru: ["Полноценное веб-приложение списка задач: добавление, статусы, хранение в базе данных, миграции. Список дел — классический проект, на котором собираешь воедино все части веб-разработки.", "Здесь я разбирался с Flask, маршрутизацией и работой с базой из веб-приложения."],
      en: ["A full to-do web app: adding tasks, statuses, database storage, migrations. A to-do list is the classic project for tying all parts of web development together.", "Here I worked through Flask, routing and database work from a web app."],
      uk: ["Повноцінний вебзастосунок списку задач: додавання, статуси, зберігання в базі, міграції. Список справ — класичний проєкт.", "Тут я розбирався з Flask, маршрутизацією та роботою з базою."],
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
      ru: ["Ранние эксперименты с базами данных: как сохранять данные, как их доставать запросами, как связать всё это с программой. Базы — основа почти всего серьёзного софта, и с этих опытов начиналось их понимание.", "Маленький, но важный камень в фундаменте."],
      en: ["Early experiments with databases: how to store data, how to retrieve it with queries, how to tie it all into a program. Databases underpin almost all serious software, and understanding them started with these experiments.", "A small but important stone in the foundation."],
      uk: ["Ранні експерименти з базами даних: як зберігати дані, як їх діставати запитами, як пов'язати все це з програмою.", "Маленький, але важливий камінь у фундаменті."],
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
      ru: ["С чего-то начинался мой парсинг — здесь именно с этого. Ранние скрипты, которые забирают данные с веб-страниц и раскладывают их в удобный вид. Наивно, но именно отсюда выросли все мои поздние парсеры и боты.", "Честная часть истории — видно стартовую точку."],
      en: ["My scraping started somewhere — right here. Early scripts that pull data from web pages and arrange it into a usable form. Naive, but all my later parsers and bots grew from exactly this.", "An honest part of the history — you can see the starting point."],
      uk: ["Із чогось починався мій парсинг — саме з цього. Ранні скрипти, що забирають дані з вебсторінок і розкладають їх у зручний вигляд.", "Чесна частина історії — видно стартову точку."],
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
      ru: ["Утилита, которая переводит текст между раскладками: «руддщ» снова становится «hello». Маленькая бытовая мелочь, но из тех, что реально экономят нервы.", "Позже эта идея переросла в более продвинутый rust-layout-switcher."],
      en: ["A utility that converts text between layouts: 'руддщ' becomes 'hello' again. A small everyday thing, but the kind that genuinely saves your nerves.", "This idea later grew into the more advanced rust-layout-switcher."],
      uk: ["Утиліта, що перекладає текст між розкладками: «руддщ» знову стає «hello». Маленька побутова дрібниця, але з тих, що справді економлять нерви.", "Згодом ця ідея переросла в просунутіший rust-layout-switcher."],
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
      ru: ["SoundSplit раскладывает звук на ноты: анализирует аудио, определяет частоты и достаёт из него мелодию. Есть и обратная часть — простой синтезатор-«пищалка», который проигрывает извлечённое.", "Проект на стыке обработки сигналов и музыки — тема, к которой приятно возвращаться."],
      en: ["SoundSplit breaks sound down into notes: it analyses audio, detects frequencies and extracts the melody. There's a reverse part too — a simple beeper synthesizer that plays back what was extracted.", "A project between signal processing and music — a theme that's pleasant to return to."],
      uk: ["SoundSplit розкладає звук на ноти: аналізує аудіо, визначає частоти й дістає з нього мелодію. Є й зворотна частина — простий синтезатор-«пищалка».", "Проєкт на стику обробки сигналів і музики."],
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
      ru: ["Комплект оверлеев для стриминга через OBS, выдержанных в светлой теме «цифрового мозга»: экраны AFK и BRB, «скоро начнём», завершение стрима, анимация скачущих нейронов, нижняя плашка.", "Каждый оверлей — самостоятельная HTML-страница как браузерный источник, плюс готовая к импорту коллекция сцен. Сделано для стримов про ИИ и программирование."],
      en: ["A set of OBS streaming overlays in a light 'digital brain' theme: AFK and BRB screens, 'starting soon', stream ending, a bouncing-neurons animation, a lower third.", "Each overlay is a self-contained HTML page used as a browser source, plus a ready-to-import scene collection. Made for AI and coding streams."],
      uk: ["Комплект оверлеїв для стримінгу через OBS у світлій темі «цифрового мозку»: екрани AFK і BRB, «скоро почнемо», завершення стріму, анімація нейронів.", "Кожен оверлей — самостійна HTML-сторінка як браузерне джерело, плюс готова до імпорту колекція сцен."],
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
        "Компілятор написаний на Rust. Програму можна скомпілювати через асемблер fasm у нативний виконуваний файл під Linux x86-64 — або запустити через інтерпретатор проміжного представлення, і цей шлях уже кросплатформений.",
      ],
    },
    features: {
      ru: ["Кириллический синтаксис, файлы с расширением .хуя", "Компиляция в нативный бинарник x86-64 через fasm (Linux)", "Кроссплатформенный интерпретатор промежуточного представления", "Компилятор написан на Rust", "Мой вклад: рефакторинг кодовой базы и завершение TODO оригинального автора"],
      en: ["Cyrillic syntax, files with the .хуя extension", "Compilation to a native x86-64 binary via fasm (Linux)", "Cross-platform intermediate-representation interpreter", "Compiler written in Rust", "My contribution: codebase refactoring and finishing the original author's TODOs"],
      uk: ["Кириличний синтаксис, файли з розширенням .хуя", "Компіляція в нативний бінарник x86-64 через fasm (Linux)", "Кросплатформений інтерпретатор проміжного представлення", "Компілятор написаний на Rust", "Мій внесок: рефакторинг кодової бази та завершення TODO оригінального автора"],
    },
  },
];
