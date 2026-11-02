# Melia landing — estado al pausar

Landing de **Melia** (app de planes urbanos) en Astro 7 + Tailwind 4.
Base original: export de Google Stitch en `design/stitch/` (se llamaba "Plany",
renombrado a Melia).

## Correr
```
npx astro dev --background     # http://localhost:4321
npx astro dev stop
npm run build
```

**Nota de entorno:** el cgroup de la sesión viene con `pids.max=64` y el build
falla con `pthread_create: Resource temporarily unavailable`. Subirlo:
```
echo 512 > /sys/fs/cgroup/.../gentle-shell-*.service/pids.max
```

## Ramas (cuatro direcciones de la misma página)

| Rama | Dirección |
|---|---|
| `master` | original (Stitch, coral sobre slate, light/dark) |
| `hallmark-redesign` | **Spore** — tema del catálogo, Young Serif, café oscuro, bento grid |
| `hallmark-noche` | **Tablero** — custom, Archivo, azul de plano, filas |
| **`hallmark-mixta`** ← actual | **Tablero sobre papel cálido + las tres fotos** |

Punto de retorno prerediseño: `stash@{0}`.
Commits con identidad de proyecto `Melia Dev <dev@melia.local>` (no hay git
user configurado en el entorno).

## Rama actual: `hallmark-mixta`

Estructura del tablero de salidas (hora · plan · lugar · estado en filas
regladas, una sola familia tipográfica Archivo) con la calidez de Spore (tinta
parchment, grano en las bandas, radios de 10px). El coral de Melia es la única
señal, reservado a lo que está vivo ahora.

- Nav slab · hero con la fila de las 21:14 abierta · métricas como fila del
  tablero · foto de Madrid + tira de moods · tres razones · tablero de planes ·
  tres pasos · locales con foto · cierre con foto · pie index.
- Fotografías optimizadas: `night-street` 1920x640/201KB,
  `venue-host` 900x675/83KB, `group-toast` 1600x900/168KB (452KB total, desde
  10.2MB de origen). `public/img` pesa 888KB.
- Dos colourways: `:root` nocturno, `:root.light` papel claro. El toggle de tema
  y `localStorage('melia-theme')` siguen funcionando.

### Resultado del linter
```
1 FAIL   (gate 34, falso positivo verificado: html y body computan
          overflow-x: clip; el lint no ve el base.css importado) — waived en el stamp
5 REFLEX · 4 WARN · 4 NOTE
kept: links 7/7 · fields 29/40 (11 registrados en el stamp) · headings 16/17 · figures 6/10
```
Stamp con los registros de dropped/reworded/waived/review en las primeras
líneas de `src/styles/global.css`.

Finish review corrido y registrado (`in-thread`, porque el proveedor de
subagentes daba `provider_unavailable`).

## Herramientas instaladas
- `.agents/skills/`: `anti-vibe-design` (creada en este proyecto), `frontend-design`,
  `impeccable`, `ui-ux-pro-max`
- `~/.agents/skills/hallmark` (global, `npx skills add nutlope/hallmark -g`)
- Dev deps: `tailwindcss`, `@tailwindcss/vite`, `@astrojs/sitemap`, `puppeteer-core`

## Pendiente
1. **Dominio real** — `SITE_URL = 'https://melia.app'` en `astro.config.mjs` y la
   línea `Sitemap:` en `public/robots.txt`. De ahí salen canonical, OG y sitemap.
2. **Links reales** de App Store y Google Play.
3. **`pnpm-lock.yaml` espurio** en la raíz (del intento fallido de `astro add
   tailwind`); el proyecto usa npm. Borrarlo.
4. Elegir cuál de las cuatro ramas es la definitiva y mergear a `master`.
5. Opcional: correr el finish review sobre `hallmark-mixta` ya con las fotos.

## Deuda consciente
- Los eyebrows y el texto con gradiente del diseño original se retiraron en las
  ramas Hallmark (el Floor los prohíbe). En `master` siguen.
- El conteo de resultados de los filtros es simulado y derivado de los counts
  visibles; el punto a reemplazar si algún día hay backend.
- Gate 58 (palabras por pantalla) queda como NOTE: el copy es del cliente y un
  redesign no lo cambia.
