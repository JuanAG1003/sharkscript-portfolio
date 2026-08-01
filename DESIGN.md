---
name: Cyber-Minimalist Portfolio
colors:
  surface: '#0e1416'
  surface-dim: '#0e1416'
  surface-bright: '#343a3c'
  surface-container-lowest: '#090f11'
  surface-container-low: '#161d1e'
  surface-container: '#1a2122'
  surface-container-high: '#242b2d'
  surface-container-highest: '#2f3638'
  on-surface: '#dde4e5'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dde4e5'
  inverse-on-surface: '#2b3233'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffd6a3'
  on-tertiary: '#462b00'
  tertiary-container: '#ffb13b'
  on-tertiary-container: '#6e4600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#0e1416'
  on-background: '#dde4e5'
  surface-variant: '#2f3638'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  section-gap: 96px
  card-padding: 32px
---

## Brand & Style

The design system is engineered for a high-end software engineer portfolio, projecting technical mastery and architectural precision. It targets recruiters and engineering managers who value clarity over clutter. 

The aesthetic is **Glassmorphism-Corporate Hybrid**: it utilizes the depth and visual interest of modern tech trends while maintaining the structural integrity of professional enterprise tools. The mood is focused and "dark-mode first," evoking a sophisticated integrated development environment (IDE) feel. It relies on subtle glows and translucent surfaces to guide the eye without overwhelming the content.

## Colors

The palette is rooted in a deep, nocturnal base to ensure high contrast for code snippets and technical data.

- **Primary (Cyan-400):** Used for interactive states, key borders, and focused highlights. It represents the "energy" of the developer.
- **Secondary (Slate-400):** Reserved for supporting text and non-interactive UI elements to maintain a clean hierarchy.
- **Accent (Lime-300):** A high-visibility color used sparingly for success states, "Open to Work" badges, or primary Call-to-Action (CTA) buttons.
- **Neutrals:** The background uses a near-black Navy. Surfaces utilize semi-transparent Slate/Zinc tones to achieve the glass effect.
- **Text:** Soft white (#f8fafc) is used for body copy to prevent the eye strain associated with pure #ffffff on dark backgrounds.

## Typography

This design system employs a three-font strategy to balance character with utility:

1. **Hanken Grotesk (Headlines):** A sharp, contemporary sans-serif that feels engineered and modern.
2. **Inter (Body):** Chosen for its exceptional legibility at small sizes, perfect for project descriptions and resumes.
3. **JetBrains Mono (Labels/Code):** Used for technical metadata, tags, and code blocks to reinforce the developer persona.

Keep line lengths for body text between 45-75 characters to maximize readability for recruiters skimming the page.

## Layout & Spacing

The layout follows a **Fluid Grid** model with generous vertical breathing room to separate distinct projects and experience blocks.

- **Desktop:** 12-column grid with a 1200px max-width container.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** Single column with 16px side margins.

Spacing follows a 4px baseline, but utilizes larger "step-ups" (e.g., 64px, 96px) between sections to create a sense of premium editorial space. Cards in the project gallery should use a Masonry or rigid grid depending on the content density.

## Elevation & Depth

Hierarchy is established through **Backdrop Blurs** and **Tonal Layering** rather than traditional heavy shadows.

- **Level 1 (Background):** Deepest Navy (#0a0f1a).
- **Level 2 (Cards/Modules):** `rgba(15, 23, 42, 0.6)` with a 12px backdrop-blur and a 1px border of `rgba(255, 255, 255, 0.1)`.
- **Level 3 (Hover States/Modals):** Increased opacity and a subtle primary-colored outer glow (cyan) to indicate interactivity.
- **Glows:** Use `box-shadow: 0 0 20px rgba(34, 211, 238, 0.15)` for active project cards or primary buttons.

## Shapes

The design system uses an exaggerated roundedness to soften the "tech" edge and make the UI feel approachable.

- **Standard Elements:** 0.75rem (Buttons, small inputs).
- **Cards & Containers:** 1.5rem to 2rem (The "2xl/3xl" look requested).
- **Outer Wrappers:** Use the largest radius (32px) for the main project display containers to create a distinct, encapsulated "app" feel within the browser.

## Components

### Buttons
- **Primary:** Background Cyan-400, text Navy, 0.75rem radius. Bold Hanken Grotesk.
- **Ghost:** Transparent background, 1px Cyan-400 border, Cyan-400 text. Use for secondary links like "View Source."

### Project Cards
- Must feature a `2xl` rounded corner. 
- Apply a `1px` top-and-left light stroke to simulate light hitting a glass edge. 
- Headlines inside cards should use Hanken Grotesk Medium.

### Tech Tags (Chips)
- Use JetBrains Mono. 
- Background: `rgba(255, 255, 255, 0.05)`. 
- Border: 1px Slate-800. 
- These should be small and unobtrusive.

### Input Fields
- Dark background (#0f172a), subtle 1px border. 
- Focus state: Border changes to Cyan-400 with a soft glow.

### Navigation Bar
- A floating "dock" style at the top or bottom of the screen. 
- Heavy glassmorphism (20px blur) and rounded-full (pill) shape.