---
name: Urban Dusk Dark
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1A233A'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#e3beb6'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#aa8982'
  outline-variant: '#5b403a'
  surface-tint: '#ffb4a3'
  primary: '#ffb4a3'
  on-primary: '#630f00'
  primary-container: '#ff5a36'
  on-primary-container: '#5a0c00'
  inverse-primary: '#b52603'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009dd3'
  on-tertiary-container: '#002f42'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0600'
  on-primary-fixed-variant: '#8c1900'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
  surface-deep: '#090D16'
  surface-canvas: '#0F172A'
  surface-card: '#131B2E'
  surface-container-elevated: '#1E293B'
  border-subtle: '#2A3756'
  border-muted: '#334155'
  brand-coral-hover: '#FF6B4A'
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
  accent-live-amber: '#FBBF24'
  accent-map-cyan: '#38BDF8'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system translates the kinetic social energy of urban exploration into an immersive, dark-mode-first environment. Engineered for night-out coordination, event discovery, and dynamic group decision-making, the aesthetic pairs the moody depth of nocturnal cityscapes with high-chroma illumination.

The design movement mixes **Nocturnal Modernism** with **Atmospheric Precision**:
- **Tone:** Electric, immersive, discerning, and spontaneous yet mechanically structured for rapid social coordination.
- **Audience:** Urban night-lifers, social conveners, and cultural explorers navigating fast-moving itineraries under low-light real-world conditions.
- **Visual Feel:** Deep obsidian layers, glowing sunset-coral focal triggers, razor-sharp white typography, and luminous functional accents that mirror illuminated transit lines and venue lights against a nighttime skyline.

## Colors

The dark color system relies on high tonal separation between tiered slate surfaces, anchoring all views with strict WCAG AA contrast compliance while preserving an atmospheric nocturnal palette.

### Tonal Foundation
- **Deep Obsidian Canvas (`#090D16` / `#0F172A`):** The foundational viewport backdrops, reducing display glare and creating an infinite-black baseline.
- **Slate Surfaces (`#131B2E`, `#1A233A`, `#1E293B`):** Staged container layers that lift cards, lists, bottom sheets, and floating navigators away from the base background.
- **Structural Outlines (`#2A3756`, `#334155`):** Restrained, low-luminosity boundaries that preserve distinct container edges without creating visual noise.

### Brand & High-Utility Accents
- **Sunset Coral (`#FF5A36` / `#FF6B4A`):** The primary brand ignition color, reserved exclusively for primary actions, critical state switches, and primary badges. Paired with pure white (`#FFFFFF`) or obsidian text for uncompromising readability.
- **Text System (`#F8FAFC` & `#94A3B8`):** Pure cool white delivers crisp, authoritative headlines, while cool mid-slate gray provides effortless scanning for secondary metrics and descriptions.
- **Live Amber (`#FBBF24`):** Strictly deployed for live attendance pings, real-time ticket drops, and active status pulses.
- **Map Cyan (`#38BDF8`):** Reserved for geolocation tracking, map markers, route legs, and spatial navigation vectors.

## Typography

Typography relies on **Plus Jakarta Sans** for its balanced geometric structure, wide apertures, and clean digital rhythm across dense nighttime interfaces.

- **Display & Headlines:** Heavy weights (`700` and `800`) provide graphic weight against dark backgrounds. Tight letter-spacing prevents visual drift on illuminated displays.
- **Body:** Rendered in `400` weight with `#94A3B8` to maintain comfortable readability without visual vibration or halation.
- **Labels & Micro-Copy:** Expressed in `600` and `700` weights. `label-sm` utilizes uppercase tracking for event timestamps, badge metadata, and map overlay stats.

## Layout & Spacing

The layout is anchored on an 8pt metric system configured to handle fast context shifts between visual map feeds, vertical scheduling boards, and real-time participant voting sheets.

