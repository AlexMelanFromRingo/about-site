/* Криптография и безопасность */
module.exports = [
  {
    id: "wpa-demo", name: "Методичка по Wi-Fi", aka: "WPA2 · WPA3 · Hashcat",
    category: "crypto", status: "done", year: 2026, featured: true,
    langs: ["TypeScript", "Web"], tags: ["WPA2", "WPA3 SAE", "Hashcat", "Образование"],
    github: "https://github.com/AlexMelanFromRingo/WPA2-3demo",
    short: {
      ru: "Интерактивная визуальная методичка по безопасности Wi-Fi для полных новичков.",
      en: "An interactive visual guide to Wi-Fi security for absolute beginners.",
      uk: "Інтерактивна візуальна методичка з безпеки Wi-Fi для повних новачків.",
    },
    body: {
      ru: [
        "Сайт, который пошагово и с анимациями объясняет, как устроена защита Wi-Fi. Три модуля: рукопожатие WPA2 4-Way Handshake с выводом ключей PMK и PTK, обмен WPA3 SAE (Dragonfly) с превращением пароля в точку эллиптической кривой, и симулятор атаки Hashcat в режиме 22000.",
        "Цель — показать математику и логику атак так, чтобы понял абсолютный новичок: где слабое место WPA2, почему WPA3 не даёт подобрать пароль офлайн и как вообще работает перехват рукопожатия.",
      ],
      en: [
        "A site that explains Wi-Fi security step by step with animations. Three modules: the WPA2 4-Way Handshake with PMK and PTK derivation, the WPA3 SAE (Dragonfly) exchange that turns a password into an elliptic-curve point, and a simulator of the Hashcat 22000 attack mode.",
        "The goal is to show the maths and logic of the attacks so an absolute beginner gets it: where WPA2 is weak, why WPA3 resists offline cracking and how handshake capture works at all.",
      ],
      uk: [
        "Сайт, що покроково й з анімаціями пояснює, як влаштований захист Wi-Fi. Три модулі: рукостискання WPA2 4-Way Handshake з виведенням ключів PMK і PTK, обмін WPA3 SAE та симулятор атаки Hashcat у режимі 22000.",
        "Мета — показати математику й логіку атак так, щоб зрозумів абсолютний новачок.",
      ],
    },
  },
  {
    id: "kalynamode", name: "KalynaMode", aka: "Kalyna для hashcat",
    category: "crypto", status: "done", year: 2026, featured: true,
    langs: ["C", "CUDA", "OpenCL"], tags: ["DSTU 7624:2014", "hashcat", "Криптоанализ"],
    github: "https://github.com/AlexMelanFromRingo/KalynaMode",
    short: {
      ru: "Плагин для hashcat, добавляющий режимы атаки на украинский государственный шифр Kalyna.",
      en: "A hashcat plugin adding attack modes for the Ukrainian state cipher Kalyna.",
      uk: "Плагін для hashcat, що додає режими атаки на український державний шифр «Калина».",
    },
    body: {
      ru: [
        "Kalyna — государственный стандарт шифрования Украины (ДСТУ 7624:2014), но в популярных инструментах его не было. Этот проект добавляет в hashcat пять режимов атаки на известный открытый текст для всех вариантов Kalyna — от 128/128 до 512/512.",
        "Реализация доведена до конца: режимы работают сквозным образом и на CUDA, и на OpenCL/PoCL. В комплекте — переносимая хостовая реализация всех пяти вариантов шифра для сверки.",
      ],
      en: [
        "Kalyna is Ukraine's state encryption standard (DSTU 7624:2014), but popular tools didn't support it. This project adds five known-plaintext attack modes to hashcat for every Kalyna variant — from 128/128 to 512/512.",
        "The implementation is finished: the modes run end-to-end on both CUDA and OpenCL/PoCL. It ships with a portable host reference of all five cipher variants for cross-checking.",
      ],
      uk: [
        "«Калина» — державний стандарт шифрування України (ДСТУ 7624:2014), але в популярних інструментах його не було. Цей проєкт додає в hashcat п'ять режимів атаки на відкритий текст для всіх варіантів шифру.",
        "Реалізація доведена до кінця: режими працюють наскрізно і на CUDA, і на OpenCL/PoCL.",
      ],
    },
  },
  {
    id: "rsa16-edu", name: "RSA-16 Demo", aka: "Учебный RSA",
    category: "crypto", status: "done", year: 2026, featured: true,
    langs: ["Rust", "WebAssembly", "Yew"], tags: ["RSA", "WASM", "Образование"],
    github: "https://github.com/AlexMelanFromRingo/rsa16-edu",
    short: {
      ru: "Интерактивное WebAssembly-приложение для изучения алгоритма RSA на 16-битном модуле.",
      en: "An interactive WebAssembly app for learning the RSA algorithm on a 16-bit modulus.",
      uk: "Інтерактивний WebAssembly-застосунок для вивчення алгоритму RSA на 16-бітному модулі.",
    },
    body: {
      ru: ["Учебный тренажёр по RSA, написанный на Rust и собранный в WebAssembly через Yew. Три режима: демонстрация с пошаговой визуализацией генерации ключей и шифрования, режим практики с проверкой и подсказками, и режим для преподавателя — проверка работ студентов по коду. Маленький модуль в 16 бит выбран намеренно, чтобы все числа умещались в голове.", "Интерфейс на трёх языках, тёмная и светлая темы, всё собрано в один исполняемый файл со встроенным веб-сервером."],
      en: ["An RSA training tool written in Rust and compiled to WebAssembly via Yew. Three modes: a demo with step-by-step visualization of key generation and encryption, a practice mode with checks and hints, and a teacher mode for validating student work by code. The tiny 16-bit modulus is deliberate, so all numbers fit in your head.", "The interface is trilingual, with dark and light themes, all bundled into one executable with an embedded web server."],
      uk: ["Навчальний тренажер з RSA, написаний на Rust і зібраний у WebAssembly через Yew. Три режими: демонстрація з покроковою візуалізацією, режим практики з підказками та режим для викладача. Маленький модуль у 16 біт обрано навмисно.", "Інтерфейс трьома мовами, темна й світла теми, усе зібрано в один виконуваний файл."],
    },
  },
  {
    id: "libkalyna-c", name: "libkalyna-c", aka: "Kalyna на C",
    category: "crypto", status: "done", year: 2026,
    langs: ["C"], tags: ["DSTU 7624:2014", "Шифр", "Референс"],
    github: "https://github.com/AlexMelanFromRingo/libkalyna-c",
    short: {
      ru: "Эталонная реализация украинского шифра Kalyna на C для всех пяти вариантов стандарта.",
      en: "A C reference implementation of the Ukrainian Kalyna cipher for all five standard variants.",
      uk: "Еталонна реалізація українського шифру «Калина» на C для всіх п'яти варіантів стандарту.",
    },
    body: {
      ru: ["Чистая реализация шифра Kalyna на C — основа, на которой строился плагин KalynaMode для hashcat. Покрывает все пять вариантов стандарта ДСТУ 7624:2014 и служит эталоном для проверки других реализаций.", "Изучение Kalyna — часть моего интереса к украинской криптографии и национальным стандартам шифрования."],
      en: ["A clean C implementation of the Kalyna cipher — the base the KalynaMode hashcat plugin was built on. It covers all five variants of the DSTU 7624:2014 standard and serves as a reference for checking other implementations.", "Studying Kalyna is part of my interest in Ukrainian cryptography and national encryption standards."],
      uk: ["Чиста реалізація шифру «Калина» на C — основа, на якій будувався плагін KalynaMode для hashcat. Покриває всі п'ять варіантів стандарту й слугує еталоном.", "Вивчення «Калини» — частина мого інтересу до української криптографії."],
    },
  },
  {
    id: "rust-kalyna", name: "rust-kalyna", aka: "Kalyna на Rust",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust"], tags: ["DSTU 7624:2014", "Шифр"],
    github: "https://github.com/AlexMelanFromRingo/rust-kalyna",
    short: {
      ru: "Реализация украинского шифра Kalyna на Rust — безопасная по памяти версия стандарта.",
      en: "An implementation of the Ukrainian Kalyna cipher in Rust — a memory-safe version of the standard.",
      uk: "Реалізація українського шифру «Калина» на Rust — безпечна за пам'яттю версія стандарту.",
    },
    body: {
      ru: ["Тот же шифр Kalyna, но переписанный на Rust. После C-версии было интересно сделать реализацию, где компилятор сам страхует от ошибок работы с памятью, не теряя в скорости.", "Часть набора проектов вокруг Kalyna: C-референс, Rust-порт и плагин для hashcat."],
      en: ["The same Kalyna cipher, rewritten in Rust. After the C version it was interesting to build an implementation where the compiler itself guards against memory bugs, without losing speed.", "Part of the Kalyna project set: a C reference, a Rust port and a hashcat plugin."],
      uk: ["Той самий шифр «Калина», переписаний на Rust. Після C-версії було цікаво зробити реалізацію, де компілятор сам страхує від помилок роботи з пам'яттю.", "Частина набору проєктів навколо «Калини»."],
    },
  },
  {
    id: "aes-explorer", name: "AES Explorer", aka: "Интерактивный AES",
    category: "crypto", status: "done", year: 2026,
    langs: ["TypeScript", "Angular"], tags: ["AES", "Визуализация", "Образование"],
    github: "https://github.com/AlexMelanFromRingo/aes-explorer",
    short: {
      ru: "Интерактивный разбор шифра AES: как он работает, с визуализациями и пошаговыми демо.",
      en: "An interactive breakdown of the AES cipher: how it works, with visualizations and step-by-step demos.",
      uk: "Інтерактивний розбір шифру AES: як він працює, з візуалізаціями та покроковими демо.",
    },
    body: {
      ru: ["Веб-приложение, которое наглядно показывает внутренности AES — самого распространённого блочного шифра. SubBytes, ShiftRows, MixColumns, расписание ключей: каждый шаг можно посмотреть на конкретных данных и понять, что именно происходит с байтами.", "Сделано на Angular как учебный инструмент: криптография становится понятнее, когда видишь её, а не читаешь формулы."],
      en: ["A web app that visually shows the internals of AES — the most widespread block cipher. SubBytes, ShiftRows, MixColumns, the key schedule: each step can be watched on concrete data to understand exactly what happens to the bytes.", "Built with Angular as a learning tool: cryptography is clearer when you see it rather than read formulas."],
      uk: ["Вебзастосунок, що наочно показує нутрощі AES — найпоширенішого блокового шифру. Кожен крок можна подивитися на конкретних даних.", "Зроблено на Angular як навчальний інструмент: криптографія стає зрозумілішою, коли її бачиш."],
    },
  },
  {
    id: "error-codes-explorer", name: "Error Codes Explorer", aka: "Коды коррекции ошибок",
    category: "crypto", status: "done", year: 2026,
    langs: ["TypeScript", "Angular"], tags: ["Hamming", "Reed-Solomon", "LDPC", "Образование"],
    github: "https://github.com/AlexMelanFromRingo/error-codes-explorer",
    short: {
      ru: "Интерактивный учебный гид по кодам коррекции ошибок: Хэмминг, Рида-Соломона, LDPC, полярные.",
      en: "An interactive educational guide to error-correcting codes: Hamming, Reed-Solomon, LDPC, polar.",
      uk: "Інтерактивний навчальний гід з кодів корекції помилок: Геммінга, Ріда-Соломона, LDPC, полярні.",
    },
    body: {
      ru: ["Гид по кодам коррекции ошибок — тому, как данные восстанавливаются после повреждений при передаче. Разобраны коды Хэмминга, Рида-Соломона, LDPC и полярные: можно вносить ошибки и смотреть, как код их находит и чинит.", "Тема на стыке математики и связи, и интерактив помогает прочувствовать её куда лучше учебника."],
      en: ["A guide to error-correcting codes — how data recovers after corruption in transmission. It covers Hamming, Reed-Solomon, LDPC and polar codes: you can inject errors and watch the code find and fix them.", "It's a topic at the crossroads of maths and communications, and interaction conveys it far better than a textbook."],
      uk: ["Гід з кодів корекції помилок — того, як дані відновлюються після пошкоджень при передачі. Розібрано коди Геммінга, Ріда-Соломона, LDPC та полярні.", "Тема на стику математики й зв'язку, й інтерактив допомагає відчути її краще за підручник."],
    },
  },
  {
    id: "otp-demo", name: "HOTP Demo", aka: "RFC 4226",
    category: "crypto", status: "done", year: 2026,
    langs: ["JavaScript", "Web"], tags: ["HOTP", "OTP", "RFC 4226"],
    github: "https://github.com/AlexMelanFromRingo/otp_demo",
    short: {
      ru: "Учебная демонстрация одноразовых паролей HOTP по стандарту RFC 4226.",
      en: "An educational demo of HOTP one-time passwords per the RFC 4226 standard.",
      uk: "Навчальна демонстрація одноразових паролів HOTP за стандартом RFC 4226.",
    },
    body: {
      ru: ["Наглядное демо алгоритма HOTP — одноразовых паролей на основе счётчика. Показывает, как из общего секрета и счётчика получается шестизначный код, который и проверяет сервер.", "Простой и честный разбор того, что лежит в основе аппаратных токенов и приложений-аутентификаторов."],
      en: ["A clear demo of the HOTP algorithm — counter-based one-time passwords. It shows how a shared secret and a counter produce the six-digit code the server then verifies.", "A simple, honest breakdown of what underlies hardware tokens and authenticator apps."],
      uk: ["Наочне демо алгоритму HOTP — одноразових паролів на основі лічильника. Показує, як зі спільного секрету й лічильника виходить шестизначний код.", "Простий розбір того, що лежить в основі апаратних токенів і застосунків-автентифікаторів."],
    },
  },
  {
    id: "totp-demo", name: "TOTP Demo", aka: "RFC 6238",
    category: "crypto", status: "done", year: 2026,
    langs: ["JavaScript", "Web"], tags: ["TOTP", "OTP", "RFC 6238"],
    github: "https://github.com/AlexMelanFromRingo/TOTP_demo",
    short: {
      ru: "Учебная демонстрация одноразовых паролей TOTP — кодов, привязанных ко времени.",
      en: "An educational demo of TOTP one-time passwords — time-based codes.",
      uk: "Навчальна демонстрація одноразових паролів TOTP — кодів, прив'язаних до часу.",
    },
    body: {
      ru: ["Продолжение демо про HOTP: TOTP использует не счётчик, а текущее время, поэтому код меняется каждые 30 секунд. Именно так работает большинство приложений-аутентификаторов.", "Демо показывает, как время превращается в одноразовый код и почему сервер и телефон сходятся в одном значении."],
      en: ["A follow-up to the HOTP demo: TOTP uses the current time instead of a counter, so the code changes every 30 seconds. That's how most authenticator apps work.", "The demo shows how time becomes a one-time code and why the server and the phone agree on one value."],
      uk: ["Продовження демо про HOTP: TOTP використовує не лічильник, а поточний час, тож код змінюється кожні 30 секунд.", "Демо показує, як час перетворюється на одноразовий код."],
    },
  },
  {
    id: "rust-totp-demo", name: "rust-totp-demo", aka: "TOTP на Rust",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust"], tags: ["TOTP", "OTP", "2FA"],
    github: "https://github.com/AlexMelanFromRingo/rust-totp-demo",
    short: {
      ru: "Реализация и демонстрация TOTP-аутентификации на Rust.",
      en: "An implementation and demo of TOTP authentication in Rust.",
      uk: "Реалізація та демонстрація TOTP-автентифікації на Rust.",
    },
    body: {
      ru: ["Та же тема одноразовых паролей по времени, но в виде нативной Rust-реализации. Хороший способ разобрать стандарт изнутри и получить переиспользуемый код для своих проектов с двухфакторной аутентификацией.", "Логично легло в один ряд с ObsidianAuth и rust-otp-system."],
      en: ["The same time-based one-time password topic, but as a native Rust implementation. A good way to dissect the standard from the inside and get reusable code for projects with two-factor authentication.", "It fits naturally alongside ObsidianAuth and rust-otp-system."],
      uk: ["Та сама тема одноразових паролів за часом, але у вигляді нативної Rust-реалізації. Гарний спосіб розібрати стандарт зсередини.", "Логічно лягло в один ряд з ObsidianAuth і rust-otp-system."],
    },
  },
  {
    id: "rust-otp-system", name: "rust-otp-system", aka: "OTP для универа",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust"], tags: ["OTP", "2FA", "Демо"],
    github: "https://github.com/AlexMelanFromRingo/rust-otp-system",
    short: {
      ru: "Современная демонстрация системы OTP-аутентификации, сделанная как университетская работа.",
      en: "A modern demo of an OTP authentication system, built as a university assignment.",
      uk: "Сучасна демонстрація системи OTP-автентифікації, зроблена як університетська робота.",
    },
    body: {
      ru: ["Учебная, но доведённая до аккуратного вида система одноразовых паролей на Rust. Делалась как работа для университета — там, где обычно сдают минимум, мне было интереснее собрать что-то цельное и современное.", "Показывает полный путь: регистрация секрета, генерация и проверка кодов."],
      en: ["An academic but polished one-time-password system in Rust. Built as a university assignment — where the usual move is to hand in the minimum, I found it more interesting to assemble something whole and modern.", "It shows the full path: secret registration, code generation and verification."],
      uk: ["Навчальна, але доведена до акуратного вигляду система одноразових паролів на Rust. Робилася як робота для університету.", "Показує повний шлях: реєстрація секрету, генерація та перевірка кодів."],
    },
  },
  {
    id: "vhdl-rc4", name: "vhdl-rc4", aka: "RC4 в железе",
    category: "crypto", status: "done", year: 2025,
    langs: ["VHDL"], tags: ["RC4", "FPGA", "Аппаратная логика"],
    github: "https://github.com/AlexMelanFromRingo/vhdl-rc4",
    short: {
      ru: "Реализация потокового шифра RC4 на языке описания аппаратуры VHDL.",
      en: "An implementation of the RC4 stream cipher in the VHDL hardware description language.",
      uk: "Реалізація потокового шифру RC4 мовою опису апаратури VHDL.",
    },
    body: {
      ru: ["RC4, но не в виде программы, а как описание схемы на VHDL — то, что можно синтезировать в реальную аппаратную логику FPGA. Совсем другой способ думать о шифре: не последовательность инструкций, а параллельная схема из регистров и сигналов.", "Проект на пересечении криптографии и цифровой схемотехники."],
      en: ["RC4, but not as a program — as a circuit description in VHDL, the kind you can synthesise into real FPGA hardware logic. A completely different way to think about a cipher: not a sequence of instructions but a parallel circuit of registers and signals.", "A project at the intersection of cryptography and digital circuit design."],
      uk: ["RC4, але не у вигляді програми, а як опис схеми мовою VHDL — те, що можна синтезувати в реальну апаратну логіку FPGA.", "Проєкт на перетині криптографії та цифрової схемотехніки."],
    },
  },
  {
    id: "rust-rc4", name: "rust-rc4", aka: "RC4 на Rust",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust"], tags: ["RC4", "Потоковый шифр"],
    github: "https://github.com/AlexMelanFromRingo/rust-rc4",
    short: {
      ru: "Реализация классического потокового шифра RC4 на Rust.",
      en: "An implementation of the classic RC4 stream cipher in Rust.",
      uk: "Реалізація класичного потокового шифру RC4 на Rust.",
    },
    body: {
      ru: ["Программная реализация RC4 на Rust — пара к аппаратной vhdl-rc4. RC4 уже устарел и небезопасен, но он простой и наглядный, поэтому идеален для изучения того, как вообще устроены потоковые шифры.", "Маленький, аккуратный проект для понимания основ."],
      en: ["A software implementation of RC4 in Rust — the counterpart to the hardware vhdl-rc4. RC4 is outdated and insecure now, but it's simple and clear, which makes it ideal for learning how stream ciphers work at all.", "A small, tidy project for understanding the basics."],
      uk: ["Програмна реалізація RC4 на Rust — пара до апаратної vhdl-rc4. RC4 уже застарів, але він простий і наочний, тож ідеальний для вивчення основ потокових шифрів.", "Маленький, акуратний проєкт."],
    },
  },
  {
    id: "crc32-collider", name: "CRC32 Collider", aka: "Коллизии CRC32",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust"], tags: ["CRC32", "Коллизии", "Хэш"],
    github: "https://github.com/AlexMelanFromRingo/crc32-collider",
    short: {
      ru: "Инструмент для подбора данных с заданным значением контрольной суммы CRC32.",
      en: "A tool for crafting data with a chosen CRC32 checksum value.",
      uk: "Інструмент для добору даних із заданим значенням контрольної суми CRC32.",
    },
    body: {
      ru: ["CRC32 — контрольная сумма, а не криптографический хэш, и это легко показать на практике: к любому файлу можно дописать несколько байт так, чтобы CRC32 стал любым нужным. Этот инструмент именно так и делает.", "Хорошая иллюстрация того, почему контрольную сумму нельзя путать с защитой целостности."],
      en: ["CRC32 is a checksum, not a cryptographic hash, and that's easy to show in practice: you can append a few bytes to any file so its CRC32 becomes any value you want. This tool does exactly that.", "A good illustration of why a checksum must not be confused with integrity protection."],
      uk: ["CRC32 — контрольна сума, а не криптографічний хеш, і це легко показати на практиці: до будь-якого файлу можна дописати кілька байт так, щоб CRC32 став потрібним.", "Гарна ілюстрація того, чому контрольну суму не можна плутати із захистом цілісності."],
    },
  },
  {
    id: "md5-collision", name: "MD5 Collision Attack", aka: "Коллизия одного блока",
    category: "crypto", status: "done", year: 2026,
    langs: ["C++"], tags: ["MD5", "Криптоанализ", "Коллизии"],
    github: "https://github.com/AlexMelanFromRingo/md5-1block-collision-attack",
    short: {
      ru: "Атака поиска коллизий MD5 в пределах одного блока сообщения.",
      en: "An MD5 single-block collision-search attack.",
      uk: "Атака пошуку колізій MD5 у межах одного блоку повідомлення.",
    },
    body: {
      ru: ["Практическая реализация атаки на MD5 — поиск двух разных блоков с одинаковым хэшем. MD5 давно сломан, но самостоятельно собрать рабочую атаку — это совсем другой уровень понимания, чем просто знать, что «он небезопасен».", "Часть моего изучения криптоанализа хэш-функций."],
      en: ["A practical implementation of an attack on MD5 — finding two different blocks with the same hash. MD5 has long been broken, but building a working attack yourself is a completely different level of understanding than just knowing it's insecure.", "Part of my study of hash-function cryptanalysis."],
      uk: ["Практична реалізація атаки на MD5 — пошук двох різних блоків з однаковим хешем. MD5 давно зламаний, але самостійно зібрати робочу атаку — інший рівень розуміння.", "Частина мого вивчення криптоаналізу хеш-функцій."],
    },
  },
  {
    id: "md5-vectorized", name: "Vectorized MD5", aka: "Векторный MD5",
    category: "crypto", status: "done", year: 2026,
    langs: ["Python"], tags: ["MD5", "SIMD", "Производительность"],
    github: "https://github.com/AlexMelanFromRingo/python-vecrorized-md5",
    short: {
      ru: "Векторизованная реализация MD5, считающая много хэшей параллельно.",
      en: "A vectorized MD5 implementation that computes many hashes in parallel.",
      uk: "Векторизована реалізація MD5, що рахує багато хешів паралельно.",
    },
    body: {
      ru: ["Если нужно посчитать миллионы хэшей MD5, наивный цикл — это медленно. Здесь алгоритм переписан так, чтобы обрабатывать множество входов одновременно, используя векторные операции.", "Эксперимент с тем, как ускорить хэширование без перехода на GPU или C."],
      en: ["If you need to compute millions of MD5 hashes, a naive loop is slow. Here the algorithm is rewritten to process many inputs at once using vectorized operations.", "An experiment in how to speed up hashing without moving to GPU or C."],
      uk: ["Якщо потрібно порахувати мільйони хешів MD5, наївний цикл — це повільно. Тут алгоритм переписано так, щоб обробляти багато входів одночасно.", "Експеримент із тим, як прискорити хешування без переходу на GPU чи C."],
    },
  },
  {
    id: "blake2", name: "Blake2", aka: "Blake2s / Blake2b",
    category: "crypto", status: "done", year: 2024,
    langs: ["Python"], tags: ["Blake2", "Хэш-функции"],
    short: {
      ru: "Собственные реализации хэш-функций Blake2s и Blake2b с нуля.",
      en: "From-scratch implementations of the Blake2s and Blake2b hash functions.",
      uk: "Власні реалізації хеш-функцій Blake2s і Blake2b з нуля.",
    },
    body: {
      ru: ["Blake2 — быстрая современная хэш-функция, которую я выбрал, чтобы разобрать по косточкам: обе версии, Blake2s и Blake2b, написаны вручную и сверены с эталоном. Blake2 потом всплывал в других моих проектах — в блокчейнах и в GPU-майнинге.", "Понимать хэш-функцию изнутри полезно для всего, что касается безопасности."],
      en: ["Blake2 is a fast modern hash function I picked to take apart bone by bone: both versions, Blake2s and Blake2b, written by hand and checked against the reference. Blake2 later surfaced in other projects of mine — in blockchains and GPU mining.", "Understanding a hash function from the inside helps with everything security-related."],
      uk: ["Blake2 — швидка сучасна хеш-функція, яку я обрав, щоб розібрати до кісток: обидві версії написані вручну й звірені з еталоном. Blake2 потім зринала в інших моїх проєктах.", "Розуміти хеш-функцію зсередини корисно для всього, що стосується безпеки."],
    },
  },
  {
    id: "fnv-crc", name: "FNV-1a и CRC32", aka: "Изучение коллизий",
    category: "crypto", status: "done", year: 2024,
    langs: ["Python", "CUDA"], tags: ["FNV-1a", "CRC32", "Коллизии"],
    short: {
      ru: "Исследование коллизий нехэш-криптографических функций FNV-1a и CRC32, в том числе на GPU.",
      en: "A study of collisions in the non-cryptographic functions FNV-1a and CRC32, including on GPU.",
      uk: "Дослідження колізій некриптографічних функцій FNV-1a і CRC32, зокрема на GPU.",
    },
    body: {
      ru: ["FNV-1a и CRC32 — быстрые функции для хэш-таблиц и контрольных сумм, но не для безопасности. В этом проекте я искал у них коллизии, в том числе с ускорением на CUDA, чтобы наглядно показать, насколько легко их подделать.", "Практическое продолжение темы: чем хэш для скорости отличается от хэша для защиты."],
      en: ["FNV-1a and CRC32 are fast functions for hash tables and checksums, not for security. In this project I searched for collisions in them, including CUDA-accelerated, to show clearly how easy they are to forge.", "A practical continuation of the theme: how a hash for speed differs from a hash for protection."],
      uk: ["FNV-1a і CRC32 — швидкі функції для хеш-таблиць і контрольних сум, але не для безпеки. У цьому проєкті я шукав у них колізії, зокрема з прискоренням на CUDA.", "Практичне продовження теми: чим хеш для швидкості відрізняється від хеша для захисту."],
    },
  },
  {
    id: "source-encryptor", name: "Source Encryptor", aka: "Шифрование исходников",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Шифрование", "Защита кода"],
    github: "https://github.com/AlexMelanFromRingo/source_encryptor",
    short: {
      ru: "Инструмент для шифрования исходного кода с расшифровкой только при запуске.",
      en: "A tool for encrypting source code that decrypts only at runtime.",
      uk: "Інструмент для шифрування вихідного коду з розшифруванням лише під час запуску.",
    },
    body: {
      ru: ["Эксперимент с защитой исходников: код хранится зашифрованным и расшифровывается только в момент выполнения. Полностью от реверса это не спасает — на то есть фундаментальные причины, — но проект честно исследует, что вообще можно сделать и где граница возможного.", "Хорошее упражнение на тему «защита кода» без иллюзий о её всесильности."],
      en: ["An experiment with source protection: the code is stored encrypted and decrypted only at execution time. It can't fully stop reverse engineering — there are fundamental reasons for that — but the project honestly explores what's possible and where the limit is.", "A good exercise on code protection without illusions about its power."],
      uk: ["Експеримент із захистом вихідників: код зберігається зашифрованим і розшифровується лише в момент виконання. Повністю від реверсу це не рятує, але проєкт чесно досліджує межу можливого.", "Гарна вправа на тему захисту коду без ілюзій."],
    },
  },
  {
    id: "crypter-demo", name: "Crypter Demo", aka: "Демо крипто-обёртки",
    category: "crypto", status: "concept", year: 2026,
    langs: ["Rust"], tags: ["Шифрование", "Демо"],
    github: "https://github.com/AlexMelanFromRingo/rust-crypter-demo",
    short: {
      ru: "Учебная демонстрация принципа «криптора» — обёртки, шифрующей полезную нагрузку.",
      en: "An educational demo of the 'crypter' concept — a wrapper that encrypts a payload.",
      uk: "Навчальна демонстрація принципу «криптора» — обгортки, що шифрує корисне навантаження.",
    },
    body: {
      ru: ["Демо принципа, по которому работают крипторы: полезная нагрузка хранится зашифрованной, а небольшой загрузчик расшифровывает её перед запуском. Сделано как учебный разбор техники — понять, как это устроено, важно и для защиты, и для анализа.", "Чисто демонстрационный проект на безобидной нагрузке."],
      en: ["A demo of the principle behind crypters: a payload is stored encrypted while a small loader decrypts it before execution. Built as an educational breakdown of the technique — understanding how it works matters for both defense and analysis.", "A purely demonstrational project on a harmless payload."],
      uk: ["Демо принципу, за яким працюють криптори: корисне навантаження зберігається зашифрованим, а невеликий завантажувач розшифровує його перед запуском. Зроблено як навчальний розбір техніки.", "Суто демонстраційний проєкт на безпечному навантаженні."],
    },
  },
  {
    id: "ecdh-chat", name: "NoName", aka: "Чат с ECDH",
    category: "crypto", status: "done", year: 2024,
    langs: ["Python"], tags: ["ECDH", "E2EE", "Чат", "Эллиптические кривые"],
    short: {
      ru: "Чат-приложение со сквозным шифрованием на основе обмена ключами ECDH.",
      en: "A chat application with end-to-end encryption based on the ECDH key exchange.",
      uk: "Чат-застосунок зі наскрізним шифруванням на основі обміну ключами ECDH.",
    },
    body: {
      ru: ["Мой первый серьёзный заход в защищённую переписку. Клиент и сервер на Python, ключи на эллиптических кривых, общий секрет выводится через ECDH — так что сервер видит только зашифрованный трафик и не может прочитать сообщения.", "Здесь я на практике разобрался с обменом ключами и хранением — опыт, который потом лёг в основу более крупных сетевых проектов."],
      en: ["My first serious go at secure messaging. A Python client and server, elliptic-curve keys, a shared secret derived via ECDH — so the server only sees encrypted traffic and can't read the messages.", "Here I worked out key exchange and storage hands-on — experience that later fed into larger networking projects."],
      uk: ["Мій перший серйозний захід у захищене листування. Клієнт і сервер на Python, ключі на еліптичних кривих, спільний секрет виводиться через ECDH.", "Тут я на практиці розібрався з обміном ключами — досвід, що потім ліг в основу більших мережевих проєктів."],
    },
  },
  {
    id: "ecc-keygen", name: "ECC Keys Gen", aka: "Генерация ECC-ключей",
    category: "crypto", status: "done", year: 2024,
    langs: ["Python"], tags: ["ECC", "Ключи", "BIP32"],
    short: {
      ru: "Генератор ключей на эллиптических кривых с поддержкой иерархических кошельков.",
      en: "An elliptic-curve key generator with support for hierarchical wallets.",
      uk: "Генератор ключів на еліптичних кривих із підтримкою ієрархічних гаманців.",
    },
    body: {
      ru: ["Набор инструментов для работы с ключами на эллиптических кривых: генерация, проверка, сжатие, плюс деривация ключей в стиле BIP32. Сделан как фундамент для проектов с кошельками и шифрованной перепиской.", "Криптография на кривых лежит в основе и блокчейнов, и современного защищённого общения — этот проект помог мне с ней разобраться."],
      en: ["A toolkit for working with elliptic-curve keys: generation, verification, compression, plus BIP32-style key derivation. Built as a foundation for wallet and encrypted-messaging projects.", "Elliptic-curve cryptography underpins both blockchains and modern secure communication — this project helped me get to grips with it."],
      uk: ["Набір інструментів для роботи з ключами на еліптичних кривих: генерація, перевірка, стиснення, плюс деривація ключів у стилі BIP32.", "Криптографія на кривих лежить в основі і блокчейнів, і сучасного захищеного спілкування."],
    },
  },
  {
    id: "wordlist-gen", name: "Wordlist Generator", aka: "Генератор словарей",
    category: "crypto", status: "done", year: 2023,
    langs: ["Python"], tags: ["Wordlist", "Безопасность паролей"],
    short: {
      ru: "Генератор словарей паролей по заданным правилам и наборам символов.",
      en: "A password-wordlist generator using configurable rules and character sets.",
      uk: "Генератор словників паролів за заданими правилами та наборами символів.",
    },
    body: {
      ru: ["Инструмент для генерации словарей: задаёшь набор символов и правила — получаешь список комбинаций. Это базовая утилита в исследованиях стойкости паролей: чтобы понять, какой пароль слабый, нужно представлять, как устроен перебор.", "В проекте есть и подсчёт количества комбинаций, и эксперименты со скоростью генерации."],
      en: ["A tool for generating wordlists: you set a character set and rules and get a list of combinations. It's a basic utility in password-strength research — to understand what makes a password weak, you need to picture how brute force works.", "The project also includes combination counting and experiments with generation speed."],
      uk: ["Інструмент для генерації словників: задаєш набір символів і правила — отримуєш список комбінацій. Це базова утиліта в дослідженнях стійкості паролів.", "У проєкті є і підрахунок кількості комбінацій, і експерименти зі швидкістю."],
    },
  },
  {
    id: "wordlist-sorter", name: "Wordlist Sorter", aka: "Чистка словарей",
    category: "crypto", status: "done", year: 2023,
    langs: ["Python"], tags: ["Wordlist", "Обработка данных"],
    short: {
      ru: "Утилита для сортировки, очистки и удаления дубликатов в больших словарях паролей.",
      en: "A utility for sorting, cleaning and deduplicating large password wordlists.",
      uk: "Утиліта для сортування, очищення та видалення дублікатів у великих словниках паролів.",
    },
    body: {
      ru: ["Пара к генератору словарей. Большие словари паролей всегда грязные: дубликаты, мусор, мешанина регистра. Эта утилита приводит их в порядок — сортирует, чистит, убирает повторы — чтобы перебор не тратил время впустую.", "Заодно практика работы с большими текстовыми файлами, которые не влезают в память целиком."],
      en: ["A companion to the wordlist generator. Large password wordlists are always messy: duplicates, junk, mixed case. This utility tidies them — sorts, cleans, removes repeats — so brute force doesn't waste time.", "Also practice with large text files that don't fit in memory at once."],
      uk: ["Пара до генератора словників. Великі словники паролів завжди брудні: дублікати, сміття, мішанина регістру. Ця утиліта наводить лад.", "Заразом практика роботи з великими текстовими файлами."],
    },
  },
  {
    id: "cardcheck", name: "Card Check", aka: "Проверка номеров карт",
    category: "crypto", status: "done", year: 2026,
    langs: ["Rust", "Python", "Web"], tags: ["Алгоритм Луна", "Валидация"],
    github: "https://github.com/AlexMelanFromRingo/card-check-algo",
    short: {
      ru: "Проверка корректности номеров банковских карт по алгоритму Луна — в вебе, на Rust и Python.",
      en: "Bank-card number validation via the Luhn algorithm — on the web, in Rust and Python.",
      uk: "Перевірка коректності номерів банківських карток за алгоритмом Луна — у вебі, на Rust і Python.",
    },
    body: {
      ru: ["Алгоритм Луна — простая контрольная формула, по которой проверяют, что номер банковской карты введён без опечатки. Я реализовал его в трёх вариантах: веб-страница, Rust и Python — и сравнил, как одна и та же простая идея выглядит на разных языках.", "Важно: это валидация формата, а не проверка существования карты — никакого отношения к мошенничеству проект не имеет."],
      en: ["The Luhn algorithm is a simple checksum formula used to verify a bank-card number was entered without a typo. I implemented it three ways — a web page, Rust and Python — and compared how the same simple idea looks across languages.", "To be clear: this is format validation, not a check of whether a card exists — it has nothing to do with fraud."],
      uk: ["Алгоритм Луна — проста контрольна формула, за якою перевіряють, що номер картки введено без друкарської помилки. Я реалізував його у трьох варіантах: вебсторінка, Rust і Python.", "Важливо: це валідація формату, а не перевірка існування картки."],
    },
  },
  {
    id: "coursework-crt", name: "Курсовая: теория чисел", aka: "КТО и метод проб",
    category: "crypto", status: "done", year: 2025,
    langs: ["Python", "Flask"], tags: ["Теория чисел", "Курсовая"],
    github: "https://github.com/AlexMelanFromRingo/coursework_year2_pt2",
    short: {
      ru: "Курсовая по математическим основам ИБ: калькулятор китайской теоремы об остатках и метод проб.",
      en: "Coursework on the mathematical foundations of security: a Chinese-remainder-theorem calculator and a trial method.",
      uk: "Курсова з математичних основ ІБ: калькулятор китайської теореми про остачі та метод проб.",
    },
    body: {
      ru: ["Вторая часть курсовой по предмету «Математические основы защиты информации». Реализован калькулятор китайской теоремы об остатках и метод проб — инструменты теории чисел, на которой стоит вся современная криптография.", "Сделана с веб-интерфейсом, чтобы решением было удобно пользоваться, а не только сдать."],
      en: ["The second part of coursework for the subject 'Mathematical foundations of information security'. It implements a Chinese-remainder-theorem calculator and a trial method — number-theory tools that all modern cryptography stands on.", "Built with a web interface so the solution is actually usable, not just submittable."],
      uk: ["Друга частина курсової з предмета «Математичні основи захисту інформації». Реалізовано калькулятор китайської теореми про остачі та метод проб.", "Зроблено з вебінтерфейсом, щоб рішенням було зручно користуватися."],
    },
  },
  {
    id: "coursework-kszi", name: "Курсовая по КСЗИ", aka: "Восстановление из видео",
    category: "crypto", status: "done", year: 2026,
    langs: ["Python"], tags: ["КСЗИ", "Курсовая", "Обработка видео"],
    github: "https://github.com/AlexMelanFromRingo/CourseWork4",
    short: {
      ru: "Курсовая работа по КСЗИ: пайплайн восстановления данных из видео плюс готовый отчёт.",
      en: "Coursework on integrated information protection: a data-recovery-from-video pipeline plus a finished report.",
      uk: "Курсова робота з КСЗІ: пайплайн відновлення даних із відео плюс готовий звіт.",
    },
    body: {
      ru: ["Курсовая по комплексным системам защиты информации. Основная часть — пайплайн на Python, который восстанавливает данные из видеозаписи, плюс полностью оформленный отчёт в .docx.", "Один из университетских проектов, где я старался сделать не отписку, а работающий инструмент."],
      en: ["Coursework on integrated information-protection systems. The core is a Python pipeline that recovers data from a video recording, plus a fully formatted .docx report.", "One of the university projects where I aimed to build a working tool rather than a token submission."],
      uk: ["Курсова з комплексних систем захисту інформації. Основна частина — пайплайн на Python, що відновлює дані з відеозапису, плюс повністю оформлений звіт у .docx.", "Один з університетських проєктів, де я намагався зробити робочий інструмент."],
    },
  },
  {
    id: "university-poc", name: "Аудит онлайн-зачётки", aka: "Responsible disclosure",
    category: "crypto", status: "done", year: 2026,
    langs: ["JavaScript"], tags: ["Аудит безопасности", "Responsible disclosure"],
    github: "https://github.com/AlexMelanFromRingo/university-exploit-poc",
    short: {
      ru: "Доказательство уязвимостей в онлайн-зачётке университета — найдено и передано ответственным.",
      en: "A proof of vulnerabilities in the university's online gradebook — found and reported responsibly.",
      uk: "Доказ уразливостей в онлайн-заліковці університету — знайдено й передано відповідальним.",
    },
    body: {
      ru: ["Учась на кафедре информационной безопасности, я нашёл уязвимости в онлайн-зачётке своего университета. Этот PoC документирует проблему технически.", "Главное здесь — как я с этим поступил: не стал ничем злоупотреблять, а пошёл в деканат, объяснил суть и связался с человеком, ответственным за систему. Это пример ответственного раскрытия — именно так и должен работать специалист по ИБ."],
      en: ["Studying at the information-security department, I found vulnerabilities in my university's online gradebook. This PoC documents the issue technically.", "The point here is how I handled it: I didn't abuse anything — I went to the dean's office, explained the problem and contacted the person responsible for the system. It's an example of responsible disclosure, which is exactly how a security specialist should work."],
      uk: ["Навчаючись на кафедрі інформаційної безпеки, я знайшов уразливості в онлайн-заліковці свого університету. Цей PoC документує проблему технічно.", "Головне тут — як я з цим вчинив: не зловживав, а пішов у деканат, пояснив суть і зв'язався з відповідальним за систему. Це приклад відповідального розкриття."],
    },
  },
  {
    id: "newline-poc", name: "GraphQL Injection PoC", aka: "Security research",
    category: "crypto", status: "done", year: 2026,
    langs: ["Security research"], tags: ["Bug bounty", "Injection", "PoC"],
    github: "https://github.com/AlexMelanFromRingo/newline-graphql-poc",
    short: {
      ru: "Эмпирическая проверка находки об инъекции через имя файла в claude-code-action.",
      en: "An empirical test of a filename-injection finding in claude-code-action.",
      uk: "Емпірична перевірка знахідки про ін'єкцію через ім'я файлу в claude-code-action.",
    },
    body: {
      ru: ["Небольшой исследовательский PoC: проверка гипотезы об уязвимости инъекции через имя файла в одном из популярных GitHub Action. Часть моей работы в области поиска уязвимостей и bug bounty.", "Такие маленькие проверки — обычная рутина в исследовании безопасности: гипотеза, минимальный воспроизводимый пример, вывод."],
      en: ["A small research PoC: testing a hypothesis about a filename-injection vulnerability in a popular GitHub Action. Part of my work in vulnerability research and bug bounty.", "Such small tests are routine in security research: a hypothesis, a minimal reproducible example, a conclusion."],
      uk: ["Невеликий дослідницький PoC: перевірка гіпотези про вразливість ін'єкції через ім'я файлу в популярному GitHub Action. Частина моєї роботи в пошуку вразливостей.", "Такі маленькі перевірки — звична рутина в дослідженні безпеки."],
    },
  },
  {
    id: "intel-f00f", name: "Intel F00F Bug", aka: "Аппаратный баг Pentium",
    category: "crypto", status: "done", year: 2026,
    langs: ["C++", "Assembly"], tags: ["Intel", "Аппаратный баг", "Низкий уровень"],
    github: "https://github.com/AlexMelanFromRingo/intel_f00f_bug",
    short: {
      ru: "Демонстрация знаменитого аппаратного бага F00F в процессорах Intel Pentium.",
      en: "A demonstration of the famous F00F hardware bug in Intel Pentium processors.",
      uk: "Демонстрація знаменитого апаратного бага F00F у процесорах Intel Pentium.",
    },
    body: {
      ru: ["F00F — легендарный баг ранних Pentium: определённая инструкция намертво вешала процессор, и любой пользователь мог положить машину. Этот проект воспроизводит и разбирает баг.", "Тема на стыке безопасности и архитектуры процессоров: уязвимость может жить не в коде, а прямо в железе."],
      en: ["F00F is a legendary early-Pentium bug: a specific instruction hung the CPU dead, and any user could crash the machine. This project reproduces and dissects the bug.", "A topic at the crossroads of security and CPU architecture: a vulnerability can live not in code but right in the hardware."],
      uk: ["F00F — легендарний баг ранніх Pentium: певна інструкція намертво вішала процесор, і будь-який користувач міг покласти машину. Цей проєкт відтворює й розбирає баг.", "Тема на стику безпеки й архітектури процесорів."],
    },
  },
];
