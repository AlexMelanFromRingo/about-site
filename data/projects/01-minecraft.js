/* Minecraft: плагины и моды */
module.exports = [
  {
    id: "obsidianauth", name: "ObsidianAuth", aka: "TOTP 2FA для Minecraft",
    category: "minecraft", status: "active", year: 2026, featured: true,
    langs: ["Java", "Gradle"], tags: ["Paper 1.20.1", "Velocity", "TOTP", "Security", "AES-GCM"],
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
        "Архитектура — многомодульный Gradle-проект на Java 17, спроектированный спецификацией заранее: отдельная конституция проекта запрещает трогать внутренности движка. Это серверный плагин уровня продакшена, а не учебная демка.",
      ],
      en: [
        "A plugin pair that gates server login behind a second factor. The Paper module stores secrets and verifies codes; the Velocity module guards chat and commands at the proxy level. The name is deliberate: obsidian is the one ordinary block that survives an explosion, frames a portal and shells an ender chest — gated access, authority, private storage.",
        "Security here is real. Secrets are stored AES-GCM-256 encrypted, the master key resolved via KMS → key file → env var and never hard-coded. Before a valid code, the player is fully locked: movement, block breaking, containers and chat are all cancelled server-side. No NMS, no Mixin, public APIs only.",
        "The architecture is a multi-module Java 17 Gradle project, spec-driven up front: a project constitution forbids touching engine internals. This is a production-grade server plugin, not a learning demo.",
      ],
      uk: [
        "Пара плагінів, що закриває вхід на сервер другим фактором. Paper-модуль зберігає секрети й перевіряє коди, а Velocity-модуль страхує чат і команди на рівні проксі. Назва не випадкова: обсидіан — єдиний звичайний блок, що витримує вибух, утворює рамку порталу та корпус ендер-скрині.",
        "Безпека тут справжня. Секрети зберігаються зашифрованими через AES-GCM-256, ключ береться ланцюжком KMS → файл → змінна оточення й ніколи не потрапляє в код. До введення коду гравець повністю заблокований. Жодних NMS і Mixin, лише публічні API.",
        "Архітектура — багатомодульний Gradle-проєкт на Java 17, спроєктований специфікацією заздалегідь. Це серверний плагін рівня продакшену, а не навчальна демка.",
      ],
    },
    features: {
      ru: ["Paper-авторитетная архитектура: секреты и проверка только на сервере", "Шифрование секретов AES-GCM-256 с привязкой к UUID игрока", "Ленивая ротация ключей без простоя", "Failure-closed: неопределённое состояние считается «не авторизован»", "Безопасная выдача QR-кода с атомарным восстановлением инвентаря", "Без NMS и Mixin — только публичные API Paper и Velocity"],
      en: ["Paper-authoritative: secrets and verification stay on the server", "AES-GCM-256 secret encryption bound to player UUID", "Lazy key rotation with zero downtime", "Failure-closed: an indeterminate state counts as unauthenticated", "Inventory-safe QR delivery with atomic restore", "No NMS or Mixin — Paper and Velocity public APIs only"],
      uk: ["Paper-авторитетна архітектура: секрети й перевірка лише на сервері", "Шифрування секретів AES-GCM-256 з прив'язкою до UUID гравця", "Лінива ротація ключів без простою", "Failure-closed: невизначений стан вважається «не авторизований»", "Безпечна видача QR-коду з атомарним відновленням інвентарю", "Без NMS і Mixin — лише публічні API"],
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
        "Главная идея — один и тот же API в трёх обличьях. Python-версия без зависимостей для быстрой итерации, нативный Rust-крейт для встраивания, и PyO3-фасад: тот же Python-скрипт, но на скорости Rust заменой одной строки импорта. Совпадение API между ними проверяется автоматическим тестом на каждом коммите.",
        "Всё протестировано на живом Paper-сервере 1.20.1 в offline-режиме. Разработка велась по спецификациям: три эпика (протокол, Bot API, Rust+PyO3) с полностью закрытыми задачами и замерами производительности.",
      ],
      en: [
        "A full bot framework for Minecraft Java 1.20.1 (protocol 763). All 176 packets of the version are implemented, plus codec, framer and the connection lifecycle. On top sits a high-level Bot API: A* pathfinding walks, 20 Hz physics, a world cache, entity tracker, inventory, auto-eat and behaviour trees.",
        "The core idea is one API in three forms. A dependency-free Python build for fast iteration, a native Rust crate for embedding, and a PyO3 facade — the same Python script at Rust speed by swapping one import line. API parity is checked by an automated test on every commit.",
        "All live-tested against a real Paper 1.20.1 server in offline mode. Development was spec-driven: three epics (protocol, Bot API, Rust+PyO3) with all tasks closed and performance gates measured.",
      ],
      uk: [
        "Повноцінний фреймворк для ботів під Minecraft Java 1.20.1 (протокол 763). Реалізовано всі 176 пакетів версії, кодек, фреймер і життєвий цикл з'єднання. Поверх протоколу — високорівневий Bot API: ходьба з A*-пошуком шляху, фізика на 20 Гц, кеш світу, трекер сутностей.",
        "Головна ідея — один і той самий API у трьох обличчях: Python без залежностей, нативний Rust-крейт і PyO3-фасад на швидкості Rust. Збіг API перевіряється автоматичним тестом на кожному коміті.",
        "Усе протестовано на живому Paper 1.20.1 сервері. Розробка велася за специфікаціями: три епіки з повністю закритими задачами.",
      ],
    },
    features: {
      ru: ["Все 176 пакетов протокола 763 на Python и Rust", "Высокоуровневый Bot API: walk_to, A*, физика 20 Гц", "PyO3-фасад: скорость Rust в Python без переписывания", "Автотест паритета API на каждом PR", "Захват и воспроизведение сетевого трафика (WireLog)", "Деревья поведения, авто-еда, трекер сущностей, кэш мира"],
      en: ["All 176 protocol-763 packets in Python and Rust", "High-level Bot API: walk_to, A*, 20 Hz physics", "PyO3 facade: Rust speed in Python with no rewrite", "Automated API-parity test on every PR", "Network traffic capture and replay (WireLog)", "Behaviour trees, auto-eat, entity tracker, world cache"],
      uk: ["Усі 176 пакетів протоколу 763 на Python і Rust", "Високорівневий Bot API: walk_to, A*, фізика 20 Гц", "PyO3-фасад: швидкість Rust у Python без переписування", "Автотест паритету API на кожному PR", "Захоплення та відтворення мережевого трафіку", "Дерева поведінки, авто-їжа, трекер сутностей"],
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
        "К версии v2 добавились аналоговые провода, компараторы, симуляция отжига для размещения и роутер на A* с rip-up & reroute. Есть статический анализ задержек с детектом гонок данных, жёсткий лимит памяти и собственные коды выхода под каждую категорию ошибок. v3 принёс многобитные шины с побитовой индексацией.",
        "По сути это маленькая EDA-система для Minecraft: парсер, синтезатор логики, размещение, маршрутизация, тайминг-анализ. Цель сборки — Minecraft Java Edition 26.1.",
      ],
      en: [
        "The idea: describe a digital circuit in a Verilog-like language and get a ready redstone build you can paste into the world via Litematica. The compiler parses the HDL, synthesises logic and lays it out in 3D — a real place-and-route problem, like chip design.",
        "By v2 it gained analog wires, comparators, simulated-annealing placement and an A* router with rip-up & reroute. There's static timing analysis with data-race detection, a hard memory cap and dedicated exit codes per error category. v3 added multi-bit buses with bit indexing.",
        "It's effectively a small EDA toolchain for Minecraft: parser, logic synthesis, placement, routing, timing analysis. The build target is Minecraft Java Edition 26.1.",
      ],
      uk: [
        "Ідея проєкту: описати цифрову схему мовою на кшталт Verilog і отримати готову redstone-конструкцію, яку можна вставити у світ через Litematica. Компілятор розбирає HDL, синтезує логіку й розкладає її у тривимірному просторі.",
        "До версії v2 додалися аналогові дроти, компаратори, симуляція відпалу для розміщення та роутер на A*. Є статичний аналіз затримок із детектом гонок даних. v3 приніс багатобітні шини.",
        "По суті це маленька EDA-система для Minecraft: парсер, синтезатор логіки, розміщення, маршрутизація, тайминг-аналіз.",
      ],
    },
    features: {
      ru: ["HDL — подмножество Verilog: модули, провода, шины [3:0]", "Синтез логики и 3D place-and-route в redstone", "Два роутера: Lee и A* PathFinder с rip-up & reroute", "Размещение жадным алгоритмом или симуляцией отжига", "Статический анализ задержек, детект гонок данных", "Экспорт в формат .litematic для мода Litematica"],
      en: ["HDL — a Verilog subset: modules, wires, [3:0] buses", "Logic synthesis and 3D place-and-route into redstone", "Two routers: Lee and an A* PathFinder with rip-up & reroute", "Greedy or simulated-annealing placement", "Static timing analysis, data-race detection", "Exports to the .litematic format for the Litematica mod"],
      uk: ["HDL — підмножина Verilog: модулі, дроти, шини [3:0]", "Синтез логіки та 3D place-and-route у redstone", "Два роутери: Lee та A* PathFinder", "Розміщення жадібним алгоритмом або симуляцією відпалу", "Статичний аналіз затримок, детект гонок даних", "Експорт у формат .litematic"],
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
        "Инструмент, который читает все основные форматы схематик: легаси .schematic, современный .schem от WorldEdit (v2/v3) и .litematic от мода Litematica. Он не просто парсит, а анализирует: считает состав блоков, размеры, нужное сырьё с разбивкой крафта, ищет блоки по имени, достаёт текст табличек и данные block entity.",
        "Самое интересное — экспорт. Схематика превращается в 3D-модель OBJ или GLB с настоящей геометрией блоков из client.jar и текстурами. Жадное построение мешей сжимает результат в десятки раз, GPU-инстансинг превращает 30 ГБ в 1 ГБ. Есть и интерактивный HTML-просмотрщик на Three.js, и потоковый экспорт для гигантских схематик на 33 млн блоков.",
        "Поддерживается режим stonecutter для эффективных соотношений материалов, рендер воды и waterlogged-блоков, кастомные ресурс-паки и текстуры. Установка — одной командой cargo install.",
      ],
      en: [
        "A tool that reads every major schematic format: legacy .schematic, modern .schem from WorldEdit (v2/v3) and .litematic from the Litematica mod. It doesn't just parse — it analyses: block composition, dimensions, raw materials with crafting breakdown, block search, sign text and block-entity data extraction.",
        "The interesting part is export. A schematic becomes an OBJ or GLB 3D model with real block geometry from client.jar and textures. Greedy meshing shrinks the result tenfold, GPU instancing turns 30 GB into 1 GB. There's an interactive Three.js HTML viewer and streaming export for 33-million-block schematics.",
        "It supports a stonecutter mode for efficient material ratios, water and waterlogged-block rendering, custom resource packs and textures. Install with a single cargo install.",
      ],
      uk: [
        "Інструмент, що читає всі основні формати схематик: легасі .schematic, сучасний .schem від WorldEdit та .litematic від мода Litematica. Він аналізує склад блоків, розміри, потрібну сировину з розбивкою крафту.",
        "Найцікавіше — експорт. Схематика перетворюється на 3D-модель OBJ або GLB зі справжньою геометрією блоків і текстурами. Є інтерактивний HTML-переглядач на Three.js і потоковий експорт для гігантських схематик.",
        "Підтримується режим stonecutter, рендер води та waterlogged-блоків, кастомні ресурс-паки. Встановлення — однією командою cargo install.",
      ],
    },
    features: {
      ru: ["Три формата: .schematic, .schem (v2/v3), .litematic", "Анализ состава блоков и расчёт сырья с разбивкой крафта", "Экспорт в OBJ и GLB с реальной геометрией и текстурами", "Жадные меши и GPU-инстансинг — сжатие в десятки раз", "Интерактивный HTML-просмотрщик на Three.js", "Потоковый экспорт схематик на 33+ млн блоков"],
      en: ["Three formats: .schematic, .schem (v2/v3), .litematic", "Block-composition analysis and raw-material calc with crafting breakdown", "OBJ and GLB export with real geometry and textures", "Greedy meshing and GPU instancing — tenfold compression", "Interactive Three.js HTML viewer", "Streaming export for 33M+ block schematics"],
      uk: ["Три формати: .schematic, .schem (v2/v3), .litematic", "Аналіз складу блоків і розрахунок сировини", "Експорт у OBJ та GLB зі справжньою геометрією й текстурами", "Жадібні меші та GPU-інстансинг", "Інтерактивний HTML-переглядач на Three.js", "Потоковий експорт схематик на 33+ млн блоків"],
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
        "Сверху — продакшен-шелл с пайпами, редиректами и переменными, фреймворк сервисов с автозапуском и рестартом по экспоненте, пакетный менеджер с проверкой целостности по SHA-256 и удалённым реестром, GUI-композитор с двойной буферизацией и десятком виджетов.",
        "Многопользовательский режим с PBKDF2-HMAC-SHA256, аудит-лог, sudo с переаутентификацией. Встроенные приложения — рабочий стол, файловый менеджер, терминал, редактор с подсветкой Lua. Локализация на четыре языка: английский, украинский, русский, немецкий.",
      ],
      en: [
        "A full operating system for the in-game computers of the OpenComputers mod, written from scratch and independent of OpenOS and MineOS. At its core is a real microkernel with a cooperative scheduler, supervised processes, a capability sandbox, a mountable VFS and IPC channels.",
        "On top: a production shell with pipes, redirects and variables, a service framework with auto-start and exponential-backoff restarts, a package manager with SHA-256 integrity checks and a remote registry, a double-buffered GUI compositor with ten widgets.",
        "Multi-user with PBKDF2-HMAC-SHA256, an audit log, sudo with re-authentication. Built-in apps — a desktop, file manager, terminal, editor with Lua syntax highlighting. Localised into four languages: English, Ukrainian, Russian, German.",
      ],
      uk: [
        "Повноцінна операційна система для внутрішньоігрових комп'ютерів мода OpenComputers, написана з нуля й незалежна від OpenOS та MineOS. В основі — справжнє мікроядро з кооперативним планувальником і capability-пісочницею.",
        "Зверху — продакшен-шел із пайпами та змінними, фреймворк сервісів, пакетний менеджер із перевіркою цілісності SHA-256, GUI-композитор із подвійною буферизацією.",
        "Багатокористувацький режим із PBKDF2, аудит-лог, sudo. Вбудовані застосунки — робочий стіл, файловий менеджер, термінал, редактор. Локалізація чотирма мовами.",
      ],
    },
    features: {
      ru: ["Микроядро: кооперативный планировщик, capability-песочница, VFS, IPC", "Шелл с пайпами, редиректами, переменными, историей", "Фреймворк сервисов с надзором и рестартом по экспоненте", "Пакетный менеджер с проверкой SHA-256 и удалённым реестром", "GUI-композитор с двойной буферизацией и 10 виджетами", "Многопользовательский режим, PBKDF2, аудит-лог, sudo"],
      en: ["Microkernel: cooperative scheduler, capability sandbox, VFS, IPC", "Shell with pipes, redirects, variables, history", "Service framework with supervision and exponential-backoff restart", "Package manager with SHA-256 verification and a remote registry", "Double-buffered GUI compositor with 10 widgets", "Multi-user, PBKDF2, audit log, sudo"],
      uk: ["Мікроядро: кооперативний планувальник, capability-пісочниця, VFS, IPC", "Шел із пайпами, редиректами, змінними, історією", "Фреймворк сервісів із наглядом і рестартом по експоненті", "Пакетний менеджер із перевіркою SHA-256", "GUI-композитор із подвійною буферизацією та 10 віджетами", "Багатокористувацький режим, PBKDF2, аудит-лог, sudo"],
    },
  },
  {
    id: "sap", name: "Simple Authentication Plugin", aka: "SAP",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Auth"],
    github: "https://github.com/AlexMelanFromRingo/SimpleAuthPlugin",
    short: {
      ru: "Лёгкий плагин для Paper, который закрывает вход на сервер паролем без лишних настроек.",
      en: "A lightweight Paper plugin that gates server login behind a password with no extra setup.",
      uk: "Легкий плагін для Paper, що закриває вхід на сервер паролем без зайвих налаштувань.",
    },
    body: {
      ru: [
        "Мой первый серьёзный плагин аутентификации. Задача была простая: дать серверу базовую защиту от входа под чужим ником, не нагружая его и не требуя сложной настройки. Игрок регистрируется паролем командой /register и логинится при каждом входе через /login.",
        "Плагин специально сделан минимальным — он лёгкий, быстро ставится на любой сервер Paper версии 1.20.x и не мешает работе. До авторизации игрок ограничен, чтобы под чужим ником нельзя было ничего сделать. Пароли хранятся в локальной базе.",
        "Позже на опыте SAP выросли более защищённые SecureAuth и ObsidianAuth — но именно этот плагин был точкой, где я впервые разобрался, как устроена серверная аутентификация в Minecraft.",
      ],
      en: [
        "My first serious authentication plugin. The goal was simple: give a server basic protection against login under someone else's name, without loading it down or demanding complex setup. A player registers with /register and logs in each time with /login.",
        "It's deliberately minimal — light, quick to install on any Paper 1.20.x server, out of the way. Before logging in a player is restricted so nothing can be done under someone else's name. Passwords are kept in a local database.",
        "SecureAuth and ObsidianAuth later grew from SAP's lessons — but this plugin was the point where I first worked out how server-side authentication in Minecraft works.",
      ],
      uk: [
        "Мій перший серйозний плагін автентифікації. Завдання було просте: дати серверу базовий захист від входу під чужим ніком. Гравець реєструється паролем командою /register і логіниться через /login.",
        "Плагін навмисно зроблено мінімальним — він легкий, швидко ставиться на будь-який сервер Paper 1.20.x. До авторизації гравець обмежений. Паролі зберігаються в локальній базі.",
        "Згодом на досвіді SAP виросли захищеніші SecureAuth та ObsidianAuth — але саме цей плагін був точкою, де я вперше розібрався в серверній автентифікації.",
      ],
    },
    features: {
      ru: ["Регистрация и вход командами /register и /login", "Ограничение действий игрока до авторизации", "Хранение паролей в локальной базе данных", "Минимальная нагрузка, быстрая установка на Paper 1.20.x"],
      en: ["Registration and login via /register and /login", "Player actions restricted before authentication", "Password storage in a local database", "Minimal load, quick install on Paper 1.20.x"],
      uk: ["Реєстрація та вхід командами /register і /login", "Обмеження дій гравця до авторизації", "Зберігання паролів у локальній базі даних", "Мінімальне навантаження, швидка установка на Paper 1.20.x"],
    },
  },
  {
    id: "secureauth", name: "SecureAuth", aka: "Защищённая авторизация",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Auth", "Security"],
    github: "https://github.com/AlexMelanFromRingo/SecureAuth",
    short: {
      ru: "Развитие идеи SAP: плагин аутентификации с упором на хранение паролей и защиту до входа.",
      en: "An evolution of SAP: an auth plugin focused on password storage and pre-login protection.",
      uk: "Розвиток ідеї SAP: плагін автентифікації з акцентом на зберігання паролів і захист до входу.",
    },
    body: {
      ru: [
        "Следующий шаг после SAP. Здесь я переработал главное слабое место первого плагина — хранение паролей. Вместо наивного хранения пароли проходят через нормальное хеширование, так что даже доступ к базе не отдаёт их в открытом виде.",
        "Вторая переработка — состояние игрока до авторизации. До ввода пароля движение, взаимодействие с миром и чат закрыты аккуратнее, чтобы под чужим ником нельзя было ни осмотреться, ни что-то сломать.",
        "Плагин рассчитан на серверы Paper 1.20.x и стал мостиком к ObsidianAuth, где идея безопасности доведена до полноценного второго фактора по TOTP.",
      ],
      en: [
        "The next step after SAP. Here I reworked the first plugin's main weak spot — password storage. Instead of naive storage, passwords go through proper hashing, so even database access doesn't hand them over in the clear.",
        "The second rework — the player's pre-auth state. Before a password is entered, movement, world interaction and chat are locked down more carefully, so under someone else's name you can neither look around nor break anything.",
        "The plugin targets Paper 1.20.x servers and became the bridge to ObsidianAuth, where the security idea grew into a full TOTP second factor.",
      ],
      uk: [
        "Наступний крок після SAP. Тут я переробив головне слабке місце першого плагіна — зберігання паролів. Паролі проходять через нормальне хешування.",
        "Друга переробка — стан гравця до авторизації. До введення пароля рух, взаємодія зі світом і чат закриті акуратніше.",
        "Плагін розрахований на сервери Paper 1.20.x і став містком до ObsidianAuth.",
      ],
    },
    features: {
      ru: ["Хеширование паролей вместо наивного хранения", "Аккуратная блокировка действий игрока до входа", "Защита от входа под чужим ником", "Совместимость с серверами Paper 1.20.x"],
      en: ["Password hashing instead of naive storage", "Careful lockdown of player actions before login", "Protection against login under someone else's name", "Compatible with Paper 1.20.x servers"],
      uk: ["Хешування паролів замість наївного зберігання", "Акуратне блокування дій гравця до входу", "Захист від входу під чужим ніком", "Сумісність із серверами Paper 1.20.x"],
    },
  },
  {
    id: "chatping", name: "ChatPing", aka: "Упоминания в чате",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Chat"],
    github: "https://github.com/AlexMelanFromRingo/ChatPing",
    short: {
      ru: "Плагин для Paper, который подсвечивает и пингует игроков, упомянутых в чате по нику.",
      en: "A Paper plugin that highlights and pings players mentioned by name in chat.",
      uk: "Плагін для Paper, що підсвічує та пінгує гравців, згаданих у чаті за ніком.",
    },
    body: {
      ru: [
        "Привычная по Discord механика, перенесённая в Minecraft. Если в сообщении встречается ник игрока, плагин подсвечивает упоминание цветом и проигрывает этому игроку звук — человек точно заметит, что к нему обращаются, даже если отвлёкся от чата.",
        "Плагин разбирает каждое сообщение чата, ищет в нём ники онлайн-игроков и обрабатывает совпадения. Поведение настраивается: какой звук играть, как подсвечивать, реагировать ли на частичные совпадения.",
        "Мелочь, но на сервере с активным чатом она заметно меняет общение в лучшую сторону — обращения перестают теряться в потоке сообщений.",
      ],
      en: [
        "A familiar Discord mechanic ported into Minecraft. If a message contains a player's name, the plugin highlights the mention in colour and plays that player a sound — they definitely notice they're being addressed, even if they'd looked away from chat.",
        "The plugin parses every chat message, looks for online players' names and handles matches. Behaviour is configurable: which sound to play, how to highlight, whether to react to partial matches.",
        "A small thing, but on a server with an active chat it noticeably improves communication — mentions stop getting lost in the message stream.",
      ],
      uk: [
        "Звична за Discord механіка, перенесена в Minecraft. Якщо у повідомленні трапляється нік гравця, плагін підсвічує згадку кольором та програє йому звук.",
        "Плагін розбирає кожне повідомлення чату, шукає ніки онлайн-гравців і обробляє збіги. Поведінка налаштовується.",
        "Дрібниця, але на сервері з активним чатом вона помітно змінює спілкування на краще."],
    },
    features: {
      ru: ["Подсветка ника игрока в сообщении чата", "Звуковое уведомление упомянутому игроку", "Разбор сообщений и поиск онлайн-игроков", "Настройка звука и стиля подсветки"],
      en: ["Highlights a player's name inside a chat message", "Sound notification to the mentioned player", "Message parsing and online-player lookup", "Configurable sound and highlight style"],
      uk: ["Підсвічування ніка гравця у повідомленні чату", "Звукове сповіщення згаданому гравцю", "Розбір повідомлень і пошук онлайн-гравців", "Налаштування звуку та стилю підсвічування"],
    },
  },
  {
    id: "pingtab", name: "PingTab", aka: "Пинг в TAB",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "UI"],
    github: "https://github.com/AlexMelanFromRingo/PingTab",
    short: {
      ru: "Простой плагин для Paper, который показывает пинг каждого игрока прямо в меню TAB.",
      en: "A simple Paper plugin that shows each player's ping right in the TAB menu.",
      uk: "Простий плагін для Paper, що показує пінг кожного гравця прямо в меню TAB.",
    },
    body: {
      ru: [
        "Маленькая утилитарная вещь: рядом с ником каждого игрока в списке по TAB появляется его пинг в миллисекундах. Удобно сразу видеть, у кого лагает соединение, не запуская никаких команд.",
        "Плагин периодически обновляет значения пинга и подставляет их в строку списка игроков. Можно настроить формат отображения и цветовую градацию — зелёный для хорошего пинга, красный для плохого.",
        "Один из тех плагинов, что делаются за вечер, но потом стоят на сервере годами и просто работают.",
      ],
      en: [
        "A small utility: next to each player's name in the TAB list, their ping in milliseconds appears. Handy for spotting a laggy connection at a glance, with no commands at all.",
        "The plugin periodically refreshes ping values and inserts them into the player-list line. The display format and a colour gradient are configurable — green for good ping, red for bad.",
        "One of those plugins built in an evening that then sit on a server for years and just work.",
      ],
      uk: [
        "Маленька утилітарна річ: поряд із ніком кожного гравця у списку TAB з'являється його пінг у мілісекундах.",
        "Плагін періодично оновлює значення пінгу й підставляє їх у рядок списку гравців. Можна налаштувати формат і кольорову градацію.",
        "Один із тих плагінів, що робляться за вечір, а потім стоять на сервері роками."],
    },
    features: {
      ru: ["Пинг каждого игрока в меню TAB в реальном времени", "Периодическое автообновление значений", "Настраиваемый формат и цветовая градация", "Никаких команд — работает сразу после установки"],
      en: ["Each player's ping in the TAB menu in real time", "Periodic automatic refresh of values", "Configurable format and colour gradient", "No commands — works right after install"],
      uk: ["Пінг кожного гравця в меню TAB у реальному часі", "Періодичне автооновлення значень", "Налаштовуваний формат і кольорова градація", "Жодних команд — працює одразу після установки"],
    },
  },
  {
    id: "invview", name: "InvView", aka: "Просмотр инвентаря",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Moderation"],
    github: "https://github.com/AlexMelanFromRingo/InvView",
    short: {
      ru: "Плагин для просмотра инвентаря игрока правым кликом в режиме наблюдателя.",
      en: "A plugin to view a player's inventory with a right-click in spectator mode.",
      uk: "Плагін для перегляду інвентарю гравця правим кліком у режимі спостерігача.",
    },
    body: {
      ru: [
        "Инструмент для модераторов. В режиме наблюдателя достаточно кликнуть правой кнопкой по игроку — и открывается его инвентарь только на просмотр. Удобно проверять подозрительных без команд, без телепортаций и лишних движений.",
        "Прав на изменение инвентаря нет — это сознательное решение. Модератор видит содержимое, но случайно ничего не выкинет и не подложит, а значит проверка остаётся честной и не вызывает споров.",
        "Плагин ловит правый клик наблюдателя по сущности-игроку и открывает копию его инвентаря в режиме чтения. Рассчитан на серверы Paper 1.20.x.",
      ],
      en: [
        "A moderator's tool. In spectator mode, right-click a player and their inventory opens read-only. Handy for checking suspicious players with no commands, no teleports and no fuss.",
        "There's no inventory-edit access — a deliberate choice. A moderator sees the contents but can't accidentally drop or plant anything, so the check stays honest and dispute-free.",
        "The plugin catches a spectator's right-click on a player entity and opens a read-only copy of their inventory. Built for Paper 1.20.x servers.",
      ],
      uk: [
        "Інструмент для модераторів. У режимі спостерігача досить клікнути правою кнопкою по гравцю — і відкривається його інвентар лише для перегляду.",
        "Прав на зміну інвентарю немає — це свідоме рішення, щоб перевірка лишалася чесною.",
        "Плагін ловить правий клік спостерігача по сутності-гравцю й відкриває копію інвентарю в режимі читання. Розрахований на сервери Paper 1.20.x.",
      ],
    },
    features: {
      ru: ["Открытие инвентаря правым кликом в режиме наблюдателя", "Режим только для чтения — ничего не изменить", "Без команд и телепортаций", "Для модерации серверов Paper 1.20.x"],
      en: ["Open an inventory with a right-click in spectator mode", "Read-only mode — nothing can be changed", "No commands or teleports", "For moderating Paper 1.20.x servers"],
      uk: ["Відкриття інвентарю правим кліком у режимі спостерігача", "Режим лише для читання", "Без команд і телепортацій", "Для модерації серверів Paper 1.20.x"],
    },
  },
  {
    id: "paperbackpacks", name: "PaperBackpacks", aka: "Рюкзаки",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Items", "Storage"],
    github: "https://github.com/AlexMelanFromRingo/BackpackPaper3",
    short: {
      ru: "Плагин для серверов Paper, добавляющий переносные рюкзаки с дополнительным хранилищем.",
      en: "A Paper-server plugin that adds portable backpacks with extra storage.",
      uk: "Плагін для серверів Paper, що додає переносні рюкзаки з додатковим сховищем.",
    },
    body: {
      ru: [
        "Рюкзаки как предмет: игрок носит с собой дополнительный инвентарь и открывает его в любой момент. На диске проект лежит как BackpackPaper, 2 и 3 — но это не итерации переписывания, просто я тогда ещё не дружил с git и плодил папки вместо веток. BackpackPaper3 — финальная, законченная версия.",
        "Она хранит содержимое рюкзаков надёжно: данные привязаны к предмету и не теряются при перезапусках сервера и переездах между мирами. Рюкзак — это обычный предмет, который можно передать, положить в сундук, потерять при смерти.",
        "Плагин рассчитан на серверы Paper 1.20.x. Внутри — аккуратная сериализация содержимого, чтобы инвентарь рюкзака переживал любые ситуации без потери вещей.",
      ],
      en: [
        "Backpacks as an item: a player carries extra inventory and opens it any time. On disk the project sits as BackpackPaper, 2 and 3 — but those aren't rewrite iterations, I just wasn't friends with git back then and made folders instead of branches. BackpackPaper3 is the final, finished version.",
        "It stores backpack contents reliably: data is bound to the item and survives server restarts and moves between worlds. A backpack is an ordinary item — you can hand it over, put it in a chest, lose it on death.",
        "The plugin targets Paper 1.20.x servers. Inside is careful content serialization so a backpack's inventory survives any situation without losing items.",
      ],
      uk: [
        "Рюкзаки як предмет: гравець носить із собою додатковий інвентар. На диску проєкт лежить як BackpackPaper, 2 і 3 — але це не ітерації переписування, просто я тоді ще не дружив із git. BackpackPaper3 — фінальна версія.",
        "Вона зберігає вміст рюкзаків надійно: дані прив'язані до предмета й не губляться при перезапусках сервера та переїздах між світами.",
        "Плагін розрахований на сервери Paper 1.20.x. Усередині — акуратна серіалізація вмісту.",
      ],
    },
    features: {
      ru: ["Рюкзак как переносной предмет с отдельным инвентарём", "Содержимое привязано к предмету и не теряется", "Переживает перезапуски сервера и смену миров", "Для серверов Paper 1.20.x"],
      en: ["A backpack as a portable item with its own inventory", "Contents bound to the item and never lost", "Survives server restarts and world changes", "For Paper 1.20.x servers"],
      uk: ["Рюкзак як переносний предмет з окремим інвентарем", "Вміст прив'язаний до предмета й не губиться", "Переживає перезапуски сервера та зміну світів", "Для серверів Paper 1.20.x"],
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
      ru: [
        "Pixel Battle — это соревнование, где игроки вручную выкладывают пиксельные арты блоками на общей стене. Выложить большой рисунок руками — это тысячи кликов и часы рутины.",
        "BuilderMod берёт картинку, сопоставляет её цвета с доступными блоками и сам расставляет их по нужным координатам. Ты задаёшь, что хочешь построить, а мод аккуратно воспроизводит изображение блок за блоком.",
        "По сути это автоматизация очень нудной задачи. По духу мод — близкий родственник моего Pixel Battle Bot для конкурса AlexGyver: та же идея перевести картинку в пиксели и расставить их за тебя.",
      ],
      en: [
        "Pixel Battle is a contest where players lay out pixel art block by block on a shared wall. Placing a large picture by hand is thousands of clicks and hours of routine.",
        "BuilderMod takes an image, maps its colours to available blocks and places them at the right coordinates itself. You specify what to build, and the mod faithfully reproduces the image block by block.",
        "It's automation of a very tedious task. In spirit the mod is a close relative of my Pixel Battle Bot for AlexGyver's contest: the same idea of converting an image to pixels and placing them for you.",
      ],
      uk: [
        "Pixel Battle — це змагання, де гравці вручну викладають піксельні арти блоками на спільній стіні. Викласти великий малюнок руками — це тисячі кліків.",
        "BuilderMod бере картинку, зіставляє її кольори з доступними блоками й сам розставляє їх за потрібними координатами.",
        "По суті це автоматизація дуже нудного завдання. За духом мод — близький родич мого Pixel Battle Bot для конкурсу AlexGyver.",
      ],
    },
    features: {
      ru: ["Сопоставление цветов картинки с блоками Minecraft", "Автоматическая расстановка блоков по координатам", "Воспроизведение изображения блок за блоком", "Экономит тысячи ручных кликов в Pixel Battle"],
      en: ["Maps image colours to Minecraft blocks", "Automatic block placement by coordinates", "Reproduces the image block by block", "Saves thousands of manual clicks in Pixel Battle"],
      uk: ["Зіставлення кольорів картинки з блоками Minecraft", "Автоматична розстановка блоків за координатами", "Відтворення зображення блок за блоком", "Економить тисячі ручних кліків у Pixel Battle"],
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
      ru: [
        "Контентный мод: в мир добавляется новое животное — сова. Это полный цикл создания моба, а не просьба к движку «дай готовое»: 3D-модель, текстура, анимации, спавн в подходящих биомах и собственное поведение.",
        "Чтобы добавить в игру даже одно существо, нужно разобраться, как Minecraft работает с сущностями: регистрация моба, его AI-задачи, рендер, спавн-правила. Сова получает свой набор повадок — где появляется, как двигается, как реагирует на игрока.",
        "Проект ценен именно этим опытом — он провёл меня через всю кухню моддинга существ от модели до игровой логики.",
      ],
      en: [
        "A content mod: a new animal joins the world — an owl. It's the full cycle of building a mob rather than asking the engine for something ready-made: 3D model, texture, animations, spawning in suitable biomes and its own behaviour.",
        "Adding even one creature means understanding how Minecraft handles entities: mob registration, its AI tasks, rendering, spawn rules. The owl gets its own set of habits — where it appears, how it moves, how it reacts to the player.",
        "The project is valuable for exactly that experience — it walked me through the whole kitchen of creature modding from model to game logic.",
      ],
      uk: [
        "Контентний мод: у світ додається нова тварина — сова. Це повний цикл створення моба: 3D-модель, текстура, анімації, спавн у відповідних біомах і власна поведінка.",
        "Щоб додати в гру навіть одну істоту, треба розібратися, як Minecraft працює із сутностями: реєстрація моба, його AI-задачі, рендер, правила спавну.",
        "Проєкт цінний саме цим досвідом — він провів мене через усю кухню моддингу істот.",
      ],
    },
    features: {
      ru: ["Новый моб — сова: модель, текстура, анимации", "Спавн в подходящих биомах по своим правилам", "Собственный набор повадок и AI-задач", "Полный цикл моддинга существа от модели до логики"],
      en: ["A new mob — the owl: model, texture, animations", "Spawns in suitable biomes by its own rules", "Its own set of habits and AI tasks", "Full creature-modding cycle from model to logic"],
      uk: ["Новий моб — сова: модель, текстура, анімації", "Спавн у відповідних біомах за своїми правилами", "Власний набір повадок та AI-задач", "Повний цикл моддингу істоти від моделі до логіки"],
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
      ru: [
        "Идея простая и забавная: пишешь в чат Minecraft — отвечает нейросеть. Мод подключает языковую модель LLaMA к игре, так что внутри мира появляется собеседник, которому можно задать вопрос или просто поболтать, не выходя из игры.",
        "Технически мод ловит сообщения чата, отправляет их модели и возвращает ответ обратно в чат. Чтобы модель была доступна, я отдельно сделал сетевую обвязку — проект LLaMA Online.",
        "Сделано в момент, когда локальные языковые модели только начинали быть доступными — было интересно затащить их в привычную игру и посмотреть, что выйдет.",
      ],
      en: [
        "A simple, fun idea: you type in Minecraft chat and a neural network replies. The mod wires the LLaMA language model into the game, so the world gains a companion you can ask a question or just chat with without leaving the game.",
        "Technically the mod catches chat messages, sends them to the model and returns the answer back to chat. To make the model reachable, I built a separate network layer — the LLaMA Online project.",
        "Built when local language models were only starting to be accessible — it was fun to drag them into a familiar game and see what came out.",
      ],
      uk: [
        "Ідея проста й цікава: пишеш у чат Minecraft — відповідає нейромережа. Мод під'єднує мовну модель LLaMA до гри.",
        "Технічно мод ловить повідомлення чату, відправляє їх моделі й повертає відповідь. Щоб модель була доступна, я окремо зробив мережеву обв'язку — проєкт LLaMA Online.",
        "Зроблено в момент, коли локальні мовні моделі тільки починали бути доступними.",
      ],
    },
    features: {
      ru: ["Общение с моделью LLaMA через чат Minecraft", "Перехват сообщений чата и возврат ответа модели", "Работает в паре с сетевой обвязкой LLaMA Online", "Собеседник-ИИ прямо внутри игрового мира"],
      en: ["Chat with the LLaMA model through Minecraft chat", "Catches chat messages and returns the model's reply", "Works together with the LLaMA Online network layer", "An AI companion right inside the game world"],
      uk: ["Спілкування з моделлю LLaMA через чат Minecraft", "Перехоплення повідомлень чату й повернення відповіді", "Працює в парі з мережевою обв'язкою LLaMA Online", "Співрозмовник-ШІ прямо всередині ігрового світу"],
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
      ru: [
        "Чтобы мод LLaMA Forge мог работать, языковая модель должна быть доступна по сети — клиент игры обращается к ней, а не держит модель в себе. Когда я это делал, в используемой Java-библиотеке ещё не было сетевого режима.",
        "Поэтому я написал свой: сервер принимает запросы по сети, прогоняет их через модель и отдаёт ответ обратно. По сути небольшой API-слой, который превращает локальную модель в сетевой сервис.",
        "Позже похожая функция появилась в самой библиотеке — но на момент создания это было собственное решение задачи, которой штатно ещё не было.",
      ],
      en: [
        "For the LLaMA Forge mod to work, the language model has to be reachable over the network — the game client talks to it rather than holding the model inside itself. When I built this, the Java library I used had no network mode yet.",
        "So I wrote my own: a server takes requests over the network, runs them through the model and returns the answer. Essentially a small API layer that turns a local model into a network service.",
        "A similar feature later appeared in the library itself — but at creation time this was my own solution to a problem that had no standard answer yet.",
      ],
      uk: [
        "Щоб мод LLaMA Forge міг працювати, мовна модель має бути доступна через мережу. Коли я це робив, у використовуваній Java-бібліотеці ще не було мережевого режиму.",
        "Тож я написав свій: сервер приймає запити, проганяє їх через модель і віддає відповідь. По суті невеликий API-шар.",
        "Згодом схожа функція з'явилася в самій бібліотеці — але на момент створення це було власне рішення.",
      ],
    },
    features: {
      ru: ["Сервер, отдающий модель LLaMA по сети", "Приём запросов и возврат ответов модели", "Превращение локальной модели в сетевой сервис", "Сделано до появления штатного сетевого режима"],
      en: ["A server exposing the LLaMA model over the network", "Receiving requests and returning model answers", "Turns a local model into a network service", "Built before a standard network mode existed"],
      uk: ["Сервер, що віддає модель LLaMA через мережу", "Приймання запитів і повернення відповідей", "Перетворення локальної моделі на мережевий сервіс", "Зроблено до появи штатного мережевого режиму"],
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
      ru: [
        "Генерация мира в Minecraft — одно из самых тяжёлых мест по нагрузке, и она почти не использует несколько ядер процессора. На многоядерной машине большая часть мощности при этом простаивает.",
        "PFCG — попытка это исправить: разнести генерацию чанков по потокам, чтобы процессор работал на полную. Задача нетривиальная — игровая логика очень не любит параллельность, и наивное распараллеливание ломает мир.",
        "Поэтому проект пока в статусе прототипа: это в первую очередь исследование того, где генерацию можно безопасно распараллелить, а где доступ к общим данным делает это опасным.",
      ],
      en: [
        "World generation in Minecraft is one of its heaviest spots and barely uses multiple CPU cores. On a multi-core machine most of the power sits idle.",
        "PFCG is an attempt to fix that: spread chunk generation across threads so the CPU works at full capacity. It's non-trivial — game logic strongly dislikes parallelism, and naive parallelisation breaks the world.",
        "So the project is still a prototype: it's first of all research into where generation can be safely parallelised and where shared-data access makes it dangerous.",
      ],
      uk: [
        "Генерація світу в Minecraft — одне з найважчих місць за навантаженням, і вона майже не використовує кілька ядер.",
        "PFCG — спроба це виправити: рознести генерацію чанків по потоках. Завдання нетривіальне — ігрова логіка дуже не любить паралельність.",
        "Тому проєкт поки в статусі прототипу: це дослідження того, де генерацію можна безпечно розпаралелити.",
      ],
    },
    features: {
      ru: ["Распределение генерации чанков по ядрам процессора", "Мод для загрузчика Fabric", "Исследование безопасных границ параллелизма", "Цель — задействовать простаивающие ядра"],
      en: ["Spreads chunk generation across CPU cores", "A mod for the Fabric loader", "Research into the safe limits of parallelism", "Goal — use the idle cores"],
      uk: ["Розподіл генерації чанків по ядрах процесора", "Мод для завантажувача Fabric", "Дослідження безпечних меж паралелізму", "Мета — задіяти простоюючі ядра"],
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
      ru: [
        "Соседняя с PFCG тема. Когда игрок уходит в неизведанные земли, сервер генерирует новые чанки прямо в основном игровом потоке и часто заметно подлагивает — все остальные игроки чувствуют фриз.",
        "Здесь я пробовал вынести генерацию в фон, чтобы основной поток её не ждал. В папке несколько подходов — ChunkGeneratorPlugin и DistributedChunksPaper — каждый со своими компромиссами между скоростью и стабильностью.",
        "Статус — прототип: асинхронная генерация в Minecraft работает, но требует очень аккуратной синхронизации, и это исследование её границ.",
      ],
      en: [
        "A topic adjacent to PFCG. When a player heads into uncharted land, the server generates new chunks right in the main game thread and often visibly lags — every other player feels the freeze.",
        "Here I tried moving generation into the background so the main thread doesn't wait on it. The folder has several approaches — ChunkGeneratorPlugin and DistributedChunksPaper — each with its own trade-off between speed and stability.",
        "Status — prototype: async generation in Minecraft works but needs very careful synchronization, and this is research into its limits.",
      ],
      uk: [
        "Сусідня з PFCG тема. Коли гравець іде в незвідані землі, сервер генерує нові чанки прямо в основному потоці й часто помітно підлагує.",
        "Тут я пробував винести генерацію у фон. Кілька підходів — ChunkGeneratorPlugin і DistributedChunksPaper — кожен зі своїм компромісом.",
        "Статус — прототип: асинхронна генерація працює, але потребує дуже акуратної синхронізації.",
      ],
    },
    features: {
      ru: ["Вынос генерации чанков из основного потока сервера", "Несколько подходов: ChunkGeneratorPlugin, DistributedChunksPaper", "Цель — убрать фризы при заходе в новые земли", "Исследование безопасной асинхронности"],
      en: ["Moves chunk generation off the server's main thread", "Several approaches: ChunkGeneratorPlugin, DistributedChunksPaper", "Goal — remove freezes when entering new terrain", "Research into safe asynchrony"],
      uk: ["Винесення генерації чанків з основного потоку сервера", "Кілька підходів: ChunkGeneratorPlugin, DistributedChunksPaper", "Мета — прибрати фризи при заході в нові землі", "Дослідження безпечної асинхронності"],
    },
  },
  {
    id: "afkmod", name: "AFK Mod", aka: "Автопропуск ночей",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Mod", "QoL", "MC 1.20.1"],
    short: {
      ru: "Мод, который автоматически пропускает ночь через команду /lay на серверах с этой механикой.",
      en: "A mod that auto-skips the night via the /lay command on servers that support it.",
      uk: "Мод, що автоматично пропускає ніч через команду /lay на серверах із цією механікою.",
    },
    body: {
      ru: [
        "Маленький мод комфорта. На некоторых серверах ночь пропускается не обычной кроватью, а командой /lay — игрок «ложится» на месте. Помнить про это и вводить команду каждую ночь — мелкая, но надоедливая рутина.",
        "AFK Mod делает это сам: отслеживает наступление ночи и автоматически выполняет команду, чтобы не отвлекаться от своих дел в игре. Существует в двух вариантах — общий и собранный под версию 1.20.1.",
        "Ничего сложного внутри, но это удобная мелочь для тех, кто постоянно играет на серверах с такой механикой.",
      ],
      en: [
        "A small comfort mod. On some servers the night is skipped not with a regular bed but with the /lay command — the player 'lies down' in place. Remembering it and typing the command every night is a small but nagging chore.",
        "AFK Mod does it for you: it tracks nightfall and runs the command automatically, so you're not distracted from your in-game tasks. It exists in two builds — a general one and one built for version 1.20.1.",
        "Nothing complex inside, but a handy convenience for those who constantly play servers with this mechanic.",
      ],
      uk: [
        "Маленький мод комфорту. На деяких серверах ніч пропускається не звичайним ліжком, а командою /lay. Пам'ятати про це щоночі — дрібна, але набридлива рутина.",
        "AFK Mod робить це сам: відстежує настання ночі й автоматично виконує команду. Існує у двох варіантах — загальний і зібраний під версію 1.20.1.",
        "Нічого складного всередині, але зручна дрібниця для тих, хто постійно грає на таких серверах.",
      ],
    },
    features: {
      ru: ["Автоматический пропуск ночи командой /lay", "Отслеживание наступления ночи", "Две сборки: общая и под версию 1.20.1", "Не отвлекает игрока от дел в игре"],
      en: ["Auto-skips the night with the /lay command", "Tracks nightfall", "Two builds: general and for version 1.20.1", "Doesn't distract the player from in-game tasks"],
      uk: ["Автоматичний пропуск ночі командою /lay", "Відстеження настання ночі", "Дві збірки: загальна і під версію 1.20.1", "Не відволікає гравця від справ у грі"],
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
      ru: [
        "Когда ты отошёл от компьютера, а в чате тебе пишут, ARM может ответить за тебя по правилам: на определённые слова, личные сообщения или обращения по нику он отправляет заранее заданный текст.",
        "Правила настраиваются: что считать триггером и каким текстом отвечать. Полезно для AFK-режима или чтобы вежливо отвечать на типовые вопросы, пока ты занят чем-то другим в игре или вне её.",
        "Простой мод автоматизации, который убирает необходимость постоянно следить за чатом.",
      ],
      en: [
        "When you've stepped away from the computer and someone writes to you in chat, ARM can answer for you by rules: on certain words, private messages or name mentions it sends preset text.",
        "Rules are configurable: what counts as a trigger and what text to reply with. Useful for AFK time or to politely answer routine questions while you're busy with something else in or out of the game.",
        "A simple automation mod that removes the need to constantly watch chat.",
      ],
      uk: [
        "Коли ти відійшов від комп'ютера, а в чаті тобі пишуть, ARM може відповісти за тебе за правилами: на певні слова, особисті повідомлення чи звертання за ніком.",
        "Правила налаштовуються: що вважати тригером і яким текстом відповідати. Корисно для AFK-режиму.",
        "Простий мод автоматизації, що прибирає потребу постійно стежити за чатом.",
      ],
    },
    features: {
      ru: ["Автоответ на сообщения чата по правилам", "Триггеры: слова, личные сообщения, упоминания ника", "Настраиваемые тексты ответов", "Удобен в AFK-режиме"],
      en: ["Auto-reply to chat messages by rules", "Triggers: words, private messages, name mentions", "Configurable reply texts", "Handy in AFK mode"],
      uk: ["Автовідповідь на повідомлення чату за правилами", "Тригери: слова, особисті повідомлення, згадки ніка", "Налаштовувані тексти відповідей", "Зручний у AFK-режимі"],
    },
  },
  {
    id: "dimensioncolor", name: "Dimension Color", aka: "Цвет ника по измерению",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "UI"],
    github: "https://github.com/AlexMelanFromRingo/DimensionColorPlugin",
    short: {
      ru: "Плагин для Paper, который окрашивает ник игрока в зависимости от измерения, где он находится.",
      en: "A Paper plugin that colours a player's name based on the dimension they're in.",
      uk: "Плагін для Paper, що забарвлює нік гравця залежно від виміру, де він перебуває.",
    },
    body: {
      ru: [
        "Простая, но приятная визуальная фишка. Игрок в Обычном мире получает один цвет ника, в Аду — другой, в Энде — третий. Сразу видно по чату и по списку TAB, кто где находится.",
        "Плагин отслеживает переходы игроков между измерениями и обновляет цвет отображаемого имени. Цвета для каждого измерения можно настроить под оформление конкретного сервера.",
        "Удобно на серверах, где важно с одного взгляда понимать, кто ушёл в Незер или Энд — например, при совместных вылазках.",
      ],
      en: [
        "A simple but pleasant visual touch. A player in the Overworld gets one name colour, in the Nether another, in the End a third. The chat and the TAB list instantly show who's where.",
        "The plugin tracks players' transitions between dimensions and updates the colour of the displayed name. The colour for each dimension can be configured to match a particular server's styling.",
        "Handy on servers where it matters to tell at a glance who has gone to the Nether or the End — during joint expeditions, for example.",
      ],
      uk: [
        "Проста, але приємна візуальна фішка. Гравець у Звичайному світі отримує один колір ніка, у Пеклі — інший, в Енді — третій.",
        "Плагін відстежує переходи гравців між вимірами й оновлює колір імені. Кольори можна налаштувати під оформлення сервера.",
        "Зручно на серверах, де важливо з одного погляду розуміти, хто пішов у Незер чи Енд.",
      ],
    },
    features: {
      ru: ["Цвет ника по текущему измерению игрока", "Отслеживание переходов между мирами", "Настраиваемые цвета для каждого измерения", "Видно в чате и в списке TAB"],
      en: ["Name colour by the player's current dimension", "Tracks transitions between worlds", "Configurable colour per dimension", "Visible in chat and the TAB list"],
      uk: ["Колір ніка за поточним виміром гравця", "Відстеження переходів між світами", "Налаштовувані кольори для кожного виміру", "Видно в чаті та у списку TAB"],
    },
  },
  {
    id: "saferespawn", name: "Safe Respawn", aka: "Безопасное возрождение",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "QoL"],
    short: {
      ru: "Плагин, который возрождает игрока в безопасной точке в заданном радиусе от спавна.",
      en: "A plugin that respawns a player at a safe spot within a set radius of spawn.",
      uk: "Плагін, що відроджує гравця в безпечній точці в заданому радіусі від спавну.",
    },
    body: {
      ru: [
        "Стандартный спавн в Minecraft умеет высадить игрока в неудобное или прямо опасное место — в воду, на край обрыва, в темноту с мобами. Особенно обидно умереть сразу после возрождения.",
        "Этот плагин подбирает безопасную точку в заданном радиусе вокруг спавна: проверяет, что под ногами твёрдый блок, нет лавы, нет падения, есть место встать. Игрок появляется там, где сразу не погибнет.",
        "Радиус поиска настраивается. Маленькое улучшение, которое убирает один из самых неприятных видов смертей.",
      ],
      en: [
        "Minecraft's default spawn can drop a player into an awkward or downright dangerous spot — into water, onto a cliff edge, into darkness with mobs. Dying right after respawn is especially annoying.",
        "This plugin picks a safe point within a configurable radius around spawn: it checks there's solid ground underfoot, no lava, no fall, room to stand. The player appears where they won't immediately die.",
        "The search radius is configurable. A small improvement that removes one of the most frustrating kinds of death.",
      ],
      uk: [
        "Стандартний спавн у Minecraft може висадити гравця в незручне або небезпечне місце — у воду, на край урвища, у темряву з мобами.",
        "Цей плагін підбирає безпечну точку в заданому радіусі навколо спавну: перевіряє твердий блок під ногами, відсутність лави й падіння.",
        "Радіус пошуку налаштовується. Маленьке покращення, що прибирає прикрі смерті.",
      ],
    },
    features: {
      ru: ["Поиск безопасной точки возрождения у спавна", "Проверка твёрдого блока, отсутствия лавы и падения", "Настраиваемый радиус поиска", "Убирает смерти сразу после респавна"],
      en: ["Finds a safe respawn point near spawn", "Checks for solid ground, no lava, no fall", "Configurable search radius", "Removes deaths right after respawn"],
      uk: ["Пошук безпечної точки відродження біля спавну", "Перевірка твердого блоку, відсутності лави й падіння", "Налаштовуваний радіус пошуку", "Прибирає смерті одразу після респавну"],
    },
  },
  {
    id: "multiworld", name: "Multi World Plugin", aka: "Несколько миров",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Миры"],
    short: {
      ru: "Базовый плагин для управления несколькими игровыми мирами и перемещения между ними.",
      en: "A basic plugin for managing several game worlds and moving between them.",
      uk: "Базовий плагін для керування кількома ігровими світами та переміщення між ними.",
    },
    body: {
      ru: [
        "Из коробки сервер живёт в одном наборе миров — обычный, Незер, Энд. Этот плагин даёт простую основу для нескольких независимых миров: их можно создавать, загружать и телепортировать между ними игроков командами.",
        "Это фундамент, а не готовый продукт: он закрывает базовые операции с мирами, на которые потом можно навешивать более сложные идеи — отдельные миры под разные режимы игры, ивент-локации, приватные территории.",
        "Из этой идеи позже выросло продолжение — ThroughWorlds, где упор сделан уже на удобные переходы между мирами.",
      ],
      en: [
        "Out of the box a server lives in one set of worlds — Overworld, Nether, End. This plugin gives a simple foundation for several independent worlds: you can create, load and teleport players between them with commands.",
        "It's a foundation rather than a finished product: it covers the basic world operations you can later hang more complex ideas on — separate worlds per game mode, event locations, private territories.",
        "A continuation later grew from this idea — ThroughWorlds, where the focus shifted to convenient travel between worlds.",
      ],
      uk: [
        "З коробки сервер живе в одному наборі світів. Цей плагін дає просту основу для кількох незалежних світів: їх можна створювати, завантажувати й телепортувати гравців.",
        "Це фундамент, а не готовий продукт: він закриває базові операції зі світами.",
        "Із цієї ідеї пізніше виросло продовження — ThroughWorlds.",
      ],
    },
    features: {
      ru: ["Создание и загрузка независимых миров", "Телепортация игроков между мирами командами", "Базовая основа для серверов со сложной структурой миров", "Для серверов Paper 1.20.x"],
      en: ["Creating and loading independent worlds", "Teleporting players between worlds via commands", "A base for servers with a complex world structure", "For Paper 1.20.x servers"],
      uk: ["Створення та завантаження незалежних світів", "Телепортація гравців між світами командами", "Базова основа для серверів зі складною структурою світів", "Для серверів Paper 1.20.x"],
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
      ru: [
        "Обновление 1.9 сильно изменило бой в Minecraft, добавив задержку между ударами — теперь после удара нужно ждать, пока шкала атаки восстановится. Многие PvP-игроки так и не приняли это и хотят старую, динамичную механику версии 1.8.",
        "Better PvP убирает кулдаун атаки, возвращая бой, где скорость кликов решает всё. Плагин аккуратно вмешивается только в боевую часть, не трогая остальную механику игры.",
        "Тема для механики спорная, поэтому задача была — вернуть старое ощущение боя, ничего при этом не сломав.",
      ],
      en: [
        "The 1.9 update heavily changed Minecraft combat by adding an attack cooldown — after a hit you now wait for the attack bar to recharge. Many PvP players never accepted it and want the old, fast-paced 1.8 mechanic.",
        "Better PvP removes the attack cooldown, restoring combat where click speed decides everything. The plugin carefully touches only the combat part without affecting the rest of the game's mechanics.",
        "It's a touchy area for mechanics, so the task was to bring back the old combat feel without breaking anything.",
      ],
      uk: [
        "Оновлення 1.9 сильно змінило бій у Minecraft, додавши затримку між ударами. Багато PvP-гравців так і не прийняли це.",
        "Better PvP прибирає кулдаун атаки, повертаючи бій, де швидкість кліків вирішує все. Плагін акуратно втручається лише в бойову частину.",
        "Тема для механіки спірна, тож завдання було — повернути старе відчуття бою, нічого не зламавши.",
      ],
    },
    features: {
      ru: ["Убирает задержку атаки, добавленную в 1.9", "Возврат динамичного боя версии 1.8", "Вмешательство только в боевую механику", "Для серверов Paper"],
      en: ["Removes the attack cooldown added in 1.9", "Restores the fast-paced 1.8 combat", "Touches only the combat mechanic", "For Paper servers"],
      uk: ["Прибирає затримку атаки, додану в 1.9", "Повернення динамічного бою версії 1.8", "Втручання лише в бойову механіку", "Для серверів Paper"],
    },
  },
  {
    id: "shulkerbox", name: "ShulkerBox Plugin", aka: "Шалкеры в руке",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Items", "QoL"],
    github: "https://github.com/AlexMelanFromRingo/ShulkerBoxPlugin",
    short: {
      ru: "Плагин, позволяющий открывать шалкеровый ящик прямо из руки, не ставя его в мир.",
      en: "A plugin that lets you open a shulker box straight from your hand without placing it.",
      uk: "Плагін, що дозволяє відкривати шалкерову скриню прямо з руки, не ставлячи її у світ.",
    },
    body: {
      ru: [
        "Шалкеровые ящики — главное переносное хранилище в игре. Но штатно, чтобы залезть внутрь, ящик нужно поставить блоком, открыть, забрать вещи и сломать обратно — четыре действия каждый раз.",
        "Этот плагин даёт открыть ящик одним действием прямо в руке: щёлкаешь — открывается интерфейс, содержимое доступно, ставить ничего не нужно. Содержимое корректно сохраняется обратно в предмет.",
        "Удобная мелочь, которая экономит кучу времени тем, кто постоянно сортирует ресурсы и таскает с собой по несколько шалкеров.",
      ],
      en: [
        "Shulker boxes are the main portable storage in the game. But by default, to get inside one you have to place it as a block, open it, take items and break it back — four actions every time.",
        "This plugin lets you open the box in one action right in your hand: you click, the interface opens, the contents are available, nothing needs placing. The contents save correctly back into the item.",
        "A handy little thing that saves a lot of time for anyone constantly sorting resources and carrying several shulkers around.",
      ],
      uk: [
        "Шалкерові скрині — головне переносне сховище у грі. Але штатно, щоб залізти всередину, скриню треба поставити блоком і потім зламати.",
        "Цей плагін дає відкрити скриню одним кліком прямо в руці. Вміст коректно зберігається назад у предмет.",
        "Зручна дрібниця, що економить купу часу тим, хто постійно сортує ресурси.",
      ],
    },
    features: {
      ru: ["Открытие шалкера прямо из руки одним кликом", "Не нужно ставить и ломать ящик", "Корректное сохранение содержимого в предмет", "Для серверов Paper 1.20.x"],
      en: ["Opens a shulker straight from hand with one click", "No need to place and break the box", "Correctly saves contents back into the item", "For Paper 1.20.x servers"],
      uk: ["Відкриття шалкера прямо з руки одним кліком", "Не потрібно ставити й ламати скриню", "Коректне збереження вмісту в предмет", "Для серверів Paper 1.20.x"],
    },
  },
  {
    id: "vaultplugin", name: "VaultPlugin", aka: "Сейфы",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Storage"],
    github: "https://github.com/AlexMelanFromRingo/VaultPlugin",
    short: {
      ru: "Простой плагин для создания личных сейфов — защищённых хранилищ предметов на сервере.",
      en: "A simple plugin for creating personal vaults — protected item storage on a server.",
      uk: "Простий плагін для створення особистих сейфів — захищених сховищ предметів на сервері.",
    },
    body: {
      ru: [
        "Плагин даёт каждому игроку личное защищённое хранилище — сейф, доступ к которому есть только у владельца. Удобно держать там ценные вещи, которые точно не должны попасть в чужие руки.",
        "В отличие от обычного сундука, сейф привязан к игроку, а не к месту: его содержимое не украдут, даже если найдут и сломают блок. Управление сделано намеренно простым — одна понятная команда и предсказуемое поведение.",
        "Базовый, но нужный плагин для серверов, где важна сохранность вещей игроков.",
      ],
      en: [
        "The plugin gives each player a personal protected storage — a vault only its owner can access. Handy for keeping valuables that definitely shouldn't fall into the wrong hands.",
        "Unlike a regular chest, a vault is bound to the player, not a place: its contents won't be stolen even if someone finds and breaks the block. The controls are deliberately simple — one clear command and predictable behaviour.",
        "A basic but necessary plugin for servers where the safety of players' items matters.",
      ],
      uk: [
        "Плагін дає кожному гравцю особисте захищене сховище — сейф, доступ до якого має лише власник.",
        "На відміну від звичайної скрині, сейф прив'язаний до гравця, а не до місця: його вміст не вкрадуть. Керування навмисно просте — одна команда.",
        "Базовий, але потрібний плагін для серверів, де важлива збереженість речей гравців.",
      ],
    },
    features: {
      ru: ["Личный сейф с доступом только у владельца", "Хранилище привязано к игроку, а не к месту", "Содержимое не украсть, сломав блок", "Простое управление одной командой"],
      en: ["A personal vault accessible only to its owner", "Storage bound to the player, not a location", "Contents can't be stolen by breaking a block", "Simple control with one command"],
      uk: ["Особистий сейф з доступом лише у власника", "Сховище прив'язане до гравця, а не до місця", "Вміст не вкрасти, зламавши блок", "Просте керування однією командою"],
    },
  },
  {
    id: "herobrine", name: "Herobrine Plugin", aka: "Легенда о Херобрине",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "Атмосфера", "Контент"],
    short: {
      ru: "Плагин, оживляющий старую легенду о Херобрине — редкие пугающие события на сервере.",
      en: "A plugin that brings the old Herobrine legend to life — rare unsettling events on a server.",
      uk: "Плагін, що оживляє стару легенду про Херобрина — рідкісні моторошні події на сервері.",
    },
    body: {
      ru: [
        "Херобрин — главная страшилка комьюнити Minecraft, существо-призрак, которого никогда не было в самой игре, но в которого все верили. Плагин делает легенду живой.",
        "Он подбрасывает редкие странные события: следы там, где их не оставляли, тихо исчезающие или появляющиеся постройки, мелькания на грани видимости. Ключевая идея — события должны быть редкими и неочевидными, чтобы игрок не был уверен, показалось ему или нет.",
        "Это развлекательный проект про атмосферу, а не про геймплей: вся ценность — в правильно отмеренной дозе жути.",
      ],
      en: [
        "Herobrine is the Minecraft community's main scary story, a ghost-creature that was never actually in the game but everyone believed in. The plugin makes the legend feel real.",
        "It drops in rare strange events: traces where none were left, builds quietly vanishing or appearing, glimpses at the edge of sight. The key idea is that events must be rare and subtle, so a player isn't sure whether they imagined it.",
        "It's an entertainment project about atmosphere rather than gameplay: all the value is in a correctly measured dose of eeriness.",
      ],
      uk: [
        "Херобрин — головна страшилка спільноти Minecraft, істота-привид, якої ніколи не було в самій грі.",
        "Плагін підкидає рідкісні дивні події: сліди, тихо зникаючі або з'являючі будівлі, мерехтіння на межі видимості. Ключова ідея — події мають бути рідкісними й неочевидними.",
        "Це розважальний проєкт про атмосферу, а не про геймплей.",
      ],
    },
    features: {
      ru: ["Редкие пугающие события в духе легенды о Херобрине", "Следы, исчезающие постройки, мелькания", "Расчёт на неочевидность — «показалось или нет»", "Атмосферный развлекательный плагин"],
      en: ["Rare unsettling events in the spirit of the Herobrine legend", "Traces, vanishing builds, glimpses", "Designed for subtlety — 'did I imagine it?'", "An atmospheric entertainment plugin"],
      uk: ["Рідкісні моторошні події в дусі легенди про Херобрина", "Сліди, зникаючі будівлі, мерехтіння", "Розрахунок на неочевидність", "Атмосферний розважальний плагін"],
    },
  },
  {
    id: "deathdb", name: "DeathDB", aka: "Журнал смертей",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "База данных", "Логи"],
    short: {
      ru: "Плагин, который записывает все смерти игроков на сервере в базу данных с деталями.",
      en: "A plugin that records every player death on a server into a database with details.",
      uk: "Плагін, що записує всі смерті гравців на сервері в базу даних із деталями.",
    },
    body: {
      ru: [
        "Каждая смерть игрока попадает в базу данных: кто погиб, где (координаты и мир), когда и от чего — мобы, падение, лава, другой игрок. Получается полная история смертей на сервере.",
        "Это и статистика, и инструмент для администрации: по логу можно посмотреть, где игроков убивают чаще всего, найти подозрительные PvP-убийства, восстановить картину происшествия.",
        "Заодно это был мой практический заход в работу с базами данных из плагина — как хранить события, как делать выборки, как не уронить производительность сервера логированием.",
      ],
      en: [
        "Every player death goes into a database: who died, where (coordinates and world), when and how — mobs, fall, lava, another player. The result is a full death history for the server.",
        "It's both statistics and an admin tool: from the log you can see where players are killed most, spot suspicious PvP kills, reconstruct what happened.",
        "It was also my practical entry into database work from a plugin — how to store events, run queries, and not tank server performance with logging.",
      ],
      uk: [
        "Кожна смерть гравця потрапляє в базу даних: хто загинув, де, коли і від чого. Виходить повна історія смертей на сервері.",
        "Це і статистика, і інструмент для адміністрації: за логом можна знайти підозрілі PvP-вбивства.",
        "Заразом це був мій практичний захід у роботу з базами даних із плагіна.",
      ],
    },
    features: {
      ru: ["Запись каждой смерти: кто, где, когда, причина", "Хранение истории в базе данных", "Инструмент анализа для администрации сервера", "Аккуратное логирование без потери производительности"],
      en: ["Records every death: who, where, when, cause", "Stores history in a database", "An analysis tool for server admins", "Careful logging without performance loss"],
      uk: ["Запис кожної смерті: хто, де, коли, причина", "Зберігання історії в базі даних", "Інструмент аналізу для адміністрації сервера", "Акуратне логування без втрати продуктивності"],
    },
  },
  {
    id: "blockdirectip", name: "Block Direct IP", aka: "Защита от обхода прокси",
    category: "minecraft", status: "done", year: 2024,
    langs: ["Java"], tags: ["Paper", "Velocity", "Security", "Сеть"],
    short: {
      ru: "Плагин, блокирующий прямые подключения к игровому серверу в обход прокси Velocity.",
      en: "A plugin that blocks direct connections to the game server that bypass the Velocity proxy.",
      uk: "Плагін, що блокує прямі підключення до ігрового сервера в обхід проксі Velocity.",
    },
    body: {
      ru: [
        "Когда игровой сервер стоит за прокси Velocity, игроки должны заходить только через прокси — он маршрутизирует их, проверяет, защищает. Но если кто-то узнал прямой IP бэкенд-сервера, он может подключиться напрямую и обойти всю эту защиту.",
        "Плагин закрывает дыру: он проверяет, что соединение пришло через доверенный прокси, и отклоняет всё, что пришло напрямую. По сути это валидатор источника подключения на стороне игрового сервера.",
        "Маленький, но важный кирпичик безопасности для любой серверной сети на Velocity.",
      ],
      en: [
        "When a game server sits behind a Velocity proxy, players should only connect through the proxy — it routes them, checks them, protects them. But if someone learns the backend server's direct IP, they can connect straight to it and bypass all of that.",
        "The plugin closes the hole: it verifies that a connection came through the trusted proxy and rejects anything that came directly. Essentially a connection-source validator on the game server side.",
        "A small but important security building block for any server network on Velocity.",
      ],
      uk: [
        "Коли ігровий сервер стоїть за проксі Velocity, гравці мають заходити лише через проксі. Але якщо хтось дізнався прямий IP бекенда, він може підключитися напряму.",
        "Плагін закриває дірку: він перевіряє, що з'єднання прийшло через довірений проксі, і відхиляє прямі.",
        "Маленький, але важливий цеглинка безпеки для будь-якої серверної мережі на Velocity.",
      ],
    },
    features: {
      ru: ["Проверка, что соединение пришло через прокси", "Отклонение прямых подключений в обход Velocity", "Защита от обхода маршрутизации и проверок прокси", "Валидатор источника на стороне игрового сервера"],
      en: ["Verifies a connection came through the proxy", "Rejects direct connections bypassing Velocity", "Protects against bypassing proxy routing and checks", "A source validator on the game-server side"],
      uk: ["Перевірка, що з'єднання прийшло через проксі", "Відхилення прямих підключень в обхід Velocity", "Захист від обходу маршрутизації проксі", "Валідатор джерела на стороні ігрового сервера"],
    },
  },
  {
    id: "scoreboardmgr", name: "Main Scoreboard Manager", aka: "Боковая панель",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "UI"],
    short: {
      ru: "Плагин для управления боковым скорбордом сервера — информационной панелью у края экрана.",
      en: "A plugin for managing the server's side scoreboard — the info panel at the screen edge.",
      uk: "Плагін для керування бічним скорбордом сервера — інформаційною панеллю біля краю екрана.",
    },
    body: {
      ru: [
        "Боковая панель у правого края экрана — стандартное место для информации сервера: онлайн, баланс, статистика, время, название проекта. Но штатный API скорборда в Minecraft неудобный и капризный.",
        "Этот плагин даёт удобный способ управлять панелью: задавать строки, обновлять их динамически, не сталкиваясь с мерцанием и ограничениями длины. По сути обёртка, которая превращает неприятный API в нормальный инструмент.",
        "Базовый, но нужный кирпичик для любого сервера, который хочет красиво показывать игроку важные данные.",
      ],
      en: [
        "The side panel at the right edge of the screen is the standard place for server info: online count, balance, stats, time, project name. But Minecraft's native scoreboard API is awkward and finicky.",
        "This plugin gives a convenient way to manage the panel: set lines, update them dynamically, without running into flicker and length limits. Essentially a wrapper that turns an unpleasant API into a usable tool.",
        "A basic but necessary building block for any server that wants to show players key data neatly.",
      ],
      uk: [
        "Бічна панель біля правого краю екрана — стандартне місце для інформації сервера. Але штатний API скорборду в Minecraft незручний.",
        "Цей плагін дає зручний спосіб керувати панеллю: задавати рядки, оновлювати їх динамічно, без мерехтіння й обмежень довжини.",
        "Базовий, але потрібний цеглинка для будь-якого сервера.",
      ],
    },
    features: {
      ru: ["Удобное управление боковым скорбордом", "Динамическое обновление строк без мерцания", "Обёртка над капризным API Minecraft", "Для серверов Paper 1.20.x"],
      en: ["Convenient management of the side scoreboard", "Dynamic line updates without flicker", "A wrapper over Minecraft's finicky API", "For Paper 1.20.x servers"],
      uk: ["Зручне керування бічним скорбордом", "Динамічне оновлення рядків без мерехтіння", "Обгортка над вередливим API Minecraft", "Для серверів Paper 1.20.x"],
    },
  },
  {
    id: "ninelives", name: "Nine Lives Plugin", aka: "Система жизней",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Геймплей"],
    short: {
      ru: "Плагин, добавляющий механику ограниченного числа жизней для хардкорных режимов.",
      en: "A plugin that adds a limited-lives mechanic for hardcore game modes.",
      uk: "Плагін, що додає механіку обмеженої кількості життів для хардкорних режимів.",
    },
    body: {
      ru: [
        "У каждого игрока есть запас жизней — например, девять, — и каждая смерть его уменьшает. Это превращает обычное возрождение в ресурс, который заканчивается, и заставляет играть осторожнее.",
        "Когда жизни кончились, наступают последствия по правилам сервера: временный бан, перевод в режим наблюдателя, потеря доступа до конца сезона. Конкретное поведение настраивается.",
        "Механика для напряжённых сезонных серверов и челленджей, где смерть должна что-то значить, а не быть бесплатной.",
      ],
      en: [
        "Each player has a pool of lives — nine, for example — and every death reduces it. This turns ordinary respawn into a resource that runs out and makes people play more carefully.",
        "When lives run out, consequences kick in by server rules: a temporary ban, a switch to spectator mode, loss of access until the season ends. The exact behaviour is configurable.",
        "A mechanic for tense seasonal servers and challenges where death should mean something rather than be free.",
      ],
      uk: [
        "У кожного гравця є запас життів — наприклад, дев'ять — і кожна смерть його зменшує.",
        "Коли життя скінчилися, настають наслідки за правилами сервера: тимчасовий бан, режим спостерігача. Поведінка налаштовується.",
        "Механіка для напружених сезонних серверів, де смерть має щось значити.",
      ],
    },
    features: {
      ru: ["Запас жизней, уменьшающийся с каждой смертью", "Настраиваемые последствия при исчерпании жизней", "Бан, режим наблюдателя или другая реакция", "Для хардкорных и сезонных серверов"],
      en: ["A pool of lives shrinking with each death", "Configurable consequences when lives run out", "Ban, spectator mode or another reaction", "For hardcore and seasonal servers"],
      uk: ["Запас життів, що зменшується з кожною смертю", "Налаштовувані наслідки при вичерпанні життів", "Бан, режим спостерігача або інша реакція", "Для хардкорних і сезонних серверів"],
    },
  },
  {
    id: "roomchecker", name: "Room Checker Plugin", aka: "Проверка помещений",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Геймплей", "Алгоритмы"],
    short: {
      ru: "Плагин, который определяет, находится ли игрок в закрытом помещении, и реагирует на это.",
      en: "A plugin that detects whether a player is inside an enclosed room and reacts to it.",
      uk: "Плагін, що визначає, чи перебуває гравець у закритому приміщенні, і реагує на це.",
    },
    body: {
      ru: [
        "Плагин определяет, замкнут ли игрок в помещении — есть ли вокруг него стены, крыша и пол, или он под открытым небом. Звучит просто, но это настоящая алгоритмическая задача: проверка замкнутости пространства в воксельном мире.",
        "Внутри — обход блоков вокруг игрока (заливка по соседям), который проверяет, упирается ли пространство в твёрдые стены или утекает наружу. На основе результата можно строить механики: безопасные зоны, бонусы за обустроенный дом, защиту от мобов в помещении.",
        "Мне этот проект интересен именно алгоритмом — это маленькая, но честная задача на работу с трёхмерным пространством.",
      ],
      en: [
        "The plugin detects whether a player is enclosed in a room — whether there are walls, a roof and a floor around them, or they're under open sky. It sounds simple, but it's a real algorithmic task: checking the enclosure of space in a voxel world.",
        "Inside is a flood-fill walk of the blocks around the player, checking whether the space hits solid walls or leaks outside. On the result you can build mechanics: safe zones, bonuses for a built-up home, indoor mob protection.",
        "This project interests me precisely for the algorithm — a small but honest task in working with 3D space.",
      ],
      uk: [
        "Плагін визначає, чи замкнений гравець у приміщенні — чи є навколо нього стіни, дах і підлога. Це справжня алгоритмічна задача: перевірка замкненості простору у воксельному світі.",
        "Усередині — обхід блоків навколо гравця (заливка по сусідах). На основі результату можна будувати механіки: безпечні зони, бонуси за дім.",
        "Цей проєкт цікавий саме алгоритмом.",
      ],
    },
    features: {
      ru: ["Определение, замкнут ли игрок в помещении", "Алгоритм заливки по соседним блокам", "Основа для механик безопасных зон и бонусов", "Работа с трёхмерным воксельным пространством"],
      en: ["Detects whether a player is enclosed in a room", "A flood-fill algorithm over neighbouring blocks", "A base for safe-zone and bonus mechanics", "Works with 3D voxel space"],
      uk: ["Визначення, чи замкнений гравець у приміщенні", "Алгоритм заливки по сусідніх блоках", "Основа для механік безпечних зон і бонусів", "Робота з тривимірним воксельним простором"],
    },
  },
  {
    id: "throughworlds", name: "ThroughWorlds", aka: "Переходы между мирами",
    category: "minecraft", status: "done", year: 2023,
    langs: ["Java"], tags: ["Paper", "MC 1.20.x", "Миры"],
    short: {
      ru: "Плагин для удобных переходов и взаимодействия между несколькими измерениями.",
      en: "A plugin for convenient travel and interaction between several dimensions.",
      uk: "Плагін для зручних переходів та взаємодії між кількома вимірами.",
    },
    body: {
      ru: [
        "Развитие идеи Multi World Plugin. Если первый давал базовую основу для нескольких миров, то ThroughWorlds сосредоточен на удобных переходах между ними: порталы, команды телепортации, сохранение состояния игрока при переезде.",
        "Задача — чтобы перемещение между мирами было бесшовным: игрок не теряет инвентарь, эффекты и позицию некорректно, переход ощущается как часть игры, а не как костыль.",
        "Часть набора плагинов, которые вместе позволяют строить серверы со сложной структурой миров — отдельные локации под режимы, ивенты, лобби.",
      ],
      en: [
        "An evolution of the Multi World Plugin idea. Where the first gave a basic foundation for several worlds, ThroughWorlds focuses on convenient travel between them: portals, teleport commands, preserving player state across a move.",
        "The goal is for movement between worlds to be seamless: the player doesn't lose inventory, effects or position incorrectly, and the transition feels like part of the game rather than a hack.",
        "Part of a plugin set that together lets you build servers with a complex world structure — separate locations for modes, events, lobbies.",
      ],
      uk: [
        "Розвиток ідеї Multi World Plugin. ThroughWorlds зосереджений на зручних переходах між світами: портали, команди телепортації, збереження стану гравця.",
        "Завдання — щоб переміщення між світами було безшовним: гравець не втрачає інвентар, ефекти й позицію.",
        "Частина набору плагінів, що разом дозволяють будувати сервери зі складною структурою світів.",
      ],
    },
    features: {
      ru: ["Порталы и команды телепортации между мирами", "Сохранение состояния игрока при переезде", "Бесшовные переходы без потери инвентаря", "Работает в связке с Multi World Plugin"],
      en: ["Portals and teleport commands between worlds", "Preserves player state across a move", "Seamless transitions without losing inventory", "Works together with the Multi World Plugin"],
      uk: ["Портали й команди телепортації між світами", "Збереження стану гравця при переїзді", "Безшовні переходи без втрати інвентарю", "Працює в зв'язці з Multi World Plugin"],
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
      ru: [
        "Амбициозный мод: каждый звук в игре проходит через трассировку акустических лучей. Через Mixin мод перехватывает звуковую систему клиента и из позиций слушателя и источника пускает прямой луч плюс конус из 16 лучей с отражениями (до 3 переотражений).",
        "По пути считаются блоки и их акустические свойства — больше 50 материалов с разными коэффициентами поглощения и преграждения: камень глушит сильно, шерсть мягко, у воды своя логика. Среда классифицируется — улица, помещение, большое помещение, пещера, лес, под водой — и к источнику OpenAL применяются громкость, частотная фильтрация и реверберация.",
        "Идея в том, чтобы звук в пещере звучал как в пещере, в лесу как в лесу, а за каменной стеной — приглушённо. Статус честный — прототип: мод собирается и запускается, но автор репортил два бага (крэш после серии звуков и слабую разницу за стеной). Архитектура при этом полностью рабочая.",
      ],
      en: [
        "An ambitious mod: every sound in the game runs through acoustic ray tracing. Via Mixin the mod hooks the client's sound system and, from the listener's and source's positions, casts a direct ray plus a 16-ray cone with reflections (up to 3 bounces).",
        "Along the way it counts blocks and their acoustic properties — over 50 materials with different absorption and obstruction coefficients: stone muffles heavily, wool softly, water has its own logic. The environment is classified — outdoors, indoors, large indoors, cave, forest, underwater — and volume, frequency filtering and reverb are applied to the OpenAL source.",
        "The idea is that a cave should sound like a cave, a forest like a forest, and behind a stone wall — muffled. The status is honest — a prototype: the mod builds and runs, but two bugs were reported (a crash after a series of sounds, and a weak difference behind a wall). The architecture itself fully works.",
      ],
      uk: [
        "Амбітний мод: кожен звук у грі проходить через трасування акустичних променів. Через Mixin мод перехоплює звукову систему клієнта й пускає прямий промінь плюс конус із 16 променів із відбиттями.",
        "По дорозі рахуються блоки та їхні акустичні властивості — понад 50 матеріалів. Середовище класифікується — вулиця, приміщення, печера, ліс, під водою — і до джерела OpenAL застосовуються гучність, фільтрація та реверберація.",
        "Статус чесний — прототип: мод збирається й запускається, але є два відомі баги. Архітектура повністю робоча.",
      ],
    },
    features: {
      ru: ["Трассировка акустических лучей: прямой луч + конус 16 лучей", "Более 50 материалов с коэффициентами поглощения", "Классификация среды: улица, пещера, лес, под водой", "Громкость, частотная фильтрация и реверб через OpenAL", "Перехват звуковой системы через Mixin"],
      en: ["Acoustic ray tracing: a direct ray + a 16-ray cone", "Over 50 materials with absorption coefficients", "Environment classification: outdoors, cave, forest, underwater", "Volume, frequency filtering and reverb via OpenAL", "Hooks the sound system via Mixin"],
      uk: ["Трасування акустичних променів: прямий промінь + конус 16 променів", "Понад 50 матеріалів із коефіцієнтами поглинання", "Класифікація середовища: вулиця, печера, ліс, під водою", "Гучність, фільтрація та реверб через OpenAL", "Перехоплення звукової системи через Mixin"],
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
      ru: [
        "Инструмент для разработки: запускает несколько ботов, которые одновременно пишут в чат локального сервера, чтобы проверить, как тот держит нагрузку. Использует мой проект minecraft-rs как зависимость по пути.",
        "Параметры задаются из командной строки: адрес сервера, число ботов (от 1 до 32), список сообщений, опционально — конкретные имена ботов. Подключения ботов специально разнесены во времени чуть больше чем на 4 секунды, чтобы не упереться в connection-throttle сервера.",
        "Сделан аккуратно и ответственно: утилита намеренно отказывается работать с публичными IP и принимает только локальные и приватные адреса. Это инструмент для своего тестового стенда, а не для чужих серверов.",
      ],
      en: [
        "A development tool: it spins up several bots that write into a local server's chat at once, to check how it holds the load. It uses my minecraft-rs project as a path dependency.",
        "Parameters are set from the command line: server address, bot count (1 to 32), a message list, optionally specific bot names. Bot connections are deliberately staggered by a little over 4 seconds to avoid hitting the server's connection-throttle.",
        "Built carefully and responsibly: the tool deliberately refuses public IPs and accepts only local and private addresses. It's a tool for your own test bench, not for someone else's servers.",
      ],
      uk: [
        "Інструмент для розробки: запускає кілька ботів, які одночасно пишуть у чат локального сервера. Використовує мій проєкт minecraft-rs.",
        "Параметри задаються з командного рядка: адреса сервера, число ботів (1-32), список повідомлень. Підключення рознесені в часі, щоб не впертися в connection-throttle.",
        "Зроблено акуратно: утиліта намеренно відмовляється працювати з публічними IP і приймає лише локальні адреси.",
      ],
    },
    features: {
      ru: ["Запуск от 1 до 32 ботов с сообщениями в чат", "Нагрузочное тестирование локального сервера", "Использует библиотеку minecraft-rs", "Только локальные и приватные IP — публичные отклоняются"],
      en: ["Launches 1 to 32 bots posting chat messages", "Load-tests a local server", "Uses the minecraft-rs library", "Local and private IPs only — public ones rejected"],
      uk: ["Запуск від 1 до 32 ботів із повідомленнями в чат", "Навантажувальне тестування локального сервера", "Використовує бібліотеку minecraft-rs", "Лише локальні та приватні IP"],
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
      ru: [
        "Низкоуровневая библиотека: кодек, фреймер и пакеты протокола Minecraft Java Edition, написанные на Rust. Это не готовый бот, а фундамент — слой, который умеет правильно говорить с сервером на его языке.",
        "На этой библиотеке стоят другие мои проекты: mc-chat-utils для нагрузочного тестирования и Rust-часть фреймворка MinecraftBot. Один аккуратно сделанный протокольный слой переиспользуется во всём остальном.",
        "Rust здесь выбран не случайно: сетевой код на нём и быстрый, и защищён компилятором от целого класса ошибок памяти, которые в протокольном коде особенно опасны.",
      ],
      en: [
        "A low-level library: the codec, framer and packets of the Minecraft Java Edition protocol, written in Rust. It's not a finished bot but a foundation — a layer that knows how to speak the server's language correctly.",
        "Other projects of mine stand on this library: mc-chat-utils for load testing and the Rust part of the MinecraftBot framework. One carefully built protocol layer is reused across everything else.",
        "Rust was chosen here deliberately: networking code with it is both fast and protected by the compiler from a whole class of memory bugs that are especially dangerous in protocol code.",
      ],
      uk: [
        "Низькорівнева бібліотека: кодек, фреймер і пакети протоколу Minecraft Java Edition, написані на Rust. Це не готовий бот, а фундамент.",
        "На цій бібліотеці стоять інші мої проєкти: mc-chat-utils і Rust-частина MinecraftBot.",
        "Rust тут обрано заради швидкості та захисту компілятором від помилок пам'яті.",
      ],
    },
    features: {
      ru: ["Кодек, фреймер и пакеты протокола Minecraft", "Фундамент для ботов и сетевых инструментов", "Используется в mc-chat-utils и MinecraftBot", "Безопасный по памяти сетевой код на Rust"],
      en: ["Minecraft protocol codec, framer and packets", "A foundation for bots and network tools", "Used in mc-chat-utils and MinecraftBot", "Memory-safe networking code in Rust"],
      uk: ["Кодек, фреймер і пакети протоколу Minecraft", "Фундамент для ботів і мережевих інструментів", "Використовується в mc-chat-utils і MinecraftBot", "Безпечний за пам'яттю мережевий код на Rust"],
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
      ru: [
        "Python-версия работы с протоколом Minecraft. Она проще и нагляднее, чем Rust: на Python быстро видно, как устроен конкретный пакет, и легко поэкспериментировать, не воюя с компилятором.",
        "По сути это эталон — наглядная реализация, по которой потом сверялись более серьёзные Rust-проекты. Когда есть простая понятная версия, отлаживать сложную сильно легче.",
        "Часть моей большой темы вокруг протокола Minecraft, в которую входят также minecraft-rs и фреймворк MinecraftBot.",
      ],
      en: [
        "A Python take on working with the Minecraft protocol. It's simpler and clearer than Rust: in Python you can quickly see how a specific packet is built and experiment easily without fighting the compiler.",
        "It's effectively a reference — a readable implementation the more serious Rust projects were later checked against. When there's a simple, clear version, debugging the complex one gets much easier.",
        "Part of my larger Minecraft-protocol theme, which also includes minecraft-rs and the MinecraftBot framework.",
      ],
      uk: [
        "Python-версія роботи з протоколом Minecraft. Вона простіша й наочніша за Rust.",
        "По суті це еталон — наочна реалізація, за якою потім звірялися Rust-проєкти.",
        "Частина моєї великої теми навколо протоколу Minecraft.",
      ],
    },
    features: {
      ru: ["Реализация протокола Minecraft на Python", "Простая и наглядная — удобно для экспериментов", "Эталон для сверки Rust-реализаций", "Часть набора с minecraft-rs и MinecraftBot"],
      en: ["Minecraft protocol implementation in Python", "Simple and clear — handy for experiments", "A reference for checking Rust implementations", "Part of the set with minecraft-rs and MinecraftBot"],
      uk: ["Реалізація протоколу Minecraft на Python", "Проста й наочна — зручно для експериментів", "Еталон для звірки Rust-реалізацій", "Частина набору з minecraft-rs і MinecraftBot"],
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
      ru: [
        "Популярный по YouTube формат: один игрок-спидраннер пытается убить дракона Энда, а остальные — охотники — пытаются убить его раньше. Плагин (актуальная версия — SVH2) реализует всю логику матча на Bukkit/Spigot API 1.20.",
        "Интересна не только игровая часть, но и инфраструктура продакшена. Полноценный сетап — это лобби-сервер, прокси Velocity и игровой сервер в Docker-контейнере. Игрок заходит на лобби, выбирает «Играть» и переключается на игровой инстанс.",
        "Миры игрового сервера намеренно не сохраняются как том Docker — поэтому при каждом перезапуске они пересоздаются заново, и каждый матч идёт на свежей карте. Сам плагин — это игровой инстанс этой схемы.",
      ],
      en: [
        "A format popular on YouTube: one speedrunner tries to kill the End dragon while the others — hunters — try to kill them first. The plugin (the current version is SVH2) implements the full match logic on the Bukkit/Spigot 1.20 API.",
        "What's interesting isn't just the gameplay but the production infrastructure. A full setup is a lobby server, a Velocity proxy and a game server in a Docker container. A player joins the lobby, picks 'Play' and switches to the game instance.",
        "The game server's worlds are deliberately not mounted as a Docker volume — so on every restart they're recreated, and each match runs on a fresh map. The plugin itself is the game instance of this scheme.",
      ],
      uk: [
        "Популярний за YouTube формат: один гравець-спідранер намагається вбити дракона, решта — мисливці — намагаються вбити його раніше. Плагін (актуальна версія — SVH2) на API 1.20.",
        "Цікава й інфраструктура продакшену: лобі-сервер, проксі Velocity та ігровий сервер у Docker-контейнері.",
        "Світи ігрового сервера навмисно не зберігаються — кожен матч іде на свіжій карті.",
      ],
    },
    features: {
      ru: ["Игровой режим «Спидраннер против Охотников»", "Полная логика матча на API 1.20", "Продакшен-сетап: лобби + Velocity + Docker", "Свежая карта на каждый матч"],
      en: ["The 'Speedrunner vs Hunter' game mode", "Full match logic on the 1.20 API", "Production setup: lobby + Velocity + Docker", "A fresh map for every match"],
      uk: ["Ігровий режим «Спідранер проти Мисливців»", "Повна логіка матчу на API 1.20", "Продакшен-сетап: лобі + Velocity + Docker", "Свіжа карта на кожен матч"],
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
      ru: [
        "Идея — общее радио на сервере: единый поток музыки, который слышат подключённые к нему игроки. Маленькая социальная фишка, которая делает сервер живее, когда народ просто проводит время вместе.",
        "Главный технический вызов здесь — как доставлять и синхронизировать звук между игроками средствами игры, у которой нет нормального стриминга аудио. Это эксперимент с этой задачей, поэтому статус — прототип.",
        "Если довести до конца, такое радио хорошо вписывается в лобби и социальные зоны сервера.",
      ],
      en: [
        "The idea is a shared server radio: one music stream that connected players hear together. A small social touch that makes a server feel more alive when people are just hanging out.",
        "The main technical challenge is how to deliver and sync sound between players using a game that has no proper audio streaming. This is an experiment with that problem, hence the prototype status.",
        "Taken to completion, such a radio fits well into a server's lobby and social zones.",
      ],
      uk: [
        "Ідея — спільне радіо на сервері: єдиний потік музики, який чують підключені гравці.",
        "Головний технічний виклик — як доставляти й синхронізувати звук засобами гри без нормального стримінгу аудіо. Це експеримент, тому статус — прототип.",
        "Доведене до кінця, таке радіо добре вписується в лобі сервера.",
      ],
    },
    features: {
      ru: ["Общий поток музыки для игроков сервера", "Социальная фишка для лобби и зон отдыха", "Эксперимент с доставкой звука средствами игры", "Статус — прототип"],
      en: ["A shared music stream for server players", "A social feature for lobbies and lounge zones", "An experiment with delivering sound via the game", "Status — prototype"],
      uk: ["Спільний потік музики для гравців сервера", "Соціальна фішка для лобі та зон відпочинку", "Експеримент із доставкою звуку засобами гри", "Статус — прототип"],
    },
  },
  {
    id: "mcserverping", name: "Minecraft Server Ping", aka: "Поиск серверов",
    category: "minecraft", status: "broken", year: 2023,
    langs: ["Java", "Python", "Go"], tags: ["Сканер", "Сеть", "Protocol"],
    github: "https://github.com/AlexMelanFromRingo/minecraft-ping-tool",
    short: {
      ru: "Сканер диапазонов IP, который ищет работающие Minecraft-серверы на стандартном порту 25565.",
      en: "An IP-range scanner that hunts for live Minecraft servers on the standard port 25565.",
      uk: "Сканер діапазонів IP, що шукає робочі Minecraft-сервери на стандартному порту 25565.",
    },
    body: {
      ru: [
        "Утилита проходит по диапазону IP-адресов, стучится на порт 25565 и по протоколу Server List Ping выясняет, есть ли там Minecraft-сервер: версия, описание (MOTD), число игроков онлайн. Так можно собрать карту публичных серверов.",
        "Проект интересен тем, что я переписывал его на трёх языках — Java, Python и Go — и сравнивал, как каждый справляется с массовым асинхронным сетевым опросом тысяч адресов.",
        "Статус честный — требует доработки: Java-версия из этого набора у меня помечена как сломанная. Идея и протокольная часть рабочие, но конкретную сборку нужно чинить, поэтому проект не выставляю как готовый.",
      ],
      en: [
        "The utility walks an IP-address range, knocks on port 25565 and uses the Server List Ping protocol to find out whether a Minecraft server is there: version, description (MOTD), online player count. This way you can build a map of public servers.",
        "The project is interesting because I rewrote it in three languages — Java, Python and Go — and compared how each handles mass async network polling of thousands of addresses.",
        "The status is honest — needs work: the Java version of this set is marked broken in my files. The idea and the protocol part work, but that specific build needs fixing, so I won't present the project as finished.",
      ],
      uk: [
        "Утиліта проходить діапазоном IP-адрес, стукає на порт 25565 і за протоколом Server List Ping з'ясовує, чи є там Minecraft-сервер: версія, опис, число гравців.",
        "Проєкт цікавий тим, що я переписував його трьома мовами — Java, Python і Go.",
        "Статус чесний — потребує доробки: Java-версія з цього набору позначена як зламана.",
      ],
    },
    features: {
      ru: ["Сканирование диапазонов IP на порт 25565", "Сбор версии, MOTD и онлайна по Server List Ping", "Три реализации: Java, Python, Go", "Статус: требует доработки — Java-сборка сломана"],
      en: ["Scans IP ranges on port 25565", "Collects version, MOTD and online via Server List Ping", "Three implementations: Java, Python, Go", "Status: needs work — the Java build is broken"],
      uk: ["Сканування діапазонів IP на порт 25565", "Збір версії, MOTD та онлайну за Server List Ping", "Три реалізації: Java, Python, Go", "Статус: потребує доробки — Java-збірка зламана"],
    },
  },
];
