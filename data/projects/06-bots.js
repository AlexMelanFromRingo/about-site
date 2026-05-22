/* Боты и автоматизация */
module.exports = [
  {
    id: "anonmessagebot", name: "AnonMessageBot", aka: "Анонимные сообщения",
    category: "bots", status: "done", year: 2025, featured: true,
    langs: ["Python"], tags: ["Telegram", "Бот", "Анонимность"],
    github: "https://github.com/AlexMelanFromRingo/AnonMessageBot",
    short: {
      ru: "Telegram-бот для анонимных сообщений — по мотивам сайта Sayat.me и бумажных валентинок.",
      en: "A Telegram bot for anonymous messages — inspired by Sayat.me and paper valentines.",
      uk: "Telegram-бот для анонімних повідомлень — за мотивами сайту Sayat.me та паперових валентинок.",
    },
    body: {
      ru: [
        "Идея старая и тёплая: дать человеку личную ссылку, по которой ему можно написать что угодно анонимно — как записка-валентинка или как сайт Sayat.me, который был популярен несколько лет назад.",
        "Бот раздаёт каждому пользователю персональную ссылку. Любой, кто по ней перешёл, может отправить сообщение, и бот перешлёт его владельцу — но без имени отправителя.",
        "Простой по технической сути проект, но приятный по идее: он про лёгкое, ни к чему не обязывающее общение между людьми. Один из проектов, где я разбирался с механикой Telegram-ботов и связыванием пользователей.",
      ],
      en: [
        "An old, warm idea: give a person a personal link through which anyone can write them anything anonymously — like a valentine note, or like the Sayat.me site that was popular a few years ago.",
        "The bot hands each user a personal link. Anyone who follows it can send a message, and the bot forwards it to the owner — but without the sender's name.",
        "A simple project in technical essence but a pleasant one in idea: it's about light, no-strings communication between people. One of the projects where I worked through Telegram-bot mechanics and linking users.",
      ],
      uk: [
        "Ідея стара й тепла: дати людині особисте посилання, за яким їй можна написати будь-що анонімно.",
        "Бот роздає кожному користувачу персональне посилання. Будь-хто може надіслати повідомлення, і бот перешле його власнику без імені відправника.",
        "Простий за суттю проєкт, але приємний за ідеєю.",
      ],
    },
    features: {
      ru: ["Персональная анонимная ссылка для каждого пользователя", "Пересылка сообщений владельцу без имени отправителя", "По мотивам Sayat.me и бумажных валентинок", "Реализация на Python"],
      en: ["A personal anonymous link for each user", "Forwards messages to the owner without the sender's name", "Inspired by Sayat.me and paper valentines", "Implemented in Python"],
      uk: ["Персональне анонімне посилання для кожного користувача", "Пересилання повідомлень власнику без імені відправника", "За мотивами Sayat.me і паперових валентинок", "Реалізація на Python"],
    },
  },
  {
    id: "whisperbot", name: "WhisperBot", aka: "Речь в текст",
    category: "bots", status: "done", year: 2026,
    langs: ["Python"], tags: ["Telegram", "Whisper", "Speech-to-Text", "CUDA"],
    github: "https://github.com/AlexMelanFromRingo/WhisperBot",
    short: {
      ru: "Telegram-бот, который расшифровывает голосовые сообщения и видео-кружочки в текст моделью Whisper.",
      en: "A Telegram bot that transcribes voice messages and video notes into text using Whisper.",
      uk: "Telegram-бот, що розшифровує голосові повідомлення та відеокружальця в текст моделлю Whisper.",
    },
    body: {
      ru: [
        "Удобный бот для тех, кому неудобно слушать голосовые — в транспорте, на паре, рядом со спящими. Пересылаешь боту голосовое или видео-кружок, получаешь обратно текст.",
        "Внутри — модель распознавания речи Whisper от OpenAI. Бот рассчитан на нагрузку: есть очередь задач и несколько рабочих потоков, поэтому несколько сообщений обрабатываются параллельно, а пользователь видит свою позицию в очереди.",
        "Поддерживает ускорение на видеокарте через CUDA и умеет при необходимости сохранять исходные аудиофайлы. Серверная пара к моему проекту Whisper STT.",
      ],
      en: [
        "A handy bot for those who can't conveniently listen to voice notes — on transit, in class, near someone sleeping. Forward the bot a voice message or video note and get text back.",
        "Inside is OpenAI's Whisper speech-recognition model. The bot is built for load: there's a task queue and several worker threads, so multiple messages are processed in parallel and the user sees their position in the queue.",
        "It supports GPU acceleration via CUDA and can save the original audio files when needed. A server-side companion to my Whisper STT project.",
      ],
      uk: [
        "Зручний бот для тих, кому незручно слухати голосові. Пересилаєш йому голосове чи відеокружальце — отримуєш текст.",
        "Усередині — модель Whisper від OpenAI. Бот розрахований на навантаження: черга задач і кілька робочих потоків.",
        "Підтримує прискорення на GPU через CUDA. Серверна пара до проєкту Whisper STT.",
      ],
    },
    features: {
      ru: ["Расшифровка голосовых и видео-кружочков в текст", "Модель распознавания речи Whisper от OpenAI", "Очередь задач и параллельная обработка", "Ускорение на GPU через CUDA", "Информирование пользователя о позиции в очереди"],
      en: ["Transcribes voice messages and video notes into text", "OpenAI's Whisper speech-recognition model", "A task queue and parallel processing", "GPU acceleration via CUDA", "Tells the user their position in the queue"],
      uk: ["Розшифрування голосових і відеокружалець у текст", "Модель Whisper від OpenAI", "Черга задач і паралельна обробка", "Прискорення на GPU через CUDA", "Інформування про позицію в черзі"],
    },
  },
  {
    id: "description-user-bot", name: "Description User Bot", aka: "Ротация био",
    category: "bots", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Telegram", "Userbot", "MTProto", "grammers"],
    github: "https://github.com/AlexMelanFromRingo/description_user_bot",
    short: {
      ru: "Telegram-userbot, который по расписанию меняет описание профиля.",
      en: "A Telegram userbot that rotates the profile description on a schedule.",
      uk: "Telegram-userbot, що за розкладом змінює опис профілю.",
    },
    body: {
      ru: [
        "Userbot на Rust, который автоматически меняет описание профиля (био) по расписанию — например, показывает текущее время, статус или сменяющиеся фразы.",
        "Написан на библиотеке grammers для прямой работы с MTProto API Telegram — это не бот через Bot API, а автоматизация поверх обычного аккаунта.",
        "Сделано аккуратно: автоопределение Premium-статуса (у обычных и Premium-аккаунтов разный лимит длины — 70 или 140 символов), защита от flood wait через rate limiting, валидатор конфигурации, управление командами прямо в чате.",
      ],
      en: [
        "A Rust userbot that automatically changes the profile description (bio) on a schedule — showing the current time, a status or rotating phrases, for example.",
        "Built on the grammers library for direct work with Telegram's MTProto API — this isn't a bot via the Bot API but automation on top of an ordinary account.",
        "Tidily done: automatic Premium-status detection (regular and Premium accounts have different length limits — 70 or 140 characters), flood-wait protection via rate limiting, a config validator, in-chat command control.",
      ],
      uk: [
        "Userbot на Rust, що автоматично змінює опис профілю (біо) за розкладом.",
        "Написаний на бібліотеці grammers для прямої роботи з MTProto API Telegram.",
        "Акуратно зроблено: автовизначення Premium-статусу, захист від flood wait, валідатор конфігурації, керування командами в чаті.",
      ],
    },
    features: {
      ru: ["Автоматическая смена био профиля по расписанию", "Работа через MTProto API на библиотеке grammers", "Автоопределение Premium-статуса (лимит 70/140 символов)", "Защита от flood wait через rate limiting", "Валидатор конфигурации и управление в чате"],
      en: ["Automatic profile-bio rotation on a schedule", "Works via the MTProto API on the grammers library", "Auto-detection of Premium status (70/140-char limit)", "Flood-wait protection via rate limiting", "A config validator and in-chat control"],
      uk: ["Автоматична зміна біо профілю за розкладом", "Робота через MTProto API на бібліотеці grammers", "Автовизначення Premium-статусу (ліміт 70/140 символів)", "Захист від flood wait через rate limiting", "Валідатор конфігурації та керування в чаті"],
    },
  },
  {
    id: "twitch-notifier", name: "Twitch Notifier", aka: "Уведомления о стримах",
    category: "bots", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Twitch", "Telegram", "Discord", "Уведомления"],
    github: "https://github.com/AlexMelanFromRingo/twitch-notifier",
    short: {
      ru: "Самостоятельный бот, который шлёт уведомления о начале стримов на Twitch в Telegram и Discord.",
      en: "A self-hosted bot that sends Twitch stream-live notifications to Telegram and Discord.",
      uk: "Самостійний бот, що надсилає сповіщення про початок стрімів на Twitch у Telegram і Discord.",
    },
    body: {
      ru: [
        "Бот следит за стримерами на Twitch через официальный Helix API и сообщает, когда кто-то выходит в эфир. Интервал опроса настраивается.",
        "Уведомления летят сразу в две стороны — в Telegram и в Discord. Любой админ Telegram-канала или Discord-сервера может подписаться на любое число стримеров, и для этого не нужен доступ к базе данных бота.",
        "Гибко настраивается: язык на каждую подписку (украинский, английский, русский) и собственные шаблоны уведомлений с переменными — {streamer}, {title}, {game}, {url}. Самостоятельный (self-hosted) бот: запускаешь у себя, никакой облачной зависимости.",
      ],
      en: [
        "The bot watches Twitch streamers via the official Helix API and announces when someone goes live. The polling interval is configurable.",
        "Notifications go both ways at once — to Telegram and to Discord. Any admin of a Telegram channel or Discord server can subscribe to any number of streamers, with no access to the bot's database needed.",
        "Flexibly configurable: a per-subscription language (Ukrainian, English, Russian) and custom notification templates with variables — {streamer}, {title}, {game}, {url}. A self-hosted bot: you run it yourself, with no cloud dependency.",
      ],
      uk: [
        "Бот стежить за стрімерами на Twitch через офіційний Helix API і повідомляє, коли хтось виходить в ефір.",
        "Сповіщення летять у Telegram і в Discord. Будь-який адмін може підписатися на будь-яке число стрімерів.",
        "Гнучко налаштовується: мова на кожну підписку та власні шаблони сповіщень. Self-hosted бот.",
      ],
    },
    features: {
      ru: ["Слежение за стримерами через Twitch Helix API", "Уведомления в Telegram и Discord одновременно", "Подписка для любого админа без доступа к базе", "Язык на каждую подписку: UK / EN / RU", "Шаблоны уведомлений с переменными", "Самостоятельный (self-hosted) запуск"],
      en: ["Tracks streamers via the Twitch Helix API", "Notifications to Telegram and Discord at once", "Subscription for any admin without database access", "A per-subscription language: UK / EN / RU", "Notification templates with variables", "Self-hosted operation"],
      uk: ["Стеження за стрімерами через Twitch Helix API", "Сповіщення в Telegram і Discord одночасно", "Підписка для будь-якого адміна без доступу до бази", "Мова на кожну підписку: UK / EN / RU", "Шаблони сповіщень зі змінними", "Самостійний (self-hosted) запуск"],
    },
  },
  {
    id: "ollama-userbot", name: "Ollama Telegram Userbot", aka: "ИИ в личке",
    category: "bots", status: "done", year: 2025,
    langs: ["Python"], tags: ["Telegram", "Ollama", "LLM", "Userbot"],
    short: {
      ru: "Telegram-userbot, который отвечает на сообщения через локальную языковую модель Ollama.",
      en: "A Telegram userbot that replies to messages through the local Ollama language model.",
      uk: "Telegram-userbot, що відповідає на повідомлення через локальну мовну модель Ollama.",
    },
    body: {
      ru: [
        "Userbot, который подключает локальную языковую модель через Ollama прямо к личным сообщениям Telegram. Модель работает на твоей машине — ничего не уходит в чужие облака.",
        "Можно отвечать собеседникам с помощью ИИ или просто держать под рукой умного помощника в привычном мессенджере, без отдельного приложения.",
        "Проект прошёл несколько версий, и каждая аккуратнее предыдущей: чистка кода, вынесенный конфиг, управление списком чатов, где бот активен. Часть моей серии экспериментов с локальными LLM.",
      ],
      en: [
        "A userbot that connects a local language model via Ollama right into Telegram private messages. The model runs on your own machine — nothing goes to someone else's cloud.",
        "You can reply to correspondents with AI assistance, or simply keep a smart helper at hand in your usual messenger, with no separate app.",
        "The project went through several versions, each tidier than the last: code cleanup, an extracted config, management of the chat list where the bot is active. Part of my series of experiments with local LLMs.",
      ],
      uk: [
        "Userbot, що під'єднує локальну мовну модель через Ollama прямо до особистих повідомлень Telegram.",
        "Можна відповідати співрозмовникам за допомогою ШІ або мати під рукою розумного помічника.",
        "Проєкт пройшов кілька версій — кожна акуратніша. Частина серії експериментів із локальними LLM.",
      ],
    },
    features: {
      ru: ["Локальная LLM через Ollama в личных сообщениях", "Модель работает на своей машине, без облаков", "Управление списком активных чатов", "Несколько версий с растущей аккуратностью кода"],
      en: ["A local LLM via Ollama in private messages", "The model runs on your own machine, no clouds", "Management of the active-chat list", "Several versions with growing code tidiness"],
      uk: ["Локальна LLM через Ollama в особистих повідомленнях", "Модель працює на своїй машині, без хмар", "Керування списком активних чатів", "Кілька версій зі зростаючою акуратністю коду"],
    },
  },
  {
    id: "telegram-userbot", name: "Telegram Userbot", aka: "Userbot-фреймворк",
    category: "bots", status: "done", year: 2025,
    langs: ["Python"], tags: ["Telegram", "Userbot", "Автоматизация"],
    github: "https://github.com/AlexMelanFromRingo/telegram-userbot",
    short: {
      ru: "Userbot для Telegram с набором полезных команд и автоматизаций для личного аккаунта.",
      en: "A Telegram userbot with a set of useful commands and automations for a personal account.",
      uk: "Userbot для Telegram із набором корисних команд та автоматизацій для особистого акаунта.",
    },
    body: {
      ru: [
        "Userbot — это автоматизация поверх обычного аккаунта Telegram, в отличие от бота через Bot API. Команды выполняются от твоего имени, в твоих чатах.",
        "Здесь собран набор удобных команд и небольших автоматизаций, которые ускоряют повседневное пользование мессенджером — рутинные действия, которые лень делать руками.",
        "Хорошая базовая основа, от которой потом пошли более специализированные userbot-проекты вроде Ollama Telegram Userbot и description_user_bot.",
      ],
      en: [
        "A userbot is automation on top of an ordinary Telegram account, unlike a bot via the Bot API. Commands run under your name, in your chats.",
        "This one gathers a set of handy commands and small automations that speed up everyday messenger use — routine actions you're too lazy to do by hand.",
        "A good base that more specialized userbot projects later branched from — like the Ollama Telegram Userbot and description_user_bot.",
      ],
      uk: [
        "Userbot — це автоматизація поверх звичайного акаунта Telegram. Команди виконуються від твого імені.",
        "Тут зібрано набір зручних команд і невеликих автоматизацій для повсякденного користування.",
        "Гарна основа, від якої пішли спеціалізованіші userbot-проєкти.",
      ],
    },
    features: {
      ru: ["Набор команд для личного аккаунта Telegram", "Автоматизация повседневной рутины", "Команды выполняются от имени пользователя", "Основа для специализированных userbot-проектов"],
      en: ["A set of commands for a personal Telegram account", "Automation of everyday routine", "Commands run under the user's name", "A base for specialized userbot projects"],
      uk: ["Набір команд для особистого акаунта Telegram", "Автоматизація повсякденної рутини", "Команди виконуються від імені користувача", "Основа для спеціалізованих userbot-проєктів"],
    },
  },
  {
    id: "telegram-donate-bot", name: "Telegram Donate Bot", aka: "Приём донатов",
    category: "bots", status: "done", year: 2026,
    langs: ["Python"], tags: ["Telegram", "Платежи", "Бот"],
    short: {
      ru: "Telegram-бот для приёма донатов с уведомлениями и учётом поступлений.",
      en: "A Telegram bot for accepting donations with notifications and income tracking.",
      uk: "Telegram-бот для прийому донатів зі сповіщеннями та обліком надходжень.",
    },
    body: {
      ru: [
        "Бот, который помогает принимать донаты прямо в Telegram: оформляет платёж, уведомляет владельца о поступлении, ведёт учёт суммы и истории.",
        "Полезная штука для стримеров, блогеров и всех, кто хочет дать аудитории простой способ поддержать его, не уводя людей на сторонние сервисы.",
        "Здесь я разбирался с тем, как аккуратно встроить платежи в Telegram-бота — это отдельная тема со своими тонкостями и требованиями к надёжности.",
      ],
      en: [
        "A bot that helps accept donations right inside Telegram: it processes the payment, notifies the owner on receipt, keeps a record of the amount and history.",
        "A useful thing for streamers, bloggers and anyone who wants to give their audience a simple way to support them without sending people off to third-party services.",
        "Here I worked out how to integrate payments into a Telegram bot cleanly — that's its own topic with its own subtleties and reliability requirements.",
      ],
      uk: [
        "Бот, що допомагає приймати донати прямо в Telegram: оформлює платіж, сповіщає про надходження, веде облік.",
        "Корисна штука для стрімерів і блогерів.",
        "Тут я розбирався з тим, як акуратно вбудувати платежі в Telegram-бота.",
      ],
    },
    features: {
      ru: ["Приём донатов прямо в Telegram", "Уведомления владельцу о поступлениях", "Учёт суммы и истории донатов", "Интеграция платежей в бота"],
      en: ["Accepts donations right inside Telegram", "Notifications to the owner on receipt", "Records the amount and donation history", "Payment integration into a bot"],
      uk: ["Прийом донатів прямо в Telegram", "Сповіщення власнику про надходження", "Облік суми та історії донатів", "Інтеграція платежів у бота"],
    },
  },
  {
    id: "asiec-schedule", name: "ASIEC Schedule Bot", aka: "Расписание колледжа",
    category: "bots", status: "done", year: 2026,
    langs: ["Python"], tags: ["Telegram", "Расписание", "Бот"],
    short: {
      ru: "Telegram-бот, который показывает расписание занятий и присылает напоминания.",
      en: "A Telegram bot that shows the class schedule and sends reminders.",
      uk: "Telegram-бот, що показує розклад занять і надсилає нагадування.",
    },
    body: {
      ru: [
        "Бот для удобного доступа к учебному расписанию: показывает пары на сегодня и завтра, а также присылает напоминания, чтобы ничего не пропустить.",
        "Сделан, чтобы решить совершенно конкретную бытовую проблему — не лазить каждый раз вручную за расписанием на сайт или в общий чат, а получать его в пару нажатий.",
        "Лучшие боты обычно вырастают именно из таких маленьких личных неудобств: видишь, что повторяешь рутинное действие, и автоматизируешь его.",
      ],
      en: [
        "A bot for convenient access to the class schedule: it shows today's and tomorrow's lessons and sends reminders so nothing gets missed.",
        "Built to solve a very concrete everyday problem — not having to look the schedule up by hand on a website or in a group chat every time, but getting it in a couple of taps.",
        "The best bots usually grow from exactly such small personal annoyances: you notice you keep repeating a routine action and automate it.",
      ],
      uk: [
        "Бот для зручного доступу до навчального розкладу: показує пари на сьогодні й завтра, надсилає нагадування.",
        "Зроблено, щоб вирішити конкретну побутову проблему — не лазити щоразу за розкладом вручну.",
        "Найкращі боти виростають саме з таких маленьких особистих незручностей.",
      ],
    },
    features: {
      ru: ["Расписание пар на сегодня и завтра", "Напоминания о занятиях", "Доступ к расписанию в пару нажатий", "Решает конкретную бытовую задачу"],
      en: ["The lesson schedule for today and tomorrow", "Class reminders", "Schedule access in a couple of taps", "Solves a concrete everyday task"],
      uk: ["Розклад пар на сьогодні й завтра", "Нагадування про заняття", "Доступ до розкладу в пару натискань", "Вирішує конкретну побутову задачу"],
    },
  },
  {
    id: "schedulebot", name: "Schedule Bot", aka: "Бот-планировщик",
    category: "bots", status: "done", year: 2023,
    langs: ["Python"], tags: ["Telegram", "Планировщик", "База данных"],
    short: {
      ru: "Бот-планировщик, который хранит события и напоминает о них вовремя.",
      en: "A scheduler bot that stores events and reminds about them on time.",
      uk: "Бот-планувальник, що зберігає події й нагадує про них вчасно.",
    },
    body: {
      ru: [
        "Бот, в который можно записать дела и события с привязкой ко времени, а он напомнит о них в нужный момент. Личный планировщик, живущий прямо в Telegram.",
        "Внутри — работа с базой данных для хранения расписания и фоновая проверка, не пора ли что-то напомнить. То есть бот не только реагирует на команды, но и действует сам по таймеру.",
        "Один из ранних ботов, на котором я учился связывать воедино три вещи: интерфейс Telegram, логику и постоянное хранение данных.",
      ],
      en: [
        "A bot you can record tasks and events into with a time attached, and it reminds you of them at the right moment. A personal scheduler living right in Telegram.",
        "Inside is database work for storing the schedule and a background check of whether something needs reminding. So the bot doesn't only react to commands — it also acts on its own on a timer.",
        "One of the early bots where I learned to tie three things together: the Telegram interface, logic and persistent data storage.",
      ],
      uk: [
        "Бот, у який можна записати справи й події, а він нагадає про них у потрібний момент.",
        "Усередині — робота з базою даних і фонова перевірка за таймером.",
        "Один із ранніх ботів, на якому я вчився пов'язувати інтерфейс Telegram, логіку та зберігання даних.",
      ],
    },
    features: {
      ru: ["Запись событий с привязкой ко времени", "Напоминания в нужный момент", "Хранение расписания в базе данных", "Фоновое срабатывание по таймеру"],
      en: ["Recording events with a time attached", "Reminders at the right moment", "Schedule storage in a database", "Background firing on a timer"],
      uk: ["Запис подій із прив'язкою до часу", "Нагадування в потрібний момент", "Зберігання розкладу в базі даних", "Фонове спрацювання за таймером"],
    },
  },
  {
    id: "weatherbot", name: "Weather Bot", aka: "Бот погоды",
    category: "bots", status: "done", year: 2022,
    langs: ["Python"], tags: ["Telegram", "API", "Погода"],
    short: {
      ru: "Telegram-бот, который показывает прогноз погоды по запросу.",
      en: "A Telegram bot that shows the weather forecast on request.",
      uk: "Telegram-бот, що показує прогноз погоди на запит.",
    },
    body: {
      ru: [
        "Классический бот для начинающего: спрашиваешь погоду в городе — получаешь прогноз. Существует в нескольких версиях, каждая чуть аккуратнее.",
        "За кажущейся простотой — первый опыт работы с внешними API: сформировать запрос к погодному сервису, разобрать пришедший JSON, аккуратно обработать ошибки, когда город не найден или сервис не ответил.",
        "Почти у каждого, кто учится делать ботов, есть свой бот погоды — это маленький, но важный рубеж: первый раз твой код достаёт настоящие данные из интернета.",
      ],
      en: [
        "A classic beginner's bot: ask for the weather in a city and get a forecast. It exists in several versions, each a bit tidier.",
        "Behind the apparent simplicity is a first experience with external APIs: building a request to a weather service, parsing the JSON that comes back, handling errors carefully when a city isn't found or the service doesn't answer.",
        "Almost everyone learning to build bots has their own weather bot — a small but meaningful milestone: the first time your code pulls real data from the internet.",
      ],
      uk: [
        "Класичний бот для початківця: запитуєш погоду в місті — отримуєш прогноз. Існує в кількох версіях.",
        "За простотою — перший досвід роботи із зовнішніми API: запит, розбір JSON, обробка помилок.",
        "Майже в кожного, хто вчиться робити ботів, є свій бот погоди — маленький, але важливий рубіж.",
      ],
    },
    features: {
      ru: ["Прогноз погоды по названию города", "Работа с внешним погодным API", "Разбор JSON и обработка ошибок", "Несколько версий с растущей аккуратностью"],
      en: ["Weather forecast by city name", "Working with an external weather API", "JSON parsing and error handling", "Several versions with growing tidiness"],
      uk: ["Прогноз погоди за назвою міста", "Робота із зовнішнім погодним API", "Розбір JSON і обробка помилок", "Кілька версій зі зростаючою акуратністю"],
    },
  },
  {
    id: "discordbot", name: "Discord Bot", aka: "Бот для Discord",
    category: "bots", status: "done", year: 2022,
    langs: ["Python"], tags: ["Discord", "Бот", "Команды"],
    short: {
      ru: "Бот для Discord-сервера с набором команд и развлекательных функций.",
      en: "A Discord-server bot with a set of commands and entertainment features.",
      uk: "Бот для Discord-сервера з набором команд та розважальних функцій.",
    },
    body: {
      ru: [
        "Мой первый бот для Discord: команды, загадки, шутки, базовые серверные функции. Делался для общения с друзьями на своём сервере.",
        "Прошёл несколько версий — от первого работающего варианта до более аккуратных сборок, с тестовой версией для отладки отдельно от основной.",
        "С Discord-ботов у многих начинается путь в программирование — у меня в том числе: понятная цель, быстрая обратная связь, видимый результат, которым тут же пользуются друзья.",
      ],
      en: [
        "My first Discord bot: commands, riddles, jokes, basic server features. Built for hanging out with friends on my own server.",
        "It went through several versions — from the first working variant to tidier builds, with a test version for debugging separately from the main one.",
        "Discord bots are where many people's path into programming begins — mine included: a clear goal, fast feedback, a visible result that friends use right away.",
      ],
      uk: [
        "Мій перший бот для Discord: команди, загадки, жарти, базові серверні функції.",
        "Пройшов кілька версій — від першого робочого варіанта до акуратніших збірок.",
        "З Discord-ботів у багатьох починається шлях у програмування — у мене зокрема.",
      ],
    },
    features: {
      ru: ["Команды, загадки и шутки на сервере", "Базовые серверные функции", "Несколько версий, включая тестовую для отладки", "Первый бот, с которого начинался путь"],
      en: ["Commands, riddles and jokes on a server", "Basic server features", "Several versions, including a test one for debugging", "The first bot the path began with"],
      uk: ["Команди, загадки та жарти на сервері", "Базові серверні функції", "Кілька версій, включно з тестовою для відлагодження", "Перший бот, з якого починався шлях"],
    },
  },
  {
    id: "discord-client", name: "Discord Bot Client", aka: "Клиент Discord на Rust",
    category: "bots", status: "concept", year: 2026,
    langs: ["Rust"], tags: ["Discord", "Клиент", "API"],
    github: "https://github.com/AlexMelanFromRingo/discord-bot-client",
    short: {
      ru: "Собственный клиент для работы с Discord API, написанный на Rust.",
      en: "A custom client for working with the Discord API, written in Rust.",
      uk: "Власний клієнт для роботи з Discord API, написаний на Rust.",
    },
    body: {
      ru: [
        "Эксперимент с тем, чтобы написать свой клиент Discord на Rust — не пользоваться готовой библиотекой, а разобрать API и протокол самому.",
        "Такой подход медленнее, но даёт куда более глубокое понимание: как устроены сетевые события, как держится постоянное соединение, как сериализуются данные.",
        "Статус — прототип: рабочая основа, на которой я разбираюсь с протоколом Discord изнутри.",
      ],
      en: [
        "An experiment in writing my own Discord client in Rust — not using a ready library but dissecting the API and protocol myself.",
        "This approach is slower but gives a far deeper understanding: how network events are built, how a persistent connection is kept, how data is serialized.",
        "Status — prototype: a working base on which I'm getting to grips with the Discord protocol from the inside.",
      ],
      uk: [
        "Експеримент із тим, щоб написати свій клієнт Discord на Rust — розібрати API та протокол самому.",
        "Такий підхід повільніший, але дає глибше розуміння.",
        "Статус — прототип: робоча основа для розбору протоколу Discord.",
      ],
    },
    features: {
      ru: ["Собственный клиент Discord API на Rust", "Разбор протокола без готовой библиотеки", "Глубокое понимание сетевых событий и соединения", "Статус — прототип"],
      en: ["A custom Discord API client in Rust", "Dissecting the protocol without a ready library", "A deep understanding of network events and the connection", "Status — prototype"],
      uk: ["Власний клієнт Discord API на Rust", "Розбір протоколу без готової бібліотеки", "Глибоке розуміння мережевих подій і з'єднання", "Статус — прототип"],
    },
  },
  {
    id: "eth-price-checker", name: "ETH Price Checker", aka: "Курс Ethereum",
    category: "bots", status: "done", year: 2026,
    langs: ["Python"], tags: ["Криптовалюты", "API", "Мониторинг"],
    short: {
      ru: "Инструмент для отслеживания курса Ethereum в реальном времени.",
      en: "A tool for tracking the Ethereum price in real time.",
      uk: "Інструмент для відстеження курсу Ethereum у реальному часі.",
    },
    body: {
      ru: [
        "Небольшая утилита, которая следит за курсом Ethereum и показывает его в реальном времени, периодически опрашивая публичный API биржи.",
        "Простой, но практичный инструмент для тех, кто держит руку на пульсе крипторынка и хочет видеть цену, не открывая лишних сайтов.",
        "Хороший пример быстрого проекта вокруг работы с публичным API — соседствует с моим ботом курса в других проектах автоматизации.",
      ],
      en: [
        "A small utility that watches the Ethereum price and shows it in real time, periodically polling a public exchange API.",
        "A simple but practical tool for anyone keeping a finger on the crypto-market pulse who wants to see the price without opening extra sites.",
        "A good example of a quick project around working with a public API — it sits next to my other automation projects.",
      ],
      uk: [
        "Невелика утиліта, що стежить за курсом Ethereum і показує його в реальному часі.",
        "Простий, але практичний інструмент для тих, хто стежить за крипторинком.",
        "Гарний приклад швидкого проєкту навколо роботи з публічним API.",
      ],
    },
    features: {
      ru: ["Отслеживание курса Ethereum в реальном времени", "Опрос публичного API биржи", "Простой и практичный мониторинг", "Реализация на Python"],
      en: ["Real-time Ethereum price tracking", "Polling a public exchange API", "Simple and practical monitoring", "Implemented in Python"],
      uk: ["Відстеження курсу Ethereum у реальному часі", "Опитування публічного API біржі", "Простий і практичний моніторинг", "Реалізація на Python"],
    },
  },
  {
    id: "dtek-parse", name: "DTEK Parse", aka: "Графики отключений",
    category: "bots", status: "done", year: 2026,
    langs: ["JavaScript"], tags: ["Парсинг", "Энергетика", "Автоматизация"],
    github: "https://github.com/AlexMelanFromRingo/dtek-parse",
    short: {
      ru: "Парсер графиков отключения электроэнергии от энергокомпании ДТЭК.",
      en: "A parser for the power-outage schedules of the DTEK energy company.",
      uk: "Парсер графіків відключення електроенергії від енергокомпанії ДТЕК.",
    },
    body: {
      ru: [
        "В Украине из-за обстрелов энергосистемы графики отключений света стали частью повседневности. ДТЭК публикует их, но в неудобном для автоматического чтения виде.",
        "Этот парсер автоматически достаёт графики ДТЭК и приводит их к удобному формату — чтобы можно было отслеживать отключения программно, а не искать каждый раз вручную на сайте.",
        "Проект, рождённый из реальной жизненной необходимости знать, когда у тебя будет свет. Та же история, что и моё Android-приложение LightWatch.",
      ],
      en: [
        "In Ukraine, because of strikes on the power grid, outage schedules have become part of daily life. DTEK publishes them, but in a form awkward for automatic reading.",
        "This parser automatically pulls DTEK's schedules and brings them to a convenient format — so outages can be tracked programmatically instead of being looked up by hand on a website every time.",
        "A project born of a real-life necessity to know when you'll have electricity. The same story as my LightWatch Android app.",
      ],
      uk: [
        "В Україні через обстріли енергосистеми графіки відключень стали частиною повсякденності. ДТЕК публікує їх у незручному для автоматичного читання вигляді.",
        "Цей парсер автоматично дістає графіки ДТЕК і приводить їх до зручного формату.",
        "Проєкт, народжений із реальної необхідності. Та сама історія, що й Android-застосунок LightWatch.",
      ],
    },
    features: {
      ru: ["Автоматический парсинг графиков отключений ДТЭК", "Приведение к удобному для программ формату", "Программное отслеживание вместо ручного поиска", "Рождён реальной необходимостью военного времени"],
      en: ["Automatic parsing of DTEK outage schedules", "Conversion to a program-friendly format", "Programmatic tracking instead of manual lookup", "Born of a real wartime necessity"],
      uk: ["Автоматичний парсинг графіків відключень ДТЕК", "Приведення до зручного для програм формату", "Програмне відстеження замість ручного пошуку", "Народжений реальною необхідністю воєнного часу"],
    },
  },
  {
    id: "mihoyo-collect", name: "miHoYo Auto Collect", aka: "Автосбор наград",
    category: "bots", status: "done", year: 2026,
    langs: ["JavaScript"], tags: ["Автоматизация", "Игры", "Порт"],
    short: {
      ru: "Автоматический сбор ежедневных игровых наград в проектах miHoYo.",
      en: "Automatic collection of daily in-game rewards in miHoYo projects.",
      uk: "Автоматичний збір щоденних ігрових нагород у проєктах miHoYo.",
    },
    body: {
      ru: [
        "В играх miHoYo есть ежедневные награды, которые нужно забирать вручную, заходя в игру каждый день. Пропустил день — потерял награду.",
        "Этот скрипт — порт известного решения на JavaScript — забирает такие награды автоматически, без участия человека. Маленькая автоматизация, которая убирает скучное, но обязательное повторяющееся действие.",
        "Из категории «автоматизировать то, что делать вручную скучно» — той же, что мой автосбор и другие мелкие боты-помощники.",
      ],
      en: [
        "miHoYo games have daily rewards you have to claim by hand, logging into the game every day. Miss a day and you lose the reward.",
        "This script — a JavaScript port of a well-known solution — claims such rewards automatically, with no human involved. A small automation that removes a boring but mandatory repetitive action.",
        "From the 'automate what's boring to do by hand' category — the same as my other small helper bots.",
      ],
      uk: [
        "В іграх miHoYo є щоденні нагороди, які треба забирати вручну. Пропустив день — втратив нагороду.",
        "Цей скрипт — порт відомого рішення на JavaScript — забирає нагороди автоматично.",
        "З категорії «автоматизувати те, що робити вручну нудно».",
      ],
    },
    features: {
      ru: ["Автоматический сбор ежедневных наград miHoYo", "Порт известного решения на JavaScript", "Убирает обязательное ежедневное действие", "Работает без участия человека"],
      en: ["Automatic collection of daily miHoYo rewards", "A JavaScript port of a well-known solution", "Removes a mandatory daily action", "Works with no human involved"],
      uk: ["Автоматичний збір щоденних нагород miHoYo", "Порт відомого рішення на JavaScript", "Прибирає обов'язкову щоденну дію", "Працює без участі людини"],
    },
  },
  {
    id: "gyverspam", name: "Pixel Battle Bot", aka: "Рисовалка для Pixel Battle",
    category: "bots", status: "done", year: 2023,
    langs: ["Python"], tags: ["Pixel Battle", "Автоматизация", "Изображения"],
    short: {
      ru: "Бот для рисования пиксельных изображений на конкурсе Pixel Battle от AlexGyver.",
      en: "A bot for drawing pixel images in AlexGyver's Pixel Battle contest.",
      uk: "Бот для малювання піксельних зображень на конкурсі Pixel Battle від AlexGyver.",
    },
    body: {
      ru: [
        "Pixel Battle от блогера AlexGyver — конкурс, где участники по одному пикселю выкладывают изображения на общем поле. Выложить большую картинку руками — это часы кликов.",
        "Этот бот берёт картинку, переводит её в чёрно-белый или цветной набор пикселей и расставляет их сам, на нужные координаты. Ты описываешь, что хочешь нарисовать, остальное делает бот.",
        "По духу — близкий родственник моего Minecraft-мода BuilderMod: та же идея перевести изображение в пиксели и автоматизировать нудный попиксельный труд.",
      ],
      en: [
        "Pixel Battle by the blogger AlexGyver is a contest where participants place images one pixel at a time on a shared canvas. Placing a large picture by hand is hours of clicks.",
        "This bot takes a picture, converts it into a black-and-white or colour set of pixels and places them itself, at the right coordinates. You describe what to draw, the bot does the rest.",
        "In spirit it's a close relative of my Minecraft mod BuilderMod: the same idea of converting an image to pixels and automating tedious pixel-by-pixel work.",
      ],
      uk: [
        "Pixel Battle від блогера AlexGyver — конкурс, де учасники по одному пікселю викладають зображення на спільному полі.",
        "Цей бот бере картинку, переводить її в набір пікселів і розставляє їх сам.",
        "За духом — близький родич мого Minecraft-мода BuilderMod.",
      ],
    },
    features: {
      ru: ["Перевод картинки в набор пикселей", "Автоматическая расстановка пикселей по координатам", "Чёрно-белый и цветной режимы", "Родственник Minecraft-мода BuilderMod"],
      en: ["Converts an image into a set of pixels", "Automatic pixel placement by coordinates", "Black-and-white and colour modes", "A relative of the Minecraft mod BuilderMod"],
      uk: ["Переведення картинки в набір пікселів", "Автоматична розстановка пікселів за координатами", "Чорно-білий і кольоровий режими", "Родич Minecraft-мода BuilderMod"],
    },
  },
  {
    id: "viber-chatbot", name: "Viber ChatBot", aka: "Чат-бот для Viber",
    category: "bots", status: "done", year: 2021,
    langs: ["Python"], tags: ["Viber", "Чат-бот", "Бот"],
    short: {
      ru: "Чат-бот для мессенджера Viber с диалоговой логикой.",
      en: "A chat bot for the Viber messenger with conversational logic.",
      uk: "Чат-бот для месенджера Viber із діалоговою логікою.",
    },
    body: {
      ru: [
        "Бот для Viber, который ведёт диалог с пользователем по заданной логике. Проект из самых ранних — тогда я разбирался, как вообще устроены чат-боты.",
        "На нём я впервые прошёл всю цепочку: принять входящее сообщение, разобрать его, выбрать ответ по логике, отправить обратно. Базовая, но фундаментальная схема любого бота.",
        "Viber выбрал потому, что в то время им активно пользовались вокруг меня — а бота удобно тестировать там, где есть живые пользователи, готовые с ним поговорить.",
      ],
      en: [
        "A Viber bot that holds a conversation with the user by configured logic. An early project — back then I was figuring out how chat bots work at all.",
        "On it I first walked the whole chain: receive an incoming message, parse it, pick a response by logic, send it back. The basic but fundamental scheme of any bot.",
        "I picked Viber because it was actively used around me at the time — and a bot is convenient to test where there are live users ready to talk to it.",
      ],
      uk: [
        "Бот для Viber, що веде діалог із користувачем за заданою логікою. Проєкт із найраніших.",
        "На ньому я вперше пройшов весь ланцюжок: прийняти повідомлення, розібрати, вибрати відповідь, надіслати.",
        "Viber обрав тому, що ним активно користувалися навколо мене.",
      ],
    },
    features: {
      ru: ["Диалоговый чат-бот для Viber", "Полная цепочка: приём, разбор, ответ", "Один из самых ранних проектов с ботами", "Базовая схема, лежащая в основе любого бота"],
      en: ["A conversational chat bot for Viber", "The full chain: receive, parse, reply", "One of the earliest bot projects", "The basic scheme behind any bot"],
      uk: ["Діалоговий чат-бот для Viber", "Повний ланцюжок: прийом, розбір, відповідь", "Один із найраніших проєктів з ботами", "Базова схема, що лежить в основі будь-якого бота"],
    },
  },
  {
    id: "mailbot", name: "Mail Automation", aka: "Работа с почтой",
    category: "bots", status: "done", year: 2022,
    langs: ["Python"], tags: ["Email", "SMTP", "IMAP", "Автоматизация"],
    short: {
      ru: "Набор скриптов для автоматической отправки и чтения электронной почты.",
      en: "A set of scripts for automatically sending and reading email.",
      uk: "Набір скриптів для автоматичного надсилання та читання електронної пошти.",
    },
    body: {
      ru: [
        "Скрипты для работы с почтой из кода: автоматическая отправка писем, чтение входящих, разбор их содержимого. Электронная почта — старый, но всё ещё незаменимый канал, и уметь автоматизировать его полезно.",
        "Здесь я на практике разобрался с двумя протоколами: SMTP для отправки и IMAP для чтения. За простым словом «почта» стоят свои форматы, кодировки и тонкости подключения.",
        "Прикладной набор инструментов — отсюда выросло понимание того, как письма ходят на уровне протоколов, а не кнопок в почтовом клиенте.",
      ],
      en: [
        "Scripts for working with email from code: automatically sending messages, reading the inbox, parsing their content. Email is an old but still indispensable channel, and being able to automate it is useful.",
        "Here I worked through two protocols hands-on: SMTP for sending and IMAP for reading. Behind the simple word 'email' lie its own formats, encodings and connection subtleties.",
        "An applied toolkit — an understanding of how mail travels at the protocol level, not the buttons in a mail client, grew from here.",
      ],
      uk: [
        "Скрипти для роботи з поштою з коду: автоматичне надсилання листів, читання вхідних, розбір вмісту.",
        "Тут я на практиці розібрався з двома протоколами: SMTP для надсилання та IMAP для читання.",
        "Прикладний набір інструментів.",
      ],
    },
    features: {
      ru: ["Автоматическая отправка и чтение писем", "Работа с протоколами SMTP и IMAP", "Разбор содержимого писем", "Прикладной набор скриптов автоматизации"],
      en: ["Automatic sending and reading of emails", "Working with the SMTP and IMAP protocols", "Parsing email content", "An applied automation toolkit"],
      uk: ["Автоматичне надсилання та читання листів", "Робота з протоколами SMTP та IMAP", "Розбір вмісту листів", "Прикладний набір скриптів автоматизації"],
    },
  },
  {
    id: "youtube-lyrics", name: "YouTube Lyrics Analytics", aka: "Анализ текстов плейлиста",
    category: "bots", status: "done", year: 2026,
    langs: ["Python"], tags: ["YouTube", "Анализ данных", "NLP"],
    short: {
      ru: "Инструмент, который собирает тексты песен из плейлиста YouTube и анализирует их.",
      en: "A tool that collects song lyrics from a YouTube playlist and analyzes them.",
      uk: "Інструмент, що збирає тексти пісень із плейлиста YouTube і аналізує їх.",
    },
    body: {
      ru: [
        "Проект на стыке парсинга и анализа данных. Берёт плейлист на YouTube, проходит по всем трекам, собирает тексты песен и считает по ним статистику.",
        "Анализ показывает частые слова, темы, общее настроение плейлиста. Любопытно посмотреть на свой музыкальный вкус со стороны, через цифры, а не ощущения.",
        "Хороший пример того, как из обычного хобби — слушать музыку — можно сделать дата-проект: данные есть везде, нужно только их собрать и задать правильный вопрос.",
      ],
      en: [
        "A project between scraping and data analysis. It takes a YouTube playlist, walks all the tracks, gathers song lyrics and computes statistics over them.",
        "The analysis shows frequent words, themes, the playlist's overall mood. It's curious to look at your music taste from the outside, through numbers rather than feelings.",
        "A good example of turning an ordinary hobby — listening to music — into a data project: data is everywhere, you just need to collect it and ask the right question.",
      ],
      uk: [
        "Проєкт на стику парсингу та аналізу даних. Бере плейлист на YouTube, збирає тексти пісень і рахує статистику.",
        "Аналіз показує часті слова, теми, настрій плейлиста.",
        "Гарний приклад того, як зі звичайного хобі зробити дата-проєкт.",
      ],
    },
    features: {
      ru: ["Сбор текстов песен из плейлиста YouTube", "Статистика: частые слова, темы, настроение", "Анализ музыкального вкуса через цифры", "Проект на стыке парсинга и анализа данных"],
      en: ["Collects song lyrics from a YouTube playlist", "Statistics: frequent words, themes, mood", "Analysis of music taste through numbers", "A project between scraping and data analysis"],
      uk: ["Збір текстів пісень із плейлиста YouTube", "Статистика: часті слова, теми, настрій", "Аналіз музичного смаку через цифри", "Проєкт на стику парсингу та аналізу даних"],
    },
  },
  {
    id: "storyparser", name: "Story Downloader", aka: "Загрузка историй",
    category: "bots", status: "done", year: 2023,
    langs: ["Python"], tags: ["Instagram", "Загрузка медиа"],
    short: {
      ru: "Скрипт для скачивания историй из Instagram для личного архива.",
      en: "A script for downloading Instagram stories for a personal archive.",
      uk: "Скрипт для завантаження історій з Instagram для особистого архіву.",
    },
    body: {
      ru: [
        "Истории в Instagram исчезают через сутки — это часть их формата. Иногда хочется сохранить то, что иначе бесследно пропадёт.",
        "Этот скрипт скачивает истории и складывает их в локальный архив. Прикладная утилита из серии «автоматизировать то, что вручную делать неудобно».",
        "Маленький инструмент, на котором я разбирался с автоматической загрузкой медиа.",
      ],
      en: [
        "Instagram stories vanish after a day — it's part of their format. Sometimes you want to keep what would otherwise disappear without a trace.",
        "This script downloads stories and files them into a local archive. An applied utility from the 'automate what's awkward to do by hand' series.",
        "A small tool on which I worked through automatic media downloading.",
      ],
      uk: [
        "Історії в Instagram зникають за добу. Іноді хочеться зберегти те, що інакше пропаде.",
        "Цей скрипт завантажує історії в локальний архів.",
        "Маленький інструмент, на якому я розбирався з автоматичним завантаженням медіа.",
      ],
    },
    features: {
      ru: ["Скачивание историй Instagram в локальный архив", "Сохранение того, что иначе исчезнет", "Автоматическая загрузка медиа", "Прикладная утилита для личного использования"],
      en: ["Downloads Instagram stories into a local archive", "Saving what would otherwise disappear", "Automatic media downloading", "An applied utility for personal use"],
      uk: ["Завантаження історій Instagram у локальний архів", "Збереження того, що інакше зникне", "Автоматичне завантаження медіа", "Прикладна утиліта для особистого використання"],
    },
  },
  {
    id: "telepulse", name: "TelePulse", aka: "Мониторинг активности",
    category: "bots", status: "done", year: 2025,
    langs: ["Python"], tags: ["Telegram", "Мониторинг", "Визуализация"],
    short: {
      ru: "Инструмент мониторинга и визуализации онлайн-активности в Telegram.",
      en: "A tool for monitoring and visualizing online activity in Telegram.",
      uk: "Інструмент моніторингу та візуалізації онлайн-активності в Telegram.",
    },
    body: {
      ru: [
        "TelePulse фиксирует, когда контакты в Telegram бывают онлайн, и складывает эти события в базу данных. Со временем накапливается история активности.",
        "Отдельный модуль строит из этой истории наглядную визуализацию — картину того, в какое время человек обычно в сети. Сырой поток событий «зашёл / вышел» превращается в осмысленную аналитику.",
        "Проект про то, как из простых наблюдаемых данных получить структурированную картину — это, по сути, маленький дата-проект вокруг Telegram.",
      ],
      en: [
        "TelePulse records when Telegram contacts are online and files these events into a database. Over time an activity history accumulates.",
        "A separate module builds a clear visualization from this history — a picture of when a person is usually online. A raw stream of 'came online / went offline' events turns into meaningful analytics.",
        "A project about getting a structured picture from simple observable data — essentially a small data project around Telegram.",
      ],
      uk: [
        "TelePulse фіксує, коли контакти в Telegram бувають онлайн, і складає ці події в базу даних.",
        "Окремий модуль будує з цієї історії наочну візуалізацію.",
        "Проєкт про те, як із простих даних отримати структуровану картину.",
      ],
    },
    features: {
      ru: ["Фиксация моментов онлайн-активности контактов", "Хранение событий в базе данных", "Визуализация активности по времени", "Превращение потока событий в аналитику"],
      en: ["Records moments of contacts' online activity", "Stores events in a database", "Visualization of activity over time", "Turns an event stream into analytics"],
      uk: ["Фіксація моментів онлайн-активності контактів", "Зберігання подій у базі даних", "Візуалізація активності за часом", "Перетворення потоку подій на аналітику"],
    },
  },
];
