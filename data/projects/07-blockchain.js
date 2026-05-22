/* Блокчейн и криптовалюты */
module.exports = [
  {
    id: "micro-blockchain", name: "MicroChain", aka: "Минимальный блокчейн",
    category: "blockchain", status: "done", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Блокчейн", "UTXO", "BLAKE3", "secp256k1"],
    github: "https://github.com/AlexMelanFromRingo/micro_blockchain",
    short: {
      ru: "Минимальный UTXO-блокчейн и криптовалюта на Rust — компактно и понятно, с TUI-кошельком.",
      en: "A minimal UTXO blockchain and cryptocurrency in Rust — compact and clear, with a TUI wallet.",
      uk: "Мінімальний UTXO-блокчейн і криптовалюта на Rust — компактно й зрозуміло, з TUI-гаманцем.",
    },
    body: {
      ru: [
        "Полноценная криптовалюта на UTXO-модели, написанная на Rust с упором на компактность и наглядность. Хэширование везде на BLAKE3, подписи на secp256k1, адреса в формате Bech32m, пересчёт сложности по алгоритму LWMA на каждый блок.",
        "Каждое решение в проекте — осознанное и объяснённое: почему именно BLAKE3 (быстрый на ARM), почему sled для хранения (без конфигурации), почему свой формат мнемоник. Работает от Raspberry Pi до десктопа, в комплекте — терминальный кошелёк в стиле Blockstream Green.",
      ],
      en: [
        "A full UTXO-model cryptocurrency written in Rust with a focus on compactness and clarity. BLAKE3 hashing everywhere, secp256k1 signatures, Bech32m addresses, per-block difficulty retargeting via the LWMA algorithm.",
        "Every decision in the project is deliberate and explained: why BLAKE3 (fast on ARM), why sled for storage (zero-config), why a custom mnemonic format. It runs from a Raspberry Pi to a desktop, and ships with a Blockstream-Green-style terminal wallet.",
      ],
      uk: [
        "Повноцінна криптовалюта на UTXO-моделі, написана на Rust з акцентом на компактність і наочність. Хешування на BLAKE3, підписи на secp256k1, адреси у форматі Bech32m, перерахунок складності за LWMA.",
        "Кожне рішення в проєкті — усвідомлене й пояснене. Працює від Raspberry Pi до десктопа, у комплекті — термінальний гаманець у стилі Blockstream Green.",
      ],
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
        "Моя собственная криптовалюта, сделанная с одной целью — быть понятной. Большие блокчейн-проекты тонут в сложности, а здесь всё сведено к самой сути: блокчейн, кошельки, сеть из узлов, транзакции. Название выбрано с самоиронией.",
        "Проект существует в двух воплощениях — на Python для наглядности и на Rust для надёжности. Вокруг него выросла отдельная библиотека CustomBIP32Utils для иерархических кошельков. Это мой главный учебный заход в то, как криптовалюты устроены изнутри.",
      ],
      en: [
        "My own cryptocurrency, built with one goal — to be understandable. Big blockchain projects drown in complexity; here everything is boiled down to the essentials: a blockchain, wallets, a network of nodes, transactions. The name is self-ironic.",
        "The project exists in two incarnations — Python for clarity and Rust for reliability. A separate library, CustomBIP32Utils, for hierarchical wallets grew around it. It's my main learning dive into how cryptocurrencies work from the inside.",
      ],
      uk: [
        "Моя власна криптовалюта, зроблена з однією метою — бути зрозумілою. Великі блокчейн-проєкти тонуть у складності, а тут усе зведено до суті: блокчейн, гаманці, мережа вузлів, транзакції.",
        "Проєкт існує у двох втіленнях — на Python для наочності та на Rust для надійності. Навколо нього виросла окрема бібліотека CustomBIP32Utils.",
      ],
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
      ru: ["BIP39 — стандарт мнемонических фраз, которыми защищены криптокошельки: 12-24 слова вместо нечитаемого ключа. Эта библиотека умеет генерировать, проверять и преобразовывать такие фразы в зерно — и на CPU, и с ускорением на GPU через OpenCL.", "Опубликована как полноценная Python-библиотека с CLI, документацией и набором из 128 тестов. Хороший пример доведённого до релиза инструмента."],
      en: ["BIP39 is the mnemonic-phrase standard that protects crypto wallets: 12-24 words instead of an unreadable key. This library can generate, validate and convert such phrases into a seed — both on CPU and GPU-accelerated via OpenCL.", "Published as a full Python library with a CLI, documentation and a suite of 128 tests. A good example of a tool taken all the way to release."],
      uk: ["BIP39 — стандарт мнемонічних фраз, якими захищені криптогаманці: 12-24 слова замість нечитабельного ключа. Ця бібліотека вміє генерувати, перевіряти й перетворювати такі фрази на зерно — і на CPU, і на GPU через OpenCL.", "Опублікована як повноцінна Python-бібліотека з CLI, документацією та 128 тестами."],
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
      ru: ["BIP32 — стандарт иерархических кошельков, где из одного секрета выводится целое дерево ключей и адресов. Эта библиотека реализует его и специально адаптирована под мою криптовалюту Project S.C.A.M.", "Из проекта вокруг своей криптовалюты неизбежно вырастает понимание того, как устроены кошельки на уровне ключей и деривации."],
      en: ["BIP32 is the hierarchical-wallet standard where a whole tree of keys and addresses derives from a single secret. This library implements it and is specifically adapted for my Project S.C.A.M. cryptocurrency.", "A project around your own cryptocurrency inevitably grows an understanding of how wallets work at the level of keys and derivation."],
      uk: ["BIP32 — стандарт ієрархічних гаманців, де з одного секрету виводиться ціле дерево ключів і адрес. Ця бібліотека реалізує його та адаптована під мою криптовалюту Project S.C.A.M.", "З проєкту навколо власної криптовалюти неминуче виростає розуміння того, як влаштовані гаманці."],
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
      ru: ["Чистая Python-реализация HD-кошельков — без сторонних криптобиблиотек, всё вручную. Хороший способ окончательно разложить по полочкам, как из мнемоники получается дерево ключей и адресов.", "Развитие темы CustomBIP32Utils — то же самое, но как самостоятельный аккуратный проект."],
      en: ["A pure-Python implementation of HD wallets — no third-party crypto libraries, everything by hand. A good way to finally lay out, step by step, how a tree of keys and addresses comes from a mnemonic.", "A continuation of the CustomBIP32Utils theme — the same thing as a standalone, tidy project."],
      uk: ["Чиста Python-реалізація HD-гаманців — без сторонніх криптобібліотек, усе вручну. Гарний спосіб остаточно розкласти по поличках, як із мнемоніки виходить дерево ключів.", "Розвиток теми CustomBIP32Utils."],
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
      ru: ["Работа со стандартами BIP — мнемоники, деривация ключей — но на Java. Я люблю реализовывать одну и ту же идею на разных языках: так понимаешь и саму идею, и сильные стороны каждого языка.", "Часть моей большой темы вокруг криптокошельков, рядом с CustomBIP32Utils и BIP39-GPU."],
      en: ["Working with BIP standards — mnemonics, key derivation — but in Java. I like implementing the same idea in different languages: it teaches you both the idea and each language's strengths.", "Part of my larger theme around crypto wallets, alongside CustomBIP32Utils and BIP39-GPU."],
      uk: ["Робота зі стандартами BIP — мнемоніки, деривація ключів — але на Java. Я люблю реалізовувати одну ідею різними мовами.", "Частина моєї великої теми навколо криптогаманців."],
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
      ru: ["Генерация корректных мнемонических фраз BIP39: энтропия, контрольная сумма, превращение в слова. Реализовано на двух языках — на Java и на Rust — как ещё одно сравнение того, как одна задача ложится на разные платформы.", "Маленький, но фундаментальный кирпичик для любого проекта с криптокошельками."],
      en: ["Generating valid BIP39 mnemonic phrases: entropy, checksum, turning it into words. Implemented in two languages — Java and Rust — as another comparison of how one task maps onto different platforms.", "A small but fundamental building block for any crypto-wallet project."],
      uk: ["Генерація коректних мнемонічних фраз BIP39: ентропія, контрольна сума, перетворення на слова. Реалізовано двома мовами — Java і Rust.", "Маленький, але фундаментальний цеглинка для будь-якого проєкту з криптогаманцями."],
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
      ru: ["TON хранит адреса кошельков в нескольких форматах, и переводить между ними руками неудобно. Этот набор утилит делает конвертацию и базовые операции с адресами — есть и CLI, и веб-вариант.", "Практический инструмент, выросший из работы с экосистемой TON."],
      en: ["TON stores wallet addresses in several formats, and converting between them by hand is awkward. This set of utilities handles conversion and basic address operations — there's both a CLI and a web variant.", "A practical tool that grew out of working with the TON ecosystem."],
      uk: ["TON зберігає адреси гаманців у кількох форматах, і перекладати між ними вручну незручно. Цей набір утиліт робить конвертацію та базові операції з адресами.", "Практичний інструмент, що виріс із роботи з екосистемою TON."],
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
      ru: ["Серия экспериментов с тем, как устроены биткоин-адреса: путь от приватного ключа через эллиптическую кривую и хэширование до готового адреса. Хороший способ прочувствовать криптографию Bitcoin на практике.", "Часть моего изучения того, как блокчейн работает на уровне ключей и адресов."],
      en: ["A series of experiments with how Bitcoin addresses are built: the path from a private key through the elliptic curve and hashing to a finished address. A good way to feel Bitcoin's cryptography hands-on.", "Part of my study of how a blockchain works at the level of keys and addresses."],
      uk: ["Серія експериментів із тим, як влаштовані біткоїн-адреси: шлях від приватного ключа через еліптичну криву й хешування до готової адреси.", "Частина мого вивчення того, як блокчейн працює на рівні ключів та адрес."],
    },
  },
  {
    id: "deepseek-crypto", name: "DeepSeek Cryptocurrency", aka: "Крипта-эксперимент",
    category: "blockchain", status: "done", year: 2025,
    langs: ["Python", "Flask"], tags: ["Блокчейн", "Эксперимент"],
    short: {
      ru: "Экспериментальная криптовалюта с веб-интерфейсом — ещё один заход в тему блокчейна.",
      en: "An experimental cryptocurrency with a web interface — another take on the blockchain theme.",
      uk: "Експериментальна криптовалюта з вебінтерфейсом — ще один захід у тему блокчейна.",
    },
    body: {
      ru: ["Небольшой эксперимент: блокчейн с веб-интерфейсом, сервером и кошельком. Очередная итерация моих опытов с криптовалютами — каждая новая попытка устроена аккуратнее предыдущей.", "Идёт в одном ряду с Project S.C.A.M. и MicroChain как часть пути к пониманию блокчейна."],
      en: ["A small experiment: a blockchain with a web interface, a server and a wallet. Another iteration of my cryptocurrency experiments — each new attempt built a bit more tidily than the last.", "It sits alongside Project S.C.A.M. and MicroChain as part of the path to understanding blockchain."],
      uk: ["Невеликий експеримент: блокчейн із вебінтерфейсом, сервером і гаманцем. Чергова ітерація моїх дослідів із криптовалютами.", "Іде в одному ряду з Project S.C.A.M. і MicroChain."],
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
      ru: ["ALFIS — децентрализованный DNS на блокчейне, и майнить его можно было только на процессоре. Я написал CUDA-реализацию его хэша Blakeout: своя реализация Blake2s на видеокарте плюс цепочка из 65 536 итераций.", "Результат — около 1550 хэшей в секунду на RTX 4080, примерно в 3,5 раза быстрее процессора. Проект на стыке блокчейна, криптографии и программирования GPU."],
      en: ["ALFIS is a decentralized blockchain DNS, and it could only be mined on a CPU. I wrote a CUDA implementation of its Blakeout hash: my own Blake2s on the GPU plus the 65,536-iteration chain.", "The result is about 1,550 hashes per second on an RTX 4080, roughly 3.5x faster than CPU. A project at the crossroads of blockchain, cryptography and GPU programming."],
      uk: ["ALFIS — децентралізований DNS на блокчейні, і майнити його можна було лише на процесорі. Я написав CUDA-реалізацію його хешу Blakeout.", "Результат — близько 1550 хешів за секунду на RTX 4080, приблизно в 3,5 раза швидше за процесор."],
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
      ru: ["Создать свой форк Bitcoin вручную — это куча однообразной возни с кодовой базой: переименовать, поменять параметры сети, пересобрать. Этот инструментарий автоматизирует процесс — описываешь, какой хочешь форк, и получаешь готовую сборку.", "Хороший способ изучить кодовую базу Bitcoin Core изнутри: чтобы автоматизировать её изменение, надо понять, как она устроена."],
      en: ["Creating your own Bitcoin fork by hand is a lot of repetitive fiddling with the codebase: rename things, change network parameters, rebuild. This toolkit automates the process — you describe the fork you want and get a ready build.", "A good way to study the Bitcoin Core codebase from the inside: to automate changing it, you have to understand how it's built."],
      uk: ["Створити свій форк Bitcoin вручну — це купа одноманітної возні з кодовою базою. Цей інструментарій автоматизує процес.", "Гарний спосіб вивчити кодову базу Bitcoin Core зсередини."],
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
      ru: ["Тот же подход, что в Bitcoin Fork Factory, но для Litecoin: автоматический форкер с полным пайплайном — от настройки параметров до сборки версии с графическим интерфейсом.", "Litecoin и Bitcoin близки по коду, так что было интересно сравнить, насколько переносим подход между ними."],
      en: ["The same approach as Bitcoin Fork Factory, but for Litecoin: an automatic forker with a full pipeline — from parameter configuration to building a GUI-capable version.", "Litecoin and Bitcoin are close in code, so it was interesting to see how transferable the approach is between them."],
      uk: ["Той самий підхід, що в Bitcoin Fork Factory, але для Litecoin: автоматичний форкер із повним пайплайном — від налаштування параметрів до збірки версії з графічним інтерфейсом.", "Litecoin і Bitcoin близькі за кодом, тож було цікаво порівняти."],
    },
  },
];
