/* Android-приложения */
module.exports = [
  {
    id: "notifications-notebook", name: "Notifications Notebook", aka: "Журнал уведомлений",
    category: "android", status: "done", year: 2025, featured: true,
    langs: ["Java", "Android"], tags: ["Android", "Уведомления", "Логирование", "NotificationListener"],
    github: "https://github.com/AlexMelanFromRingo/Notifications-Notebook",
    short: {
      ru: "Android-приложение, которое сохраняет логи всех входящих уведомлений на телефоне.",
      en: "An Android app that saves a log of every incoming notification on the phone.",
      uk: "Android-застосунок, що зберігає логи всіх вхідних сповіщень на телефоні.",
    },
    body: {
      ru: [
        "Уведомления на телефоне постоянно исчезают: смахнул случайно — и уже не вспомнишь, что там было, от кого и когда. Особенно обидно с сообщениями, которые приложение быстро удаляет само.",
        "Это приложение через системную службу NotificationListener перехватывает все входящие уведомления и складывает их в журнал: текст, приложение-источник, время. Можно вернуться и спокойно посмотреть, что приходило, даже если оригинал давно пропал.",
        "Полезно и просто как памятка, и чтобы поймать уведомления-однодневки. Один из моих проектов, где я разбирался с системными API Android и работой в фоне.",
      ],
      en: [
        "Notifications on a phone constantly vanish: swipe one away by accident and you can no longer recall what it said, from whom and when. It's especially annoying with messages an app quickly deletes itself.",
        "This app, via the system NotificationListener service, intercepts all incoming notifications and files them into a log: text, source app, time. You can go back and calmly review what arrived, even if the original is long gone.",
        "Useful both as a simple reminder and for catching one-off notifications. One of my projects where I worked through Android's system APIs and background operation.",
      ],
      uk: [
        "Сповіщення на телефоні постійно зникають: змахнув випадково — і вже не згадаєш, що там було.",
        "Цей застосунок через системну службу NotificationListener перехоплює всі вхідні сповіщення й складає їх у журнал: текст, застосунок-джерело, час.",
        "Корисно як пам'ятка і щоб упіймати сповіщення-одноденки. Один із проєктів, де я розбирався із системними API Android.",
      ],
    },
    features: {
      ru: ["Перехват всех уведомлений через NotificationListener", "Журнал: текст, приложение-источник, время", "Ловит даже быстро удаляемые уведомления", "Работа в фоне с системными API Android"],
      en: ["Intercepts all notifications via NotificationListener", "A log: text, source app, time", "Catches even quickly deleted notifications", "Background operation with Android system APIs"],
      uk: ["Перехоплення всіх сповіщень через NotificationListener", "Журнал: текст, застосунок-джерело, час", "Ловить навіть швидко видалені сповіщення", "Робота у фоні із системними API Android"],
    },
  },
  {
    id: "lightwatch", name: "LightWatch", aka: "Мониторинг света",
    category: "android", status: "done", year: 2026,
    langs: ["Java", "Android"], tags: ["Android", "Энергетика", "Мониторинг", "Графики отключений"],
    github: "https://github.com/AlexMelanFromRingo/Light-Watch",
    short: {
      ru: "Android-приложение для отслеживания наличия электричества по группе отключений пользователя.",
      en: "An Android app for tracking electricity availability by the user's outage group.",
      uk: "Android-застосунок для відстеження наявності електрики за групою відключень користувача.",
    },
    body: {
      ru: [
        "Ещё один проект, рождённый украинскими реалиями. Из-за обстрелов энергосистемы графики отключений света стали частью быта, и каждый адрес относится к своей группе со своим расписанием.",
        "LightWatch знает группу отключений по адресу пользователя и показывает главное: есть свет сейчас или нет и когда ожидается следующее окно. Не нужно держать в голове расписание или искать его каждый раз вручную.",
        "Когда график отключений — это повседневность, такое приложение реально облегчает планирование дня: понятно, когда успеть зарядить технику, постирать, поработать.",
      ],
      en: [
        "Another project born of Ukrainian reality. Because of strikes on the power grid, outage schedules have become part of daily life, and each address belongs to its own group with its own schedule.",
        "LightWatch knows the user's outage group by address and shows the main thing: whether there's electricity now and when the next window is expected. No need to keep the schedule in your head or look it up by hand every time.",
        "When an outage schedule is everyday life, an app like this genuinely makes planning the day easier: it's clear when to charge devices, do laundry, get work done.",
      ],
      uk: [
        "Ще один проєкт, народжений українськими реаліями. Через обстріли енергосистеми графіки відключень стали частиною побуту.",
        "LightWatch знає групу відключень за адресою користувача й показує головне: чи є світло зараз і коли наступне вікно.",
        "Коли графік відключень — це повсякденність, такий застосунок справді полегшує планування дня.",
      ],
    },
    features: {
      ru: ["Определение группы отключений по адресу", "Статус «есть свет / нет» в реальном времени", "Прогноз ближайшего окна со светом", "Помогает планировать день без расписания в голове"],
      en: ["Detects the outage group by address", "Real-time 'power on / off' status", "Forecast of the next window with electricity", "Helps plan the day without keeping a schedule in mind"],
      uk: ["Визначення групи відключень за адресою", "Статус «є світло / немає» у реальному часі", "Прогноз найближчого вікна зі світлом", "Допомагає планувати день"],
    },
  },
  {
    id: "sav", name: "Simple Android Vibration", aka: "SAV",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "API", "Vibrator"],
    github: "https://github.com/AlexMelanFromRingo/SAV",
    short: {
      ru: "Простое Android-приложение для работы с вибрацией устройства.",
      en: "A simple Android app for working with the device's vibration.",
      uk: "Простий Android-застосунок для роботи з вібрацією пристрою.",
    },
    body: {
      ru: [
        "Маленькое приложение, которое управляет вибромотором телефона: разные паттерны вибрации, длительность, сила. Идея простая, но за ней — конкретный системный API Android (Vibrator), с которым нужно уметь работать.",
        "Такие маленькие приложения — кирпичики: на каждом разбираешь одну подсистему платформы. SAV — это про вибрацию, другие мои Android-проекты — про уведомления, нейросети, кошельки.",
        "По кирпичику из таких вещей и складывается понимание того, как устроена мобильная разработка.",
      ],
      en: [
        "A small app that controls the phone's vibration motor: different vibration patterns, duration, intensity. The idea is simple, but behind it is a specific Android system API (Vibrator) you need to know how to handle.",
        "Small apps like this are building blocks: each one teaches you one subsystem of the platform. SAV is about vibration, my other Android projects are about notifications, neural networks, wallets.",
        "Brick by brick, an understanding of how mobile development works is assembled from things like this.",
      ],
      uk: [
        "Маленький застосунок, що керує вібромотором телефону: різні патерни, тривалість, сила. За ним — конкретний системний API Android (Vibrator).",
        "Такі маленькі застосунки — цеглинки: на кожному розбираєш одну підсистему платформи.",
        "По цеглинці з таких речей і складається розуміння мобільної розробки.",
      ],
    },
    features: {
      ru: ["Управление вибромотором: паттерны, длительность, сила", "Работа с системным API Vibrator", "Простой учебный проект под Android", "Кирпичик в освоении мобильной платформы"],
      en: ["Controls the vibration motor: patterns, duration, intensity", "Works with the Vibrator system API", "A simple learning project for Android", "A building block in learning the mobile platform"],
      uk: ["Керування вібромотором: патерни, тривалість, сила", "Робота із системним API Vibrator", "Простий навчальний проєкт під Android", "Цеглинка в освоєнні мобільної платформи"],
    },
  },
  {
    id: "btc-wallet-android", name: "Bitcoin Wallet", aka: "Кошелёк для Android",
    category: "android", status: "done", year: 2025,
    langs: ["Kotlin", "Android"], tags: ["Android", "Bitcoin", "Кошелёк", "Kotlin"],
    github: "https://github.com/AlexMelanFromRingo/BTCWallet",
    short: {
      ru: "Android-кошелёк для Bitcoin — мобильное приложение для работы с криптовалютой.",
      en: "An Android Bitcoin wallet — a mobile app for working with cryptocurrency.",
      uk: "Android-гаманець для Bitcoin — мобільний застосунок для роботи з криптовалютою.",
    },
    body: {
      ru: [
        "Криптокошелёк на телефоне: генерация ключей, адреса, базовые операции с биткоином — всё на Kotlin под Android. Здесь сошлись две мои постоянные темы — мобильная разработка и криптовалюты.",
        "Проект пережил несколько итераций (BitcoinWallet, BitcoinWallet2, BTCWallet) — каждая аккуратнее работала с ключами и хранением. Кошелёк — это в первую очередь безопасность: приватные ключи должны генерироваться правильно и не утекать.",
        "Сделать кошелёк значит на практике разобрать всю цепочку — от энтропии и мнемоники до адреса, — но уже на мобильной платформе с её ограничениями и требованиями к хранению секретов.",
      ],
      en: [
        "A crypto wallet on a phone: key generation, addresses, basic Bitcoin operations — all in Kotlin for Android. Here two of my constant themes converge — mobile development and cryptocurrencies.",
        "The project went through several iterations (BitcoinWallet, BitcoinWallet2, BTCWallet), each handling keys and storage more carefully. A wallet is first of all security: private keys must be generated correctly and never leak.",
        "Building a wallet means working through the whole chain in practice — from entropy and mnemonic to address — but now on a mobile platform with its constraints and secret-storage requirements.",
      ],
      uk: [
        "Криптогаманець на телефоні: генерація ключів, адреси, базові операції з біткоїном — усе на Kotlin під Android.",
        "Проєкт пережив кілька ітерацій — кожна акуратніше працювала з ключами та зберіганням. Гаманець — це передусім безпека.",
        "Зробити гаманець означає на практиці розібрати весь ланцюжок — від ентропії та мнемоніки до адреси.",
      ],
    },
    features: {
      ru: ["Генерация ключей и адресов Bitcoin", "Базовые операции с криптовалютой на телефоне", "Несколько итераций с упором на хранение ключей", "Написан на Kotlin под Android"],
      en: ["Bitcoin key and address generation", "Basic cryptocurrency operations on a phone", "Several iterations focused on key storage", "Written in Kotlin for Android"],
      uk: ["Генерація ключів та адрес Bitcoin", "Базові операції з криптовалютою на телефоні", "Кілька ітерацій з акцентом на зберігання ключів", "Написаний на Kotlin під Android"],
    },
  },
  {
    id: "mnist-android", name: "MNIST Neural", aka: "Нейросеть на телефоне",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "Нейросети", "MNIST", "On-device"],
    short: {
      ru: "Android-приложение, которое распознаёт рукописные цифры нейросетью прямо на телефоне.",
      en: "An Android app that recognizes handwritten digits with a neural network right on the phone.",
      uk: "Android-застосунок, що розпізнає рукописні цифри нейромережею прямо на телефоні.",
    },
    body: {
      ru: [
        "Классическая задача MNIST — распознавание рукописных цифр — но запущенная прямо на Android. Рисуешь цифру пальцем на экране, и нейросеть на устройстве говорит, что это за цифра.",
        "Главное здесь — модель работает локально, без сервера и без интернета. Все вычисления нейросети идут на мобильном железе, что отдельно интересно: телефон слабее десктопа, и нужно уложиться в его ресурсы.",
        "Проект соединяет две темы — машинное обучение и мобильную разработку — и показывает, что нейросети не обязательно живут в облаке.",
      ],
      en: [
        "The classic MNIST task — recognizing handwritten digits — but running right on Android. You draw a digit with your finger on the screen, and the on-device neural network tells you which digit it is.",
        "The key thing here is that the model runs locally, with no server and no internet. All neural-network computation happens on mobile hardware, which is separately interesting: a phone is weaker than a desktop, and you have to fit within its resources.",
        "The project connects two themes — machine learning and mobile development — and shows that neural networks don't have to live in the cloud.",
      ],
      uk: [
        "Класична задача MNIST — розпізнавання рукописних цифр — але запущена прямо на Android. Малюєш цифру пальцем, нейромережа на пристрої її впізнає.",
        "Головне тут — модель працює локально, без сервера та інтернету. Усі обчислення йдуть на мобільному залізі.",
        "Проєкт поєднує машинне навчання та мобільну розробку.",
      ],
    },
    features: {
      ru: ["Распознавание рукописных цифр (задача MNIST)", "Рисование цифры пальцем на экране", "Инференс нейросети локально на устройстве", "Работает без сервера и интернета"],
      en: ["Handwritten-digit recognition (the MNIST task)", "Drawing a digit with a finger on screen", "Neural-network inference locally on the device", "Works with no server and no internet"],
      uk: ["Розпізнавання рукописних цифр (задача MNIST)", "Малювання цифри пальцем на екрані", "Інференс нейромережі локально на пристрої", "Працює без сервера та інтернету"],
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
      ru: [
        "Эксперимент с тем, как простая нейросеть ведёт себя на телефоне. Это пара к MNIST Neural, но здесь упор не на конкретную задачу распознавания, а на саму механику сети — как она устроена и считается на мобильном железе.",
        "Мобильное устройство как площадка для машинного обучения — отдельный интересный вызов: ограничены и память, и вычислительная мощность, и батарея. Что легко на десктопе, на телефоне требует аккуратности.",
        "Из таких учебных приложений складывается понимание, где проходит граница возможного для on-device ML.",
      ],
      en: [
        "An experiment with how a simple neural network behaves on a phone. It's a companion to MNIST Neural, but here the focus isn't on a specific recognition task — it's on the network mechanics themselves, how it's built and computed on mobile hardware.",
        "A mobile device as an ML platform is its own interesting challenge: memory, compute power and battery are all limited. What's easy on a desktop takes care on a phone.",
        "Learning apps like this build an understanding of where the limit of the possible lies for on-device ML.",
      ],
      uk: [
        "Експеримент із тим, як проста нейромережа поводиться на телефоні. Пара до MNIST Neural, але з акцентом на саму механіку мережі.",
        "Мобільний пристрій як майданчик для ML — окремий виклик: обмежені пам'ять, потужність і батарея.",
        "Із таких навчальних застосунків складається розуміння меж on-device ML.",
      ],
    },
    features: {
      ru: ["Простая нейросеть, работающая на телефоне", "Упор на механику сети, а не конкретную задачу", "Эксперимент с ограничениями мобильного железа", "Пара к проекту MNIST Neural"],
      en: ["A simple neural network running on a phone", "Focus on network mechanics, not a specific task", "An experiment with mobile-hardware limits", "A companion to the MNIST Neural project"],
      uk: ["Проста нейромережа, що працює на телефоні", "Акцент на механіці мережі, а не конкретній задачі", "Експеримент з обмеженнями мобільного заліза", "Пара до проєкту MNIST Neural"],
    },
  },
  {
    id: "clicker-game", name: "Clicker Game", aka: "Игра-кликер",
    category: "android", status: "done", year: 2025,
    langs: ["Java", "Android"], tags: ["Android", "Игра", "Геймдев"],
    short: {
      ru: "Простая мобильная игра-кликер для Android.",
      en: "A simple mobile clicker game for Android.",
      uk: "Проста мобільна гра-клікер для Android.",
    },
    body: {
      ru: [
        "Игра-кликер на Android: жмёшь по экрану — растёт счёт, на накопленное открываются улучшения, которые ускоряют рост дальше. Жанр предельно простой, и именно поэтому он хорош для практики.",
        "Когда геймплей не отвлекает, можно сосредоточиться на самой разработке под мобильную платформу: игровой цикл, состояние, сохранение прогресса между запусками, отрисовка интерфейса.",
        "Маленький, но цельный проект — с понятным началом и концом, доведённый до играбельного состояния.",
      ],
      en: [
        "A clicker game on Android: you tap the screen, the score grows, and what you accumulate unlocks upgrades that speed the growth up further. The genre is as simple as it gets, and that's exactly why it's good for practice.",
        "When the gameplay doesn't distract, you can focus on mobile-platform development itself: the game loop, state, saving progress between launches, drawing the interface.",
        "A small but whole project — with a clear beginning and end, taken to a playable state.",
      ],
      uk: [
        "Гра-клікер на Android: тиснеш по екрану — росте рахунок, на накопичене відкриваються покращення.",
        "Коли геймплей не відволікає, можна зосередитися на самій розробці під мобільну платформу: ігровий цикл, стан, збереження прогресу.",
        "Маленький, але цілісний проєкт, доведений до грабельного стану.",
      ],
    },
    features: {
      ru: ["Кликерный геймплей с системой улучшений", "Игровой цикл и состояние под Android", "Сохранение прогресса между запусками", "Маленький, но законченный проект"],
      en: ["Clicker gameplay with an upgrade system", "Game loop and state for Android", "Progress saving between launches", "A small but finished project"],
      uk: ["Клікерний геймплей із системою покращень", "Ігровий цикл і стан під Android", "Збереження прогресу між запусками", "Маленький, але завершений проєкт"],
    },
  },
];
