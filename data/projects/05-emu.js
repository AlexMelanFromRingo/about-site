/* Эмуляторы и низкий уровень */
module.exports = [
  {
    id: "mos6502-emu", name: "mos6502_emu", aka: "Эмулятор 6502",
    category: "emu", status: "done", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Эмуляция", "MOS 6502", "Дизассемблер", "Монитор"],
    github: "https://github.com/AlexMelanFromRingo/mos6502_emu",
    short: {
      ru: "Полноценный эмулятор легендарного процессора MOS 6502 с интерактивным монитором и дизассемблером.",
      en: "A complete emulator of the legendary MOS 6502 CPU with an interactive monitor and disassembler.",
      uk: "Повноцінний емулятор легендарного процесора MOS 6502 з інтерактивним монітором і дизасемблером.",
    },
    body: {
      ru: [
        "MOS 6502 — процессор, на котором работали Apple II, NES, Commodore 64 и BBC Micro. Этот эмулятор воспроизводит его целиком: полный набор официальных инструкций, 64 КиБ адресного пространства, страница стека $0100-$01FF, векторы прерываний NMI, RESET и IRQ/BRK.",
        "Воспроизведены и фирменные особенности чипа, без которых эмуляция была бы неточной: BCD-режим для ADC и SBC, штрафы по тактам за переход страницы, заворачивание в нулевой странице и знаменитый аппаратный баг JMP ($xxFF).",
        "Внутри — интерактивный монитор: пошаговое выполнение, запуск сериями, брейкпоинты, просмотр и патч памяти, дизассемблер, постановка регистров. Есть headless-режим для трассировки и пакетного прогона. Это база, на которой потом вырос мой эмулятор BBC Micro.",
      ],
      en: [
        "The MOS 6502 is the CPU behind the Apple II, NES, Commodore 64 and BBC Micro. This emulator reproduces it whole: the full official instruction set, 64 KiB of address space, the $0100-$01FF stack page, the NMI, RESET and IRQ/BRK interrupt vectors.",
        "The chip's quirks are reproduced too, without which emulation would be inaccurate: BCD mode for ADC and SBC, cycle penalties for page crossing, zero-page wraparound and the famous JMP ($xxFF) hardware bug.",
        "Inside is an interactive monitor: single-stepping, batch runs, breakpoints, memory view and patching, a disassembler, register setting. There's a headless mode for tracing and batch runs. It's the base my BBC Micro emulator later grew on.",
      ],
      uk: [
        "MOS 6502 — процесор, на якому працювали Apple II, NES, Commodore 64 і BBC Micro. Цей емулятор відтворює його цілком: повний набір офіційних інструкцій, 64 КіБ адресного простору, сторінку стека, вектори переривань.",
        "Відтворені й фірмові особливості чипа: BCD-режим для ADC і SBC, штрафи за перехід сторінки, заворот у нульовій сторінці та апаратний баг JMP ($xxFF).",
        "Усередині — інтерактивний монітор: покрокове виконання, брейкпоінти, перегляд і патч пам'яті, дизасемблер. Є headless-режим. Це база, на якій виріс мій емулятор BBC Micro.",
      ],
    },
    features: {
      ru: ["Полный набор официальных инструкций MOS 6502", "64 КиБ памяти, стек, векторы NMI/RESET/IRQ/BRK", "Особенности чипа: BCD, штрафы за страницу, баг JMP indirect", "Интерактивный монитор: шаги, брейкпоинты, дизассемблер, патч RAM", "Headless-режим для трассировки и пакетного прогона"],
      en: ["The full official MOS 6502 instruction set", "64 KiB memory, stack, NMI/RESET/IRQ/BRK vectors", "Chip quirks: BCD, page penalties, the JMP-indirect bug", "Interactive monitor: stepping, breakpoints, disassembler, RAM patch", "Headless mode for tracing and batch runs"],
      uk: ["Повний набір офіційних інструкцій MOS 6502", "64 КіБ пам'яті, стек, вектори NMI/RESET/IRQ/BRK", "Особливості чипа: BCD, штрафи за сторінку, баг JMP indirect", "Інтерактивний монітор: кроки, брейкпоінти, дизасемблер", "Headless-режим для трасування"],
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
        "Intel 8080 — процессор, с которого началась эра микрокомпьютеров. Эмулятор реализует все 248 его инструкций с точностью до тактов и корректной обработкой флагов, плюс модульная архитектура: отдельные крейты под ядро эмуляции, ассемблер и веб-интерфейс.",
        "В комплекте — встроенный двухпроходный ассемблер с директивами ORG, DB, DW, EQU, DS, END, и отладчик с брейкпоинтами и вотчпоинтами. Можно писать код прямо в браузерном редакторе и тут же его отлаживать.",
        "Лучшее доказательство правильности — на эмуляторе запускается оригинальная Space Invaders (Taito, 1978), а все четыре канонических диагностических ROM проходят на 100%. Веб-интерфейс собран через WebAssembly — поиграть и поотлаживать можно прямо в браузере.",
      ],
      en: [
        "The Intel 8080 is the CPU that started the microcomputer era. The emulator implements all 248 of its instructions cycle-accurately with correct flag handling, plus a modular architecture: separate crates for the emulation core, the assembler and the web interface.",
        "It ships with a built-in two-pass assembler with the ORG, DB, DW, EQU, DS, END directives, and a debugger with breakpoints and watchpoints. You can write code right in the browser editor and debug it on the spot.",
        "The best proof of correctness — the emulator runs the original Space Invaders (Taito, 1978), and all four canonical diagnostic ROMs pass 100%. The web interface is built via WebAssembly — you can play and debug right in the browser.",
      ],
      uk: [
        "Intel 8080 — процесор, з якого почалася ера мікрокомп'ютерів. Емулятор реалізує всі 248 його інструкцій із точністю до тактів, плюс модульна архітектура з окремими крейтами.",
        "У комплекті — вбудований двопрохідний асемблер із директивами ORG, DB, DW, EQU, DS, END, і відлагоджувач із брейкпоінтами та вотчпоінтами.",
        "Найкращий доказ правильності — на емуляторі запускається оригінальна Space Invaders (Taito, 1978), а всі чотири діагностичні ROM проходять на 100%. Вебінтерфейс через WebAssembly.",
      ],
    },
    features: {
      ru: ["Все 248 инструкций Intel 8080, точность до тактов", "Встроенный двухпроходный ассемблер с директивами", "Отладчик с брейкпоинтами и вотчпоинтами", "Запускает оригинальную Space Invaders (1978)", "Все 4 диагностических ROM проходят на 100%", "Веб-интерфейс через WebAssembly"],
      en: ["All 248 Intel 8080 instructions, cycle-accurate", "Built-in two-pass assembler with directives", "Debugger with breakpoints and watchpoints", "Runs the original Space Invaders (1978)", "All 4 diagnostic ROMs pass 100%", "Web interface via WebAssembly"],
      uk: ["Усі 248 інструкцій Intel 8080, точність до тактів", "Вбудований двопрохідний асемблер із директивами", "Відлагоджувач із брейкпоінтами та вотчпоінтами", "Запускає оригінальну Space Invaders (1978)", "Усі 4 діагностичні ROM проходять на 100%", "Вебінтерфейс через WebAssembly"],
    },
  },
  {
    id: "bbc-micro-emu", name: "bbc_micro_emu", aka: "Эмулятор BBC Micro",
    category: "emu", status: "active", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Эмуляция", "BBC Micro", "Ретро", "Acorn", "1981"],
    github: "https://github.com/AlexMelanFromRingo/bbc_micro_emu",
    short: {
      ru: "Эмулятор компьютера Acorn BBC Micro Model B (1981) на безопасном Rust.",
      en: "An emulator of the Acorn BBC Micro Model B (1981) computer in safe Rust.",
      uk: "Емулятор комп'ютера Acorn BBC Micro Model B (1981) на безпечному Rust.",
    },
    body: {
      ru: [
        "Эмулятор BBC Micro — британского образовательного компьютера 1981 года — построен поверх моего же ядра mos6502_emu. Один процессор переиспользуется, вокруг него собирается вся остальная машина.",
        "Эмулятор загружает настоящие прошивки: операционную систему MOS 1.20, интерпретатор BASIC II и файловую систему DFS 0.98. Реализован контроллер дискет 8271, видео, ввод — каждая подсистема сделана по реальным даташитам, сервис-мануалам и со сверкой по эмулятору b-em, а не наугад.",
        "Дальняя цель проекта — запустить с оригинального дискового образа .ssd легендарную Elite 1984 года. Статус — в активной разработке: машина уже грузится в BASIC, подсистемы дописываются под эту цель.",
      ],
      en: [
        "The BBC Micro emulator — a 1981 British educational computer — is built on top of my own mos6502_emu core. One CPU is reused, and the rest of the machine is assembled around it.",
        "The emulator boots real firmware: the MOS 1.20 operating system, the BASIC II interpreter and the DFS 0.98 filesystem. An 8271 floppy controller, video and input are implemented — each subsystem built from real datasheets, service manuals and cross-checked against the b-em emulator rather than guessed.",
        "The project's long-term goal is running the legendary Elite of 1984 from its original .ssd disk image. Status — in active development: the machine already boots into BASIC, subsystems are being completed toward that goal.",
      ],
      uk: [
        "Емулятор BBC Micro — британського освітнього комп'ютера 1981 року — побудований поверх мого ж ядра mos6502_emu.",
        "Емулятор завантажує справжні прошивки: ОС MOS 1.20, інтерпретатор BASIC II і файлову систему DFS 0.98. Реалізований контролер дискет 8271 — кожна підсистема за реальними даташитами.",
        "Далека мета — запустити з оригінального дискового образу .ssd легендарну Elite 1984 року. Статус — в активній розробці.",
      ],
    },
    features: {
      ru: ["Эмуляция Acorn BBC Micro Model B на ядре mos6502_emu", "Загружает настоящие MOS 1.20, BASIC II, DFS 0.98", "Контроллер дискет 8271, видео, ввод", "Подсистемы по реальным даташитам и сервис-мануалам", "Цель — запуск Elite 1984 с оригинального .ssd-образа"],
      en: ["Emulates the Acorn BBC Micro Model B on the mos6502_emu core", "Boots real MOS 1.20, BASIC II, DFS 0.98", "8271 floppy controller, video, input", "Subsystems from real datasheets and service manuals", "Goal — running Elite 1984 from the original .ssd image"],
      uk: ["Емуляція Acorn BBC Micro Model B на ядрі mos6502_emu", "Завантажує справжні MOS 1.20, BASIC II, DFS 0.98", "Контролер дискет 8271, відео, ввід", "Підсистеми за реальними даташитами", "Мета — запуск Elite 1984 з оригінального .ssd"],
    },
  },
  {
    id: "elite-1984", name: "elite-1984-rs", aka: "Порт Elite 1984",
    category: "emu", status: "active", year: 2026,
    langs: ["Rust", "WebAssembly"], tags: ["Сохранение игр", "Elite", "Ретро", "Preservation"],
    github: "https://github.com/AlexMelanFromRingo/elite-1984-rs",
    short: {
      ru: "Точный порт игры Elite (1984) для BBC Micro на Rust — для десктопа и браузера.",
      en: "A faithful Rust port of the game Elite (1984) for the BBC Micro — for desktop and browser.",
      uk: "Точний порт гри Elite (1984) для BBC Micro на Rust — для десктопа та браузера.",
    },
    body: {
      ru: [
        "Elite 1984 года — революционная космическая игра с открытым миром, торговлей и боями, на десятилетия опередившая своё время. Этот проект — её порт на Rust для Linux, macOS, Windows и браузера через WebAssembly.",
        "Ключевой принцип — это сохранение, а не ремейк. Симуляция воспроизводит поведение оригинала бит в бит, и это не на словах: правильность проверяется эталонными фикстурами, снятыми с эмулятора или выведенными из исходников, и воспроизведением записанных логов ввода.",
        "Модернизация — закрашенная 3D-графика вместо каркасной, поддержка геймпада и мыши, ресайз окна — строго заперта в слое отрисовки и платформы и никогда не трогает состояние симуляции. Старая игра ощущается как старая игра, просто её удобнее запускать.",
      ],
      en: [
        "The 1984 Elite is a revolutionary open-world space game with trading and combat, decades ahead of its time. This project is its Rust port for Linux, macOS, Windows and the browser via WebAssembly.",
        "The key principle is preservation, not a remake. The simulation reproduces the original's behaviour bit-for-bit, and not just in words: correctness is verified against golden fixtures captured from an emulator or derived from sources, and by replaying recorded input logs.",
        "Modernisation — solid-shaded 3D instead of wireframe, gamepad and mouse support, a resizable window — is strictly confined to the rendering and platform layer and never touches the simulation state. An old game still feels like an old game, it's just easier to run.",
      ],
      uk: [
        "Elite 1984 року — революційна космічна гра з відкритим світом, торгівлею та боями. Цей проєкт — її порт на Rust для Linux, macOS, Windows і браузера через WebAssembly.",
        "Ключовий принцип — це збереження, а не ремейк. Симуляція відтворює поведінку оригіналу біт у біт, що перевіряється еталонними фікстурами та відтворенням записаних логів вводу.",
        "Модернізація — зафарбована 3D-графіка, геймпад, ресайз вікна — строго замкнена в шарі відмалювання й ніколи не торкається стану симуляції.",
      ],
    },
    features: {
      ru: ["Точный порт Elite 1984 для BBC Micro на Rust", "Десктоп (Linux/macOS/Windows) и браузер через WebAssembly", "Симуляция бит в бит, проверка эталонными фикстурами", "Валидация воспроизведением записанных логов ввода", "Модернизация только в слое отрисовки — симуляция нетронута"],
      en: ["A faithful Rust port of Elite 1984 for the BBC Micro", "Desktop (Linux/macOS/Windows) and browser via WebAssembly", "Bit-for-bit simulation, verified by golden fixtures", "Validation by replaying recorded input logs", "Modernisation only in the rendering layer — simulation untouched"],
      uk: ["Точний порт Elite 1984 для BBC Micro на Rust", "Десктоп і браузер через WebAssembly", "Симуляція біт у біт, перевірка еталонними фікстурами", "Валідація відтворенням записаних логів вводу", "Модернізація лише в шарі відмалювання"],
    },
  },
  {
    id: "kliova", name: "Кльова", aka: "Мова програмування",
    category: "emu", status: "active", year: 2026, featured: true,
    langs: ["Rust", "Cranelift"], tags: ["Компилятор", "Язык программирования", "Cranelift", "x86-64"],
    github: "https://github.com/AlexMelanFromRingo/kliova",
    short: {
      ru: "Учебный язык программирования с украинским синтаксисом и компиляцией в нативный код.",
      en: "An educational programming language with Ukrainian syntax that compiles to native code.",
      uk: "Навчальна мова програмування з українським синтаксисом і компіляцією в нативний код.",
    },
    body: {
      ru: [
        "«Кльова» — язык программирования, где код пишется украинскими словами: дія, якщо, інакше, вернути. Это учебный язык со статической типизацией, придуманный, чтобы программирование было роднее тем, кто только начинает.",
        "Но это не игрушка-интерпретатор. «Кльова» — настоящий компилируемый язык: через бэкенд Cranelift она собирает программу в нативный бинарник x86-64. Полный путь компилятора реализован сам — лексер, парсер, проверка типов, генерация промежуточного представления и кода.",
        "Для меня это был способ пройти всю кухню создания языка от начала до конца. Рядом стоит мой форк «Хороший Учебный Язык» — тоже про то, как языки программирования устроены изнутри.",
      ],
      en: [
        "Kliova is a programming language where code is written in Ukrainian words: diya, yakshcho, inakshe, vernuti. It's an educational language with static typing, designed to make programming feel closer for beginners.",
        "But it isn't a toy interpreter. Kliova is a real compiled language: via the Cranelift backend it builds a program into a native x86-64 binary. The full compiler path is implemented myself — lexer, parser, type checking, intermediate-representation and code generation.",
        "For me it was a way to walk the whole kitchen of building a language from start to finish. Alongside it sits my fork the Good Training Language — also about how programming languages work inside.",
      ],
      uk: [
        "«Кльова» — мова програмування, де код пишеться українськими словами: дія, якщо, інакше, вернути. Це навчальна мова зі статичною типізацією.",
        "Але це не іграшка-інтерпретатор. «Кльова» — справжня компільована мова: через бекенд Cranelift вона збирає програму в нативний бінарник x86-64. Повний шлях компілятора реалізовано самостійно.",
        "Для мене це був спосіб пройти всю кухню створення мови від початку до кінця.",
      ],
    },
    features: {
      ru: ["Украинский синтаксис: дія, якщо, інакше, вернути", "Статическая типизация", "Компиляция в нативный бинарник x86-64 через Cranelift", "Полный компилятор: лексер, парсер, проверка типов, кодген", "Учебный язык — программирование роднее для начинающих"],
      en: ["Ukrainian syntax: diya, yakshcho, inakshe, vernuti", "Static typing", "Compiles to a native x86-64 binary via Cranelift", "Full compiler: lexer, parser, type checking, codegen", "An educational language — programming closer for beginners"],
      uk: ["Український синтаксис: дія, якщо, інакше, вернути", "Статична типізація", "Компіляція в нативний бінарник x86-64 через Cranelift", "Повний компілятор: лексер, парсер, перевірка типів, кодген", "Навчальна мова для початківців"],
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
      ru: [
        "Монорепозиторий из двух частей. Первая — четыре кодек-плагина для архиватора 7-Zip: ZPAQ, libbsc, CMIX и Brotli. Они дают 7-Zip алгоритмы сжатия лучше встроенного LZMA2, и каждый проверен десятками тестов на полный цикл сжатие-распаковка.",
        "Вторая часть — безопасный по памяти Rust-порт алгоритмов сжатия и кода самого 7-Zip и LZMA SDK. Здесь принципиально стоит запрет unsafe-кода: старые алгоритмы на C переписываются так, чтобы компилятор Rust исключал целый класс ошибок памяти.",
        "Проект про сжатие данных всерьёз и одновременно про аккуратное портирование легаси-кода на безопасный язык — тема, которая мне отдельно интересна.",
      ],
      en: [
        "A monorepo with two halves. The first — four codec plugins for the 7-Zip archiver: ZPAQ, libbsc, CMIX and Brotli. They give 7-Zip compression algorithms better than the built-in LZMA2, and each is verified by dozens of round-trip tests.",
        "The second half — a memory-safe Rust port of the compression algorithms and of 7-Zip's and the LZMA SDK's own code. An unsafe-code ban is a matter of principle here: old C algorithms are rewritten so the Rust compiler rules out a whole class of memory bugs.",
        "The project is about data compression seriously and at the same time about carefully porting legacy code to a safe language — a theme I find separately interesting.",
      ],
      uk: [
        "Монорепозиторій із двох частин. Перша — чотири кодек-плагіни для архіватора 7-Zip: ZPAQ, libbsc, CMIX і Brotli. Кожен перевірений десятками тестів.",
        "Друга частина — безпечний за пам'яттю Rust-порт алгоритмів стиснення та коду самого 7-Zip і LZMA SDK із принциповою забороною unsafe-коду.",
        "Проєкт про стиснення даних усерйоз і про акуратне портування легасі-коду на безпечну мову.",
      ],
    },
    features: {
      ru: ["Четыре кодек-плагина для 7-Zip: ZPAQ, libbsc, CMIX, Brotli", "Сжатие лучше встроенного LZMA2", "Каждый кодек проверен тестами на полный цикл", "Rust-порт алгоритмов 7-Zip и LZMA SDK", "Принципиальный запрет unsafe-кода в порте"],
      en: ["Four codec plugins for 7-Zip: ZPAQ, libbsc, CMIX, Brotli", "Compression better than the built-in LZMA2", "Each codec verified by round-trip tests", "A Rust port of 7-Zip and LZMA SDK algorithms", "A principled unsafe-code ban in the port"],
      uk: ["Чотири кодек-плагіни для 7-Zip: ZPAQ, libbsc, CMIX, Brotli", "Стиснення краще за вбудований LZMA2", "Кожен кодек перевірений тестами на повний цикл", "Rust-порт алгоритмів 7-Zip і LZMA SDK", "Принципова заборона unsafe-коду в порті"],
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
      ru: [
        "Операционная система с самого низа — там, где под кодом уже нет никакой ОС, только железо. RustOS — загружаемое ядро для архитектуры x86_64, написанное по известному курсу «Writing an OS in Rust» Филиппа Оппермана.",
        "Реализован вывод текста в VGA-буфер с поддержкой макросов print! и println!, аппаратный мигающий курсор, обработка исключений процессора через таблицу прерываний IDT (breakpoint, double fault), аппаратные прерывания от контроллера PIC — таймер и клавиатура.",
        "Ввод с клавиатуры работает с поддержкой Backspace. Это самый низкий уровень из всего, что я делал: код общается напрямую с регистрами и устройствами.",
      ],
      en: [
        "An operating system from the very bottom — where there's no OS under the code anymore, only hardware. RustOS is a bootable kernel for the x86_64 architecture, written following Philipp Oppermann's well-known 'Writing an OS in Rust' course.",
        "It implements text output to the VGA buffer with print! and println! macro support, a blinking hardware cursor, CPU exception handling via the IDT interrupt table (breakpoint, double fault), and hardware interrupts from the PIC controller — the timer and keyboard.",
        "Keyboard input works with Backspace support. It's the lowest level of anything I've done: the code talks directly to registers and devices.",
      ],
      uk: [
        "Операційна система із самого низу — там, де під кодом уже немає ОС, лише залізо. RustOS — завантажуване ядро для x86_64, написане за курсом «Writing an OS in Rust».",
        "Реалізований вивід тексту у VGA-буфер із макросами print! і println!, апаратний курсор, обробка винятків процесора через IDT, апаратні переривання від PIC — таймер і клавіатура.",
        "Ввід із клавіатури працює з підтримкою Backspace. Це найнижчий рівень з усього, що я робив.",
      ],
    },
    features: {
      ru: ["Загружаемое ядро для архитектуры x86_64", "Вывод в VGA-буфер, макросы print! и println!", "Обработка исключений процессора через IDT", "Аппаратные прерывания: таймер и клавиатура (PIC)", "Ввод с клавиатуры с поддержкой Backspace"],
      en: ["A bootable kernel for the x86_64 architecture", "VGA-buffer output, print! and println! macros", "CPU exception handling via the IDT", "Hardware interrupts: timer and keyboard (PIC)", "Keyboard input with Backspace support"],
      uk: ["Завантажуване ядро для архітектури x86_64", "Вивід у VGA-буфер, макроси print! і println!", "Обробка винятків процесора через IDT", "Апаратні переривання: таймер і клавіатура (PIC)", "Ввід із клавіатури з підтримкою Backspace"],
    },
  },
];
