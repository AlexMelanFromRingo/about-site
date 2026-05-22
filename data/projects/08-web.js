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
      ru: ["Каждому разработчику постоянно нужны мелкие утилиты: отформатировать JSON, перекодировать Base64, посчитать хэш, подобрать цвет, сгенерировать UUID, проверить регулярку, сравнить тексты. DevForge собирает их все в одном быстром веб-приложении.", "Всё работает в браузере, без отправки данных на сервер — это важно, когда форматируешь что-то рабочее."],
      en: ["Every developer constantly needs small utilities: format JSON, re-encode Base64, compute a hash, pick a colour, generate a UUID, test a regex, diff text. DevForge gathers them all into one fast web app.", "Everything runs in the browser with no data sent to a server — which matters when you're formatting something work-related."],
      uk: ["Кожному розробнику постійно потрібні дрібні утиліти: відформатувати JSON, перекодувати Base64, порахувати хеш, підібрати колір, згенерувати UUID. DevForge збирає їх усі в одному швидкому вебзастосунку.", "Усе працює в браузері, без відправлення даних на сервер."],
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
      ru: ["Я веду заметки в Obsidian, и захотелось читать их в браузере — с любого устройства, без установки самого Obsidian. MDrenderer берёт Markdown-файлы и красиво показывает их как веб-страницы, понимая особенности заметок Obsidian.", "Удобная онлайн-читалка для собственной базы знаний."],
      en: ["I keep my notes in Obsidian, and I wanted to read them in a browser — from any device, without installing Obsidian itself. MDrenderer takes Markdown files and renders them nicely as web pages, understanding the quirks of Obsidian notes.", "A convenient online reader for your own knowledge base."],
      uk: ["Я веду нотатки в Obsidian, і захотілося читати їх у браузері — з будь-якого пристрою, без встановлення самого Obsidian. MDrenderer бере Markdown-файли й гарно показує їх як вебсторінки.", "Зручна онлайн-читалка для власної бази знань."],
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
      ru: ["История Git — это граф, но в консоли его тяжело охватить взглядом. GitGraph берёт локальный репозиторий и рисует наглядную картину: коммиты, ветки, как они расходятся и сливаются.", "Прошёл несколько версий приложения — каждая аккуратнее рисует одно и то же дерево истории."],
      en: ["Git history is a graph, but in the console it's hard to take in at a glance. GitGraph reads a local repository and draws a clear picture: commits, branches, how they diverge and merge.", "It went through several app versions — each drawing the same history tree more cleanly."],
      uk: ["Історія Git — це граф, але в консолі його важко охопити поглядом. GitGraph бере локальний репозиторій і малює наочну картину: коміти, гілки, як вони розходяться й зливаються.", "Пройшов кілька версій застосунку."],
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
      ru: ["Мощный инструмент для работы с метаданными файлов: EXIF в картинках, теги ID3 и Vorbis в аудио, свойства PDF, даты файловой системы. Поддерживает кучу аудиоформатов, обложки альбомов, пакетную обработку папок и экспорт в JSON.", "Удобство в мелочах: можно просто перетащить файлы на исполняемый файл — и редактировать."],
      en: ["A powerful tool for working with file metadata: EXIF in images, ID3 and Vorbis tags in audio, PDF properties, filesystem dates. It supports many audio formats, album cover art, batch processing of folders and JSON export.", "Convenience in the details: you can just drag files onto the executable and edit them."],
      uk: ["Потужний інструмент для роботи з метаданими файлів: EXIF у картинках, теги ID3 та Vorbis в аудіо, властивості PDF, дати файлової системи. Підтримує багато форматів, обкладинки, пакетну обробку.", "Зручність у дрібницях: можна просто перетягнути файли на виконуваний файл."],
    },
  },
  {
    id: "circular-visualizer", name: "Circular Visualizer", aka: "Круговая визуализация",
    category: "web", status: "done", year: 2026,
    langs: ["HTML", "JavaScript"], tags: ["Визуализация", "Веб", "Аудио"],
    short: {
      ru: "Веб-визуализатор с круговой анимацией, реагирующей на данные или звук.",
      en: "A web visualizer with a circular animation that reacts to data or sound.",
      uk: "Вебвізуалізатор із круговою анімацією, що реагує на дані або звук.",
    },
    body: {
      ru: ["Небольшой визуальный эксперимент: круговая анимация в браузере, которая откликается на входные данные. Из тех проектов, что делаешь ради красивого результата и удовольствия от работы с анимацией.", "Веб умеет в красивую графику, и иногда хочется просто этим воспользоваться."],
      en: ["A small visual experiment: a circular browser animation that responds to input. One of those projects you do for the pretty result and the pleasure of working with animation.", "The web is capable of beautiful graphics, and sometimes you just want to use that."],
      uk: ["Невеликий візуальний експеримент: кругова анімація в браузері, що відгукується на вхідні дані.", "Веб уміє в гарну графіку, і іноді хочеться просто цим скористатися."],
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
      ru: ["Сайт, по которому ходишь не мышкой по кнопкам, а командами, как в терминале. Набираешь команду — получаешь раздел. Необычный взгляд на навигацию, который сразу понятен любому, кто живёт в консоли.", "Эксперимент с тем, что веб-интерфейс не обязан быть «как у всех»."],
      en: ["A site you navigate not by clicking buttons but by typing commands, like in a terminal. Type a command, get a section. An unusual take on navigation, instantly clear to anyone who lives in a console.", "An experiment with the idea that a web interface doesn't have to look like everyone else's."],
      uk: ["Сайт, яким ходиш не мишкою по кнопках, а командами, як у терміналі. Набираєш команду — отримуєш розділ.", "Експеримент із тим, що вебінтерфейс не зобов'язаний бути «як у всіх»."],
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
      ru: ["Простой и нужный инструмент: берёт векторный SVG и аккуратно растеризует его в PNG нужного размера. Полезно, когда система или сервис не понимает векторную графику.", "Маленькая утилита, которая просто делает своё дело."],
      en: ["A simple, needed tool: it takes a vector SVG and cleanly rasterizes it into a PNG of the required size. Useful when a system or service doesn't understand vector graphics.", "A small utility that just does its job."],
      uk: ["Простий і потрібний інструмент: бере векторний SVG і акуратно растеризує його в PNG потрібного розміру.", "Маленька утиліта, що просто робить свою справу."],
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
      ru: ["Утилита, которая работает в обе стороны: создаёт QR-коды из текста и ссылок и читает их обратно с картинок. QR-коды повсюду, и удобно иметь под рукой свой инструмент для работы с ними.", "Хороший небольшой проект на тему кодирования информации в изображения."],
      en: ["A utility that works both ways: it creates QR codes from text and links and reads them back from images. QR codes are everywhere, and it's handy to have your own tool for them.", "A good small project on encoding information into images."],
      uk: ["Утиліта, що працює в обидва боки: створює QR-коди з тексту й посилань і читає їх назад із картинок.", "Гарний невеликий проєкт на тему кодування інформації в зображення."],
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
      ru: ["Скрипты для изменения размера картинок — поодиночке и пачками. Несколько вариантов масштабирования с разными подходами к качеству и скорости.", "Из ранних утилит, где я учился работать с изображениями в коде."],
      en: ["Scripts for resizing images — one at a time and in batches. Several scaling variants with different trade-offs between quality and speed.", "One of the early utilities where I learned to work with images in code."],
      uk: ["Скрипти для зміни розміру картинок — поодинці й пачками. Кілька варіантів масштабування з різними підходами до якості та швидкості.", "Із ранніх утиліт, де я вчився працювати із зображеннями в коді."],
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
      ru: ["При работе с интерфейсами на Qt дизайн рисуется в .ui-файлах, а потом превращается в код. Этот инструмент автоматизирует превращение и упрощает работу с визуальными формами.", "Выросло из моих проектов с GUI на Python — там, где интерфейс собирался визуально."],
      en: ["When working with Qt interfaces, the design is drawn in .ui files and then turned into code. This tool automates that conversion and simplifies working with visual forms.", "It grew out of my Python GUI projects, where the interface was assembled visually."],
      uk: ["При роботі з інтерфейсами на Qt дизайн малюється у .ui-файлах, а потім перетворюється на код. Цей інструмент автоматизує перетворення.", "Виросло з моїх проєктів із GUI на Python."],
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
      ru: ["Ранние эксперименты с вёрсткой: формы входа, страницы, разные приёмы CSS. С этого начинался мой путь в веб — до фреймворков, до сборки, просто HTML и CSS руками.", "Этот сайт, который вы сейчас читаете, — продолжение того же пути, только спустя несколько лет практики."],
      en: ["Early layout experiments: login forms, pages, various CSS tricks. This is where my path into the web began — before frameworks, before build tools, just HTML and CSS by hand.", "The site you're reading now is a continuation of the same path, only several years of practice later."],
      uk: ["Ранні експерименти з версткою: форми входу, сторінки, різні прийоми CSS. З цього починався мій шлях у веб.", "Сайт, який ви зараз читаєте, — продовження того ж шляху, лише за кілька років практики."],
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
      ru: ["Небольшой сайт-эксперимент, вдохновлённый Lucidrains — разработчиком, чьи реализации нейросетей я не раз изучал, включая LightweightGAN. Практика вёрстки и оформления.", "Из тех проектов, что соединяют сразу два интереса — веб и машинное обучение."],
      en: ["A small experimental site inspired by Lucidrains — a developer whose neural-network implementations I've studied more than once, including LightweightGAN. Practice in layout and design.", "One of those projects that connect two interests at once — the web and machine learning."],
      uk: ["Невеликий сайт-експеримент, натхненний Lucidrains — розробником, чиї реалізації нейромереж я не раз вивчав. Практика верстки та оформлення.", "Із тих проєктів, що поєднують два інтереси — веб і машинне навчання."],
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
      ru: ["Сборник небольших сайтов-однодневок: что-то забавное, что-то экспериментальное. Такие странички — отличный способ быстро попробовать идею, не разворачивая полноценный проект.", "Веб хорош тем, что вход в него — пара файлов и браузер."],
      en: ["A collection of small one-off sites: something funny, something experimental. Such pages are a great way to quickly try an idea without spinning up a full project.", "The web is good because the cost of entry is a couple of files and a browser."],
      uk: ["Збірка невеликих сайтів-одноденок: щось кумедне, щось експериментальне. Такі сторінки — чудовий спосіб швидко спробувати ідею.", "Веб гарний тим, що вхід у нього — пара файлів і браузер."],
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
      ru: ["Сайт для пиццерии: меню, оформление, всё, что нужно небольшому заведению для присутствия в сети. Реальная клиентская работа, а не учебный проект — тут важны и аккуратность, и понятность для обычного посетителя.", "Коммерческие заказы хорошо заземляют: тут не поэкспериментируешь без меры, нужно решить задачу клиента."],
      en: ["A website for a pizzeria: a menu, styling, everything a small place needs for an online presence. Real client work rather than a learning project — here neatness and clarity for an ordinary visitor both matter.", "Commercial orders ground you well: you can't experiment without limits, you have to solve the client's problem."],
      uk: ["Сайт для піцерії: меню, оформлення, усе, що потрібно невеликому закладу для присутності в мережі. Реальна клієнтська робота.", "Комерційні замовлення добре заземлюють: треба вирішити задачу клієнта."],
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
      ru: ["Второй заход в тему сайтов для пиццерий, со своим дизайном и подачей. Когда делаешь несколько проектов в одной области, начинаешь видеть, что работает, а что нет.", "Веб-разработка — это во многом насмотренность, и она набирается практикой."],
      en: ["A second take on pizzeria sites, with its own design and presentation. When you do several projects in one area, you start to see what works and what doesn't.", "Web development is largely a trained eye, and it's built through practice."],
      uk: ["Другий захід у тему сайтів для піцерій, зі своїм дизайном і подачею. Коли робиш кілька проєктів в одній сфері, починаєш бачити, що працює.", "Веброзробка — це багато в чому насмотреність."],
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
      ru: ["Ещё одна реальная веб-работа: сайт-визитка для бизнеса. Понятная структура, аккуратное оформление, фокус на том, чтобы посетитель быстро нашёл нужное.", "Такие проекты прокачивают то, чему не научишься на экспериментах — умение делать чисто и в срок."],
      en: ["Another piece of real web work: a business landing site. A clear structure, neat styling, a focus on letting a visitor quickly find what they need.", "Such projects build what you don't learn from experiments — the ability to deliver cleanly and on time."],
      uk: ["Ще одна реальна вебробота: сайт-візитівка для бізнесу. Зрозуміла структура, акуратне оформлення.", "Такі проєкти прокачують уміння робити чисто і вчасно."],
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
      ru: ["Персональный сайт, сделанный по заказу для конкретного человека. Задача — собрать аккуратное и приятное представительство в сети под нужды заказчика.", "Из таких работ складывается опыт общения с клиентом и понимание, как перевести его пожелания в готовый сайт."],
      en: ["A personal website built to order for a specific person. The task — assemble a tidy, pleasant online presence tailored to the client's needs.", "Such jobs build the experience of working with a client and translating their wishes into a finished site."],
      uk: ["Персональний сайт, зроблений на замовлення для конкретної людини. Завдання — зібрати акуратне представництво в мережі.", "Із таких робіт складається досвід спілкування з клієнтом."],
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
      ru: ["Проект, сделанный на хакатоне — там, где идея должна за пару дней превратиться в работающий прототип. Это совсем другой режим: быстро решить, что важно, и собрать минимально жизнеспособную версию.", "Хакатоны учат отсекать лишнее и доводить до результата под давлением времени."],
      en: ["A project built at a hackathon — where an idea has to become a working prototype within a couple of days. It's a completely different mode: quickly decide what matters and assemble a minimum viable version.", "Hackathons teach you to cut the excess and reach a result under time pressure."],
      uk: ["Проєкт, зроблений на хакатоні — там, де ідея має за пару днів перетворитися на робочий прототип. Це зовсім інший режим роботи.", "Хакатони вчать відсікати зайве й доводити до результату під тиском часу."],
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
      ru: ["Веб-сайт в рамках университетской лабораторной. Как и с другими учебными проектами, мне было интереснее сделать что-то аккуратное и осмысленное, а не сдать формальный минимум.", "Учебные работы — отличный повод спокойно отточить базовые навыки."],
      en: ["A website made as a university lab assignment. As with other academic projects, I found it more interesting to build something tidy and meaningful than to hand in the formal minimum.", "Academic work is a great excuse to calmly polish the basic skills."],
      uk: ["Вебсайт у межах університетської лабораторної. Як і з іншими навчальними проєктами, мені було цікавіше зробити щось акуратне.", "Навчальні роботи — чудовий привід спокійно відточити базові навички."],
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
      ru: ["Этот сайт — тоже проект. Под ним лежит собственный статический генератор на Node.js: данные всех проектов хранятся отдельно, а скрипт собирает из них главную страницу и страницу под каждый проект. Оформление на Tailwind CSS.", "Три языка — русский, английский, украинский — встроены прямо в страницы и переключаются мгновенно. Архив всего, что я сделал, тоже сделан с душой."],
      en: ["This site is a project too. Under it sits a custom static generator in Node.js: all project data is stored separately, and a script assembles the home page and a page for every project from it. Styled with Tailwind CSS.", "Three languages — Russian, English, Ukrainian — are built right into the pages and switch instantly. The archive of everything I've made is itself made with care."],
      uk: ["Цей сайт — теж проєкт. Під ним лежить власний статичний генератор на Node.js: дані всіх проєктів зберігаються окремо, а скрипт збирає з них головну сторінку та сторінку під кожен проєкт. Оформлення на Tailwind CSS.", "Три мови — російська, англійська, українська — вбудовані прямо в сторінки й перемикаються миттєво."],
    },
  },
];
