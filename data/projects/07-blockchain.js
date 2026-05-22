/* Блокчейн и криптовалюты */
module.exports = [
  {
    id: "micro-blockchain", name: "MicroChain", aka: "Минимальный блокчейн",
    category: "blockchain", status: "done", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Блокчейн", "UTXO", "BLAKE3", "secp256k1", "TUI"],
    github: "https://github.com/AlexMelanFromRingo/micro_blockchain",
    short: {
      ru: "Минимальный UTXO-блокчейн и криптовалюта на Rust — компактно и понятно, с TUI-кошельком.",
      en: "A minimal UTXO blockchain and cryptocurrency in Rust — compact and clear, with a TUI wallet.",
      uk: "Мінімальний UTXO-блокчейн і криптовалюта на Rust — компактно й зрозуміло, з TUI-гаманцем.",
    },
    body: {
      ru: [
        "Полноценная криптовалюта на UTXO-модели, написанная на Rust с упором на компактность и наглядность. Рассчитана работать в широком диапазоне — от Raspberry Pi до обычного десктопа.",
        "Каждое техническое решение здесь осознанное и объяснённое. Хеширование везде на BLAKE3 — он быстр на 32-битных ARM. Подписи на secp256k1 со сжатыми ключами. Адреса в формате Bech32m с обнаружением ошибок. Пересчёт сложности по алгоритму LWMA на каждый блок. Хранение — встроенная база sled, без конфигурации.",
        "Мнемоники намеренно сделаны не как в Bitcoin (своя контрольная сумма на BLAKE3) — чтобы случайно не перепутать кошельки. В комплекте — терминальный кошелёк в тёмной теме, вдохновлённой Blockstream Green.",
      ],
      en: [
        "A full UTXO-model cryptocurrency written in Rust with a focus on compactness and clarity. Designed to run across a wide range — from a Raspberry Pi to an ordinary desktop.",
        "Every technical decision here is deliberate and explained. BLAKE3 hashing everywhere — it's fast on 32-bit ARM. secp256k1 signatures with compressed keys. Bech32m addresses with error detection. Per-block difficulty retargeting via the LWMA algorithm. Storage via the embedded sled database, zero-config.",
        "Mnemonics are deliberately non-Bitcoin (a custom BLAKE3 checksum) — to avoid accidentally confusing wallets. It ships with a terminal wallet in a dark theme inspired by Blockstream Green.",
      ],
      uk: [
        "Повноцінна криптовалюта на UTXO-моделі, написана на Rust з акцентом на компактність і наочність.",
        "Кожне рішення усвідомлене: хешування на BLAKE3, підписи на secp256k1, адреси Bech32m, перерахунок складності за LWMA, зберігання у вбудованій базі sled.",
        "Мнемоніки навмисно не як у Bitcoin. У комплекті — термінальний гаманець у стилі Blockstream Green.",
      ],
    },
    features: {
      ru: ["UTXO-модель, как в Bitcoin", "Хеширование BLAKE3 — быстро на 32-битных ARM", "Подписи secp256k1, адреса Bech32m с детектом ошибок", "Пересчёт сложности LWMA на каждый блок", "Встроенная база sled — хранение без конфигурации", "Терминальный кошелёк в стиле Blockstream Green"],
      en: ["UTXO model, like Bitcoin", "BLAKE3 hashing — fast on 32-bit ARM", "secp256k1 signatures, Bech32m addresses with error detection", "Per-block LWMA difficulty retargeting", "Embedded sled database — zero-config storage", "A terminal wallet in Blockstream-Green style"],
      uk: ["UTXO-модель, як у Bitcoin", "Хешування BLAKE3 — швидко на 32-бітних ARM", "Підписи secp256k1, адреси Bech32m з детектом помилок", "Перерахунок складності LWMA на кожен блок", "Вбудована база sled — зберігання без конфігурації", "Термінальний гаманець у стилі Blockstream Green"],
    },
  },
  {
    id: "scam", name: "Project S.C.A.M.", aka: "Своя криптовалюта",
    category: "blockchain", status: "active", year: 2025, featured: true,
    langs: ["Rust", "Python"], tags: ["Криптовалюта", "Блокчейн", "P2P", "Кошелёк"],
    github: "https://github.com/AlexMelanFromRingo/SCAM",
    short: {
      ru: "Собственная криптовалюта с максимально простым функционалом — чтобы разобрался даже новичок.",
      en: "My own cryptocurrency with deliberately simple functionality — so even a beginner can grasp it.",
      uk: "Власна криптовалюта з максимально простим функціоналом — щоб розібрався навіть новачок.",
    },
    body: {
      ru: [
        "Моя собственная криптовалюта, сделанная с одной главной целью — быть понятной. Большие блокчейн-проекты тонут в сложности, и новичку в них не разобраться.",
        "Здесь всё сведено к самой сути: блокчейн, кошельки, сеть из узлов, транзакции — ничего лишнего. Название выбрано с самоиронией: «S.C.A.M.» честно намекает, что это учебный проект, а не способ разбогатеть.",
        "Проект существует в двух воплощениях — на Python для наглядности и на Rust для надёжности. Вокруг него выросла отдельная библиотека CustomBIP32Utils для иерархических кошельков. Это мой главный учебный заход в то, как криптовалюты устроены изнутри.",
      ],
      en: [
        "My own cryptocurrency, built with one main goal — to be understandable. Big blockchain projects drown in complexity, and a beginner can't make sense of them.",
        "Here everything is boiled down to the essentials: a blockchain, wallets, a network of nodes, transactions — nothing extra. The name is self-ironic: 'S.C.A.M.' honestly hints this is a learning project, not a way to get rich.",
        "The project exists in two incarnations — Python for clarity and Rust for reliability. A separate library, CustomBIP32Utils, for hierarchical wallets grew around it. It's my main learning dive into how cryptocurrencies work from the inside.",
      ],
      uk: [
        "Моя власна криптовалюта, зроблена з однією метою — бути зрозумілою.",
        "Тут усе зведено до суті: блокчейн, гаманці, мережа вузлів, транзакції. Назва обрана з самоіронією.",
        "Проєкт існує у двох втіленнях — Python і Rust. Навколо нього виросла бібліотека CustomBIP32Utils.",
      ],
    },
    features: {
      ru: ["Собственная криптовалюта с минимальным функционалом", "Блокчейн, кошельки, P2P-сеть узлов, транзакции", "Две реализации: Python для наглядности, Rust для надёжности", "Вокруг выросла библиотека CustomBIP32Utils", "Учебный проект — понятный даже новичку"],
      en: ["A custom cryptocurrency with minimal functionality", "Blockchain, wallets, a P2P node network, transactions", "Two implementations: Python for clarity, Rust for reliability", "The CustomBIP32Utils library grew around it", "A learning project — understandable even to a beginner"],
      uk: ["Власна криптовалюта з мінімальним функціоналом", "Блокчейн, гаманці, P2P-мережа вузлів, транзакції", "Дві реалізації: Python і Rust", "Навколо виросла бібліотека CustomBIP32Utils", "Навчальний проєкт — зрозумілий навіть новачку"],
    },
  },
  {
    id: "bip39-gpu", name: "BIP39 GPU", aka: "Мнемоники на GPU",
    category: "blockchain", status: "done", year: 2026, featured: true,
    langs: ["Python", "OpenCL"], tags: ["BIP39", "GPU", "OpenCL", "Кошельки"],
    github: "https://github.com/AlexMelanFromRingo/BIP39-GPU",
    short: {
      ru: "Библиотека и CLI для работы с мнемоническими фразами BIP39 с ускорением на GPU через OpenCL.",
      en: "A library and CLI for BIP39 mnemonic phrases with GPU acceleration via OpenCL.",
      uk: "Бібліотека та CLI для роботи з мнемонічними фразами BIP39 з прискоренням на GPU через OpenCL.",
    },
    body: {
      ru: [
        "BIP39 — стандарт мнемонических фраз, которыми защищены криптокошельки: набор из 12, 15, 18, 21 или 24 слов вместо нечитаемого ключа.",
        "Эта библиотека умеет всё нужное: генерировать такие фразы, проверять их контрольную сумму, преобразовывать в зерно кошелька. Работа идёт и на процессоре, и с ускорением на видеокарте через OpenCL — когда нужно обрабатывать большие объёмы.",
        "Опубликована как полноценная Python-библиотека с CLI, документацией на GitHub Pages и набором из 128 проходящих тестов. Хороший пример проекта, доведённого до состояния готового релиза.",
      ],
      en: [
        "BIP39 is the mnemonic-phrase standard that protects crypto wallets: a set of 12, 15, 18, 21 or 24 words instead of an unreadable key.",
        "This library does everything needed: generate such phrases, verify their checksum, convert them into a wallet seed. It works both on the CPU and GPU-accelerated via OpenCL — when large volumes need processing.",
        "Published as a full Python library with a CLI, documentation on GitHub Pages and a suite of 128 passing tests. A good example of a project taken all the way to a finished release.",
      ],
      uk: [
        "BIP39 — стандарт мнемонічних фраз, якими захищені криптогаманці: 12, 15, 18, 21 чи 24 слова замість нечитабельного ключа.",
        "Ця бібліотека вміє генерувати фрази, перевіряти контрольну суму, перетворювати на зерно. Працює і на CPU, і на GPU через OpenCL.",
        "Опублікована як повноцінна Python-бібліотека з CLI, документацією та 128 тестами.",
      ],
    },
    features: {
      ru: ["Генерация мнемоник BIP39 (12-24 слова)", "Проверка контрольной суммы фразы", "Преобразование мнемоники в зерно кошелька", "Ускорение на GPU через OpenCL", "Python-библиотека с CLI и 128 тестами"],
      en: ["BIP39 mnemonic generation (12-24 words)", "Phrase checksum verification", "Converting a mnemonic to a wallet seed", "GPU acceleration via OpenCL", "A Python library with a CLI and 128 tests"],
      uk: ["Генерація мнемонік BIP39 (12-24 слова)", "Перевірка контрольної суми фрази", "Перетворення мнемоніки на зерно гаманця", "Прискорення на GPU через OpenCL", "Python-бібліотека з CLI та 128 тестами"],
    },
  },
  {
    id: "custombip32", name: "CustomBIP32Utils", aka: "Иерархические кошельки",
    category: "blockchain", status: "done", year: 2025,
    langs: ["Python"], tags: ["BIP32", "HD-кошельки", "Криптовалюта"],
    github: "https://github.com/AlexMelanFromRingo/CustomBIP32Utils",
    short: {
      ru: "Библиотека генерации иерархических детерминированных кошельков (BIP32), адаптированная под Project S.C.A.M.",
      en: "A library for generating hierarchical deterministic wallets (BIP32), adapted for Project S.C.A.M.",
      uk: "Бібліотека генерації ієрархічних детермінованих гаманців (BIP32), адаптована під Project S.C.A.M.",
    },
    body: {
      ru: [
        "BIP32 — стандарт иерархических детерминированных кошельков. Его суть: из одного начального секрета можно вывести целое дерево ключей и адресов, и всё это восстанавливается из одной мнемоники.",
        "Эта библиотека реализует деривацию по BIP32 и специально адаптирована под мою криптовалюту Project S.C.A.M. — с её параметрами адресов и форматов.",
        "Из работы над собственной криптовалютой неизбежно вырастает глубокое понимание того, как устроены кошельки на уровне ключей и деривации — эта библиотека и есть результат такого погружения.",
      ],
      en: [
        "BIP32 is the standard for hierarchical deterministic wallets. Its essence: from a single seed secret you can derive a whole tree of keys and addresses, all recoverable from one mnemonic.",
        "This library implements BIP32 derivation and is specifically adapted for my Project S.C.A.M. cryptocurrency — with its address parameters and formats.",
        "Working on your own cryptocurrency inevitably grows a deep understanding of how wallets work at the level of keys and derivation — this library is the result of that dive.",
      ],
      uk: [
        "BIP32 — стандарт ієрархічних детермінованих гаманців: з одного секрету виводиться ціле дерево ключів і адрес.",
        "Ця бібліотека реалізує деривацію BIP32 і адаптована під мою криптовалюту Project S.C.A.M.",
        "З роботи над власною криптовалютою неминуче виростає розуміння того, як влаштовані гаманці.",
      ],
    },
    features: {
      ru: ["Деривация иерархических кошельков по BIP32", "Дерево ключей и адресов из одной мнемоники", "Адаптация под параметры Project S.C.A.M.", "Реализация на Python"],
      en: ["BIP32 hierarchical-wallet derivation", "A tree of keys and addresses from one mnemonic", "Adapted to Project S.C.A.M. parameters", "Implemented in Python"],
      uk: ["Деривація ієрархічних гаманців за BIP32", "Дерево ключів і адрес з однієї мнемоніки", "Адаптація під параметри Project S.C.A.M.", "Реалізація на Python"],
    },
  },
  {
    id: "hd-wallets", name: "HD Wallets", aka: "HD-кошельки на Python",
    category: "blockchain", status: "done", year: 2026,
    langs: ["Python"], tags: ["HD-кошельки", "BIP32", "Криптография"],
    github: "https://github.com/AlexMelanFromRingo/hd-wallets",
    short: {
      ru: "Реализация иерархически-детерминированных кошельков на чистом Python.",
      en: "An implementation of hierarchical deterministic wallets in pure Python.",
      uk: "Реалізація ієрархічно-детермінованих гаманців на чистому Python.",
    },
    body: {
      ru: [
        "Чистая Python-реализация HD-кошельков — без сторонних криптобиблиотек, вся математика написана вручную.",
        "Это хороший способ окончательно разложить по полочкам всю цепочку: как из энтропии получается мнемоника, из мнемоники — зерно, из зерна — мастер-ключ, а из него дерево дочерних ключей и адресов.",
        "Развитие темы CustomBIP32Utils, но уже как самостоятельный аккуратный проект — с акцентом на понятность каждого шага.",
      ],
      en: [
        "A pure-Python implementation of HD wallets — no third-party crypto libraries, all the maths written by hand.",
        "It's a good way to finally lay out the whole chain step by step: how a mnemonic comes from entropy, a seed from the mnemonic, a master key from the seed, and a tree of child keys and addresses from that.",
        "A continuation of the CustomBIP32Utils theme, but as a standalone, tidy project — with a focus on the clarity of every step.",
      ],
      uk: [
        "Чиста Python-реалізація HD-гаманців — без сторонніх криптобібліотек, уся математика вручну.",
        "Гарний спосіб розкласти по поличках весь ланцюжок: ентропія → мнемоніка → зерно → майстер-ключ → дерево ключів.",
        "Розвиток теми CustomBIP32Utils як самостійний акуратний проєкт.",
      ],
    },
    features: {
      ru: ["HD-кошельки на чистом Python без криптобиблиотек", "Вся цепочка: энтропия → мнемоника → зерно → ключи", "Акцент на понятность каждого шага", "Развитие темы CustomBIP32Utils"],
      en: ["HD wallets in pure Python with no crypto libraries", "The whole chain: entropy → mnemonic → seed → keys", "A focus on the clarity of every step", "A continuation of the CustomBIP32Utils theme"],
      uk: ["HD-гаманці на чистому Python без криптобібліотек", "Весь ланцюжок: ентропія → мнемоніка → зерно → ключі", "Акцент на зрозумілість кожного кроку", "Розвиток теми CustomBIP32Utils"],
    },
  },
  {
    id: "javabip", name: "JavaBIP", aka: "BIP на Java",
    category: "blockchain", status: "done", year: 2024,
    langs: ["Java"], tags: ["BIP39", "Мнемоники", "Кошельки"],
    short: {
      ru: "Реализация стандартов BIP для работы с криптокошельками на Java.",
      en: "An implementation of the BIP crypto-wallet standards in Java.",
      uk: "Реалізація стандартів BIP для роботи з криптогаманцями на Java.",
    },
    body: {
      ru: [
        "Работа со стандартами BIP — генерация мнемоник, деривация ключей — но реализованная на Java.",
        "Я люблю реализовывать одну и ту же идею на разных языках: так понимаешь и саму идею глубже, и сильные стороны каждого языка. BIP-стандарты у меня есть на Python, Rust и вот на Java.",
        "Часть моей большой темы вокруг криптокошельков — рядом с CustomBIP32Utils, hd-wallets и BIP39-GPU.",
      ],
      en: [
        "Working with the BIP standards — mnemonic generation, key derivation — but implemented in Java.",
        "I like implementing the same idea in different languages: it teaches you both the idea more deeply and each language's strengths. I have the BIP standards in Python, Rust and now Java.",
        "Part of my larger theme around crypto wallets — alongside CustomBIP32Utils, hd-wallets and BIP39-GPU.",
      ],
      uk: [
        "Робота зі стандартами BIP — генерація мнемонік, деривація ключів — реалізована на Java.",
        "Я люблю реалізовувати одну ідею різними мовами. BIP-стандарти в мене є на Python, Rust і Java.",
        "Частина моєї великої теми навколо криптогаманців.",
      ],
    },
    features: {
      ru: ["Стандарты BIP на языке Java", "Генерация мнемоник и деривация ключей", "Одна идея, реализованная на разных языках", "Часть набора проектов вокруг криптокошельков"],
      en: ["The BIP standards in Java", "Mnemonic generation and key derivation", "One idea implemented across different languages", "Part of the crypto-wallet project set"],
      uk: ["Стандарти BIP мовою Java", "Генерація мнемонік і деривація ключів", "Одна ідея, реалізована різними мовами", "Частина набору проєктів навколо криптогаманців"],
    },
  },
  {
    id: "mnemonicgen", name: "Mnemonic Generator", aka: "Генератор мнемоник",
    category: "blockchain", status: "concept", year: 2024,
    langs: ["Java", "Rust"], tags: ["BIP39", "Мнемоники"],
    short: {
      ru: "Генератор мнемонических фраз BIP39 — на Java и на Rust.",
      en: "A BIP39 mnemonic-phrase generator — in Java and Rust.",
      uk: "Генератор мнемонічних фраз BIP39 — на Java і на Rust.",
    },
    body: {
      ru: [
        "Генерация корректных мнемонических фраз BIP39: набирается энтропия, к ней добавляется контрольная сумма, и всё это превращается в осмысленный набор слов из словаря.",
        "Реализовано на двух языках — Java и Rust — как ещё одно сравнение того, как одна задача ложится на разные платформы.",
        "Маленький, но фундаментальный кирпичик для любого проекта с криптокошельками. Статус — прототип: рабочая основа, которую можно доводить дальше.",
      ],
      en: [
        "Generating valid BIP39 mnemonic phrases: entropy is gathered, a checksum is added to it, and all of it is turned into a meaningful set of words from the wordlist.",
        "Implemented in two languages — Java and Rust — as another comparison of how one task maps onto different platforms.",
        "A small but fundamental building block for any crypto-wallet project. Status — prototype: a working base that can be developed further.",
      ],
      uk: [
        "Генерація коректних мнемонічних фраз BIP39: ентропія, контрольна сума, перетворення на слова.",
        "Реалізовано двома мовами — Java і Rust.",
        "Маленький, але фундаментальний цеглинка. Статус — прототип.",
      ],
    },
    features: {
      ru: ["Генерация корректных мнемоник BIP39", "Энтропия, контрольная сумма, набор слов", "Две реализации: Java и Rust", "Статус — прототип"],
      en: ["Generation of valid BIP39 mnemonics", "Entropy, checksum, a set of words", "Two implementations: Java and Rust", "Status — prototype"],
      uk: ["Генерація коректних мнемонік BIP39", "Ентропія, контрольна сума, набір слів", "Дві реалізації: Java і Rust", "Статус — прототип"],
    },
  },
  {
    id: "ton-wallet", name: "TON Wallet Utils", aka: "Утилиты для TON",
    category: "blockchain", status: "done", year: 2024,
    langs: ["Python"], tags: ["TON", "Адреса", "Конвертер"],
    short: {
      ru: "Набор утилит для работы с адресами кошельков сети TON, включая конвертацию форматов.",
      en: "A set of utilities for working with TON-network wallet addresses, including format conversion.",
      uk: "Набір утиліт для роботи з адресами гаманців мережі TON, зокрема конвертація форматів.",
    },
    body: {
      ru: [
        "TON хранит адреса кошельков в нескольких разных форматах, и переводить их между собой вручную неудобно и легко ошибиться.",
        "Этот набор утилит делает конвертацию форматов и базовые операции с адресами автоматически. Есть и вариант для командной строки, и веб-версия — смотря что удобнее в конкретный момент.",
        "Практический инструмент, выросший из работы с экосистемой TON — из реальной потребности постоянно жонглировать форматами адресов.",
      ],
      en: [
        "TON stores wallet addresses in several different formats, and converting them by hand is awkward and easy to get wrong.",
        "This set of utilities does format conversion and basic address operations automatically. There's both a command-line variant and a web version — whichever is handier at the moment.",
        "A practical tool that grew out of working with the TON ecosystem — from a real need to constantly juggle address formats.",
      ],
      uk: [
        "TON зберігає адреси гаманців у кількох форматах, і перекладати їх вручну незручно.",
        "Цей набір утиліт робить конвертацію форматів автоматично. Є і варіант для командного рядка, і вебверсія.",
        "Практичний інструмент, що виріс із роботи з екосистемою TON.",
      ],
    },
    features: {
      ru: ["Конвертация форматов адресов TON", "Базовые операции с адресами кошельков", "Вариант для CLI и веб-версия", "Вырос из реальной работы с экосистемой TON"],
      en: ["TON address-format conversion", "Basic wallet-address operations", "A CLI variant and a web version", "Grew out of real work with the TON ecosystem"],
      uk: ["Конвертація форматів адрес TON", "Базові операції з адресами гаманців", "Варіант для CLI та вебверсія", "Виріс із реальної роботи з екосистемою TON"],
    },
  },
  {
    id: "btc-addresses", name: "BTC Addresses", aka: "Биткоин-адреса",
    category: "blockchain", status: "concept", year: 2024,
    langs: ["Python", "Rust"], tags: ["Bitcoin", "Адреса", "Криптография"],
    short: {
      ru: "Эксперименты с генерацией и устройством биткоин-адресов.",
      en: "Experiments with the generation and structure of Bitcoin addresses.",
      uk: "Експерименти з генерацією та будовою біткоїн-адрес.",
    },
    body: {
      ru: [
        "Серия экспериментов с тем, как устроены биткоин-адреса. Адрес — это не случайная строка, а результат конкретной цепочки преобразований.",
        "В проекте проходится весь путь: приватный ключ → точка на эллиптической кривой (публичный ключ) → хеширование → кодирование в финальный адрес. Реализовано на Python и на Rust.",
        "Хороший способ прочувствовать криптографию Bitcoin на практике. Статус — прототип: набор рабочих экспериментов, а не законченный продукт.",
      ],
      en: [
        "A series of experiments with how Bitcoin addresses are built. An address isn't a random string but the result of a specific chain of transformations.",
        "The project walks the whole path: private key → a point on the elliptic curve (the public key) → hashing → encoding into the final address. Implemented in Python and Rust.",
        "A good way to feel Bitcoin's cryptography hands-on. Status — prototype: a set of working experiments rather than a finished product.",
      ],
      uk: [
        "Серія експериментів із тим, як влаштовані біткоїн-адреси.",
        "Проходиться весь шлях: приватний ключ → точка на еліптичній кривій → хешування → кодування в адресу. Реалізовано на Python і Rust.",
        "Гарний спосіб відчути криптографію Bitcoin. Статус — прототип.",
      ],
    },
    features: {
      ru: ["Цепочка: приватный ключ → публичный → адрес", "Эллиптическая криптография Bitcoin на практике", "Реализация на Python и Rust", "Статус — прототип, набор экспериментов"],
      en: ["The chain: private key → public key → address", "Bitcoin's elliptic-curve cryptography hands-on", "Implemented in Python and Rust", "Status — prototype, a set of experiments"],
      uk: ["Ланцюжок: приватний ключ → публічний → адреса", "Еліптична криптографія Bitcoin на практиці", "Реалізація на Python і Rust", "Статус — прототип, набір експериментів"],
    },
  },
  {
    id: "deepseek-crypto", name: "DeepSeek Cryptocurrency", aka: "Крипта-эксперимент",
    category: "blockchain", status: "done", year: 2025,
    langs: ["Python", "Flask"], tags: ["Блокчейн", "Эксперимент", "Веб"],
    short: {
      ru: "Экспериментальная криптовалюта с веб-интерфейсом — ещё один заход в тему блокчейна.",
      en: "An experimental cryptocurrency with a web interface — another take on the blockchain theme.",
      uk: "Експериментальна криптовалюта з вебінтерфейсом — ще один захід у тему блокчейна.",
    },
    body: {
      ru: [
        "Небольшая, но законченная экспериментальная криптовалюта: блокчейн, сервер, кошелёк и веб-интерфейс к ним. Транзакции, балансы, история — всё видно через браузер.",
        "Это очередная итерация моих опытов с криптовалютами, и каждая новая попытка устроена аккуратнее предыдущей — здесь добавлен удобный веб-интерфейс вместо голой консоли.",
        "Идёт в одном ряду с Project S.C.A.M. и MicroChain как часть моего пути к пониманию того, как блокчейн работает целиком.",
      ],
      en: [
        "A small but finished experimental cryptocurrency: a blockchain, a server, a wallet and a web interface to them. Transactions, balances, history — all visible through a browser.",
        "It's another iteration of my cryptocurrency experiments, and each new attempt is built a bit more tidily than the last — here a convenient web interface was added instead of a bare console.",
        "It sits alongside Project S.C.A.M. and MicroChain as part of my path to understanding how a blockchain works as a whole.",
      ],
      uk: [
        "Невелика, але завершена експериментальна криптовалюта: блокчейн, сервер, гаманець і вебінтерфейс.",
        "Чергова ітерація моїх дослідів із криптовалютами — кожна акуратніша.",
        "Іде в одному ряду з Project S.C.A.M. і MicroChain.",
      ],
    },
    features: {
      ru: ["Блокчейн, сервер и кошелёк", "Веб-интерфейс для транзакций и балансов", "Очередная итерация опытов с криптовалютами", "Аккуратнее предыдущих заходов"],
      en: ["A blockchain, a server and a wallet", "A web interface for transactions and balances", "Another iteration of cryptocurrency experiments", "Tidier than earlier attempts"],
      uk: ["Блокчейн, сервер і гаманець", "Вебінтерфейс для транзакцій і балансів", "Чергова ітерація дослідів із криптовалютами", "Акуратніша за попередні заходи"],
    },
  },
  {
    id: "blakeout-gpu", name: "Blakeout GPU", aka: "GPU-майнинг для ALFIS",
    category: "blockchain", status: "done", year: 2026,
    langs: ["Rust", "CUDA"], tags: ["Майнинг", "CUDA", "ALFIS", "Blake2s"],
    github: "https://github.com/AlexMelanFromRingo/blakeout-gpu",
    short: {
      ru: "GPU-ускоренный хэш Blakeout для майнинга DNS-блокчейна ALFIS — около 1550 H/s на RTX 4080.",
      en: "A GPU-accelerated Blakeout hash for mining the ALFIS DNS blockchain — about 1550 H/s on an RTX 4080.",
      uk: "GPU-прискорений хеш Blakeout для майнінгу DNS-блокчейна ALFIS — близько 1550 H/s на RTX 4080.",
    },
    body: {
      ru: [
        "ALFIS — децентрализованная DNS на блокчейне, альтернатива обычным доменным именам. Майнить её можно было только на процессоре, что медленно.",
        "Я написал CUDA-реализацию её хэша Blakeout: своя реализация Blake2s прямо на видеокарте плюс цепочка из 65 536 итераций поверх него. Проект — это и CUDA-библиотека, и форк ALFIS, подключённый к ней через cargo-фичу.",
        "Результат — около 1550 хэшей в секунду на RTX 4080, примерно в 3,5 раза быстрее процессора. Корректность GPU-версии проверяется тестом против эталонной CPU-реализации. Проект на стыке блокчейна, криптографии и программирования GPU.",
      ],
      en: [
        "ALFIS is a decentralized blockchain DNS, an alternative to ordinary domain names. It could only be mined on a CPU, which is slow.",
        "I wrote a CUDA implementation of its Blakeout hash: my own Blake2s right on the GPU plus the 65,536-iteration chain on top of it. The project is both a CUDA library and a fork of ALFIS wired to it via a cargo feature.",
        "The result is about 1,550 hashes per second on an RTX 4080, roughly 3.5x faster than CPU. The GPU version's correctness is verified by a test against the reference CPU implementation. A project at the crossroads of blockchain, cryptography and GPU programming.",
      ],
      uk: [
        "ALFIS — децентралізована DNS на блокчейні. Майнити її можна було лише на процесорі.",
        "Я написав CUDA-реалізацію її хешу Blakeout: власний Blake2s на відеокарті плюс ланцюг із 65 536 ітерацій.",
        "Результат — близько 1550 хешів за секунду на RTX 4080, у 3,5 раза швидше за CPU. Коректність перевіряється тестом проти еталонної CPU-реалізації.",
      ],
    },
    features: {
      ru: ["CUDA-реализация хэша Blakeout для блокчейна ALFIS", "Своя реализация Blake2s на видеокарте", "Цепочка из 65 536 итераций хэша", "Около 1550 H/s на RTX 4080 — в 3,5 раза быстрее CPU", "Сверка GPU-версии с эталонной CPU-реализацией"],
      en: ["A CUDA implementation of the Blakeout hash for the ALFIS blockchain", "A custom Blake2s implementation on the GPU", "The 65,536-iteration hash chain", "About 1550 H/s on an RTX 4080 — 3.5x faster than CPU", "GPU version cross-checked against the reference CPU implementation"],
      uk: ["CUDA-реалізація хешу Blakeout для блокчейна ALFIS", "Власна реалізація Blake2s на відеокарті", "Ланцюг із 65 536 ітерацій хешу", "Близько 1550 H/s на RTX 4080 — у 3,5 раза швидше за CPU", "Звірка GPU-версії з еталонною CPU-реалізацією"],
    },
  },
  {
    id: "bitcoin-fork-factory", name: "Bitcoin Fork Factory", aka: "Фабрика форков",
    category: "blockchain", status: "done", year: 2026,
    langs: ["C++"], tags: ["Bitcoin", "Хардфорк", "Автоматизация"],
    github: "https://github.com/AlexMelanFromRingo/bitcoin-fork-factory",
    short: {
      ru: "Инструментарий для автоматизированного создания хардфорков Bitcoin.",
      en: "A toolkit for automated generation of Bitcoin hard forks.",
      uk: "Інструментарій для автоматизованого створення хардфорків Bitcoin.",
    },
    body: {
      ru: [
        "Создать свой форк Bitcoin вручную — это куча однообразной возни с огромной кодовой базой Bitcoin Core: переименовать монету, поменять параметры сети, генезис-блок, награды, пересобрать всё это.",
        "Этот инструментарий автоматизирует процесс: ты описываешь, какой хочешь форк, а на выходе получаешь готовую настроенную сборку.",
        "Чтобы автоматизировать изменение кодовой базы, надо очень хорошо понимать, как она устроена — так что попутно это был хороший способ изучить Bitcoin Core изнутри.",
      ],
      en: [
        "Creating your own Bitcoin fork by hand is a lot of repetitive fiddling with the huge Bitcoin Core codebase: rename the coin, change network parameters, the genesis block, rewards, then rebuild all of it.",
        "This toolkit automates the process: you describe the fork you want, and you get a ready, configured build out.",
        "To automate changing a codebase, you have to understand it very well — so along the way this was a good way to study Bitcoin Core from the inside.",
      ],
      uk: [
        "Створити свій форк Bitcoin вручну — це купа возні з величезною кодовою базою Bitcoin Core.",
        "Цей інструментарій автоматизує процес: описуєш форк — отримуєш готову збірку.",
        "Заразом це був гарний спосіб вивчити Bitcoin Core зсередини.",
      ],
    },
    features: {
      ru: ["Автоматизация создания форков Bitcoin", "Настройка монеты, сети, генезис-блока, наград", "На выходе — готовая собранная сборка", "Глубокое изучение кодовой базы Bitcoin Core"],
      en: ["Automation of Bitcoin fork creation", "Configuring the coin, network, genesis block, rewards", "Outputs a ready, built distribution", "A deep study of the Bitcoin Core codebase"],
      uk: ["Автоматизація створення форків Bitcoin", "Налаштування монети, мережі, генезис-блока, нагород", "На виході — готова зібрана збірка", "Глибоке вивчення кодової бази Bitcoin Core"],
    },
  },
  {
    id: "litecoin-autoforker", name: "Litecoin Autoforker", aka: "Автофоркер Litecoin",
    category: "blockchain", status: "done", year: 2026,
    langs: ["C++"], tags: ["Litecoin", "Хардфорк", "GUI"],
    github: "https://github.com/AlexMelanFromRingo/litecoin-autoforker-private",
    short: {
      ru: "Автоматический форкер Litecoin с полным пайплайном сборки и настройки, вплоть до GUI.",
      en: "An automatic Litecoin forker with a full build-and-configure pipeline, GUI included.",
      uk: "Автоматичний форкер Litecoin із повним пайплайном збірки та налаштування, аж до GUI.",
    },
    body: {
      ru: [
        "Тот же подход, что в Bitcoin Fork Factory, но применённый к Litecoin. Автоматический форкер с полным пайплайном — от настройки параметров до финальной сборки.",
        "Доведено до того, что собирается версия с графическим интерфейсом, а не только консольная — то есть на выходе полноценный готовый к использованию форк.",
        "Litecoin и Bitcoin близки по коду, так что было отдельно интересно сравнить, насколько переносим подход между ними и где всё-таки нужны правки под конкретную монету.",
      ],
      en: [
        "The same approach as Bitcoin Fork Factory, but applied to Litecoin. An automatic forker with a full pipeline — from parameter configuration to the final build.",
        "Taken to the point where a GUI-capable version is built, not just a console one — so the output is a full, ready-to-use fork.",
        "Litecoin and Bitcoin are close in code, so it was separately interesting to see how transferable the approach is between them and where coin-specific tweaks are still needed.",
      ],
      uk: [
        "Той самий підхід, що в Bitcoin Fork Factory, але для Litecoin. Автоматичний форкер із повним пайплайном.",
        "Доведено до збірки версії з графічним інтерфейсом — на виході повноцінний форк.",
        "Litecoin і Bitcoin близькі за кодом, тож було цікаво порівняти переносимість підходу.",
      ],
    },
    features: {
      ru: ["Автоматический форкер Litecoin", "Полный пайплайн: настройка параметров → сборка", "Сборка версии с графическим интерфейсом", "Сравнение переносимости подхода с Bitcoin"],
      en: ["An automatic Litecoin forker", "A full pipeline: parameter configuration → build", "Builds a GUI-capable version", "A comparison of the approach's transferability with Bitcoin"],
      uk: ["Автоматичний форкер Litecoin", "Повний пайплайн: налаштування параметрів → збірка", "Збірка версії з графічним інтерфейсом", "Порівняння переносимості підходу з Bitcoin"],
    },
  },
];
