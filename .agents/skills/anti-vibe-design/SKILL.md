---
name: anti-vibe-design
description: Enforce production-grade design-system discipline and eliminate the generic "AI-generated / vibe-coded" look in application interfaces. Use when building, reviewing, or polishing UI and you need to check palette discipline (neutral-first, one brand color, functional-only accents), typographic hierarchy and over-bolding, surfaces and depth (1px borders over heavy shadows, no colored glow), uniform border-radius tiers, and real-world UX patterns (one primary CTA per section, 8pt grid, realistic content and states). Also use when a UI "looks AI-generated", "looks templated", or needs a coherence audit against a token system.
license: MIT
---

# Anti-Vibe Design

Role: Senior Product Designer & Design System Architect.

Objective: eliminate the generic "AI-generated / vibe-coded" look from application
interfaces and raise prototypes to production-grade, polished, cohesive software.

The failure mode this skill prevents is **decoration standing in for decisions**:
color used to add interest instead of to encode meaning, depth used instead of
hierarchy, and emphasis scattered everywhere so nothing reads as primary.

## 1. Palette discipline

- **Max 1 primary brand color + 1 complementary surface accent.** A third accent
  must justify itself as a functional state or it does not ship.
- **Neutral-first.** ~80% of the interface must be neutral gray/zinc/slate. Color
  is the exception that marks one thing, not the texture of the page.
- **Forbidden outright:**
  - arbitrary colored card backgrounds (a card changes its background color for
    variety rather than for meaning)
  - random pastel icon wrappers (a mint/peach/lavender rounded square behind each
    icon, one hue per feature, chosen by position rather than by semantics)
  - unmotivated gradient borders, gradient washes, and gradient text used as
    decoration
  - colored glow / neon drop shadows (`shadow-brand/30`) — shadow is neutral or it
    is a light source that does not exist in the interface
- **Functional-only accents.** Green, red, yellow are reserved for status: success,
  error, warning. They never appear as a decorative icon tint, a "fun" badge, or a
  category color in a nav chip.
- **Check before approving any color:** what decision does this encode? If the
  answer is "it looked empty", remove it and fix the spacing instead.

## 2. Typography and hierarchy

- Use a clean, modern, system-friendly stack: Inter, Plus Jakarta Sans, Geist,
  SF Pro, or the platform UI stack. One family is usually enough; two only if
  clearly distinct in role.
- **Enforce exactly one step per level:** Display title → H2 section → Body →
  Caption/Badge. No level skipping, no two different sizes doing the same job on
  one screen.
- **Avoid over-bolding.** Weight contrast should indicate priority, not just
  color. If everything is `font-bold`/`font-extrabold`, nothing is emphasized.
  Reserve the heaviest weight for the display title; body stays regular; labels
  use one step of contrast, not maximum.
- Emphasis comes from weight, size, and space — not from adding a color.

## 3. Surfaces and depth

- **Prefer subtle 1px border lines over heavy drop shadows.** Borders read as
  structure; shadows read as floating.
- If a shadow is needed, use neutral, layered, realistic shadows (offset + soft
  blur, near-black at low alpha). Never colored glow.
- **Uniform border-radius across similar elements:**
  - cards: 12–16px
  - inputs and buttons: 8–10px
  - badges / status pills: full pill (9999px)
  Same class of element, same radius. A 12px button next to a 16px button in the
  same row is a defect.

## 4. Real-world UX/UI patterns

- Ground layouts in **realistic content**: real lengths, real image aspect ratios,
  real names. Placeholder-ish content hides layout failure.
- Design **states**: default, hover, active/focus, empty, error, loading. A screen
  with only the happy path is not designed.
- **Consolidate actions.** One primary CTA per viewport section. Secondary actions
  are outline, ghost, or text buttons — never a second filled primary competing
  with the first.
- Respect white space and the **8pt grid** for spacing, sizing, and rhythm. Prevent
  clutter by removing elements, not by shrinking everything.

## Review procedure

Run these as one pass over the built result, not as intentions:

1. **Inventory the color.** List every non-neutral value and its purpose. Every
   item whose purpose is not "brand identity" or "functional state" is a finding.
2. **Inventory the radii and shadows.** Group by element class. Any class with
   more than one radius, or any shadow carrying hue, is a finding.
3. **Inventory the weights.** Any view with more than two heading weights, or a
   body weight at or above the label weight, is a finding.
4. **Count primary CTAs per section.** More than one filled button per viewport
   section is a finding.
5. **Check the empty and error states exist.**

Report findings as `element → rule violated → concrete fix`. Do not soften a
finding into a preference; either it encodes meaning or it does not.

## Scope note

A pinned brand brief, an approved design export, or an existing product design
system outranks this skill's defaults. When the brief pins an aesthetic, apply the
rules as a coherence check *within* that world (radii tiering, weight discipline,
accent discipline) and report conflicts instead of silently restyling the product.
