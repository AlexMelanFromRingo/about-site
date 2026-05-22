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
        "Мой собственный протокол децентрализованной mesh-сети. Каждый узел получает IPv6-адрес из своего ed25519-ключа и может достучаться до любого другого узла, даже без прямого соединения. Назван в честь норн — трёх скандинавских богинь судьбы: протокол строит маршруты по трём параллельным остовным деревьям (Урд, Верданди, Скульд) ради надёжности.",
        "Внутри — серьёзные идеи: гиперболическая геометрическая маршрутизация по модели диска Пуанкаре, gossip через cuckoo-фильтры, шифрование сессий ChaCha20-Poly1305. Это попытка сделать децентрализованную сеть, которая масштабируется лучше существующих.",
      ],
      en: [
        "My own decentralized mesh-network protocol. Each node gets an IPv6 address derived from its ed25519 key and can reach any other node, even without a direct connection. Named after the Norns — three Norse fate-goddesses — because the protocol routes over three parallel spanning trees (Urd, Verdandi, Skuld) for redundancy.",
        "Inside are serious ideas: hyperbolic geometric routing on the Poincaré-disk model, gossip via cuckoo filters, ChaCha20-Poly1305 session encryption. It's an attempt at a decentralized network that scales better than existing ones.",
      ],
      uk: [
        "Мій власний протокол децентралізованої mesh-мережі. Кожен вузол отримує IPv6-адресу зі свого ed25519-ключа й може достукатися до будь-якого іншого вузла навіть без прямого з'єднання. Назва — від норн, трьох скандинавських богинь долі: протокол будує маршрути за трьома остовними деревами.",
        "Усередині — серйозні ідеї: гіперболічна геометрична маршрутизація за моделлю диска Пуанкаре, gossip через cuckoo-фільтри, шифрування сесій ChaCha20-Poly1305.",
      ],
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
        "Yggdrasil — зашифрованная IPv6 mesh-сеть без серверов и центральной власти: каждый узел получает стабильный адрес из своего публичного ключа, маршрутизация полностью децентрализована. Я портировал эталонную реализацию yggdrasil-go версии 0.5.13 на Rust.",
        "Главное — порт работает по-настоящему: он совместим на уровне протокола с оригиналом и успешно обменивается зашифрованным трафиком с живой сетью Yggdrasil. Ping, HTTP, маршрутизация — всё проверено.",
      ],
      en: [
        "Yggdrasil is an encrypted IPv6 mesh network with no servers and no central authority: each node gets a stable address from its public key, and routing is fully decentralized. I ported the yggdrasil-go reference implementation, version 0.5.13, to Rust.",
        "The key part is that the port genuinely works: it's wire-compatible with the original and successfully exchanges encrypted traffic with the live Yggdrasil network. Ping, HTTP, routing — all verified.",
      ],
      uk: [
        "Yggdrasil — зашифрована IPv6 mesh-мережа без серверів і центральної влади: кожен вузол отримує стабільну адресу зі свого публічного ключа. Я портував еталонну реалізацію yggdrasil-go версії 0.5.13 на Rust.",
        "Головне — порт працює по-справжньому: він сумісний на рівні протоколу з оригіналом і обмінюється зашифрованим трафіком із живою мережею Yggdrasil.",
      ],
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
        "Мессенджер для условий цензуры. Сообщения шифруются криптографией уровня Signal — X3DH плюс Double Ratchet — а затем стеганографически прячутся в обычный HTTP-трафик: страницы блогов, аналитические запросы, куки.",
        "Для системы глубокого анализа трафика (DPI) общение через shadowlink неотличимо от того, что человек просто читает технический блог. Это не просто шифрование содержимого, а сокрытие самого факта переписки.",
      ],
      en: [
        "A messenger for conditions of censorship. Messages are encrypted with Signal-grade cryptography — X3DH plus Double Ratchet — and then steganographically hidden inside ordinary HTTP traffic: blog pages, analytics requests, cookies.",
        "To a deep-packet-inspection system, shadowlink communication is indistinguishable from someone simply reading a tech blog. It's not just encrypting content but hiding the very fact of a conversation.",
      ],
      uk: [
        "Месенджер для умов цензури. Повідомлення шифруються криптографією рівня Signal — X3DH плюс Double Ratchet — а потім стеганографічно ховаються у звичайний HTTP-трафік.",
        "Для системи глибокого аналізу трафіку спілкування через shadowlink не відрізнити від того, що людина просто читає технічний блог.",
      ],
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
      ru: ["Ironwood — это маршрутизирующее ядро, на котором стоит сеть Yggdrasil: остовное дерево, маршрутизация от источника, bloom-фильтры, шифрование сессий. Я сделал первую реализацию этого протокола на Rust.", "Совместимость подтверждена сквозным обменом зашифрованным трафиком между Rust- и Go-узлами. Ноль предупреждений компилятора, все тесты проходят — этот проект стал фундаментом для yggdrasil-rs."],
      en: ["Ironwood is the routing core the Yggdrasil network stands on: a spanning tree, source routing, bloom filters, session encryption. I built the first Rust implementation of this protocol.", "Compatibility is confirmed by end-to-end encrypted traffic exchange between Rust and Go nodes. Zero compiler warnings, all tests pass — this project became the foundation for yggdrasil-rs."],
      uk: ["Ironwood — це маршрутизуюче ядро, на якому стоїть мережа Yggdrasil: остовне дерево, маршрутизація від джерела, bloom-фільтри, шифрування сесій. Я зробив першу реалізацію цього протоколу на Rust.", "Сумісність підтверджена наскрізним обміном трафіком між Rust- і Go-вузлами."],
    },
  },
  {
    id: "bifrost", name: "Bifrost", aka: "VPN поверх mesh",
    category: "net", status: "active", year: 2026,
    langs: ["Rust"], tags: ["VPN", "SOCKS5", "TUN", "Mesh"],
    github: "https://github.com/AlexMelanFromRingo/bifrost",
    short: {
      ru: "SOCKS5-прокси и VPN-мост поверх зашифрованной mesh-сети norn-rs.",
      en: "A SOCKS5 proxy and VPN bridge running over the norn-rs encrypted mesh network.",
      uk: "SOCKS5-проксі та VPN-міст поверх зашифрованої mesh-мережі norn-rs.",
    },
    body: {
      ru: ["Bifrost превращает мою mesh-сеть norn-rs в практичный инструмент: каждый байт трафика приложений едет по зашифрованному mesh-потоку между взаимно аутентифицированными узлами. Есть режим SOCKS5-прокси и режим полноценного VPN через TUN-интерфейс.", "Скользящее окно ARQ держит поток живым даже при потере пакетов и многошаговой ретрансляции. Назван в честь радужного моста между мирами из скандинавской мифологии."],
      en: ["Bifrost turns my norn-rs mesh network into a practical tool: every byte of application traffic rides an encrypted mesh stream between mutually authenticated peers. There's a SOCKS5-proxy mode and a full VPN mode over a TUN interface.", "A sliding-window ARQ keeps the stream alive even through packet loss and multi-hop relaying. Named after the rainbow bridge between worlds from Norse mythology."],
      uk: ["Bifrost перетворює мою mesh-мережу norn-rs на практичний інструмент: кожен байт трафіку застосунків їде зашифрованим mesh-потоком. Є режим SOCKS5-проксі та режим повноцінного VPN через TUN-інтерфейс.", "Назва — від веселкового мосту між світами зі скандинавської міфології."],
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
      ru: ["Локальный SOCKS5-прокси, который заворачивает трафик Telegram в защищённый WebSocket на 443-м порту и отправляет на релейные серверы Telegram. Полезно там, где сырые IP-диапазоны Telegram блокирует DPI, но HTTPS-трафик проходит свободно.", "Написан на Rust ради скорости и надёжности — прокси должен работать быстро и без сбоев."],
      en: ["A local SOCKS5 proxy that wraps Telegram traffic in a secure WebSocket on port 443 and sends it to Telegram's relay servers. Useful where DPI blocks Telegram's raw IP ranges but HTTPS traffic passes freely.", "Written in Rust for speed and reliability — a proxy needs to be fast and crash-free."],
      uk: ["Локальний SOCKS5-проксі, що загортає трафік Telegram у захищений WebSocket на 443-му порту й відправляє на релейні сервери Telegram. Корисно там, де DPI блокує сирі IP-діапазони Telegram.", "Написаний на Rust заради швидкості й надійності."],
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
      ru: ["IRC — старый и простой протокол чата, но без шифрования. SIRC переосмысляет его: сквозное шифрование на X25519 и ChaCha20-Poly1305, BLAKE3, федеративная архитектура из связанных серверов с TLS между ними и отзывом сертификатов.", "Привычные понятия IRC — каналы, личные сообщения — остаются, но добавляется безопасность и mesh-маршрутизация. В комплекте — клиент с терминальным интерфейсом на ratatui."],
      en: ["IRC is an old, simple chat protocol, but without encryption. SIRC reimagines it: end-to-end encryption with X25519 and ChaCha20-Poly1305, BLAKE3, a federated architecture of linked servers with TLS between them and certificate revocation.", "Familiar IRC concepts — channels, private messages — stay, but security and mesh routing are added. It ships with a terminal-UI client built on ratatui."],
      uk: ["IRC — старий і простий протокол чату, але без шифрування. SIRC переосмислює його: наскрізне шифрування на X25519 і ChaCha20-Poly1305, BLAKE3, федеративна архітектура з TLS між серверами.", "У комплекті — клієнт із термінальним інтерфейсом на ratatui."],
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
      ru: ["Та же идея защищённого IRC, что и в SIRC, но реализованная на Go. Хороший способ сравнить, как одна и та же сетевая задача решается на двух языках с разными моделями конкурентности — горутины Go против async Rust.", "Часть моего интереса к защищённым протоколам общения."],
      en: ["The same secure-IRC idea as SIRC, but implemented in Go. A good way to compare how the same networking task is solved in two languages with different concurrency models — Go's goroutines versus Rust's async.", "Part of my interest in secure communication protocols."],
      uk: ["Та сама ідея захищеного IRC, що й у SIRC, але реалізована мовою Go. Гарний спосіб порівняти, як одна задача вирішується двома мовами з різними моделями конкурентності.", "Частина мого інтересу до захищених протоколів спілкування."],
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
      ru: ["Системы глубокого анализа трафика (DPI) определяют и блокируют содержимое соединений. Zapret2 — набор техник, который ломает им разбор: фрагментация, изменение заголовков и другие приёмы модификации пакетов TCP и UDP.", "Тема обхода блокировок — это про свободный доступ к информации, и понимание того, как именно работает DPI, здесь ключевое."],
      en: ["Deep-packet-inspection (DPI) systems identify and block the contents of connections. Zapret2 is a set of techniques that breaks their parsing: fragmentation, header manipulation and other TCP/UDP packet-modification tricks.", "Censorship circumvention is about free access to information, and understanding exactly how DPI works is key here."],
      uk: ["Системи глибокого аналізу трафіку (DPI) визначають і блокують вміст з'єднань. Zapret2 — набір технік, що ламає їм розбір: фрагментація, зміна заголовків та інші прийоми модифікації пакетів.", "Тема обходу блокувань — це про вільний доступ до інформації."],
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
      ru: ["Большинство устройств сидят за NAT, и напрямую соединить их непросто — каждый виден из интернета не своим адресом. Пробивка NAT — это хитрый трюк, который позволяет двум узлам за роутерами установить прямое P2P-соединение без сервера-посредника.", "Базовая техника для всего децентрализованного: P2P-сетей, прямой передачи файлов, mesh-связи."],
      en: ["Most devices sit behind NAT, and connecting them directly isn't easy — each is seen from the internet under a different address. NAT hole-punching is a clever trick that lets two peers behind routers establish a direct P2P connection without a relay server.", "A foundational technique for everything decentralized: P2P networks, direct file transfer, mesh links."],
      uk: ["Більшість пристроїв сидять за NAT, і з'єднати їх напряму непросто. Пробивка NAT — це трюк, що дозволяє двом вузлам за роутерами встановити пряме P2P-з'єднання без сервера-посередника.", "Базова техніка для всього децентралізованого."],
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
      ru: ["Учебное демо к теме пробивки NAT: с UDP этот трюк делается относительно легко, а с TCP заметно сложнее из-за того, как устроены соединения. Проект показывает оба случая рядом и объясняет разницу.", "Хорошая отправная точка для понимания P2P-соединений."],
      en: ["An educational demo for the NAT-punching topic: with UDP the trick is relatively easy, while with TCP it's noticeably harder because of how connections work. The project shows both cases side by side and explains the difference.", "A good starting point for understanding P2P connections."],
      uk: ["Навчальне демо до теми пробивки NAT: з UDP цей трюк робиться відносно легко, а з TCP помітно складніше. Проєкт показує обидва випадки поруч.", "Гарна відправна точка для розуміння P2P-з'єднань."],
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
      ru: ["Минимальный VPN, разобранный до основ: виртуальный сетевой интерфейс TUN, перехват пакетов, их туннелирование на другой узел. Без магии — видно, как именно трафик уходит в туннель и возвращается.", "Сделан, чтобы понять принцип, на котором стоят и коммерческие VPN, и мой собственный Bifrost."],
      en: ["A minimal VPN broken down to fundamentals: a TUN virtual network interface, packet capture, tunnelling them to another node. No magic — you see exactly how traffic enters the tunnel and comes back.", "Built to understand the principle behind both commercial VPNs and my own Bifrost."],
      uk: ["Мінімальний VPN, розібраний до основ: віртуальний мережевий інтерфейс TUN, перехоплення пакетів, їх тунелювання на інший вузол.", "Зроблено, щоб зрозуміти принцип, на якому стоять і комерційні VPN, і мій власний Bifrost."],
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
      ru: ["SOCKS6 — новое поколение классического прокси-протокола SOCKS, с уменьшенным числом раундов согласования и поддержкой современных возможностей вроде TCP Fast Open. Этот проект — реализация SOCKS6 на Rust.", "Часть моей коллекции прокси и сетевых инструментов наряду с tg-proxy и Bifrost."],
      en: ["SOCKS6 is the next generation of the classic SOCKS proxy protocol, with fewer negotiation round-trips and support for modern features like TCP Fast Open. This project is a Rust implementation of SOCKS6.", "Part of my collection of proxy and networking tools alongside tg-proxy and Bifrost."],
      uk: ["SOCKS6 — нове покоління класичного проксі-протоколу SOCKS, зі зменшеною кількістю раундів узгодження. Цей проєкт — реалізація SOCKS6 на Rust.", "Частина моєї колекції проксі та мережевих інструментів."],
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
      ru: ["RTMP — протокол, на котором держится видеостриминг, а RTMPS добавляет к нему TLS-шифрование. Демо разбирает, как устроена защищённая потоковая передача видео.", "Сделано в рамках интереса к стриминговым технологиям — рядом с моими OBS-оверлеями и проектом neuro-streamer."],
      en: ["RTMP is the protocol video streaming relies on, and RTMPS adds TLS encryption to it. The demo dissects how secure video streaming works.", "Built out of an interest in streaming tech — alongside my OBS overlays and the neuro-streamer project."],
      uk: ["RTMP — протокол, на якому тримається відеостримінг, а RTMPS додає до нього TLS-шифрування. Демо розбирає, як влаштована захищена потокова передача відео.", "Зроблено в межах інтересу до стрімінгових технологій."],
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
      ru: ["Скопировал текст на одном устройстве — вставил на другом. Эта утилита синхронизирует буфер обмена между машинами по сети, убирая мелкое, но постоянное неудобство работы с несколькими устройствами.", "Из категории инструментов, которые делаешь для себя, а потом не понимаешь, как жил без них."],
      en: ["Copy text on one device, paste it on another. This utility syncs the clipboard between machines over the network, removing a small but constant annoyance of working across several devices.", "From the category of tools you build for yourself and then can't imagine living without."],
      uk: ["Скопіював текст на одному пристрої — вставив на іншому. Ця утиліта синхронізує буфер обміну між машинами через мережу.", "З категорії інструментів, які робиш для себе, а потім не розумієш, як жив без них."],
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
      ru: ["Утилита проверяет, какие порты на хосте открыты и слушают соединения. Это азбука сетевой диагностики и аудита безопасности: открытые порты — это карта доступных сервисов.", "Один из ранних проектов, с которого начиналось моё знакомство с сетевым программированием на сокетах."],
      en: ["The utility checks which ports on a host are open and listening. It's the ABC of network diagnostics and security auditing: open ports are a map of available services.", "One of the early projects that started my acquaintance with socket network programming."],
      uk: ["Утиліта перевіряє, які порти на хості відкриті й слухають з'єднання. Це абетка мережевої діагностики та аудиту безпеки.", "Один із ранніх проєктів, з якого починалося моє знайомство з мережевим програмуванням."],
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
      ru: ["Простой инструмент, который проходит по сети и находит роутеры и другие сетевые устройства. Полезно для понимания того, что вообще подключено к локальной сети.", "Маленький учебный проект из ранних опытов с сетевым программированием."],
      en: ["A simple tool that walks the network and finds routers and other network devices. Handy for understanding what's actually connected to the local network.", "A small learning project from early experiments with network programming."],
      uk: ["Простий інструмент, що проходить мережею й знаходить роутери та інші мережеві пристрої.", "Маленький навчальний проєкт із ранніх дослідів із мережевим програмуванням."],
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
      ru: ["Простой скрипт, который определяет и показывает информацию об IP-адресе. Один из самых первых моих проектов — крошечный, но именно с таких вещей начинается путь в сетевое программирование.", "Оставляю его на сайте честно, как часть истории."],
      en: ["A simple script that determines and shows information about an IP address. One of my very first projects — tiny, but the path into network programming starts with exactly such things.", "I keep it on the site honestly, as part of the history."],
      uk: ["Простий скрипт, що визначає й показує інформацію про IP-адресу. Один із найперших моїх проєктів — крихітний, але саме з таких речей починається шлях.", "Лишаю його на сайті чесно, як частину історії."],
    },
  },
];
