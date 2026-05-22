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
        "Сайт, который пошагово и с анимациями объясняет, как устроена защита Wi-Fi. Рассчитан на абсолютных новичков: с подсказками, схемами потоков данных и без требования заранее знать криптографию.",
        "Три модуля. Первый — рукопожатие WPA2 4-Way Handshake: анимация вывода ключа PMK через PBKDF2, обмен ANonce/SNonce, сборка PTK и создание MIC. Второй — обмен WPA3 SAE (Dragonfly): как пароль превращается в точку эллиптической кривой P-256 и почему перехват не даёт подобрать его офлайн. Третий — симулятор атаки Hashcat в режиме 22000 с переключателем PMKID / EAPOL.",
        "Цель — показать математику и логику атак так, чтобы понял каждый: где слабое место WPA2, почему WPA3 устойчив к офлайн-перебору и как вообще работает перехват рукопожатия.",
      ],
      en: [
        "A site that explains Wi-Fi security step by step with animations. Aimed at absolute beginners: with hints, data-flow diagrams and no requirement to know cryptography beforehand.",
        "Three modules. The first — the WPA2 4-Way Handshake: an animation of PMK derivation via PBKDF2, the ANonce/SNonce exchange, PTK assembly and MIC creation. The second — the WPA3 SAE (Dragonfly) exchange: how a password becomes a point on the P-256 elliptic curve and why a capture can't crack it offline. The third — a simulator of the Hashcat 22000 attack with a PMKID / EAPOL switch.",
        "The goal is to show the maths and logic of the attacks so anyone gets it: where WPA2 is weak, why WPA3 resists offline cracking and how handshake capture works at all.",
      ],
      uk: [
        "Сайт, що покроково й з анімаціями пояснює, як влаштований захист Wi-Fi. Розрахований на абсолютних новачків.",
        "Три модулі: рукостискання WPA2 4-Way Handshake з виведенням PMK через PBKDF2; обмін WPA3 SAE (Dragonfly) з точкою на кривій P-256; симулятор атаки Hashcat у режимі 22000 з перемикачем PMKID / EAPOL.",
        "Мета — показати математику й логіку атак так, щоб зрозумів кожен.",
      ],
    },
    features: {
      ru: ["Модуль WPA2: 4-Way Handshake, PMK через PBKDF2, PTK, MIC", "Модуль WPA3 SAE: пароль как точка кривой P-256", "Симулятор Hashcat 22000 с режимами PMKID и EAPOL", "Пошаговые анимации и схемы потоков данных", "Рассчитано на новичков без знания криптографии"],
      en: ["WPA2 module: 4-Way Handshake, PMK via PBKDF2, PTK, MIC", "WPA3 SAE module: a password as a P-256 curve point", "Hashcat 22000 simulator with PMKID and EAPOL modes", "Step-by-step animations and data-flow diagrams", "Aimed at beginners with no cryptography background"],
      uk: ["Модуль WPA2: 4-Way Handshake, PMK через PBKDF2, PTK, MIC", "Модуль WPA3 SAE: пароль як точка кривої P-256", "Симулятор Hashcat 22000 з режимами PMKID і EAPOL", "Покрокові анімації та схеми потоків даних", "Розраховано на новачків без знання криптографії"],
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
        "Kalyna — государственный стандарт блочного шифрования Украины (ДСТУ 7624:2014), но в популярных инструментах подбора его поддержки не было. Этот проект закрывает пробел.",
        "Плагин добавляет в hashcat пять режимов атаки на известный открытый текст для всех вариантов Kalyna — от 128/128 (режим -m 36000) до 512/512. Реализация доведена до конца: режимы работают сквозным образом и на CUDA, и на OpenCL/PoCL.",
        "В комплекте — переносимая хостовая референс-реализация всех пяти вариантов шифра для сверки результатов. Проект — часть моего интереса к украинской криптографии и национальным стандартам.",
      ],
      en: [
        "Kalyna is Ukraine's state block-encryption standard (DSTU 7624:2014), but popular cracking tools didn't support it. This project closes the gap.",
        "The plugin adds five known-plaintext attack modes to hashcat for every Kalyna variant — from 128/128 (mode -m 36000) to 512/512. The implementation is finished: the modes run end-to-end on both CUDA and OpenCL/PoCL.",
        "It ships with a portable host reference implementation of all five cipher variants for cross-checking results. The project is part of my interest in Ukrainian cryptography and national standards.",
      ],
      uk: [
        "«Калина» — державний стандарт блокового шифрування України (ДСТУ 7624:2014), але в популярних інструментах підбору його не було.",
        "Плагін додає в hashcat п'ять режимів атаки на відкритий текст для всіх варіантів — від 128/128 до 512/512. Працює і на CUDA, і на OpenCL/PoCL.",
        "У комплекті — переносима хостова реалізація всіх п'яти варіантів для звірки.",
      ],
    },
    features: {
      ru: ["Пять режимов атаки: от Kalyna-128/128 до 512/512", "Атака на известный открытый текст (KPA)", "Работает на CUDA и OpenCL/PoCL", "Хостовая референс-реализация всех вариантов шифра", "Поддержка украинского стандарта ДСТУ 7624:2014 в hashcat"],
      en: ["Five attack modes: from Kalyna-128/128 to 512/512", "Known-plaintext attack (KPA)", "Runs on CUDA and OpenCL/PoCL", "A host reference of all cipher variants", "DSTU 7624:2014 support brought into hashcat"],
      uk: ["П'ять режимів атаки: від Kalyna-128/128 до 512/512", "Атака на відкритий текст (KPA)", "Працює на CUDA та OpenCL/PoCL", "Хостова реалізація всіх варіантів шифру", "Підтримка ДСТУ 7624:2014 у hashcat"],
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
      ru: [
        "Учебный тренажёр по RSA, написанный на Rust и собранный в WebAssembly через фреймворк Yew. Маленький модуль в 16 бит выбран намеренно — так все числа умещаются в голове, и алгоритм виден целиком.",
        "Три режима. Демонстрация — пошаговая визуализация генерации ключей и шифрования. Практика — решение задач с мгновенной проверкой и подсказками. Режим преподавателя — проверка работ студентов по коду подтверждения.",
        "Интерфейс на трёх языках (английский, украинский, русский), тёмная и светлая темы. Всё собрано в один исполняемый файл со встроенным веб-сервером — удобно раздать студентам.",
      ],
      en: [
        "An RSA training tool written in Rust and compiled to WebAssembly via the Yew framework. The tiny 16-bit modulus is deliberate — that way all numbers fit in your head and the whole algorithm is visible at once.",
        "Three modes. Demo — step-by-step visualization of key generation and encryption. Practice — solving tasks with instant checks and hints. Teacher mode — validating student work via a verification code.",
        "The interface is trilingual (English, Ukrainian, Russian), with dark and light themes. Everything is bundled into one executable with an embedded web server — handy to hand out to students.",
      ],
      uk: [
        "Навчальний тренажер з RSA, написаний на Rust і зібраний у WebAssembly через Yew. Маленький модуль у 16 біт обрано навмисно.",
        "Три режими: демонстрація з покроковою візуалізацією, практика з підказками, режим викладача з перевіркою робіт за кодом.",
        "Інтерфейс трьома мовами, темна й світла теми, усе зібрано в один виконуваний файл зі вбудованим вебсервером.",
      ],
    },
    features: {
      ru: ["Три режима: демонстрация, практика, проверка преподавателем", "Пошаговая визуализация генерации ключей RSA", "16-битный модуль — все числа умещаются в голове", "Интерфейс на трёх языках, тёмная и светлая темы", "Один исполняемый файл со встроенным веб-сервером"],
      en: ["Three modes: demo, practice, teacher verification", "Step-by-step visualization of RSA key generation", "A 16-bit modulus — all numbers fit in your head", "Trilingual interface, dark and light themes", "A single executable with an embedded web server"],
      uk: ["Три режими: демонстрація, практика, перевірка викладачем", "Покрокова візуалізація генерації ключів RSA", "16-бітний модуль — усі числа вміщуються в голові", "Інтерфейс трьома мовами, темна й світла теми", "Один виконуваний файл зі вбудованим вебсервером"],
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
      ru: [
        "Чистая реализация блочного шифра Kalyna на C — фундамент, на котором строился плагин KalynaMode для hashcat. Покрывает все пять вариантов стандарта ДСТУ 7624:2014 с разными размерами блока и ключа.",
        "Задача такой библиотеки — быть эталоном: предсказуемой, переносимой, легко проверяемой реализацией, по которой можно сверять более сложные версии (например, GPU-ядра в KalynaMode).",
        "Изучение Kalyna — часть моего интереса к украинской криптографии и тому, как устроены национальные стандарты шифрования.",
      ],
      en: [
        "A clean C implementation of the Kalyna block cipher — the foundation the KalynaMode hashcat plugin was built on. It covers all five variants of the DSTU 7624:2014 standard with different block and key sizes.",
        "The point of a library like this is to be a reference: a predictable, portable, easily verifiable implementation you can check more complex versions against (the GPU kernels in KalynaMode, for example).",
        "Studying Kalyna is part of my interest in Ukrainian cryptography and how national encryption standards are built.",
      ],
      uk: [
        "Чиста реалізація блокового шифру «Калина» на C — фундамент, на якому будувався плагін KalynaMode.",
        "Завдання такої бібліотеки — бути еталоном: передбачуваною, переносимою реалізацією для звірки складніших версій.",
        "Вивчення «Калини» — частина мого інтересу до української криптографії.",
      ],
    },
    features: {
      ru: ["Все пять вариантов стандарта ДСТУ 7624:2014", "Чистая переносимая реализация на C", "Эталон для сверки GPU-ядер KalynaMode", "Разные размеры блока и ключа"],
      en: ["All five variants of the DSTU 7624:2014 standard", "A clean, portable C implementation", "A reference for checking KalynaMode's GPU kernels", "Different block and key sizes"],
      uk: ["Усі п'ять варіантів стандарту ДСТУ 7624:2014", "Чиста переносима реалізація на C", "Еталон для звірки GPU-ядер KalynaMode", "Різні розміри блока й ключа"],
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
      ru: [
        "Тот же шифр Kalyna, но переписанный на Rust. После C-версии было интересно сделать реализацию, где компилятор сам страхует от ошибок работы с памятью — а в криптокоде такая ошибка особенно опасна.",
        "Rust здесь не теряет в скорости относительно C, но убирает целый класс багов: выход за границу буфера, использование освобождённой памяти. Для шифра, которому доверяют данные, это весомый плюс.",
        "Часть набора проектов вокруг Kalyna: C-референс libkalyna-c, этот Rust-порт и плагин KalynaMode для hashcat.",
      ],
      en: [
        "The same Kalyna cipher, rewritten in Rust. After the C version it was interesting to build an implementation where the compiler itself guards against memory bugs — and in crypto code such a bug is especially dangerous.",
        "Rust here doesn't lose speed against C but removes a whole class of bugs: buffer overruns, use-after-free. For a cipher trusted with data, that's a meaningful plus.",
        "Part of the Kalyna project set: the C reference libkalyna-c, this Rust port and the KalynaMode hashcat plugin.",
      ],
      uk: [
        "Той самий шифр «Калина», переписаний на Rust. Компілятор сам страхує від помилок роботи з пам'яттю.",
        "Rust не втрачає у швидкості відносно C, але прибирає цілий клас багів. Для шифру це вагомий плюс.",
        "Частина набору проєктів навколо «Калини».",
      ],
    },
    features: {
      ru: ["Реализация шифра Kalyna на Rust", "Безопасность по памяти без потери скорости", "Защита от выхода за буфер и use-after-free", "Часть набора Kalyna вместе с libkalyna-c и KalynaMode"],
      en: ["A Rust implementation of the Kalyna cipher", "Memory safety without losing speed", "Protection from buffer overruns and use-after-free", "Part of the Kalyna set with libkalyna-c and KalynaMode"],
      uk: ["Реалізація шифру «Калина» на Rust", "Безпека за пам'яттю без втрати швидкості", "Захист від виходу за буфер і use-after-free", "Частина набору «Калини»"],
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
      ru: [
        "Веб-приложение на Angular, которое наглядно показывает внутренности AES — самого распространённого блочного шифра в мире. Каждый шаг раунда можно посмотреть на конкретных байтах.",
        "Разобраны все операции: подстановка SubBytes, сдвиг строк ShiftRows, перемешивание столбцов MixColumns, наложение раундового ключа и расписание ключей. Видно, что именно происходит с блоком данных на каждом шаге.",
        "Сделано как учебный инструмент: криптография становится понятнее, когда её видишь, а не читаешь формулы. Один из серии моих интерактивных образовательных демо вместе с RSA-16 и методичкой по Wi-Fi.",
      ],
      en: [
        "An Angular web app that visually shows the internals of AES — the world's most widespread block cipher. Each round step can be watched on concrete bytes.",
        "All operations are dissected: the SubBytes substitution, the ShiftRows shift, the MixColumns mixing, round-key addition and the key schedule. You see exactly what happens to a data block at each step.",
        "Built as a learning tool: cryptography is clearer when you see it rather than read formulas. One of a series of my interactive educational demos alongside RSA-16 and the Wi-Fi guide.",
      ],
      uk: [
        "Вебзастосунок на Angular, що наочно показує нутрощі AES — найпоширенішого блокового шифру.",
        "Розібрано всі операції: SubBytes, ShiftRows, MixColumns, накладання раундового ключа та розклад ключів.",
        "Зроблено як навчальний інструмент. Один із серії моїх інтерактивних освітніх демо.",
      ],
    },
    features: {
      ru: ["Пошаговый разбор раундов AES на конкретных байтах", "Все операции: SubBytes, ShiftRows, MixColumns, ключи", "Визуализация расписания ключей", "Учебный инструмент на Angular"],
      en: ["Step-by-step breakdown of AES rounds on concrete bytes", "All operations: SubBytes, ShiftRows, MixColumns, keys", "Key-schedule visualization", "A learning tool built with Angular"],
      uk: ["Покроковий розбір раундів AES на конкретних байтах", "Усі операції: SubBytes, ShiftRows, MixColumns, ключі", "Візуалізація розкладу ключів", "Навчальний інструмент на Angular"],
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
      ru: [
        "Гид по кодам коррекции ошибок — тому, как данные восстанавливаются после повреждений при передаче или хранении. Без этих кодов не работали бы ни Wi-Fi, ни QR-коды, ни связь с космическими аппаратами.",
        "Разобраны четыре семейства: коды Хэмминга, Рида-Соломона, LDPC и полярные. По каждому можно вносить ошибки в данные и смотреть, как код их обнаруживает и исправляет.",
        "Тема на стыке математики и теории связи, и интерактив помогает прочувствовать её куда лучше учебника. Сделано на Angular как образовательный инструмент.",
      ],
      en: [
        "A guide to error-correcting codes — how data recovers after corruption in transmission or storage. Without these codes there'd be no Wi-Fi, no QR codes, no communication with spacecraft.",
        "Four families are dissected: Hamming, Reed-Solomon, LDPC and polar codes. For each you can inject errors into data and watch the code detect and fix them.",
        "It's a topic at the crossroads of maths and communications theory, and interaction conveys it far better than a textbook. Built with Angular as an educational tool.",
      ],
      uk: [
        "Гід з кодів корекції помилок — того, як дані відновлюються після пошкоджень. Без них не працювали б ні Wi-Fi, ні QR-коди.",
        "Розібрано чотири сімейства: коди Геммінга, Ріда-Соломона, LDPC та полярні. Можна вносити помилки й дивитися, як код їх виправляє.",
        "Тема на стику математики й теорії зв'язку. Зроблено на Angular.",
      ],
    },
    features: {
      ru: ["Четыре семейства: Хэмминг, Рида-Соломона, LDPC, полярные", "Внесение ошибок и наглядное их исправление", "Интерактивный разбор каждого кода", "Образовательный инструмент на Angular"],
      en: ["Four families: Hamming, Reed-Solomon, LDPC, polar", "Injecting errors and watching them get fixed", "Interactive breakdown of each code", "An educational tool built with Angular"],
      uk: ["Чотири сімейства: Геммінг, Рід-Соломон, LDPC, полярні", "Внесення помилок і наочне їх виправлення", "Інтерактивний розбір кожного коду", "Освітній інструмент на Angular"],
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
      ru: [
        "Наглядное демо алгоритма HOTP — одноразовых паролей на основе счётчика, описанных в стандарте RFC 4226. Показывает каждый шаг: общий секрет, значение счётчика, HMAC, усечение до шестизначного кода.",
        "Главная идея, которую демо доносит: сервер и устройство хранят один секрет и синхронно увеличивают счётчик, поэтому оба получают одинаковый код, не передавая его по сети.",
        "Простой и честный разбор того, что лежит в основе аппаратных токенов и приложений-аутентификаторов. Пара к моему TOTP Demo.",
      ],
      en: [
        "A clear demo of the HOTP algorithm — counter-based one-time passwords described in RFC 4226. It shows every step: the shared secret, the counter value, HMAC, truncation to a six-digit code.",
        "The key idea the demo conveys: the server and the device store one secret and increment the counter in sync, so both arrive at the same code without sending it over the network.",
        "A simple, honest breakdown of what underlies hardware tokens and authenticator apps. A companion to my TOTP Demo.",
      ],
      uk: [
        "Наочне демо алгоритму HOTP — одноразових паролів на основі лічильника (RFC 4226). Показує кожен крок: секрет, лічильник, HMAC, усічення до коду.",
        "Головна ідея: сервер і пристрій зберігають один секрет і синхронно збільшують лічильник.",
        "Простий розбір того, що лежить в основі апаратних токенів. Пара до мого TOTP Demo.",
      ],
    },
    features: {
      ru: ["Пошаговый разбор алгоритма HOTP (RFC 4226)", "Секрет, счётчик, HMAC, усечение до кода", "Объясняет синхронизацию сервера и устройства", "Учебное веб-демо"],
      en: ["Step-by-step breakdown of the HOTP algorithm (RFC 4226)", "Secret, counter, HMAC, truncation to a code", "Explains server-device synchronization", "An educational web demo"],
      uk: ["Покроковий розбір алгоритму HOTP (RFC 4226)", "Секрет, лічильник, HMAC, усічення до коду", "Пояснює синхронізацію сервера й пристрою", "Навчальне вебдемо"],
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
      ru: [
        "Продолжение демо про HOTP. TOTP использует не счётчик, а текущее время, делённое на 30-секундный шаг — поэтому код меняется каждые полминуты сам по себе. Именно так работает большинство приложений-аутентификаторов.",
        "Демо показывает, как метка времени превращается в одноразовый код и почему сервер и телефон сходятся в одном значении, даже не общаясь напрямую — у них синхронизированы часы и общий секрет.",
        "Вместе с HOTP Demo это пара, объясняющая всю основу двухфакторной аутентификации по одноразовым паролям.",
      ],
      en: [
        "A follow-up to the HOTP demo. TOTP uses not a counter but the current time divided by a 30-second step — so the code changes on its own every half-minute. That's how most authenticator apps work.",
        "The demo shows how a timestamp becomes a one-time code and why the server and the phone agree on one value without even talking directly — their clocks and shared secret are in sync.",
        "Together with the HOTP Demo it's a pair explaining the whole basis of one-time-password two-factor authentication.",
      ],
      uk: [
        "Продовження демо про HOTP. TOTP використовує не лічильник, а поточний час, тож код змінюється кожні 30 секунд.",
        "Демо показує, як мітка часу перетворюється на одноразовий код і чому сервер і телефон сходяться в одному значенні.",
        "Разом із HOTP Demo це пара, що пояснює основу двофакторної автентифікації.",
      ],
    },
    features: {
      ru: ["Разбор алгоритма TOTP (RFC 6238)", "Код на основе времени с 30-секундным шагом", "Объясняет работу приложений-аутентификаторов", "Пара к HOTP Demo"],
      en: ["Breakdown of the TOTP algorithm (RFC 6238)", "A time-based code with a 30-second step", "Explains how authenticator apps work", "A companion to the HOTP Demo"],
      uk: ["Розбір алгоритму TOTP (RFC 6238)", "Код на основі часу з 30-секундним кроком", "Пояснює роботу застосунків-автентифікаторів", "Пара до HOTP Demo"],
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
      ru: [
        "Та же тема одноразовых паролей по времени, что и в веб-демо, но в виде нативной Rust-реализации. Если веб-демо объясняет идею, то здесь — рабочий код, который можно встроить в проект.",
        "Реализован полный путь: общий секрет, расчёт кода по времени через HMAC, проверка введённого кода с допуском на рассинхрон часов.",
        "Логично легло в один ряд с ObsidianAuth (2FA-плагин для Minecraft) и rust-otp-system — общая для них всех тема двухфакторной аутентификации.",
      ],
      en: [
        "The same time-based one-time-password topic as the web demo, but as a native Rust implementation. Where the web demo explains the idea, here is working code you can embed in a project.",
        "The full path is implemented: a shared secret, computing the time-based code via HMAC, verifying an entered code with tolerance for clock drift.",
        "It fits naturally alongside ObsidianAuth (a 2FA plugin for Minecraft) and rust-otp-system — two-factor authentication is the theme common to all of them.",
      ],
      uk: [
        "Та сама тема одноразових паролів за часом, але у вигляді нативної Rust-реалізації.",
        "Реалізовано повний шлях: секрет, розрахунок коду через HMAC, перевірка з допуском на розсинхрон годинників.",
        "Логічно лягло в один ряд з ObsidianAuth і rust-otp-system.",
      ],
    },
    features: {
      ru: ["Нативная реализация TOTP на Rust", "Расчёт кода по времени через HMAC", "Проверка с допуском на рассинхрон часов", "Переиспользуемый код для 2FA-проектов"],
      en: ["A native TOTP implementation in Rust", "Time-based code computation via HMAC", "Verification with tolerance for clock drift", "Reusable code for 2FA projects"],
      uk: ["Нативна реалізація TOTP на Rust", "Розрахунок коду за часом через HMAC", "Перевірка з допуском на розсинхрон годинників", "Перевикористовуваний код для 2FA-проєктів"],
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
      ru: [
        "Учебная, но доведённая до аккуратного вида система одноразовых паролей на Rust. Делалась как работа для университета — но там, где обычно сдают минимум, мне было интереснее собрать что-то цельное и современное.",
        "Показывает полный путь системы аутентификации: регистрация секрета, генерация кодов, их проверка. По сути небольшая, но настоящая OTP-система, а не разрозненные функции.",
        "Часть моей серии проектов про одноразовые пароли вместе с HOTP/TOTP-демками и rust-totp-demo.",
      ],
      en: [
        "An academic but polished one-time-password system in Rust. Built as a university assignment — but where the usual move is to hand in the minimum, I found it more interesting to assemble something whole and modern.",
        "It shows the full path of an authentication system: secret registration, code generation, verification. Essentially a small but real OTP system rather than scattered functions.",
        "Part of my series of one-time-password projects alongside the HOTP/TOTP demos and rust-totp-demo.",
      ],
      uk: [
        "Навчальна, але доведена до акуратного вигляду система одноразових паролів на Rust. Робилася як робота для університету.",
        "Показує повний шлях системи автентифікації: реєстрація секрету, генерація кодів, перевірка.",
        "Частина моєї серії проєктів про одноразові паролі.",
      ],
    },
    features: {
      ru: ["Полный путь OTP-системы: регистрация, генерация, проверка", "Аккуратная цельная реализация на Rust", "Сделано как университетская работа выше минимума", "Часть серии проектов про одноразовые пароли"],
      en: ["The full OTP-system path: registration, generation, verification", "A tidy, whole implementation in Rust", "Built as a university assignment above the minimum", "Part of the one-time-password project series"],
      uk: ["Повний шлях OTP-системи: реєстрація, генерація, перевірка", "Акуратна цілісна реалізація на Rust", "Зроблено як університетська робота вище мінімуму", "Частина серії проєктів про одноразові паролі"],
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
      ru: [
        "RC4, но не в виде программы, а как описание схемы на VHDL — то, что можно синтезировать в реальную аппаратную логику FPGA. Это совсем другой способ думать о шифре.",
        "В программе шифр — это последовательность инструкций. В VHDL это параллельная схема из регистров, сигналов и логики, где всё происходит одновременно по тактам. Состояние RC4 — таблица перестановки — становится аппаратным блоком памяти.",
        "Проект на пересечении криптографии и цифровой схемотехники. Рядом стоит мой rust-rc4 — тот же шифр, но как обычная программа, и сравнивать эти два подхода особенно интересно.",
      ],
      en: [
        "RC4, but not as a program — as a circuit description in VHDL, the kind you can synthesise into real FPGA hardware logic. It's a completely different way to think about a cipher.",
        "In a program a cipher is a sequence of instructions. In VHDL it's a parallel circuit of registers, signals and logic where everything happens at once, clocked. RC4's state — the permutation table — becomes a hardware memory block.",
        "A project at the intersection of cryptography and digital circuit design. Alongside it sits my rust-rc4 — the same cipher but as an ordinary program, and comparing the two approaches is especially interesting.",
      ],
      uk: [
        "RC4, але не у вигляді програми, а як опис схеми мовою VHDL — те, що можна синтезувати в реальну апаратну логіку FPGA.",
        "У VHDL це паралельна схема з регістрів, сигналів і логіки, де все відбувається одночасно по тактах.",
        "Проєкт на перетині криптографії та цифрової схемотехніки. Рядом стоїть мій rust-rc4.",
      ],
    },
    features: {
      ru: ["Потоковый шифр RC4 как аппаратная схема", "Описание на VHDL — синтезируется в логику FPGA", "Состояние шифра как аппаратный блок памяти", "Криптография глазами схемотехники"],
      en: ["The RC4 stream cipher as a hardware circuit", "Described in VHDL — synthesises into FPGA logic", "Cipher state as a hardware memory block", "Cryptography seen through circuit design"],
      uk: ["Потоковий шифр RC4 як апаратна схема", "Опис мовою VHDL — синтезується в логіку FPGA", "Стан шифру як апаратний блок пам'яті", "Криптографія очима схемотехніки"],
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
      ru: [
        "Программная реализация RC4 на Rust — пара к аппаратной vhdl-rc4. RC4 уже устарел и небезопасен для реального применения, но он простой и наглядный, поэтому идеален для изучения.",
        "На нём удобно понять, как вообще устроены потоковые шифры: инициализация таблицы перестановки по ключу, генерация псевдослучайного потока, наложение его на данные через XOR.",
        "Маленький, аккуратный проект для понимания основ — фундамент, без которого тяжело разбираться в более серьёзных шифрах.",
      ],
      en: [
        "A software implementation of RC4 in Rust — the counterpart to the hardware vhdl-rc4. RC4 is outdated and insecure for real use now, but it's simple and clear, which makes it ideal for learning.",
        "It's a convenient way to understand how stream ciphers work at all: initializing the permutation table from the key, generating a pseudo-random stream, XOR-ing it onto the data.",
        "A small, tidy project for understanding the basics — the foundation that makes more serious ciphers easier to grasp.",
      ],
      uk: [
        "Програмна реалізація RC4 на Rust — пара до апаратної vhdl-rc4. RC4 застарів, але простий і наочний.",
        "На ньому зручно зрозуміти, як влаштовані потокові шифри: ініціалізація таблиці, генерація потоку, накладання через XOR.",
        "Маленький, акуратний проєкт для розуміння основ.",
      ],
    },
    features: {
      ru: ["Реализация потокового шифра RC4 на Rust", "Инициализация таблицы перестановки по ключу", "Генерация потока и наложение через XOR", "Учебная пара к аппаратной vhdl-rc4"],
      en: ["An RC4 stream-cipher implementation in Rust", "Permutation-table initialization from the key", "Stream generation and XOR application", "An educational counterpart to the hardware vhdl-rc4"],
      uk: ["Реалізація потокового шифру RC4 на Rust", "Ініціалізація таблиці перестановки за ключем", "Генерація потоку й накладання через XOR", "Навчальна пара до апаратної vhdl-rc4"],
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
      ru: [
        "CRC32 — это контрольная сумма для обнаружения случайных ошибок, а не криптографический хэш. Разница принципиальна, и этот инструмент показывает её на практике.",
        "К любому файлу можно дописать всего четыре байта так, чтобы его CRC32 стал равен любому наперёд заданному значению. CRC32 линеен по своей математике, поэтому нужные байты вычисляются напрямую, без перебора.",
        "Хорошая иллюстрация того, почему контрольную сумму нельзя путать с защитой целостности: подделать CRC32 тривиально, и доверять ему как доказательству подлинности нельзя.",
      ],
      en: [
        "CRC32 is a checksum for detecting random errors, not a cryptographic hash. The difference is fundamental, and this tool shows it in practice.",
        "You can append just four bytes to any file so its CRC32 equals any value you specify in advance. CRC32 is linear in its maths, so the required bytes are computed directly, with no brute force.",
        "A good illustration of why a checksum must not be confused with integrity protection: forging a CRC32 is trivial, and it can't be trusted as proof of authenticity.",
      ],
      uk: [
        "CRC32 — це контрольна сума для виявлення випадкових помилок, а не криптографічний хеш.",
        "До будь-якого файлу можна дописати лише чотири байти так, щоб його CRC32 став потрібним. CRC32 лінійний, тож байти обчислюються напряму.",
        "Гарна ілюстрація того, чому контрольну суму не можна плутати із захистом цілісності.",
      ],
    },
    features: {
      ru: ["Подбор данных под заданное значение CRC32", "Прямое вычисление байт без перебора (CRC32 линеен)", "Дописывает к файлу всего 4 байта", "Демонстрация: контрольная сумма ≠ защита целостности"],
      en: ["Crafts data to match a chosen CRC32 value", "Direct byte computation, no brute force (CRC32 is linear)", "Appends just 4 bytes to a file", "Demonstrates: a checksum ≠ integrity protection"],
      uk: ["Добір даних під задане значення CRC32", "Пряме обчислення байтів без перебору", "Дописує до файлу лише 4 байти", "Демонстрація: контрольна сума ≠ захист цілісності"],
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
      ru: [
        "Практическая реализация атаки на хэш-функцию MD5 — поиск двух разных блоков данных, дающих одинаковый хэш. MD5 криптографически сломан уже давно, но знать это и собрать рабочую атаку своими руками — разные уровни понимания.",
        "Атака на один блок особенно показательна: она ищет коллизию в минимально возможном объёме данных, и за этим стоит серьёзный дифференциальный криптоанализ — анализ того, как различия во входе распространяются по раундам функции.",
        "Часть моего изучения криптоанализа хэш-функций — наряду с работой по коллизиям CRC32 и FNV-1a.",
      ],
      en: [
        "A practical implementation of an attack on the MD5 hash function — finding two different data blocks that produce the same hash. MD5 has been cryptographically broken for a long time, but knowing that and building a working attack yourself are different levels of understanding.",
        "A single-block attack is especially telling: it searches for a collision in the smallest possible amount of data, and behind it is serious differential cryptanalysis — analysing how input differences propagate through the function's rounds.",
        "Part of my study of hash-function cryptanalysis — alongside the work on CRC32 and FNV-1a collisions.",
      ],
      uk: [
        "Практична реалізація атаки на хеш-функцію MD5 — пошук двох різних блоків з однаковим хешем.",
        "Атака на один блок особливо показова: за нею стоїть серйозний диференціальний криптоаналіз.",
        "Частина мого вивчення криптоаналізу хеш-функцій.",
      ],
    },
    features: {
      ru: ["Поиск коллизий MD5 в пределах одного блока", "Дифференциальный криптоанализ хэш-функции", "Практическая, а не теоретическая атака", "Часть изучения криптоанализа хэшей"],
      en: ["MD5 collision search within a single block", "Differential cryptanalysis of the hash function", "A practical, not theoretical, attack", "Part of studying hash cryptanalysis"],
      uk: ["Пошук колізій MD5 у межах одного блоку", "Диференціальний криптоаналіз хеш-функції", "Практична, а не теоретична атака", "Частина вивчення криптоаналізу хешів"],
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
      ru: [
        "Если нужно посчитать миллионы хэшей MD5 — например, при переборе или анализе — наивный цикл по одному значению работает медленно. Этот проект решает задачу иначе.",
        "Алгоритм MD5 переписан так, чтобы обрабатывать множество входных значений одновременно через векторные операции: одна и та же операция применяется сразу к целому массиву. Это идея SIMD, реализованная средствами Python.",
        "Эксперимент с тем, как ускорить хэширование, не переходя на GPU или C — иногда правильная организация вычислений важнее смены языка.",
      ],
      en: [
        "If you need to compute millions of MD5 hashes — during brute force or analysis, for example — a naive loop over one value at a time is slow. This project solves it differently.",
        "The MD5 algorithm is rewritten to process many input values at once via vectorized operations: the same operation is applied to a whole array. It's the SIMD idea, implemented with Python tools.",
        "An experiment in how to speed up hashing without moving to GPU or C — sometimes the right organization of computation matters more than changing the language.",
      ],
      uk: [
        "Якщо потрібно порахувати мільйони хешів MD5, наївний цикл працює повільно.",
        "Алгоритм MD5 переписано так, щоб обробляти багато входів одночасно через векторні операції — це ідея SIMD.",
        "Експеримент із тим, як прискорити хешування без переходу на GPU чи C.",
      ],
    },
    features: {
      ru: ["Параллельный расчёт множества хэшей MD5", "Векторные операции в стиле SIMD", "Ускорение без перехода на GPU или C", "Полезно при переборе и массовом анализе"],
      en: ["Parallel computation of many MD5 hashes", "SIMD-style vectorized operations", "Speedup without moving to GPU or C", "Useful for brute force and mass analysis"],
      uk: ["Паралельний розрахунок багатьох хешів MD5", "Векторні операції в стилі SIMD", "Прискорення без переходу на GPU чи C", "Корисно при переборі та масовому аналізі"],
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
      ru: [
        "Blake2 — быстрая современная криптографическая хэш-функция, которую я выбрал, чтобы разобрать по косточкам. Обе версии написаны вручную: Blake2s, оптимизированная под 32-битные платформы, и Blake2b под 64-битные.",
        "Реализации сверены с эталонными значениями — это важно: хэш-функция, которая считает «почти правильно», бесполезна. Внутри — функция сжатия, перемешивание, работа с блоками.",
        "Blake2 потом всплывал в других моих проектах: в блокчейне MicroChain и в GPU-майнере blakeout-gpu. Понимание хэш-функции изнутри окупается во всём, что касается безопасности.",
      ],
      en: [
        "Blake2 is a fast modern cryptographic hash function I picked to take apart bone by bone. Both versions are written by hand: Blake2s, optimized for 32-bit platforms, and Blake2b for 64-bit.",
        "The implementations are checked against reference values — which matters: a hash function that computes 'almost right' is useless. Inside is the compression function, mixing, block handling.",
        "Blake2 later surfaced in other projects of mine: the MicroChain blockchain and the blakeout-gpu GPU miner. Understanding a hash function from the inside pays off across everything security-related.",
      ],
      uk: [
        "Blake2 — швидка сучасна криптографічна хеш-функція, яку я обрав, щоб розібрати до кісток. Обидві версії написані вручну.",
        "Реалізації звірені з еталонними значеннями — це важливо: хеш, що рахує «майже правильно», марний.",
        "Blake2 потім зринала в інших моїх проєктах: у блокчейні MicroChain і в GPU-майнері blakeout-gpu.",
      ],
    },
    features: {
      ru: ["Реализации Blake2s и Blake2b с нуля", "Blake2s под 32-битные, Blake2b под 64-битные платформы", "Сверка с эталонными значениями", "Фундамент для блокчейна и GPU-майнинга"],
      en: ["From-scratch Blake2s and Blake2b implementations", "Blake2s for 32-bit, Blake2b for 64-bit platforms", "Verified against reference values", "A foundation for blockchain and GPU mining"],
      uk: ["Реалізації Blake2s і Blake2b з нуля", "Blake2s під 32-бітні, Blake2b під 64-бітні платформи", "Звірка з еталонними значеннями", "Фундамент для блокчейна та GPU-майнінгу"],
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
      ru: [
        "FNV-1a и CRC32 — быстрые функции, созданные для хэш-таблиц и контрольных сумм, но не для безопасности. В этом проекте я искал у них коллизии — пары входов с одинаковым выходом.",
        "Поиск ускорен на CUDA: видеокарта перебирает огромное число вариантов параллельно. Получается наглядно показать, насколько легко найти коллизию у функции, не предназначенной для защиты.",
        "Практическое продолжение темы хэшей: чем хэш «для скорости» принципиально отличается от хэша «для защиты». Рядом — отдельный инструмент crc32-collider.",
      ],
      en: [
        "FNV-1a and CRC32 are fast functions made for hash tables and checksums, not for security. In this project I searched for collisions in them — pairs of inputs with the same output.",
        "The search is CUDA-accelerated: the GPU brute-forces a huge number of variants in parallel. It clearly shows how easy it is to find a collision in a function not designed for protection.",
        "A practical continuation of the hashing theme: how a hash 'for speed' fundamentally differs from a hash 'for protection'. Alongside it is the separate crc32-collider tool.",
      ],
      uk: [
        "FNV-1a і CRC32 — швидкі функції для хеш-таблиць і контрольних сум, але не для безпеки. Тут я шукав у них колізії.",
        "Пошук прискорено на CUDA: відеокарта перебирає величезне число варіантів паралельно.",
        "Практичне продовження теми хешів: чим хеш «для швидкості» відрізняється від хеша «для захисту».",
      ],
    },
    features: {
      ru: ["Поиск коллизий у FNV-1a и CRC32", "Перебор с ускорением на CUDA", "Наглядная демонстрация слабости нехэш-функций", "Связан с инструментом crc32-collider"],
      en: ["Collision search for FNV-1a and CRC32", "CUDA-accelerated brute force", "A clear demonstration of non-crypto-hash weakness", "Related to the crc32-collider tool"],
      uk: ["Пошук колізій у FNV-1a і CRC32", "Перебір з прискоренням на CUDA", "Наочна демонстрація слабкості некрипто-функцій", "Пов'язаний з інструментом crc32-collider"],
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
      ru: [
        "Эксперимент с защитой исходного кода: код хранится зашифрованным и расшифровывается только в момент выполнения, в памяти. На диске лежит шифротекст, в редакторе его не прочитать.",
        "Полностью от реверс-инжиниринга это не спасает — и на то есть фундаментальная причина: чтобы код выполнился, он рано или поздно должен оказаться в памяти в открытом виде. Проект честно исследует, что можно сделать и где проходит граница возможного.",
        "Хорошее упражнение на тему защиты кода без иллюзий о её всесильности — понимать пределы метода так же важно, как и сам метод.",
      ],
      en: [
        "An experiment with source-code protection: the code is stored encrypted and decrypted only at execution time, in memory. On disk there's ciphertext, unreadable in an editor.",
        "It can't fully stop reverse engineering — and there's a fundamental reason: for code to run, it must sooner or later end up in memory in the clear. The project honestly explores what's possible and where the limit lies.",
        "A good exercise on code protection without illusions about its power — understanding a method's limits matters as much as the method itself.",
      ],
      uk: [
        "Експеримент із захистом вихідного коду: код зберігається зашифрованим і розшифровується лише в момент виконання, у пам'яті.",
        "Повністю від реверсу це не рятує — для виконання код має опинитися в пам'яті у відкритому вигляді.",
        "Гарна вправа на тему захисту коду без ілюзій про її всесильність.",
      ],
    },
    features: {
      ru: ["Хранение исходного кода в зашифрованном виде", "Расшифровка только в памяти при запуске", "Честное исследование границ метода", "Реализация на Rust"],
      en: ["Stores source code in encrypted form", "Decryption only in memory at runtime", "An honest exploration of the method's limits", "Implemented in Rust"],
      uk: ["Зберігання вихідного коду в зашифрованому вигляді", "Розшифрування лише в пам'яті під час запуску", "Чесне дослідження меж методу", "Реалізація на Rust"],
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
      ru: [
        "Демо принципа, по которому устроены крипторы: полезная нагрузка хранится зашифрованной, а небольшой загрузчик расшифровывает её в памяти перед запуском.",
        "Понимать эту технику важно с обеих сторон: и для защиты (упаковка своего ПО), и для анализа (антивирусные движки и реверс-инженеры постоянно с ней сталкиваются). Знание механики — это не атака, это база.",
        "Проект чисто демонстрационный — на безобидной учебной нагрузке. Соседствует с моим source_encryptor, который исследует ту же тему с другой стороны.",
      ],
      en: [
        "A demo of the principle behind crypters: a payload is stored encrypted while a small loader decrypts it in memory before execution.",
        "Understanding this technique matters from both sides: for protection (packing your own software) and for analysis (antivirus engines and reverse engineers meet it constantly). Knowing the mechanics isn't an attack, it's groundwork.",
        "The project is purely demonstrational — on a harmless learning payload. It sits next to my source_encryptor, which explores the same theme from another angle.",
      ],
      uk: [
        "Демо принципу, за яким влаштовані криптори: навантаження зберігається зашифрованим, а завантажувач розшифровує його в пам'яті перед запуском.",
        "Розуміти цю техніку важливо з обох боків — для захисту і для аналізу.",
        "Проєкт суто демонстраційний, на безпечному навантаженні.",
      ],
    },
    features: {
      ru: ["Демонстрация принципа работы крипторов", "Зашифрованная нагрузка + загрузчик-расшифровщик", "Учебный разбор техники для защиты и анализа", "Безобидная демонстрационная нагрузка"],
      en: ["Demonstrates how crypters work", "Encrypted payload + a decrypting loader", "An educational breakdown for defense and analysis", "A harmless demonstration payload"],
      uk: ["Демонстрація принципу роботи крипторів", "Зашифроване навантаження + завантажувач-розшифрувач", "Навчальний розбір техніки", "Безпечне демонстраційне навантаження"],
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
      ru: [
        "Мой первый серьёзный заход в защищённую переписку. Клиент и сервер на Python, ключи на эллиптических кривых, общий секрет выводится через обмен ECDH прямо между собеседниками.",
        "Ключевое свойство: сервер видит только зашифрованный трафик и не может прочитать сообщения — он лишь передаёт байты. Шифрование происходит на концах, а ключ никогда не пересылается целиком.",
        "Здесь я на практике разобрался с обменом ключами, эллиптической криптографией и хранением — этот опыт потом лёг в основу более крупных сетевых проектов вроде sirc и shadowlink.",
      ],
      en: [
        "My first serious go at secure messaging. A Python client and server, elliptic-curve keys, a shared secret derived via an ECDH exchange directly between the correspondents.",
        "The key property: the server sees only encrypted traffic and can't read the messages — it just relays bytes. Encryption happens at the endpoints, and the key is never sent whole.",
        "Here I worked out key exchange, elliptic-curve cryptography and storage hands-on — experience that later fed into larger networking projects like sirc and shadowlink.",
      ],
      uk: [
        "Мій перший серйозний захід у захищене листування. Клієнт і сервер на Python, ключі на еліптичних кривих, спільний секрет через обмін ECDH.",
        "Ключова властивість: сервер бачить лише зашифрований трафік і не може прочитати повідомлення.",
        "Тут я на практиці розібрався з обміном ключами — досвід ліг в основу sirc і shadowlink.",
      ],
    },
    features: {
      ru: ["Сквозное шифрование переписки", "Обмен ключами ECDH между собеседниками", "Сервер видит только зашифрованный трафик", "Клиент-серверная архитектура на Python"],
      en: ["End-to-end encrypted messaging", "ECDH key exchange between correspondents", "The server sees only encrypted traffic", "A client-server architecture in Python"],
      uk: ["Наскрізне шифрування листування", "Обмін ключами ECDH між співрозмовниками", "Сервер бачить лише зашифрований трафік", "Клієнт-серверна архітектура на Python"],
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
      ru: [
        "Набор инструментов для работы с ключами на эллиптических кривых: генерация, проверка корректности, сжатие публичных ключей, плюс деривация ключей в стиле BIP32 — когда из одного секрета получается дерево ключей.",
        "Эллиптическая криптография лежит в основе и блокчейнов (адреса и подписи), и современного защищённого общения. Один набор инструментов закрывает оба направления.",
        "Сделан как фундамент для моих проектов с кошельками и шифрованной перепиской — отсюда выросли наработки для Project S.C.A.M. и ECDH-чата.",
      ],
      en: [
        "A toolkit for working with elliptic-curve keys: generation, validity checking, public-key compression, plus BIP32-style key derivation — where a tree of keys grows from a single secret.",
        "Elliptic-curve cryptography underpins both blockchains (addresses and signatures) and modern secure communication. One toolkit covers both directions.",
        "Built as a foundation for my wallet and encrypted-messaging projects — groundwork for Project S.C.A.M. and the ECDH chat grew from here.",
      ],
      uk: [
        "Набір інструментів для роботи з ключами на еліптичних кривих: генерація, перевірка, стиснення, плюс деривація в стилі BIP32.",
        "Еліптична криптографія лежить в основі і блокчейнів, і захищеного спілкування.",
        "Зроблено як фундамент для проєктів із гаманцями та шифрованим листуванням.",
      ],
    },
    features: {
      ru: ["Генерация и проверка ключей на эллиптических кривых", "Сжатие публичных ключей", "Деривация ключей в стиле BIP32", "Фундамент для кошельков и шифрованной переписки"],
      en: ["Generation and validation of elliptic-curve keys", "Public-key compression", "BIP32-style key derivation", "A foundation for wallets and encrypted messaging"],
      uk: ["Генерація та перевірка ключів на еліптичних кривих", "Стиснення публічних ключів", "Деривація ключів у стилі BIP32", "Фундамент для гаманців і шифрованого листування"],
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
      ru: [
        "Инструмент для генерации словарей паролей: задаёшь набор символов, длину и правила — получаешь список комбинаций. Это базовая утилита в исследованиях стойкости паролей.",
        "Чтобы понять, какой пароль слабый, нужно представлять, как устроен перебор: сколько вообще существует комбинаций и за какое время их можно пройти. В проекте есть и подсчёт количества комбинаций, и эксперименты со скоростью генерации.",
        "Образовательный инструмент для своих опытов — наглядно показывает, почему короткий пароль из цифр перебирается мгновенно.",
      ],
      en: [
        "A tool for generating password wordlists: you set a character set, length and rules and get a list of combinations. It's a basic utility in password-strength research.",
        "To understand what makes a password weak, you need to picture how brute force works: how many combinations exist and how long it takes to walk them. The project includes combination counting and experiments with generation speed.",
        "An educational tool for my own experiments — it clearly shows why a short numeric password is brute-forced instantly.",
      ],
      uk: [
        "Інструмент для генерації словників паролів за набором символів, довжиною та правилами.",
        "Щоб зрозуміти, який пароль слабкий, треба уявляти, як влаштований перебір. У проєкті є підрахунок комбінацій та експерименти зі швидкістю.",
        "Освітній інструмент для своїх дослідів.",
      ],
    },
    features: {
      ru: ["Генерация словарей по символам, длине и правилам", "Подсчёт количества возможных комбинаций", "Эксперименты со скоростью генерации", "Учебный инструмент для исследования стойкости паролей"],
      en: ["Wordlist generation by characters, length and rules", "Counting the number of possible combinations", "Experiments with generation speed", "An educational tool for password-strength research"],
      uk: ["Генерація словників за символами, довжиною та правилами", "Підрахунок кількості можливих комбінацій", "Експерименти зі швидкістю генерації", "Навчальний інструмент для дослідження стійкості паролів"],
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
      ru: [
        "Пара к генератору словарей. Большие словари паролей всегда грязные: дубликаты, мусорные строки, мешанина регистра, лишние пробелы. Перебор по такому словарю тратит время впустую.",
        "Эта утилита приводит словари в порядок — сортирует, чистит, убирает повторы. Внутри есть отдельный искатель дубликатов и несколько вариантов очистки.",
        "Заодно это была хорошая практика работы с большими текстовыми файлами, которые не помещаются в память целиком и требуют потоковой обработки.",
      ],
      en: [
        "A companion to the wordlist generator. Large password wordlists are always messy: duplicates, junk lines, mixed case, stray spaces. Brute-forcing through such a list wastes time.",
        "This utility tidies wordlists — sorts, cleans, removes repeats. Inside is a separate duplicate finder and several cleaning variants.",
        "It was also good practice with large text files that don't fit in memory at once and require streaming processing.",
      ],
      uk: [
        "Пара до генератора словників. Великі словники завжди брудні: дублікати, сміття, мішанина регістру.",
        "Ця утиліта наводить лад — сортує, чистить, прибирає повтори. Усередині — окремий шукач дублікатів.",
        "Заразом це практика роботи з великими текстовими файлами.",
      ],
    },
    features: {
      ru: ["Сортировка и очистка больших словарей", "Поиск и удаление дубликатов", "Несколько режимов очистки строк", "Потоковая обработка файлов, не влезающих в память"],
      en: ["Sorting and cleaning large wordlists", "Finding and removing duplicates", "Several line-cleaning modes", "Streaming processing of files too big for memory"],
      uk: ["Сортування та очищення великих словників", "Пошук і видалення дублікатів", "Кілька режимів очищення рядків", "Потокова обробка файлів, що не влазять у пам'ять"],
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
      ru: [
        "Алгоритм Луна — простая контрольная формула, по которой проверяют, что номер банковской карты введён без опечатки. Та же логика стоит за многими номерами — IMEI, идентификаторами.",
        "Я реализовал его в трёх вариантах: веб-страница, Rust и Python — и сравнил, как одна и та же простая идея выглядит на разных языках и платформах. Это маленькое, но честное упражнение в кросс-языковой реализации.",
        "Важно понимать рамки: это валидация формата, а не проверка существования карты. Алгоритм ловит опечатку, но ничего не говорит о том, реальна карта или нет. Никакого отношения к мошенничеству проект не имеет.",
      ],
      en: [
        "The Luhn algorithm is a simple checksum formula used to verify a bank-card number was entered without a typo. The same logic sits behind many numbers — IMEIs, identifiers.",
        "I implemented it three ways — a web page, Rust and Python — and compared how the same simple idea looks across languages and platforms. A small but honest exercise in cross-language implementation.",
        "It's important to understand the scope: this is format validation, not a check of whether a card exists. The algorithm catches a typo but says nothing about whether a card is real. The project has nothing to do with fraud.",
      ],
      uk: [
        "Алгоритм Луна — проста контрольна формула для перевірки, що номер картки введено без помилки.",
        "Я реалізував його у трьох варіантах: вебсторінка, Rust і Python — і порівняв, як одна ідея виглядає різними мовами.",
        "Важливо: це валідація формату, а не перевірка існування картки. До шахрайства проєкт не має стосунку.",
      ],
    },
    features: {
      ru: ["Проверка номера карты по алгоритму Луна", "Три реализации: веб, Rust, Python", "Кросс-языковое сравнение одной идеи", "Валидация формата, не проверка существования карты"],
      en: ["Card-number validation via the Luhn algorithm", "Three implementations: web, Rust, Python", "A cross-language comparison of one idea", "Format validation, not a check of card existence"],
      uk: ["Перевірка номера картки за алгоритмом Луна", "Три реалізації: веб, Rust, Python", "Крос-мовне порівняння однієї ідеї", "Валідація формату, не перевірка існування картки"],
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
      ru: [
        "Вторая часть курсовой работы по предмету «Математические основы защиты информации». Реализован калькулятор китайской теоремы об остатках и метод проб.",
        "Это инструменты теории чисел, на которой стоит вся современная криптография: китайская теорема об остатках, например, ускоряет вычисления в RSA. Курсовая показывает эту математику в работе.",
        "Сделана с веб-интерфейсом на Flask — чтобы решением было удобно пользоваться, а не просто сдать и забыть. Один из моих университетских проектов, доведённых выше формального минимума.",
      ],
      en: [
        "The second part of coursework for the subject 'Mathematical foundations of information security'. It implements a Chinese-remainder-theorem calculator and a trial method.",
        "These are number-theory tools that all modern cryptography stands on: the Chinese remainder theorem, for instance, speeds up computations in RSA. The coursework shows this maths at work.",
        "Built with a Flask web interface — so the solution is actually usable, not just submittable and forgettable. One of my university projects taken above the formal minimum.",
      ],
      uk: [
        "Друга частина курсової з предмета «Математичні основи захисту інформації»: калькулятор китайської теореми про остачі та метод проб.",
        "Це інструменти теорії чисел, на якій стоїть уся сучасна криптографія.",
        "Зроблено з вебінтерфейсом на Flask — щоб рішенням було зручно користуватися.",
      ],
    },
    features: {
      ru: ["Калькулятор китайской теоремы об остатках", "Реализация метода проб", "Веб-интерфейс на Flask", "Университетская работа выше формального минимума"],
      en: ["A Chinese-remainder-theorem calculator", "An implementation of the trial method", "A Flask web interface", "University work above the formal minimum"],
      uk: ["Калькулятор китайської теореми про остачі", "Реалізація методу проб", "Вебінтерфейс на Flask", "Університетська робота вище мінімуму"],
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
      ru: [
        "Курсовая по комплексным системам защиты информации (КСЗИ), для конкретной аудитории и варианта задания. Основная техническая часть — пайплайн на Python, который восстанавливает данные из видеозаписи.",
        "К коду прилагается полностью оформленный отчёт в формате .docx — то есть работа сдаётся как законченный документ, а не просто скрипт.",
        "Один из университетских проектов, где я старался сделать не отписку ради оценки, а работающий инструмент с понятным результатом.",
      ],
      en: [
        "Coursework on integrated information-protection systems, for a specific class and assignment variant. The core technical part is a Python pipeline that recovers data from a video recording.",
        "The code comes with a fully formatted .docx report — so the work is submitted as a finished document, not just a script.",
        "One of the university projects where I aimed to build a working tool with a clear result rather than a token submission for a grade.",
      ],
      uk: [
        "Курсова з комплексних систем захисту інформації. Основна частина — пайплайн на Python, що відновлює дані з відеозапису.",
        "До коду додається повністю оформлений звіт у форматі .docx.",
        "Один з університетських проєктів, де я намагався зробити робочий інструмент.",
      ],
    },
    features: {
      ru: ["Пайплайн восстановления данных из видео", "Реализация на Python", "Готовый оформленный отчёт .docx", "Университетская работа с рабочим результатом"],
      en: ["A data-recovery-from-video pipeline", "Implemented in Python", "A finished, formatted .docx report", "University work with a working result"],
      uk: ["Пайплайн відновлення даних із відео", "Реалізація на Python", "Готовий оформлений звіт .docx", "Університетська робота з робочим результатом"],
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
      ru: [
        "Учась на кафедре информационной безопасности, я нашёл уязвимости в онлайн-зачётке своего университета. Этот PoC технически документирует проблему — показывает, что она реальна, а не предполагаемая.",
        "Но главное здесь — не код, а как я с этим поступил. Я не стал ничем злоупотреблять: пошёл в деканат, объяснил суть проблемы и связался с человеком, ответственным за систему.",
        "Это пример ответственного раскрытия (responsible disclosure) — именно так и должен работать специалист по ИБ: находишь дыру, доказываешь её, отдаёшь тем, кто может починить, а не используешь тихо.",
      ],
      en: [
        "Studying at the information-security department, I found vulnerabilities in my university's online gradebook. This PoC technically documents the issue — showing it's real, not just assumed.",
        "But the point here isn't the code — it's how I handled it. I didn't abuse anything: I went to the dean's office, explained the problem and contacted the person responsible for the system.",
        "It's an example of responsible disclosure — exactly how a security specialist should work: you find a hole, prove it, hand it to those who can fix it, rather than quietly exploiting it.",
      ],
      uk: [
        "Навчаючись на кафедрі інформаційної безпеки, я знайшов уразливості в онлайн-заліковці свого університету. Цей PoC технічно документує проблему.",
        "Але головне — як я з цим вчинив: пішов у деканат, пояснив суть і зв'язався з відповідальним за систему.",
        "Це приклад відповідального розкриття — саме так має працювати фахівець з ІБ.",
      ],
    },
    features: {
      ru: ["Технический PoC уязвимостей онлайн-зачётки", "Доказательство, что проблема реальна", "Передано в деканат и ответственному за систему", "Пример ответственного раскрытия (responsible disclosure)"],
      en: ["A technical PoC of the online gradebook's vulnerabilities", "Proof that the problem is real", "Reported to the dean's office and the system owner", "An example of responsible disclosure"],
      uk: ["Технічний PoC уразливостей онлайн-заліковки", "Доказ, що проблема реальна", "Передано в деканат і відповідальному за систему", "Приклад відповідального розкриття"],
    },
  },
  {
    id: "freemarks", name: "FreeMarks", aka: "Слабая цензура персональных данных",
    category: "crypto", status: "done", year: 2024,
    langs: ["Python"], tags: ["Приватность", "Демонстрация уязвимости", "Парсинг", "Веб"],
    short: {
      ru: "Демонстрация того, как примитивная «цензура» личных данных в опубликованных оценках легко обходится.",
      en: "A demonstration of how the primitive 'censorship' of personal data in published grades is easily reversed.",
      uk: "Демонстрація того, як примітивна «цензура» особистих даних в опублікованих оцінках легко обходиться.",
    },
    body: {
      ru: [
        "Университет публикует ведомости с оценками и «закрывает» в них ФИО и личные данные студентов. FreeMarks показывает, что это сокрытие примитивно и обратимо: проект извлекает оценки из методички и сопоставляет данные обратно, обходя наивную цензуру.",
        "Сделан не ради злоупотребления, а как наглядная демонстрация проблемы. Это аргумент в споре о том, что текущий способ защиты персональных данных в публичных ведомостях не работает — если убрать данные так слабо, их легко восстановить.",
        "По духу проект продолжает мою линию ответственного отношения к найденным проблемам: показать, что система дырявая, чтобы её починили. Тот же принцип, что и в аудите онлайн-зачётки.",
      ],
      en: [
        "The university publishes grade sheets and 'redacts' students' names and personal data in them. FreeMarks shows that this redaction is primitive and reversible: the project extracts grades and maps the data back, bypassing the naive censorship.",
        "It was built not to abuse but as a clear demonstration of the problem. It's an argument that the current way of protecting personal data in public grade sheets doesn't work — if you remove data that weakly, it's easy to restore.",
        "In spirit the project continues my line of responsible handling of discovered problems: show that a system is leaky so it gets fixed. The same principle as in the online-gradebook audit.",
      ],
      uk: [
        "Університет публікує відомості з оцінками й «закриває» в них ПІБ та особисті дані. FreeMarks показує, що це приховування примітивне й оборотне.",
        "Зроблено не заради зловживання, а як наочна демонстрація проблеми.",
        "За духом проєкт продовжує мою лінію відповідального ставлення до знайдених проблем.",
      ],
    },
    features: {
      ru: ["Извлечение оценок из публикуемых ведомостей", "Обход наивной цензуры ФИО и личных данных", "Демонстрация проблемы, а не злоупотребление ею", "Аргумент за нормальную защиту персональных данных"],
      en: ["Extracts grades from published grade sheets", "Bypasses the naive redaction of names and personal data", "Demonstrates the problem rather than abusing it", "An argument for proper personal-data protection"],
      uk: ["Витяг оцінок із публікованих відомостей", "Обхід наївної цензури ПІБ та особистих даних", "Демонстрація проблеми, а не зловживання нею", "Аргумент за нормальний захист персональних даних"],
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
      ru: [
        "Небольшой исследовательский PoC: проверка гипотезы об уязвимости инъекции через имя файла в одном из популярных GitHub Action. Имя файла — это входные данные, и если их не экранировать, в них можно спрятать команду.",
        "Такие маленькие проверки — обычная рутина в исследовании безопасности и bug bounty: есть гипотеза, нужен минимальный воспроизводимый пример, который её подтверждает или опровергает.",
        "Часть моей работы в области поиска уязвимостей — наряду с аудитом онлайн-зачётки и проектом FreeMarks.",
      ],
      en: [
        "A small research PoC: testing a hypothesis about a filename-injection vulnerability in a popular GitHub Action. A filename is input data, and if it isn't escaped, a command can be hidden inside it.",
        "Such small tests are routine in security research and bug bounty: there's a hypothesis, and you need a minimal reproducible example that confirms or refutes it.",
        "Part of my work in vulnerability research — alongside the online-gradebook audit and the FreeMarks project.",
      ],
      uk: [
        "Невеликий дослідницький PoC: перевірка гіпотези про вразливість ін'єкції через ім'я файлу в популярному GitHub Action.",
        "Такі маленькі перевірки — звична рутина в дослідженні безпеки: гіпотеза, мінімальний відтворюваний приклад.",
        "Частина моєї роботи в пошуку вразливостей.",
      ],
    },
    features: {
      ru: ["Проверка гипотезы об инъекции через имя файла", "Минимальный воспроизводимый пример", "Рутина исследования безопасности и bug bounty", "Часть моей работы по поиску уязвимостей"],
      en: ["Tests a filename-injection hypothesis", "A minimal reproducible example", "The routine of security research and bug bounty", "Part of my vulnerability-research work"],
      uk: ["Перевірка гіпотези про ін'єкцію через ім'я файлу", "Мінімальний відтворюваний приклад", "Рутина дослідження безпеки та bug bounty", "Частина моєї роботи з пошуку вразливостей"],
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
      ru: [
        "F00F — легендарный баг ранних процессоров Intel Pentium. Определённая некорректная инструкция (её байты начинаются с F0 0F) намертво вешала процессор, и сделать это мог любой пользователь без всяких привилегий.",
        "Этот проект воспроизводит и разбирает баг: показывает саму инструкцию и объясняет, почему процессор на ней зависал. Это редкий пример, когда уязвимость живёт не в коде, а прямо в кремнии.",
        "Тема на стыке безопасности и архитектуры процессоров — и наглядное напоминание, что доверять нельзя даже железу. Соседствует с моими эмуляторами процессоров.",
      ],
      en: [
        "F00F is a legendary bug of early Intel Pentium processors. A specific invalid instruction (its bytes start with F0 0F) hung the CPU dead, and any unprivileged user could trigger it.",
        "This project reproduces and dissects the bug: it shows the instruction itself and explains why the CPU hung on it. It's a rare example of a vulnerability living not in code but right in the silicon.",
        "A topic at the crossroads of security and CPU architecture — and a vivid reminder that even hardware can't be trusted. It sits next to my CPU emulators.",
      ],
      uk: [
        "F00F — легендарний баг ранніх процесорів Intel Pentium. Певна некоректна інструкція намертво вішала процесор, і зробити це міг будь-який користувач.",
        "Цей проєкт відтворює й розбирає баг: показує саму інструкцію та пояснює, чому процесор зависав.",
        "Тема на стику безпеки й архітектури процесорів.",
      ],
    },
    features: {
      ru: ["Воспроизведение аппаратного бага F00F", "Разбор инструкции, вешавшей процессор Pentium", "Уязвимость в кремнии, а не в коде", "Тема безопасности и архитектуры процессоров"],
      en: ["Reproduces the F00F hardware bug", "Dissects the instruction that hung the Pentium CPU", "A vulnerability in silicon, not in code", "A security and CPU-architecture topic"],
      uk: ["Відтворення апаратного бага F00F", "Розбір інструкції, що вішала процесор Pentium", "Уразливість у кремнії, а не в коді", "Тема безпеки й архітектури процесорів"],
    },
  },
];
