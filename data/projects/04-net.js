/* Сети и децентрализация */
module.exports = [
  {
    id: "norn-rs", name: "norn-rs", aka: "Mesh-протокол маршрутизации",
    category: "net", status: "active", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Mesh", "Гиперболическая геометрия", "ChaCha20", "IPv6"],
    github: "https://github.com/AlexMelanFromRingo/norn-rs",
    short: {
      ru: "Демон зашифрованной mesh-сети нового поколения с гиперболической геометрической маршрутизацией.",
      en: "A next-generation encrypted mesh-network daemon with hyperbolic geometric routing.",
      uk: "Демон зашифрованої mesh-мережі нового покоління з гіперболічною геометричною маршрутизацією.",
    },
    body: {
      ru: [
        "Мой собственный протокол децентрализованной mesh-сети. Каждый узел получает IPv6-адрес из своего ed25519-ключа и может достучаться до любого другого узла, даже без прямого соединения между ними.",
        "Назван в честь норн — трёх скандинавских богинь судьбы (Урд, Верданди, Скульд). Имя отражает архитектуру: протокол строит маршруты по трём параллельным остовным деревьям, каждое со своим корнем-ориентиром, ради надёжности и распределения нагрузки.",
        "Внутри — серьёзные идеи: гиперболическая геометрическая маршрутизация по модели диска Пуанкаре (Саркар, 2011), gossip-обмен через cuckoo-фильтры, шифрование сессий ChaCha20-Poly1305. Это попытка сделать децентрализованную сеть, которая масштабируется лучше существующих.",
      ],
      en: [
        "My own decentralized mesh-network protocol. Each node gets an IPv6 address derived from its ed25519 key and can reach any other node, even without a direct connection between them.",
        "Named after the Norns — three Norse fate-goddesses (Urd, Verdandi, Skuld). The name reflects the architecture: the protocol routes over three parallel spanning trees, each rooted at its own landmark, for redundancy and load distribution.",
        "Inside are serious ideas: hyperbolic geometric routing on the Poincaré-disk model (Sarkar, 2011), gossip exchange via cuckoo filters, ChaCha20-Poly1305 session encryption. It's an attempt at a decentralized network that scales better than existing ones.",
      ],
      uk: [
        "Мій власний протокол децентралізованої mesh-мережі. Кожен вузол отримує IPv6-адресу зі свого ed25519-ключа й може достукатися до будь-якого іншого вузла.",
        "Назва — від норн, трьох скандинавських богинь долі. Протокол будує маршрути за трьома паралельними остовними деревами.",
        "Усередині — гіперболічна геометрична маршрутизація за моделлю диска Пуанкаре, gossip через cuckoo-фільтри, шифрування сесій ChaCha20-Poly1305.",
      ],
    },
    features: {
      ru: ["IPv6-адрес узла выводится из ed25519-ключа", "Маршрутизация по трём остовным деревьям (K=3)", "Гиперболическая геометрия — модель диска Пуанкаре", "Gossip-обмен через cuckoo-фильтры", "Шифрование сессий ChaCha20-Poly1305", "Работает поверх любого транспорта — TCP по IPv4 или IPv6"],
      en: ["A node's IPv6 address is derived from its ed25519 key", "Routing over three spanning trees (K=3)", "Hyperbolic geometry — the Poincaré-disk model", "Gossip exchange via cuckoo filters", "ChaCha20-Poly1305 session encryption", "Runs over any transport — TCP on IPv4 or IPv6"],
      uk: ["IPv6-адреса вузла виводиться з ed25519-ключа", "Маршрутизація за трьома остовними деревами (K=3)", "Гіперболічна геометрія — модель диска Пуанкаре", "Gossip-обмін через cuckoo-фільтри", "Шифрування сесій ChaCha20-Poly1305", "Працює поверх будь-якого транспорту"],
    },
  },
  {
    id: "yggdrasil-rs", name: "yggdrasil-rs", aka: "Yggdrasil на Rust",
    category: "net", status: "done", year: 2026, featured: true,
    langs: ["Rust"], tags: ["Yggdrasil", "Mesh", "IPv6", "E2EE"],
    github: "https://github.com/AlexMelanFromRingo/yggdrasil-rs",
    short: {
      ru: "Порт демона зашифрованной mesh-сети Yggdrasil на Rust, совместимый с живой сетью.",
      en: "A Rust port of the Yggdrasil encrypted mesh-network daemon, compatible with the live network.",
      uk: "Порт демона зашифрованої mesh-мережі Yggdrasil на Rust, сумісний із живою мережею.",
    },
    body: {
      ru: [
        "Yggdrasil — зашифрованная IPv6 mesh-сеть без серверов и центральной власти: каждый узел получает стабильный адрес из своего публичного ключа, маршрутизация полностью децентрализована, узлы сами собираются в остовное дерево.",
        "Я портировал эталонную реализацию yggdrasil-go версии 0.5.13 на Rust. Шифрование — NaCl box (X25519 + XSalsa20-Poly1305) со сквозной защитой и forward secrecy.",
        "Главное — порт работает по-настоящему. Он совместим на уровне протокола с оригиналом и успешно обменивается зашифрованным трафиком с живой сетью Yggdrasil: ping, HTTP и маршрутизация проверены на практике.",
      ],
      en: [
        "Yggdrasil is an encrypted IPv6 mesh network with no servers and no central authority: each node gets a stable address from its public key, routing is fully decentralized, and nodes self-organize into a spanning tree.",
        "I ported the yggdrasil-go reference implementation, version 0.5.13, to Rust. Encryption is NaCl box (X25519 + XSalsa20-Poly1305) with end-to-end protection and forward secrecy.",
        "The key part is that the port genuinely works. It's wire-compatible with the original and successfully exchanges encrypted traffic with the live Yggdrasil network: ping, HTTP and routing all verified in practice.",
      ],
      uk: [
        "Yggdrasil — зашифрована IPv6 mesh-мережа без серверів і центральної влади: кожен вузол отримує стабільну адресу зі свого публічного ключа.",
        "Я портував еталонну реалізацію yggdrasil-go версії 0.5.13 на Rust. Шифрування — NaCl box (X25519 + XSalsa20-Poly1305).",
        "Головне — порт працює по-справжньому: сумісний на рівні протоколу й обмінюється трафіком із живою мережею Yggdrasil.",
      ],
    },
    features: {
      ru: ["Порт yggdrasil-go v0.5.13 на Rust", "Совместим на уровне протокола с оригиналом", "Проверен обменом трафиком с живой сетью Yggdrasil", "Шифрование NaCl box (X25519 + XSalsa20-Poly1305)", "Самоорганизация узлов в остовное дерево"],
      en: ["A Rust port of yggdrasil-go v0.5.13", "Wire-compatible with the original", "Verified by traffic exchange with the live Yggdrasil network", "NaCl box encryption (X25519 + XSalsa20-Poly1305)", "Nodes self-organize into a spanning tree"],
      uk: ["Порт yggdrasil-go v0.5.13 на Rust", "Сумісний на рівні протоколу з оригіналом", "Перевірений обміном трафіком із живою мережею", "Шифрування NaCl box (X25519 + XSalsa20-Poly1305)", "Самоорганізація вузлів в остовне дерево"],
    },
  },
  {
    id: "shadowlink-rs", name: "shadowlink-rs", aka: "Мессенджер-невидимка",
    category: "net", status: "active", year: 2026, featured: true,
    langs: ["Rust"], tags: ["E2EE", "Стеганография", "Анти-DPI", "Double Ratchet"],
    github: "https://github.com/AlexMelanFromRingo/shadowlink-rs",
    short: {
      ru: "Зашифрованный мессенджер, который прячется внутри обычного HTTPS-трафика и устойчив к DPI.",
      en: "An encrypted messenger that hides inside ordinary HTTPS traffic and resists DPI.",
      uk: "Зашифрований месенджер, що ховається всередині звичайного HTTPS-трафіку та стійкий до DPI.",
    },
    body: {
      ru: [
        "Мессенджер для условий цензуры. Сообщения шифруются криптографией уровня Signal — протокол X3DH для установления ключей плюс Double Ratchet для forward secrecy.",
        "Дальше зашифрованное стеганографически прячется в обычный с виду HTTP-трафик: страницы блогов, аналитические запросы, куки. Для системы глубокого анализа трафика (DPI) общение через shadowlink неотличимо от того, что человек просто читает технический блог.",
        "Это принципиально больше, чем шифрование содержимого: скрывается сам факт переписки. Цензор не может заблокировать то, чего для него не существует.",
      ],
      en: [
        "A messenger for conditions of censorship. Messages are encrypted with Signal-grade cryptography — the X3DH protocol for key establishment plus Double Ratchet for forward secrecy.",
        "The encrypted data is then steganographically hidden inside ordinary-looking HTTP traffic: blog pages, analytics requests, cookies. To a deep-packet-inspection (DPI) system, shadowlink communication is indistinguishable from someone simply reading a tech blog.",
        "This is fundamentally more than encrypting content: the very fact of a conversation is hidden. A censor can't block what doesn't exist for them.",
      ],
      uk: [
        "Месенджер для умов цензури. Повідомлення шифруються криптографією рівня Signal — X3DH плюс Double Ratchet.",
        "Зашифроване стеганографічно ховається у звичайний HTTP-трафік: сторінки блогів, аналітичні запити, куки.",
        "Це більше, ніж шифрування вмісту: ховається сам факт листування.",
      ],
    },
    features: {
      ru: ["Криптография уровня Signal: X3DH + Double Ratchet", "Стеганография — сообщения внутри обычного HTTP-трафика", "Неотличим от просмотра блога для систем DPI", "Скрывает сам факт переписки, а не только содержимое", "Реализация на Rust"],
      en: ["Signal-grade cryptography: X3DH + Double Ratchet", "Steganography — messages inside ordinary HTTP traffic", "Indistinguishable from blog browsing to DPI systems", "Hides the fact of a conversation, not just the content", "Implemented in Rust"],
      uk: ["Криптографія рівня Signal: X3DH + Double Ratchet", "Стеганографія — повідомлення всередині HTTP-трафіку", "Не відрізнити від перегляду блогу для DPI", "Ховає сам факт листування, а не лише вміст", "Реалізація на Rust"],
    },
  },
  {
    id: "ironwood-rs", name: "ironwood-rs", aka: "Протокол Ironwood",
    category: "net", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Маршрутизация", "Mesh", "Yggdrasil"],
    github: "https://github.com/AlexMelanFromRingo/ironwood-rs",
    short: {
      ru: "Первая реализация протокола маршрутизации Ironwood на Rust — ядра сети Yggdrasil.",
      en: "The first Rust implementation of the Ironwood routing protocol — the core of the Yggdrasil network.",
      uk: "Перша реалізація протоколу маршрутизації Ironwood на Rust — ядра мережі Yggdrasil.",
    },
    body: {
      ru: [
        "Ironwood — это маршрутизирующее ядро, на котором стоит сеть Yggdrasil. Оно отвечает за то, как пакеты находят дорогу: остовное дерево, маршрутизация от источника, bloom-фильтры, шифрование сессий.",
        "Я сделал первую реализацию этого протокола на Rust. Совместимость подтверждена не на словах: сквозной обмен зашифрованным трафиком между Rust- и Go-узлами прошёл успешно.",
        "Код собирается без единого предупреждения компилятора, все тесты проходят. Именно этот аккуратный протокольный слой стал фундаментом для моего полного порта yggdrasil-rs.",
      ],
      en: [
        "Ironwood is the routing core the Yggdrasil network stands on. It's responsible for how packets find their way: a spanning tree, source routing, bloom filters, session encryption.",
        "I built the first Rust implementation of this protocol. Compatibility is confirmed not in words: end-to-end encrypted traffic exchange between Rust and Go nodes succeeded.",
        "The code compiles without a single compiler warning, all tests pass. This tidy protocol layer became the foundation for my full yggdrasil-rs port.",
      ],
      uk: [
        "Ironwood — це маршрутизуюче ядро, на якому стоїть мережа Yggdrasil: остовне дерево, маршрутизація від джерела, bloom-фільтри, шифрування сесій.",
        "Я зробив першу реалізацію цього протоколу на Rust. Сумісність підтверджена обміном трафіком між Rust- і Go-вузлами.",
        "Код збирається без жодного попередження компілятора. Цей шар став фундаментом для yggdrasil-rs.",
      ],
    },
    features: {
      ru: ["Первая реализация протокола Ironwood на Rust", "Остовное дерево, маршрутизация от источника, bloom-фильтры", "Совместимость с yggdrasil-go подтверждена обменом трафиком", "Ноль предупреждений компилятора, все тесты проходят", "Фундамент для полного порта yggdrasil-rs"],
      en: ["The first Rust implementation of the Ironwood protocol", "Spanning tree, source routing, bloom filters", "Compatibility with yggdrasil-go confirmed by traffic exchange", "Zero compiler warnings, all tests pass", "The foundation for the full yggdrasil-rs port"],
      uk: ["Перша реалізація протоколу Ironwood на Rust", "Остовне дерево, маршрутизація від джерела, bloom-фільтри", "Сумісність із yggdrasil-go підтверджена обміном трафіком", "Нуль попереджень компілятора, усі тести проходять", "Фундамент для повного порту yggdrasil-rs"],
    },
  },
  {
    id: "bifrost", name: "Bifrost", aka: "VPN поверх mesh",
    category: "net", status: "active", year: 2026,
    langs: ["Rust"], tags: ["VPN", "SOCKS5", "TUN", "Mesh", "ARQ"],
    github: "https://github.com/AlexMelanFromRingo/bifrost",
    short: {
      ru: "SOCKS5-прокси и VPN-мост поверх зашифрованной mesh-сети norn-rs.",
      en: "A SOCKS5 proxy and VPN bridge running over the norn-rs encrypted mesh network.",
      uk: "SOCKS5-проксі та VPN-міст поверх зашифрованої mesh-мережі norn-rs.",
    },
    body: {
      ru: [
        "Bifrost превращает мою mesh-сеть norn-rs из протокола в практичный инструмент. Каждый байт трафика приложений едет по зашифрованному mesh-потоку между взаимно аутентифицированными узлами.",
        "Есть два режима: SOCKS5-прокси для отдельных приложений и режим полноценного VPN через виртуальный сетевой интерфейс TUN — когда весь трафик системы уходит в mesh-сеть.",
        "Скользящее окно ARQ держит поток живым даже при потере пакетов и многошаговой ретрансляции через промежуточные узлы. Назван в честь Бифрёста — радужного моста между мирами из скандинавской мифологии.",
      ],
      en: [
        "Bifrost turns my norn-rs mesh network from a protocol into a practical tool. Every byte of application traffic rides an encrypted mesh stream between mutually authenticated peers.",
        "There are two modes: a SOCKS5 proxy for individual apps and a full VPN mode via the TUN virtual network interface — when all of the system's traffic goes into the mesh network.",
        "A sliding-window ARQ keeps the stream alive even through packet loss and multi-hop relaying via intermediate nodes. Named after Bifröst — the rainbow bridge between worlds from Norse mythology.",
      ],
      uk: [
        "Bifrost перетворює мою mesh-мережу norn-rs з протоколу на практичний інструмент. Кожен байт трафіку їде зашифрованим mesh-потоком.",
        "Є два режими: SOCKS5-проксі для окремих застосунків і режим повноцінного VPN через TUN-інтерфейс.",
        "Ковзне вікно ARQ тримає потік живим навіть при втраті пакетів. Назва — від Біфрьоста, веселкового мосту.",
      ],
    },
    features: {
      ru: ["Режим SOCKS5-прокси для отдельных приложений", "Режим полноценного VPN через интерфейс TUN", "Сквозное шифрование между аутентифицированными узлами", "Скользящее окно ARQ — поток переживает потерю пакетов", "Работает поверх mesh-сети norn-rs"],
      en: ["A SOCKS5-proxy mode for individual apps", "A full VPN mode via the TUN interface", "End-to-end encryption between authenticated peers", "Sliding-window ARQ — the stream survives packet loss", "Runs over the norn-rs mesh network"],
      uk: ["Режим SOCKS5-проксі для окремих застосунків", "Режим повноцінного VPN через інтерфейс TUN", "Наскрізне шифрування між автентифікованими вузлами", "Ковзне вікно ARQ — потік переживає втрату пакетів", "Працює поверх mesh-мережі norn-rs"],
    },
  },
  {
    id: "tg-proxy", name: "tg-proxy", aka: "Telegram через WebSocket",
    category: "net", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Telegram", "SOCKS5", "Анти-DPI", "WebSocket"],
    github: "https://github.com/AlexMelanFromRingo/tg-proxy",
    short: {
      ru: "Прокси, тоннелирующий трафик Telegram через защищённый WebSocket для обхода блокировок.",
      en: "A proxy that tunnels Telegram traffic over a secure WebSocket to bypass blocking.",
      uk: "Проксі, що тунелює трафік Telegram через захищений WebSocket для обходу блокувань.",
    },
    body: {
      ru: [
        "Локальный SOCKS5-прокси, который решает конкретную проблему: Telegram заблокирован по своим IP-диапазонам, но обычный HTTPS-трафик проходит свободно.",
        "Прокси принимает соединения Telegram Desktop или мобильного клиента по SOCKS5, заворачивает их в защищённый WebSocket (WSS, порт 443) и отправляет на релейные серверы Telegram. Снаружи это выглядит как обычный зашифрованный веб-трафик.",
        "Написан на Rust ради скорости и надёжности — прокси должен работать быстро и без сбоев, иначе им просто не будут пользоваться. Часть моей коллекции инструментов обхода блокировок.",
      ],
      en: [
        "A local SOCKS5 proxy that solves a specific problem: Telegram is blocked by its IP ranges, but ordinary HTTPS traffic passes freely.",
        "The proxy accepts Telegram Desktop or mobile client connections over SOCKS5, wraps them in a secure WebSocket (WSS, port 443) and sends them to Telegram's relay servers. From the outside it looks like ordinary encrypted web traffic.",
        "Written in Rust for speed and reliability — a proxy needs to be fast and crash-free, or people simply won't use it. Part of my collection of censorship-circumvention tools.",
      ],
      uk: [
        "Локальний SOCKS5-проксі, що вирішує конкретну проблему: Telegram заблоковано за IP-діапазонами, але HTTPS-трафік проходить вільно.",
        "Проксі приймає з'єднання Telegram по SOCKS5, загортає їх у захищений WebSocket (WSS, порт 443) і відправляє на релейні сервери.",
        "Написаний на Rust заради швидкості й надійності.",
      ],
    },
    features: {
      ru: ["Локальный SOCKS5-прокси для Telegram", "Тоннелирование через WebSocket (WSS, порт 443)", "Снаружи неотличим от обычного HTTPS-трафика", "Обход блокировки IP-диапазонов Telegram", "Написан на Rust ради скорости"],
      en: ["A local SOCKS5 proxy for Telegram", "Tunnelling over WebSocket (WSS, port 443)", "Indistinguishable from ordinary HTTPS traffic", "Bypasses blocking of Telegram's IP ranges", "Written in Rust for speed"],
      uk: ["Локальний SOCKS5-проксі для Telegram", "Тунелювання через WebSocket (WSS, порт 443)", "Зовні не відрізнити від звичайного HTTPS", "Обхід блокування IP-діапазонів Telegram", "Написаний на Rust заради швидкості"],
    },
  },
  {
    id: "sirc", name: "SIRC", aka: "Защищённый IRC",
    category: "net", status: "done", year: 2026,
    langs: ["Rust"], tags: ["IRC", "E2EE", "Федерация", "ratatui"],
    github: "https://github.com/AlexMelanFromRingo/sirc",
    short: {
      ru: "Современный федеративный IRC со сквозным шифрованием и TUI-клиентом.",
      en: "A modern federated IRC with end-to-end encryption and a TUI client.",
      uk: "Сучасний федеративний IRC зі наскрізним шифруванням та TUI-клієнтом.",
    },
    body: {
      ru: [
        "IRC — старый, простой и проверенный протокол чата, но у него нет шифрования. SIRC переосмысляет его, сохраняя привычные понятия — каналы, личные сообщения — и добавляя то, чего не хватает.",
        "Сквозное шифрование на X25519 (обмен ключами) и ChaCha20-Poly1305 (AEAD) с forward secrecy, хеширование BLAKE3. Архитектура федеративная — это сеть связанных серверов с TLS между ними и отзывом сертификатов через CRL, плюс mesh-маршрутизация.",
        "В комплекте — клиент с терминальным интерфейсом на ratatui. Весь проект написан на Rust с async/await, что даёт и скорость, и защиту от ошибок памяти.",
      ],
      en: [
        "IRC is an old, simple, proven chat protocol, but it has no encryption. SIRC reimagines it, keeping the familiar concepts — channels, private messages — and adding what's missing.",
        "End-to-end encryption with X25519 (key exchange) and ChaCha20-Poly1305 (AEAD) with forward secrecy, BLAKE3 hashing. The architecture is federated — a network of linked servers with TLS between them and certificate revocation via CRL, plus mesh routing.",
        "It ships with a terminal-UI client built on ratatui. The whole project is written in Rust with async/await, which gives both speed and protection from memory bugs.",
      ],
      uk: [
        "IRC — старий, простий протокол чату, але без шифрування. SIRC переосмислює його, зберігаючи канали та особисті повідомлення.",
        "Наскрізне шифрування на X25519 і ChaCha20-Poly1305, хешування BLAKE3. Архітектура федеративна — мережа серверів із TLS та відкликанням сертифікатів.",
        "У комплекті — клієнт із термінальним інтерфейсом на ratatui. Усе на Rust з async/await.",
      ],
    },
    features: {
      ru: ["Сквозное шифрование: X25519 + ChaCha20-Poly1305", "Хеширование BLAKE3, forward secrecy", "Федеративная архитектура — сеть серверов с TLS", "Совместим с понятиями IRC: каналы, личные сообщения", "Клиент с терминальным интерфейсом на ratatui"],
      en: ["End-to-end encryption: X25519 + ChaCha20-Poly1305", "BLAKE3 hashing, forward secrecy", "Federated architecture — a network of servers with TLS", "Compatible with IRC concepts: channels, private messages", "A terminal-UI client built on ratatui"],
      uk: ["Наскрізне шифрування: X25519 + ChaCha20-Poly1305", "Хешування BLAKE3, forward secrecy", "Федеративна архітектура — мережа серверів із TLS", "Сумісний із поняттями IRC: канали, особисті повідомлення", "Клієнт із термінальним інтерфейсом на ratatui"],
    },
  },
  {
    id: "gosecureirc", name: "GoSecureIRC", aka: "Защищённый IRC на Go",
    category: "net", status: "done", year: 2026,
    langs: ["Go"], tags: ["IRC", "Шифрование", "Сеть"],
    github: "https://github.com/AlexMelanFromRingo/GoSecureIRC",
    short: {
      ru: "Реализация защищённого IRC-чата на языке Go.",
      en: "An implementation of a secure IRC chat in the Go language.",
      uk: "Реалізація захищеного IRC-чату мовою Go.",
    },
    body: {
      ru: [
        "Та же идея защищённого IRC, что и в моём проекте SIRC, но реализованная на Go вместо Rust. Шифрованный чат с привычной IRC-механикой каналов и сообщений.",
        "Главная ценность для меня — сравнение. Одна и та же сетевая задача, решённая на двух языках с принципиально разными моделями конкурентности: лёгкие горутины и каналы Go против async/await Rust.",
        "Часть моего постоянного интереса к защищённым протоколам общения — наряду с SIRC, ECDH-чатом и мессенджером shadowlink.",
      ],
      en: [
        "The same secure-IRC idea as in my SIRC project, but implemented in Go instead of Rust. An encrypted chat with the familiar IRC mechanics of channels and messages.",
        "The main value for me is the comparison. The same networking task solved in two languages with fundamentally different concurrency models: Go's lightweight goroutines and channels versus Rust's async/await.",
        "Part of my constant interest in secure communication protocols — alongside SIRC, the ECDH chat and the shadowlink messenger.",
      ],
      uk: [
        "Та сама ідея захищеного IRC, що й у SIRC, але реалізована мовою Go замість Rust.",
        "Головна цінність — порівняння: одна задача двома мовами з різними моделями конкурентності — горутини Go проти async/await Rust.",
        "Частина мого інтересу до захищених протоколів спілкування.",
      ],
    },
    features: {
      ru: ["Защищённый IRC-чат на языке Go", "Шифрование переписки", "Привычная IRC-механика каналов и сообщений", "Сравнение моделей конкурентности Go и Rust"],
      en: ["A secure IRC chat in the Go language", "Encrypted messaging", "Familiar IRC mechanics of channels and messages", "A comparison of Go and Rust concurrency models"],
      uk: ["Захищений IRC-чат мовою Go", "Шифрування листування", "Звична IRC-механіка каналів і повідомлень", "Порівняння моделей конкурентності Go і Rust"],
    },
  },
  {
    id: "zapret2", name: "Zapret2", aka: "Обход DPI",
    category: "net", status: "done", year: 2026,
    langs: ["C"], tags: ["DPI", "Обход блокировок", "TCP/UDP"],
    github: "https://github.com/AlexMelanFromRingo/zapret2",
    short: {
      ru: "Инструментарий обхода DPI через модификацию TCP/UDP-пакетов.",
      en: "A DPI-bypass toolkit that works by modifying TCP/UDP packets.",
      uk: "Інструментарій обходу DPI через модифікацію TCP/UDP-пакетів.",
    },
    body: {
      ru: [
        "Системы глубокого анализа трафика (DPI) определяют содержимое соединений и блокируют то, что считают нежелательным. Чтобы это сделать, DPI должна правильно разобрать пакеты.",
        "Zapret2 — набор техник, который ломает DPI именно разбор: фрагментация пакетов, изменение заголовков, другие приёмы модификации TCP и UDP. Соединение для DPI становится непонятным, и оно его пропускает.",
        "Тема обхода блокировок — это про свободный доступ к информации. Понимание того, как именно работает DPI и где её можно обмануть, здесь ключевое.",
      ],
      en: [
        "Deep-packet-inspection (DPI) systems identify the contents of connections and block what they consider undesirable. To do that, DPI has to parse packets correctly.",
        "Zapret2 is a set of techniques that breaks exactly that parsing: packet fragmentation, header manipulation, other TCP/UDP modification tricks. The connection becomes unintelligible to DPI, so it lets it through.",
        "Censorship circumvention is about free access to information. Understanding exactly how DPI works and where it can be fooled is key here.",
      ],
      uk: [
        "Системи глибокого аналізу трафіку (DPI) визначають вміст з'єднань і блокують небажане. Для цього DPI має правильно розібрати пакети.",
        "Zapret2 — набір технік, що ламає DPI саме розбір: фрагментація пакетів, зміна заголовків, інші прийоми модифікації.",
        "Тема обходу блокувань — це про вільний доступ до інформації.",
      ],
    },
    features: {
      ru: ["Фрагментация TCP/UDP-пакетов", "Изменение заголовков для обмана DPI", "Несколько техник модификации трафика", "Обход блокировок без сервера-посредника"],
      en: ["TCP/UDP packet fragmentation", "Header manipulation to fool DPI", "Several traffic-modification techniques", "Censorship bypass without a relay server"],
      uk: ["Фрагментація TCP/UDP-пакетів", "Зміна заголовків для обману DPI", "Кілька технік модифікації трафіку", "Обхід блокувань без сервера-посередника"],
    },
  },
  {
    id: "nat-punching", name: "NAT Punching", aka: "Пробивка NAT",
    category: "net", status: "done", year: 2026,
    langs: ["Go"], tags: ["NAT", "P2P", "Сеть"],
    github: "https://github.com/AlexMelanFromRingo/NAT-punching",
    short: {
      ru: "Реализация техники пробивки NAT для прямого соединения между узлами за роутерами.",
      en: "An implementation of NAT-hole-punching for direct connections between peers behind routers.",
      uk: "Реалізація техніки пробивки NAT для прямого з'єднання між вузлами за роутерами.",
    },
    body: {
      ru: [
        "Большинство устройств в интернете сидят за NAT — за роутером, который прячет их за одним общим адресом. Из-за этого два таких устройства не могут соединиться напрямую: каждое не знает, куда стучаться.",
        "Пробивка NAT (hole punching) — хитрый трюк, который это обходит. Через сервер-посредник узлы узнают адреса друг друга, а затем одновременно начинают слать пакеты — и роутеры, увидев исходящий трафик, открывают путь входящему.",
        "Это базовая техника для всего децентрализованного: P2P-сетей, прямой передачи файлов, mesh-связи. Без неё децентрализация упирается в роутеры.",
      ],
      en: [
        "Most devices on the internet sit behind NAT — behind a router that hides them behind one shared address. Because of that, two such devices can't connect directly: neither knows where to knock.",
        "NAT hole punching is a clever trick that works around this. Via a relay server the peers learn each other's addresses, then simultaneously start sending packets — and the routers, seeing outgoing traffic, open the path for incoming.",
        "It's a foundational technique for everything decentralized: P2P networks, direct file transfer, mesh links. Without it, decentralization hits a wall of routers.",
      ],
      uk: [
        "Більшість пристроїв сидять за NAT — за роутером, що ховає їх за спільною адресою. Через це два пристрої не можуть з'єднатися напряму.",
        "Пробивка NAT — трюк, що це обходить: через сервер-посередник вузли дізнаються адреси й одночасно шлють пакети, відкриваючи шлях.",
        "Базова техніка для всього децентралізованого: P2P-мереж, передачі файлів, mesh-зв'язку.",
      ],
    },
    features: {
      ru: ["Прямое P2P-соединение между узлами за NAT", "Обмен адресами через сервер-посредник", "Одновременная отправка пакетов для пробивки", "Фундамент для P2P-сетей и передачи файлов"],
      en: ["Direct P2P connection between peers behind NAT", "Address exchange via a relay server", "Simultaneous packet sending to punch the hole", "A foundation for P2P networks and file transfer"],
      uk: ["Пряме P2P-з'єднання між вузлами за NAT", "Обмін адресами через сервер-посередник", "Одночасна відправка пакетів для пробивки", "Фундамент для P2P-мереж і передачі файлів"],
    },
  },
  {
    id: "tcp-udp-punch", name: "TCP & UDP Punch Demo", aka: "Демо пробивки",
    category: "net", status: "done", year: 2025,
    langs: ["Go"], tags: ["NAT", "TCP", "UDP", "P2P"],
    github: "https://github.com/AlexMelanFromRingo/tcp-and-udp-punch-demo",
    short: {
      ru: "Демонстрация пробивки NAT для протоколов TCP и UDP с наглядным сравнением.",
      en: "A demo of NAT hole-punching for both TCP and UDP, with a clear comparison.",
      uk: "Демонстрація пробивки NAT для протоколів TCP і UDP з наочним порівнянням.",
    },
    body: {
      ru: [
        "Учебное демо к теме пробивки NAT. Важная деталь, которую оно показывает: с UDP этот трюк делается относительно легко, а с TCP заметно сложнее.",
        "Причина — в самой природе протоколов. UDP не имеет состояния соединения, поэтому пакеты летят свободно. TCP же устанавливает соединение через рукопожатие, и пробить его сквозь NAT требует более тонкой синхронизации.",
        "Проект показывает оба случая рядом и объясняет разницу — хорошая отправная точка для понимания P2P-соединений перед более серьёзным NAT-punching.",
      ],
      en: [
        "An educational demo for the NAT-punching topic. An important detail it shows: with UDP the trick is relatively easy, while with TCP it's noticeably harder.",
        "The reason is in the nature of the protocols. UDP is connectionless, so packets fly freely. TCP, on the other hand, establishes a connection via a handshake, and punching it through NAT requires finer synchronization.",
        "The project shows both cases side by side and explains the difference — a good starting point for understanding P2P connections before the more serious NAT-punching.",
      ],
      uk: [
        "Навчальне демо до теми пробивки NAT. Важлива деталь: з UDP трюк робиться легко, а з TCP помітно складніше.",
        "Причина — у природі протоколів: UDP без стану, TCP встановлює з'єднання через рукостискання.",
        "Проєкт показує обидва випадки поруч — гарна відправна точка перед серйознішим NAT-punching.",
      ],
    },
    features: {
      ru: ["Пробивка NAT для UDP и для TCP", "Наглядное сравнение двух случаев", "Объяснение, почему TCP сложнее UDP", "Учебная отправная точка для P2P-соединений"],
      en: ["NAT punching for both UDP and TCP", "A clear comparison of the two cases", "An explanation of why TCP is harder than UDP", "An educational starting point for P2P connections"],
      uk: ["Пробивка NAT для UDP і для TCP", "Наочне порівняння двох випадків", "Пояснення, чому TCP складніше за UDP", "Навчальна відправна точка для P2P-з'єднань"],
    },
  },
  {
    id: "vpn-demo", name: "VPN Demo", aka: "Учебный VPN",
    category: "net", status: "done", year: 2026,
    langs: ["Go"], tags: ["VPN", "TUN", "Туннелирование"],
    github: "https://github.com/AlexMelanFromRingo/vpn-demo",
    short: {
      ru: "Учебная реализация VPN-туннеля на Go, объясняющая, как вообще работает VPN.",
      en: "An educational Go implementation of a VPN tunnel that explains how a VPN works at all.",
      uk: "Навчальна реалізація VPN-тунелю на Go, що пояснює, як працює VPN.",
    },
    body: {
      ru: [
        "Минимальный VPN, разобранный до основ. Многие пользуются VPN каждый день, но мало кто представляет, что происходит внутри — а внутри ничего магического нет.",
        "Демо показывает всю цепочку: создаётся виртуальный сетевой интерфейс TUN, через него перехватываются пакеты системы, они шифруются и туннелируются на другой узел, там расшифровываются и отправляются дальше.",
        "Сделан, чтобы понять принцип, на котором стоят и коммерческие VPN, и мой собственный Bifrost. Когда видишь VPN изнутри, он перестаёт быть чёрным ящиком.",
      ],
      en: [
        "A minimal VPN broken down to fundamentals. Many people use a VPN every day, but few picture what happens inside — and there's nothing magical inside.",
        "The demo shows the whole chain: a TUN virtual network interface is created, the system's packets are captured through it, encrypted and tunnelled to another node, decrypted there and sent on.",
        "Built to understand the principle behind both commercial VPNs and my own Bifrost. When you see a VPN from the inside, it stops being a black box.",
      ],
      uk: [
        "Мінімальний VPN, розібраний до основ. Багато хто користується VPN щодня, але мало хто уявляє, що всередині.",
        "Демо показує весь ланцюжок: створюється інтерфейс TUN, через нього перехоплюються пакети, шифруються й тунелюються на інший вузол.",
        "Зроблено, щоб зрозуміти принцип, на якому стоять і комерційні VPN, і мій Bifrost.",
      ],
    },
    features: {
      ru: ["Виртуальный сетевой интерфейс TUN", "Перехват, шифрование и туннелирование пакетов", "Вся цепочка работы VPN без магии", "Учебная основа для понимания коммерческих VPN"],
      en: ["A TUN virtual network interface", "Packet capture, encryption and tunnelling", "The whole VPN chain with no magic", "An educational base for understanding commercial VPNs"],
      uk: ["Віртуальний мережевий інтерфейс TUN", "Перехоплення, шифрування й тунелювання пакетів", "Весь ланцюжок роботи VPN без магії", "Навчальна основа для розуміння комерційних VPN"],
    },
  },
  {
    id: "socks6-rs", name: "socks6-rs", aka: "Прокси SOCKS6",
    category: "net", status: "done", year: 2026,
    langs: ["Rust"], tags: ["SOCKS6", "Прокси", "Протокол"],
    github: "https://github.com/AlexMelanFromRingo/socks6-rs",
    short: {
      ru: "Реализация прокси-протокола SOCKS6 нового поколения на Rust.",
      en: "A Rust implementation of the next-generation SOCKS6 proxy protocol.",
      uk: "Реалізація проксі-протоколу нового покоління SOCKS6 на Rust.",
    },
    body: {
      ru: [
        "SOCKS6 — новое поколение классического прокси-протокола SOCKS. Главное его улучшение по сравнению с SOCKS5 — меньше раундов согласования при установке соединения, что заметно ускоряет работу.",
        "Также SOCKS6 поддерживает современные возможности вроде TCP Fast Open. Этот проект — реализация протокола на Rust: и серверная, и клиентская часть.",
        "Часть моей коллекции прокси и сетевых инструментов наряду с tg-proxy и Bifrost. Реализовать протокол с нуля — лучший способ понять, чем он отличается от предшественника.",
      ],
      en: [
        "SOCKS6 is the next generation of the classic SOCKS proxy protocol. Its main improvement over SOCKS5 — fewer negotiation round-trips when establishing a connection, which noticeably speeds things up.",
        "SOCKS6 also supports modern features like TCP Fast Open. This project is a Rust implementation of the protocol: both the server and the client side.",
        "Part of my collection of proxy and networking tools alongside tg-proxy and Bifrost. Implementing a protocol from scratch is the best way to understand how it differs from its predecessor.",
      ],
      uk: [
        "SOCKS6 — нове покоління класичного проксі-протоколу SOCKS. Головне покращення — менше раундів узгодження при встановленні з'єднання.",
        "SOCKS6 також підтримує TCP Fast Open. Цей проєкт — реалізація протоколу на Rust.",
        "Частина моєї колекції проксі та мережевих інструментів.",
      ],
    },
    features: {
      ru: ["Реализация прокси-протокола SOCKS6 на Rust", "Меньше раундов согласования, чем у SOCKS5", "Поддержка TCP Fast Open", "Серверная и клиентская часть"],
      en: ["A Rust implementation of the SOCKS6 proxy protocol", "Fewer negotiation round-trips than SOCKS5", "TCP Fast Open support", "Both the server and client side"],
      uk: ["Реалізація проксі-протоколу SOCKS6 на Rust", "Менше раундів узгодження, ніж у SOCKS5", "Підтримка TCP Fast Open", "Серверна та клієнтська частина"],
    },
  },
  {
    id: "rtmps-demo", name: "RTMPS Demo", aka: "Защищённый стриминг",
    category: "net", status: "done", year: 2026,
    langs: ["JavaScript"], tags: ["RTMPS", "Стриминг", "Протокол"],
    github: "https://github.com/AlexMelanFromRingo/rtmps-demo",
    short: {
      ru: "Демонстрация работы защищённого протокола потоковой передачи RTMPS.",
      en: "A demo of how the secure RTMPS streaming protocol works.",
      uk: "Демонстрація роботи захищеного протоколу потокової передачі RTMPS.",
    },
    body: {
      ru: [
        "RTMP — протокол, на котором десятилетиями держался видеостриминг: именно по нему трансляция уходит с компьютера стримера на сервер. RTMPS добавляет к нему слой TLS-шифрования.",
        "Это демо разбирает, как устроена защищённая потоковая передача видео: установка соединения, рукопожатие, передача потока поверх шифрования.",
        "Сделано в рамках моего интереса к стриминговым технологиям — рядом с OBS-оверлеями и проектом neuro-streamer.",
      ],
      en: [
        "RTMP is the protocol that video streaming relied on for decades: it's how a broadcast goes from a streamer's computer to the server. RTMPS adds a layer of TLS encryption to it.",
        "This demo dissects how secure video streaming works: connection setup, the handshake, transmitting the stream over encryption.",
        "Built out of my interest in streaming technologies — alongside the OBS overlays and the neuro-streamer project.",
      ],
      uk: [
        "RTMP — протокол, на якому десятиліттями тримався відеостримінг. RTMPS додає до нього шар TLS-шифрування.",
        "Це демо розбирає, як влаштована захищена потокова передача відео: встановлення з'єднання, рукостискання, передача потоку.",
        "Зроблено в межах інтересу до стрімінгових технологій.",
      ],
    },
    features: {
      ru: ["Разбор защищённого протокола стриминга RTMPS", "RTMP плюс слой TLS-шифрования", "Установка соединения и передача потока", "Часть темы стриминговых технологий"],
      en: ["A breakdown of the secure RTMPS streaming protocol", "RTMP plus a TLS encryption layer", "Connection setup and stream transmission", "Part of the streaming-technologies theme"],
      uk: ["Розбір захищеного протоколу стримінгу RTMPS", "RTMP плюс шар TLS-шифрування", "Встановлення з'єднання й передача потоку", "Частина теми стрімінгових технологій"],
    },
  },
  {
    id: "shared-clipboard", name: "Shared Clipboard", aka: "Общий буфер обмена",
    category: "net", status: "done", year: 2026,
    langs: ["TypeScript"], tags: ["Синхронизация", "Сеть", "Утилита"],
    github: "https://github.com/AlexMelanFromRingo/shared-clipboard",
    short: {
      ru: "Синхронизация буфера обмена между устройствами по сети.",
      en: "Clipboard synchronization between devices over the network.",
      uk: "Синхронізація буфера обміну між пристроями через мережу.",
    },
    body: {
      ru: [
        "Скопировал текст на одном устройстве — вставил на другом. Простая идея, которая убирает мелкое, но постоянное неудобство работы с несколькими компьютерами или с компьютером и телефоном.",
        "Утилита следит за буфером обмена и синхронизирует его между устройствами по сети: что скопировано на одном, тут же доступно на остальных.",
        "Из категории инструментов, которые делаешь под свою бытовую боль, а потом не понимаешь, как раньше без них обходился.",
      ],
      en: [
        "Copy text on one device, paste it on another. A simple idea that removes the small but constant annoyance of working across several computers, or a computer and a phone.",
        "The utility watches the clipboard and syncs it between devices over the network: what's copied on one is immediately available on the others.",
        "From the category of tools you build for your own everyday pain and then can't imagine having lived without.",
      ],
      uk: [
        "Скопіював текст на одному пристрої — вставив на іншому. Проста ідея, що прибирає постійну незручність роботи з кількома пристроями.",
        "Утиліта стежить за буфером обміну й синхронізує його між пристроями через мережу.",
        "З категорії інструментів, які робиш під свою побутову біль.",
      ],
    },
    features: {
      ru: ["Синхронизация буфера обмена по сети", "Скопировано на одном — доступно на всех устройствах", "Убирает неудобство работы с несколькими компьютерами", "Реализация на TypeScript"],
      en: ["Clipboard synchronization over the network", "Copied on one — available on all devices", "Removes the friction of working across several computers", "Implemented in TypeScript"],
      uk: ["Синхронізація буфера обміну через мережу", "Скопійовано на одному — доступно на всіх пристроях", "Прибирає незручність роботи з кількома комп'ютерами", "Реалізація на TypeScript"],
    },
  },
  {
    id: "portscanner", name: "Port Scanner", aka: "Сканер портов",
    category: "net", status: "done", year: 2023,
    langs: ["Python"], tags: ["Сканирование", "Сеть", "Безопасность"],
    short: {
      ru: "Сканер открытых портов на хосте — базовый инструмент сетевой диагностики.",
      en: "A scanner of open ports on a host — a basic network-diagnostics tool.",
      uk: "Сканер відкритих портів на хості — базовий інструмент мережевої діагностики.",
    },
    body: {
      ru: [
        "Утилита проверяет, какие порты на хосте открыты и слушают соединения. Это азбука и сетевой диагностики, и аудита безопасности: открытые порты — это карта доступных на машине сервисов.",
        "Внутри — работа с сокетами напрямую: попытка соединения с каждым портом из диапазона, разбор результата, замер таймаутов. Существует в нескольких версиях с разными подходами к скорости.",
        "Один из ранних проектов, с которого начиналось моё знакомство с сетевым программированием — простой по идее, но именно на нём осваиваются сокеты.",
      ],
      en: [
        "The utility checks which ports on a host are open and listening for connections. It's the ABC of both network diagnostics and security auditing: open ports are a map of the services available on a machine.",
        "Inside is direct socket work: attempting a connection to each port in a range, parsing the result, measuring timeouts. It exists in several versions with different speed approaches.",
        "One of the early projects that started my acquaintance with network programming — simple in idea, but it's exactly where you learn sockets.",
      ],
      uk: [
        "Утиліта перевіряє, які порти на хості відкриті й слухають з'єднання. Це абетка мережевої діагностики та аудиту безпеки.",
        "Усередині — робота із сокетами напряму: спроба з'єднання з кожним портом, розбір результату.",
        "Один із ранніх проєктів, з якого починалося моє знайомство з мережевим програмуванням.",
      ],
    },
    features: {
      ru: ["Сканирование диапазона портов хоста", "Прямая работа с сетевыми сокетами", "Несколько версий с разной скоростью", "Базовый инструмент диагностики и аудита"],
      en: ["Scanning a host's port range", "Direct work with network sockets", "Several versions with different speeds", "A basic diagnostics and audit tool"],
      uk: ["Сканування діапазону портів хоста", "Пряма робота з мережевими сокетами", "Кілька версій із різною швидкістю", "Базовий інструмент діагностики та аудиту"],
    },
  },
  {
    id: "routerfind", name: "Router Find", aka: "Поиск роутеров",
    category: "net", status: "done", year: 2023,
    langs: ["Python"], tags: ["Сеть", "Сканирование"],
    short: {
      ru: "Утилита для обнаружения роутеров и сетевых устройств в локальной сети.",
      en: "A utility for discovering routers and network devices on the local network.",
      uk: "Утиліта для виявлення роутерів і мережевих пристроїв у локальній мережі.",
    },
    body: {
      ru: [
        "Простой инструмент, который проходит по локальной сети и находит роутеры и другие сетевые устройства. Полезно, чтобы понять, что вообще подключено к сети вокруг.",
        "Внутри — опрос диапазона адресов локальной сети и определение, кто на них отвечает. Это шаг от сканера портов к сканеру сети: не «какие порты у хоста», а «какие хосты вообще есть».",
        "Маленький учебный проект из ранних опытов с сетевым программированием — продолжение темы сетевой разведки после Port Scanner.",
      ],
      en: [
        "A simple tool that walks the local network and finds routers and other network devices. Handy for understanding what's actually connected to the network around you.",
        "Inside is polling the local network's address range and determining who answers on them. It's a step from a port scanner to a network scanner: not 'which ports a host has' but 'which hosts exist at all'.",
        "A small learning project from early experiments with network programming — a continuation of the network-reconnaissance theme after Port Scanner.",
      ],
      uk: [
        "Простий інструмент, що проходить локальною мережею й знаходить роутери та інші пристрої.",
        "Усередині — опитування діапазону адрес мережі й визначення, хто відповідає. Крок від сканера портів до сканера мережі.",
        "Маленький навчальний проєкт із ранніх дослідів із мережевим програмуванням.",
      ],
    },
    features: {
      ru: ["Обнаружение роутеров и устройств в локальной сети", "Опрос диапазона адресов сети", "Шаг от сканера портов к сканеру сети", "Учебный проект по сетевой разведке"],
      en: ["Discovers routers and devices on the local network", "Polls the network's address range", "A step from a port scanner to a network scanner", "A learning project in network reconnaissance"],
      uk: ["Виявлення роутерів і пристроїв у локальній мережі", "Опитування діапазону адрес мережі", "Крок від сканера портів до сканера мережі", "Навчальний проєкт із мережевої розвідки"],
    },
  },
  {
    id: "getip", name: "Get IP", aka: "Информация об IP",
    category: "net", status: "done", year: 2022,
    langs: ["Python"], tags: ["Сеть", "Утилита"],
    short: {
      ru: "Маленькая утилита для получения информации об IP-адресе.",
      en: "A small utility for fetching information about an IP address.",
      uk: "Маленька утиліта для отримання інформації про IP-адресу.",
    },
    body: {
      ru: [
        "Простой скрипт, который определяет и показывает информацию об IP-адресе. Один из самых первых моих проектов — крошечный, буквально несколько строк.",
        "Но именно с таких вещей начинается путь в сетевое программирование: первый запрос, первый ответ, первое понимание, что код может общаться с сетью.",
        "Оставляю его на сайте честно, как часть истории — видно стартовую точку, от которой потом дорос до своих mesh-протоколов.",
      ],
      en: [
        "A simple script that determines and shows information about an IP address. One of my very first projects — tiny, literally a few lines.",
        "But the path into network programming starts with exactly such things: a first request, a first response, a first realization that code can talk to the network.",
        "I keep it on the site honestly, as part of the history — you can see the starting point I later grew from into my own mesh protocols.",
      ],
      uk: [
        "Простий скрипт, що визначає й показує інформацію про IP-адресу. Один із найперших моїх проєктів.",
        "Але саме з таких речей починається шлях у мережеве програмування.",
        "Лишаю його на сайті чесно, як частину історії — видно стартову точку.",
      ],
    },
    features: {
      ru: ["Определение информации об IP-адресе", "Один из самых ранних моих проектов", "Первый опыт работы кода с сетью", "Оставлен честно как часть истории"],
      en: ["Determines information about an IP address", "One of my very earliest projects", "A first experience of code talking to the network", "Kept honestly as part of the history"],
      uk: ["Визначення інформації про IP-адресу", "Один із найперших моїх проєктів", "Перший досвід роботи коду з мережею", "Лишений чесно як частина історії"],
    },
  },
];
