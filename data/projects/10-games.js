/* Игры и графика */
module.exports = [
  {
    id: "bulls-and-cows", name: "Быки и Коровы", aka: "Bulls and Cows",
    category: "games", status: "done", year: 2026, featured: true,
    langs: ["JavaScript", "HTML", "CSS"], tags: ["Игра", "Веб", "GitHub Pages"],
    github: "https://github.com/AlexMelanFromRingo/bulls-and-cows",
    short: {
      ru: "Классическая логическая игра «Быки и Коровы» в браузере — без сборки и зависимостей.",
      en: "The classic 'Bulls and Cows' logic game in the browser — no build, no dependencies.",
      uk: "Класична логічна гра «Бики й Корови» у браузері — без збірки та залежностей.",
    },
    body: {
      ru: ["Старая логическая игра: компьютер загадал число, ты угадываешь, а в ответ получаешь «быков» и «коров» — подсказки о точности. Здесь она сделана как чистая веб-страница: ванильные HTML, CSS и JavaScript, без сборки и зависимостей.", "Минимализм здесь принципиален — игра открывается мгновенно и работает где угодно, включая GitHub Pages."],
      en: ["An old logic game: the computer thinks of a number, you guess, and in return you get 'bulls' and 'cows' — hints about how close you are. Here it's built as a pure web page: vanilla HTML, CSS and JavaScript, no build, no dependencies.", "The minimalism is on purpose — the game opens instantly and runs anywhere, including GitHub Pages."],
      uk: ["Стара логічна гра: комп'ютер загадав число, ти вгадуєш, а у відповідь отримуєш «биків» і «корів». Тут вона зроблена як чиста вебсторінка: ванільні HTML, CSS і JavaScript.", "Мінімалізм тут принциповий — гра відкривається миттєво й працює будь-де."],
    },
  },
  {
    id: "bulls-and-cows-solver", name: "Bulls and Cows Solver", aka: "Решатель на Rust",
    category: "games", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Алгоритмы", "Игра", "Логика"],
    github: "https://github.com/AlexMelanFromRingo/bulls-and-cows-solver-rust",
    short: {
      ru: "Алгоритм-решатель игры «Быки и Коровы» на Rust, угадывающий число за минимум ходов.",
      en: "A Bulls-and-Cows solver in Rust that guesses the number in a minimum of moves.",
      uk: "Алгоритм-розв'язувач гри «Бики й Корови» на Rust, що вгадує число за мінімум ходів.",
    },
    body: {
      ru: ["Если есть игра — интересно написать к ней идеального игрока. Этот решатель на Rust анализирует ответы «быков» и «коров» и каждым следующим ходом сужает множество возможных чисел, угадывая за минимум попыток.", "Хорошая задача на алгоритмы: как из неполной информации шаг за шагом прийти к ответу."],
      en: ["If there's a game, it's interesting to write a perfect player for it. This Rust solver analyses the 'bulls' and 'cows' replies and with each move narrows the set of possible numbers, guessing in a minimum of tries.", "A good algorithms problem: how to reach the answer step by step from incomplete information."],
      uk: ["Якщо є гра — цікаво написати до неї ідеального гравця. Цей розв'язувач на Rust аналізує відповіді й щоходу звужує множину можливих чисел.", "Гарна задача на алгоритми: як із неповної інформації крок за кроком прийти до відповіді."],
    },
  },
  {
    id: "battle-arena", name: "Battle Arena", aka: "Мультиплеер-арена",
    category: "games", status: "active", year: 2026,
    langs: ["Rust", "Go"], tags: ["Мультиплеер", "Реальное время", "Telegram"],
    github: "https://github.com/AlexMelanFromRingo/rust-telegram-arena",
    short: {
      ru: "Мультиплеерная боевая арена в реальном времени — в виде Telegram-бота и веб-версии.",
      en: "A real-time multiplayer battle arena — as a Telegram bot and a web version.",
      uk: "Мультиплеєрна бойова арена в реальному часі — у вигляді Telegram-бота та вебверсії.",
    },
    body: {
      ru: ["Боевая арена, где игроки сражаются в реальном времени. Я реализовал идею в нескольких воплощениях — как Telegram-бот и как веб-игра, на Rust и на Go.", "Мультиплеер в реальном времени — сложная задача: синхронизация состояния между игроками, обработка задержек, честность для всех. Отличный полигон для сетевого программирования."],
      en: ["A battle arena where players fight in real time. I built the idea in several incarnations — as a Telegram bot and a web game, in Rust and in Go.", "Real-time multiplayer is a hard problem: syncing state between players, handling latency, keeping it fair for everyone. A great proving ground for network programming."],
      uk: ["Бойова арена, де гравці б'ються в реальному часі. Я реалізував ідею в кількох втіленнях — як Telegram-бот і як вебгра, на Rust і на Go.", "Мультиплеєр у реальному часі — складна задача: синхронізація стану, обробка затримок. Чудовий полігон для мережевого програмування."],
    },
  },
  {
    id: "snakertx", name: "Snake RTX", aka: "Змейка с трассировкой",
    category: "games", status: "done", year: 2024,
    langs: ["Python", "GLSL"], tags: ["Игра", "Ray Tracing", "Шейдеры"],
    short: {
      ru: "Классическая «Змейка», отрисованная с трассировкой лучей через шейдеры.",
      en: "The classic Snake game rendered with ray tracing via shaders.",
      uk: "Класична «Змійка», відмальована з трасуванням променів через шейдери.",
    },
    body: {
      ru: ["Что будет, если взять простейшую игру и отрисовать её всерьёз? Snake RTX — обычная «Змейка», но картинка считается трассировкой лучей в GLSL-шейдерах: настоящие отражения и освещение там, где обычно три цветных квадрата.", "Забавный контраст примитивного геймплея и серьёзной графики."],
      en: ["What happens if you take the simplest game and render it seriously? Snake RTX is ordinary Snake, but the image is computed with ray tracing in GLSL shaders: real reflections and lighting where there are usually three coloured squares.", "An amusing contrast between primitive gameplay and serious graphics."],
      uk: ["Що буде, якщо взяти найпростішу гру й відмалювати її всерйоз? Snake RTX — звичайна «Змійка», але картинка рахується трасуванням променів у GLSL-шейдерах.", "Кумедний контраст примітивного геймплею та серйозної графіки."],
    },
  },
  {
    id: "raytracing", name: "Ray Tracing", aka: "Трассировщики лучей",
    category: "games", status: "done", year: 2024,
    langs: ["Python", "Rust"], tags: ["Графика", "Ray Tracing", "Рендеринг"],
    github: "https://github.com/AlexMelanFromRingo/rust-ray-trace",
    short: {
      ru: "Серия трассировщиков лучей — рендеринг реалистичных изображений на Python и Rust.",
      en: "A series of ray tracers — rendering realistic images in Python and Rust.",
      uk: "Серія трасувальників променів — рендеринг реалістичних зображень на Python і Rust.",
    },
    body: {
      ru: ["Трассировка лучей — способ получить реалистичную картинку, моделируя сам путь света: лучи отражаются, преломляются, рассеиваются. Я писал трассировщики несколько раз — на Python для наглядности и на Rust для скорости.", "Это та область, где математика, физика и программирование сходятся в красивый результат на экране."],
      en: ["Ray tracing is a way to get a realistic image by simulating the path of light itself: rays reflect, refract, scatter. I've written ray tracers several times — in Python for clarity and in Rust for speed.", "It's the area where maths, physics and programming converge into a beautiful result on screen."],
      uk: ["Трасування променів — спосіб отримати реалістичну картинку, моделюючи сам шлях світла. Я писав трасувальники кілька разів — на Python для наочності й на Rust для швидкості.", "Це та сфера, де математика, фізика й програмування сходяться в гарний результат."],
    },
  },
  {
    id: "raytraced-shaders", name: "Ray-Traced Shaders", aka: "Шейдеры с трассировкой",
    category: "games", status: "done", year: 2026,
    langs: ["GLSL"], tags: ["Шейдеры", "Ray Tracing", "GPU"],
    short: {
      ru: "Эксперименты с трассировкой лучей прямо в шейдерах на GLSL.",
      en: "Experiments with ray tracing directly in GLSL shaders.",
      uk: "Експерименти з трасуванням променів прямо в шейдерах на GLSL.",
    },
    body: {
      ru: ["Трассировка лучей, но целиком на видеокарте — в GLSL-шейдерах. Здесь весь рендеринг идёт параллельно на GPU, и это совсем другой стиль мышления: не цикл по пикселям, а программа, которая запускается для каждого пикселя сразу.", "Продолжение темы рендеринга, но уже на уровне железа."],
      en: ["Ray tracing, but entirely on the GPU — in GLSL shaders. Here the whole rendering runs in parallel on the GPU, and it's a completely different way of thinking: not a loop over pixels, but a program that runs for every pixel at once.", "A continuation of the rendering theme, but now at the hardware level."],
      uk: ["Трасування променів, але цілком на відеокарті — у GLSL-шейдерах. Тут увесь рендеринг іде паралельно на GPU, і це зовсім інший стиль мислення.", "Продовження теми рендерингу, але вже на рівні заліза."],
    },
  },
  {
    id: "voxel-demo", name: "Voxel Demo", aka: "Воксельный движок",
    category: "games", status: "concept", year: 2026,
    langs: ["CUDA", "C++"], tags: ["Воксели", "GPU", "Графика"],
    short: {
      ru: "Демонстрация воксельного рендеринга с ускорением на GPU через CUDA.",
      en: "A demo of voxel rendering accelerated on the GPU via CUDA.",
      uk: "Демонстрація воксельного рендерингу з прискоренням на GPU через CUDA.",
    },
    body: {
      ru: ["Воксели — это трёхмерные «пиксели», из которых строится мир (как в Minecraft, только мельче). Демо рендерит воксельную сцену с ускорением на CUDA — миллионы кубиков должны рисоваться быстро.", "Тема на стыке игровой графики и параллельных вычислений на GPU."],
      en: ["Voxels are 3D 'pixels' that a world is built from (like in Minecraft, only finer). The demo renders a voxel scene accelerated on CUDA — millions of cubes have to be drawn fast.", "A topic between game graphics and parallel GPU computation."],
      uk: ["Воксели — це тривимірні «пікселі», з яких будується світ (як у Minecraft, лише дрібніше). Демо рендерить воксельну сцену з прискоренням на CUDA.", "Тема на стику ігрової графіки та паралельних обчислень на GPU."],
    },
  },
  {
    id: "mandelbrot", name: "Mandelbrot Benchmark", aka: "Фрактал и бенчмарк",
    category: "games", status: "done", year: 2026,
    langs: ["Rust"], tags: ["Фракталы", "Бенчмарк", "Графика"],
    short: {
      ru: "Отрисовка фрактала Мандельброта, заодно служащая бенчмарком производительности.",
      en: "Rendering the Mandelbrot fractal that doubles as a performance benchmark.",
      uk: "Відмалювання фрактала Мандельброта, що водночас слугує бенчмарком продуктивності.",
    },
    body: {
      ru: ["Множество Мандельброта — знаменитый фрактал бесконечной красоты и удобный бенчмарк: его расчёт легко нагружает процессор. Проект и рисует фрактал, и измеряет, насколько быстро это делается.", "Красивая математика и практичная польза в одном."],
      en: ["The Mandelbrot set is a famous fractal of infinite beauty and a convenient benchmark: computing it loads the CPU easily. The project both draws the fractal and measures how fast it's done.", "Beautiful maths and practical use in one."],
      uk: ["Множина Мандельброта — знаменитий фрактал нескінченної краси й зручний бенчмарк: його розрахунок легко навантажує процесор.", "Красива математика й практична користь в одному."],
    },
  },
  {
    id: "circlegen", name: "Circle Gen", aka: "Генерация окружностей",
    category: "games", status: "done", year: 2023,
    langs: ["Python"], tags: ["Графика", "Алгоритмы"],
    short: {
      ru: "Эксперимент с алгоритмами генерации и отрисовки окружностей.",
      en: "An experiment with algorithms for generating and drawing circles.",
      uk: "Експеримент з алгоритмами генерації та відмалювання кіл.",
    },
    body: {
      ru: ["Маленький графический эксперимент про то, как рисуются окружности — алгоритмически, пиксель за пикселем. За простой фигурой стоит классическая задача компьютерной графики.", "Из ранних опытов с генеративной графикой."],
      en: ["A small graphics experiment about how circles are drawn — algorithmically, pixel by pixel. Behind a simple shape lies a classic computer-graphics problem.", "One of the early experiments with generative graphics."],
      uk: ["Маленький графічний експеримент про те, як малюються кола — алгоритмічно, піксель за пікселем.", "Із ранніх дослідів із генеративною графікою."],
    },
  },
  {
    id: "dancingcube", name: "Dancing Cube", aka: "Танцующий куб",
    category: "games", status: "done", year: 2023,
    langs: ["Python"], tags: ["Графика", "Анимация", "Игра"],
    short: {
      ru: "Анимационный графический проект с движущимися кубами.",
      en: "An animation graphics project with moving cubes.",
      uk: "Анімаційний графічний проєкт із рухомими кубами.",
    },
    body: {
      ru: ["Графический эксперимент с анимацией кубов: они двигаются, реагируют, «танцуют». Прошёл несколько версий — от одного куба с багами до пяти кубов с проработанной механикой.", "Из тех проектов, что делаются ради удовольствия видеть, как картинка оживает."],
      en: ["A graphics experiment with cube animation: they move, react, 'dance'. It went through several versions — from one buggy cube to five cubes with refined mechanics.", "One of those projects done for the pleasure of watching an image come alive."],
      uk: ["Графічний експеримент з анімацією кубів: вони рухаються, реагують, «танцюють». Пройшов кілька версій.", "Із тих проєктів, що робляться заради задоволення бачити, як картинка оживає."],
    },
  },
  {
    id: "tgame", name: "Text Game", aka: "Текстовая игра",
    category: "games", status: "done", year: 2023,
    langs: ["Python"], tags: ["Игра", "База данных", "Текст"],
    short: {
      ru: "Текстовая игра с собственным игровым миром и сохранением прогресса в базу данных.",
      en: "A text game with its own game world and progress saved to a database.",
      uk: "Текстова гра з власним ігровим світом і збереженням прогресу в базу даних.",
    },
    body: {
      ru: ["Текстовая игра со своим миром: исследуешь, взаимодействуешь, прогресс сохраняется в базу данных. Жанр старый, но он отлично учит проектировать игровую логику и состояние, не отвлекаясь на графику.", "Здесь весь интерес — в том, чтобы текстом создать ощущение настоящего мира."],
      en: ["A text game with its own world: you explore, interact, and progress is saved to a database. An old genre, but it's great for learning to design game logic and state without the distraction of graphics.", "Here all the interest is in creating the feel of a real world with text alone."],
      uk: ["Текстова гра зі своїм світом: досліджуєш, взаємодієш, прогрес зберігається в базу даних. Жанр старий, але добре вчить проєктувати ігрову логіку.", "Тут увесь інтерес — у тому, щоб текстом створити відчуття справжнього світу."],
    },
  },
  {
    id: "textrace", name: "Text Race", aka: "Бот для клавогонок",
    category: "games", status: "done", year: 2022,
    langs: ["Python"], tags: ["Автоматизация", "Игра", "Selenium"],
    short: {
      ru: "Бот для онлайн-игры на скорость печати, автоматически набирающий текст.",
      en: "A bot for an online typing-speed game that types the text automatically.",
      uk: "Бот для онлайн-гри на швидкість друку, що автоматично набирає текст.",
    },
    body: {
      ru: ["В онлайн-играх на скорость печати соревнуются, кто быстрее наберёт текст. Этот бот через автоматизацию браузера читает текст с экрана и набирает его сам — с нечеловеческой скоростью.", "Учебный проект про автоматизацию браузера: чтение страницы, эмуляция ввода, тайминги."],
      en: ["In online typing-speed games you compete over who types text faster. This bot, via browser automation, reads the text off the screen and types it itself — at an inhuman speed.", "A learning project about browser automation: reading a page, emulating input, timings."],
      uk: ["В онлайн-іграх на швидкість друку змагаються, хто швидше набере текст. Цей бот через автоматизацію браузера читає текст з екрана й набирає його сам.", "Навчальний проєкт про автоматизацію браузера."],
    },
  },
  {
    id: "firstgame", name: "First Game", aka: "Первая игра",
    category: "games", status: "learning", year: 2021,
    langs: ["Python"], tags: ["Игра", "Учебное", "Pygame"],
    short: {
      ru: "Моя первая игра — самый старый игровой проект на Python.",
      en: "My first game — the oldest game project in Python.",
      uk: "Моя перша гра — найстаріший ігровий проєкт на Python.",
    },
    body: {
      ru: ["Самая первая игра, которую я написал. Кода немного и он наивный, но именно с него начался интерес к разработке игр и графики. Оставляю честно — это часть истории.", "Каждый разработчик с чего-то начинал, и приятно видеть, как далеко уехал с тех пор."],
      en: ["The very first game I wrote. There isn't much code and it's naive, but this is where the interest in game and graphics development began. I keep it honestly — it's part of the history.", "Every developer started somewhere, and it's nice to see how far you've come since."],
      uk: ["Найперша гра, яку я написав. Коду небагато й він наївний, але саме з нього почався інтерес до розробки ігор.", "Кожен розробник з чогось починав, і приємно бачити, як далеко поїхав відтоді."],
    },
  },
  {
    id: "secondgame", name: "Second Game", aka: "Вторая игра",
    category: "games", status: "learning", year: 2021,
    langs: ["Python"], tags: ["Игра", "Учебное"],
    short: {
      ru: "Вторая игра — следующий шаг после самого первого игрового проекта.",
      en: "A second game — the next step after the very first game project.",
      uk: "Друга гра — наступний крок після найпершого ігрового проєкту.",
    },
    body: {
      ru: ["Продолжение после первой игры: чуть сложнее, чуть аккуратнее. По таким парам ранних проектов хорошо видно, как быстро растёшь в самом начале пути.", "Маленький, но честный кусочек моей истории как разработчика."],
      en: ["A follow-up to the first game: a bit more complex, a bit tidier. Pairs of early projects like this show clearly how fast you grow at the very start of the path.", "A small but honest piece of my history as a developer."],
      uk: ["Продовження після першої гри: трохи складніше, трохи акуратніше. За такими парами ранніх проєктів добре видно, як швидко ростеш на початку.", "Маленький, але чесний шматочок моєї історії як розробника."],
    },
  },
];
