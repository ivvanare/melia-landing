# tasteskill 2.5 · Melia

**Kind:** product · site-kind other (photographs and type, no shaders).
**Direction:** warm paper (#faf7f4), Bricolage Grotesque with Figtree, Melia coral as the action.
**Idea:** the page shows the product doing its one job — the live group vote — on the first screen.

## Measured against the skill's house rules

| Rule | Result |
|---|---|
| 3 · one section per screen | 9 sections; all 1.0 screens at 1440 and 390, one at 2.6 on tablet |
| 4 · equal left/right edges | 1 edge set across all 9 sections at every width |
| 5 · hover motion | 34 elements with named transitions, 4 photo-zoom frames |
| 1 · no caption under an image | none |
| 2 · every visual renders | no empty ground; 6 photographs + the product screen |

## Scripts
The docs describe v2.1 (`lint.mjs`, `inspect.mjs`); this install is **v2.5** and ships
`consistency.mjs` + `shoot.mjs` instead. `consistency.mjs` returns no output in this
environment, so the rules above were measured directly with Playwright at 1440, 768 and 390.