- **Mobile (< 768px):** 4-column fluid layout with `1rem` outer canvas margins and `1rem` gutters. Horizontal carousels use edge bleed margins (`-1rem`) to indicate continuous content depth.
- **Tablet (768px - 1024px):** 8-column responsive grid with `2rem` margins and `1.5rem` gutters. Split-pane layout surfaces interactive geospatial context alongside scrollable event lists.
- **Desktop (> 1024px):** 12-column layout with `3rem` margins and `2rem` gutters, contained within a max-width envelope of `1280px` for dense group coordination tools.

## Elevation & Depth

Visual hierarchy abandons traditional diffuse black drop shadows in favor of chromatic surface shifting, tonal layering, and delicate luminous outlines.

1. **Canvas Layer (`0dp`):** Deep Night Obsidian (`#090D16` / `#0F172A`) serves as the base plane.
2. **Resting Containers (`1dp`):** Surface cards sit at `#131B2E` with a `1px` stroke of `#2A3756`.
3. **Elevated Floating Layers (`2dp`):** Popovers, active dropdowns, and group modal views utilize `#1A233A` bordered with `#334155` and a soft ambient glow (`0 8px 24px -4px rgba(0, 0, 0, 0.45)`).
4. **Primary Brand Emittance:** High-priority CTAs and selected pill toggles cast a subtle radiant coral footprint (`0 4px 16px -2px rgba(255, 90, 54, 0.35)`), reinforcing touch targets in low ambient light environments.

## Shapes

The interface balances rigid architectural containment with pill-shaped interactive touch targets.

- **Structural Containers:** Cards, media viewports, and modal panes use a constant `16px` (`rounded-lg` / `1rem`) corner radius to create stable content envelopes.
- **Action Controls & Status Elements:** Buttons, search bars, category tags, and status chips use full pill geometry (`9999px`), contrasting directly against structural cards.

## Components

### Buttons & CTAs
- **Primary Action:** Full pill shape (`9999px`), `#FF5A36` background, `#FFFFFF` text in `label-lg` weight, with an inner padding of `12px 24px`. Transitions to `#FF6B4A` on hover with a `0 4px 16px rgba(255, 90, 54, 0.35)` glow.
- **Secondary Elevated Button:** Full pill shape, `#1E293B` background, `1px solid #334155`, `#F8FAFC` text. Hover shifts background to `#2A3756`.
- **Ghost Button:** Full pill shape, transparent background, `1px solid #2A3756`, `#94A3B8` text, shifting to `#F8FAFC` on hover.

### Chips & Filters
- Compact height (`36px`), full pill geometry (`9999px`), padding `0 16px`.
- **Default / Inactive:** Background `#1A233A`, border `1px solid #2A3756`, `#94A3B8` typography.
- **Selected:** Background `#FF5A36`, `#FFFFFF` typography, zero outline. Active counters or badges appear in `#FFFFFF` with `#FF5A36` text.

### Input Fields & Search Bars
- Continuous pill shape (`9999px`), `#131B2E` background, `1px solid #2A3756`, `#F8FAFC` typography, `#94A3B8` placeholder styling.
- Leading icons colored with `#94A3B8`; active focus applies `1.5px solid #FF5A36` without outer blur.

### Cards & Content Modules
- **Event & Venue Card:** `16px` radius, `#131B2E` background, `1px solid #2A3756`. Top region features media with a dark gradient overlay; bottom region uses `16px` padding for titles, metadata, and avatars.
- **Group Activity / Voting Pod:** `16px` radius, `#1A233A` background, `1px solid #334155`. Nested progress meters utilize `#FF5A36` track fills against `#0F172A` troughs.

### Checkboxes & Radio Controls
- Checkboxes use `6px` rounded corners; radios maintain standard circular forms.
- Unchecked state features a `1.5px solid #334155` border against `#131B2E`. Checked state fills with `#FF5A36` with a white checkmark icon.

### Night Navigation & Specialized Badges
- **Live Indicator Badge:** Full pill shape (`9999px`), `#1A233A` background, `1px solid rgba(251, 191, 36, 0.3)`, `#FBBF24` label, accompanied by a pulsing `6px` `#FBBF24` dot.
- **Map Beacons & Indicators:** `#0F172A` circular core with a `2px solid #38BDF8` ring and glowing backdrop effect (`0 0 12px rgba(56, 189, 248, 0.4)`).