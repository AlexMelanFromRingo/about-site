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
        "Манга почти всегда чёрно-белая, и раскрасить её вручную — огромный труд для художника. Этот проект — нейросеть, которая делает это сама: на вход чёрно-белая страница, на выходе цветная.",
        "Задача сложнее, чем кажется. Сеть должна понимать содержание картинки — где кожа, где волосы, где одежда — и подбирать осмысленные, согласованные между панелями цвета. Это не просто фильтр, а понимание изображения.",
        "Один из моих главных проектов в компьютерном зрении: здесь я разбирался с архитектурой генеративной сети, подготовкой датасета и обучением на реальных страницах манги.",
      ],
      en: [
        "Manga is almost always black and white, and colouring it by hand is enormous work for an artist. This project is a neural network that does it itself: a black-and-white page in, a colour page out.",
        "The task is harder than it looks. The network has to understand the image's content — where skin is, where hair is, where clothing is — and pick meaningful colours, consistent across panels. It's not just a filter but understanding of the image.",
        "One of my main computer-vision projects: here I worked through generative-network architecture, dataset preparation and training on real manga pages.",
      ],
      uk: [
        "Манга майже завжди чорно-біла, і розфарбувати її вручну — величезна праця. Цей проєкт — нейромережа, що робить це сама.",
        "Завдання складніше, ніж здається: мережа має розуміти зміст картинки й добирати осмислені, узгоджені кольори.",
        "Один із моїх головних проєктів у комп'ютерному зорі.",
      ],
    },
    features: {
      ru: ["Автоматическая раскраска чёрно-белых страниц манги", "Понимание содержания изображения, а не простой фильтр", "Согласованные цвета между панелями", "Архитектура генеративной сети на PyTorch", "Обучение на реальных страницах манги"],
      en: ["Automatic colouring of black-and-white manga pages", "Understanding of image content, not a simple filter", "Colours consistent across panels", "A generative-network architecture in PyTorch", "Training on real manga pages"],
      uk: ["Автоматичне розфарбування чорно-білих сторінок манги", "Розуміння змісту зображення, а не простий фільтр", "Узгоджені кольори між панелями", "Архітектура генеративної мережі на PyTorch", "Навчання на реальних сторінках манги"],
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
      ru: [
        "Чтобы понять, как на самом деле работают большие языковые модели, я собрал маленький GPT с нуля. Реализованы все ключевые части: токенизация, механизм внимания, блоки трансформера, обучение на тексте.",
        "«Минимальный» здесь — принципиально: модель достаточно мала, чтобы её можно было запустить, обучить и потрогать руками на обычной машине, без кластера видеокарт. Можно вмешаться в любой этап и посмотреть, что происходит.",
        "Это тот случай, когда собственная реализация даёт понимание, которого не получить из статей и обзоров — ты буквально видишь, как из внимания и матриц рождается генерация текста.",
      ],
      en: [
        "To understand how large language models really work, I built a tiny GPT from scratch. All the key parts are implemented: tokenization, the attention mechanism, transformer blocks, training on text.",
        "'Minimal' here is on purpose: the model is small enough to run, train and touch by hand on an ordinary machine, with no GPU cluster. You can step into any stage and see what's happening.",
        "It's the case where your own implementation gives understanding you can't get from papers and overviews — you literally see how text generation arises from attention and matrices.",
      ],
      uk: [
        "Щоб зрозуміти, як працюють великі мовні моделі, я зібрав маленький GPT з нуля: токенізація, увага, блоки трансформера, навчання.",
        "«Мінімальний» тут принципово: модель можна запустити й навчити на звичайній машині, без кластера відеокарт.",
        "Це той випадок, коли власна реалізація дає розуміння, якого не отримати зі статей.",
      ],
    },
    features: {
      ru: ["Языковая модель в стиле GPT, написанная с нуля", "Токенизация, механизм внимания, блоки трансформера", "Достаточно мала для запуска без кластера GPU", "Можно вмешаться в любой этап обучения", "Реализация на PyTorch"],
      en: ["A GPT-style language model written from scratch", "Tokenization, attention mechanism, transformer blocks", "Small enough to run without a GPU cluster", "You can step into any training stage", "Implemented in PyTorch"],
      uk: ["Мовна модель у стилі GPT, написана з нуля", "Токенізація, механізм уваги, блоки трансформера", "Достатньо мала для запуску без кластера GPU", "Можна втрутитися в будь-який етап навчання", "Реалізація на PyTorch"],
    },
  },
  {
    id: "customgan", name: "CustomGAN", aka: "Своя GAN-сеть",
    category: "ml", status: "concept", year: 2024,
    langs: ["Python", "PyTorch"], tags: ["GAN", "Генеративные модели"],
    short: {
      ru: "Проект по созданию собственной нейросети генеративно-состязательной архитектуры (GAN).",
      en: "A project building a custom neural network of the generative-adversarial (GAN) architecture.",
      uk: "Проєкт зі створення власної нейромережі генеративно-змагальної архітектури (GAN).",
    },
    body: {
      ru: [
        "GAN — это пара сетей, которые соревнуются между собой: генератор создаёт картинки, дискриминатор учится отличать подделку от настоящего. В этом соревновании генератор постепенно учится рисовать всё убедительнее.",
        "CustomGAN — моя собственная реализация такой архитектуры, где я с нуля настраивал генератор, дискриминатор и процесс их совместного обучения. GAN печально известны капризностью: баланс между двумя сетями легко нарушить, и обучение разваливается.",
        "Проект в статусе прототипа — рабочая основа, на которой я разбирался с этой капризной, но мощной архитектурой.",
      ],
      en: [
        "A GAN is a pair of networks competing with each other: the generator creates images, the discriminator learns to tell fake from real. In that contest the generator gradually learns to draw more and more convincingly.",
        "CustomGAN is my own implementation of that architecture, where I tuned the generator, discriminator and their joint training process from scratch. GANs are notoriously finicky: the balance between the two networks is easy to break, and training falls apart.",
        "The project is at prototype status — a working base on which I got to grips with this finicky but powerful architecture.",
      ],
      uk: [
        "GAN — це пара мереж, що змагаються: генератор створює картинки, дискримінатор учиться відрізняти підробку від справжнього.",
        "CustomGAN — моя власна реалізація, де я з нуля налаштовував генератор, дискримінатор і процес навчання. GAN відомі вередливістю.",
        "Проєкт у статусі прототипу — робоча основа для освоєння цієї архітектури.",
      ],
    },
    features: {
      ru: ["Собственная реализация GAN-архитектуры", "Генератор и дискриминатор с нуля", "Настройка капризного совместного обучения", "Реализация на PyTorch"],
      en: ["A custom implementation of the GAN architecture", "Generator and discriminator from scratch", "Tuning the finicky joint training", "Implemented in PyTorch"],
      uk: ["Власна реалізація GAN-архітектури", "Генератор і дискримінатор з нуля", "Налаштування вередливого спільного навчання", "Реалізація на PyTorch"],
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
      ru: [
        "LightweightGAN — известная архитектура для генерации картинок высокого разрешения, способная обучаться за день-два, представленная на конференции ICLR 2021. Но рассчитана она на видеокарту, а её есть не у всех.",
        "Я форкнул проект и адаптировал так, чтобы он работал на обычном процессоре. Это значит убрать зависимости от CUDA и аккуратно заменить или обойти операции, которые предполагают GPU.",
        "Проект про доступность: возможность экспериментировать с генеративными сетями не должна упираться в наличие дорогого железа. Не моя архитектура с нуля, но честная работа по портированию.",
      ],
      en: [
        "LightweightGAN is a well-known architecture for generating high-resolution images, able to train in a day or two, presented at ICLR 2021. But it's built for a GPU, and not everyone has one.",
        "I forked the project and adapted it to run on an ordinary CPU. That means removing CUDA dependencies and carefully replacing or routing around operations that assume a GPU.",
        "The project is about accessibility: experimenting with generative networks shouldn't depend on owning expensive hardware. Not my architecture from scratch, but honest porting work.",
      ],
      uk: [
        "LightweightGAN — відома архітектура для генерації зображень високої роздільності, представлена на ICLR 2021. Але розрахована вона на відеокарту.",
        "Я форкнув проєкт і адаптував його для звичайного процесора: прибрав залежності від CUDA.",
        "Проєкт про доступність — не моя архітектура з нуля, але чесна робота з портування.",
      ],
    },
    features: {
      ru: ["Адаптация LightweightGAN под работу на CPU", "Убраны зависимости от CUDA и GPU-операций", "Генерация картинок без видеокарты", "Форк с честной работой по портированию"],
      en: ["Adapts LightweightGAN to run on a CPU", "CUDA and GPU-operation dependencies removed", "Image generation without a graphics card", "A fork with honest porting work"],
      uk: ["Адаптація LightweightGAN під роботу на CPU", "Прибрано залежності від CUDA та GPU-операцій", "Генерація картинок без відеокарти", "Форк із чесною роботою з портування"],
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
      ru: [
        "Мой путь к пониманию GAN — это не один проект, а серия версий сети, которые я писал и переписывал. Сеть училась генерировать человеческие лица и рукописные цифры из набора MNIST.",
        "По версиям видно эволюцию подходов: смена оптимизаторов (от обычного к AdamW), правки архитектуры, разные способы стабилизировать капризное обучение, альтернативные стратегии сохранения модели.",
        "Это лаборатория экспериментов, из которой потом вырос более серьёзный CustomGAN. Учебный проект в самом честном смысле — он про процесс набивания руки.",
      ],
      en: [
        "My path to understanding GANs isn't one project but a series of network versions I wrote and rewrote. The network learned to generate human faces and handwritten digits from the MNIST set.",
        "The versions show an evolution of approaches: changing optimizers (from plain to AdamW), architecture tweaks, different ways to stabilize the finicky training, alternative model-saving strategies.",
        "It's an experiment lab the more serious CustomGAN later grew out of. A learning project in the most honest sense — it's about the process of getting your hands trained.",
      ],
      uk: [
        "Мій шлях до розуміння GAN — це серія версій мережі, які я писав і переписував. Мережа вчилася генерувати обличчя й цифри MNIST.",
        "За версіями видно еволюцію підходів: зміна оптимізаторів, правки архітектури, способи стабілізації навчання.",
        "Це лабораторія експериментів, з якої виріс серйозніший CustomGAN.",
      ],
    },
    features: {
      ru: ["Серия версий GAN на лицах и цифрах MNIST", "Видна эволюция подходов от версии к версии", "Эксперименты с оптимизаторами и стабилизацией", "Лаборатория, из которой вырос CustomGAN"],
      en: ["A series of GAN versions on faces and MNIST digits", "An evolution of approaches visible version to version", "Experiments with optimizers and stabilization", "The lab the CustomGAN grew out of"],
      uk: ["Серія версій GAN на обличчях і цифрах MNIST", "Видно еволюцію підходів від версії до версії", "Експерименти з оптимізаторами та стабілізацією", "Лабораторія, з якої виріс CustomGAN"],
    },
  },
  {
    id: "llama-finetune", name: "LLaMA Fine Tune", aka: "Дообучение модели",
    category: "ml", status: "concept", year: 2024,
    langs: ["Python", "PyTorch"], tags: ["LLM", "Fine-tuning", "LLaMA"],
    short: {
      ru: "Дообучение языковой модели LLaMA на собственном наборе данных.",
      en: "Fine-tuning the LLaMA language model on a custom dataset.",
      uk: "Донавчання мовної моделі LLaMA на власному наборі даних.",
    },
    body: {
      ru: [
        "Готовая языковая модель знает много общего, но не знает именно того, что нужно тебе — твоего стиля, твоей предметной области. Дообучение (fine-tuning) решает эту задачу.",
        "Этот проект — про весь путь дообучения LLaMA: подготовка собственного набора данных, сам процесс fine-tuning и проверка, что модель действительно подхватила новые знания, а не разучилась тому, что умела.",
        "Логичное продолжение моих проектов LLaMA Forge и LLaMA Online — от использования готовой модели к её настройке под конкретную задачу. Статус — прототип.",
      ],
      en: [
        "A ready language model knows a lot of general things but not exactly what you need — your style, your domain. Fine-tuning solves that.",
        "This project is about the whole fine-tuning path for LLaMA: preparing a custom dataset, the fine-tuning process itself and checking the model actually picked up the new knowledge without forgetting what it could already do.",
        "A natural continuation of my LLaMA Forge and LLaMA Online projects — from using a ready model to tuning it for a specific task. Status — prototype.",
      ],
      uk: [
        "Готова мовна модель знає багато загального, але не знає саме того, що потрібно тобі. Донавчання вирішує це.",
        "Цей проєкт — про весь шлях fine-tuning LLaMA: підготовка датасету, сам процес, перевірка результату.",
        "Логічне продовження проєктів LLaMA Forge і LLaMA Online. Статус — прототип.",
      ],
    },
    features: {
      ru: ["Дообучение языковой модели LLaMA", "Подготовка собственного набора данных", "Проверка, что модель подхватила новые знания", "Продолжение проектов LLaMA Forge и LLaMA Online"],
      en: ["Fine-tuning the LLaMA language model", "Preparing a custom dataset", "Checking the model picked up new knowledge", "A continuation of LLaMA Forge and LLaMA Online"],
      uk: ["Донавчання мовної моделі LLaMA", "Підготовка власного набору даних", "Перевірка засвоєння нових знань", "Продовження проєктів LLaMA Forge і LLaMA Online"],
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
      ru: [
        "Нейросеть с нуля на чистой Java, без PyTorch и вообще без сторонних библиотек. Всё руками: матрицы, прямой проход, обратное распространение ошибки, обновление весов, обучение.",
        "Смысл именно в том, чтобы написать каждую формулу самому. Когда сеть собрана из готового фреймворка, многое остаётся магией; когда из голых матриц — механика становится понятной до конца.",
        "Существует в двух версиях, включая вариант под названием Onigiri. Базовый, но важный проект: без понимания перцептрона нет понимания всего остального в машинном обучении.",
      ],
      en: [
        "A neural network from scratch in pure Java, without PyTorch and without third-party libraries at all. Everything by hand: matrices, the forward pass, backpropagation, weight updates, training.",
        "The point is precisely to write every formula yourself. When a network is assembled from a ready framework, much stays magic; when it's built from bare matrices, the mechanics become fully clear.",
        "It exists in two versions, including one called Onigiri. A basic but important project: without understanding the perceptron there's no understanding the rest of machine learning.",
      ],
      uk: [
        "Нейромережа з нуля на чистій Java, без PyTorch і без сторонніх бібліотек. Усе руками: матриці, прямий прохід, зворотне поширення помилки.",
        "Сенс саме в тому, щоб написати кожну формулу самому.",
        "Існує у двох версіях, включно з варіантом Onigiri. Базовий, але важливий проєкт.",
      ],
    },
    features: {
      ru: ["Многослойный перцептрон на чистой Java", "Без PyTorch и сторонних библиотек — всё вручную", "Прямой проход и обратное распространение ошибки", "Две версии, включая вариант Onigiri"],
      en: ["A multilayer perceptron in pure Java", "No PyTorch or third-party libraries — all by hand", "Forward pass and backpropagation", "Two versions, including the Onigiri variant"],
      uk: ["Багатошаровий перцептрон на чистій Java", "Без PyTorch і сторонніх бібліотек — усе вручну", "Прямий прохід і зворотне поширення помилки", "Дві версії, включно з варіантом Onigiri"],
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
      ru: [
        "Нейросеть — это абстракция из матриц, весов и чисел, и людям, особенно новичкам, тяжело её представить. Этот проект делает её видимой.",
        "Сеть рисуется наглядно: видно нейроны, связи между ними и то, как сигнал проходит сквозь слои, как он усиливается или гаснет. Абстрактные числа превращаются в картинку, которую можно понять.",
        "Сделан как образовательный инструмент — продолжение моей линии интерактивных учебных демо вроде разбора AES и методички по Wi-Fi, но уже про машинное обучение.",
      ],
      en: [
        "A neural network is an abstraction of matrices, weights and numbers, and people — especially beginners — find it hard to picture. This project makes it visible.",
        "The network is drawn clearly: you see the neurons, the connections between them and how a signal flows through the layers, how it strengthens or fades. Abstract numbers turn into a picture you can understand.",
        "Built as an educational tool — a continuation of my line of interactive learning demos like the AES breakdown and the Wi-Fi guide, but now about machine learning.",
      ],
      uk: [
        "Нейромережа — це абстракція з матриць і чисел, і людям важко її уявити. Цей проєкт робить її видимою.",
        "Мережа малюється наочно: видно нейрони, зв'язки й проходження сигналу крізь шари.",
        "Зроблено як освітній інструмент — продовження моєї лінії інтерактивних навчальних демо.",
      ],
    },
    features: {
      ru: ["Наглядная отрисовка структуры нейросети", "Видно нейроны, связи и проход сигнала по слоям", "Превращает абстрактные числа в понятную картинку", "Образовательный инструмент для новичков"],
      en: ["Clear rendering of a neural network's structure", "Shows neurons, connections and signal flow through layers", "Turns abstract numbers into an understandable picture", "An educational tool for beginners"],
      uk: ["Наочне відмалювання структури нейромережі", "Видно нейрони, зв'язки й прохід сигналу по шарах", "Перетворює абстрактні числа на зрозумілу картинку", "Освітній інструмент для новачків"],
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
      ru: [
        "Классическая задача обучения с подкреплением. Агент оказывается в лабиринте, ничего о нём не зная, и может только двигаться и получать награду за успех или наказание за неудачу.",
        "Алгоритм Q-Learning постепенно строит таблицу ценности действий: для каждой клетки — насколько хорош каждый возможный ход. Со временем из хаоса случайных проб рождается осмысленный кратчайший маршрут к выходу.",
        "Хороший вход в reinforcement learning — направление ML, которое сильно отличается от обычного обучения с учителем: здесь нет готовых правильных ответов, агент добывает их сам.",
      ],
      en: [
        "A classic reinforcement-learning task. The agent finds itself in a maze knowing nothing about it, and can only move and get a reward for success or a penalty for failure.",
        "The Q-Learning algorithm gradually builds an action-value table: for each cell, how good each possible move is. Over time a meaningful shortest route to the exit emerges from the chaos of random trials.",
        "A good entry into reinforcement learning — a branch of ML very different from ordinary supervised learning: there are no ready right answers here, the agent earns them itself.",
      ],
      uk: [
        "Класична задача навчання з підкріпленням. Агент опиняється в лабіринті, нічого не знаючи, і може лише рухатися й отримувати нагороду чи покарання.",
        "Алгоритм Q-Learning будує таблицю цінності дій, і з хаосу проб народжується осмислений маршрут.",
        "Гарний вхід у reinforcement learning — напрям ML без готових правильних відповідей.",
      ],
    },
    features: {
      ru: ["Агент, обучающийся проходить лабиринт", "Алгоритм Q-Learning с таблицей ценности действий", "Маршрут рождается из проб и ошибок", "Вход в обучение с подкреплением"],
      en: ["An agent learning to solve a maze", "The Q-Learning algorithm with an action-value table", "The route emerges from trial and error", "An entry into reinforcement learning"],
      uk: ["Агент, що вчиться проходити лабіринт", "Алгоритм Q-Learning з таблицею цінності дій", "Маршрут народжується з проб і помилок", "Вхід у навчання з підкріпленням"],
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
      ru: [
        "Набор скриптов вокруг модели распознавания речи Whisper от OpenAI. На вход — аудио или видео, на выходе — текст того, что было сказано.",
        "В проекте есть несколько режимов: обычная обработка и ускоренная (faster), отдельная обработка видео и пакетный прогон целых папок с роликами. Можно расшифровывать как одиночные файлы, так и архивы записей.",
        "Полезный практический инструмент: расшифровать лекцию, интервью или голосовое сообщение получается куда быстрее, чем прослушивать. Рядом стоит мой WhisperBot — та же модель, но в виде Telegram-бота.",
      ],
      en: [
        "A set of scripts around OpenAI's Whisper speech-recognition model. Audio or video in, the text of what was said out.",
        "The project has several modes: regular processing and a faster one, separate video processing and batch runs over whole folders of clips. You can transcribe single files or whole archives of recordings.",
        "A genuinely useful practical tool: transcribing a lecture, interview or voice message is much faster than listening to it. Alongside it sits my WhisperBot — the same model but as a Telegram bot.",
      ],
      uk: [
        "Набір скриптів навколо моделі розпізнавання мовлення Whisper від OpenAI. На вхід — аудіо чи відео, на виході — текст.",
        "Є кілька режимів: звичайна обробка та прискорена, обробка відео й пакетний прогін цілих папок.",
        "Корисний практичний інструмент. Поруч — мій WhisperBot, та сама модель у вигляді Telegram-бота.",
      ],
    },
    features: {
      ru: ["Распознавание речи моделью Whisper от OpenAI", "Обработка аудио и видео в текст", "Обычный и ускоренный режимы", "Пакетный прогон целых папок с записями"],
      en: ["Speech recognition with OpenAI's Whisper model", "Audio and video transcription to text", "Regular and faster processing modes", "Batch runs over whole folders of recordings"],
      uk: ["Розпізнавання мовлення моделлю Whisper від OpenAI", "Обробка аудіо та відео в текст", "Звичайний і прискорений режими", "Пакетний прогін цілих папок із записами"],
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
      ru: [
        "Обучать модель удобно в Python с PyTorch, но тащить весь Python и PyTorch в продакшен — тяжело: огромные зависимости, медленный старт. Этот проект показывает другой путь.",
        "Модель обучается в PyTorch и экспортируется в формат ONNX — самодостаточный вычислительный граф. После этого инференс идёт на чистом Rust через ONNX Runtime, с опциональным ускорением на видеокарте NVIDIA через CUDA.",
        "Демонстрация на классике: свёрточная сеть, обученная распознавать рукописные цифры MNIST. Соединяет две мои темы — машинное обучение и Rust как язык для надёжного продакшена.",
      ],
      en: [
        "Training a model is convenient in Python with PyTorch, but dragging all of Python and PyTorch into production is heavy: huge dependencies, slow startup. This project shows another way.",
        "The model is trained in PyTorch and exported to the ONNX format — a self-contained computation graph. After that inference runs in pure Rust via ONNX Runtime, with optional NVIDIA-GPU acceleration through CUDA.",
        "Demonstrated on a classic: a convolutional network trained to recognize handwritten MNIST digits. It connects two of my themes — machine learning and Rust as a language for reliable production.",
      ],
      uk: [
        "Навчати модель зручно в Python із PyTorch, але тягнути весь Python у продакшен — важко. Цей проєкт показує інший шлях.",
        "Модель навчається в PyTorch і експортується в ONNX — самодостатній граф. Інференс іде на чистому Rust через ONNX Runtime, з опційним CUDA.",
        "Демонстрація на класиці — згорткова мережа на MNIST.",
      ],
    },
    features: {
      ru: ["Инференс ONNX-моделей на чистом Rust", "Без Python и PyTorch во время выполнения", "Опциональное ускорение на GPU через CUDA", "Обучение в PyTorch, экспорт в ONNX, запуск в Rust"],
      en: ["ONNX-model inference in pure Rust", "No Python or PyTorch at runtime", "Optional GPU acceleration via CUDA", "Train in PyTorch, export to ONNX, run in Rust"],
      uk: ["Інференс ONNX-моделей на чистому Rust", "Без Python і PyTorch під час виконання", "Опційне прискорення на GPU через CUDA", "Навчання в PyTorch, експорт в ONNX, запуск у Rust"],
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
      ru: [
        "Серия учебных тетрадей, по которым я системно осваивал PyTorch — главный инструмент для всех моих ML-проектов. Путь от базовых операций с тензорами до построения и обучения полноценных нейросетей.",
        "Это не проект-результат, а проект-фундамент: здесь я набивал руку на той библиотеке, без которой потом не было бы ни MangaColoring, ни MiniGPT, ни GAN-экспериментов.",
        "Оставляю на сайте честно — путь специалиста складывается в том числе из таких подготовительных этапов.",
      ],
      en: [
        "A series of learning notebooks through which I systematically picked up PyTorch — the main tool behind all my ML projects. The path from basic tensor operations to building and training full neural networks.",
        "It's not a result-project but a foundation-project: here I trained my hand on the library without which there'd later be no MangaColoring, no MiniGPT, no GAN experiments.",
        "I keep it on the site honestly — a specialist's path is built partly from such preparatory stages.",
      ],
      uk: [
        "Серія навчальних зошитів, за якими я системно освоював PyTorch — головний інструмент для всіх моїх ML-проєктів.",
        "Це не проєкт-результат, а проєкт-фундамент.",
        "Лишаю на сайті чесно — шлях фахівця складається і з таких підготовчих етапів.",
      ],
    },
    features: {
      ru: ["Учебные тетради по фреймворку PyTorch", "От операций с тензорами до обучения сетей", "Фундамент для MangaColoring, MiniGPT и GAN-проектов", "Подготовительный этап в освоении ML"],
      en: ["Learning notebooks for the PyTorch framework", "From tensor operations to training networks", "A foundation for MangaColoring, MiniGPT and GAN projects", "A preparatory stage in learning ML"],
      uk: ["Навчальні зошити з фреймворку PyTorch", "Від операцій з тензорами до навчання мереж", "Фундамент для MangaColoring, MiniGPT і GAN-проєктів", "Підготовчий етап в освоєнні ML"],
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
      ru: [
        "Капча должна отличать человека от бота. Но если капча простая — искажённый текст на шумном фоне — современная нейросеть читает её без труда. В этом проекте я обучил OCR-модель именно такому распознаванию.",
        "Сделано несколько версий модели — с дропаутом и без, с разным числом эпох и размером батча — и я сравнивал их точность и скорость. Получилось наглядное исследование того, какая капча уже не защищает.",
        "Тема на стыке компьютерного зрения и безопасности: понимать слабость капчи полезно прежде всего тому, кто их проектирует — чтобы знать, что простой защиты больше недостаточно.",
      ],
      en: [
        "A captcha is meant to tell a human from a bot. But if a captcha is simple — distorted text on a noisy background — a modern neural network reads it with ease. In this project I trained an OCR model for exactly that recognition.",
        "Several model versions were made — with and without dropout, with different epoch counts and batch sizes — and I compared their accuracy and speed. The result is a clear study of which captcha no longer protects.",
        "A topic between computer vision and security: understanding a captcha's weakness is useful first of all to whoever designs them — to know that simple protection is no longer enough.",
      ],
      uk: [
        "Капча має відрізняти людину від бота. Але просту капчу сучасна нейромережа читає без труднощів.",
        "Зроблено кілька версій моделі — з дропаутом і без — і я порівнював точність і швидкість.",
        "Тема на стику комп'ютерного зору та безпеки: розуміти слабкість капчі корисно тому, хто їх проєктує.",
      ],
    },
    features: {
      ru: ["OCR-модель для чтения текста с капч", "Несколько версий: с дропаутом и без, разные эпохи", "Сравнение точности и скорости версий", "Исследование стойкости капчи как защиты"],
      en: ["An OCR model for reading captcha text", "Several versions: with/without dropout, different epochs", "Comparison of version accuracy and speed", "A study of captcha robustness as protection"],
      uk: ["OCR-модель для читання тексту з капч", "Кілька версій: з дропаутом і без, різні епохи", "Порівняння точності та швидкості версій", "Дослідження стійкості капчі як захисту"],
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
      ru: [
        "Идея — виртуальный стример, полностью построенный на нейросетях. Языковая модель генерирует речь и реплики, синтез голоса (TTS) их озвучивает, всё это собирается в живую трансляцию без участия человека.",
        "Проект на волне интереса к нейро-контенту и ИИ-блогерам — направлению, которое сейчас активно развивается. Статус — прототип: это в первую очередь исследование того, как связать модели в единый поток.",
        "Сюда же примыкают мои OBS-оверлеи для стримов про ИИ и код — отдельная визуальная часть этой же темы.",
      ],
      en: [
        "The idea is a virtual streamer built entirely on neural networks. A language model generates speech and lines, voice synthesis (TTS) voices them, and it all assembles into a live broadcast with no human involved.",
        "A project riding the interest in neuro-content and AI bloggers — a direction actively developing right now. Status — prototype: it's first of all research into wiring the models into a single stream.",
        "My OBS overlays for AI-and-coding streams sit alongside it — the visual side of the same theme.",
      ],
      uk: [
        "Ідея — віртуальний стрімер, повністю побудований на нейромережах: мовна модель генерує мовлення, синтез голосу озвучує, усе збирається в трансляцію.",
        "Проєкт на хвилі інтересу до нейро-контенту. Статус — прототип.",
        "Сюди ж примикають мої OBS-оверлеї для стрімів про ШІ та код.",
      ],
    },
    features: {
      ru: ["Виртуальный стример на основе нейросетей", "Языковая модель + синтез голоса (TTS)", "Сборка моделей в единый поток трансляции", "Статус — прототип, исследование направления"],
      en: ["A virtual streamer powered by neural networks", "A language model + voice synthesis (TTS)", "Wiring the models into a single broadcast stream", "Status — prototype, research into the direction"],
      uk: ["Віртуальний стрімер на основі нейромереж", "Мовна модель + синтез голосу (TTS)", "Збірка моделей у єдиний потік трансляції", "Статус — прототип"],
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
      ru: [
        "Prolog — это совсем другой взгляд на программирование. Ты не пишешь пошаговый алгоритм, а описываешь факты и правила, а решение система выводит сама через логический поиск.",
        "В этих лабораторных я разбирал классические задачи искусственного интеллекта именно в таком стиле: поиск в пространстве состояний, логический вывод, представление знаний.",
        "Полезный контраст к нейросетевому ИИ, которым я занимаюсь в остальных проектах. Prolog — это символьный подход к интеллекту, с которого ИИ когда-то и начинался.",
      ],
      en: [
        "Prolog is a completely different view of programming. You don't write a step-by-step algorithm — you describe facts and rules, and the system derives the solution itself through logical search.",
        "In these labs I worked through classic artificial-intelligence tasks in exactly that style: search in a state space, logical inference, knowledge representation.",
        "A useful contrast to the neural-network AI I do in my other projects. Prolog is the symbolic approach to intelligence that AI once started with.",
      ],
      uk: [
        "Prolog — це зовсім інший погляд на програмування: ти описуєш факти й правила, а рішення система виводить сама.",
        "У цих лабораторних я розбирав класичні задачі ШІ: пошук, логічний вивід, представлення знань.",
        "Корисний контраст до нейромережевого ШІ — символьний підхід, з якого ШІ починався.",
      ],
    },
    features: {
      ru: ["Классические задачи ИИ на языке Prolog", "Логический вывод и представление знаний", "Символьный подход вместо нейросетевого", "Учебные лабораторные работы"],
      en: ["Classic AI tasks in the Prolog language", "Logical inference and knowledge representation", "The symbolic approach instead of neural networks", "Educational lab assignments"],
      uk: ["Класичні задачі ШІ мовою Prolog", "Логічний вивід і представлення знань", "Символьний підхід замість нейромережевого", "Навчальні лабораторні роботи"],
    },
  },
];
