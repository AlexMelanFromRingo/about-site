/* Нейросети и машинное обучение */
module.exports = [
  {
    id: "mangacoloring", name: "MangaColoring", aka: "Раскрашивание манги",
    category: "ml", status: "active", year: 2025, featured: true,
    langs: ["Python", "PyTorch"], tags: ["Нейросети", "GAN", "Computer Vision"],
    github: "https://github.com/AlexMelanFromRingo/MangaColoring",
    short: {
      ru: "Архитектура нейросети, которая автоматически раскрашивает чёрно-белые страницы манги.",
      en: "A neural-network architecture that automatically colours black-and-white manga pages.",
      uk: "Архітектура нейромережі, що автоматично розфарбовує чорно-білі сторінки манги.",
    },
    body: {
      ru: [
        "Манга почти всегда чёрно-белая, и раскрасить её вручную — огромный труд. Этот проект — нейросеть, которая делает это сама: на вход чёрно-белая страница, на выходе цветная.",
        "Задача сложнее, чем кажется: нужно понимать, что на картинке, и подбирать осмысленные, согласованные цвета. Это один из моих главных проектов в компьютерном зрении, где я разбирался с архитектурой сети и обучением на реальных данных.",
      ],
      en: [
        "Manga is almost always black and white, and colouring it by hand is enormous work. This project is a neural network that does it itself: a black-and-white page in, a colour page out.",
        "The task is harder than it looks: the network has to understand what's in the image and pick meaningful, consistent colours. It's one of my main computer-vision projects, where I worked through network architecture and training on real data.",
      ],
      uk: [
        "Манга майже завжди чорно-біла, і розфарбувати її вручну — величезна праця. Цей проєкт — нейромережа, що робить це сама.",
        "Завдання складніше, ніж здається: треба розуміти, що на зображенні, й добирати осмислені, узгоджені кольори. Це один із моїх головних проєктів у комп'ютерному зорі.",
      ],
    },
  },
  {
    id: "minigpt", name: "MiniGPT", aka: "GPT с нуля",
    category: "ml", status: "done", year: 2025, featured: true,
    langs: ["Python", "PyTorch"], tags: ["Трансформеры", "LLM", "Обучение"],
    github: "https://github.com/AlexMelanFromRingo/MiniGPT",
    short: {
      ru: "Минимальная реализация языковой модели в стиле GPT, написанная с нуля для понимания трансформеров.",
      en: "A minimal GPT-style language model written from scratch to understand transformers.",
      uk: "Мінімальна реалізація мовної моделі в стилі GPT, написана з нуля для розуміння трансформерів.",
    },
    body: {
      ru: ["Чтобы понять, как на самом деле работают большие языковые модели, я собрал маленький GPT с нуля: токенизация, внимание, блоки трансформера, обучение. Маленький — значит можно запустить, обучить и потрогать всё руками, не имея кластера видеокарт.", "Это тот случай, когда собственная реализация даёт понимание, которого не получить из статей и обзоров."],
      en: ["To understand how large language models really work, I built a tiny GPT from scratch: tokenization, attention, transformer blocks, training. Tiny means you can run it, train it and touch everything by hand without a GPU cluster.", "It's the case where your own implementation gives understanding you can't get from papers and overviews."],
      uk: ["Щоб зрозуміти, як насправді працюють великі мовні моделі, я зібрав маленький GPT з нуля: токенізація, увага, блоки трансформера, навчання.", "Це той випадок, коли власна реалізація дає розуміння, якого не отримати зі статей."],
    },
  },
  {
    id: "customgan", name: "CustomGAN", aka: "Своя GAN-сеть",
    category: "ml", status: "done", year: 2024,
    langs: ["Python", "PyTorch"], tags: ["GAN", "Генеративные модели"],
    short: {
      ru: "Проект по созданию собственной нейросети генеративно-состязательной архитектуры (GAN).",
      en: "A project building a custom neural network of the generative-adversarial (GAN) architecture.",
      uk: "Проєкт зі створення власної нейромережі генеративно-змагальної архітектури (GAN).",
    },
    body: {
      ru: ["GAN — это пара сетей, которые соревнуются: одна генерирует картинки, другая учится отличать подделку от настоящего. CustomGAN — моя собственная реализация такой архитектуры, где я с нуля настраивал генератор, дискриминатор и процесс обучения.", "GAN печально известны капризностью обучения, так что это был хороший практический вызов."],
      en: ["A GAN is a pair of competing networks: one generates images, the other learns to tell fake from real. CustomGAN is my own implementation of that architecture, where I tuned the generator, discriminator and training process from scratch.", "GANs are notoriously finicky to train, so it was a good practical challenge."],
      uk: ["GAN — це пара мереж, що змагаються: одна генерує картинки, інша вчиться відрізняти підробку від справжнього. CustomGAN — моя власна реалізація такої архітектури.", "GAN відомі вередливістю навчання, тож це був гарний практичний виклик."],
    },
  },
  {
    id: "lightweight-gan-cpu", name: "LightweightGAN CPU", aka: "GAN без видеокарты",
    category: "ml", status: "done", year: 2024,
    langs: ["Python", "PyTorch"], tags: ["GAN", "CPU", "Форк"],
    github: "https://github.com/AlexMelanFromRingo/lightweight-gan-cpu",
    short: {
      ru: "Форк LightweightGAN, адаптированный для обучения и запуска на процессоре без видеокарты.",
      en: "A fork of LightweightGAN adapted to train and run on a CPU without a GPU.",
      uk: "Форк LightweightGAN, адаптований для навчання та запуску на процесорі без відеокарти.",
    },
    body: {
      ru: ["LightweightGAN — известная архитектура для генерации картинок высокого разрешения, обучаемая за день-два. Но рассчитана она на видеокарту, а её есть не у всех. Я адаптировал проект так, чтобы он работал на обычном процессоре.", "Это про доступность: возможность экспериментировать с генеративными сетями не должна упираться в наличие дорогого железа."],
      en: ["LightweightGAN is a well-known architecture for generating high-resolution images, trainable in a day or two. But it's built for a GPU, and not everyone has one. I adapted the project to run on an ordinary CPU.", "It's about accessibility: experimenting with generative networks shouldn't depend on owning expensive hardware."],
      uk: ["LightweightGAN — відома архітектура для генерації зображень високої роздільності. Але розрахована вона на відеокарту, а її є не у всіх. Я адаптував проєкт для звичайного процесора.", "Це про доступність: експерименти з генеративними мережами не мають упиратися в дороге залізо."],
    },
  },
  {
    id: "ganlearn", name: "GAN Learn", aka: "Изучение GAN",
    category: "ml", status: "done", year: 2023,
    langs: ["Python", "PyTorch"], tags: ["GAN", "MNIST", "Учебное"],
    short: {
      ru: "Серия учебных экспериментов с генеративно-состязательными сетями на лицах и цифрах MNIST.",
      en: "A series of learning experiments with generative-adversarial networks on faces and MNIST digits.",
      uk: "Серія навчальних експериментів із генеративно-змагальними мережами на обличчях і цифрах MNIST.",
    },
    body: {
      ru: ["Мой путь к пониманию GAN: несколько версий сети, которые я писал и переписывал, обучая генерировать лица и рукописные цифры MNIST. Видно, как от версии к версии менялись подходы — оптимизаторы, архитектура, способы стабилизации.", "Это лаборатория экспериментов, из которой потом вырос более серьёзный CustomGAN."],
      en: ["My path to understanding GANs: several versions of a network I wrote and rewrote, training it to generate faces and handwritten MNIST digits. You can see how approaches changed version to version — optimizers, architecture, stabilization tricks.", "It's an experiment lab the more serious CustomGAN later grew out of."],
      uk: ["Мій шлях до розуміння GAN: кілька версій мережі, які я писав і переписував, навчаючи генерувати обличчя й цифри MNIST.", "Це лабораторія експериментів, з якої потім виріс серйозніший CustomGAN."],
    },
  },
  {
    id: "llama-finetune", name: "LLaMA Fine Tune", aka: "Дообучение модели",
    category: "ml", status: "done", year: 2024,
    langs: ["Python", "PyTorch"], tags: ["LLM", "Fine-tuning", "LLaMA"],
    short: {
      ru: "Дообучение языковой модели LLaMA на собственном наборе данных.",
      en: "Fine-tuning the LLaMA language model on a custom dataset.",
      uk: "Донавчання мовної моделі LLaMA на власному наборі даних.",
    },
    body: {
      ru: ["Готовая языковая модель знает много, но не знает именно того, что нужно тебе. Этот проект — про дообучение LLaMA: подготовка датасета, сам процесс fine-tuning и проверка, что модель действительно подхватила новые знания.", "Логичное продолжение моих проектов LLaMA Forge и LLaMA Online — от использования модели к её настройке под себя."],
      en: ["A ready language model knows a lot, but not exactly what you need. This project is about fine-tuning LLaMA: preparing a dataset, the fine-tuning process itself and checking that the model actually picked up the new knowledge.", "A natural continuation of my LLaMA Forge and LLaMA Online projects — from using a model to tuning it for yourself."],
      uk: ["Готова мовна модель знає багато, але не знає саме того, що потрібно тобі. Цей проєкт — про донавчання LLaMA: підготовка датасету, сам процес fine-tuning і перевірка.", "Логічне продовження моїх проєктів LLaMA Forge і LLaMA Online."],
    },
  },
  {
    id: "simple-java-nn", name: "Simple Java NN", aka: "Перцептрон на Java",
    category: "ml", status: "done", year: 2023,
    langs: ["Java"], tags: ["Нейросети", "Перцептрон", "С нуля"],
    short: {
      ru: "Простой многослойный перцептрон, написанный на Java без сторонних библиотек.",
      en: "A simple multilayer perceptron written in Java without third-party libraries.",
      uk: "Простий багатошаровий перцептрон, написаний на Java без сторонніх бібліотек.",
    },
    body: {
      ru: ["Нейросеть с нуля на чистой Java: матрицы, прямой проход, обратное распространение ошибки, обучение. Никакого PyTorch — всё руками, чтобы понять механику до последней формулы.", "Существует в двух версиях, включая вариант под названием Onigiri. Базовый, но важный проект: без понимания перцептрона нет понимания всего остального в ML."],
      en: ["A neural network from scratch in pure Java: matrices, forward pass, backpropagation, training. No PyTorch — everything by hand, to understand the mechanics down to the last formula.", "It exists in two versions, including one called Onigiri. A basic but important project: without understanding the perceptron there's no understanding the rest of ML."],
      uk: ["Нейромережа з нуля на чистій Java: матриці, прямий прохід, зворотне поширення помилки, навчання. Жодного PyTorch — усе руками.", "Існує у двох версіях. Базовий, але важливий проєкт: без розуміння перцептрона немає розуміння решти ML."],
    },
  },
  {
    id: "nn-visualise", name: "Neural Network Visualise", aka: "Визуализация нейросети",
    category: "ml", status: "done", year: 2024,
    langs: ["Python"], tags: ["Визуализация", "Нейросети", "Образование"],
    short: {
      ru: "Визуализация работы нейросети — наглядное представление нейронов, связей и сигналов.",
      en: "A visualization of how a neural network works — neurons, connections and signals made visible.",
      uk: "Візуалізація роботи нейромережі — наочне представлення нейронів, зв'язків і сигналів.",
    },
    body: {
      ru: ["Нейросеть — это абстракция из матриц и чисел, и людям тяжело её представить. Этот проект рисует сеть наглядно: видно нейроны, связи и то, как сигнал проходит сквозь слои.", "Сделан как образовательный инструмент — чтобы тот, кто только начинает, увидел нейросеть, а не только формулы."],
      en: ["A neural network is an abstraction of matrices and numbers, and it's hard for people to picture. This project draws the network visually: you see the neurons, connections and how a signal flows through the layers.", "Built as an educational tool — so a beginner can see a neural network, not just formulas."],
      uk: ["Нейромережа — це абстракція з матриць і чисел, і людям важко її уявити. Цей проєкт малює мережу наочно: видно нейрони, зв'язки й проходження сигналу.", "Зроблено як освітній інструмент."],
    },
  },
  {
    id: "qlearn-maze", name: "Q-Learning Maze", aka: "Обучение с подкреплением",
    category: "ml", status: "done", year: 2024,
    langs: ["Python"], tags: ["Reinforcement Learning", "Q-Learning"],
    short: {
      ru: "Агент, который учится проходить лабиринт методом обучения с подкреплением Q-Learning.",
      en: "An agent that learns to solve a maze using Q-Learning reinforcement learning.",
      uk: "Агент, що вчиться проходити лабіринт методом навчання з підкріпленням Q-Learning.",
    },
    body: {
      ru: ["Классическая задача обучения с подкреплением: агент в лабиринте ничего не знает, но через награды и наказания постепенно учится находить выход. Алгоритм Q-Learning строит таблицу ценности действий, и видно, как из хаоса проб рождается осмысленный маршрут.", "Хороший вход в RL — направление ML, не похожее на обычное обучение с учителем."],
      en: ["A classic reinforcement-learning task: an agent in a maze knows nothing, but through rewards and penalties gradually learns to find the exit. Q-Learning builds an action-value table, and you can watch a meaningful route emerge from the chaos of trials.", "A good entry into RL — a branch of ML unlike ordinary supervised learning."],
      uk: ["Класична задача навчання з підкріпленням: агент у лабіринті нічого не знає, але через нагороди й покарання поступово вчиться знаходити вихід.", "Гарний вхід у RL — напрям ML, не схожий на звичайне навчання з учителем."],
    },
  },
  {
    id: "whisper-stt", name: "Whisper STT", aka: "Расшифровка речи",
    category: "ml", status: "done", year: 2025,
    langs: ["Python"], tags: ["Whisper", "Speech-to-Text", "Аудио"],
    short: {
      ru: "Пайплайн распознавания речи на модели Whisper — расшифровка аудио и видео в текст.",
      en: "A speech-recognition pipeline on the Whisper model — transcribing audio and video into text.",
      uk: "Пайплайн розпізнавання мовлення на моделі Whisper — розшифрування аудіо та відео в текст.",
    },
    body: {
      ru: ["Набор скриптов вокруг модели Whisper от OpenAI: берёт аудио или видео и превращает речь в текст. Есть обычная и ускоренная версии обработки, пакетный прогон целых папок с видео.", "Полезный практический инструмент — расшифровать лекцию, интервью или голосовое куда быстрее, чем слушать."],
      en: ["A set of scripts around OpenAI's Whisper model: takes audio or video and turns speech into text. There's a normal and a faster processing version, plus batch runs over whole folders of videos.", "A genuinely useful practical tool — transcribing a lecture, interview or voice note is much faster than listening."],
      uk: ["Набір скриптів навколо моделі Whisper від OpenAI: бере аудіо чи відео й перетворює мовлення на текст. Є звичайна та прискорена версії, пакетний прогін цілих папок.", "Корисний практичний інструмент."],
    },
  },
  {
    id: "onnx-rust", name: "onnx_run_rust", aka: "ONNX-инференс на Rust",
    category: "ml", status: "done", year: 2026,
    langs: ["Rust", "Python"], tags: ["ONNX", "Инференс", "CUDA"],
    github: "https://github.com/AlexMelanFromRingo/onnx_run_rust",
    short: {
      ru: "Запуск инференса ONNX-моделей на Rust — без Python и PyTorch во время выполнения.",
      en: "Running ONNX-model inference in Rust — no Python or PyTorch at runtime.",
      uk: "Запуск інференсу ONNX-моделей на Rust — без Python і PyTorch під час виконання.",
    },
    body: {
      ru: ["Обучить модель удобно в PyTorch, но тащить весь Python в продакшен — тяжело. Этот проект показывает другой путь: модель обучается и экспортируется в ONNX, а инференс идёт на чистом Rust через ONNX Runtime, с опциональным ускорением на CUDA.", "Демонстрация на классике — свёрточная сеть, обученная на MNIST."],
      en: ["Training a model is convenient in PyTorch, but dragging all of Python into production is heavy. This project shows another way: the model is trained and exported to ONNX, and inference runs in pure Rust via ONNX Runtime, with optional CUDA acceleration.", "Demonstrated on a classic — a convolutional network trained on MNIST."],
      uk: ["Навчати модель зручно в PyTorch, але тягнути весь Python у продакшен — важко. Цей проєкт показує інший шлях: модель експортується в ONNX, а інференс іде на чистому Rust.", "Демонстрація на класиці — згорткова мережа, навчена на MNIST."],
    },
  },
  {
    id: "learn-pytorch", name: "Learn PyTorch", aka: "Освоение PyTorch",
    category: "ml", status: "done", year: 2023,
    langs: ["Python", "PyTorch"], tags: ["PyTorch", "Учебное"],
    short: {
      ru: "Учебные тетради по освоению фреймворка PyTorch — от тензоров до обучения сетей.",
      en: "Learning notebooks for mastering the PyTorch framework — from tensors to training networks.",
      uk: "Навчальні зошити з освоєння фреймворку PyTorch — від тензорів до навчання мереж.",
    },
    body: {
      ru: ["Серия учебных тетрадей, по которым я системно осваивал PyTorch — главный инструмент для всех моих ML-проектов. От базовых операций с тензорами до построения и обучения полноценных сетей.", "Фундамент, без которого не было бы ни MangaColoring, ни MiniGPT, ни GAN-экспериментов."],
      en: ["A series of learning notebooks through which I systematically picked up PyTorch — the main tool behind all my ML projects. From basic tensor operations to building and training full networks.", "The foundation without which there'd be no MangaColoring, no MiniGPT, no GAN experiments."],
      uk: ["Серія навчальних зошитів, за якими я системно освоював PyTorch — головний інструмент для всіх моїх ML-проєктів.", "Фундамент, без якого не було б ані MangaColoring, ані MiniGPT."],
    },
  },
  {
    id: "captcha-ocr", name: "Captcha OCR", aka: "Распознавание капчи",
    category: "ml", status: "done", year: 2024,
    langs: ["Python", "PyTorch"], tags: ["OCR", "Computer Vision", "Безопасность"],
    short: {
      ru: "Нейросеть для распознавания текста с простых капч — исследование стойкости защиты.",
      en: "A neural network for reading text from simple captchas — a study of how robust they are.",
      uk: "Нейромережа для розпізнавання тексту з простих капч — дослідження стійкості захисту.",
    },
    body: {
      ru: ["Капча должна отличать человека от бота, но простые капчи нейросеть читает без труда. В проекте я обучил несколько версий OCR-модели и сравнил их точность и скорость — наглядное исследование того, какая защита уже не защищает.", "Тема на стыке компьютерного зрения и безопасности: понимать слабость капчи полезно тому, кто их проектирует."],
      en: ["A captcha is meant to tell a human from a bot, but a neural network reads simple captchas with ease. In this project I trained several versions of an OCR model and compared their accuracy and speed — a clear study of which protection no longer protects.", "A topic between computer vision and security: understanding a captcha's weakness helps whoever designs them."],
      uk: ["Капча має відрізняти людину від бота, але прості капчі нейромережа читає без труднощів. У проєкті я навчив кілька версій OCR-моделі й порівняв їхню точність.", "Тема на стику комп'ютерного зору та безпеки."],
    },
  },
  {
    id: "neuro-streamer", name: "Neuro Streamer", aka: "ИИ-стример",
    category: "ml", status: "concept", year: 2026,
    langs: ["Python"], tags: ["LLM", "TTS", "Стриминг"],
    short: {
      ru: "Эксперимент с автономным ИИ-стримером, который сам ведёт трансляцию.",
      en: "An experiment with an autonomous AI streamer that runs a broadcast on its own.",
      uk: "Експеримент з автономним ШІ-стрімером, що сам веде трансляцію.",
    },
    body: {
      ru: ["Идея — виртуальный стример на базе нейросетей: языковая модель генерирует речь, синтез озвучивает её, всё это собирается в живую трансляцию. Проект на волне интереса к нейро-контенту и ИИ-блогерам.", "Сюда же примыкают мои OBS-оверлеи для стримов про ИИ и код — отдельная визуальная часть этой темы."],
      en: ["The idea is a virtual streamer powered by neural networks: a language model generates speech, synthesis voices it, and it all assembles into a live broadcast. A project riding the interest in neuro-content and AI bloggers.", "My OBS overlays for AI-and-coding streams sit alongside it — the visual side of the same theme."],
      uk: ["Ідея — віртуальний стрімер на базі нейромереж: мовна модель генерує мовлення, синтез озвучує його, усе збирається в живу трансляцію.", "Сюди ж примикають мої OBS-оверлеї для стрімів про ШІ та код."],
    },
  },
  {
    id: "prolog-ai", name: "Prolog AI Labs", aka: "ИИ на Prolog",
    category: "ml", status: "done", year: 2026,
    langs: ["Prolog"], tags: ["Логическое программирование", "Учебное"],
    short: {
      ru: "Лабораторные работы по искусственному интеллекту на языке логического программирования Prolog.",
      en: "Artificial-intelligence lab assignments in the logic-programming language Prolog.",
      uk: "Лабораторні роботи зі штучного інтелекту мовою логічного програмування Prolog.",
    },
    body: {
      ru: ["Prolog — это совсем другой взгляд на программирование: ты описываешь факты и правила, а решение система выводит сама. В этих лабораторных я разбирал классические задачи ИИ — поиск, логический вывод, представление знаний.", "Полезный контраст к нейросетевому ИИ: символьный подход к интеллекту, на котором всё когда-то начиналось."],
      en: ["Prolog is a completely different view of programming: you describe facts and rules, and the system derives the solution itself. In these labs I worked through classic AI tasks — search, logical inference, knowledge representation.", "A useful contrast to neural-network AI: the symbolic approach to intelligence that everything once started with."],
      uk: ["Prolog — це зовсім інший погляд на програмування: ти описуєш факти й правила, а рішення система виводить сама. У цих лабораторних я розбирав класичні задачі ШІ.", "Корисний контраст до нейромережевого ШІ: символьний підхід до інтелекту."],
    },
  },
];
