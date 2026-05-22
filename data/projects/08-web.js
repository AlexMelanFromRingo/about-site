/* Веб и инструменты */
module.exports = [
  {
    id: "devforge", name: "DevForge", aka: "Инструменты разработчика",
    category: "web", status: "active", year: 2026, featured: true,
    langs: ["TypeScript", "Angular"], tags: ["Веб", "Утилиты", "Инструменты"],
    github: "https://github.com/AlexMelanFromRingo/DevForge",
    short: {
      ru: "Набор бесплатных онлайн-инструментов для разработчиков в одном месте.",
      en: "A collection of free online developer tools in one place.",
      uk: "Набір безкоштовних онлайн-інструментів для розробників в одному місці.",
    },
    body: {
      ru: [
        "Каждому разработчику постоянно нужны мелкие утилиты, и обычно их ищут по десяткам разных сайтов. DevForge собирает их все в одном быстром веб-приложении на Angular.",
        "Внутри: форматирование JSON, кодирование Base64, генератор хэшей, конвертер цветов, генератор Lorem Ipsum, генератор UUID, тестер регулярных выражений, сравнение текстов.",
        "Всё работает прямо в браузере, без отправки данных на сервер — это принципиально важно, когда форматируешь или хэшируешь что-то рабочее и не хочешь, чтобы оно куда-то ушло.",
      ],
      en: [
        "Every developer constantly needs small utilities, and they're usually hunted across dozens of different sites. DevForge gathers them all into one fast Angular web app.",
        "Inside: JSON formatting, Base64 encoding, a hash generator, a colour converter, a Lorem Ipsum generator, a UUID generator, a regex tester, text diffing.",
        "Everything runs right in the browser with no data sent to a server — which is fundamentally important when you're formatting or hashing something work-related and don't want it going anywhere.",
      ],
      uk: [
        "Кожному розробнику постійно потрібні дрібні утиліти. DevForge збирає їх усі в одному швидкому вебзастосунку на Angular.",
        "Усередині: форматування JSON, Base64, генератор хешів, конвертер кольорів, Lorem Ipsum, UUID, тестер регулярних виразів, порівняння текстів.",
        "Усе працює в браузері, без відправлення даних на сервер.",
      ],
    },
    features: {
      ru: ["Форматирование JSON, кодирование Base64", "Генераторы хэшей, UUID, Lorem Ipsum", "Конвертер цветов, тестер регулярных выражений", "Сравнение текстов (diff)", "Всё работает в браузере, без отправки данных на сервер"],
      en: ["JSON formatting, Base64 encoding", "Hash, UUID and Lorem Ipsum generators", "A colour converter, a regex tester", "Text diffing", "Everything runs in the browser, no data sent to a server"],
      uk: ["Форматування JSON, кодування Base64", "Генератори хешів, UUID, Lorem Ipsum", "Конвертер кольорів, тестер регулярних виразів", "Порівняння текстів (diff)", "Усе працює в браузері, без відправлення даних"],
    },
  },
  {
    id: "mdrenderer", name: "MDrenderer", aka: "Читалка Obsidian-заметок",
    category: "web", status: "done", year: 2025,
    langs: ["Python"], tags: ["Markdown", "Obsidian", "Веб"],
    github: "https://github.com/AlexMelanFromRingo/markdown-web-renderer",
    short: {
      ru: "Веб-рендерер моих заметок Obsidian — онлайн-читалка для Markdown.",
      en: "A web renderer for my Obsidian notes — an online reader for Markdown.",
      uk: "Вебрендерер моїх нотаток Obsidian — онлайн-читалка для Markdown.",
    },
    body: {
      ru: [
        "Я веду заметки в Obsidian, и в какой-то момент захотелось читать их в браузере — с любого устройства, не устанавливая сам Obsidian.",
        "MDrenderer берёт Markdown-файлы и красиво показывает их как веб-страницы. Важно, что он понимает особенности именно заметок Obsidian — их специфический синтаксис, ссылки между заметками.",
        "Удобная онлайн-читалка для собственной базы знаний. Часть моей небольшой коллекции инструментов для работы с Markdown — рядом с TUI- и GUI-читалками на Rust.",
      ],
      en: [
        "I keep my notes in Obsidian, and at some point I wanted to read them in a browser — from any device, without installing Obsidian itself.",
        "MDrenderer takes Markdown files and renders them nicely as web pages. Importantly, it understands the quirks of Obsidian notes specifically — their particular syntax, links between notes.",
        "A convenient online reader for your own knowledge base. Part of my small collection of Markdown tools — alongside the TUI and GUI readers in Rust.",
      ],
      uk: [
        "Я веду нотатки в Obsidian, і захотілося читати їх у браузері з будь-якого пристрою.",
        "MDrenderer бере Markdown-файли й гарно показує їх як вебсторінки, розуміючи особливості заметок Obsidian.",
        "Зручна онлайн-читалка для власної бази знань.",
      ],
    },
    features: {
      ru: ["Рендеринг Markdown-файлов в веб-страницы", "Понимает специфику заметок Obsidian", "Чтение базы знаний с любого устройства", "Часть коллекции инструментов для Markdown"],
      en: ["Renders Markdown files into web pages", "Understands the specifics of Obsidian notes", "Reading a knowledge base from any device", "Part of a collection of Markdown tools"],
      uk: ["Рендеринг Markdown-файлів у вебсторінки", "Розуміє специфіку нотаток Obsidian", "Читання бази знань із будь-якого пристрою", "Частина колекції інструментів для Markdown"],
    },
  },
  {
    id: "gitgraph", name: "GitGraph", aka: "Визуализация репозитория",
    category: "web", status: "done", year: 2025,
    langs: ["Python"], tags: ["Git", "Визуализация", "Граф"],
    github: "https://github.com/AlexMelanFromRingo/GitGraph",
    short: {
      ru: "Инструмент визуализации коммитов и веток в локальном Git-репозитории.",
      en: "A tool for visualizing commits and branches in a local Git repository.",
      uk: "Інструмент візуалізації комітів і гілок у локальному Git-репозиторії.",
    },
    body: {
      ru: [
        "История Git по своей сути — это граф: коммиты, ветки, слияния. Но в консоли этот граф тяжело охватить взглядом, особенно когда веток много.",
        "GitGraph берёт локальный репозиторий и рисует наглядную картину: видно коммиты, ветки, как они расходятся и сливаются обратно. История проекта становится понятной с одного взгляда.",
        "Проект прошёл несколько версий приложения — каждая аккуратнее рисует одно и то же дерево истории.",
      ],
      en: [
        "Git history is a graph by its nature: commits, branches, merges. But in the console that graph is hard to take in at a glance, especially with many branches.",
        "GitGraph reads a local repository and draws a clear picture: you see commits, branches, how they diverge and merge back. A project's history becomes understandable at a glance.",
        "The project went through several app versions — each drawing the same history tree more cleanly.",
      ],
      uk: [
        "Історія Git — це граф: коміти, гілки, злиття. Але в консолі його важко охопити поглядом.",
        "GitGraph бере локальний репозиторій і малює наочну картину: коміти, гілки, як вони розходяться й зливаються.",
        "Проєкт пройшов кілька версій застосунку.",
      ],
    },
    features: {
      ru: ["Наглядная визуализация графа коммитов и веток", "Работа с локальным Git-репозиторием", "История проекта понятна с одного взгляда", "Несколько версий приложения"],
      en: ["Clear visualization of the commit-and-branch graph", "Works with a local Git repository", "A project's history understandable at a glance", "Several app versions"],
      uk: ["Наочна візуалізація графа комітів і гілок", "Робота з локальним Git-репозиторієм", "Історія проєкту зрозуміла з одного погляду", "Кілька версій застосунку"],
    },
  },
  {
    id: "metadata-editor", name: "Metadata Editor", aka: "Редактор метаданных",
    category: "web", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Метаданные", "EXIF", "ID3", "CLI"],
    github: "https://github.com/AlexMelanFromRingo/metadata-editor",
    short: {
      ru: "Просмотр и редактирование метаданных изображений, аудио и PDF в разных форматах.",
      en: "Viewing and editing metadata of images, audio and PDF across many formats.",
      uk: "Перегляд і редагування метаданих зображень, аудіо та PDF у різних форматах.",
    },
    body: {
      ru: [
        "Мощный инструмент для работы с метаданными файлов. Метаданные — это невидимая информация внутри файла: когда снято фото, на какую камеру, кто автор трека, какой альбом.",
        "Поддерживает три больших направления: изображения (теги EXIF), аудио (теги ID3, Vorbis и другие — MP3, FLAC, OGG, Opus, M4A и прочие) и PDF (заголовок, автор, тема, ключевые слова). Умеет работать с обложками альбомов, датами файловой системы, экспортировать метаданные в JSON.",
        "Есть пакетная обработка целых папок с рекурсивным обходом и удобство в мелочах — можно просто перетащить файлы на исполняемый файл.",
      ],
      en: [
        "A powerful tool for working with file metadata. Metadata is the invisible information inside a file: when a photo was taken, on what camera, who the track's author is, which album.",
        "It supports three big areas: images (EXIF tags), audio (ID3, Vorbis and other tags — MP3, FLAC, OGG, Opus, M4A and more) and PDF (title, author, subject, keywords). It can handle album cover art, filesystem dates, export metadata to JSON.",
        "There's batch processing of whole folders with recursive scanning, and convenience in the details — you can just drag files onto the executable.",
      ],
      uk: [
        "Потужний інструмент для роботи з метаданими файлів — невидимою інформацією всередині файлу.",
        "Підтримує три напрями: зображення (EXIF), аудіо (ID3, Vorbis — MP3, FLAC, OGG та інші) та PDF. Працює з обкладинками, датами, експортом у JSON.",
        "Є пакетна обробка папок із рекурсивним обходом.",
      ],
    },
    features: {
      ru: ["Метаданные изображений (EXIF), аудио (ID3/Vorbis), PDF", "Поддержка MP3, FLAC, OGG, Opus, M4A и других форматов", "Работа с обложками альбомов и датами файлов", "Пакетная обработка папок, экспорт в JSON", "Перетаскивание файлов на исполняемый файл"],
      en: ["Metadata of images (EXIF), audio (ID3/Vorbis), PDF", "Support for MP3, FLAC, OGG, Opus, M4A and other formats", "Handling album cover art and file dates", "Batch folder processing, JSON export", "Drag-and-drop files onto the executable"],
      uk: ["Метадані зображень (EXIF), аудіо (ID3/Vorbis), PDF", "Підтримка MP3, FLAC, OGG, Opus, M4A та інших форматів", "Робота з обкладинками та датами файлів", "Пакетна обробка папок, експорт у JSON", "Перетягування файлів на виконуваний файл"],
    },
  },
  {
    id: "circular-visualizer", name: "Circular Visualizer", aka: "Круговая визуализация",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "JavaScript"], tags: ["Визуализация", "Веб", "Анимация"],
    short: {
      ru: "Веб-визуализатор с круговой анимацией, реагирующей на данные или звук.",
      en: "A web visualizer with a circular animation that reacts to data or sound.",
      uk: "Вебвізуалізатор із круговою анімацією, що реагує на дані або звук.",
    },
    body: {
      ru: [
        "Небольшой визуальный эксперимент: круговая анимация в браузере, которая откликается на входные данные или звук.",
        "Из тех проектов, что делаешь ради красивого результата и удовольствия от работы с анимацией и графикой — без утилитарной цели, просто чтобы было красиво и плавно.",
        "Веб умеет в эффектную графику, и иногда хочется просто этим воспользоваться.",
      ],
      en: [
        "A small visual experiment: a circular browser animation that responds to input data or sound.",
        "One of those projects you do for the pretty result and the pleasure of working with animation and graphics — with no utilitarian goal, just to be beautiful and smooth.",
        "The web is capable of striking graphics, and sometimes you just want to use that.",
      ],
      uk: [
        "Невеликий візуальний експеримент: кругова анімація в браузері, що відгукується на дані або звук.",
        "Із тих проєктів, що робляться заради гарного результату.",
        "Веб уміє в ефектну графіку.",
      ],
    },
    features: {
      ru: ["Круговая анимация в браузере", "Отклик на входные данные или звук", "Эксперимент с веб-графикой и анимацией", "Чистые HTML и JavaScript"],
      en: ["A circular browser animation", "Responds to input data or sound", "An experiment with web graphics and animation", "Plain HTML and JavaScript"],
      uk: ["Кругова анімація в браузері", "Відгук на вхідні дані або звук", "Експеримент із вебграфікою та анімацією", "Чисті HTML і JavaScript"],
    },
  },
  {
    id: "terminal-site", name: "Terminal Style Site", aka: "Сайт-терминал",
    category: "web", status: "done", year: 2026,
    langs: ["TypeScript"], tags: ["Веб", "Дизайн", "Терминал"],
    short: {
      ru: "Веб-сайт, оформленный и работающий как командная строка терминала.",
      en: "A website styled and operated like a command-line terminal.",
      uk: "Вебсайт, оформлений і працюючий як командний рядок термінала.",
    },
    body: {
      ru: [
        "Сайт, по которому ходишь не мышкой по кнопкам, а командами, как в терминале. Набираешь команду — получаешь нужный раздел.",
        "Это необычный взгляд на навигацию: непривычный обычному посетителю, но мгновенно понятный любому, кто живёт в консоли. Своего рода визитка для технического человека.",
        "Эксперимент с идеей, что веб-интерфейс не обязан быть «как у всех» — иногда нестандартная подача и есть главная фишка.",
      ],
      en: [
        "A site you navigate not by clicking buttons with a mouse but by typing commands, like in a terminal. Type a command, get the section you need.",
        "It's an unusual take on navigation: unfamiliar to an ordinary visitor, but instantly clear to anyone who lives in a console. A kind of business card for a technical person.",
        "An experiment with the idea that a web interface doesn't have to look like everyone else's — sometimes the unconventional presentation is the main feature.",
      ],
      uk: [
        "Сайт, яким ходиш не мишкою по кнопках, а командами, як у терміналі.",
        "Незвичний погляд на навігацію — миттєво зрозумілий тому, хто живе в консолі.",
        "Експеримент із ідеєю, що вебінтерфейс не зобов'язаний бути «як у всіх».",
      ],
    },
    features: {
      ru: ["Навигация командами вместо кнопок", "Оформление в стиле терминала", "Понятно техническому человеку с одного взгляда", "Эксперимент с нестандартным веб-интерфейсом"],
      en: ["Command navigation instead of buttons", "Terminal-style design", "Instantly clear to a technical person", "An experiment with an unconventional web interface"],
      uk: ["Навігація командами замість кнопок", "Оформлення в стилі термінала", "Зрозуміло технічній людині з одного погляду", "Експеримент із нестандартним вебінтерфейсом"],
    },
  },
  {
    id: "svg2png", name: "SVG to PNG", aka: "Конвертер графики",
    category: "web", status: "done", year: 2026,
    langs: ["Python"], tags: ["Графика", "Конвертер", "SVG"],
    short: {
      ru: "Конвертер векторной графики SVG в растровые изображения PNG.",
      en: "A converter of SVG vector graphics into PNG raster images.",
      uk: "Конвертер векторної графіки SVG у растрові зображення PNG.",
    },
    body: {
      ru: [
        "Простой и нужный инструмент: берёт векторный SVG и аккуратно растеризует его в PNG нужного размера.",
        "SVG — это описание картинки формулами, оно масштабируется без потери качества, но не везде поддерживается. PNG понимают все. Конвертер закрывает этот разрыв.",
        "Маленькая утилита, которая просто делает своё дело — из категории инструментов, написанных под конкретную бытовую потребность.",
      ],
      en: [
        "A simple, needed tool: it takes a vector SVG and cleanly rasterizes it into a PNG of the required size.",
        "SVG is a description of an image by formulas — it scales without quality loss, but isn't supported everywhere. PNG is understood by everything. The converter bridges that gap.",
        "A small utility that just does its job — from the category of tools written for a specific everyday need.",
      ],
      uk: [
        "Простий і потрібний інструмент: бере векторний SVG і растеризує його в PNG потрібного розміру.",
        "SVG масштабується без втрати якості, але не всюди підтримується. PNG розуміють усі.",
        "Маленька утиліта, що просто робить свою справу.",
      ],
    },
    features: {
      ru: ["Растеризация векторного SVG в PNG", "Вывод нужного размера", "Закрывает разрыв в поддержке форматов", "Простая утилита под конкретную задачу"],
      en: ["Rasterizes vector SVG into PNG", "Output at the required size", "Bridges a format-support gap", "A simple utility for a specific task"],
      uk: ["Растеризація векторного SVG у PNG", "Вивід потрібного розміру", "Закриває розрив у підтримці форматів", "Проста утиліта під конкретну задачу"],
    },
  },
  {
    id: "qrcodes", name: "QR Codes", aka: "Генератор и сканер QR",
    category: "web", status: "done", year: 2023,
    langs: ["Python"], tags: ["QR", "Генератор", "Утилита"],
    short: {
      ru: "Инструмент для генерации и чтения QR-кодов.",
      en: "A tool for generating and reading QR codes.",
      uk: "Інструмент для генерації та читання QR-кодів.",
    },
    body: {
      ru: [
        "Утилита, которая работает в обе стороны: создаёт QR-коды из текста и ссылок и читает их обратно с готовых картинок.",
        "QR-коды повсюду — оплата, ссылки, контакты — и удобно иметь под рукой свой инструмент для работы с ними, не завязанный на онлайн-сервисы.",
        "Хороший небольшой проект на тему кодирования информации в изображения: за привычным квадратиком стоит своя система кодирования и коррекции ошибок.",
      ],
      en: [
        "A utility that works both ways: it creates QR codes from text and links and reads them back from finished images.",
        "QR codes are everywhere — payments, links, contacts — and it's handy to have your own tool for them, not tied to online services.",
        "A good small project on encoding information into images: behind the familiar little square is its own encoding and error-correction system.",
      ],
      uk: [
        "Утиліта, що працює в обидва боки: створює QR-коди з тексту й посилань і читає їх назад із картинок.",
        "QR-коди всюди, і зручно мати свій інструмент, не зав'язаний на онлайн-сервіси.",
        "Гарний невеликий проєкт на тему кодування інформації в зображення.",
      ],
    },
    features: {
      ru: ["Генерация QR-кодов из текста и ссылок", "Чтение QR-кодов с изображений", "Работа без онлайн-сервисов", "Кодирование информации в изображения"],
      en: ["Generating QR codes from text and links", "Reading QR codes from images", "Works without online services", "Encoding information into images"],
      uk: ["Генерація QR-кодів з тексту й посилань", "Читання QR-кодів із зображень", "Робота без онлайн-сервісів", "Кодування інформації в зображення"],
    },
  },
  {
    id: "imageresize", name: "Image Resize", aka: "Изменение размера картинок",
    category: "web", status: "done", year: 2022,
    langs: ["Python"], tags: ["Изображения", "Утилита", "Пакетная обработка"],
    short: {
      ru: "Утилита для масштабирования и пакетной обработки изображений.",
      en: "A utility for scaling and batch-processing images.",
      uk: "Утиліта для масштабування та пакетної обробки зображень.",
    },
    body: {
      ru: [
        "Скрипты для изменения размера картинок — как поодиночке, так и целыми пачками за один запуск.",
        "В проекте несколько вариантов масштабирования с разными подходами к балансу между качеством и скоростью — иногда важнее идеальная картинка, иногда быстро обработать сотню файлов.",
        "Из ранних утилит, на которых я учился работать с изображениями в коде.",
      ],
      en: [
        "Scripts for resizing images — both one at a time and in whole batches in a single run.",
        "The project has several scaling variants with different approaches to the balance between quality and speed — sometimes a perfect picture matters more, sometimes processing a hundred files fast.",
        "One of the early utilities where I learned to work with images in code.",
      ],
      uk: [
        "Скрипти для зміни розміру картинок — поодинці й цілими пачками.",
        "Кілька варіантів масштабування з різним балансом якості та швидкості.",
        "Із ранніх утиліт, на яких я вчився працювати із зображеннями в коді.",
      ],
    },
    features: {
      ru: ["Масштабирование изображений по одному и пачками", "Несколько вариантов с разным балансом качества и скорости", "Пакетная обработка за один запуск", "Ранний проект по работе с изображениями"],
      en: ["Scaling images one by one and in batches", "Several variants with different quality-speed balance", "Batch processing in a single run", "An early image-processing project"],
      uk: ["Масштабування зображень поодинці й пачками", "Кілька варіантів із різним балансом якості та швидкості", "Пакетна обробка за один запуск", "Ранній проєкт із роботи із зображеннями"],
    },
  },
  {
    id: "visualconvert", name: "Visual Convert", aka: "UI в код",
    category: "web", status: "done", year: 2023,
    langs: ["Python"], tags: ["GUI", "Qt", "Автоматизация"],
    short: {
      ru: "Инструмент для преобразования UI-макетов Qt в готовый Python-код.",
      en: "A tool for converting Qt UI layouts into ready Python code.",
      uk: "Інструмент для перетворення UI-макетів Qt у готовий Python-код.",
    },
    body: {
      ru: [
        "При работе с интерфейсами на Qt дизайн обычно рисуют визуально в .ui-файлах, а потом превращают в код. Этот шаг повторяется снова и снова при каждой правке интерфейса.",
        "Visual Convert автоматизирует это превращение и упрощает работу с визуальными формами — меньше ручной рутины между «нарисовал» и «работает».",
        "Инструмент вырос из моих проектов с GUI на Python, где интерфейс собирался визуально, а потом подключался к логике.",
      ],
      en: [
        "When working with Qt interfaces, the design is usually drawn visually in .ui files and then turned into code. This step repeats over and over with every interface change.",
        "Visual Convert automates that conversion and simplifies working with visual forms — less manual routine between 'drew it' and 'it works'.",
        "The tool grew out of my Python GUI projects, where the interface was assembled visually and then wired to logic.",
      ],
      uk: [
        "При роботі з інтерфейсами на Qt дизайн малюють у .ui-файлах, а потім перетворюють на код.",
        "Visual Convert автоматизує це перетворення.",
        "Інструмент виріс із моїх проєктів із GUI на Python.",
      ],
    },
    features: {
      ru: ["Преобразование .ui-макетов Qt в Python-код", "Автоматизация рутины при работе с формами", "Упрощает связку дизайна и логики", "Вырос из проектов с GUI на Python"],
      en: ["Converting Qt .ui layouts into Python code", "Automating routine in form work", "Simplifies wiring design to logic", "Grew out of Python GUI projects"],
      uk: ["Перетворення .ui-макетів Qt у Python-код", "Автоматизація рутини при роботі з формами", "Спрощує зв'язку дизайну й логіки", "Виріс із проєктів із GUI на Python"],
    },
  },
  {
    id: "html-css-learn", name: "HTML & CSS", aka: "Освоение вёрстки",
    category: "web", status: "done", year: 2022,
    langs: ["HTML", "CSS"], tags: ["Вёрстка", "Учебное"],
    short: {
      ru: "Учебные работы по освоению базовой вёрстки на HTML и CSS.",
      en: "Learning exercises for picking up basic HTML and CSS layout.",
      uk: "Навчальні роботи з освоєння базової верстки на HTML та CSS.",
    },
    body: {
      ru: [
        "Ранние эксперименты с вёрсткой: формы входа, отдельные страницы, разные приёмы CSS. С этого начинался мой путь в веб.",
        "Тогда не было ни фреймворков, ни сборщиков — просто HTML и CSS, написанные руками, и постепенное понимание, как из них складывается страница.",
        "Этот сайт, который вы сейчас читаете, — продолжение того же пути, только спустя несколько лет практики. Оставляю учебные работы честно, как стартовую точку.",
      ],
      en: [
        "Early layout experiments: login forms, individual pages, various CSS tricks. This is where my path into the web began.",
        "Back then there were no frameworks and no build tools — just HTML and CSS written by hand, and a gradual understanding of how a page comes together from them.",
        "The site you're reading now is a continuation of the same path, only several years of practice later. I keep these learning exercises honestly, as the starting point.",
      ],
      uk: [
        "Ранні експерименти з версткою: форми входу, сторінки, прийоми CSS. З цього починався мій шлях у веб.",
        "Тоді не було ні фреймворків, ні складальників — просто HTML і CSS руками.",
        "Сайт, який ви зараз читаєте, — продовження того ж шляху.",
      ],
    },
    features: {
      ru: ["Ранние работы по вёрстке: формы, страницы", "Чистые HTML и CSS без фреймворков", "Стартовая точка пути в веб-разработку", "Оставлены честно как часть истории"],
      en: ["Early layout work: forms, pages", "Plain HTML and CSS with no frameworks", "The starting point of the path into web development", "Kept honestly as part of the history"],
      uk: ["Ранні роботи з верстки: форми, сторінки", "Чисті HTML і CSS без фреймворків", "Стартова точка шляху у веброзробку", "Лишені чесно як частина історії"],
    },
  },
  {
    id: "site-for-lucidrains", name: "Site for Lucidrains", aka: "Сайт-эксперимент",
    category: "web", status: "done", year: 2024,
    langs: ["HTML", "CSS"], tags: ["Веб", "Дизайн"],
    short: {
      ru: "Веб-сайт, сделанный как эксперимент по мотивам работ известного ML-разработчика.",
      en: "A website made as an experiment inspired by a well-known ML developer's work.",
      uk: "Вебсайт, зроблений як експеримент за мотивами робіт відомого ML-розробника.",
    },
    body: {
      ru: [
        "Небольшой сайт-эксперимент, вдохновлённый Lucidrains — разработчиком, чьи открытые реализации нейросетей я не раз изучал, включая LightweightGAN.",
        "Проект соединяет сразу два моих интереса: веб-вёрстку и машинное обучение. По сути это практика оформления, отталкивающаяся от уважения к чужой работе.",
        "Из тех проектов, что делаются на пересечении тем — когда хочется и поверстать, и остаться в орбите ML.",
      ],
      en: [
        "A small experimental site inspired by Lucidrains — a developer whose open neural-network implementations I've studied more than once, including LightweightGAN.",
        "The project connects two of my interests at once: web layout and machine learning. It's essentially layout practice, starting from respect for someone else's work.",
        "One of those projects done at the intersection of themes — when you want to do some layout and stay in the orbit of ML.",
      ],
      uk: [
        "Невеликий сайт-експеримент, натхненний Lucidrains — розробником, чиї реалізації нейромереж я вивчав.",
        "Проєкт поєднує два інтереси: вебверстку та машинне навчання.",
        "Із тих проєктів, що робляться на перетині тем.",
      ],
    },
    features: {
      ru: ["Сайт-эксперимент на пересечении веба и ML", "Вдохновлён работами разработчика Lucidrains", "Практика вёрстки и оформления", "Чистые HTML и CSS"],
      en: ["An experimental site at the web/ML intersection", "Inspired by the developer Lucidrains' work", "Layout and design practice", "Plain HTML and CSS"],
      uk: ["Сайт-експеримент на перетині веба та ML", "Натхненний роботами розробника Lucidrains", "Практика верстки та оформлення", "Чисті HTML і CSS"],
    },
  },
  {
    id: "small-fun-sites", name: "Small Fun Sites", aka: "Маленькие сайты",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "JavaScript"], tags: ["Веб", "Эксперименты"],
    short: {
      ru: "Коллекция маленьких развлекательных веб-страниц и экспериментов.",
      en: "A collection of small fun web pages and experiments.",
      uk: "Колекція маленьких розважальних вебсторінок та експериментів.",
    },
    body: {
      ru: [
        "Сборник небольших сайтов-однодневок: что-то забавное, что-то экспериментальное, что-то просто красивое.",
        "Такие странички — отличный способ быстро попробовать идею, не разворачивая полноценный проект. Веб хорош именно этим: вход в него — пара файлов и браузер.",
        "Коллекция растёт по мере того, как появляются мелкие идеи, которые хочется быстро воплотить.",
      ],
      en: [
        "A collection of small one-off sites: something funny, something experimental, something just pretty.",
        "Such pages are a great way to quickly try an idea without spinning up a full project. The web is good precisely for this: the cost of entry is a couple of files and a browser.",
        "The collection grows as small ideas appear that you want to quickly bring to life.",
      ],
      uk: [
        "Збірка невеликих сайтів-одноденок: щось кумедне, щось експериментальне.",
        "Такі сторінки — спосіб швидко спробувати ідею. Веб гарний тим, що вхід у нього — пара файлів і браузер.",
        "Колекція росте з появою дрібних ідей.",
      ],
    },
    features: {
      ru: ["Сборник маленьких веб-страниц", "Быстрая проверка идей без полноценного проекта", "Развлекательные и экспериментальные странички", "Растущая коллекция"],
      en: ["A collection of small web pages", "Quick idea testing without a full project", "Fun and experimental pages", "A growing collection"],
      uk: ["Збірка маленьких вебсторінок", "Швидка перевірка ідей без повноцінного проєкту", "Розважальні та експериментальні сторінки", "Зростаюча колекція"],
    },
  },
  {
    id: "fanaticpizza", name: "Fanatic Pizza", aka: "Сайт пиццерии",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "CSS", "JavaScript"], tags: ["Веб", "Коммерческий сайт"],
    short: {
      ru: "Сайт для пиццерии — практическая работа над реальным коммерческим заказом.",
      en: "A website for a pizzeria — practical work on a real commercial order.",
      uk: "Сайт для піцерії — практична робота над реальним комерційним замовленням.",
    },
    body: {
      ru: [
        "Сайт для пиццерии: меню, оформление, всё, что нужно небольшому заведению для присутствия в сети.",
        "Это реальная клиентская работа, а не учебный проект. Здесь важны другие вещи: аккуратность, понятность для обычного посетителя, который пришёл просто посмотреть меню, и соответствие тому, что хочет заказчик.",
        "Коммерческие заказы хорошо заземляют: тут не поэкспериментируешь без меры — нужно решить конкретную задачу клиента и уложиться в его ожидания.",
      ],
      en: [
        "A website for a pizzeria: a menu, styling, everything a small place needs for an online presence.",
        "This is real client work, not a learning project. Other things matter here: neatness, clarity for an ordinary visitor who came just to look at the menu, and matching what the client wants.",
        "Commercial orders ground you well: you can't experiment without limits here — you have to solve the client's concrete task and meet their expectations.",
      ],
      uk: [
        "Сайт для піцерії: меню, оформлення, усе для присутності закладу в мережі.",
        "Це реальна клієнтська робота: важливі акуратність, зрозумілість для відвідувача й відповідність побажанням замовника.",
        "Комерційні замовлення добре заземлюють.",
      ],
    },
    features: {
      ru: ["Сайт для пиццерии: меню и оформление", "Реальный коммерческий заказ", "Акцент на понятность для обычного посетителя", "Работа под ожидания заказчика"],
      en: ["A pizzeria site: menu and styling", "A real commercial order", "Focus on clarity for an ordinary visitor", "Work to the client's expectations"],
      uk: ["Сайт для піцерії: меню та оформлення", "Реальне комерційне замовлення", "Акцент на зрозумілість для відвідувача", "Робота під очікування замовника"],
    },
  },
  {
    id: "pizza-paradise", name: "Pizza Paradise", aka: "Сайт-проект пиццерии",
    category: "web", status: "done", year: 2026,
    langs: ["JavaScript", "HTML"], tags: ["Веб", "Сайт"],
    short: {
      ru: "Ещё один сайт на тему пиццерии — отдельный проект со своим оформлением.",
      en: "Another pizzeria-themed site — a separate project with its own design.",
      uk: "Ще один сайт на тему піцерії — окремий проєкт зі своїм оформленням.",
    },
    body: {
      ru: [
        "Второй заход в тему сайтов для пиццерий — отдельный проект со своим дизайном и подачей.",
        "Когда делаешь несколько проектов в одной области, начинаешь видеть закономерности: что работает, что нет, как лучше показать меню, куда поставить кнопку заказа.",
        "Веб-разработка — это во многом насмотренность, и она набирается именно такой практикой: повторил похожую задачу несколько раз — стал делать её заметно лучше.",
      ],
      en: [
        "A second take on pizzeria sites — a separate project with its own design and presentation.",
        "When you do several projects in one area, you start to see patterns: what works, what doesn't, how to best show a menu, where to put the order button.",
        "Web development is largely a trained eye, and it's built through exactly this practice: repeat a similar task a few times and you start doing it noticeably better.",
      ],
      uk: [
        "Другий захід у тему сайтів для піцерій — окремий проєкт зі своїм дизайном.",
        "Коли робиш кілька проєктів в одній сфері, починаєш бачити закономірності.",
        "Веброзробка — це багато в чому насмотреність, і вона набирається практикою.",
      ],
    },
    features: {
      ru: ["Сайт пиццерии со своим дизайном", "Второй проект в той же области", "Накопление насмотренности через практику", "HTML и JavaScript"],
      en: ["A pizzeria site with its own design", "A second project in the same area", "Building a trained eye through practice", "HTML and JavaScript"],
      uk: ["Сайт піцерії зі своїм дизайном", "Другий проєкт у тій самій сфері", "Накопичення насмотреності через практику", "HTML і JavaScript"],
    },
  },
  {
    id: "fense-site", name: "Fense Site", aka: "Сайт для бизнеса",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "CSS"], tags: ["Веб", "Коммерческий сайт"],
    short: {
      ru: "Сайт-визитка для бизнеса — практическая веб-работа.",
      en: "A business landing site — practical web work.",
      uk: "Сайт-візитівка для бізнесу — практична вебробота.",
    },
    body: {
      ru: [
        "Ещё одна реальная веб-работа: сайт-визитка для бизнеса. Понятная структура, аккуратное оформление, фокус на том, чтобы посетитель быстро нашёл нужное.",
        "Сайт-визитка — задача с виду простая, но именно в простоте легко промахнуться: лишний элемент, неудачный акцент, и посетитель уже не понимает, что от него хотят.",
        "Такие проекты прокачивают то, чему не научишься на экспериментах — умение делать чисто, по делу и в срок.",
      ],
      en: [
        "Another piece of real web work: a business landing site. A clear structure, neat styling, a focus on letting a visitor quickly find what they need.",
        "A landing site looks like a simple task, but it's easy to miss precisely in the simplicity: one extra element, a poor accent, and the visitor no longer understands what's wanted of them.",
        "Such projects build what you don't learn from experiments — the ability to deliver cleanly, to the point and on time.",
      ],
      uk: [
        "Ще одна реальна вебробота: сайт-візитівка для бізнесу. Зрозуміла структура, акуратне оформлення.",
        "Сайт-візитівка з вигляду простий, але саме в простоті легко промахнутися.",
        "Такі проєкти прокачують уміння робити чисто і вчасно.",
      ],
    },
    features: {
      ru: ["Сайт-визитка для бизнеса", "Понятная структура и аккуратное оформление", "Фокус на быстром поиске нужного посетителем", "Реальная клиентская работа"],
      en: ["A business landing site", "A clear structure and neat styling", "Focus on the visitor quickly finding what they need", "Real client work"],
      uk: ["Сайт-візитівка для бізнесу", "Зрозуміла структура й акуратне оформлення", "Фокус на швидкому пошуку потрібного", "Реальна клієнтська робота"],
    },
  },
  {
    id: "artem-site", name: "Artem Site", aka: "Персональный сайт",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "CSS"], tags: ["Веб", "Сайт"],
    short: {
      ru: "Персональный сайт, сделанный на заказ.",
      en: "A personal website made to order.",
      uk: "Персональний сайт, зроблений на замовлення.",
    },
    body: {
      ru: [
        "Персональный сайт, сделанный по заказу для конкретного человека. Задача — собрать аккуратное и приятное представительство в сети под его нужды.",
        "Персональный сайт отличается от коммерческого: здесь важнее не продать, а просто хорошо представить человека — кто он, чем занимается, как с ним связаться.",
        "Из таких работ складывается опыт общения с клиентом и навык переводить чужие пожелания, часто расплывчатые, в готовый понятный сайт.",
      ],
      en: [
        "A personal website built to order for a specific person. The task — assemble a tidy, pleasant online presence tailored to their needs.",
        "A personal site differs from a commercial one: here it's less about selling and more about simply presenting a person well — who they are, what they do, how to reach them.",
        "Such jobs build the experience of working with a client and the skill of translating someone's wishes, often vague, into a finished, clear site.",
      ],
      uk: [
        "Персональний сайт, зроблений на замовлення для конкретної людини.",
        "Персональний сайт відрізняється від комерційного: важливіше добре представити людину.",
        "Із таких робіт складається досвід спілкування з клієнтом.",
      ],
    },
    features: {
      ru: ["Персональный сайт на заказ", "Аккуратное представительство человека в сети", "Перевод пожеланий клиента в готовый сайт", "Опыт работы с заказчиком"],
      en: ["A personal site made to order", "A tidy online presence for a person", "Translating client wishes into a finished site", "Experience working with a client"],
      uk: ["Персональний сайт на замовлення", "Акуратне представництво людини в мережі", "Переклад побажань клієнта в готовий сайт", "Досвід роботи із замовником"],
    },
  },
  {
    id: "hackaton", name: "Hackathon Project", aka: "Проект с хакатона",
    category: "web", status: "done", year: 2026,
    langs: ["JavaScript", "HTML"], tags: ["Хакатон", "Веб", "Прототип"],
    short: {
      ru: "Веб-проект, собранный в условиях хакатона за ограниченное время.",
      en: "A web project built under hackathon conditions in limited time.",
      uk: "Вебпроєкт, зібраний в умовах хакатону за обмежений час.",
    },
    body: {
      ru: [
        "Проект, сделанный на хакатоне — там, где идея должна за пару дней превратиться в работающий прототип, который можно показать жюри.",
        "Это совсем другой режим разработки: быстро решить, что важно, а что отрезать, и собрать минимально жизнеспособную версию, которая уже что-то демонстрирует.",
        "Хакатоны учат отсекать лишнее и доводить до видимого результата под давлением времени — навык, который полезен далеко за пределами хакатонов.",
      ],
      en: [
        "A project built at a hackathon — where an idea has to become a working prototype within a couple of days, something you can show the jury.",
        "It's a completely different development mode: quickly decide what matters and what to cut, and assemble a minimum viable version that already demonstrates something.",
        "Hackathons teach you to cut the excess and reach a visible result under time pressure — a skill useful far beyond hackathons.",
      ],
      uk: [
        "Проєкт, зроблений на хакатоні — там, де ідея має за пару днів стати робочим прототипом.",
        "Це інший режим розробки: швидко вирішити, що важливо, і зібрати мінімально життєздатну версію.",
        "Хакатони вчать відсікати зайве й доводити до результату під тиском часу.",
      ],
    },
    features: {
      ru: ["Веб-проект, собранный за пару дней хакатона", "Режим быстрой разработки прототипа", "Умение отсечь лишнее и доделать главное", "Работа под давлением времени"],
      en: ["A web project built in a couple of hackathon days", "Rapid prototype-development mode", "The skill of cutting the excess and finishing the core", "Work under time pressure"],
      uk: ["Вебпроєкт, зібраний за пару днів хакатону", "Режим швидкої розробки прототипу", "Уміння відсікти зайве й доробити головне", "Робота під тиском часу"],
    },
  },
  {
    id: "university-website", name: "University Website", aka: "Сайт для лабораторной",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "CSS"], tags: ["Веб", "Учебное"],
    short: {
      ru: "Сайт, сделанный как университетская лабораторная работа.",
      en: "A website built as a university lab assignment.",
      uk: "Сайт, зроблений як університетська лабораторна робота.",
    },
    body: {
      ru: [
        "Веб-сайт, сделанный в рамках университетской лабораторной работы по веб-технологиям.",
        "Как и с другими учебными проектами, мне было интереснее сделать что-то аккуратное и осмысленное, чем сдать формальный минимум ради галочки.",
        "Учебные работы — отличный повод спокойно, без давления заказчика, отточить базовые навыки вёрстки и оформления.",
      ],
      en: [
        "A website built as a university lab assignment on web technologies.",
        "As with other academic projects, I found it more interesting to build something tidy and meaningful than to hand in the formal minimum just to tick a box.",
        "Academic work is a great excuse to calmly polish basic layout and design skills, without a client's pressure.",
      ],
      uk: [
        "Вебсайт, зроблений у межах університетської лабораторної з вебтехнологій.",
        "Мені було цікавіше зробити щось акуратне, ніж здати формальний мінімум.",
        "Навчальні роботи — привід спокійно відточити базові навички верстки.",
      ],
    },
    features: {
      ru: ["Сайт как университетская лабораторная работа", "Сделан выше формального минимума", "Практика базовой вёрстки и оформления", "Учебный проект без давления заказчика"],
      en: ["A site as a university lab assignment", "Built above the formal minimum", "Practice in basic layout and design", "An academic project without client pressure"],
      uk: ["Сайт як університетська лабораторна робота", "Зроблений вище формального мінімуму", "Практика базової верстки та оформлення", "Навчальний проєкт без тиску замовника"],
    },
  },
  {
    id: "about-site", name: "Этот сайт", aka: "Портфолио Alex Melan",
    category: "web", status: "active", year: 2026,
    langs: ["JavaScript", "Node.js", "Tailwind CSS"], tags: ["Веб", "Портфолио", "Статический генератор"],
    github: "https://github.com/AlexMelanFromRingo/about-site",
    short: {
      ru: "Сайт-портфолио, который вы сейчас читаете — со своим генератором и тремя языками.",
      en: "The portfolio site you're reading right now — with its own generator and three languages.",
      uk: "Сайт-портфоліо, який ви зараз читаєте — з власним генератором і трьома мовами.",
    },
    body: {
      ru: [
        "Этот сайт — тоже проект, и его честно стоит здесь упомянуть. Под ним лежит собственный статический генератор на Node.js.",
        "Данные всех проектов хранятся отдельно, в структурированных файлах, а скрипт сборки собирает из них главную страницу, отдельную страницу под каждый проект и заодно посты для Telegram-канала. Оформление — на Tailwind CSS, без рантайм-зависимостей.",
        "Три языка — русский, английский, украинский — встроены прямо в страницы и переключаются мгновенно, без перезагрузки. Получился не просто сайт, а маленькая генераторная система, которую легко расширять.",
      ],
      en: [
        "This site is a project too, and it honestly deserves a mention here. Under it sits a custom static generator in Node.js.",
        "All project data is stored separately, in structured files, and the build script assembles the home page, a separate page for every project and the Telegram-channel posts from it. Styled with Tailwind CSS, with no runtime dependencies.",
        "Three languages — Russian, English, Ukrainian — are built right into the pages and switch instantly, with no reload. The result isn't just a site but a small generator system that's easy to extend.",
      ],
      uk: [
        "Цей сайт — теж проєкт. Під ним лежить власний статичний генератор на Node.js.",
        "Дані всіх проєктів зберігаються окремо, а скрипт збирає з них головну сторінку, сторінку під кожен проєкт і пости для Telegram. Оформлення — на Tailwind CSS.",
        "Три мови вбудовані прямо в сторінки й перемикаються миттєво.",
      ],
    },
    features: {
      ru: ["Собственный статический генератор на Node.js", "Данные проектов отдельно, сборка из них всех страниц", "Три языка: RU / EN / UA с мгновенным переключением", "Оформление на Tailwind CSS без рантайм-зависимостей", "Заодно генерируются посты для Telegram-канала"],
      en: ["A custom static generator in Node.js", "Project data kept separate, all pages built from it", "Three languages: RU / EN / UA with instant switching", "Styled with Tailwind CSS, no runtime dependencies", "Telegram-channel posts generated alongside"],
      uk: ["Власний статичний генератор на Node.js", "Дані проєктів окремо, збірка з них усіх сторінок", "Три мови: RU / EN / UA з миттєвим перемиканням", "Оформлення на Tailwind CSS без рантайм-залежностей", "Заодно генеруються пости для Telegram-каналу"],
    },
  },
];
