/* Эмуляторы и низкий уровень */
module.exports = [
  {
    id: "mos6502-emu", name: "mos6502_emu", aka: "Эмулятор 6502",
    category: "emu", status: "done", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Эмуляция", "MOS 6502", "Дизассемблер"],
    github: "https://github.com/AlexMelanFromRingo/mos6502_emu",
    short: {
      ru: "Полноценный эмулятор легендарного процессора MOS 6502 с интерактивным монитором и дизассемблером.",
      en: "A complete emulator of the legendary MOS 6502 CPU with an interactive monitor and disassembler.",
      uk: "Повноцінний емулятор легендарного процесора MOS 6502 з інтерактивним монітором і дизасемблером.",
    },
    body: {
      ru: [
        "MOS 6502 — процессор, на котором работали Apple II, NES, Commodore 64 и BBC Micro. Этот эмулятор воспроизводит его целиком: полный набор официальных инструкций, 64 КиБ памяти, векторы прерываний и даже фирменные особенности чипа — BCD-режим, штрафы за переход страницы, аппаратный баг JMP indirect.",
        "Внутри — интерактивный монитор: пошаговое выполнение, брейкпоинты, просмотр памяти, дизассемблер, патч RAM на лету. Есть и headless-режим для трассировки. Это база, на которой потом вырос эмулятор BBC Micro.",
      ],
      en: [
        "The MOS 6502 is the CPU behind the Apple II, NES, Commodore 64 and BBC Micro. This emulator reproduces it whole: the full official instruction set, 64 KiB of memory, interrupt vectors and even the chip's quirks — BCD mode, page-crossing penalties, the JMP-indirect hardware bug.",
        "Inside is an interactive monitor: single-stepping, breakpoints, memory view, a disassembler, on-the-fly RAM patching. There's also a headless mode for tracing. It's the base the BBC Micro emulator later grew on.",
      ],
      uk: [
        "MOS 6502 — процесор, на якому працювали Apple II, NES, Commodore 64 і BBC Micro. Цей емулятор відтворює його цілком: повний набір офіційних інструкцій, 64 КіБ пам'яті, вектори переривань і навіть фірмові особливості чипа.",
        "Усередині — інтерактивний монітор: покрокове виконання, брейкпоінти, перегляд пам'яті, дизасемблер. Це база, на якій потім виріс емулятор BBC Micro.",
      ],
    },
  },
  {
    id: "i8080-emu", name: "i8080-emu", aka: "Intel 8080 + Space Invaders",
    category: "emu", status: "done", year: 2026, featured: true,
    langs: ["Rust", "WebAssembly"], tags: ["Эмуляция", "Intel 8080", "Space Invaders", "Ассемблер"],
    github: "https://github.com/AlexMelanFromRingo/i8080-emu",
    short: {
      ru: "Полный эмулятор процессора Intel 8080 с ассемблером, отладчиком и работающей Space Invaders.",
      en: "A complete Intel 8080 CPU emulator with an assembler, debugger and a working Space Invaders.",
      uk: "Повний емулятор процесора Intel 8080 з асемблером, відлагоджувачем і робочою Space Invaders.",
    },
    body: {
      ru: [
        "Intel 8080 — процессор, с которого началась эра микрокомпьютеров. Эмулятор реализует все 248 его инструкций с точностью до тактов, плюс встроенный двухпроходный ассемблер и отладчик с брейкпоинтами и вотчпоинтами.",
        "Лучшее доказательство правильности — на нём запускается оригинальная Space Invaders (Taito, 1978). Все четыре канонических диагностических ROM проходят на 100%. Есть веб-интерфейс через WebAssembly — поиграть можно прямо в браузере.",
      ],
      en: [
        "The Intel 8080 is the CPU that started the microcomputer era. The emulator implements all 248 of its instructions cycle-accurately, plus a built-in two-pass assembler and a debugger with breakpoints and watchpoints.",
        "The best proof of correctness — it runs the original Space Invaders (Taito, 1978). All four canonical diagnostic ROMs pass 100%. There's a WebAssembly web interface — you can play right in the browser.",
      ],
      uk: [
        "Intel 8080 — процесор, з якого почалася ера мікрокомп'ютерів. Емулятор реалізує всі 248 його інструкцій із точністю до тактів, плюс вбудований асемблер і відлагоджувач.",
        "Найкращий доказ правильності — на ньому запускається оригінальна Space Invaders (Taito, 1978). Усі чотири діагностичні ROM проходять на 100%. Є вебінтерфейс через WebAssembly.",
      ],
    },
  },
  {
    id: "bbc-micro-emu", name: "bbc_micro_emu", aka: "Эмулятор BBC Micro",
    category: "emu", status: "active", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Эмуляция", "BBC Micro", "Ретро", "Acorn"],
    github: "https://github.com/AlexMelanFromRingo/bbc_micro_emu",
    short: {
      ru: "Эмулятор компьютера Acorn BBC Micro Model B (1981) на безопасном Rust.",
      en: "An emulator of the Acorn BBC Micro Model B (1981) computer in safe Rust.",
      uk: "Емулятор комп'ютера Acorn BBC Micro Model B (1981) на безпечному Rust.",
    },
    body: {
      ru: ["Эмулятор BBC Micro — британского компьютера 1981 года — поверх моего же ядра mos6502_emu. Он загружает настоящие MOS 1.20, BASIC II и файловую систему DFS 0.98, управляет контроллером дискет 8271.", "Каждая подсистема реализована по реальным даташитам и сервис-мануалам, а не наугад. Дальняя цель — запустить с оригинального дискового образа легендарную Elite 1984 года."],
      en: ["An emulator of the BBC Micro — a 1981 British computer — built on top of my own mos6502_emu core. It boots the real MOS 1.20, BASIC II and the DFS 0.98 filesystem, and drives an 8271 floppy controller.", "Each subsystem is implemented from real datasheets and service manuals rather than guesswork. The long-term goal is running the legendary Elite of 1984 from its original disk image."],
      uk: ["Емулятор BBC Micro — британського комп'ютера 1981 року — поверх мого ж ядра mos6502_emu. Він завантажує справжні MOS 1.20, BASIC II і файлову систему DFS 0.98.", "Кожна підсистема реалізована за реальними даташитами. Далека мета — запустити легендарну Elite 1984 року."],
    },
  },
  {
    id: "elite-1984", name: "elite-1984-rs", aka: "Порт Elite 1984",
    category: "emu", status: "active", year: 2026,
    langs: ["Rust", "WebAssembly"], tags: ["Сохранение игр", "Elite", "Ретро"],
    github: "https://github.com/AlexMelanFromRingo/elite-1984-rs",
    short: {
      ru: "Точный порт игры Elite (1984) для BBC Micro на Rust — для десктопа и браузера.",
      en: "A faithful Rust port of the game Elite (1984) for the BBC Micro — for desktop and browser.",
      uk: "Точний порт гри Elite (1984) для BBC Micro на Rust — для десктопа та браузера.",
    },
    body: {
      ru: ["Elite 1984 года — революционная космическая игра с открытым миром, опередившая своё время. Это не ремейк, а сохранение: симуляция воспроизводит поведение оригинала бит в бит, и это проверяется эталонными фикстурами и воспроизведением записанных входных логов.", "Модернизация — закрашенная 3D-графика, геймпад, ресайз окна — затрагивает только слой отрисовки и никогда не лезет в саму симуляцию. Работает на десктопе и в браузере через WebAssembly."],
      en: ["The 1984 Elite is a revolutionary open-world space game far ahead of its time. This is not a remake but preservation: the simulation reproduces the original's behaviour bit-for-bit, verified against golden fixtures and recorded input-log replays.", "Modernisation — solid-shaded 3D, gamepad support, a resizable window — touches only the rendering layer and never the simulation itself. It runs on desktop and in the browser via WebAssembly."],
      uk: ["Elite 1984 року — революційна космічна гра з відкритим світом. Це не ремейк, а збереження: симуляція відтворює поведінку оригіналу біт у біт.", "Модернізація — зафарбована 3D-графіка, геймпад — торкається лише шару відмалювання. Працює на десктопі та в браузері через WebAssembly."],
    },
  },
  {
    id: "kliova", name: "Кльова", aka: "Мова програмування",
    category: "emu", status: "active", year: 2026, featured: true,
    langs: ["Rust", "Cranelift"], tags: ["Компилятор", "Язык программирования", "Cranelift"],
    github: "https://github.com/AlexMelanFromRingo/kliova",
    short: {
      ru: "Учебный язык программирования с украинским синтаксисом и компиляцией в нативный код.",
      en: "An educational programming language with Ukrainian syntax that compiles to native code.",
      uk: "Навчальна мова програмування з українським синтаксисом і компіляцією в нативний код.",
    },
    body: {
      ru: ["«Кльова» — язык программирования, где код пишется украинскими словами: дія, якщо, інакше, вернути. Это учебный язык со статической типизацией, но не игрушечный: компилятор через Cranelift собирает настоящий нативный бинарник x86-64.", "Идея — сделать программирование роднее для тех, кто только начинает, и заодно самому пройти весь путь: лексер, парсер, проверка типов, генерация кода."],
      en: ["Kliova is a programming language where code is written in Ukrainian words: diya, yakshcho, inakshe, vernuti. It's an educational language with static typing, but not a toy: the compiler produces a real native x86-64 binary via Cranelift.", "The idea is to make programming feel closer for beginners and, along the way, to walk the whole path myself: lexer, parser, type checking, code generation."],
      uk: ["«Кльова» — мова програмування, де код пишеться українськими словами: дія, якщо, інакше, вернути. Це навчальна мова зі статичною типізацією, але не іграшкова: компілятор через Cranelift збирає справжній нативний бінарник x86-64.", "Ідея — зробити програмування ріднішим для початківців і самому пройти весь шлях: лексер, парсер, перевірка типів, генерація коду."],
    },
  },
  {
    id: "compression-zoo", name: "Compression Zoo", aka: "Сжатие данных",
    category: "emu", status: "active", year: 2026, featured: true,
    langs: ["C", "Rust"], tags: ["Сжатие", "7-Zip", "ZPAQ", "Кодеки"],
    github: "https://github.com/AlexMelanFromRingo/compression-zoo",
    short: {
      ru: "Кодеки сжатия высокого коэффициента для 7-Zip плюс безопасный Rust-порт алгоритмов.",
      en: "High-ratio compression codecs for 7-Zip plus a memory-safe Rust port of the algorithms.",
      uk: "Кодеки стиснення високого коефіцієнта для 7-Zip плюс безпечний Rust-порт алгоритмів.",
    },
    body: {
      ru: ["Монорепозиторий из двух частей. Первая — четыре кодек-плагина для 7-Zip (ZPAQ, libbsc, CMIX, Brotli), которые дают архиватору алгоритмы сжатия лучше встроенного LZMA2. Каждый проверен десятками тестов на полный цикл сжатия-распаковки.", "Вторая — безопасный по памяти Rust-порт алгоритмов сжатия и кода самого 7-Zip с полным запретом unsafe-кода. Это про сжатие данных всерьёз и про переписывание старого C-кода на безопасный Rust."],
      en: ["A monorepo with two halves. The first — four codec plugins for 7-Zip (ZPAQ, libbsc, CMIX, Brotli) that give the archiver better compression than its built-in LZMA2. Each is verified by dozens of round-trip tests.", "The second — a memory-safe Rust port of the compression algorithms and of 7-Zip's own code, with unsafe code fully forbidden. It's about data compression seriously, and about rewriting old C code in safe Rust."],
      uk: ["Монорепозиторій із двох частин. Перша — чотири кодек-плагіни для 7-Zip (ZPAQ, libbsc, CMIX, Brotli), що дають архіватору краще стиснення за вбудований LZMA2.", "Друга — безпечний за пам'яттю Rust-порт алгоритмів стиснення та коду самого 7-Zip із повною забороною unsafe-коду."],
    },
  },
  {
    id: "rustos", name: "RustOS", aka: "Ядро ОС на Rust",
    category: "emu", status: "done", year: 2026,
    langs: ["Rust", "Assembly"], tags: ["ОС", "Ядро", "x86_64", "Низкий уровень"],
    github: "https://github.com/AlexMelanFromRingo/rustos",
    short: {
      ru: "Минимальное ядро операционной системы на Rust для архитектуры x86_64.",
      en: "A minimal operating-system kernel in Rust for the x86_64 architecture.",
      uk: "Мінімальне ядро операційної системи на Rust для архітектури x86_64.",
    },
    body: {
      ru: ["Операционная система с самого низа: загружаемое ядро x86_64, вывод текста в VGA-буфер, обработка исключений процессора через таблицу прерываний, аппаратные прерывания от таймера и клавиатуры. Сделано по известному курсу «Writing an OS in Rust».", "Это самый низкий уровень из всего, что я делал — там, где код общается напрямую с железом, без всякой ОС под собой."],
      en: ["An operating system from the very bottom: a bootable x86_64 kernel, text output to the VGA buffer, CPU exception handling via an interrupt table, hardware interrupts from the timer and keyboard. Built following the well-known 'Writing an OS in Rust' course.", "It's the lowest level of anything I've done — where code talks directly to hardware, with no OS beneath it."],
      uk: ["Операційна система із самого низу: завантажуване ядро x86_64, вивід тексту у VGA-буфер, обробка винятків процесора через таблицю переривань, апаратні переривання від таймера й клавіатури.", "Це найнижчий рівень з усього, що я робив — там, де код спілкується напряму із залізом."],
    },
  },
];
