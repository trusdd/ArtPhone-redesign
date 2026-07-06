# ArtPhone frontend — senior polish patch

## Что исправлено

- Усилена мобильная адаптивность: header, burger menu, поиск, карточки, каталог, корзина, checkout, product pages.
- Нормализована разметка header на legacy-страницах, где burger menu был вне `.nav-container`.
- Добавлены корректные ARIA-состояния, Escape-close для меню и доступные focus states.
- Корзина переведена на безопасный event delegation без inline `onclick` в новом рендеринге.
- Данные товара нормализуются перед добавлением в корзину: используются локальные изображения из `catalogProducts`, если они есть.
- Добавлены fallbacks для изображений, чтобы битая картинка не ломала интерфейс.
- Добавлены touch-friendly размеры кнопок и полей: минимум 44px.
- Таблицы характеристик на product pages теперь безопасно скроллятся по горизонтали на телефонах.
- Добавлена поддержка `prefers-reduced-motion`.
- Исправлен UX-кейс: клики по wishlist/compare/quick view внутри карточек больше не запускают переход по ссылке карточки.

## Измененные файлы

- `style.css`
- `script.js`

## Проверка

- `node --check script.js` — успешно.
- Проверены локальные ссылки и изображения в HTML — битых локальных ссылок/картинок не найдено.

## Hotfix 2026-07-06 — mobile release blockers

Fixed two release-blocking mobile regressions reported after QA:

- Restored the mobile navigation menu at all mobile/tablet widths up to 900px.
  - The burger button is now forcibly visible and touch-friendly across 390px, 430px, 768px and tablet breakpoints.
  - The dropdown menu now uses deterministic `visibility`, `opacity`, `pointer-events`, `z-index` and fixed positioning.
  - Menu links remain readable on the white premium mobile header.
- Fixed hidden top text on the homepage hero.
  - Removed the mobile negative hero overlap with the sticky header.
  - Kept the hero eyebrow/title/description above visual layers and fully visible.

Release checks performed:

- `node --check script.js` — passed.
- CSS brace balance / hotfix assertions — passed.
- Local HTML link and image scan across 47 pages — passed, 0 missing local assets.


## v3 cart placement hotfix

- Переместил иконку корзины в верхнюю панель рядом с burger-навигацией на мобильных устройствах.
- Теперь корзина создаётся перед `.burger-menu`, а не докидывается в конец `.nav-container`, поэтому порядок в header стабильный.
- Добавил финальные CSS-override правила для мобильной сетки header: `logo | cart | burger`, поиск остаётся второй строкой.
- Заменил emoji-иконку корзины на inline SVG, чтобы она выглядела аккуратнее и одинаково на iOS/Android/desktop.
- Добавил `aria-label` и `aria-live` для корректной доступности корзины.
