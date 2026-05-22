/* Minecraft: плагины и моды */
module.exports = [
  {
    id: "obsidianauth", name: "ObsidianAuth", aka: "TOTP 2FA для Minecraft",
    category: "minecraft", status: "active", year: 2026, featured: true,
    langs: ["Java", "Gradle"], tags: ["Paper", "Velocity", "TOTP", "Security", "AES-GCM"],
    github: "https://github.com/AlexMelanFromRingo/obsidianauth",
    short: {
      ru: "Двухфакторная аутентификация по TOTP (RFC 6238) для серверов Paper 1.20.1 и прокси Velocity.",
      en: "TOTP (RFC 6238) two-factor authentication for Paper 1.20.1 servers and the Velocity proxy.",
      uk: "Двофакторна автентифікація за TOTP (RFC 6238) для серверів Paper 1.20.1 та проксі Velocity.",
    },
    body: {
      ru: [
        "Пара плагинов, которая закрывает вход на сервер вторым фактором. Paper-модуль хранит секреты и проверяет коды, а Velocity-модуль страхует чат и команды на уровне прокси. Имя выбрано не случайно: обсидиан — единственный обычный блок, который держит взрыв, образует рамку портала и корпус эндер-сундука. Это и есть смысл плагина: закрытый доступ, авторитет и приватное хранилище.",
        "Безопасность здесь не для галочки. Секреты лежат зашифрованными через AES-GCM-256, ключ берётся по цепочке KMS → файл → переменная окружения и никогда не попадает в код. До ввода кода игрок заблокирован полностью: движение, ломание блоков, сундуки, чат — всё отменяется на стороне сервера. Никаких NMS и Mixin, только публичные API.",
      ],
      en: [
        "A plugin pair that gates server login behind a second factor. The Paper module stores secrets and verifies codes; the Velocity module guards chat and commands at the proxy level. The name is deliberate: obsidian is the one ordinary block that survives an explosion, frames a portal and shells an ender chest — gated access, authority, private storage.",
        "Security here is real. Secrets are stored AES-GCM-256 encrypted, the master key resolved via KMS → key file → env var and never hard-coded. Before a valid code, the player is fully locked: movement, block breaking, containers and chat are all cancelled server-side. No NMS, no Mixin, public APIs only.",
      ],
      uk: [
        "Пара плагінів, що закриває вхід на сервер другим фактором. Paper-модуль зберігає секрети й перевіряє коди, а Velocity-модуль страхує чат і команди на рівні проксі. Назва не випадкова: обсидіан — єдиний звичайний блок, що витримує вибух, утворює рамку порталу та корпус ендер-скрині.",
        "Безпека тут справжня. Секрети зберігаються зашифрованими через AES-GCM-256, ключ береться ланцюжком KMS → файл → змінна оточення й ніколи не потрапляє в код. До введення коду гравець повністю заблокований. Жодних NMS і Mixin, лише публічні API.",
      ],
    },
    features: {
      ru: ["Paper-авторитетная архитектура: секреты и проверка только на сервере", "Шифрование секретов AES-GCM-256 с привязкой к UUID игрока", "Ленивая ротация ключей без простоя", "Failure-closed: неопределённое состояние считается «не авторизован»", "Безопасная выдача QR-кода с атомарным восстановлением инвентаря"],
      en: ["Paper-authoritative: secrets and verification stay on the server", "AES-GCM-256 secret encryption bound to player UUID", "Lazy key rotation with zero downtime", "Failure-closed: an indeterminate state counts as unauthenticated", "Inventory-safe QR delivery with atomic restore"],
      uk: ["Paper-авторитетна архітектура: секрети й перевірка лише на сервері", "Шифрування секретів AES-GCM-256 з прив'язкою до UUID гравця", "Лінива ротація ключів без простою", "Failure-closed: невизначений стан вважається «не авторизований»", "Безпечна видача QR-коду з атомарним відновленням інвентарю"],
    },
  },
  {
    id: "minecraftbot", name: "MinecraftBot", aka: "Bot framework 1.20.1",
    category: "minecraft", status: "active", year: 2026, featured: true,
    langs: ["Python", "Rust", "PyO3"], tags: ["Protocol 763", "A* Pathfinding", "Bot API"],
    github: "https://github.com/AlexMelanFromRingo/MinecraftBot",
    short: {
      ru: "Фреймворк ботов для Minecraft Java 1.20.1 в трёх вариантах: Python, нативный Rust и PyO3-обёртка.",
      en: "A bot framework for Minecraft Java 1.20.1 in three artefacts: Python, native Rust and a PyO3 facade.",
      uk: "Фреймворк ботів для Minecraft Java 1.20.1 у трьох варіантах: Python, нативний Rust і PyO3-обгортка.",
    },
    body: {
      ru: [
        "Полноценный фреймворк для ботов под Minecraft Java 1.20.1 (протокол 763). Реализованы все 176 пакетов версии, кодек, фреймер и жизненный цикл соединения. Поверх протокола — высокоуровневый Bot API: ходьба с A*-поиском пути, физика на 20 Гц, кэш мира, трекер сущностей, инвентарь, авто-еда, деревья поведения.",
        "Главная идея — один и тот же API в трёх обличьях. Python-версия без зависимостей для быстрой итерации, нативный Rust-крейт для встраивания, и PyO3-фасад: тот же Python-скрипт, но на скорости Rust заменой одной строки импорта. Совпадение API между ними проверяется автоматическим тестом на каждом коммите. Всё протестировано на живом Paper-сервере.",
      ],
      en: [
        "A full bot framework for Minecraft Java 1.20.1 (protocol 763). All 176 packets of the version are implemented, plus codec, framer and the connection lifecycle. On top sits a high-level Bot API: A* pathfinding walks, 20 Hz physics, a world cache, entity tracker, inventory, auto-eat and behaviour trees.",
        "The core idea is one API in three forms. A dependency-free Python build for fast iteration, a native Rust crate for embedding, and a PyO3 facade — the same Python script at Rust speed by swapping one import line. API parity between them is checked by an automated test on every commit. All live-tested against a real Paper server.",
      ],
      uk: [
        "Повноцінний фреймворк для ботів під Minecraft Java 1.20.1 (протокол 763). Реалізовано всі 176 пакетів версії, кодек, фреймер і життєвий цикл з'єднання. Поверх протоколу — високорівневий Bot API: ходьба з A*-пошуком шляху, фізика на 20 Гц, кеш світу, трекер сутностей.",
        "Головна ідея — один і той самий API у трьох обличчях: Python без залежностей, нативний Rust-крейт і PyO3-фасад на швидкості Rust. Збіг API перевіряється автоматичним тестом на кожному коміті.",
      ],
    },
    features: {
      ru: ["Все 176 пакетов протокола 763 на Python и Rust", "Высокоуровневый Bot API: walk_to, A*, физика 20 Гц", "PyO3-фасад: скорость Rust в Python без переписывания", "Автотест паритета API на каждом PR", "Захват и воспроизведение сетевого трафика (WireLog)"],
      en: ["All 176 protocol-763 packets in Python and Rust", "High-level Bot API: walk_to, A*, 20 Hz physics", "PyO3 facade: Rust speed in Python with no rewrite", "Automated API-parity test on every PR", "Network traffic capture and replay (WireLog)"],
      uk: ["Усі 176 пакетів протоколу 763 на Python і Rust", "Високорівневий Bot API: walk_to, A*, фізика 20 Гц", "PyO3-фасад: швидкість Rust у Python без переписування", "Автотест паритету API на кожному PR", "Захоплення та відтворення мережевого трафіку"],
    },
  },
  {
    id: "redstonebuilder", name: "RedstoneBuilder", aka: "HDL → схематика",
    category: "minecraft", status: "active", year: 2026, featured: true,
    langs: ["Rust"], tags: ["HDL", "Verilog", "Litematica", "Place & Route", "A*"],
    github: "https://github.com/AlexMelanFromRingo/RedstoneBuilder",
    short: {
      ru: "Компилятор HDL (подмножество Verilog) в схематики Litematica — синтез логики и 3D-разводка цепей.",
      en: "Compiles a Verilog-subset HDL into Litematica schematics — logic synthesis and 3D place-and-route.",
      uk: "Компілятор HDL (підмножина Verilog) у схематики Litematica — синтез логіки та 3D-розведення.",
    },
    body: {
      ru: [
        "Идея проекта: описать цифровую схему на языке вроде Verilog и получить готовую redstone-конструкцию, которую можно вставить в мир через Litematica. Компилятор разбирает HDL, синтезирует логику и раскладывает её в трёхмерном пространстве — настоящая задача place-and-route, как в проектировании микросхем.",
        "К версии v2 добавились аналоговые провода, компараторы, симуляция отжига для размещения и роутер на A* с rip-up & reroute. Есть статический анализ задержек с детектом гонок данных и жёсткий лимит памяти. v3 принёс многобитные шины. По сути это маленькая EDA-система для Minecraft.",
      ],
      en: [
        "The idea: describe a digital circuit in a Verilog-like language and get a ready redstone build you can paste into the world via Litematica. The compiler parses the HDL, synthesises logic and lays it out in 3D — a real place-and-route problem, like chip design.",
        "By v2 it gained analog wires, comparators, simulated-annealing placement and an A* router with rip-up & reroute. There's static timing analysis with data-race detection and a hard memory cap. v3 added multi-bit buses. It's effectively a small EDA toolchain for Minecraft.",
      ],
      uk: [
        "Ідея проєкту: описати цифрову схему мовою на кшталт Verilog і отримати готову redstone-конструкцію, яку можна вставити у світ через Litematica. Компілятор розбирає HDL, синтезує логіку й розкладає її у тривимірному просторі.",
        "До версії v2 додалися аналогові дроти, компаратори, симуляція відпалу для розміщення та роутер на A*. Є статичний аналіз затримок із детектом гонок даних. v3 приніс багатобітні шини.",
      ],
    },
  },
  {
    id: "schematic-rs", name: "schematic-rs", aka: "Парсер схематик",
    category: "minecraft", status: "done", year: 2026, featured: true,
    langs: ["Rust"], tags: [".schem", ".litematic", "NBT", "3D-экспорт", "Three.js"],
    github: "https://github.com/AlexMelanFromRingo/schematic-rs",
    short: {
      ru: "Быстрый парсер и анализатор схематик Minecraft с экспортом в 3D-модели и интерактивный просмотр.",
      en: "A fast Minecraft schematic parser and analyzer with 3D-model export and an interactive viewer.",
      uk: "Швидкий парсер та аналізатор схематик Minecraft з експортом у 3D-моделі та переглядачем.",
    },
    body: {
      ru: [
        "Инструмент, который читает все основные форматы схематик: легаси .schematic, современный .schem от WorldEdit и .litematic от мода Litematica. Он не просто парсит, а анализирует: считает состав блоков, размеры, нужное сырьё с разбивкой крафта, ищет блоки по имени, достаёт текст табличек.",
        "Самое интересное — экспорт. Схематика превращается в 3D-модель OBJ или GLB с настоящей геометрией блоков из client.jar и текстурами. Жадное построение мешей сжимает результат в десятки раз, GPU-инстансинг превращает 30 ГБ в 1 ГБ. Есть и интерактивный HTML-просмотрщик на Three.js, и потоковый экспорт для гигантских схематик на 33 млн блоков.",
      ],
      en: [
        "A tool that reads every major schematic format: legacy .schematic, modern .schem from WorldEdit and .litematic from the Litematica mod. It doesn't just parse — it analyses: block composition, dimensions, raw materials with crafting breakdown, block search, sign text extraction.",
        "The interesting part is export. A schematic becomes an OBJ or GLB 3D model with real block geometry from client.jar and textures. Greedy meshing shrinks the result tenfold, GPU instancing turns 30 GB into 1 GB. There's an interactive Three.js HTML viewer and streaming export for 33-million-block schematics.",
      ],
      uk: [
        "Інструмент, що читає всі основні формати схематик: легасі .schematic, сучасний .schem від WorldEdit та .litematic від мода Litematica. Він аналізує склад блоків, розміри, потрібну сировину з розбивкою крафту.",
        "Найцікавіше — експорт. Схематика перетворюється на 3D-модель OBJ або GLB зі справжньою геометрією блоків і текстурами. Є інтерактивний HTML-переглядач на Three.js і потоковий експорт для гігантських схематик.",
      ],
    },
  },
  {
    id: "ocos", name: "OCOS", aka: "ОС для OpenComputers",
    category: "minecraft", status: "active", year: 2026, featured: true,
    langs: ["Lua", "Python"], tags: ["OpenComputers", "Микроядро", "GUI", "PBKDF2"],
    github: "https://github.com/AlexMelanFromRingo/OCOS",
    short: {
      ru: "Современная Lua-операционная система для мода OpenComputers: микроядро, шелл, GUI и пакетный менеджер.",
      en: "A modern Lua operating system for the OpenComputers mod: microkernel, shell, GUI and package manager.",
      uk: "Сучасна Lua-операційна система для мода OpenComputers: мікроядро, шел, GUI та пакетний менеджер.",
    },
    body: {
      ru: [
        "Полноценная операционная система для внутриигровых компьютеров мода OpenComputers, написанная с нуля и независимая от OpenOS и MineOS. В основе — настоящее микроядро с кооперативным планировщиком, надзором за процессами, capability-песочницей, монтируемой VFS и IPC-каналами.",
        "Сверху — продакшен-шелл с пайпами, редиректами и переменными, фреймворк сервисов с автозапуском и рестартом по экспоненте, пакетный менеджер с проверкой целостности по SHA-256, GUI-композитор с двойной буферизацией и десятком виджетов. Многопользовательский режим с PBKDF2, аудит-лог, sudo. Локализация на четыре языка.",
      ],
      en: [
        "A full operating system for the in-game computers of the OpenComputers mod, written from scratch and independent of OpenOS and MineOS. At its core is a real microkernel with a cooperative scheduler, supervised processes, a capability sandbox, a mountable VFS and IPC channels.",
        "On top: a production shell with pipes, redirects and variables, a service framework with auto-start and exponential-backoff restarts, a package manager with SHA-256 integrity checks, a double-buffered GUI compositor with ten widgets. Multi-user with PBKDF2, an audit log, sudo. Localised into four languages.",
      ],
      uk: [
        "Повноцінна операційна система для внутрішньоігрових комп'ютерів мода OpenComputers, написана з нуля й незалежна від OpenOS та MineOS. В основі — справжнє мікроядро з кооперативним планувальником і capability-пісочницею.",
        "Зверху — продакшен-шел із пайпами та змінними, фреймворк сервісів, пакетний менеджер із перевіркою цілісності SHA-256, GUI-композитор із подвійною буферизацією. Багатокористувацький режим із PBKDF2, аудит-лог, sudo.",
      ],
    },
  },
  {
    id: "sap", name: "Simple Authentication Plugin", aka: "SAP",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Auth"],
    github: "https://github.com/AlexMelanFromRingo/SimpleAuthPlugin",
    short: {
      ru: "Лёгкий плагин для Paper, который закрывает вход на сервер паролем без лишних настроек.",
      en: "A lightweight Paper plugin that gates server login behind a password with no extra setup.",
      uk: "Легкий плагін для Paper, що закриває вхід на сервер паролем без зайвих налаштувань.",
    },
    body: {
      ru: ["Мой первый серьёзный плагин аутентификации. Задача была простая: дать серверу базовую защиту от входа под чужим ником, не нагружая его и не требуя сложной настройки. Игрок регистрируется паролем и логинится при каждом входе.", "Плагин специально сделан минимальным — он лёгкий, быстро ставится и не мешает работе сервера. Позже на его опыте выросли более защищённые SecureAuth и ObsidianAuth."],
      en: ["My first serious authentication plugin. The goal was simple: give a server basic protection against login under someone else's name, without loading it down or demanding complex setup. A player registers with a password and logs in each time.", "It's deliberately minimal — light, quick to install, out of the server's way. SecureAuth and ObsidianAuth later grew from its lessons."],
      uk: ["Мій перший серйозний плагін автентифікації. Завдання було просте: дати серверу базовий захист від входу під чужим ніком, не навантажуючи його. Гравець реєструється паролем і логіниться при кожному вході.", "Плагін навмисно зроблено мінімальним. Згодом на його досвіді виросли захищеніші SecureAuth та ObsidianAuth."],
    },
  },
  {
    id: "secureauth", name: "SecureAuth", aka: "Защищённая авторизация",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Auth", "Security"],
    github: "https://github.com/AlexMelanFromRingo/SecureAuth",
    short: {
      ru: "Развитие идеи SAP: плагин аутентификации с упором на хранение паролей и защиту до входа.",
      en: "An evolution of SAP: an auth plugin focused on password storage and pre-login protection.",
      uk: "Розвиток ідеї SAP: плагін автентифікації з акцентом на зберігання паролів і захист до входу.",
    },
    body: {
      ru: ["Следующий шаг после SAP. Здесь я переработал хранение паролей — нормальное хеширование вместо наивных решений — и аккуратнее закрыл состояние игрока до момента авторизации, чтобы нельзя было ничего сделать в мире, пока ты не вошёл.", "Этот проект стал мостиком к ObsidianAuth, где идея безопасности доведена до полноценного второго фактора."],
      en: ["The next step after SAP. Here I reworked password storage — proper hashing instead of naive solutions — and locked down the player's pre-auth state more carefully, so nothing in the world can be done before logging in.", "This project was the bridge to ObsidianAuth, where the security idea grew into a full second factor."],
      uk: ["Наступний крок після SAP. Тут я переробив зберігання паролів — нормальне хешування замість наївних рішень — і акуратніше закрив стан гравця до моменту авторизації.", "Цей проєкт став містком до ObsidianAuth, де ідея безпеки доведена до повноцінного другого фактора."],
    },
  },
  {
    id: "chatping", name: "ChatPing", aka: "Упоминания в чате",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Chat"],
    github: "https://github.com/AlexMelanFromRingo/ChatPing",
    short: {
      ru: "Плагин для Paper, который подсвечивает и пингует игроков, упомянутых в чате по нику.",
      en: "A Paper plugin that highlights and pings players mentioned by name in chat.",
      uk: "Плагін для Paper, що підсвічує та пінгує гравців, згаданих у чаті за ніком.",
    },
    body: {
      ru: ["Привычная по Discord механика, перенесённая в Minecraft. Если в сообщении встречается ник игрока, плагин подсвечивает упоминание и проигрывает ему звук — человек точно заметит, что к нему обращаются.", "Мелочь, но на сервере с активным чатом она заметно меняет общение в лучшую сторону."],
      en: ["A familiar Discord mechanic ported into Minecraft. If a message contains a player's name, the plugin highlights the mention and plays them a sound — the person definitely notices they're being addressed.", "A small thing, but on a server with an active chat it noticeably improves communication."],
      uk: ["Звична за Discord механіка, перенесена в Minecraft. Якщо у повідомленні трапляється нік гравця, плагін підсвічує згадку та програє йому звук.", "Дрібниця, але на сервері з активним чатом вона помітно змінює спілкування на краще."],
    },
  },
  {
    id: "pingtab", name: "PingTab", aka: "Пинг в TAB",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "UI"],
    github: "https://github.com/AlexMelanFromRingo/PingTab",
    short: {
      ru: "Простой плагин для Paper, который показывает пинг каждого игрока прямо в меню TAB.",
      en: "A simple Paper plugin that shows each player's ping right in the TAB menu.",
      uk: "Простий плагін для Paper, що показує пінг кожного гравця прямо в меню TAB.",
    },
    body: {
      ru: ["Маленькая утилитарная вещь: рядом с ником каждого игрока в списке по TAB появляется его пинг. Удобно сразу видеть, у кого лагает соединение, не запуская команд.", "Один из тех плагинов, что делаются за вечер, но потом стоят на сервере годами."],
      en: ["A small utility: next to each player's name in the TAB list, their ping appears. Handy for spotting a laggy connection at a glance, with no commands.", "One of those plugins built in an evening that then sit on a server for years."],
      uk: ["Маленька утилітарна річ: поряд із ніком кожного гравця у списку TAB з'являється його пінг. Зручно одразу бачити, у кого лагає з'єднання.", "Один із тих плагінів, що робляться за вечір, а потім стоять на сервері роками."],
    },
  },
  {
    id: "invview", name: "InvView", aka: "Просмотр инвентаря",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Moderation"],
    github: "https://github.com/AlexMelanFromRingo/InvView",
    short: {
      ru: "Плагин для просмотра инвентаря игрока правым кликом в режиме наблюдателя.",
      en: "A plugin to view a player's inventory with a right-click in spectator mode.",
      uk: "Плагін для перегляду інвентарю гравця правим кліком у режимі спостерігача.",
    },
    body: {
      ru: ["Инструмент для модераторов. В режиме наблюдателя достаточно кликнуть правой кнопкой по игроку — и открывается его инвентарь только на просмотр. Удобно проверять подозрительных без команд и лишних движений.", "Прав на изменение нет — это сознательное решение, чтобы модератор случайно ничего не испортил."],
      en: ["A moderator's tool. In spectator mode, right-click a player and their inventory opens read-only. Handy for checking suspicious players with no commands or fuss.", "There's no edit access — a deliberate choice so a moderator can't accidentally break anything."],
      uk: ["Інструмент для модераторів. У режимі спостерігача досить клікнути правою кнопкою по гравцю — і відкривається його інвентар лише для перегляду.", "Прав на зміну немає — це свідоме рішення, щоб модератор випадково нічого не зіпсував."],
    },
  },
  {
    id: "paperbackpacks", name: "PaperBackpacks", aka: "Рюкзаки",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Items"],
    github: "https://github.com/AlexMelanFromRingo/BackpackPaper3",
    short: {
      ru: "Плагин для серверов Paper, добавляющий переносные рюкзаки с дополнительным хранилищем.",
      en: "A Paper-server plugin that adds portable backpacks with extra storage.",
      uk: "Плагін для серверів Paper, що додає переносні рюкзаки з додатковим сховищем.",
    },
    body: {
      ru: ["Рюкзаки как предмет: игрок носит с собой дополнительный инвентарь и открывает его в любой момент. Проект пережил три итерации (BackpackPaper, 2 и 3) — каждый раз я переписывал хранение содержимого надёжнее.", "Третья версия — самая аккуратная: данные рюкзаков не теряются при перезапусках и переездах между мирами."],
      en: ["Backpacks as an item: a player carries extra inventory and opens it any time. The project went through three iterations (BackpackPaper, 2 and 3), each time with more reliable content storage.", "The third version is the cleanest — backpack data survives restarts and moves between worlds."],
      uk: ["Рюкзаки як предмет: гравець носить із собою додатковий інвентар і відкриває його будь-коли. Проєкт пережив три ітерації — щоразу я переписував зберігання вмісту надійніше.", "Третя версія — найакуратніша: дані рюкзаків не губляться при перезапусках."],
    },
  },
  {
    id: "buildermod", name: "BuilderMod", aka: "Перенос артов в Pixel Battle",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Fabric", "Pixel Battle", "Автоматизация"],
    short: {
      ru: "Мод, который автоматически переносит готовый рисунок на стену в режиме Pixel Battle.",
      en: "A mod that automatically transfers a finished picture onto a wall in Pixel Battle mode.",
      uk: "Мод, що автоматично переносить готовий малюнок на стіну в режимі Pixel Battle.",
    },
    body: {
      ru: ["Pixel Battle — это соревнование, где игроки вручную выкладывают пиксельные арты блоками. BuilderMod берёт картинку, сопоставляет её цвета с блоками и сам расставляет их по нужным координатам, пока ты не отвлекаешься на рутину.", "По сути это автоматизация очень нудной задачи: вместо того чтобы класть тысячи блоков руками, ты описываешь, что хочешь, и мод делает остальное."],
      en: ["Pixel Battle is a contest where players lay out pixel art block by block. BuilderMod takes an image, maps its colours to blocks and places them at the right coordinates itself, so you don't drown in the routine.", "It's automation of a very tedious task: instead of placing thousands of blocks by hand, you describe what you want and the mod does the rest."],
      uk: ["Pixel Battle — це змагання, де гравці вручну викладають піксельні арти блоками. BuilderMod бере картинку, зіставляє її кольори з блоками й сам розставляє їх за потрібними координатами.", "По суті це автоматизація дуже нудного завдання: замість тисяч блоків руками ти описуєш, що хочеш, і мод робить решту."],
    },
  },
  {
    id: "owlmod", name: "OwlMod", aka: "Совы в Minecraft",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Fabric", "Мобы", "Контент"],
    github: "https://github.com/AlexMelanFromRingo/OwlMod",
    short: {
      ru: "Мод, добавляющий в Minecraft новое существо — сов, со своей моделью и поведением.",
      en: "A mod that adds a new creature to Minecraft — owls, with their own model and behaviour.",
      uk: "Мод, що додає в Minecraft нову істоту — сов, із власною моделлю та поведінкою.",
    },
    body: {
      ru: ["Контентный мод: в мир добавляется новое животное — сова. Это полный цикл создания моба: 3D-модель, текстура, анимации, спавн в подходящих биомах и собственное поведение.", "Проект ценен опытом: чтобы добавить даже одно существо, нужно разобраться, как Minecraft работает с сущностями, рендером и игровой логикой."],
      en: ["A content mod: a new animal joins the world — an owl. It's the full cycle of building a mob: 3D model, texture, animations, spawning in suitable biomes and its own behaviour.", "The project is valuable for the experience: adding even one creature means understanding how Minecraft handles entities, rendering and game logic."],
      uk: ["Контентний мод: у світ додається нова тварина — сова. Це повний цикл створення моба: 3D-модель, текстура, анімації, спавн у відповідних біомах і власна поведінка.", "Проєкт цінний досвідом: щоб додати навіть одну істоту, треба розібратися, як Minecraft працює із сутностями та рендером."],
    },
  },
  {
    id: "llamaforge", name: "LLaMA Forge", aka: "ИИ в чате Minecraft",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Mod", "LLM", "LLaMA", "ИИ"],
    short: {
      ru: "Мод, который позволяет общаться с языковой моделью LLaMA прямо через игровой чат.",
      en: "A mod that lets you chat with the LLaMA language model right through the in-game chat.",
      uk: "Мод, що дозволяє спілкуватися з мовною моделлю LLaMA прямо через ігровий чат.",
    },
    body: {
      ru: ["Идея простая и забавная: пишешь в чат Minecraft — отвечает нейросеть. Мод подключает LLaMA к игре, так что внутри мира появляется собеседник, которому можно задать вопрос или просто поболтать.", "Сделано в момент, когда локальные языковые модели только начинали быть доступными — было интересно затащить их в привычную игру."],
      en: ["A simple, fun idea: you type in Minecraft chat and a neural network replies. The mod wires LLaMA into the game, so the world gains a companion you can ask a question or just chat with.", "Built when local language models were only starting to be accessible — it was fun to drag them into a familiar game."],
      uk: ["Ідея проста й цікава: пишеш у чат Minecraft — відповідає нейромережа. Мод під'єднує LLaMA до гри, тож усередині світу з'являється співрозмовник.", "Зроблено в момент, коли локальні мовні моделі тільки починали бути доступними."],
    },
  },
  {
    id: "llamaonline", name: "LLaMA Online", aka: "Сетевой API для LLaMA",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["LLM", "API", "Сеть"],
    short: {
      ru: "Java-обвязка, дающая доступ к модели LLaMA по сети — сделана ещё до появления такой функции в библиотеке.",
      en: "A Java layer giving network access to a LLaMA model — built before the library had such a feature.",
      uk: "Java-обв'язка, що дає доступ до моделі LLaMA через мережу — зроблена ще до появи такої функції в бібліотеці.",
    },
    body: {
      ru: ["Чтобы LLaMA Forge мог работать, модель должна быть доступна по сети. Когда я это делал, в используемой Java-библиотеке ещё не было сетевого режима, так что пришлось написать свой: сервер принимает запросы, прогоняет их через модель и отдаёт ответ.", "Получился небольшой API-слой, который позже использовался и в других проектах с LLM."],
      en: ["For LLaMA Forge to work, the model needs to be reachable over the network. When I built this, the Java library I used had no network mode yet, so I wrote my own: a server takes requests, runs them through the model and returns the answer.", "The result is a small API layer that was later reused in other LLM projects."],
      uk: ["Щоб LLaMA Forge міг працювати, модель має бути доступна через мережу. Коли я це робив, у використовуваній Java-бібліотеці ще не було мережевого режиму, тож довелося написати свій.", "Вийшов невеликий API-шар, який згодом використовувався і в інших проєктах з LLM."],
    },
  },
  {
    id: "pfcg", name: "Parallel Fabric Chunk Generator", aka: "PFCG",
    category: "minecraft", status: "concept", year: 2024,
    langs: ["Java"], tags: ["Fabric", "Многопоточность", "Производительность"],
    short: {
      ru: "Мод для Fabric, который распределяет генерацию чанков по разным ядрам процессора.",
      en: "A Fabric mod that spreads chunk generation across multiple CPU cores.",
      uk: "Мод для Fabric, що розподіляє генерацію чанків по різних ядрах процесора.",
    },
    body: {
      ru: ["Генерация мира в Minecraft — одно из самых тяжёлых мест по нагрузке, и она почти не использует несколько ядер. PFCG — попытка это исправить: разнести генерацию чанков по потокам, чтобы многоядерный процессор работал на полную.", "Задача нетривиальная из-за того, что игровая логика очень не любит параллельность. Проект — это исследование, где можно безопасно распараллелить, а где нельзя."],
      en: ["World generation in Minecraft is one of its heaviest spots and barely uses multiple cores. PFCG is an attempt to fix that: spread chunk generation across threads so a multi-core CPU works at full capacity.", "It's non-trivial because game logic strongly dislikes parallelism. The project is research into where you can safely parallelise and where you can't."],
      uk: ["Генерація світу в Minecraft — одне з найважчих місць за навантаженням, і вона майже не використовує кілька ядер. PFCG — спроба це виправити: рознести генерацію чанків по потоках.", "Завдання нетривіальне через те, що ігрова логіка дуже не любить паралельність."],
    },
  },
  {
    id: "asyncchunkgen", name: "Async Chunk Generator", aka: "Асинхронные чанки",
    category: "minecraft", status: "concept", year: 2024,
    langs: ["Java"], tags: ["Асинхронность", "Производительность"],
    short: {
      ru: "Эксперименты с асинхронной генерацией чанков, чтобы сервер не зависал при создании новых территорий.",
      en: "Experiments with async chunk generation so the server doesn't freeze while creating new terrain.",
      uk: "Експерименти з асинхронною генерацією чанків, щоб сервер не зависав при створенні нових територій.",
    },
    body: {
      ru: ["Соседняя с PFCG тема. Когда игрок уходит в неизведанные земли, сервер генерирует новые чанки и часто заметно подлагивает. Здесь я пробовал вынести генерацию в фон, чтобы основной игровой поток не ждал её.", "Несколько подходов — ChunkGeneratorPlugin, DistributedChunksPaper — каждый со своими компромиссами между скоростью и стабильностью."],
      en: ["A topic adjacent to PFCG. When a player heads into uncharted land, the server generates new chunks and often visibly lags. Here I tried moving generation into the background so the main game thread doesn't wait on it.", "Several approaches — ChunkGeneratorPlugin, DistributedChunksPaper — each with its own trade-off between speed and stability."],
      uk: ["Сусідня з PFCG тема. Коли гравець іде в незвідані землі, сервер генерує нові чанки й часто помітно підлагує. Тут я пробував винести генерацію у фон.", "Кілька підходів, кожен зі своїм компромісом між швидкістю та стабільністю."],
    },
  },
  {
    id: "afkmod", name: "AFK Mod", aka: "Автопропуск ночей",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Mod", "QoL"],
    short: {
      ru: "Мод, который автоматически пропускает ночь через команду /lay на серверах с этой механикой.",
      en: "A mod that auto-skips the night via the /lay command on servers that support it.",
      uk: "Мод, що автоматично пропускає ніч через команду /lay на серверах із цією механікою.",
    },
    body: {
      ru: ["Маленький мод комфорта. На некоторых серверах ночь пропускается командой /lay вместо обычной кровати. AFK Mod делает это сам, когда нужно, чтобы не отвлекаться от дел.", "Ничего сложного, но удобная мелочь для тех, кто играет на таких серверах постоянно."],
      en: ["A small comfort mod. On some servers the night is skipped with the /lay command instead of a regular bed. AFK Mod does it for you when needed, so you're not distracted from your tasks.", "Nothing complex, but a handy convenience for those who play such servers regularly."],
      uk: ["Маленький мод комфорту. На деяких серверах ніч пропускається командою /lay замість звичайного ліжка. AFK Mod робить це сам, коли потрібно.", "Нічого складного, але зручна дрібниця для тих, хто грає на таких серверах постійно."],
    },
  },
  {
    id: "arm", name: "Auto Reply Mod", aka: "ARM",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Mod", "Чат", "Автоматизация"],
    short: {
      ru: "Мод-автоответчик: реагирует на сообщения в чате Minecraft по заданным правилам.",
      en: "An auto-responder mod: reacts to Minecraft chat messages by configured rules.",
      uk: "Мод-автовідповідач: реагує на повідомлення в чаті Minecraft за заданими правилами.",
    },
    body: {
      ru: ["Когда ты отошёл, а в чате тебе пишут, ARM может ответить за тебя по правилам: на определённые слова или личные сообщения он отправляет заранее заданный текст.", "Полезно для AFK-режима или чтобы вежливо отвечать на типовые вопросы, пока занят другим."],
      en: ["When you've stepped away and someone writes to you in chat, ARM can answer for you by rules: on certain words or private messages it sends preset text.", "Useful for AFK time or to politely answer routine questions while you're busy with something else."],
      uk: ["Коли ти відійшов, а в чаті тобі пишуть, ARM може відповісти за тебе за правилами: на певні слова чи особисті повідомлення він надсилає заздалегідь заданий текст.", "Корисно для AFK-режиму або щоб ввічливо відповідати на типові питання."],
    },
  },
  {
    id: "dimensioncolor", name: "Dimension Color", aka: "Цвет ника по измерению",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "UI"],
    github: "https://github.com/AlexMelanFromRingo/DimensionColorPlugin",
    short: {
      ru: "Плагин для Paper, который окрашивает ник игрока в зависимости от измерения, где он находится.",
      en: "A Paper plugin that colours a player's name based on the dimension they're in.",
      uk: "Плагін для Paper, що забарвлює нік гравця залежно від виміру, де він перебуває.",
    },
    body: {
      ru: ["Простая, но приятная визуальная фишка. Игрок в Обычном мире — один цвет ника, в Аду — другой, в Энде — третий. Сразу видно по чату и TAB, кто где находится.", "Удобно на серверах, где важно понимать, кто ушёл в Незер или Энд."],
      en: ["A simple but pleasant visual touch. A player in the Overworld gets one name colour, in the Nether another, in the End a third. The chat and TAB instantly show who's where.", "Handy on servers where it matters who has gone to the Nether or the End."],
      uk: ["Проста, але приємна візуальна фішка. Гравець у Звичайному світі — один колір ніка, у Пеклі — інший, в Енді — третій.", "Зручно на серверах, де важливо розуміти, хто пішов у Незер чи Енд."],
    },
  },
  {
    id: "saferespawn", name: "Safe Respawn", aka: "Безопасное возрождение",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "QoL"],
    short: {
      ru: "Плагин, который возрождает игрока в безопасной точке в заданном радиусе от спавна.",
      en: "A plugin that respawns a player at a safe spot within a set radius of spawn.",
      uk: "Плагін, що відроджує гравця в безпечній точці в заданому радіусі від спавну.",
    },
    body: {
      ru: ["Стандартный спавн в Minecraft умеет высадить игрока в неудобное или опасное место. Этот плагин подбирает безопасную точку в радиусе вокруг спавна — без лавы, без падения, на твёрдой земле.", "Маленькое улучшение, которое убирает обидные смерти сразу после возрождения."],
      en: ["Minecraft's default spawn can drop a player into an awkward or dangerous spot. This plugin picks a safe point within a radius around spawn — no lava, no fall, solid ground.", "A small improvement that removes annoying deaths right after respawn."],
      uk: ["Стандартний спавн у Minecraft може висадити гравця в незручне або небезпечне місце. Цей плагін підбирає безпечну точку в радіусі навколо спавну.", "Маленьке покращення, що прибирає прикрі смерті одразу після відродження."],
    },
  },
  {
    id: "multiworld", name: "Multi World Plugin", aka: "Несколько миров",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "Миры"],
    short: {
      ru: "Базовый плагин для управления несколькими игровыми мирами и перемещения между ними.",
      en: "A basic plugin for managing several game worlds and moving between them.",
      uk: "Базовий плагін для керування кількома ігровими світами та переміщення між ними.",
    },
    body: {
      ru: ["Из коробки сервер живёт в одном наборе миров. Этот плагин даёт простую основу для нескольких независимых миров: создание, загрузка и телепортация игроков между ними.", "Делался как фундамент для более крупных идей, где разные режимы игры живут в отдельных мирах."],
      en: ["Out of the box a server lives in one set of worlds. This plugin gives a simple foundation for several independent worlds: creating, loading and teleporting players between them.", "Built as a base for larger ideas where different game modes live in separate worlds."],
      uk: ["З коробки сервер живе в одному наборі світів. Цей плагін дає просту основу для кількох незалежних світів: створення, завантаження та телепортація гравців.", "Робився як фундамент для більших ідей, де різні режими гри живуть в окремих світах."],
    },
  },
  {
    id: "betterpvp", name: "Better PvP", aka: "PvP до 1.9",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "PvP", "Combat"],
    short: {
      ru: "Плагин, возвращающий старую боевую механику без задержки между ударами, как было до версии 1.9.",
      en: "A plugin that brings back the old no-cooldown combat mechanic from before version 1.9.",
      uk: "Плагін, що повертає стару бойову механіку без затримки між ударами, як було до версії 1.9.",
    },
    body: {
      ru: ["Обновление 1.9 сильно изменило бой в Minecraft, добавив задержку между ударами. Многие PvP-игроки так и не приняли это и хотят старую механику. Better PvP убирает кулдаун, возвращая динамичный бой версии 1.8.", "Это спорная для механики тема, поэтому плагин аккуратно вмешивается только в боевую часть, не ломая остальное."],
      en: ["The 1.9 update heavily changed Minecraft combat by adding an attack cooldown. Many PvP players never accepted it and want the old mechanic. Better PvP removes the cooldown, restoring the fast-paced 1.8 combat.", "It's a touchy area, so the plugin carefully touches only the combat part without breaking the rest."],
      uk: ["Оновлення 1.9 сильно змінило бій у Minecraft, додавши затримку між ударами. Багато PvP-гравців так і не прийняли це. Better PvP прибирає кулдаун, повертаючи динамічний бій версії 1.8.", "Це спірна для механіки тема, тож плагін акуратно втручається лише в бойову частину."],
    },
  },
  {
    id: "shulkerbox", name: "ShulkerBox Plugin", aka: "Шалкеры в руке",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Items", "QoL"],
    github: "https://github.com/AlexMelanFromRingo/ShulkerBoxPlugin",
    short: {
      ru: "Плагин, позволяющий открывать шалкеровый ящик прямо из руки, не ставя его в мир.",
      en: "A plugin that lets you open a shulker box straight from your hand without placing it.",
      uk: "Плагін, що дозволяє відкривати шалкерову скриню прямо з руки, не ставлячи її у світ.",
    },
    body: {
      ru: ["Шалкеровые ящики — главное переносное хранилище в игре, но чтобы залезть внутрь, его обычно нужно поставить и потом сломать. Этот плагин даёт открыть ящик прямо в руке одним действием.", "Удобная мелочь, которая экономит кучу времени тем, кто постоянно сортирует ресурсы."],
      en: ["Shulker boxes are the main portable storage in the game, but to look inside you usually have to place one and then break it. This plugin opens the box right in your hand in one action.", "A handy little thing that saves a lot of time for anyone constantly sorting resources."],
      uk: ["Шалкерові скрині — головне переносне сховище у грі, але щоб залізти всередину, її зазвичай треба поставити й потім зламати. Цей плагін дає відкрити скриню прямо в руці.", "Зручна дрібниця, що економить купу часу тим, хто постійно сортує ресурси."],
    },
  },
  {
    id: "vaultplugin", name: "VaultPlugin", aka: "Сейфы",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Storage"],
    github: "https://github.com/AlexMelanFromRingo/VaultPlugin",
    short: {
      ru: "Простой плагин для создания личных сейфов — защищённых хранилищ предметов на сервере.",
      en: "A simple plugin for creating personal vaults — protected item storage on a server.",
      uk: "Простий плагін для створення особистих сейфів — захищених сховищ предметів на сервері.",
    },
    body: {
      ru: ["Плагин даёт каждому игроку личное защищённое хранилище — сейф, доступ к которому есть только у владельца. Удобно держать ценные вещи там, где их точно никто не тронет.", "Сделан намеренно простым: одна понятная команда и предсказуемое поведение."],
      en: ["The plugin gives each player a personal protected storage — a vault only its owner can access. Handy for keeping valuables where nobody can touch them.", "Made deliberately simple: one clear command and predictable behaviour."],
      uk: ["Плагін дає кожному гравцю особисте захищене сховище — сейф, доступ до якого має лише власник. Зручно тримати цінні речі там, де їх ніхто не чіпатиме.", "Зроблено навмисно простим: одна зрозуміла команда й передбачувана поведінка."],
    },
  },
  {
    id: "herobrine", name: "Herobrine Plugin", aka: "Легенда о Херобрине",
    category: "minecraft", status: "concept", year: 2023,
    langs: ["Java"], tags: ["Paper", "Атмосфера", "Контент"],
    short: {
      ru: "Плагин, оживляющий старую легенду о Херобрине — редкие пугающие события на сервере.",
      en: "A plugin that brings the old Herobrine legend to life — rare unsettling events on a server.",
      uk: "Плагін, що оживляє стару легенду про Херобрина — рідкісні моторошні події на сервері.",
    },
    body: {
      ru: ["Херобрин — главная страшилка комьюнити Minecraft, которого никогда не было в игре. Плагин делает легенду живой: редкие странные события, следы, исчезающие постройки — то, что заставляет игроков нервно оглядываться.", "Развлекательный проект про атмосферу, а не про геймплей: вся ценность в том, чтобы события были редкими и неочевидными."],
      en: ["Herobrine is the Minecraft community's main scary story, a creature that was never actually in the game. The plugin makes the legend feel real: rare strange events, traces, vanishing builds — the kind of thing that makes players glance over their shoulder.", "An entertainment project about atmosphere rather than gameplay: the value is in keeping events rare and subtle."],
      uk: ["Херобрин — головна страшилка спільноти Minecraft, якого ніколи не було у грі. Плагін робить легенду живою: рідкісні дивні події, сліди, зникаючі будівлі.", "Розважальний проєкт про атмосферу, а не про геймплей: уся цінність у тому, щоб події були рідкісними."],
    },
  },
  {
    id: "deathdb", name: "DeathDB", aka: "Журнал смертей",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "База данных", "Логи"],
    short: {
      ru: "Плагин, который записывает все смерти игроков на сервере в базу данных с деталями.",
      en: "A plugin that records every player death on a server into a database with details.",
      uk: "Плагін, що записує всі смерті гравців на сервері в базу даних із деталями.",
    },
    body: {
      ru: ["Каждая смерть игрока попадает в базу: кто, где, когда и от чего погиб. Это и статистика, и инструмент для администрации — можно посмотреть историю, найти подозрительные места и убийства.", "Заодно это был мой практический заход в работу с базами данных из плагина."],
      en: ["Every player death goes into a database: who, where, when and how they died. It's both statistics and an admin tool — you can review history and spot suspicious places and kills.", "It was also my practical entry into working with databases from a plugin."],
      uk: ["Кожна смерть гравця потрапляє в базу: хто, де, коли і від чого загинув. Це і статистика, і інструмент для адміністрації.", "Заразом це був мій практичний захід у роботу з базами даних із плагіна."],
    },
  },
  {
    id: "blockdirectip", name: "Block Direct IP", aka: "Защита от обхода прокси",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Security", "Сеть"],
    short: {
      ru: "Плагин, блокирующий прямые подключения к игровому серверу в обход прокси Velocity.",
      en: "A plugin that blocks direct connections to the game server that bypass the Velocity proxy.",
      uk: "Плагін, що блокує прямі підключення до ігрового сервера в обхід проксі Velocity.",
    },
    body: {
      ru: ["Когда сервер стоит за прокси Velocity, игроки должны заходить только через прокси. Но если кто-то узнал прямой IP бэкенда, он может подключиться напрямую и обойти всю защиту и маршрутизацию.", "Плагин закрывает эту дыру: он пропускает только соединения, пришедшие через доверенный прокси, а прямые — отклоняет."],
      en: ["When a server sits behind a Velocity proxy, players should only connect through the proxy. But if someone learns the backend's direct IP, they can connect straight to it and bypass all protection and routing.", "The plugin closes that hole: it only admits connections that came through the trusted proxy and rejects direct ones."],
      uk: ["Коли сервер стоїть за проксі Velocity, гравці мають заходити лише через проксі. Але якщо хтось дізнався прямий IP бекенда, він може підключитися напряму.", "Плагін закриває цю дірку: він пропускає лише з'єднання через довірений проксі, а прямі відхиляє."],
    },
  },
  {
    id: "scoreboardmgr", name: "Main Scoreboard Manager", aka: "Боковая панель",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "UI"],
    short: {
      ru: "Плагин для управления боковым скорбордом сервера — информационной панелью у края экрана.",
      en: "A plugin for managing the server's side scoreboard — the info panel at the screen edge.",
      uk: "Плагін для керування бічним скорбордом сервера — інформаційною панеллю біля краю екрана.",
    },
    body: {
      ru: ["Боковая панель у правого края экрана — стандартное место для информации сервера: онлайн, баланс, статистика, время. Этот плагин даёт удобный способ ею управлять и наполнять её содержимым.", "Базовый, но нужный кирпичик для любого сервера, который хочет красиво показывать игроку важные данные."],
      en: ["The side panel at the right edge of the screen is the standard place for server info: online count, balance, stats, time. This plugin gives a convenient way to manage and fill it.", "A basic but necessary building block for any server that wants to show players key data neatly."],
      uk: ["Бічна панель біля правого краю екрана — стандартне місце для інформації сервера: онлайн, баланс, статистика, час. Цей плагін дає зручний спосіб нею керувати.", "Базовий, але потрібний цеглинка для будь-якого сервера."],
    },
  },
  {
    id: "ninelives", name: "Nine Lives Plugin", aka: "Система жизней",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "Геймплей"],
    short: {
      ru: "Плагин, добавляющий механику ограниченного числа жизней для хардкорных режимов.",
      en: "A plugin that adds a limited-lives mechanic for hardcore game modes.",
      uk: "Плагін, що додає механіку обмеженої кількості життів для хардкорних режимів.",
    },
    body: {
      ru: ["У каждого игрока есть запас жизней, и каждая смерть его уменьшает. Когда жизни кончились — наступают последствия по правилам сервера: бан на время, режим наблюдателя или что-то ещё.", "Механика для напряжённых сезонных серверов, где смерть должна что-то значить."],
      en: ["Each player has a pool of lives, and every death reduces it. When lives run out, consequences kick in by server rules: a temporary ban, spectator mode or something else.", "A mechanic for tense seasonal servers where death should mean something."],
      uk: ["У кожного гравця є запас життів, і кожна смерть його зменшує. Коли життя скінчилися — настають наслідки за правилами сервера.", "Механіка для напружених сезонних серверів, де смерть має щось значити."],
    },
  },
  {
    id: "roomchecker", name: "Room Checker Plugin", aka: "Проверка помещений",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "Геймплей"],
    short: {
      ru: "Плагин, который определяет, находится ли игрок в закрытом помещении, и реагирует на это.",
      en: "A plugin that detects whether a player is inside an enclosed room and reacts to it.",
      uk: "Плагін, що визначає, чи перебуває гравець у закритому приміщенні, і реагує на це.",
    },
    body: {
      ru: ["Плагин определяет, замкнут ли игрок в помещении — есть ли вокруг него стены, крыша, пол. На основе этого можно строить механики: безопасные зоны, бонусы за обустроенный дом, защиту от мобов.", "Интересная задача — алгоритм проверки замкнутости пространства в воксельном мире."],
      en: ["The plugin detects whether a player is enclosed in a room — whether there are walls, a roof and a floor around them. On top of that you can build mechanics: safe zones, bonuses for a built-up home, mob protection.", "An interesting task — an algorithm for checking the enclosure of space in a voxel world."],
      uk: ["Плагін визначає, чи замкнений гравець у приміщенні — чи є навколо нього стіни, дах, підлога. На основі цього можна будувати механіки: безпечні зони, бонуси за облаштований дім.", "Цікаве завдання — алгоритм перевірки замкненості простору у воксельному світі."],
    },
  },
  {
    id: "throughworlds", name: "ThroughWorlds", aka: "Переходы между мирами",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "Миры"],
    short: {
      ru: "Плагин для простого взаимодействия и перемещения между несколькими измерениями.",
      en: "A plugin for simple interaction and travel between several dimensions.",
      uk: "Плагін для простої взаємодії та переміщення між кількома вимірами.",
    },
    body: {
      ru: ["Развитие идеи Multi World: здесь упор не на управление мирами, а на удобные переходы между ними — порталы, команды телепортации, сохранение состояния игрока при переезде.", "Часть набора плагинов, которые вместе позволяют строить серверы со сложной структурой миров."],
      en: ["An evolution of the Multi World idea: here the focus isn't on managing worlds but on convenient travel between them — portals, teleport commands, preserving player state across a move.", "Part of a plugin set that together lets you build servers with a complex world structure."],
      uk: ["Розвиток ідеї Multi World: тут акцент не на керуванні світами, а на зручних переходах між ними — портали, команди телепортації, збереження стану гравця.", "Частина набору плагінів, що разом дозволяють будувати сервери зі складною структурою світів."],
    },
  },
  {
    id: "realisticaudio", name: "Realistic Audio", aka: "Трассировка звука",
    category: "minecraft", status: "concept", year: 2025,
    langs: ["Java"], tags: ["Fabric", "Mixin", "Ray Tracing", "OpenAL"],
    github: "https://github.com/AlexMelanFromRingo/ray-trace-sound-mod",
    short: {
      ru: "Fabric-мод, делающий распространение звука физически правдоподобным через трассировку акустических лучей.",
      en: "A Fabric mod making sound propagation physically plausible via acoustic ray tracing.",
      uk: "Fabric-мод, що робить поширення звуку фізично правдоподібним через трасування акустичних променів.",
    },
    body: {
      ru: ["Амбициозный мод: каждый звук в игре проходит через трассировку акустических лучей. Из позиции слушателя и источника пускается прямой луч и конус из 16 лучей с отражениями, по пути считаются блоки и их акустические свойства — больше 50 материалов с разными коэффициентами поглощения.",
        "Дальше среда классифицируется (улица, помещение, пещера, лес, под водой) и к источнику OpenAL применяются громкость, частотная фильтрация и реверберация. Звук в пещере должен звучать как в пещере. Проект экспериментальный — есть известные баги, но идея и архитектура полностью рабочие."],
      en: ["An ambitious mod: every sound in the game runs through acoustic ray tracing. From the listener and the source, a direct ray and a 16-ray cone with reflections are cast, counting blocks and their acoustic properties along the way — over 50 materials with different absorption coefficients.",
        "The environment is then classified (outdoors, indoors, cave, forest, underwater) and volume, frequency filtering and reverb are applied to the OpenAL source. A cave should sound like a cave. The project is experimental — there are known bugs, but the idea and architecture fully work."],
      uk: ["Амбітний мод: кожен звук у грі проходить через трасування акустичних променів. Із позиції слухача й джерела пускається прямий промінь і конус із 16 променів із відбиттями, по дорозі рахуються блоки та їхні акустичні властивості.",
        "Далі середовище класифікується (вулиця, приміщення, печера, ліс, під водою) і до джерела OpenAL застосовуються гучність, частотна фільтрація та реверберація. Проєкт експериментальний — є відомі баги, але ідея повністю робоча."],
    },
  },
  {
    id: "mcchatutils", name: "mc-chat-utils", aka: "Нагрузочное тестирование чата",
    category: "minecraft", status: "done", year: 2026,
    langs: ["Rust"], tags: ["CLI", "Тестирование", "Protocol"],
    github: "https://github.com/AlexMelanFromRingo/mc-chat-utils",
    short: {
      ru: "Небольшая Rust-утилита для нагрузочного тестирования чата на локальном Minecraft-сервере.",
      en: "A small Rust CLI for load-testing chat on a local Minecraft server.",
      uk: "Невелика Rust-утиліта для навантажувального тестування чату на локальному Minecraft-сервері.",
    },
    body: {
      ru: ["Инструмент для разработки: запускает несколько ботов, которые одновременно пишут в чат локального сервера, чтобы проверить, как тот держит нагрузку. Использует мой проект minecraft-rs как зависимость.", "Сделан аккуратно: утилита намеренно отказывается работать с публичными IP и принимает только локальные адреса. Это инструмент для своего тестового стенда, а не для чужих серверов."],
      en: ["A development tool: it spins up several bots that write into a local server's chat at once, to check how it holds the load. It uses my minecraft-rs project as a dependency.", "Built carefully: the tool deliberately refuses public IPs and accepts only local addresses. It's a tool for your own test bench, not for someone else's servers."],
      uk: ["Інструмент для розробки: запускає кілька ботів, які одночасно пишуть у чат локального сервера, щоб перевірити, як той тримає навантаження. Використовує мій проєкт minecraft-rs.", "Зроблено акуратно: утиліта навмисно відмовляється працювати з публічними IP і приймає лише локальні адреси."],
    },
  },
  {
    id: "minecraftrs", name: "minecraft-rs", aka: "Протокол Minecraft на Rust",
    category: "minecraft", status: "active", year: 2026,
    langs: ["Rust"], tags: ["Protocol", "Сеть", "Низкий уровень"],
    github: "https://github.com/AlexMelanFromRingo/minecraft-rs",
    short: {
      ru: "Реализация сетевого протокола Minecraft на Rust — основа для ботов и инструментов.",
      en: "An implementation of the Minecraft network protocol in Rust — a base for bots and tools.",
      uk: "Реалізація мережевого протоколу Minecraft на Rust — основа для ботів та інструментів.",
    },
    body: {
      ru: ["Низкоуровневая библиотека: кодек, фреймер и пакеты протокола Minecraft, написанные на Rust. Это фундамент, на котором стоят mc-chat-utils и Rust-часть MinecraftBot.", "Rust здесь выбран ради скорости и надёжности — сетевой код с ним и быстрый, и защищён от целого класса ошибок памяти."],
      en: ["A low-level library: the codec, framer and packets of the Minecraft protocol, written in Rust. It's the foundation that mc-chat-utils and the Rust part of MinecraftBot stand on.", "Rust was chosen here for speed and reliability — networking code with it is both fast and protected from a whole class of memory bugs."],
      uk: ["Низькорівнева бібліотека: кодек, фреймер і пакети протоколу Minecraft, написані на Rust. Це фундамент, на якому стоять mc-chat-utils і Rust-частина MinecraftBot.", "Rust тут обрано заради швидкості та надійності."],
    },
  },
  {
    id: "pythonmc", name: "python-mc", aka: "Протокол Minecraft на Python",
    category: "minecraft", status: "done", year: 2025,
    langs: ["Python"], tags: ["Protocol", "Сеть"],
    github: "https://github.com/AlexMelanFromRingo/python-mc",
    short: {
      ru: "Реализация протокола Minecraft на Python — эталонная версия для быстрых экспериментов.",
      en: "An implementation of the Minecraft protocol in Python — a reference version for quick experiments.",
      uk: "Реалізація протоколу Minecraft на Python — еталонна версія для швидких експериментів.",
    },
    body: {
      ru: ["Python-версия работы с протоколом Minecraft. Она проще и нагляднее, чем Rust, и удобна, чтобы быстро проверить идею или разобраться, как устроен конкретный пакет.", "По сути это эталон, по которому потом сверялась Rust-реализация и Bot API."],
      en: ["A Python take on working with the Minecraft protocol. It's simpler and clearer than Rust, and handy for quickly testing an idea or figuring out how a specific packet works.", "It's effectively the reference the Rust implementation and Bot API were later checked against."],
      uk: ["Python-версія роботи з протоколом Minecraft. Вона простіша й наочніша за Rust, зручна, щоб швидко перевірити ідею.", "По суті це еталон, за яким потім звірялася Rust-реалізація та Bot API."],
    },
  },
  {
    id: "svh", name: "Speedrunner Versus Hunter", aka: "SVH",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Velocity", "Docker", "Игровой режим"],
    github: "https://github.com/AlexMelanFromRingo/SpeedrunnerVersusHunter",
    short: {
      ru: "Плагин игрового режима «Спидраннер против Охотников» с продакшен-сетапом на Velocity и Docker.",
      en: "A 'Speedrunner vs Hunter' game-mode plugin with a production setup on Velocity and Docker.",
      uk: "Плагін ігрового режиму «Спідранер проти Мисливців» із продакшен-сетапом на Velocity та Docker.",
    },
    body: {
      ru: ["Популярный по YouTube формат: один игрок-спидраннер пытается убить дракона, остальные — охотники — пытаются убить его. Плагин реализует всю логику матча на API 1.20.", "Интересна не только игровая часть, но и инфраструктура: полноценный сетап — это лобби-сервер, прокси Velocity и игровой сервер в Docker-контейнере, где миры специально не сохраняются и пересоздаются каждый матч."],
      en: ["A format popular on YouTube: one speedrunner tries to kill the dragon while the others — hunters — try to kill them. The plugin implements the full match logic on the 1.20 API.", "What's interesting isn't just the gameplay but the infrastructure: a full setup is a lobby server, a Velocity proxy and a game server in a Docker container where worlds deliberately aren't saved and are recreated each match."],
      uk: ["Популярний за YouTube формат: один гравець-спідранер намагається вбити дракона, решта — мисливці — намагаються вбити його. Плагін реалізує всю логіку матчу на API 1.20.", "Цікава не лише ігрова частина, а й інфраструктура: повноцінний сетап — це лобі-сервер, проксі Velocity та ігровий сервер у Docker-контейнері."],
    },
  },
  {
    id: "serverradio", name: "Server Radio", aka: "Радио на сервере",
    category: "minecraft", status: "concept", year: 2024,
    langs: ["Java"], tags: ["Paper", "Аудио"],
    github: "https://github.com/AlexMelanFromRingo/server-radio",
    short: {
      ru: "Плагин, добавляющий на сервер общую радиостанцию с музыкой для игроков.",
      en: "A plugin that adds a shared radio station with music for players to a server.",
      uk: "Плагін, що додає на сервер спільну радіостанцію з музикою для гравців.",
    },
    body: {
      ru: ["Идея — общее радио на сервере: единый поток музыки, который слышат подключённые игроки. Маленькая социальная фишка, которая делает сервер живее, когда народ просто проводит время вместе.", "Эксперимент с тем, как лучше доставлять и синхронизировать звук между игроками средствами игры."],
      en: ["The idea is a shared server radio: one music stream that connected players hear together. A small social touch that makes a server feel more alive when people are just hanging out.", "An experiment in how best to deliver and sync sound between players using the game's own means."],
      uk: ["Ідея — спільне радіо на сервері: єдиний потік музики, який чують підключені гравці. Маленька соціальна фішка, що робить сервер живішим.", "Експеримент із тим, як краще доставляти й синхронізувати звук між гравцями."],
    },
  },
  {
    id: "mcserverping", name: "Minecraft Server Ping", aka: "Поиск серверов",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java", "Python", "Go"], tags: ["Сканер", "Сеть", "Protocol"],
    github: "https://github.com/AlexMelanFromRingo/minecraft-ping-tool",
    short: {
      ru: "Сканер диапазонов IP, который ищет работающие Minecraft-серверы на стандартном порту 25565.",
      en: "An IP-range scanner that hunts for live Minecraft servers on the standard port 25565.",
      uk: "Сканер діапазонів IP, що шукає робочі Minecraft-сервери на стандартному порту 25565.",
    },
    body: {
      ru: ["Утилита проходит по диапазону IP-адресов, стучится на порт 25565 и по протоколу Server List Ping выясняет, есть ли там Minecraft-сервер: версия, описание, онлайн. Так можно собирать карту публичных серверов.", "Проект интересен тем, что я переписывал его на трёх языках — Java, Python и Go — и сравнивал, как каждый справляется с массовым асинхронным сетевым опросом."],
      en: ["The utility walks an IP-address range, knocks on port 25565 and uses the Server List Ping protocol to find out whether a Minecraft server is there: version, description, online count. This way you can build a map of public servers.", "The project is interesting because I rewrote it in three languages — Java, Python and Go — and compared how each handles mass async network polling."],
      uk: ["Утиліта проходить діапазоном IP-адрес, стукає на порт 25565 і за протоколом Server List Ping з'ясовує, чи є там Minecraft-сервер: версія, опис, онлайн.", "Проєкт цікавий тим, що я переписував його трьома мовами — Java, Python і Go — і порівнював, як кожна справляється з масовим асинхронним опитуванням."],
    },
  },
];
