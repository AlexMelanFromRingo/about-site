/* Боты и автоматизация */
module.exports = [
  {
    id: "anonmessagebot", name: "AnonMessageBot", aka: "Анонимные сообщения",
    category: "bots", status: "done", year: 2025,
    langs: ["Python"], tags: ["Telegram", "Бот", "Анонимность"],
    github: "https://github.com/AlexMelanFromRingo/AnonMessageBot",
    short: {
      ru: "Telegram-бот для анонимных сообщений — по мотивам сайта Sayat.me и бумажных валентинок.",
      en: "A Telegram bot for anonymous messages — inspired by Sayat.me and paper valentines.",
      uk: "Telegram-бот для анонімних повідомлень — за мотивами сайту Sayat.me та паперових валентинок.",
    },
    body: {
      ru: ["Идея старая и тёплая: дать человеку ссылку, по которой ему можно написать что угодно анонимно — как записка-валентинка или сайт Sayat.me. Бот раздаёт персональные ссылки и пересылает владельцу всё, что ему написали.", "Простой по сути проект, но приятный — он про лёгкое, безопасное общение между людьми."],
      en: ["An old, warm idea: give a person a link through which anyone can write them anything anonymously — like a valentine note or the Sayat.me site. The bot hands out personal links and forwards the owner everything written to them.", "A simple project at heart, but a pleasant one — it's about light, safe communication between people."],
      uk: ["Ідея стара й тепла: дати людині посилання, за яким їй можна написати будь-що анонімно — як записка-валентинка чи сайт Sayat.me. Бот роздає персональні посилання й пересилає власнику все, що йому написали.", "Простий за суттю проєкт, але приємний."],
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
      ru: ["Удобный бот для тех, кому неудобно слушать голосовые. Пересылаешь ему голосовое или видео-кружок — получаешь текст. Внутри — модель Whisper от OpenAI, очередь задач и несколько рабочих потоков, чтобы обрабатывать сообщения параллельно.", "Поддерживает ускорение на GPU через CUDA и честно сообщает пользователю о статусе очереди."],
      en: ["A handy bot for those who can't conveniently listen to voice notes. Forward it a voice message or video note and get text back. Inside is OpenAI's Whisper model, a task queue and several worker threads to process messages in parallel.", "It supports GPU acceleration via CUDA and honestly tells the user the queue status."],
      uk: ["Зручний бот для тих, кому незручно слухати голосові. Пересилаєш йому голосове чи відеокружальце — отримуєш текст. Усередині — модель Whisper від OpenAI, черга задач і кілька робочих потоків.", "Підтримує прискорення на GPU через CUDA."],
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
      ru: ["Userbot на Rust, который автоматически меняет био профиля по расписанию — например, показывает текущее время или статус. Написан на библиотеке grammers для прямой работы с MTProto API Telegram.", "Аккуратно сделано: автоопределение Premium-статуса (разный лимит длины), защита от flood wait, валидация конфигурации, управление командами в чате."],
      en: ["A Rust userbot that automatically changes the profile bio on a schedule — showing the current time or a status, for example. Built on the grammers library for direct work with Telegram's MTProto API.", "Tidily done: automatic Premium-status detection (different length limits), flood-wait protection, config validation, in-chat command control."],
      uk: ["Userbot на Rust, що автоматично змінює біо профілю за розкладом. Написаний на бібліотеці grammers для прямої роботи з MTProto API Telegram.", "Акуратно зроблено: автовизначення Premium-статусу, захист від flood wait, валідація конфігурації."],
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
      ru: ["Бот следит за стримерами на Twitch через официальный Helix API и сообщает, когда кто-то выходит в эфир. Уведомления летят и в Telegram, и в Discord — любой админ канала может подписаться на нужных стримеров, без доступа к базе.", "Есть язык на каждую подписку (украинский, английский, русский) и настраиваемые шаблоны уведомлений с переменными."],
      en: ["The bot watches Twitch streamers via the official Helix API and announces when someone goes live. Notifications go to both Telegram and Discord — any channel admin can subscribe to the streamers they want, with no database access needed.", "There's a per-subscription language (Ukrainian, English, Russian) and customizable notification templates with variables."],
      uk: ["Бот стежить за стрімерами на Twitch через офіційний Helix API і повідомляє, коли хтось виходить в ефір. Сповіщення летять і в Telegram, і в Discord.", "Є мова на кожну підписку та налаштовувані шаблони сповіщень."],
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
      ru: ["Userbot, который подключает локальную модель Ollama к личным сообщениям Telegram. Можно отвечать с помощью ИИ или просто иметь под рукой умного помощника прямо в мессенджере.", "Прошёл несколько версий — каждая аккуратнее: чистка кода, конфиг, управление чатами."],
      en: ["A userbot that connects a local Ollama model to Telegram private messages. You can reply with AI assistance or simply keep a smart helper at hand right inside the messenger.", "It went through several versions, each tidier: code cleanup, a config, chat management."],
      uk: ["Userbot, що під'єднує локальну модель Ollama до особистих повідомлень Telegram. Можна відповідати за допомогою ШІ або мати під рукою розумного помічника.", "Пройшов кілька версій — кожна акуратніша."],
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
      ru: ["Userbot — это автоматизация поверх обычного аккаунта Telegram. Здесь собран набор удобных команд и небольших автоматизаций, которые делают повседневное пользование мессенджером быстрее.", "Хорошая основа, от которой потом пошли более специализированные userbot-проекты."],
      en: ["A userbot is automation on top of an ordinary Telegram account. This one gathers a set of handy commands and small automations that make everyday messenger use faster.", "A good base that more specialized userbot projects later branched from."],
      uk: ["Userbot — це автоматизація поверх звичайного акаунта Telegram. Тут зібрано набір зручних команд і невеликих автоматизацій.", "Гарна основа, від якої потім пішли спеціалізованіші userbot-проєкти."],
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
      ru: ["Бот, который помогает принимать донаты прямо в Telegram: оформляет платёж, уведомляет о поступлении, ведёт учёт. Полезная штука для стримеров и блогеров.", "Здесь я разбирался с тем, как аккуратно встроить платежи в бота."],
      en: ["A bot that helps accept donations right inside Telegram: it processes the payment, notifies on receipt and keeps a record. A useful thing for streamers and bloggers.", "Here I worked out how to integrate payments into a bot cleanly."],
      uk: ["Бот, що допомагає приймати донати прямо в Telegram: оформлює платіж, сповіщає про надходження, веде облік.", "Тут я розбирався з тим, як акуратно вбудувати платежі в бота."],
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
      ru: ["Бот для удобного доступа к учебному расписанию: показывает пары на сегодня и завтра, шлёт напоминания. Сделан, чтобы решить совершенно конкретную бытовую проблему — не лазить каждый раз за расписанием вручную.", "Лучшие боты обычно вырастают именно из таких маленьких личных неудобств."],
      en: ["A bot for convenient access to the class schedule: it shows today's and tomorrow's lessons and sends reminders. Built to solve a very concrete everyday problem — not having to look the schedule up by hand every time.", "The best bots usually grow from exactly such small personal annoyances."],
      uk: ["Бот для зручного доступу до навчального розкладу: показує пари на сьогодні й завтра, надсилає нагадування.", "Найкращі боти зазвичай виростають саме з таких маленьких особистих незручностей."],
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
      ru: ["Бот, в который можно записать дела и события, а он напомнит о них в нужный момент. Внутри — работа с базой данных для хранения расписания.", "Один из ранних ботов, на котором я учился связывать Telegram, логику и хранение данных воедино."],
      en: ["A bot you can record tasks and events into, and it reminds you of them at the right moment. Inside is database work for storing the schedule.", "One of the early bots where I learned to tie Telegram, logic and data storage together."],
      uk: ["Бот, у який можна записати справи й події, а він нагадає про них у потрібний момент. Усередині — робота з базою даних.", "Один із ранніх ботів, на якому я вчився пов'язувати Telegram, логіку та зберігання даних."],
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
      ru: ["Классический бот для начинающего: спрашиваешь погоду в городе — получаешь прогноз. Существует в нескольких версиях. За кажущейся простотой — первый опыт работы с внешними API: запрос, разбор JSON, обработка ошибок.", "Почти у каждого, кто учится делать ботов, есть свой бот погоды — это маленький, но важный рубеж."],
      en: ["A classic beginner's bot: ask for the weather in a city and get a forecast. It exists in several versions. Behind the apparent simplicity is a first experience with external APIs: a request, JSON parsing, error handling.", "Almost everyone learning to build bots has their own weather bot — a small but meaningful milestone."],
      uk: ["Класичний бот для початківця: запитуєш погоду в місті — отримуєш прогноз. Існує в кількох версіях. За простотою — перший досвід роботи із зовнішніми API.", "Майже в кожного, хто вчиться робити ботів, є свій бот погоди."],
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
      ru: ["Мой первый бот для Discord: команды, загадки, шутки, базовые серверные функции. Прошёл несколько версий, каждая чуть лучше предыдущей.", "С Discord-ботов у многих начинается путь в программирование — у меня в том числе."],
      en: ["My first Discord bot: commands, riddles, jokes, basic server features. It went through several versions, each a bit better than the last.", "Discord bots are where many people's path into programming begins — mine included."],
      uk: ["Мій перший бот для Discord: команди, загадки, жарти, базові серверні функції. Пройшов кілька версій.", "З Discord-ботів у багатьох починається шлях у програмування — у мене зокрема."],
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
      ru: ["Эксперимент с тем, чтобы написать свой клиент Discord на Rust — не пользоваться готовой библиотекой, а разобрать API и протокол самому.", "Такой подход даёт глубокое понимание того, как мессенджер устроен под капотом."],
      en: ["An experiment in writing my own Discord client in Rust — not using a ready library but dissecting the API and protocol myself.", "This approach gives a deep understanding of how a messenger works under the hood."],
      uk: ["Експеримент із тим, щоб написати свій клієнт Discord на Rust — не користуватися готовою бібліотекою, а розібрати API самому.", "Такий підхід дає глибоке розуміння того, як месенджер влаштований."],
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
      ru: ["Небольшая утилита, которая следит за курсом Ethereum и показывает его в реальном времени. Простой, но практичный инструмент для тех, кто держит руку на пульсе крипторынка.", "Хороший пример быстрого проекта вокруг работы с публичным API."],
      en: ["A small utility that watches the Ethereum price and shows it in real time. A simple but practical tool for anyone keeping a finger on the crypto-market pulse.", "A good example of a quick project around working with a public API."],
      uk: ["Невелика утиліта, що стежить за курсом Ethereum і показує його в реальному часі.", "Гарний приклад швидкого проєкту навколо роботи з публічним API."],
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
      ru: ["В Украине из-за обстрелов энергетики графики отключений света стали частью быта. Этот парсер автоматически достаёт графики ДТЭК, чтобы их можно было удобно отслеживать, а не искать каждый раз вручную.", "Проект, рождённый из реальной жизненной необходимости — знать, когда у тебя будет свет."],
      en: ["In Ukraine, because of strikes on the power grid, outage schedules have become part of daily life. This parser automatically pulls DTEK's schedules so they can be tracked conveniently instead of being looked up by hand every time.", "A project born of a real-life necessity — knowing when you'll have electricity."],
      uk: ["В Україні через обстріли енергетики графіки відключень світла стали частиною побуту. Цей парсер автоматично дістає графіки ДТЕК, щоб їх можна було зручно відстежувати.", "Проєкт, народжений із реальної життєвої необхідності."],
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
      ru: ["В играх miHoYo есть ежедневные награды, которые нужно забирать руками — рутина на каждый день. Этот скрипт (порт известного решения на JavaScript) делает это автоматически.", "Маленькая автоматизация, которая убирает скучное повторяющееся действие."],
      en: ["miHoYo games have daily rewards you have to claim by hand — a chore every single day. This script (a JavaScript port of a well-known solution) does it automatically.", "A small automation that removes a boring repetitive action."],
      uk: ["В іграх miHoYo є щоденні нагороди, які треба забирати руками. Цей скрипт (порт відомого рішення на JavaScript) робить це автоматично.", "Маленька автоматизація, що прибирає нудну повторювану дію."],
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
      ru: ["Pixel Battle от блогера AlexGyver — конкурс, где участники по пикселю выкладывают изображения на общем поле. Этот бот берёт картинку, переводит её в чёрно-белый или цветной набор пикселей и расставляет их сам.", "По духу — близкий родственник моего Minecraft-мода BuilderMod: та же идея автоматизации нудного попиксельного труда."],
      en: ["Pixel Battle by the blogger AlexGyver is a contest where participants place images pixel by pixel on a shared canvas. This bot takes a picture, converts it into a black-and-white or colour set of pixels and places them itself.", "In spirit it's a close relative of my Minecraft mod BuilderMod: the same idea of automating tedious pixel-by-pixel work."],
      uk: ["Pixel Battle від блогера AlexGyver — конкурс, де учасники по пікселю викладають зображення на спільному полі. Цей бот бере картинку й розставляє пікселі сам.", "За духом — близький родич мого Minecraft-мода BuilderMod."],
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
      ru: ["Бот для Viber, который ведёт диалог с пользователем. Проект из ранних: тогда я разбирался, как вообще устроены чат-боты — приём сообщения, логика ответа, отправка обратно.", "Viber выбрал потому, что в то время им активно пользовались вокруг — боты удобно тестировать там, где есть живые пользователи."],
      en: ["A Viber bot that holds a conversation with the user. An early project: back then I was figuring out how chat bots work at all — receiving a message, response logic, sending it back.", "I picked Viber because it was actively used around me at the time — bots are convenient to test where there are live users."],
      uk: ["Бот для Viber, що веде діалог із користувачем. Проєкт із ранніх: тоді я розбирався, як узагалі влаштовані чат-боти.", "Viber обрав тому, що ним активно користувалися навколо."],
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
      ru: ["Скрипты для работы с почтой из кода: автоматическая отправка писем, чтение входящих, разбор содержимого. Электронная почта — старый, но всё ещё незаменимый канал, и уметь автоматизировать её полезно.", "Здесь я разбирался с протоколами SMTP и IMAP на практике."],
      en: ["Scripts for working with email from code: automatically sending messages, reading the inbox, parsing content. Email is an old but still indispensable channel, and being able to automate it is useful.", "Here I worked through the SMTP and IMAP protocols hands-on."],
      uk: ["Скрипти для роботи з поштою з коду: автоматичне надсилання листів, читання вхідних, розбір вмісту. Електронна пошта — старий, але незамінний канал.", "Тут я розбирався з протоколами SMTP та IMAP на практиці."],
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
      ru: ["Проект на стыке парсинга и анализа данных: берёт плейлист на YouTube, собирает по нему тексты песен и считает статистику — частые слова, темы, настроение. Любопытно посмотреть на свой музыкальный вкус через цифры.", "Хороший пример того, как из обычного хобби можно сделать дата-проект."],
      en: ["A project between scraping and data analysis: it takes a YouTube playlist, gathers the song lyrics across it and computes statistics — frequent words, themes, mood. It's curious to look at your music taste through numbers.", "A good example of turning an ordinary hobby into a data project."],
      uk: ["Проєкт на стику парсингу та аналізу даних: бере плейлист на YouTube, збирає тексти пісень і рахує статистику — часті слова, теми, настрій.", "Гарний приклад того, як зі звичайного хобі можна зробити дата-проєкт."],
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
      ru: ["Истории в Instagram исчезают через сутки. Этот скрипт скачивает их, чтобы сохранить то, что иначе пропадёт — для личного архива.", "Маленький практичный инструмент из серии «автоматизировать то, что вручную делать лень»."],
      en: ["Instagram stories vanish after a day. This script downloads them to keep what would otherwise be lost — for a personal archive.", "A small practical tool from the 'automate what you're too lazy to do by hand' series."],
      uk: ["Історії в Instagram зникають за добу. Цей скрипт завантажує їх, щоб зберегти те, що інакше пропаде — для особистого архіву.", "Маленький практичний інструмент."],
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
      ru: ["TelePulse фиксирует, когда контакты в Telegram бывают онлайн, и строит из этого наглядную картину активности по времени. Данные хранятся в базе, отдельный модуль рисует визуализацию.", "Проект про то, как из простого потока событий «зашёл / вышел» получить осмысленную аналитику."],
      en: ["TelePulse records when Telegram contacts are online and builds a clear picture of their activity over time. The data is stored in a database, with a separate module drawing the visualization.", "A project about turning a simple stream of 'came online / went offline' events into meaningful analytics."],
      uk: ["TelePulse фіксує, коли контакти в Telegram бувають онлайн, і будує з цього наочну картину активності за часом.", "Проєкт про те, як із простого потоку подій отримати осмислену аналітику."],
    },
  },
];
