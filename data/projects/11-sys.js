/* Системное и CLI */
module.exports = [
  {
    id: "disk-data", name: "disk_data_rs", aka: "Мониторинг дисков",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["CLI", "Мониторинг", "Диски", "egui"],
    github: "https://github.com/AlexMelanFromRingo/disk_data_rs",
    short: {
      ru: "Инструмент мониторинга дисков в реальном времени — как CrystalDiskInfo, но для терминала.",
      en: "A real-time disk-monitoring tool — like CrystalDiskInfo, but for the terminal.",
      uk: "Інструмент моніторингу дисків у реальному часі — як CrystalDiskInfo, але для термінала.",
    },
    body: {
      ru: ["Мониторинг состояния дисков: температура, здоровье в процентах, скорость чтения и записи, часы наработки. Четыре режима вывода — живая таблица в терминале, окно с графикой на egui, JSON для конвейеров и запись с метками времени в лог.", "Удобный инструмент для тех, кто следит за здоровьем своего железа."],
      en: ["Disk health monitoring: temperature, health percentage, read/write speed, power-on hours. Four output modes — a live terminal table, an egui graphical window, JSON for pipelines and timestamped logging to a file.", "A handy tool for anyone watching their hardware's health."],
      uk: ["Моніторинг стану дисків: температура, здоров'я у відсотках, швидкість читання й запису, години напрацювання. Чотири режими виводу — жива таблиця, вікно з графікою на egui, JSON та лог.", "Зручний інструмент для тих, хто стежить за здоров'ям свого заліза."],
    },
  },
  {
    id: "lotus-led", name: "Lotus LED", aka: "Управление LED-лентами",
    category: "sys", status: "done", year: 2026, featured: true,
    langs: ["Rust", "Python"], tags: ["BLE", "Реверс-инжиниринг", "LED", "Ambilight"],
    github: "https://github.com/AlexMelanFromRingo/lotus-led",
    short: {
      ru: "Управление LED-лентами BLEDOM по Bluetooth — с реверс-инжинирингом протокола, на Rust и Python.",
      en: "Controlling BLEDOM LED strips over Bluetooth — with protocol reverse-engineering, in Rust and Python.",
      uk: "Керування LED-стрічками BLEDOM через Bluetooth — з реверс-інжинірингом протоколу, на Rust і Python.",
    },
    body: {
      ru: [
        "Дешёвые LED-ленты BLEDOM управляются убогим официальным приложением. Я разобрал по байтам их протокол по Bluetooth LE и написал собственное управление — сначала реверс-инжиниринг, затем библиотека и CLI на Rust, и отдельный контроллер на Python.",
        "В результате лента умеет куда больше: синхронизация со звуком через FFT, режим Ambilight по экрану, тепловая карта нагрузки системы, сцены, рассветы и таймеры сна. Хороший пример полного цикла — от вскрытия чужого протокола до удобного инструмента.",
      ],
      en: [
        "Cheap BLEDOM LED strips are controlled by a miserable official app. I reverse-engineered their Bluetooth LE protocol byte by byte and wrote my own control — first the reverse engineering, then a library and CLI in Rust, and a separate Python controller.",
        "As a result the strip can do much more: audio sync via FFT, an Ambilight mode following the screen, a system-load heatmap, scenes, sunrises and sleep timers. A good example of a full cycle — from cracking someone's protocol to a convenient tool.",
      ],
      uk: [
        "Дешеві LED-стрічки BLEDOM керуються убогим офіційним застосунком. Я розібрав по байтах їхній протокол через Bluetooth LE й написав власне керування — спершу реверс-інжиніринг, потім бібліотека та CLI на Rust, і окремий контролер на Python.",
        "У результаті стрічка вміє значно більше: синхронізація зі звуком через FFT, режим Ambilight, теплова карта навантаження, сцени, світанки й таймери сну.",
      ],
    },
  },
  {
    id: "server-monitor", name: "Server Monitor", aka: "Мониторинг сервера",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["CLI", "Мониторинг", "Сервер"],
    short: {
      ru: "Инструмент мониторинга состояния сервера — нагрузка, ресурсы, доступность.",
      en: "A server-monitoring tool — load, resources, availability.",
      uk: "Інструмент моніторингу стану сервера — навантаження, ресурси, доступність.",
    },
    body: {
      ru: ["Утилита, которая следит за сервером: загрузка процессора и памяти, использование диска, доступность сервисов. Полезно, когда держишь свои серверы и хочешь видеть их состояние без громоздких систем мониторинга.", "Написано на Rust ради лёгкости и надёжности — монитор не должен сам нагружать систему."],
      en: ["A utility that watches a server: CPU and memory load, disk usage, service availability. Useful when you run your own servers and want to see their state without heavyweight monitoring systems.", "Written in Rust for lightness and reliability — a monitor shouldn't load the system itself."],
      uk: ["Утиліта, що стежить за сервером: завантаження процесора й пам'яті, використання диска, доступність сервісів.", "Написано на Rust заради легкості й надійності — монітор не має сам навантажувати систему."],
    },
  },
  {
    id: "http-server", name: "HTTP Server", aka: "Веб-сервер с нуля",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust", "Go"], tags: ["HTTP", "Сервер", "Сеть"],
    short: {
      ru: "Реализация HTTP-сервера с нуля — на Rust и на Go.",
      en: "An HTTP server implemented from scratch — in Rust and Go.",
      uk: "Реалізація HTTP-сервера з нуля — на Rust і на Go.",
    },
    body: {
      ru: ["HTTP-сервер, написанный без фреймворков: разбор запросов, формирование ответов, работа с сокетами — всё руками. Сделано на Rust и на Go, чтобы сравнить подходы двух языков к сетевому коду.", "Понимать, что происходит под капотом веб-фреймворка, полезно для всего веб-программирования."],
      en: ["An HTTP server written without frameworks: parsing requests, building responses, socket work — all by hand. Done in Rust and Go to compare the two languages' approaches to networking code.", "Understanding what happens under a web framework's hood helps with all web programming."],
      uk: ["HTTP-сервер, написаний без фреймворків: розбір запитів, формування відповідей, робота із сокетами — усе руками. Зроблено на Rust і на Go.", "Розуміти, що відбувається під капотом вебфреймворка, корисно для всього вебпрограмування."],
    },
  },
  {
    id: "threaded-server", name: "Threaded Server", aka: "Многопоточный сервер",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["TCP", "Многопоточность", "Сервер"],
    github: "https://github.com/AlexMelanFromRingo/rust-threaded-server",
    short: {
      ru: "Простой многопоточный TCP-сервер на Rust.",
      en: "A simple multithreaded TCP server in Rust.",
      uk: "Простий багатопотоковий TCP-сервер на Rust.",
    },
    body: {
      ru: ["TCP-сервер, который обрабатывает несколько клиентов одновременно за счёт многопоточности. Базовый, но важный паттерн серверного программирования — пул потоков и параллельная обработка соединений.", "Хорошая отправная точка перед тем, как лезть в асинхронность."],
      en: ["A TCP server that handles several clients at once through multithreading. A basic but important server-programming pattern — a thread pool and parallel connection handling.", "A good starting point before diving into async."],
      uk: ["TCP-сервер, що обробляє кількох клієнтів одночасно завдяки багатопотоковості. Базовий, але важливий патерн серверного програмування.", "Гарна відправна точка перед тим, як лізти в асинхронність."],
    },
  },
  {
    id: "go-pinger", name: "Go Pinger", aka: "Пинг-утилита",
    category: "sys", status: "done", year: 2026,
    langs: ["Go"], tags: ["CLI", "Сеть", "ICMP"],
    short: {
      ru: "Утилита проверки доступности хостов по сети, написанная на Go.",
      en: "A host-reachability checking utility written in Go.",
      uk: "Утиліта перевірки доступності хостів через мережу, написана на Go.",
    },
    body: {
      ru: ["Своя реализация ping: отправляет пакеты хостам и измеряет, отвечают ли они и за какое время. Простой инструмент, но за ним стоит работа с сетью на низком уровне.", "Один из проектов, на которых я осваивал Go."],
      en: ["My own ping implementation: it sends packets to hosts and measures whether they reply and how fast. A simple tool, but behind it is low-level network work.", "One of the projects where I picked up Go."],
      uk: ["Власна реалізація ping: надсилає пакети хостам і вимірює, чи відповідають вони і за який час.", "Один із проєктів, на яких я освоював Go."],
    },
  },
  {
    id: "go-file-search", name: "Go File Search", aka: "Поиск файлов",
    category: "sys", status: "done", year: 2026,
    langs: ["Go"], tags: ["CLI", "Файлы", "Поиск"],
    short: {
      ru: "Консольная утилита быстрого поиска файлов на Go.",
      en: "A command-line fast file-search utility in Go.",
      uk: "Консольна утиліта швидкого пошуку файлів на Go.",
    },
    body: {
      ru: ["Утилита, которая быстро ищет файлы по имени и содержимому, обходя дерево каталогов. Go хорошо подходит для таких задач — простой код и быстрый результат.", "Практичная вещь и заодно упражнение по работе с файловой системой."],
      en: ["A utility that quickly finds files by name and content, walking the directory tree. Go suits such tasks well — simple code and a fast result.", "A practical thing and at the same time an exercise in filesystem work."],
      uk: ["Утиліта, що швидко шукає файли за іменем і вмістом, обходячи дерево каталогів.", "Практична річ і водночас вправа з роботи з файловою системою."],
    },
  },
  {
    id: "cli-todo", name: "CLI Todo", aka: "Список дел в терминале",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust", "Go"], tags: ["CLI", "Утилита", "Продуктивность"],
    short: {
      ru: "Менеджер списка дел для командной строки — на Rust и на Go.",
      en: "A command-line to-do manager — in Rust and Go.",
      uk: "Менеджер списку справ для командного рядка — на Rust і на Go.",
    },
    body: {
      ru: ["Список дел прямо в терминале: добавить задачу, отметить выполненной, посмотреть список. Классическое упражнение, через которое удобно осваивать новый язык — здесь сразу на Rust и Go.", "Минимализм CLI хорош тем, что вся суть — в логике, без отвлечения на интерфейс."],
      en: ["A to-do list right in the terminal: add a task, mark it done, view the list. A classic exercise that's convenient for picking up a new language — here in both Rust and Go.", "CLI minimalism is good because all the essence is in the logic, with no interface to distract you."],
      uk: ["Список справ прямо в терміналі: додати задачу, позначити виконаною, переглянути список. Класична вправа для освоєння нової мови.", "Мінімалізм CLI добрий тим, що вся суть — у логіці."],
    },
  },
  {
    id: "cli-pass-gen", name: "Password Generator", aka: "Генератор паролей",
    category: "sys", status: "done", year: 2026,
    langs: ["Go"], tags: ["CLI", "Безопасность", "Пароли"],
    short: {
      ru: "Консольный генератор стойких паролей на Go.",
      en: "A command-line strong-password generator in Go.",
      uk: "Консольний генератор стійких паролів на Go.",
    },
    body: {
      ru: ["Генератор паролей в терминале: задаёшь длину и набор символов — получаешь стойкий случайный пароль. Простой инструмент, но важно, что случайность здесь криптографически качественная.", "Маленькая утилита из тех, что реально используешь каждый день."],
      en: ["A password generator in the terminal: you set the length and character set and get a strong random password. A simple tool, but it matters that the randomness here is cryptographically sound.", "A small utility of the kind you actually use every day."],
      uk: ["Генератор паролів у терміналі: задаєш довжину й набір символів — отримуєш стійкий випадковий пароль.", "Маленька утиліта з тих, що справді використовуєш щодня."],
    },
  },
  {
    id: "go-cli-snake", name: "Terminal Snake", aka: "Змейка в консоли",
    category: "sys", status: "done", year: 2026,
    langs: ["Go"], tags: ["CLI", "Игра", "TUI"],
    short: {
      ru: "Классическая «Змейка», работающая прямо в терминале, на Go.",
      en: "The classic Snake game running right in the terminal, in Go.",
      uk: "Класична «Змійка», що працює прямо в терміналі, на Go.",
    },
    body: {
      ru: ["«Змейка» в текстовом терминале: управление с клавиатуры, поле из символов, счёт. Сделать игру в консоли — отдельный навык: нужно работать с вводом без буферизации и аккуратно перерисовывать экран.", "Маленький проект, который учит делать живой интерфейс в терминале."],
      en: ["Snake in a text terminal: keyboard control, a field of characters, a score. Making a game in the console is a separate skill: you have to work with unbuffered input and carefully redraw the screen.", "A small project that teaches building a live terminal interface."],
      uk: ["«Змійка» в текстовому терміналі: керування з клавіатури, поле із символів, рахунок. Зробити гру в консолі — окреме вміння.", "Маленький проєкт, що вчить робити живий інтерфейс у терміналі."],
    },
  },
  {
    id: "terminal-emulator", name: "Terminal Emulator", aka: "Эмулятор терминала",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Терминал", "Системное", "PTY"],
    short: {
      ru: "Реализация эмулятора терминала на Rust.",
      en: "An implementation of a terminal emulator in Rust.",
      uk: "Реалізація емулятора термінала на Rust.",
    },
    body: {
      ru: ["Терминал, которым все пользуются каждый день, — на самом деле сложная программа: псевдотерминалы, управляющие escape-последовательности, разбор вывода. Этот проект — реализация эмулятора терминала на Rust.", "Хороший заход в системное программирование — туда, где код общается с самой ОС."],
      en: ["The terminal everyone uses every day is actually a complex program: pseudo-terminals, control escape sequences, output parsing. This project is a Rust implementation of a terminal emulator.", "A good dive into systems programming — where code talks to the OS itself."],
      uk: ["Термінал, яким усі користуються щодня, — насправді складна програма: псевдотермінали, керівні escape-послідовності, розбір виводу.", "Гарний захід у системне програмування."],
    },
  },
  {
    id: "repl-interpreter", name: "REPL Interpreter", aka: "Интерпретатор",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Интерпретатор", "REPL", "Языки"],
    short: {
      ru: "Интерпретатор небольшого языка с интерактивным режимом REPL.",
      en: "An interpreter for a small language with an interactive REPL mode.",
      uk: "Інтерпретатор невеликої мови з інтерактивним режимом REPL.",
    },
    body: {
      ru: ["Интерпретатор маленького языка с REPL — режимом, где вводишь выражение и сразу видишь результат. Лексер, парсер, вычисление выражений — весь путь от текста к результату.", "Соседняя с моим компилятором «Кльова» тема: как языки программирования вообще исполняются."],
      en: ["An interpreter for a small language with a REPL — a mode where you type an expression and immediately see the result. Lexer, parser, expression evaluation — the whole path from text to result.", "A topic adjacent to my Kliova compiler: how programming languages are executed at all."],
      uk: ["Інтерпретатор маленької мови з REPL — режимом, де вводиш вираз і одразу бачиш результат. Лексер, парсер, обчислення виразів.", "Сусідня з моїм компілятором «Кльова» тема."],
    },
  },
  {
    id: "matrix-calculator", name: "Matrix Calculator", aka: "Калькулятор матриц",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["CLI", "Математика", "Линейная алгебра"],
    short: {
      ru: "Калькулятор матричных операций на Rust.",
      en: "A matrix-operations calculator in Rust.",
      uk: "Калькулятор матричних операцій на Rust.",
    },
    body: {
      ru: ["Калькулятор для операций над матрицами: умножение, определитель, обращение, решение систем. Линейная алгебра — фундамент и графики, и машинного обучения, так что свой матричный калькулятор пригождается.", "Заодно практика аккуратной работы с числами и алгоритмами."],
      en: ["A calculator for matrix operations: multiplication, determinant, inversion, solving systems. Linear algebra is the foundation of both graphics and machine learning, so your own matrix calculator comes in handy.", "Also practice in careful work with numbers and algorithms."],
      uk: ["Калькулятор для операцій над матрицями: множення, визначник, обернення, розв'язання систем. Лінійна алгебра — фундамент і графіки, і машинного навчання.", "Заразом практика акуратної роботи з числами та алгоритмами."],
    },
  },
  {
    id: "life-game", name: "Game of Life", aka: "Жизнь Конвея",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Клеточные автоматы", "Симуляция"],
    short: {
      ru: "Реализация клеточного автомата «Жизнь» Конвея на Rust.",
      en: "An implementation of Conway's Game of Life cellular automaton in Rust.",
      uk: "Реалізація клітинного автомата «Життя» Конвея на Rust.",
    },
    body: {
      ru: ["«Жизнь» Конвея — знаменитый клеточный автомат: всего несколько правил, а из них рождается невероятно сложное поведение. Эта реализация на Rust показывает, как из простого получается сложное.", "Классика, которую интересно написать самому хотя бы раз."],
      en: ["Conway's Game of Life is the famous cellular automaton: just a few rules, yet incredibly complex behaviour emerges from them. This Rust implementation shows how the complex arises from the simple.", "A classic worth writing yourself at least once."],
      uk: ["«Життя» Конвея — знаменитий клітинний автомат: лише кілька правил, а з них народжується неймовірно складна поведінка.", "Класика, яку цікаво написати самому хоча б раз."],
    },
  },
  {
    id: "layout-switcher", name: "Layout Switcher", aka: "Переключатель раскладки",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Утилита", "Клавиатура", "Системное"],
    short: {
      ru: "Утилита для умного переключения раскладки клавиатуры.",
      en: "A utility for smart keyboard-layout switching.",
      uk: "Утиліта для розумного перемикання розкладки клавіатури.",
    },
    body: {
      ru: ["Все знают боль печати «ghbdtn» вместо «привет». Эта утилита помогает с раскладкой — переключает её удобнее, чем системные средства, и исправляет уже набранное не на той раскладке.", "Маленькая системная утилита, которая убирает повседневное раздражение."],
      en: ["Everyone knows the pain of typing 'ghbdtn' instead of 'привет'. This utility helps with the layout — it switches more conveniently than system tools and fixes text already typed in the wrong layout.", "A small system utility that removes a daily annoyance."],
      uk: ["Усі знають біль друку «ghbdtn» замість «привіт». Ця утиліта допомагає з розкладкою — перемикає зручніше за системні засоби й виправляє вже набране.", "Маленька системна утиліта, що прибирає щоденне роздратування."],
    },
  },
  {
    id: "vault-note", name: "Vault Note", aka: "Зашифрованные заметки",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Шифрование", "Заметки", "CLI"],
    short: {
      ru: "Менеджер зашифрованных заметок для командной строки.",
      en: "An encrypted-note manager for the command line.",
      uk: "Менеджер зашифрованих нотаток для командного рядка.",
    },
    body: {
      ru: ["Заметки, которые хранятся зашифрованными и открываются только по паролю. Удобно держать в них чувствительное — пароли, ключи, личное — прямо в терминале и без доверия облакам.", "Соединяет две мои постоянные темы: удобные инструменты и реальная криптография."],
      en: ["Notes stored encrypted and opened only with a password. Handy for keeping sensitive things — passwords, keys, personal stuff — right in the terminal without trusting clouds.", "It connects two of my constant themes: convenient tools and real cryptography."],
      uk: ["Нотатки, що зберігаються зашифрованими й відкриваються лише за паролем. Зручно тримати в них чутливе прямо в терміналі.", "Поєднує дві мої постійні теми: зручні інструменти та справжню криптографію."],
    },
  },
  {
    id: "markdown-notes", name: "Markdown Notes", aka: "Заметки в Markdown",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Markdown", "Заметки", "Приложение"],
    short: {
      ru: "Приложение для ведения заметок в формате Markdown на Rust.",
      en: "A Markdown note-taking application in Rust.",
      uk: "Застосунок для ведення нотаток у форматі Markdown на Rust.",
    },
    body: {
      ru: ["Приложение для заметок в Markdown: пишешь обычным текстом с лёгкой разметкой, получаешь аккуратно оформленный результат. Markdown — мой основной формат для всего текстового, так что свой инструмент под него логичен.", "Идёт в одном ряду с MDrenderer и моими читалками Markdown."],
      en: ["A Markdown note-taking app: you write plain text with light markup and get a neatly formatted result. Markdown is my main format for everything textual, so a tool of my own for it makes sense.", "It sits alongside MDrenderer and my Markdown readers."],
      uk: ["Застосунок для нотаток у Markdown: пишеш звичайним текстом із легкою розміткою, отримуєш акуратно оформлений результат.", "Іде в одному ряду з MDrenderer і моїми читалками Markdown."],
    },
  },
  {
    id: "md-reader", name: "Markdown Reader", aka: "Читалки Markdown",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Markdown", "GUI", "TUI"],
    github: "https://github.com/AlexMelanFromRingo/rust-md-reader-tui",
    short: {
      ru: "Читалки файлов Markdown на Rust — в двух вариантах: оконном и терминальном.",
      en: "Markdown file readers in Rust — in two variants: windowed and terminal.",
      uk: "Читалки файлів Markdown на Rust — у двох варіантах: віконному й термінальному.",
    },
    body: {
      ru: ["Две читалки Markdown: одна с графическим интерфейсом, другая для терминала. Один и тот же файл, два разных способа его показать — удобно сравнить, как одна задача решается в GUI и в TUI.", "Часть моей коллекции инструментов для работы с Markdown."],
      en: ["Two Markdown readers: one with a graphical interface, the other for the terminal. The same file, two different ways to show it — a handy comparison of how one task is solved in a GUI and a TUI.", "Part of my collection of Markdown tooling."],
      uk: ["Дві читалки Markdown: одна з графічним інтерфейсом, інша для термінала. Один файл, два способи його показати.", "Частина моєї колекції інструментів для роботи з Markdown."],
    },
  },
  {
    id: "dynamic-compilation", name: "Dynamic Compilation PoC", aka: "Компиляция на лету",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Компиляция", "PoC", "Метапрограммирование"],
    short: {
      ru: "Доказательство концепции динамической компиляции и загрузки кода во время работы.",
      en: "A proof of concept for dynamically compiling and loading code at runtime.",
      uk: "Доказ концепції динамічної компіляції та завантаження коду під час роботи.",
    },
    body: {
      ru: ["Эксперимент: программа, которая компилирует и подгружает новый код прямо во время своей работы. Это даёт гибкость плагинов и горячих обновлений, но требует аккуратной работы с системой.", "Любопытная тема на стыке компиляторов и системного программирования."],
      en: ["An experiment: a program that compiles and loads new code right while it runs. This gives the flexibility of plugins and hot updates, but requires careful work with the system.", "A curious topic between compilers and systems programming."],
      uk: ["Експеримент: програма, що компілює й підвантажує новий код прямо під час своєї роботи. Це дає гнучкість плагінів і гарячих оновлень.", "Цікава тема на стику компіляторів і системного програмування."],
    },
  },
  {
    id: "windows-sort", name: "Windows Sort", aka: "Сортировка файлов",
    category: "sys", status: "done", year: 2024,
    langs: ["Java"], tags: ["Файлы", "Автоматизация", "Утилита"],
    short: {
      ru: "Утилита для автоматической сортировки файлов по папкам в Windows.",
      en: "A utility for automatically sorting files into folders on Windows.",
      uk: "Утиліта для автоматичного сортування файлів по папках у Windows.",
    },
    body: {
      ru: ["Папка «Загрузки» у всех превращается в свалку. Эта утилита раскладывает файлы по папкам автоматически — по типу, расширению, дате. Один запуск — и порядок.", "Маленькая автоматизация бытовой рутины, которой пользуешься постоянно."],
      en: ["Everyone's Downloads folder turns into a dump. This utility sorts files into folders automatically — by type, extension, date. One run and there's order.", "A small automation of everyday routine that you use constantly."],
      uk: ["Папка «Завантаження» у всіх перетворюється на смітник. Ця утиліта розкладає файли по папках автоматично — за типом, розширенням, датою.", "Маленька автоматизація побутової рутини."],
    },
  },
  {
    id: "screencapture", name: "Screen Capture", aka: "Захват экрана",
    category: "sys", status: "done", year: 2024,
    langs: ["Java"], tags: ["Экран", "Утилита", "Графика"],
    short: {
      ru: "Утилита для захвата изображения с экрана на Java.",
      en: "A screen-capture utility in Java.",
      uk: "Утиліта для захоплення зображення з екрана на Java.",
    },
    body: {
      ru: ["Инструмент для снятия скриншотов и захвата области экрана. Простой по идее, но за ним — работа с графической подсистемой и экраном из кода.", "Базовая утилита, полезная и сама по себе, и как кусок для проектов покрупнее."],
      en: ["A tool for taking screenshots and capturing a screen region. Simple in idea, but behind it is working with the graphics subsystem and the screen from code.", "A basic utility, useful both on its own and as a piece for bigger projects."],
      uk: ["Інструмент для знімання скриншотів і захоплення області екрана. Простий за ідеєю, але за ним — робота з графічною підсистемою.", "Базова утиліта, корисна і сама по собі, і як шматок для більших проєктів."],
    },
  },
  {
    id: "maven-to-gradle", name: "Maven to Gradle", aka: "Конвертер сборки",
    category: "sys", status: "done", year: 2023,
    langs: ["Python"], tags: ["Сборка", "Java", "Автоматизация"],
    short: {
      ru: "Инструмент для конвертации проектов со сборки Maven на Gradle.",
      en: "A tool for converting projects from the Maven build system to Gradle.",
      uk: "Інструмент для конвертації проєктів зі збірки Maven на Gradle.",
    },
    body: {
      ru: ["Maven и Gradle — две системы сборки Java-проектов, и переезжать с одной на другую вручную муторно. Этот инструмент автоматизирует перевод конфигурации сборки.", "Родился из практической нужды — я много делаю на Java, и переключаться между системами сборки приходилось не раз."],
      en: ["Maven and Gradle are two Java build systems, and moving from one to the other by hand is tedious. This tool automates translating the build configuration.", "It was born of a practical need — I do a lot in Java and have had to switch build systems more than once."],
      uk: ["Maven і Gradle — дві системи збірки Java-проєктів, і переїжджати з однієї на іншу вручну марудно. Цей інструмент автоматизує переклад конфігурації.", "Народився з практичної потреби."],
    },
  },
  {
    id: "upgrade-libraries", name: "Upgrade Libraries", aka: "Обновление зависимостей",
    category: "sys", status: "done", year: 2023,
    langs: ["Python"], tags: ["Зависимости", "Автоматизация", "Утилита"],
    short: {
      ru: "Скрипт для автоматического обновления библиотек проекта с резервной копией.",
      en: "A script for automatically upgrading a project's libraries with a backup.",
      uk: "Скрипт для автоматичного оновлення бібліотек проєкту з резервною копією.",
    },
    body: {
      ru: ["Обновлять зависимости проекта вручную — скучно и легко что-нибудь сломать. Скрипт делает это сам и при этом сохраняет резервную копию состояния, чтобы можно было откатиться.", "Маленький, но полезный инструмент обслуживания проектов."],
      en: ["Upgrading a project's dependencies by hand is boring and easy to break something. The script does it itself and keeps a backup of the previous state so you can roll back.", "A small but useful project-maintenance tool."],
      uk: ["Оновлювати залежності проєкту вручну — нудно й легко щось зламати. Скрипт робить це сам і зберігає резервну копію стану.", "Маленький, але корисний інструмент обслуговування проєктів."],
    },
  },
  {
    id: "go-rsahd", name: "Go RSA-HD", aka: "RSA-инструмент на Go",
    category: "sys", status: "done", year: 2026,
    langs: ["Go"], tags: ["RSA", "CLI", "Криптография"],
    short: {
      ru: "Консольный инструмент для работы с ключами RSA на Go.",
      en: "A command-line RSA-key tool in Go.",
      uk: "Консольний інструмент для роботи з ключами RSA на Go.",
    },
    body: {
      ru: ["CLI-утилита на Go для генерации и работы с ключами RSA. Тема криптографии, но в практичной форме инструмента командной строки.", "Ещё один проект, на котором я осваивал Go и заодно повторял основы асимметричного шифрования."],
      en: ["A Go CLI utility for generating and working with RSA keys. A cryptography topic, but in the practical form of a command-line tool.", "Another project where I picked up Go and revisited the basics of asymmetric encryption."],
      uk: ["CLI-утиліта на Go для генерації та роботи з ключами RSA. Тема криптографії, але в практичній формі інструмента командного рядка.", "Ще один проєкт, на якому я освоював Go."],
    },
  },
];
