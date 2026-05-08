---
name: TruthLab Kids Design System
colors:
  surface: '#f7fafb'
  surface-dim: '#d7dadb'
  surface-bright: '#f7fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f5'
  surface-container: '#ebeeef'
  surface-container-high: '#e5e9ea'
  surface-container-highest: '#e0e3e4'
  on-surface: '#181c1d'
  on-surface-variant: '#3e484b'
  inverse-surface: '#2d3132'
  inverse-on-surface: '#eef1f2'
  outline: '#6e797b'
  outline-variant: '#bec8cb'
  surface-tint: '#006876'
  primary: '#005c68'
  on-primary: '#ffffff'
  primary-container: '#0d7685'
  on-primary-container: '#c8f5ff'
  inverse-primary: '#80d3e3'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#fec65d'
  on-secondary-container: '#745200'
  tertiary: '#7b4610'
  on-tertiary: '#ffffff'
  tertiary-container: '#985d27'
  on-tertiary-container: '#ffe9da'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a0efff'
  primary-fixed-dim: '#80d3e3'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e59'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#f5be55'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77c'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a04'
  background: '#f7fafb'
  on-background: '#181c1d'
  surface-variant: '#e0e3e4'
typography:
  h1:
    fontFamily: Lexend
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
  h3:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Lexend
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system is anchored in the "Scholarly Lab" concept—a space that prioritizes discovery, clarity, and intellectual growth. It targets a broad age range (6-17), necessitating a visual language that is sophisticated enough for teenagers while remaining accessible and inviting for younger children. 

The style is **Modern Corporate** with a **Minimalist** influence. It utilizes heavy whitespace to reduce cognitive load and focuses on structural integrity rather than decorative elements. By avoiding "childish" tropes (like primary red/yellow/blue or bubbly shapes) and "sci-fi" cliches (like dark modes with neon glows), the design system establishes a trustworthy, academic environment that feels like a professional research tool tailored for the next generation.

## Colors
This design system employs a "Light Lab" palette designed for high legibility and long-term focus. 

- **Primary (Scholarly Teal):** A deep, intellectual teal used for core branding, primary actions, and active states. It suggests stability and wisdom.
- **Secondary (Muted Gold):** Used sparingly for progress indicators, achievements, and "lightbulb" moments.
- **Success (Soft Sage):** A natural, calming green for positive feedback and completion states.
- **Backgrounds:** A hierarchy of off-whites and very light grays (`#F9FAFB` to `#F3F4F6`) creates subtle containment without the harshness of pure white.
- **Neutrals:** Professional slate grays are used for typography to maintain high contrast while being softer on the eyes than pure black.

## Typography
**Lexend** is the primary typeface for this design system. Specifically engineered to reduce visual stress and improve reading proficiency, it is ideal for an educational platform. 

For multilingual support:
- **Latin/German:** Use Lexend directly.
- **Arabic/Korean:** When Lexend is unavailable for these scripts, fallback to **Noto Sans** (Arabic/KR) to maintain the clean, sans-serif "lab" aesthetic and ensure consistent x-heights across scripts.
- **RTL Considerations:** Line heights are slightly increased for Arabic scripts to accommodate deeper descenders and diacritics without crowding the layout.

## Layout & Spacing
The design system uses an **8px-based fluid grid** to ensure mathematical harmony across all screen sizes. 

- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile. 
- **Spaciousness:** Generous margins (32px+) and gutters (24px) are mandatory to maintain the "Light Lab" feeling, preventing the UI from feeling cluttered or overwhelming.
- **Directionality:** All spacing and layout logic must be mirrored for Arabic (RTL). Padding-left becomes padding-right, and directional icons (arrows) must be flipped, except for universal symbols like clocks or progress bars.

## Elevation & Depth
Depth is conveyed through **low-contrast outlines** and **tonal layering** rather than heavy shadows. This maintains a flat, modern "paper-on-table" lab aesthetic.

- **Level 0 (Floor):** Main background (`#F9FAFB`).
- **Level 1 (Cards/Containers):** Pure white surfaces with a 1px border in a light gray (`#E5E7EB`).
- **Level 2 (Interactive/Floating):** Use a very soft, diffused shadow (0px 4px 12px, 5% opacity) only for elements that require immediate attention, such as dropdowns or active modals.
- **Active States:** Subtle inset shadows or a 2px colored border (Primary Teal) indicate focus without adding visual bulk.

## Shapes
The shape language is defined by "Soft Precision." 

Elements use a standard **8px radius** (`rounded-md`) for smaller components like buttons and input fields, and a **16px radius** (`rounded-lg`) for larger containers and cards. This balance ensures the UI feels approachable and "friendly" (rounded) but stays "professional" (not pill-shaped or circular). 

Icons should follow this logic, utilizing rounded terminals and consistent stroke weights to match the typography.

## Components
- **Buttons:** 
    - *Primary:* Solid Teal background with white text. 8px radius.
    - *Secondary:* Ghost style with Teal border and text. 
- **Cards:** White background, 16px radius, 1px light gray border. No shadow in default state.
- **Language Selector:** A clean, borderless dropdown using ISO codes alongside native script names (e.g., "English," "العربية," "한국어").
- **Step Indicators:** Horizontal sequence of 12px circles. Completed steps use the Success Sage; current steps use a Teal ring; upcoming steps use a light gray fill.
- **Input Fields:** 8px radius, 16px internal padding. Labels are always positioned above the field for maximum legibility in both RTL and LTR contexts.
- **Progress Bars:** Thin, 8px tall bars with rounded caps. Use Muted Gold for current progress to signify "value" and "achievement."