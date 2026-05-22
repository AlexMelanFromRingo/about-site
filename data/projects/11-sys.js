/* Системное и CLI */
module.exports = [
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
        "Дешёвые LED-ленты BLEDOM / ELK-BLEDOM / Lotus Lantern продаются повсюду, но управляются убогим официальным мобильным приложением. Я решил это исправить.",
        "Сначала был реверс-инжиниринг: я разобрал по байтам их протокол поверх Bluetooth LE — как кодируются цвет, яркость, режимы. Затем на этой основе написал собственное управление: библиотека и CLI на Rust, и отдельный контроллер на Python. Rust-версия кросс-компилируется в Windows-exe прямо из WSL.",
        "В результате лента умеет куда больше, чем в родном приложении: синхронизация со звуком через FFT, режим Ambilight по экрану, тепловая карта нагрузки системы, сцены, рассветы и таймеры сна. Полный цикл — от вскрытия чужого протокола до удобного инструмента.",
      ],
      en: [
        "Cheap BLEDOM / ELK-BLEDOM / Lotus Lantern LED strips are sold everywhere but controlled by a miserable official mobile app. I decided to fix that.",
        "First came the reverse engineering: I dissected their Bluetooth LE protocol byte by byte — how colour, brightness and modes are encoded. Then on that basis I wrote my own control: a library and CLI in Rust, and a separate Python controller. The Rust version cross-compiles to a Windows .exe right from WSL.",
        "As a result the strip can do far more than in the native app: audio sync via FFT, an Ambilight mode following the screen, a system-load heatmap, scenes, sunrises and sleep timers. A full cycle — from cracking someone's protocol to a convenient tool.",
      ],
      uk: [
        "Дешеві LED-стрічки BLEDOM продаються всюди, але керуються убогим офіційним застосунком.",
        "Спершу був реверс-інжиніринг: я розібрав їхній Bluetooth LE протокол по байтах. Потім написав власне керування: бібліотека та CLI на Rust, окремий контролер на Python.",
        "У результаті стрічка вміє значно більше: синхронізація зі звуком через FFT, Ambilight, теплова карта навантаження, сцени, світанки й таймери сну.",
      ],
    },
    features: {
      ru: ["Реверс-инжиниринг BLE-протокола лент BLEDOM", "Библиотека и CLI на Rust, контроллер на Python", "Синхронизация со звуком через FFT", "Режим Ambilight по экрану и тепловая карта нагрузки", "Сцены, рассветы, таймеры сна", "Кросс-компиляция в Windows-exe из WSL"],
      en: ["Reverse-engineering of the BLEDOM strips' BLE protocol", "A Rust library and CLI, a Python controller", "Audio sync via FFT", "An Ambilight screen mode and a system-load heatmap", "Scenes, sunrises, sleep timers", "Cross-compilation to a Windows .exe from WSL"],
      uk: ["Реверс-інжиніринг BLE-протоколу стрічок BLEDOM", "Бібліотека та CLI на Rust, контролер на Python", "Синхронізація зі звуком через FFT", "Режим Ambilight та теплова карта навантаження", "Сцени, світанки, таймери сну", "Крос-компіляція у Windows-exe з WSL"],
    },
  },
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
      ru: [
        "Инструмент следит за состоянием дисков в реальном времени: температура, здоровье в процентах, скорость чтения и записи, общий объём прочитанного и записанного, часы наработки.",
        "Главная фишка — четыре режима вывода под разные сценарии: живая авто-обновляемая таблица в терминале, графическое окно-оверлей на egui, JSON для конвейеров (можно скормить в jq или скрипт) и режим лога с записью в файл по меткам времени.",
        "Полезный инструмент для всех, кто следит за здоровьем своего железа и хочет это делать из терминала, а не из тяжёлой GUI-программы.",
      ],
      en: [
        "The tool watches disk health in real time: temperature, health percentage, read/write speed, total bytes read and written, power-on hours.",
        "The main feature is four output modes for different scenarios: a live auto-refreshing terminal table, a graphical egui overlay window, JSON for pipelines (you can feed it into jq or a script) and a log mode that writes timestamped entries to a file.",
        "A useful tool for anyone watching their hardware's health who wants to do it from the terminal rather than a heavy GUI program.",
      ],
      uk: [
        "Інструмент стежить за станом дисків у реальному часі: температура, здоров'я, швидкість читання й запису, години напрацювання.",
        "Чотири режими виводу: жива таблиця в терміналі, графічне вікно на egui, JSON для конвеєрів і режим логу.",
        "Корисний інструмент для тих, хто стежить за здоров'ям заліза з термінала.",
      ],
    },
    features: {
      ru: ["Мониторинг температуры, здоровья и скорости дисков", "Режим live — авто-обновляемая таблица в терминале", "Режим gui — графическое окно-оверлей на egui", "Режим pipe — JSON для конвейеров и скриптов", "Режим log — запись в файл по меткам времени"],
      en: ["Monitoring of disk temperature, health and speed", "Live mode — an auto-refreshing terminal table", "GUI mode — a graphical egui overlay window", "Pipe mode — JSON for pipelines and scripts", "Log mode — timestamped writing to a file"],
      uk: ["Моніторинг температури, здоров'я та швидкості дисків", "Режим live — авто-оновлювана таблиця в терміналі", "Режим gui — графічне вікно на egui", "Режим pipe — JSON для конвеєрів", "Режим log — запис у файл за мітками часу"],
    },
  },
  {
    id: "server-monitor", name: "Server Monitor", aka: "Мониторинг сервера",
    category: "sys", status: "done", year: 2026,
    langs: ["Rust"], tags: ["CLI", "Мониторинг", "Сервер"],
    github: "https://github.com/AlexMelanFromRingo/rust-server-monitor",
    short: {
      ru: "Инструмент мониторинга состояния сервера — нагрузка, ресурсы, доступность.",
      en: "A server-monitoring tool — load, resources, availability.",
      uk: "Інструмент моніторингу стану сервера — навантаження, ресурси, доступність.",
    },
    body: {
      ru: [
        "Утилита, которая следит за сервером: загрузка процессора и памяти, использование диска, доступность сервисов. Лёгкая альтернатива громоздким системам мониторинга.",
        "Полезно, когда держишь свои серверы — например, игровые, как я, — и хочешь видеть их состояние без разворачивания тяжёлой инфраструктуры наблюдения.",
        "Написано на Rust ради лёгкости и надёжности: монитор не должен сам заметно нагружать систему, за которой следит.",
      ],
      en: [
        "A utility that watches a server: CPU and memory load, disk usage, service availability. A lightweight alternative to heavyweight monitoring systems.",
        "Useful when you run your own servers — game servers, like I do, for example — and want to see their state without deploying heavy observation infrastructure.",
        "Written in Rust for lightness and reliability: a monitor shouldn't itself noticeably load the system it watches.",
      ],
      uk: [
        "Утиліта, що стежить за сервером: завантаження процесора й пам'яті, використання диска, доступність сервісів.",
        "Корисно, коли тримаєш свої сервери й хочеш бачити їхній стан без важкої інфраструктури.",
        "Написано на Rust заради легкості й надійності.",
      ],
    },
    features: {
      ru: ["Мониторинг загрузки CPU, памяти, диска", "Проверка доступности сервисов", "Лёгкая альтернатива тяжёлым системам мониторинга", "Минимальная собственная нагрузка на систему"],
      en: ["Monitoring of CPU, memory and disk load", "Service-availability checks", "A lightweight alternative to heavy monitoring systems", "Minimal load on the system itself"],
      uk: ["Моніторинг завантаження CPU, пам'яті, диска", "Перевірка доступності сервісів", "Легка альтернатива важким системам моніторингу", "Мінімальне власне навантаження на систему"],
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
      ru: [
        "HTTP-сервер, написанный без фреймворков: разбор входящего запроса по строкам, формирование корректного ответа, работа с TCP-сокетами — всё руками.",
        "Сделано на двух языках, Rust и Go, чтобы сравнить их подходы к сетевому коду. Это типичная для меня практика — один и тот же фундамент на разных языках.",
        "Понимать, что именно происходит под капотом любого веб-фреймворка, очень полезно: после такого сервера фреймворки перестают быть магией.",
      ],
      en: [
        "An HTTP server written without frameworks: parsing the incoming request line by line, building a correct response, working with TCP sockets — all by hand.",
        "Done in two languages, Rust and Go, to compare their approaches to networking code. It's typical practice for me — the same foundation in different languages.",
        "Understanding exactly what happens under any web framework's hood is very useful: after a server like this, frameworks stop being magic.",
      ],
      uk: [
        "HTTP-сервер, написаний без фреймворків: розбір запиту, формування відповіді, робота із сокетами — усе руками.",
        "Зроблено двома мовами, Rust і Go, щоб порівняти підходи до мережевого коду.",
        "Розуміти, що відбувається під капотом вебфреймворка, дуже корисно.",
      ],
    },
    features: {
      ru: ["HTTP-сервер без фреймворков", "Разбор запросов и формирование ответов вручную", "Прямая работа с TCP-сокетами", "Две реализации: Rust и Go"],
      en: ["An HTTP server with no frameworks", "Manual request parsing and response building", "Direct work with TCP sockets", "Two implementations: Rust and Go"],
      uk: ["HTTP-сервер без фреймворків", "Розбір запитів і формування відповідей вручну", "Пряма робота з TCP-сокетами", "Дві реалізації: Rust і Go"],
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
      ru: [
        "TCP-сервер, который обрабатывает несколько клиентов одновременно за счёт многопоточности: каждое соединение уходит в свой поток и не блокирует остальные.",
        "Это базовый, но фундаментальный паттерн серверного программирования — пул потоков и параллельная обработка соединений. С него начинается понимание того, как серверы держат много клиентов сразу.",
        "Хорошая отправная точка перед тем, как лезть в асинхронность — async решает ту же задачу иначе, и сравнить подходы куда проще, когда видел оба.",
      ],
      en: [
        "A TCP server that handles several clients at once through multithreading: each connection goes into its own thread and doesn't block the others.",
        "It's a basic but fundamental server-programming pattern — a thread pool and parallel connection handling. Understanding how servers hold many clients at once starts here.",
        "A good starting point before diving into async — async solves the same task differently, and comparing the approaches is much easier once you've seen both.",
      ],
      uk: [
        "TCP-сервер, що обробляє кількох клієнтів одночасно завдяки багатопотоковості.",
        "Базовий, але фундаментальний патерн серверного програмування — пул потоків.",
        "Гарна відправна точка перед тим, як лізти в асинхронність.",
      ],
    },
    features: {
      ru: ["Многопоточный TCP-сервер", "Каждое соединение в своём потоке", "Параллельная обработка клиентов", "Основа перед изучением асинхронности"],
      en: ["A multithreaded TCP server", "Each connection in its own thread", "Parallel client handling", "A base before learning async"],
      uk: ["Багатопотоковий TCP-сервер", "Кожне з'єднання у своєму потоці", "Паралельна обробка клієнтів", "Основа перед вивченням асинхронності"],
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
      ru: [
        "Своя реализация привычной команды ping: утилита отправляет пакеты хостам и измеряет, отвечают ли они и за какое время.",
        "Простой инструмент с виду, но за ним — работа с сетью на низком уровне: формирование ICMP-пакетов, замер времени отклика. Не вызов системной команды, а собственная реализация.",
        "Один из проектов, на которых я осваивал Go и его подход к сетевому программированию.",
      ],
      en: [
        "My own implementation of the familiar ping command: the utility sends packets to hosts and measures whether they reply and how fast.",
        "A simple tool on the surface, but behind it is low-level network work: building ICMP packets, measuring response time. Not a call to a system command but a real implementation.",
        "One of the projects where I picked up Go and its approach to network programming.",
      ],
      uk: [
        "Власна реалізація звичної команди ping: утиліта надсилає пакети хостам і вимірює час відповіді.",
        "За простим інструментом — робота з мережею на низькому рівні: формування ICMP-пакетів.",
        "Один із проєктів, на яких я освоював Go.",
      ],
    },
    features: {
      ru: ["Своя реализация ping на Go", "Формирование ICMP-пакетов вручную", "Замер времени отклика хостов", "Сетевое программирование на низком уровне"],
      en: ["A custom ping implementation in Go", "Manual ICMP-packet building", "Measuring host response time", "Low-level network programming"],
      uk: ["Власна реалізація ping на Go", "Формування ICMP-пакетів вручну", "Замір часу відповіді хостів", "Мережеве програмування на низькому рівні"],
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
      ru: [
        "Утилита, которая быстро ищет файлы по имени и содержимому, рекурсивно обходя дерево каталогов.",
        "Go хорошо подходит для таких задач: простой и быстрый код, удобная работа с файловой системой, лёгкая параллельность для ускорения обхода больших папок.",
        "Практичная вещь и одновременно упражнение по работе с файловой системой из кода.",
      ],
      en: [
        "A utility that quickly finds files by name and content, recursively walking the directory tree.",
        "Go suits such tasks well: simple and fast code, convenient filesystem handling, easy concurrency to speed up walking large folders.",
        "A practical thing and at the same time an exercise in filesystem work from code.",
      ],
      uk: [
        "Утиліта, що швидко шукає файли за іменем і вмістом, рекурсивно обходячи дерево каталогів.",
        "Go добре підходить для таких задач: простий код, зручна робота з файловою системою.",
        "Практична річ і вправа з роботи з файловою системою.",
      ],
    },
    features: {
      ru: ["Поиск файлов по имени и содержимому", "Рекурсивный обход дерева каталогов", "Быстрая работа с файловой системой на Go", "Практичная консольная утилита"],
      en: ["File search by name and content", "Recursive directory-tree walking", "Fast filesystem work in Go", "A practical command-line utility"],
      uk: ["Пошук файлів за іменем і вмістом", "Рекурсивний обхід дерева каталогів", "Швидка робота з файловою системою на Go", "Практична консольна утиліта"],
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
      ru: [
        "Список дел прямо в терминале: добавить задачу, отметить выполненной, удалить, посмотреть список. Задачи сохраняются между запусками.",
        "Менеджер задач — классическое упражнение, через которое удобно осваивать новый язык: оно небольшое, но затрагивает разбор аргументов, хранение данных, форматированный вывод. Здесь я сделал его сразу на Rust и Go.",
        "Минимализм CLI хорош тем, что вся суть — в логике и хранении, без отвлечения на интерфейс.",
      ],
      en: [
        "A to-do list right in the terminal: add a task, mark it done, delete it, view the list. Tasks persist between runs.",
        "A task manager is a classic exercise convenient for picking up a new language: it's small but touches argument parsing, data storage, formatted output. Here I did it in both Rust and Go.",
        "CLI minimalism is good because all the essence is in logic and storage, with no interface to distract you.",
      ],
      uk: [
        "Список справ прямо в терміналі: додати задачу, позначити виконаною, видалити. Задачі зберігаються між запусками.",
        "Менеджер задач — класична вправа для освоєння нової мови. Тут я зробив його на Rust і Go.",
        "Мінімалізм CLI добрий тим, що вся суть — у логіці.",
      ],
    },
    features: {
      ru: ["Добавление, выполнение, удаление задач", "Сохранение списка между запусками", "Две реализации: Rust и Go", "Классическое упражнение для освоения языка"],
      en: ["Adding, completing, deleting tasks", "List persistence between runs", "Two implementations: Rust and Go", "A classic language-learning exercise"],
      uk: ["Додавання, виконання, видалення задач", "Збереження списку між запусками", "Дві реалізації: Rust і Go", "Класична вправа для освоєння мови"],
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
      ru: [
        "Генератор паролей в терминале: задаёшь длину и набор символов — получаешь стойкий случайный пароль.",
        "Простой инструмент, но с важной деталью: случайность здесь должна быть криптографически качественной. Обычный генератор случайных чисел для паролей не годится — он предсказуем.",
        "Маленькая утилита из тех, что реально используешь каждый день. Тема паролей у меня перекликается с проектами по генерации словарей и стойкости паролей.",
      ],
      en: [
        "A password generator in the terminal: you set the length and character set and get a strong random password.",
        "A simple tool, but with an important detail: the randomness here must be cryptographically sound. An ordinary random-number generator won't do for passwords — it's predictable.",
        "A small utility of the kind you actually use every day. The password theme connects to my wordlist-generation and password-strength projects.",
      ],
      uk: [
        "Генератор паролів у терміналі: задаєш довжину й набір символів — отримуєш стійкий випадковий пароль.",
        "Важлива деталь: випадковість має бути криптографічно якісною.",
        "Маленька утиліта, яку справді використовуєш щодня.",
      ],
    },
    features: {
      ru: ["Генерация стойких случайных паролей", "Настройка длины и набора символов", "Криптографически качественная случайность", "Простая повседневная утилита"],
      en: ["Generation of strong random passwords", "Configurable length and character set", "Cryptographically sound randomness", "A simple everyday utility"],
      uk: ["Генерація стійких випадкових паролів", "Налаштування довжини й набору символів", "Криптографічно якісна випадковість", "Проста повсякденна утиліта"],
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
      ru: [
        "«Змейка» в текстовом терминале: управление с клавиатуры, игровое поле из символов, счёт очков.",
        "Сделать игру в консоли — это отдельный навык. Нужно работать с вводом без буферизации (чтобы реагировать на клавишу сразу, а не по Enter), аккуратно перерисовывать экран и держать стабильный игровой цикл.",
        "Маленький проект, который учит делать живой интерактивный интерфейс там, где, казалось бы, есть только текст.",
      ],
      en: [
        "Snake in a text terminal: keyboard control, a game field of characters, a score.",
        "Making a game in the console is a separate skill. You have to work with unbuffered input (to react to a key immediately rather than on Enter), carefully redraw the screen and keep a stable game loop.",
        "A small project that teaches building a live interactive interface where there seems to be only text.",
      ],
      uk: [
        "«Змійка» в текстовому терміналі: керування з клавіатури, поле із символів, рахунок.",
        "Зробити гру в консолі — окреме вміння: ввід без буферизації, акуратне перемальовування екрана.",
        "Маленький проєкт, що вчить робити живий інтерфейс там, де є лише текст.",
      ],
    },
    features: {
      ru: ["«Змейка» в текстовом терминале", "Ввод без буферизации — мгновенная реакция на клавиши", "Аккуратная перерисовка экрана", "Стабильный игровой цикл в консоли"],
      en: ["Snake in a text terminal", "Unbuffered input — instant key reaction", "Careful screen redrawing", "A stable game loop in the console"],
      uk: ["«Змійка» в текстовому терміналі", "Ввід без буферизації — миттєва реакція на клавіші", "Акуратне перемальовування екрана", "Стабільний ігровий цикл у консолі"],
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
      ru: [
        "Терминал, которым все пользуются каждый день, — на самом деле сложная программа. Эмулятор терминала — это не сама командная оболочка, а окно, в котором она живёт.",
        "В проекте реализованы ключевые части: псевдотерминал (PTY) для запуска оболочки, разбор управляющих escape-последовательностей (которыми задаются цвета, перемещение курсора, очистка), отрисовка результата.",
        "Хороший заход в системное программирование — туда, где код общается напрямую с операционной системой и её механизмами.",
      ],
      en: [
        "The terminal everyone uses every day is actually a complex program. A terminal emulator isn't the command shell itself but the window the shell lives in.",
        "The project implements the key parts: a pseudo-terminal (PTY) for launching the shell, parsing control escape sequences (which set colours, cursor movement, clearing), rendering the result.",
        "A good dive into systems programming — where code talks directly to the operating system and its mechanisms.",
      ],
      uk: [
        "Термінал — насправді складна програма. Емулятор термінала — це не сама оболонка, а вікно, у якому вона живе.",
        "Реалізовано ключові частини: псевдотермінал (PTY), розбір керівних escape-послідовностей, відмалювання.",
        "Гарний захід у системне програмування.",
      ],
    },
    features: {
      ru: ["Псевдотерминал (PTY) для запуска оболочки", "Разбор управляющих escape-последовательностей", "Отрисовка вывода терминала", "Системное программирование на Rust"],
      en: ["A pseudo-terminal (PTY) for launching the shell", "Parsing of control escape sequences", "Rendering of terminal output", "Systems programming in Rust"],
      uk: ["Псевдотермінал (PTY) для запуску оболонки", "Розбір керівних escape-послідовностей", "Відмалювання виводу термінала", "Системне програмування на Rust"],
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
      ru: [
        "Интерпретатор маленького языка с режимом REPL — read-eval-print loop, где вводишь выражение и сразу видишь результат, как в консоли Python.",
        "Реализован весь путь от текста к результату: лексер разбивает код на токены, парсер строит из них дерево, вычислитель обходит дерево и считает значения.",
        "Соседняя с моим компилятором «Кльова» тема, но с другой стороны: компилятор переводит код в машинный, а интерпретатор исполняет его напрямую. Полезно понимать оба пути.",
      ],
      en: [
        "An interpreter for a small language with a REPL mode — a read-eval-print loop where you type an expression and immediately see the result, like in the Python console.",
        "The whole path from text to result is implemented: a lexer splits the code into tokens, a parser builds a tree from them, an evaluator walks the tree and computes values.",
        "A topic adjacent to my Kliova compiler, but from another angle: a compiler translates code into machine code, an interpreter executes it directly. It's useful to understand both paths.",
      ],
      uk: [
        "Інтерпретатор маленької мови з режимом REPL — вводиш вираз і одразу бачиш результат.",
        "Реалізовано весь шлях: лексер, парсер, обчислювач.",
        "Сусідня з компілятором «Кльова» тема, але з іншого боку.",
      ],
    },
    features: {
      ru: ["Интерпретатор небольшого языка", "Интерактивный режим REPL", "Лексер, парсер, вычислитель выражений", "Дополняет тему компилятора «Кльова»"],
      en: ["An interpreter for a small language", "An interactive REPL mode", "Lexer, parser, expression evaluator", "Complements the Kliova compiler theme"],
      uk: ["Інтерпретатор невеликої мови", "Інтерактивний режим REPL", "Лексер, парсер, обчислювач виразів", "Доповнює тему компілятора «Кльова»"],
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
      ru: [
        "Калькулятор для операций над матрицами: умножение, вычисление определителя, обращение, решение систем линейных уравнений.",
        "Линейная алгебра — фундамент и компьютерной графики, и машинного обучения, и многого другого. Свой матричный калькулятор пригождается и как инструмент, и как способ закрепить понимание самих операций.",
        "Заодно это практика аккуратной работы с числами и алгоритмами — где легко ошибиться в индексах или потерять точность.",
      ],
      en: [
        "A calculator for matrix operations: multiplication, determinant computation, inversion, solving systems of linear equations.",
        "Linear algebra is the foundation of computer graphics, machine learning and much else. Your own matrix calculator comes in handy both as a tool and as a way to cement understanding of the operations themselves.",
        "It's also practice in careful work with numbers and algorithms — where it's easy to slip on indices or lose precision.",
      ],
      uk: [
        "Калькулятор для операцій над матрицями: множення, визначник, обернення, розв'язання систем.",
        "Лінійна алгебра — фундамент графіки, машинного навчання та багато чого ще.",
        "Заразом це практика акуратної роботи з числами та алгоритмами.",
      ],
    },
    features: {
      ru: ["Умножение матриц, определитель, обращение", "Решение систем линейных уравнений", "Закрепление линейной алгебры на практике", "Реализация на Rust"],
      en: ["Matrix multiplication, determinant, inversion", "Solving systems of linear equations", "Cementing linear algebra in practice", "Implemented in Rust"],
      uk: ["Множення матриць, визначник, обернення", "Розв'язання систем лінійних рівнянь", "Закріплення лінійної алгебри на практиці", "Реалізація на Rust"],
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
      ru: [
        "«Жизнь» Конвея — знаменитый клеточный автомат. Правил всего несколько: клетка живёт, рождается или умирает в зависимости от числа живых соседей.",
        "Но из этих простейших правил рождается невероятно сложное поведение — устойчивые фигуры, движущиеся «планеры», осцилляторы, целые механизмы. Это классический пример того, как сложное возникает из простого.",
        "Реализация на Rust — классика, которую интересно написать самому хотя бы раз, чтобы своими глазами увидеть, как из четырёх правил появляется целый мир.",
      ],
      en: [
        "Conway's Game of Life is the famous cellular automaton. There are only a few rules: a cell lives, is born or dies depending on the number of living neighbours.",
        "But from these simplest rules incredibly complex behaviour emerges — stable shapes, moving 'gliders', oscillators, whole mechanisms. It's a classic example of the complex arising from the simple.",
        "A Rust implementation — a classic worth writing yourself at least once, to see with your own eyes how a whole world appears from four rules.",
      ],
      uk: [
        "«Життя» Конвея — знаменитий клітинний автомат. Правил лише кілька.",
        "Але з цих простих правил народжується неймовірно складна поведінка — «планери», осцилятори, цілі механізми.",
        "Реалізація на Rust — класика, яку цікаво написати самому.",
      ],
    },
    features: {
      ru: ["Клеточный автомат «Жизнь» Конвея", "Несколько правил, сложное поведение", "Классический пример эмерджентности", "Реализация на Rust"],
      en: ["Conway's Game of Life cellular automaton", "A few rules, complex behaviour", "A classic example of emergence", "Implemented in Rust"],
      uk: ["Клітинний автомат «Життя» Конвея", "Кілька правил, складна поведінка", "Класичний приклад емерджентності", "Реалізація на Rust"],
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
      ru: [
        "Все знают боль печати «ghbdtn» вместо «привет» — забыл переключить раскладку, и абзац пошёл не на том языке.",
        "Эта утилита помогает с раскладкой: переключает её удобнее, чем системные средства, и умеет исправлять уже набранный не в той раскладке текст — переводит «ghbdtn» обратно в «привет».",
        "Маленькая системная утилита, которая убирает конкретное повседневное раздражение. Развитие идеи моего раннего проекта Language Change.",
      ],
      en: [
        "Everyone knows the pain of typing 'ghbdtn' instead of 'привет' — you forgot to switch the layout, and the paragraph came out in the wrong language.",
        "This utility helps with the layout: it switches more conveniently than system tools and can fix text already typed in the wrong layout — converting 'ghbdtn' back into 'привет'.",
        "A small system utility that removes a specific daily annoyance. A development of the idea from my earlier Language Change project.",
      ],
      uk: [
        "Усі знають біль друку «ghbdtn» замість «привіт».",
        "Ця утиліта перемикає розкладку зручніше за системні засоби й виправляє вже набраний не в тій розкладці текст.",
        "Розвиток ідеї мого раннього проєкту Language Change.",
      ],
    },
    features: {
      ru: ["Удобное переключение раскладки клавиатуры", "Исправление текста, набранного не в той раскладке", "Убирает повседневное раздражение", "Развитие проекта Language Change"],
      en: ["Convenient keyboard-layout switching", "Fixing text typed in the wrong layout", "Removes a daily annoyance", "A development of the Language Change project"],
      uk: ["Зручне перемикання розкладки клавіатури", "Виправлення тексту, набраного не в тій розкладці", "Прибирає щоденне роздратування", "Розвиток проєкту Language Change"],
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
      ru: [
        "Заметки, которые хранятся на диске зашифрованными и расшифровываются только по паролю. Без пароля файл — это просто шифротекст.",
        "Удобно держать в таких заметках чувствительное: пароли, ключи, личное — прямо в терминале, под рукой, и без необходимости доверять облачным сервисам.",
        "Проект соединяет две мои постоянные темы: удобные повседневные инструменты и реальная, применённая криптография.",
      ],
      en: [
        "Notes stored encrypted on disk and decrypted only with a password. Without the password the file is just ciphertext.",
        "It's handy to keep sensitive things in such notes: passwords, keys, personal stuff — right in the terminal, at hand, with no need to trust cloud services.",
        "The project connects two of my constant themes: convenient everyday tools and real, applied cryptography.",
      ],
      uk: [
        "Нотатки, що зберігаються зашифрованими й розшифровуються лише за паролем.",
        "Зручно тримати в таких нотатках чутливе: паролі, ключі, особисте — без довіри хмарам.",
        "Проєкт поєднує дві мої теми: зручні інструменти та застосовану криптографію.",
      ],
    },
    features: {
      ru: ["Заметки, зашифрованные на диске", "Расшифровка только по паролю", "Хранение чувствительных данных в терминале", "Без доверия облачным сервисам"],
      en: ["Notes encrypted on disk", "Decryption only with a password", "Storing sensitive data in the terminal", "No trust in cloud services"],
      uk: ["Нотатки, зашифровані на диску", "Розшифрування лише за паролем", "Зберігання чутливих даних у терміналі", "Без довіри хмарним сервісам"],
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
      ru: [
        "Приложение для заметок в формате Markdown: пишешь обычным текстом с лёгкой разметкой, получаешь аккуратно оформленный результат.",
        "Markdown — мой основной формат для всего текстового: он простой, читается даже как сырой текст и не привязывает к конкретной программе. Поэтому свой инструмент под него логичен.",
        "Идёт в одном ряду с MDrenderer и моими читалками Markdown — частью небольшой собственной экосистемы для работы с этим форматом.",
      ],
      en: [
        "A Markdown note-taking app: you write plain text with light markup and get a neatly formatted result.",
        "Markdown is my main format for everything textual: it's simple, readable even as raw text and doesn't tie you to a specific program. So a tool of my own for it makes sense.",
        "It sits alongside MDrenderer and my Markdown readers — part of a small ecosystem of my own for working with this format.",
      ],
      uk: [
        "Застосунок для нотаток у форматі Markdown: пишеш текст із легкою розміткою, отримуєш оформлений результат.",
        "Markdown — мій основний формат для всього текстового.",
        "Іде в одному ряду з MDrenderer і моїми читалками Markdown.",
      ],
    },
    features: {
      ru: ["Ведение заметок в формате Markdown", "Лёгкая разметка, аккуратный результат", "Не привязывает к конкретной программе", "Часть экосистемы инструментов для Markdown"],
      en: ["Note-taking in the Markdown format", "Light markup, a tidy result", "Doesn't tie you to a specific program", "Part of a Markdown-tools ecosystem"],
      uk: ["Ведення нотаток у форматі Markdown", "Легка розмітка, акуратний результат", "Не прив'язує до конкретної програми", "Частина екосистеми інструментів для Markdown"],
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
      ru: [
        "Две читалки Markdown-файлов: одна с графическим оконным интерфейсом, другая для терминала (TUI).",
        "Один и тот же файл, два разных способа его показать. Это удобное сравнение: как одна и та же задача — отрисовать Markdown — решается в полноценном GUI и в текстовом интерфейсе с его ограничениями.",
        "Часть моей коллекции инструментов для работы с Markdown, рядом с MDrenderer и Markdown Notes.",
      ],
      en: [
        "Two Markdown-file readers: one with a graphical windowed interface, the other for the terminal (TUI).",
        "The same file, two different ways to show it. It's a handy comparison: how the same task — rendering Markdown — is solved in a full GUI and in a text interface with its constraints.",
        "Part of my collection of Markdown tools, alongside MDrenderer and Markdown Notes.",
      ],
      uk: [
        "Дві читалки Markdown-файлів: одна з графічним вікном, інша для термінала (TUI).",
        "Один файл, два способи показати — зручне порівняння GUI та текстового інтерфейсу.",
        "Частина моєї колекції інструментів для Markdown.",
      ],
    },
    features: {
      ru: ["Читалка Markdown с оконным интерфейсом", "Читалка Markdown для терминала (TUI)", "Сравнение GUI и текстового интерфейса", "Часть коллекции инструментов для Markdown"],
      en: ["A Markdown reader with a windowed interface", "A Markdown reader for the terminal (TUI)", "A comparison of GUI and text interface", "Part of a Markdown-tools collection"],
      uk: ["Читалка Markdown з віконним інтерфейсом", "Читалка Markdown для термінала (TUI)", "Порівняння GUI та текстового інтерфейсу", "Частина колекції інструментів для Markdown"],
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
      ru: [
        "Эксперимент: программа, которая компилирует и подгружает новый код прямо во время своей работы, не останавливаясь.",
        "Это даёт мощные возможности — гибкость плагинов, горячие обновления логики без перезапуска. Но требует очень аккуратной работы с системой: загрузка кода в работающий процесс — дело тонкое.",
        "Любопытная тема на стыке компиляторов и системного программирования. Статус доказательства концепции — показать, что подход работает.",
      ],
      en: [
        "An experiment: a program that compiles and loads new code right while it runs, without stopping.",
        "This gives powerful capabilities — the flexibility of plugins, hot updates of logic with no restart. But it requires very careful work with the system: loading code into a running process is delicate.",
        "A curious topic between compilers and systems programming. A proof-of-concept status — to show the approach works.",
      ],
      uk: [
        "Експеримент: програма, що компілює й підвантажує новий код прямо під час роботи.",
        "Це дає гнучкість плагінів і гарячі оновлення, але потребує акуратної роботи із системою.",
        "Цікава тема на стику компіляторів і системного програмування.",
      ],
    },
    features: {
      ru: ["Компиляция нового кода во время работы программы", "Подгрузка кода в работающий процесс", "Возможности плагинов и горячих обновлений", "Доказательство концепции"],
      en: ["Compiling new code while the program runs", "Loading code into a running process", "Plugin and hot-update capabilities", "A proof of concept"],
      uk: ["Компіляція нового коду під час роботи програми", "Підвантаження коду в працюючий процес", "Можливості плагінів і гарячих оновлень", "Доказ концепції"],
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
      ru: [
        "Папка «Загрузки» у всех со временем превращается в свалку: документы, картинки, архивы, установщики — всё вперемешку.",
        "Эта утилита раскладывает файлы по папкам автоматически — по типу, расширению, дате. Один запуск — и в папке порядок.",
        "Маленькая автоматизация бытовой рутины из тех, которыми реально пользуешься регулярно.",
      ],
      en: [
        "Everyone's Downloads folder turns into a dump over time: documents, images, archives, installers — all mixed together.",
        "This utility sorts files into folders automatically — by type, extension, date. One run and the folder is in order.",
        "A small automation of everyday routine of the kind you actually use regularly.",
      ],
      uk: [
        "Папка «Завантаження» з часом перетворюється на смітник.",
        "Ця утиліта розкладає файли по папках автоматично — за типом, розширенням, датою.",
        "Маленька автоматизація побутової рутини.",
      ],
    },
    features: {
      ru: ["Автоматическая сортировка файлов по папкам", "Раскладка по типу, расширению, дате", "Наведение порядка за один запуск", "Автоматизация бытовой рутины"],
      en: ["Automatic sorting of files into folders", "Arranging by type, extension, date", "Tidying up in a single run", "Automation of everyday routine"],
      uk: ["Автоматичне сортування файлів по папках", "Розкладка за типом, розширенням, датою", "Наведення ладу за один запуск", "Автоматизація побутової рутини"],
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
      ru: [
        "Инструмент для снятия скриншотов и захвата выбранной области экрана.",
        "Простой по идее, но за ним — работа с графической подсистемой из кода: получить содержимое экрана, выделить нужный участок, сохранить в файл.",
        "Базовая утилита, полезная и сама по себе, и как готовый кусок для проектов покрупнее, где нужен захват экрана.",
      ],
      en: [
        "A tool for taking screenshots and capturing a selected screen region.",
        "Simple in idea, but behind it is working with the graphics subsystem from code: getting the screen contents, cropping the needed region, saving to a file.",
        "A basic utility, useful both on its own and as a ready piece for bigger projects that need screen capture.",
      ],
      uk: [
        "Інструмент для знімання скриншотів і захоплення вибраної області екрана.",
        "Простий за ідеєю, але за ним — робота з графічною підсистемою з коду.",
        "Базова утиліта, корисна і сама по собі, і як шматок для більших проєктів.",
      ],
    },
    features: {
      ru: ["Снятие скриншотов и захват области экрана", "Работа с графической подсистемой из кода", "Сохранение результата в файл", "Готовый кусок для проектов покрупнее"],
      en: ["Taking screenshots and capturing a screen region", "Working with the graphics subsystem from code", "Saving the result to a file", "A ready piece for bigger projects"],
      uk: ["Знімання скриншотів і захоплення області екрана", "Робота з графічною підсистемою з коду", "Збереження результату у файл", "Готовий шматок для більших проєктів"],
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
      ru: [
        "Maven и Gradle — две основные системы сборки Java-проектов. Переезжать с одной на другую вручную муторно: нужно переписать описание зависимостей, плагинов, конфигурацию.",
        "Этот инструмент автоматизирует перевод конфигурации сборки с Maven на Gradle, забирая на себя рутинную и легко ошибаемую часть.",
        "Родился из практической нужды — я много делаю на Java и не раз сталкивался с необходимостью переключаться между системами сборки.",
      ],
      en: [
        "Maven and Gradle are the two main Java build systems. Moving from one to the other by hand is tedious: you have to rewrite the dependency description, plugins, configuration.",
        "This tool automates translating the build configuration from Maven to Gradle, taking on the routine and error-prone part.",
        "It was born of a practical need — I do a lot in Java and have more than once faced the need to switch build systems.",
      ],
      uk: [
        "Maven і Gradle — дві основні системи збірки Java-проєктів. Переїжджати вручну марудно.",
        "Цей інструмент автоматизує переклад конфігурації збірки з Maven на Gradle.",
        "Народився з практичної потреби.",
      ],
    },
    features: {
      ru: ["Конвертация конфигурации Maven в Gradle", "Перевод описания зависимостей и плагинов", "Автоматизация рутинной и ошибаемой работы", "Рождён практической нуждой"],
      en: ["Converting Maven configuration to Gradle", "Translating dependency and plugin descriptions", "Automating routine, error-prone work", "Born of a practical need"],
      uk: ["Конвертація конфігурації Maven у Gradle", "Переклад опису залежностей і плагінів", "Автоматизація рутинної роботи", "Народжений практичною потребою"],
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
      ru: [
        "Обновлять зависимости проекта вручную — скучно, и при этом легко что-нибудь сломать: новая версия библиотеки может изменить поведение.",
        "Скрипт делает обновление сам и при этом сохраняет резервную копию прежнего состояния зависимостей — чтобы, если что-то пошло не так, можно было откатиться одним движением.",
        "Маленький, но полезный инструмент обслуживания проектов — из тех, что экономят нервы в неприятный момент.",
      ],
      en: [
        "Upgrading a project's dependencies by hand is boring, and it's easy to break something while at it: a new library version can change behaviour.",
        "The script does the upgrade itself and keeps a backup of the previous dependency state — so if something went wrong, you can roll back in one move.",
        "A small but useful project-maintenance tool — of the kind that saves your nerves at an unpleasant moment.",
      ],
      uk: [
        "Оновлювати залежності вручну — нудно, і легко щось зламати.",
        "Скрипт робить оновлення сам і зберігає резервну копію попереднього стану.",
        "Маленький, але корисний інструмент обслуговування проєктів.",
      ],
    },
    features: {
      ru: ["Автоматическое обновление библиотек проекта", "Резервная копия прежнего состояния зависимостей", "Возможность отката одним движением", "Инструмент обслуживания проектов"],
      en: ["Automatic upgrade of a project's libraries", "A backup of the previous dependency state", "One-move rollback capability", "A project-maintenance tool"],
      uk: ["Автоматичне оновлення бібліотек проєкту", "Резервна копія попереднього стану залежностей", "Можливість відкату одним рухом", "Інструмент обслуговування проєктів"],
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
      ru: [
        "CLI-утилита на Go для генерации и работы с ключами RSA — тема криптографии, но в практичной форме инструмента командной строки.",
        "Генерация пары ключей, базовые операции с ними — всё через простой консольный интерфейс, без графики и лишнего.",
        "Ещё один проект, на котором я осваивал Go и заодно повторял основы асимметричного шифрования.",
      ],
      en: [
        "A Go CLI utility for generating and working with RSA keys — a cryptography topic, but in the practical form of a command-line tool.",
        "Key-pair generation, basic operations on them — all through a simple console interface, with no graphics or extras.",
        "Another project where I picked up Go and revisited the basics of asymmetric encryption.",
      ],
      uk: [
        "CLI-утиліта на Go для генерації та роботи з ключами RSA.",
        "Генерація пари ключів, базові операції — через простий консольний інтерфейс.",
        "Ще один проєкт, на якому я освоював Go.",
      ],
    },
    features: {
      ru: ["Генерация пары ключей RSA", "Базовые операции с ключами", "Простой консольный интерфейс", "Освоение Go и повторение основ RSA"],
      en: ["RSA key-pair generation", "Basic operations on keys", "A simple console interface", "Learning Go and revisiting RSA basics"],
      uk: ["Генерація пари ключів RSA", "Базові операції з ключами", "Простий консольний інтерфейс", "Освоєння Go та повторення основ RSA"],
    },
  },
];
