/* Android-приложения */
module.exports = [
  {
    id: "notifications-notebook", name: "Notifications Notebook", aka: "Журнал уведомлений",
    category: "android", status: "done", year: 2025, featured: true,
    langs: ["Java", "Android"], tags: ["Android", "Уведомления", "Логирование"],
    github: "https://github.com/AlexMelanFromRingo/Notifications-Notebook",
    short: {
      ru: "Android-приложение, которое сохраняет логи всех входящих уведомлений на телефоне.",
      en: "An Android app that saves a log of every incoming notification on the phone.",
      uk: "Android-застосунок, що зберігає логи всіх вхідних сповіщень на телефоні.",
    },
    body: {
      ru: ["Уведомления на телефоне постоянно исчезают: смахнул случайно — и не вспомнишь, что там было. Это приложение перехватывает все входящие уведомления и складывает в журнал, чтобы можно было вернуться и посмотреть, что приходило.", "Полезно и просто как памятка, и чтобы поймать уведомления, которые быстро удаляются сами."],
      en: ["Notifications on a phone constantly vanish: swipe one away by accident and you'll never recall what it said. This app intercepts all incoming notifications and files them into a log, so you can go back and see what arrived.", "Useful both as a simple reminder and for catching notifications that quickly delete themselves."],
      uk: ["Сповіщення на телефоні постійно зникають: змахнув випадково — і не згадаєш, що там було. Цей застосунок перехоплює всі вхідні сповіщення й складає в журнал.", "Корисно і як пам'ятка, і щоб упіймати сповіщення, які швидко видаляються самі."],
    },
  },
  {
    id: "lightwatch", name: "LightWatch", aka: "Мониторинг света",
    category: "android", status: "done", year: 2026,
    langs: ["Java", "Android"], tags: ["Android", "Энергетика", "Мониторинг"],
    github: "https://github.com/AlexMelanFromRingo/Light-Watch",
    short: {
      ru: "Android-приложение для отслеживания наличия электричества по группе отключений пользователя.",
      en: "An Android app for tracking electricity availability by the user's outage group.",
      uk: "Android-застосунок для відстеження наявності електрики за групою відключень користувача.",
    },
    body: {
      ru: ["Ещё один проект, рождённый украинскими реалиями отключений света. Приложение знает группу отключений по адресу пользователя и показывает, есть свет сейчас или нет и когда ожидается следующее окно.", "Когда график отключений становится частью быта, такое приложение реально облегчает планирование дня."],
      en: ["Another project born of Ukraine's power-outage reality. The app knows the user's outage group by address and shows whether there's electricity now and when the next window is expected.", "When an outage schedule becomes part of daily life, an app like this genuinely makes planning the day easier."],
      uk: ["Ще один проєкт, народжений українськими реаліями відключень світла. Застосунок знає групу відключень за адресою користувача й показує, чи є світло зараз.", "Коли графік відключень стає частиною побуту, такий застосунок справді полегшує планування дня."],
    },
  },
  {
    id: "sav", name: "Simple Android Vibration", aka: "SAV",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "API"],
    github: "https://github.com/AlexMelanFromRingo/SAV",
    short: {
      ru: "Простое Android-приложение для работы с вибрацией устройства.",
      en: "A simple Android app for working with the device's vibration.",
      uk: "Простий Android-застосунок для роботи з вібрацією пристрою.",
    },
    body: {
      ru: ["Маленькое приложение, которое управляет вибромотором телефона: разные паттерны, длительность, сила. Простой проект, чтобы разобраться с конкретным системным API Android.", "Из таких маленьких приложений по кирпичику собирается понимание мобильной платформы."],
      en: ["A small app that controls the phone's vibration motor: different patterns, duration, intensity. A simple project to get to grips with one specific Android system API.", "Understanding of the mobile platform is assembled brick by brick from small apps like this."],
      uk: ["Маленький застосунок, що керує вібромотором телефону: різні патерни, тривалість, сила. Простий проєкт, щоб розібратися з конкретним системним API Android.", "Із таких маленьких застосунків по цеглинці складається розуміння мобільної платформи."],
    },
  },
  {
    id: "btc-wallet-android", name: "Bitcoin Wallet", aka: "Кошелёк для Android",
    category: "android", status: "done", year: 2025,
    langs: ["Kotlin", "Android"], tags: ["Android", "Bitcoin", "Кошелёк"],
    github: "https://github.com/AlexMelanFromRingo/BTCWallet",
    short: {
      ru: "Android-кошелёк для Bitcoin — мобильное приложение для работы с криптовалютой.",
      en: "An Android Bitcoin wallet — a mobile app for working with cryptocurrency.",
      uk: "Android-гаманець для Bitcoin — мобільний застосунок для роботи з криптовалютою.",
    },
    body: {
      ru: ["Криптокошелёк на телефоне: генерация ключей, адреса, базовые операции — всё на Kotlin под Android. Проект пережил несколько итераций, каждая аккуратнее работала с ключами и хранением.", "Здесь сошлись две мои большие темы — мобильная разработка и криптовалюты."],
      en: ["A crypto wallet on a phone: key generation, addresses, basic operations — all in Kotlin for Android. The project went through several iterations, each handling keys and storage more carefully.", "Here two of my big themes converged — mobile development and cryptocurrencies."],
      uk: ["Криптогаманець на телефоні: генерація ключів, адреси, базові операції — усе на Kotlin під Android. Проєкт пережив кілька ітерацій.", "Тут зійшлися дві мої великі теми — мобільна розробка та криптовалюти."],
    },
  },
  {
    id: "mnist-android", name: "MNIST Neural", aka: "Нейросеть на телефоне",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "Нейросети", "MNIST"],
    short: {
      ru: "Android-приложение, которое распознаёт рукописные цифры нейросетью прямо на телефоне.",
      en: "An Android app that recognizes handwritten digits with a neural network right on the phone.",
      uk: "Android-застосунок, що розпізнає рукописні цифри нейромережею прямо на телефоні.",
    },
    body: {
      ru: ["Классическая задача MNIST — распознавание рукописных цифр — но запущенная прямо на Android. Рисуешь цифру пальцем на экране, нейросеть на устройстве её узнаёт.", "Интересно тем, что модель работает локально, без сервера: вычисления нейросети на мобильном железе."],
      en: ["The classic MNIST task — recognizing handwritten digits — but running right on Android. You draw a digit with your finger on the screen and the on-device neural network identifies it.", "It's interesting because the model runs locally, with no server: neural-network computation on mobile hardware."],
      uk: ["Класична задача MNIST — розпізнавання рукописних цифр — але запущена прямо на Android. Малюєш цифру пальцем, нейромережа на пристрої її впізнає.", "Цікаво тим, що модель працює локально, без сервера."],
    },
  },
  {
    id: "simple-neural-android", name: "Simple Neural", aka: "Нейросеть-эксперимент",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "Нейросети", "Учебное"],
    short: {
      ru: "Учебное Android-приложение с простой нейросетью для экспериментов на мобильном устройстве.",
      en: "An educational Android app with a simple neural network for on-device experiments.",
      uk: "Навчальний Android-застосунок із простою нейромережею для експериментів на пристрої.",
    },
    body: {
      ru: ["Эксперимент с тем, как простая нейросеть работает на телефоне. Пара к MNIST Neural — здесь упор на саму механику сети, а не на конкретную задачу.", "Мобильное устройство как площадка для ML — отдельный интересный вызов из-за ограничений по ресурсам."],
      en: ["An experiment with how a simple neural network behaves on a phone. A companion to MNIST Neural — here the focus is on the network mechanics themselves rather than a specific task.", "A mobile device as an ML platform is its own interesting challenge because of resource limits."],
      uk: ["Експеримент із тим, як проста нейромережа працює на телефоні. Пара до MNIST Neural — тут акцент на самій механіці мережі.", "Мобільний пристрій як майданчик для ML — окремий цікавий виклик через обмеження ресурсів."],
    },
  },
  {
    id: "clicker-game", name: "Clicker Game", aka: "Игра-кликер",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "Игра"],
    short: {
      ru: "Простая мобильная игра-кликер для Android.",
      en: "A simple mobile clicker game for Android.",
      uk: "Проста мобільна гра-клікер для Android.",
    },
    body: {
      ru: ["Игра-кликер на Android: жмёшь — растёт счёт, открываются улучшения. Жанр простой, и именно поэтому хорош для практики — можно сосредоточиться на самой разработке под мобильную платформу.", "Игровая логика, состояние, сохранения — базовый, но полезный набор задач."],
      en: ["A clicker game on Android: you tap, the score grows, upgrades unlock. The genre is simple, and that's exactly why it's good for practice — you can focus on mobile-platform development itself.", "Game logic, state, saves — a basic but useful set of tasks."],
      uk: ["Гра-клікер на Android: тиснеш — росте рахунок, відкриваються покращення. Жанр простий, і саме тому добрий для практики.", "Ігрова логіка, стан, збереження — базовий, але корисний набір завдань."],
    },
  },
];
