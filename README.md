# about-site — портфолио Alex Melan

Личный сайт-портфолио. Опубликован через GitHub Pages:
**https://alexmelanfromringo.github.io/about-site/**

Статический сайт со своим генератором. Трёхъязычный (RU / EN / UA),
тёмная тема, оформление на Tailwind CSS, 224 проекта в 12 категориях.

## Структура

```
data/site.js          профиль, категории, статусы, строки интерфейса
data/projects/*.js     данные проектов (по файлу на категорию)
build.js               генератор: собирает HTML и посты для Telegram
src/input.css          исходник Tailwind
assets/                собранный CSS, JS, иконки
index.html, 404.html   генерируются
projects/<id>.html     генерируются — по странице на проект
_tg/                   генерируются — посты для Telegram-канала
```

## Сборка

```bash
npm install        # один раз
npm run build      # генерирует HTML + собирает CSS
```

- `npm run build:html` — только перегенерировать страницы
- `npm run build:css`  — только пересобрать стили
- `npm run dev`        — пересборка + Tailwind в режиме watch

## Как добавить проект

Открыть нужный файл в `data/projects/`, добавить объект в массив
(скопировать соседний как образец), выполнить `npm run build`.
Главная страница, страница проекта и пост для Telegram появятся сами.
