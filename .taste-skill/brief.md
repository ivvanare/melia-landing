# Melia · tasteskill 2.5 build

Read `.agents/skills/design-taste-frontend/SKILL.md` completely first, then
`references/layout-v4.md` § 1 and `references/sections.md`. That skill's nine house rules win.

## Kind and system (already decided)

`data-type="product"`, `site-kind="other"`, `page-type="product"`.
It is a consumer app for going out, not tech: **photographs and type, no shaders, no scenes, no
self-running effects.**

`public/assets/` already holds the skill's assets. Head links in this order:
`assets/system.css`, `assets/ui/cards.css`, `assets/motion/motion.css`,
`assets/backgrounds/backgrounds.css`, `assets/layout/layout.css`, `assets/icons/icon.css`.

Fonts: `Bricolage Grotesque` (display) + `Figtree` (text).
The `:root` block is already generated — copy it verbatim:

```css
:root {
  --p-bg: #faf7f4; --p-surface: #edeae7; --p-ink: #1b1614; --p-muted: #676260;
  --p-accent: #ff5a36; --p-accent-ink: #111111; --p-action: #ff5a36; --p-action-ink: #111111;
  --p-inv-bg: #1b1614; --p-inv-surface: #282320; --p-inv-ink: #faf7f4; --p-inv-muted: #9d9996;
  --p-inv-accent: #ff5a36; --p-inv-accent-ink: #111111; --p-inv-action: #ff5a36; --p-inv-action-ink: #111111;
  --font-display: "Bricolage Grotesque", system-ui, sans-serif;
  --font-text: "Figtree", system-ui, sans-serif;
  --display-weight: 400; --display-tracking: -0.03em;
  --display-tracking-xl: -0.04em; --display-stretch: 96%;
}
```

`<html lang="es" data-type="product" data-radius="soft" data-buttons="solid" data-motion>`.

## House rules that change the previous build

- **No carousels, no tilt, no timed tabs.** The filter chips are a static wrapping row.
- **No caption or description under any image.** Credits go in one footer line.
- **One section per screen**: the hero alone on the first screen; each later section exactly one
  to two screens at 1440×900, with no second heading peeking in.
- **Equal left and right content edges** on every section.
- **Hover micro-animations are required** through `assets/motion`: linked card lifts 2px, photo
  zooms 1.02–1.03 inside its frame, buttons step and press, underlines draw.
- Every visual renders at 1440, 1024, 768 and 390 — never an empty ground.

## Content (this is the client's copy; keep the words)

Name **Melia**. An app for deciding what to do tonight with your friends in Madrid: terraces,
brunch, comedy, group voting, calendar sync. Free on iOS and Android.

Sections, each with a claim and its proof:

1. **Hero** — head: `Menos “a ver qué hacemos”, más ¡ya estamos aquí!` · one sentence: `Terrazas,
   restaurantes y planes en tu ciudad. Vota con tus amigos en 30 segundos.` · the two store links.
   The visual is the product itself: the live vote (`Rooftop Cibeles vs Ramen Hanabi`, `21:14`,
   `4 de 5 han votado`, avatars MR SL AG +2, `¡Me apunto!` / `Paso hoy`).
2. **The numbers** — `+2,4k` planes activos · `+180` ciudades · `4,9` valoración en las tiendas.
3. **Planes según tu mood** — six categories with their counts: Gastronomía & Tapas 640,
   Rooftops & Terrazas 94, Música & Conciertos 128, Stand-up & Microteatro 82, Brunch & Cafés de
   Autor 112, Escapadas & Aire Libre 53. These are the filter chips (`data-category`).
4. **Tres razones para no volver a planear por chat** — (a) Descubrimiento hiperlocal en tiempo
   real: distancia < 800 m, abierto ahora, terraza con mesas libres; (b) Listas grupales con
   votación express: Taberna La Carmencita 75%, 4 votos, no hace falta registrarse; (c) Tu agenda
   de ocio centralizada: iCal, Google Calendar y Outlook.
5. **Planes recomendados para este fin de semana** — the three events, each with time, price,
   place and distance: `Sesión Acústica & Cerveza Artesanal` 21:00, 15 €/pers., Malasaña a 1,5 km;
   `Brunch Botánico en Patio Central` 11:30 sábado, 18 €/pers., Salamanca a 2,8 km; `Noche de
   Micro Abierto & Tacos` 20:00 domingo, 12 €/pers., La Latina a 0,9 km. Range pills
   `Hoy` / `Este fin de semana` / `Próxima semana` as `data-time` (static, `aria-pressed`).
6. **Mapa** — `42 planes y mesas activas a menos de 2 km`, locales verificados de Madrid.
7. **Tres pasos y ya están en la calle** — Descubre o propón · Comparte y vota · Disfrutad juntos,
   with their sentences.
8. **Para locales y creadores** — `¿Gestionas un local o creas experiencias urbanas?`, the
   sentence, `Conectar con aliados` → `mailto:aliados@melia.app`.
9. **Closing** — `Tu próxima anécdota empieza este fin de semana.`, the sentence, the store links,
   `Sin suscripciones forzadas, 100 % colaborativo para grupos.`
10. **Footer** — Explorar / Producto / Compañía columns, the description, `Disponible en España:
    Madrid, Barcelona, Valencia, Sevilla.`, `© 2025 Melia`, `Español (ES)`.

## Photographs

Already in `public/img/`, optimised, use them: `night-street.jpg` (1920×640, Madrid terraces at
night), `venue-host.jpg` (900×675, a bar owner), `group-toast.jpg` (1600×900, friends on a
rooftop), `event-acoustic.jpg`, `event-brunch.jpg`, `event-comedy.jpg` (512×~280, three events),
`map-madrid.png`. Each `alt` must say what it shows. No caption under any of them.

## Wiring that must survive

- `id="descubrir"`, `id="como-funciona"`, `id="mapa-en-vivo"`, `id="creadores"`, `id="descargar"`
- `data-category="<label>"` on each of the six mood chips, with `aria-pressed`
- `data-time="Hoy" | "Este fin de semana" | "Próxima semana"`, with `aria-pressed`
- `data-search` on the input, `data-explore` on its button
- `id="theme-toggle"` and the `localStorage('melia-theme')` script already in `Base.astro`
- The head SEO in `Base.astro` (canonical, OG, JSON-LD, robots, icons) stays.
- Drop the simulated filter engine if it fights the layout, but keep the chips focusable with
  real `aria-pressed` state toggling on click (a small script is enough).

## Verify before returning

```
node .agents/skills/design-taste-frontend/scripts/lint.mjs <the page's html>
CHROME_PATH=/home/ivanare/.local/share/gentle-shell/install/home/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome node .agents/skills/design-taste-frontend/scripts/inspect.mjs <url>
```
A dev server is running at http://localhost:4321 (do not stop it). `inspect.mjs` must report no
FAIL at 1440, 768 and 390. Fix what it finds, then look at the screenshots it wrote and fix the
three worst things. Report the direction, the scores and what is still short.

Do not commit.
