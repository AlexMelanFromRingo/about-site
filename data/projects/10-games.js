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
      ru: [
        "Старая логическая игра: компьютер загадывает число, ты называешь варианты, а в ответ получаешь «быков» (цифра на своём месте) и «коров» (цифра есть, но не там) — и по этим подсказкам сужаешь догадки.",
        "Здесь она сделана как чистая веб-страница: ванильные HTML, CSS и JavaScript, без единой зависимости и без шага сборки. Минимализм тут принципиален.",
        "Благодаря этому игра открывается мгновенно и работает где угодно, включая бесплатный хостинг GitHub Pages — просто открыл ссылку и играешь.",
      ],
      en: [
        "An old logic game: the computer thinks of a number, you call out guesses, and in return you get 'bulls' (a digit in the right place) and 'cows' (a digit that exists but elsewhere) — and you narrow your guesses by these hints.",
        "Here it's built as a pure web page: vanilla HTML, CSS and JavaScript, with not a single dependency and no build step. The minimalism is on purpose.",
        "Thanks to that the game opens instantly and runs anywhere, including the free GitHub Pages hosting — just open the link and play.",
      ],
      uk: [
        "Стара логічна гра: комп'ютер загадує число, ти називаєш варіанти, а у відповідь отримуєш «биків» і «корів».",
        "Тут вона зроблена як чиста вебсторінка: ванільні HTML, CSS і JavaScript, без жодної залежності.",
        "Гра відкривається миттєво й працює будь-де, включно з GitHub Pages.",
      ],
    },
    features: {
      ru: ["Классическая логическая игра в браузере", "Ванильные HTML, CSS, JavaScript — без зависимостей", "Без шага сборки — открыл и играешь", "Работает где угодно, включая GitHub Pages"],
      en: ["The classic logic game in the browser", "Vanilla HTML, CSS, JavaScript — no dependencies", "No build step — open it and play", "Runs anywhere, including GitHub Pages"],
      uk: ["Класична логічна гра у браузері", "Ванільні HTML, CSS, JavaScript — без залежностей", "Без кроку збірки — відкрив і граєш", "Працює будь-де, включно з GitHub Pages"],
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
      ru: [
        "Если есть игра, интересно написать к ней идеального игрока. Этот решатель на Rust играет в «Быки и Коровы» оптимально.",
        "Алгоритм держит множество всех чисел, которые ещё могут быть загаданы. После каждого ответа «быков и коров» он отбрасывает все варианты, которые этому ответу противоречат, и следующий ход делает так, чтобы сузить множество сильнее всего.",
        "Хорошая задача на алгоритмы: как из неполной информации, шаг за шагом, гарантированно прийти к ответу за минимум попыток. Пара к моей браузерной версии самой игры.",
      ],
      en: [
        "If there's a game, it's interesting to write a perfect player for it. This Rust solver plays Bulls and Cows optimally.",
        "The algorithm keeps the set of all numbers that could still be the secret. After each 'bulls and cows' reply it discards every option that contradicts that reply, and makes its next move so as to narrow the set the most.",
        "A good algorithms problem: how to reach the answer step by step from incomplete information, guaranteed, in a minimum of tries. A companion to my browser version of the game itself.",
      ],
      uk: [
        "Якщо є гра, цікаво написати до неї ідеального гравця. Цей розв'язувач на Rust грає в «Бики й Корови» оптимально.",
        "Алгоритм тримає множину всіх можливих чисел і після кожної відповіді відкидає суперечливі варіанти.",
        "Гарна задача на алгоритми. Пара до моєї браузерної версії гри.",
      ],
    },
    features: {
      ru: ["Оптимальный решатель «Быков и Коров»", "Поддерживает множество возможных вариантов", "Каждый ход максимально сужает множество", "Угадывание за минимум попыток"],
      en: ["An optimal Bulls-and-Cows solver", "Maintains the set of possible options", "Each move narrows the set as much as possible", "Guessing in a minimum of tries"],
      uk: ["Оптимальний розв'язувач «Биків і Корів»", "Підтримує множину можливих варіантів", "Кожен хід максимально звужує множину", "Вгадування за мінімум спроб"],
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
      ru: [
        "Боевая арена, где игроки сражаются друг с другом в реальном времени. Я реализовал эту идею в нескольких воплощениях — как Telegram-бот и как веб-игра, на Rust и на Go.",
        "Мультиплеер в реальном времени — технически сложная задача: нужно синхронизировать состояние боя между игроками, обрабатывать задержки сети, следить, чтобы у всех была честная и одинаковая картина происходящего.",
        "Отличный полигон для сетевого программирования: здесь упираешься во все классические проблемы реал-тайм игр сразу.",
      ],
      en: [
        "A battle arena where players fight each other in real time. I built this idea in several incarnations — as a Telegram bot and a web game, in Rust and in Go.",
        "Real-time multiplayer is a technically hard problem: you need to sync the battle state between players, handle network latency, make sure everyone has a fair and identical picture of what's happening.",
        "A great proving ground for network programming: here you hit all the classic real-time-game problems at once.",
      ],
      uk: [
        "Бойова арена, де гравці б'ються в реальному часі. Я реалізував цю ідею в кількох втіленнях — як Telegram-бот і вебгра, на Rust і Go.",
        "Мультиплеєр у реальному часі — складна задача: синхронізація стану, обробка затримок, чесність для всіх.",
        "Чудовий полігон для мережевого програмування.",
      ],
    },
    features: {
      ru: ["Бой игроков в реальном времени", "Несколько воплощений: Telegram-бот и веб-игра", "Реализации на Rust и Go", "Синхронизация состояния боя между игроками"],
      en: ["Real-time player combat", "Several incarnations: a Telegram bot and a web game", "Implementations in Rust and Go", "Battle-state synchronization between players"],
      uk: ["Бій гравців у реальному часі", "Кілька втілень: Telegram-бот і вебгра", "Реалізації на Rust і Go", "Синхронізація стану бою між гравцями"],
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
      ru: [
        "Что будет, если взять простейшую игру и отрисовать её абсурдно всерьёз? Snake RTX — это обычная «Змейка», знакомая всем с кнопочных телефонов.",
        "Но картинка здесь не рисуется тремя цветными квадратами. Она считается трассировкой лучей в GLSL-шейдерах: настоящие отражения, освещение, тени там, где их в этой игре никто не ждёт.",
        "Забавный и осознанный контраст: примитивный геймплей из 1990-х и серьёзная современная графика. Проект ради удовольствия и ради практики с шейдерами.",
      ],
      en: [
        "What happens if you take the simplest game and render it absurdly seriously? Snake RTX is ordinary Snake, the one everyone knows from button phones.",
        "But the image here isn't drawn with three coloured squares. It's computed with ray tracing in GLSL shaders: real reflections, lighting, shadows where nobody expects them in this game.",
        "An amusing, deliberate contrast: primitive 1990s gameplay and serious modern graphics. A project for the fun of it and for shader practice.",
      ],
      uk: [
        "Що буде, якщо взяти найпростішу гру й відмалювати її абсурдно всерйоз? Snake RTX — звичайна «Змійка».",
        "Але картинка рахується трасуванням променів у GLSL-шейдерах: справжні відбиття, освітлення, тіні.",
        "Кумедний контраст: примітивний геймплей і серйозна сучасна графіка.",
      ],
    },
    features: {
      ru: ["Классическая «Змейка» с трассировкой лучей", "Картинка считается в GLSL-шейдерах", "Настоящие отражения, освещение и тени", "Контраст примитивного геймплея и серьёзной графики"],
      en: ["The classic Snake game with ray tracing", "The image computed in GLSL shaders", "Real reflections, lighting and shadows", "A contrast of primitive gameplay and serious graphics"],
      uk: ["Класична «Змійка» з трасуванням променів", "Картинка рахується в GLSL-шейдерах", "Справжні відбиття, освітлення й тіні", "Контраст примітивного геймплею та серйозної графіки"],
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
      ru: [
        "Трассировка лучей — способ получить реалистичную картинку, моделируя сам путь света. Из камеры в сцену пускаются лучи, которые отражаются, преломляются, рассеиваются — ровно как ведут себя настоящие фотоны.",
        "Я писал трассировщики несколько раз: на Python — ради наглядности, чтобы видеть алгоритм без шума, и на Rust — ради скорости, потому что рендеринг тяжёлый и каждый кадр требует миллионов вычислений.",
        "Это та область, где математика, физика и программирование сходятся в красивый результат прямо на экране.",
      ],
      en: [
        "Ray tracing is a way to get a realistic image by simulating the path of light itself. Rays are cast from the camera into the scene, where they reflect, refract, scatter — exactly as real photons behave.",
        "I've written ray tracers several times: in Python — for clarity, to see the algorithm without noise, and in Rust — for speed, because rendering is heavy and every frame demands millions of computations.",
        "It's the area where maths, physics and programming converge into a beautiful result right on the screen.",
      ],
      uk: [
        "Трасування променів — спосіб отримати реалістичну картинку, моделюючи сам шлях світла.",
        "Я писав трасувальники кілька разів: на Python — для наочності, і на Rust — для швидкості.",
        "Це та сфера, де математика, фізика й програмування сходяться в гарний результат.",
      ],
    },
    features: {
      ru: ["Рендеринг через моделирование пути света", "Отражения, преломления, рассеивание лучей", "Реализации на Python (наглядно) и Rust (быстро)", "Стык математики, физики и программирования"],
      en: ["Rendering by simulating the path of light", "Ray reflection, refraction, scattering", "Implementations in Python (clear) and Rust (fast)", "An intersection of maths, physics and programming"],
      uk: ["Рендеринг через моделювання шляху світла", "Відбиття, заломлення, розсіювання променів", "Реалізації на Python (наочно) і Rust (швидко)", "Стик математики, фізики й програмування"],
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
      ru: [
        "Трассировка лучей, но целиком на видеокарте — написанная в GLSL-шейдерах. Здесь весь рендеринг идёт параллельно на GPU.",
        "Это совсем другой стиль мышления, чем трассировка на процессоре. Не цикл, который последовательно обходит пиксели, а одна программа-шейдер, которая запускается для каждого пикселя сразу и независимо.",
        "Продолжение моей темы рендеринга — но уже на уровне железа, где важно думать о параллельности с самого начала.",
      ],
      en: [
        "Ray tracing, but entirely on the GPU — written in GLSL shaders. Here the whole rendering runs in parallel on the graphics card.",
        "It's a completely different way of thinking than CPU ray tracing. Not a loop that sequentially walks the pixels, but a single shader program that runs for every pixel at once and independently.",
        "A continuation of my rendering theme — but now at the hardware level, where you have to think about parallelism from the start.",
      ],
      uk: [
        "Трасування променів, але цілком на відеокарті — написане в GLSL-шейдерах.",
        "Це інший стиль мислення: не цикл по пікселях, а одна програма-шейдер для кожного пікселя одночасно.",
        "Продовження теми рендерингу на рівні заліза.",
      ],
    },
    features: {
      ru: ["Трассировка лучей целиком на GPU", "Написана в GLSL-шейдерах", "Параллельный рендеринг для каждого пикселя", "Рендеринг на уровне железа"],
      en: ["Ray tracing entirely on the GPU", "Written in GLSL shaders", "Parallel rendering for every pixel", "Rendering at the hardware level"],
      uk: ["Трасування променів цілком на GPU", "Написана в GLSL-шейдерах", "Паралельний рендеринг для кожного пікселя", "Рендеринг на рівні заліза"],
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
      ru: [
        "Воксели — это трёхмерные «пиксели», маленькие кубики, из которых строится мир. Похоже на Minecraft, только кубики могут быть гораздо мельче, и тогда из них складываются гладкие на вид объекты.",
        "Демо рендерит воксельную сцену с ускорением на CUDA. Это необходимость: миллионы кубиков нужно отрисовать быстро, и видеокарта с её тысячами ядер тут незаменима.",
        "Тема на стыке игровой графики и параллельных вычислений на GPU. Статус — прототип: рабочая основа для экспериментов с воксельным рендерингом.",
      ],
      en: [
        "Voxels are 3D 'pixels', small cubes that a world is built from. Like Minecraft, only the cubes can be much finer, and then they form objects that look smooth.",
        "The demo renders a voxel scene accelerated on CUDA. It's a necessity: millions of cubes have to be drawn fast, and a graphics card with its thousands of cores is indispensable here.",
        "A topic between game graphics and parallel GPU computation. Status — prototype: a working base for experiments with voxel rendering.",
      ],
      uk: [
        "Воксели — це тривимірні «пікселі», маленькі куби, з яких будується світ.",
        "Демо рендерить воксельну сцену з прискоренням на CUDA — мільйони кубів треба відмалювати швидко.",
        "Тема на стику ігрової графіки та паралельних обчислень. Статус — прототип.",
      ],
    },
    features: {
      ru: ["Рендеринг воксельной сцены из множества кубиков", "Ускорение на GPU через CUDA", "Стык игровой графики и параллельных вычислений", "Статус — прототип"],
      en: ["Rendering a voxel scene of many cubes", "GPU acceleration via CUDA", "An intersection of game graphics and parallel computation", "Status — prototype"],
      uk: ["Рендеринг воксельної сцени з безлічі кубів", "Прискорення на GPU через CUDA", "Стик ігрової графіки та паралельних обчислень", "Статус — прототип"],
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
      ru: [
        "Множество Мандельброта — знаменитый фрактал бесконечной красоты: чем глубже в него увеличиваешь, тем больше новых узоров открывается, и так до бесконечности.",
        "Заодно это удобный бенчмарк: его расчёт состоит из миллионов однотипных вычислений и легко, предсказуемо нагружает процессор. Проект и рисует фрактал, и измеряет, насколько быстро это удаётся.",
        "Красивая математика и практичная польза в одном проекте — приятно, когда инструмент измерения производительности заодно радует глаз.",
      ],
      en: [
        "The Mandelbrot set is a famous fractal of infinite beauty: the deeper you zoom into it, the more new patterns open up, and so on forever.",
        "It's also a convenient benchmark: computing it consists of millions of uniform calculations and loads the CPU easily and predictably. The project both draws the fractal and measures how fast it manages.",
        "Beautiful maths and practical use in one project — it's nice when a performance-measuring tool also pleases the eye.",
      ],
      uk: [
        "Множина Мандельброта — знаменитий фрактал нескінченної краси.",
        "Водночас це зручний бенчмарк: розрахунок легко й передбачувано навантажує процесор. Проєкт малює фрактал і вимірює швидкість.",
        "Красива математика й практична користь в одному проєкті.",
      ],
    },
    features: {
      ru: ["Отрисовка фрактала Мандельброта", "Служит бенчмарком производительности процессора", "Миллионы однотипных вычислений", "Красивая математика и практичная польза вместе"],
      en: ["Rendering the Mandelbrot fractal", "Doubles as a CPU performance benchmark", "Millions of uniform calculations", "Beautiful maths and practical use together"],
      uk: ["Відмалювання фрактала Мандельброта", "Слугує бенчмарком продуктивності процесора", "Мільйони однотипних обчислень", "Красива математика й практична користь разом"],
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
      ru: [
        "Маленький графический эксперимент про то, как на самом деле рисуются окружности — алгоритмически, пиксель за пикселем на дискретной сетке.",
        "За такой простой фигурой стоит классическая задача компьютерной графики: как из формулы круга получить набор пикселей, чтобы линия выглядела ровной, а не ступенчатой.",
        "Из ранних опытов с генеративной графикой — там, где разбираешься с самыми основами рисования на экране.",
      ],
      en: [
        "A small graphics experiment about how circles are actually drawn — algorithmically, pixel by pixel on a discrete grid.",
        "Behind such a simple shape lies a classic computer-graphics problem: how to turn the circle formula into a set of pixels so the line looks even rather than stepped.",
        "One of the early experiments with generative graphics — where you work through the very basics of drawing on a screen.",
      ],
      uk: [
        "Маленький графічний експеримент про те, як насправді малюються кола — алгоритмічно, піксель за пікселем.",
        "За простою фігурою стоїть класична задача комп'ютерної графіки.",
        "Із ранніх дослідів із генеративною графікою.",
      ],
    },
    features: {
      ru: ["Алгоритмическая отрисовка окружностей", "Перевод формулы круга в набор пикселей", "Классическая задача компьютерной графики", "Ранний опыт с генеративной графикой"],
      en: ["Algorithmic drawing of circles", "Turning the circle formula into a set of pixels", "A classic computer-graphics problem", "An early experiment with generative graphics"],
      uk: ["Алгоритмічне відмалювання кіл", "Переведення формули кола в набір пікселів", "Класична задача комп'ютерної графіки", "Ранній досвід із генеративною графікою"],
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
      ru: [
        "Графический эксперимент с анимацией: кубы двигаются, реагируют, «танцуют» по заданным правилам.",
        "Проект прошёл несколько версий — от одного куба с багами до пяти кубов с проработанной механикой движения. По этим версиям видно, как набивалась рука в анимации.",
        "Из тех проектов, что делаются ради простого удовольствия видеть, как статичная картинка на экране оживает.",
      ],
      en: [
        "A graphics experiment with animation: cubes move, react, 'dance' by configured rules.",
        "The project went through several versions — from one buggy cube to five cubes with refined movement mechanics. These versions show how the hand got trained in animation.",
        "One of those projects done for the simple pleasure of watching a static picture on the screen come alive.",
      ],
      uk: [
        "Графічний експеримент з анімацією: куби рухаються, реагують, «танцюють».",
        "Проєкт пройшов кілька версій — від одного куба з багами до п'яти кубів із проробленою механікою.",
        "Із тих проєктів, що робляться заради задоволення бачити, як картинка оживає.",
      ],
    },
    features: {
      ru: ["Анимация движущихся кубов по правилам", "Несколько версий с растущей сложностью", "Практика анимации и графики", "Проект ради оживающей картинки"],
      en: ["Animation of cubes moving by rules", "Several versions with growing complexity", "Animation and graphics practice", "A project for the sake of a living picture"],
      uk: ["Анімація рухомих кубів за правилами", "Кілька версій зі зростаючою складністю", "Практика анімації та графіки", "Проєкт заради оживаючої картинки"],
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
      ru: [
        "Текстовая игра со своим миром: игрок исследует локации, взаимодействует с ними, а прогресс сохраняется в базу данных и не теряется между сессиями.",
        "Жанр старый, ещё дотерминальный, но он отлично учит главному — проектировать игровую логику, состояние мира и его сохранение, не отвлекаясь на графику вообще.",
        "Весь интерес здесь в том, чтобы одним текстом создать у игрока ощущение настоящего, живого мира.",
      ],
      en: [
        "A text game with its own world: the player explores locations, interacts with them, and progress is saved to a database and not lost between sessions.",
        "An old genre, predating even terminals, but it's great for teaching the main thing — designing game logic, world state and its saving, without the distraction of graphics at all.",
        "All the interest here is in creating, with text alone, the feeling of a real, living world for the player.",
      ],
      uk: [
        "Текстова гра зі своїм світом: гравець досліджує локації, а прогрес зберігається в базу даних.",
        "Жанр старий, але добре вчить проєктувати ігрову логіку та стан світу.",
        "Увесь інтерес — створити текстом відчуття справжнього світу.",
      ],
    },
    features: {
      ru: ["Текстовый игровой мир для исследования", "Сохранение прогресса в базу данных", "Проектирование игровой логики без графики", "Создание мира одним текстом"],
      en: ["A text game world to explore", "Progress saving to a database", "Designing game logic without graphics", "Creating a world with text alone"],
      uk: ["Текстовий ігровий світ для дослідження", "Збереження прогресу в базу даних", "Проєктування ігрової логіки без графіки", "Створення світу одним текстом"],
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
      ru: [
        "В онлайн-играх на скорость печати — «клавогонках» — соревнуются, кто быстрее без ошибок наберёт показанный текст. Этот бот участвует в гонке вместо человека.",
        "Через автоматизацию браузера он считывает текст задания прямо со страницы и набирает его сам — с нечеловеческой и идеально ровной скоростью.",
        "Учебный проект про автоматизацию браузера: чтение содержимого страницы, эмуляция ввода с клавиатуры, работа с таймингами.",
      ],
      en: [
        "In online typing-speed games — 'keyboard races' — players compete over who types the shown text faster without errors. This bot enters the race instead of a human.",
        "Via browser automation it reads the task text right off the page and types it itself — at an inhuman, perfectly even speed.",
        "A learning project about browser automation: reading a page's content, emulating keyboard input, working with timings.",
      ],
      uk: [
        "В онлайн-іграх на швидкість друку змагаються, хто швидше набере текст. Цей бот бере участь замість людини.",
        "Через автоматизацію браузера він зчитує текст і набирає його сам.",
        "Навчальний проєкт про автоматизацію браузера.",
      ],
    },
    features: {
      ru: ["Бот для онлайн-игры на скорость печати", "Чтение текста задания со страницы", "Автоматический набор с эмуляцией клавиатуры", "Учебный проект по автоматизации браузера"],
      en: ["A bot for an online typing-speed game", "Reading the task text off the page", "Automatic typing with keyboard emulation", "A learning project in browser automation"],
      uk: ["Бот для онлайн-гри на швидкість друку", "Читання тексту завдання зі сторінки", "Автоматичний набір з емуляцією клавіатури", "Навчальний проєкт з автоматизації браузера"],
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
      ru: [
        "Самая первая игра, которую я написал. Кода немного, и он наивный, но именно с этого проекта начался мой интерес к разработке игр и графики.",
        "Здесь впервые сошлись вместе игровой цикл, обработка ввода, отрисовка — базовая схема, которая потом повторялась во всех остальных играх, только аккуратнее.",
        "Оставляю на сайте честно — это часть истории. Каждый разработчик с чего-то начинал, и приятно видеть, как далеко уехал с тех пор.",
      ],
      en: [
        "The very first game I wrote. There isn't much code and it's naive, but this is the project where my interest in game and graphics development began.",
        "Here a game loop, input handling and rendering first came together — the basic scheme that later repeated in every other game, just more tidily.",
        "I keep it on the site honestly — it's part of the history. Every developer started somewhere, and it's nice to see how far you've come since.",
      ],
      uk: [
        "Найперша гра, яку я написав. Коду небагато, і він наївний, але саме з нього почався інтерес до розробки ігор.",
        "Тут уперше зійшлися ігровий цикл, обробка вводу, відмалювання.",
        "Лишаю на сайті чесно — це частина історії.",
      ],
    },
    features: {
      ru: ["Самая первая написанная мной игра", "Игровой цикл, ввод, отрисовка вместе впервые", "Старт интереса к разработке игр", "Оставлена честно как часть истории"],
      en: ["The very first game I wrote", "Game loop, input and rendering together for the first time", "The start of an interest in game development", "Kept honestly as part of the history"],
      uk: ["Найперша написана мною гра", "Ігровий цикл, ввід, відмалювання разом уперше", "Старт інтересу до розробки ігор", "Лишена чесно як частина історії"],
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
      ru: [
        "Продолжение после первой игры: чуть сложнее, чуть аккуратнее, чуть осознаннее.",
        "По таким парам ранних проектов хорошо видно, как быстро растёшь в самом начале пути — между «первой» и «второй» игрой разница уже заметна, хотя прошло совсем немного времени.",
        "Маленький, но честный кусочек моей истории как разработчика.",
      ],
      en: [
        "A follow-up to the first game: a bit more complex, a bit tidier, a bit more deliberate.",
        "Pairs of early projects like this show clearly how fast you grow at the very start of the path — the difference between the 'first' and 'second' game is already noticeable, though very little time passed.",
        "A small but honest piece of my history as a developer.",
      ],
      uk: [
        "Продовження після першої гри: трохи складніше, трохи акуратніше.",
        "За такими парами ранніх проєктів видно, як швидко ростеш на початку шляху.",
        "Маленький, але чесний шматочок моєї історії.",
      ],
    },
    features: {
      ru: ["Следующий шаг после первой игры", "Чуть сложнее и аккуратнее предыдущей", "Виден быстрый рост в начале пути", "Часть истории разработчика"],
      en: ["The next step after the first game", "A bit more complex and tidier than the previous one", "Shows rapid growth at the start of the path", "Part of a developer's history"],
      uk: ["Наступний крок після першої гри", "Трохи складніше й акуратніше за попередню", "Видно швидкий ріст на початку шляху", "Частина історії розробника"],
    },
  },
];
