---
name: Urban Dusk
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5b403a'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#8f7069'
  outline-variant: '#e3beb6'
  surface-tint: '#b52603'
  primary: '#b52603'
  on-primary: '#ffffff'
  primary-container: '#ff5a36'
  on-primary-container: '#5a0c00'
  inverse-primary: '#ffb4a3'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#5b598c'
  on-tertiary: '#ffffff'
  tertiary-container: '#908dc4'
  on-tertiary-container: '#282555'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0600'
  on-primary-fixed-variant: '#8c1900'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#e3dfff'
  tertiary-fixed-dim: '#c4c1fb'
  on-tertiary-fixed: '#181445'
  on-tertiary-fixed-variant: '#444173'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
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

This design system establishes an atmospheric, high-energy, and modern aesthetic tailored for urban social discovery, night-out coordination, and dynamic group planning. The design merges the warmth of twilight social gatherings with the sharp precision of modern urban navigation.

The aesthetic blends **Modern Geometric Clarity** with **Atmospheric Layering**:
- **Tone:** Electric, social, spontaneous, yet structurally grounded and reliable for coordination.
- **Audience:** Active urbanites, event organizers, and social groups seeking frictionless planning alongside immersive event discovery.
- **Visual Feel:** High-contrast structural layouts, rich nocturnal indigos balanced against warm radiant corals, clear micro-interactions, and pristine legibility under varying lighting conditions.

## Colors

The color palette captures the shift from late afternoon energy to late-night urban activity while enforcing strict WCAG AA contrast standards across all functional states.

### Core Swatches
- **Primary Coral (`#FF5A36`):** The core active accent used strictly for top-tier calls-to-action, key booking triggers, active states, and focal iconography. Paired with white text (`#FFFFFF`) or deep indigo text for accessibility.
- **Deep Night Indigo (`#0F172A`):** The primary anchor color for headers, body typography, dark hero segments, and navigation shells.
- **Secondary Midnight Indigo (`#1E1B4B`):** Provides elevation for dark modal frames, contextual bottom sheets, and nocturnal event containers.
- **Neutral Canvas (`#F8FAFC`):** The primary page backdrop—a crisp, cool-slate off-white that prevents eye fatigue while giving prominence to imagery.
- **Surface Crisp (`#FFFFFF`):** Base layer for standard interactive cards, modular widgets, and form groups.
- **Surface Muted (`#F1F5F9`):** Subordinate card layer, inactive pill tracks, and nested metadata blocks.

### Contextual Accents
- **Live Amber (`#FBBF24`):** Restricted solely to live-attendance pulses, imminent start times, and trending heat indicators.
- **Map & Venue Cyan (`#38BDF8`):** Restricted to geospatial pins, live location beacons, transit markers, and interactive map clusters.

## Typography

Typography relies entirely on **Plus Jakarta Sans** to deliver crisp geometric clarity across crowded event feeds, real-time rosters, and ticket flows. 

- **Display & Headlines:** Bold to extra-bold weights (`700` and `800`) are used with tighter tracking to inject rhythmic modern presence into event names, countdowns, and social titles.
- **Body:** Regular weights (`400`) ensure optimal readability against both light surfaces (`#F8FAFC`) and dark night surfaces (`#0F172A`).
- **Labels & Badges:** Semibold to bold (`600` and `700`) weights with uppercase transforms reserved only for micro-tags (`label-sm`), ensuring high scannability for categories, time slots, and pricing details.

## Layout & Spacing

The layout model is driven by an 8pt architectural rhythm, utilizing a flexible responsive grid that smoothly shifts from handheld discovery to widescreen command dashboards.

- **Mobile (< 768px):** 4-column fluid layout with `1rem` outer canvas margin and `1rem` gutters. Horizontal scrolling swimlanes utilize negative margin bleeds for event discovery cards.
- **Tablet (768px - 1024px):** 8-column layout with `2rem` margins and `1.5rem` gutters. Split screens pair map viewports alongside scrollable event feeds.
- **Desktop (> 1024px):** 12-column layout with `3rem` margins and `2rem` gutters, locked to a max-width container of `1280px` for optimal eye-tracking during group voting and split-schedule planning.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of crisp borders and subtle nocturnal ambient tinting instead of heavy, muddy dropshadows:

1. **Base Flat Layer (`0dp`):** Surface items resting on canvas (`#F8FAFC`) use subtle borders (`1px solid #E2E8F0`).
2. **Raised Surfaces (`2dp`):** Event cards and group lists introduce a delicate ambient shadow (`0 2px 8px -2px rgba(15, 23, 42, 0.06)`) paired with `1px solid #E2E8F0`.
3. **Floating Overlays & Menus (`4dp`):** Interactive menus, dropdown filters, and floating bottom navigation bars employ `0 12px 24px -6px rgba(15, 23, 42, 0.12)` with `1px solid rgba(226, 232, 240, 0.8)`.
4. **Night Mode Hero & Sheets:** Elements utilizing `#0F172A` or `#1E1B4B` feature internal micro-borders (`1px inset rgba(255, 255, 255, 0.08)`) to maintain dimensional definition against dark backdrops.

## Shapes

The design system implements a deliberate two-tier shape syntax:

- **Structural Containers & Cards:** Configured with a `14px` to `16px` border radius (`rounded-lg` token at `1rem`), providing a clean architectural frame for imagery, schedules, and maps.
- **Interactive Controls, Search & Metadata:** Fully pill-shaped (`9999px`) styling strictly enforced for all action chips, category filters, global search inputs, user presence indicators, and status badges. This visual contrast immediately distinguishes touch targets from content containers.

## Components

### Buttons & CTAs
- **Primary Button:** `#FF5A36` background, solid white text, full pill radius (`9999px`), internal padding `12px 24px`. On hover, transitions to `#E04826`.
- **Secondary Dark Button:** `#0F172A` background, solid white text, full pill radius. Used for night-mode contexts and secondary high-level actions.
- **Ghost / Tertiary Button:** Transparent surface with `1px solid #CBD5E1`, `#0F172A` typography. Active hover fills with `#F1F5F9`.

### Chips & Filters
- Compact pill controls (`height: 36px`, padding `0 16px`) with `9999px` radius.
- **Inactive:** `#F1F5F9` background, `#475569` text, zero border.
- **Selected:** `#0F172A` background, `#FFFFFF` text. Filter counters utilize small coral badges (`#FF5A36`).

### Input Fields & Search Bars
- Global search features a continuous pill shape (`9999px`), `#FFFFFF` or `#F1F5F9` background, `1px solid #E2E8F0`, and leading coral or slate icons.
- Focused inputs replace the border with a sharp `1.5px solid #FF5A36` with zero outer fuzzy halo.

### Cards
- **Event Card:** Border radius `16px`, `#FFFFFF` surface, `1px solid #E2E8F0`. Features a 16:9 media frame at the top with inner padding of `16px` below.
- **Group Activity / Voting Card:** Border radius `14px`, `#F1F5F9` surface with nested participant avatars and embedded segmented vote tracks.

### Checkboxes & Radio Controls
- Checkboxes use `6px` rounded corners; radio controls use full circular tokens.
- Selected state adopts `#FF5A36` fill with pure white glyphs. Inactive state features `1.5px solid #94A3B8`.

### Specialized Platform Components
- **Live Indicator Badge:** Pill shape (`9999px`), background `#FEF3C7`, text `#B45309`, paired with a pulsing `#FBBF24` micro-dot.
- **Map Marker Clusters:** Circular `#0F172A` badge with `#38BDF8` perimeter rings, displaying real-time group headcount numbers in bold `label-sm`.