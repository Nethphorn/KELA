---
name: KELA Playful Math
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3f484c'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6f787d'
  outline-variant: '#bec8cd'
  surface-tint: '#006781'
  primary: '#005a71'
  on-primary: '#ffffff'
  primary-container: '#0e7490'
  on-primary-container: '#d3f1ff'
  inverse-primary: '#81d1f0'
  secondary: '#b4136d'
  on-secondary: '#ffffff'
  secondary-container: '#fd56a7'
  on-secondary-container: '#600037'
  tertiary: '#764900'
  on-tertiary: '#ffffff'
  tertiary-container: '#965f00'
  on-tertiary-container: '#ffe9d4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b9eaff'
  primary-fixed-dim: '#81d1f0'
  on-primary-fixed: '#001f29'
  on-primary-fixed-variant: '#004d62'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 34px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 26px
  title-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
  math-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.875rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system crafts a warm, gamified, and comforting math adventure for young learners. The visual identity rejects sterile, clinical EdTech patterns in favor of tactile joy, soft physical presence, and encouraging micro-interactions. Drawing inspiration from contemporary digital toys, character wardrobe hubs, and dual-language education (Khmer and English), the UI treats mathematics as a world to explore rather than a test to endure.

The design movement balances **Tactile / Playful Skeuomorphism** with **Modern Soft Minimalism**:

- Generous, rounded surfaces mimic rounded wooden learning blocks and tactile candy tablets.
- Deep, friendly tones create high legibility without harsh black-and-white starkness.
- Warm pastel tints provide soothing non-intimidating backdrops, paired with lively reward accents that celebrate small achievements.
- Interfaces feel bouncy, responsive, and physical through subtle press-down states, pill badges, and layered cards.

## Colors

The palette balances supportive, grounding base tones with distinct functional color roles mapped to emotional states:

- **Primary (`#0E7490` - Deep Ocean Teal / `#0284C7` - Sky Blue):** Represents active learning, focus states, and primary actions. It drives progression steps, active grade toggles, and main exercise buttons. Accompanied by `#E0F2FE` for soft atmospheric surfaces.
- **Secondary (`#EC4899` - Cheerful Bubblegum / `#F43F5E` - Rose Coral):** Drives the Avatar Studio, wardrobe item cards, customizations, and delight moments. Paired with soft pink tint `#FCE7F3` for background containers.
- **Tertiary (`#F59E0B` - Energetic Amber Gold):** Dedicated to reward loops: stars, coins, carrying-digit callouts, and active streak flames. Paired with warm amber tint `#FEF3C7`.
- **Success / Mastery (`#10B981` - Mint Sparkle / `#D1FAE5`):** Denotes 100% lesson completion, verified calculation steps, and correct answers.
- **Canvas & Neutral:**
  - Base Background: Warm Cream Canvas (`#FAF8F5`) and Layered Off-White (`#F5F1EB`).
  - Card & Surface: Crisp White (`#FFFFFF`).
  - Text & Outlines: Friendly Slate Navy (`#0F172A` primary text, `#334155` secondary text, `#E2E8F0` soft pill outlines).

## Typography

Plus Jakarta Sans provides balanced geometric structure with soft, open terminals that feel naturally welcoming to young learners while maintaining crisp optical clarity.

### Dual-Language Typesetting (Khmer & English)

When pairing English text with Khmer script (e.g., _Kantara_ or _Siemreap_ font pairings in native implementations):

- Khmer scripts require ~15-20% greater vertical line-height to accommodate deep sub-consonants and superscript vowel marks.
- Secondary English translations sit directly underneath or alongside in `body-sm` (`12px`) with reduced opacity (`#64748B`), establishing effortless visual hierarchy.
- Math equations utilize tabular figures (`font-variant-numeric: tabular-nums`) to ensure strict vertical column alignment for addition carries, subtractions, and place-value charts.

## Layout & Spacing

The layout leverages a fluid 4-column structure on mobile devices, expanding to an 8-column layout on tablets and a 12-column split canvas on desktop/tablet-landscape screens (featuring the sticky 3D avatar/mascot companion panel on the left and learning pathways on the right).

