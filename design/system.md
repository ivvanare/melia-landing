# Melia · design system

Captured from the project's own sources. Every value below was read from a file; nothing here is
invented. Four skills have redesigned this page and each rediscovered these tokens by reading CSS —
this file exists so the next one does not.

Direction in one line: warm paper, one grotesque with character, Melia's coral as the only signal,
photographs of the night the app sells.

## Colour

Source: `src/styles/global.css` (`:root` and `:root.theme-inv`). The palette comes from the dealer in
`design-taste-frontend` 2.5 (`start.mjs brand`), with Melia's brand coral substituted for its accent.

| Token | Value | Use |
|---|---|---|
| `--p-bg` | `#faf7f4` | Page ground, warm paper |
| `--p-surface` | `#edeae7` | Cards, the product screen, wells |
| `--p-ink` | `#1b1614` | Primary text |
| `--p-muted` | `#676260` | Secondary text, captions, labels |
| `--p-accent` | `#ff5a36` | **Fill only** — bars, indicators, the live badge |
| `--p-accent-ink` | `#111111` | Text on the accent fill |
| `--p-accent-text` | `#b52603` | **Accent as text on the light ground** |
| `--p-action` | `#ff5a36` | Primary button background |
| `--p-action-ink` | `#ffffff` | Primary button label |

Inverse ground, `:root.theme-inv` (the theme toggle):

| Token | Value |
|---|---|
| `--p-inv-bg` | `#1b1614` |
| `--p-inv-surface` | `#282320` |
| `--p-inv-ink` | `#faf7f4` |
| `--p-inv-muted` | `#9d9996` |
| `--p-inv-accent-text` | `#ffb39c` |

### The coral rule (measured, not assumed)

The accent carries two roles and they need two tokens. Verified ratios:

| Pair | Ratio | |
|---|---|---|
| `#FF5A36` as **text** on `#faf7f4` | 2.91 : 1 | fails AA — that is why `--p-accent-text` exists |
| `#B52603` as text on `#faf7f4` | 6.07 : 1 | passes |
| `#FFFFFF` on `#FF5A36` | 3.10 : 1 | passes AA **large** only (3:1) |
| `#FFB39C` as text on `#1b1614` | 10.40 : 1 | passes |
| `#FF5A36` as text on a dark ground | 5.52 : 1 | passes — the bright coral works on dark |

Current primary buttons are `#FF5A36` fill with a white 15px/500 label: **3.10:1, below AA for that
size by product decision.** Moving the fill to `#C9361A` gives 5.22:1 with the same white label.

## Typography

Source: `public/assets/system.css` (`--t-*`, `--font-*`) and `src/layouts/Base.astro` (the Google
Fonts link).

| Token | Value |
|---|---|
| `--font-display` | Bricolage Grotesque, system-ui, sans-serif |
| `--font-text` | Figtree, system-ui, sans-serif |
| `--display-weight` | 400 |
| `--display-tracking` | -0.03em |
| `--display-tracking-xl` | -0.04em |
| `--display-stretch` | 96% |

Scale, desktop:

| Token | Value |
|---|---|
| `--t-h1` | `clamp(38px, 3.24vw + 25.4px, 72px)` |
| `--t-h2` | `clamp(30px, 1.72vw + 23.3px, 48px)` |
| `--t-h3` | 24px |
| `--t-lead` | 18px |
| `--t-card` | 18px |
| `--t-body` | 16px |
| `--t-small` | 14px |
| `--t-label` | 13px |

Mobile overrides exist in the same file: `--t-h1` drops to `clamp(32px, 1.524vw + 26.06px, 48px)`
and `--t-h2` to `clamp(24px, .762vw + 21px, 32px)`.

## Spacing

Source: `public/assets/system.css`.

```
--s-1: 4px   --s-2: 8px   --s-3: 12px  --s-4: 16px  --s-5: 24px
--s-6: 32px  --s-7: 48px  --s-8: 64px  --s-9: 96px  --s-10: 128px
```

Layout: `--container: 1280px`, `--gutter: 24px`, `--card-gap: 24px`, `--card-pad: 24px`.

## Radius

Source: `public/assets/system.css`, `[data-radius="soft"]` — the page sets `data-radius="soft"` on
`<html>`.

| Token | Value |
|---|---|
| `--r-sm` | 8px |
| `--r-md` | 12px |
| `--r-lg` | 20px |
| `--r-btn` | 8px |

Chips and pills override to `999px` in `src/styles/global.css`; the product screen uses `28px`.

## Depth

No shadow tokens are declared. The system expresses depth through **borders and surface steps**
(`--p-surface` on `--p-bg`), which is the intended choice, not an omission. The one exception is
the product screen in `src/styles/global.css`:

```css
box-shadow: 0 24px 60px -28px color-mix(in oklab, var(--p-ink) 45%, transparent);
```

## Components

Source: `public/assets/system.css` (`system`), `public/assets/ui/cards.css`, and the local overrides
in `src/styles/global.css`.

- **Buttons** — one pair a page, set by `<html data-buttons="solid">`: `.btn--primary` is the action
  fill with the action ink; `.btn--secondary` is the ground with the ink and a strong border. Hover
  mixes toward the ink (`color-mix(in oklab, var(--action) 86%, var(--ink))`).
- **Chips** — `src/styles/global.css`: a pill, 1px border at 16% ink, `aria-pressed="true"` fills with
  the ink and takes the ground as text. Static wrapping row; the skill forbids carousels.
- **Cards** — `.card` from the kit plus `.zoom` for the 1.03 photo scale on hover.
- **Product screen** — `.screen`, `.screen__bar`, `.screen__live`, `.screen__vote`,
  `.screen__avatar` in `src/styles/global.css`: a CSS-built phone panel, 28px radius, the accent as
  the live badge.
- **Focus** — `:focus-visible` with a 2px outline; the accent-text colour, offset 2px.
- **Motion** — `public/assets/motion/motion.css`. 34 elements carry a named transition; every
  animation has a `prefers-reduced-motion` fallback in `src/styles/global.css`.

## Page rules this system serves

From `design-taste-frontend` 2.5, measured on the page:

- One section per screen: nine sections, all one screen tall at 1440 and 390; the plans section is
  the only two-screen one.
- One left/right edge set across every section.
- No caption under any image.
- Every visual renders at 1440, 1024, 768 and 390.