- **Touch Target Assurance:** Because small hands navigate mobile tablets and phones, interactive tap areas must adhere to a strict minimum bounding box of `48px x 48px`, regardless of visual icon size.
- **Rhythm & Safe Areas:** Vertical spacing between distinct quest sections uses `space-xl` (`2rem`). Internal card paddings use `space-lg` (`1.25rem`) to maintain breathable, uncluttered layouts that prevent cognitive fatigue during arithmetic exercises.

## Elevation & Depth

Elevation in this system eschews dark, muddy drop shadows. Instead, it relies on soft tinted ambient glows and chunky physical depth:

- **Level 0 (Flat / Sunk):** Applied to inactive inputs, scratchpads, and slot placeholders. Uses `#F1EFEA` fill with a `1px` subtle border `#E2DDD5`.
- **Level 1 (Resting Card):** Applied to lesson units and inventory cards. Pure white `#FFFFFF` surface with a gentle tinted drop shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.04), 0 2px 4px -1px rgba(15, 23, 42, 0.02)` and a crisp `1px` border in `#F1EFE9`.
- **Level 2 (Chunky Interactive / Active Button):** 3D button effect featuring a physical bottom border: a solid `3px` offset border in a darker shade of the primary color (e.g., `#094E62` under `#0E7490`), giving a pushable button look.
- **Level 3 (Reward / Floating Modals):** Used for micro-reward badges, streaks, and popover AI coach hints. Utilizes a warm amber or teal diffused glow: `0 12px 28px -4px rgba(245, 158, 11, 0.22)`.

## Shapes

A pill-shaped, ultra-friendly shape geometry rules the design system:

- **Outer Cards & Hero Containers:** Utilize `rounded-3xl` (`24px` to `28px`) to look soft, safe, and toy-like.
- **Badges, Tags, and Action Buttons:** Full pill geometry (`border-radius: 9999px`) provides a playful tactile feel.
- **Math Place-Value Bubbles:** Perfect circles (`w-10 h-10` or `w-12 h-12`) in carrying columns for tens and ones, providing an intuitive slot-filling target for interactive touch drags.

## Components

### Buttons & CTAs

- **Chunky Action Button:** Full pill shape, high-contrast text (`#FFFFFF`), solid primary `#0E7490` or wardrobe pink `#EC4899`. Uses an inset/offset bottom edge `box-shadow: 0 4px 0 0 #074758` for a mechanical toy button look. On `:active`, transforms translateY(3px) with shadow reduced to 1px.
- **Pill Nav & Filter Chips:** Rounded pill capsules (`px-4 py-2`). Unselected state features white or soft cream fill with subtle border `#E2E8F0`. Selected state transforms into high-contrast fill (Teal `#0E7490` or Pink `#EC4899`) with white text and icon.

### Cards & Learning Path Tiles

- **Quest & Unit Cards:** Crisp `#FFFFFF` background, rounded-3xl (`24px`), padded with `1.25rem`. Header features a distinctive icon block (e.g., `+`, `-`, `×`, or mini character head) encased in a rounded-2xl pastel chip (`#E0F2FE` or `#FEF3C7`).
- **Progress Trackers:** Custom 2-layer rounded pill bar (`h-3.5`). Inactive track uses `#F1EFEA`; active fill uses gradient `#10B981` (mint) or `#0E7490` (teal), finished with an animated sparkle or completion percentage flag.

### Gamified Micro-Rewards & Stat Badges

- **Currencies & Counters:** Pill badges with off-white or light gold background (`#FEF3C7`), featuring crisp emoji or 3D vector icons (coins, stars, streaks) flanked by bold numerical weights (`#B45309`).
- **Dual-Language Badge:** High-density pill featuring a dual toggle format (`KH | EN`), using bold sans-serif styling with subtle divider borders to provide quick language switching.

### Exercise & Carrying Math Matrix

- **Vertical Carrying Columns:** Clean, aligned calculation boxes. The active carry digit appears in an amber circle (`#F59E0B`) with micro carry notation, while the solved column glows in fresh mint green (`#10B981`) upon correct input.
- **AI Coach Bubble:** Friendly chat-bubble card housed in `#FFFFFF` with avatar thumbnail, warm greeting text, and pre-baked question pills ("Give me an example", "Speak").
