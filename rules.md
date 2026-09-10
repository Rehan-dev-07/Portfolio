---
theme: Apex Engineering
variant: Technical Blueprint / High-Performance Dark
lifecycle_phases: 5
palette:
  surface: '#0d150f'
  primary: '#0F1115'
  secondary_accent: '#E63946'
  tertiary_blueprint: '#457B9D'
  on_surface_text: '#dce5d9'
typography:
  headings: Space Grotesk
  body: Inter
  telemetry: JetBrains Mono
spacing_system: 8-point grid (4px - 96px)
border_radius: 0px (strict sharp corners)
---

# Build Rules

> **Design Theme**: [Apex Engineering](file:///c:/Users/ishan/Desktop/Portfolio/DESIGN.md) — Precision Technical Blueprint & High-Performance Interface  
> **Lifecycle Governance**: Strict 5-Phase Engineering Quality Standards (Phases 1 through 5)

## Content
- **Truthful & Grounded**: Use only real, verified information sourced from [portfolio.txt](file:///c:/Users/ishan/Desktop/Portfolio/portfolio.txt) and verified profile records.
- **Zero Filler Policy**: If any section data (such as specific project links, descriptions, or images) is not present in [portfolio.txt](file:///c:/Users/ishan/Desktop/Portfolio/portfolio.txt), **leave the section/placeholder empty** and explicitly flag what is missing. Never generate synthetic data, mock filler text, or fake metrics.
- **Tone of Voice**: Curious, confident, honest, and builder-focused (*"I build software, explore intelligent technologies, and continuously learn through new challenges"*).
- **No Overstated Claims**: Never claim mastery over technologies that are only being learned. Clearly distinguish between working proficiency and active exploration.
- **Evidence Over Assertions**: Let technical projects and working code carry credibility rather than buzzwords or self-congratulatory claims.

## Design
- **Aesthetic Identity**: "Apex Engineering" — precision technical blueprint meets high-performance software interface.
- **Shape Language**: **Strict 0px border radius** on all containers, buttons, cards, and input fields. Corners must remain sharp 90-degree angles.
- **Color Palette (Default Dark System)**:
  - Surface Foundation: `#0d150f`
  - High-Voltage Accent / Secondary: `#E63946` / `#ad0224` (reserved strictly for primary actions and key focal triggers)
  - Blueprint Guide / Tertiary: `#457B9D` / `#98cdf2` (metadata, tags, borders)
  - Surface Neutral Text: `#dce5d9` (high legibility, WCAG AA compliant >= 4.5:1 ratio)
- **Typography Hierarchy**:
  - Headings: **Space Grotesk** (bold, geometric, architectural weight 600–700)
  - Body: **Inter** (clean, neutral, readable at small sizes, weight 400)
  - Telemetry / Labels: **JetBrains Mono** (uppercase, tracking 0.05em, weight 500)
- **Prohibited Aesthetics (Strictly AVOID)**:
  - NO large gradient backgrounds.
  - NO rows of three identical generic cards.
  - NO glassmorphism / glass-effect panels with heavy blur.
  - NO decorative floating abstract shapes or generic canvas blobs.
  - NO oversized headings used purely for decoration.
  - Never allow certifications to overpower the prominence of Projects.

## Responsive Behaviour
- **12-Column Grid**: Structure all main sections within a fluid 12-column grid layout with 24px gutters and 32px standard margins (scaling down to 16px on mobile viewports).
- **Airy Spacing Cadence**: Maintain structured vertical rhythms using design system tokens:
  - `space-2xs`: 4px | `space-xs`: 8px | `space-sm`: 16px | `space-md`: 24px | `space-lg`: 32px | `space-xl`: 64px | `space-2xl`: 96px
- **Mobile-First Accessibility**:
  - The Hero call-to-action button ("View My Projects") must be comfortably reachable within single-thumb reach at phone widths (320px–420px).
  - Minimum interactive touch target size: 44px × 44px.
  - No horizontal scrolling on any viewport width.

## Development (Tech Stacks)
- **Framework**: React (Vite + React).
- **Styling**: Pure Vanilla CSS (`index.css` / `App.css`) using CSS Custom Properties mapped directly to the design tokens in `DESIGN.md`. No Tailwind CSS.
- **Interactivity**: React state and event hooks for interactions, smooth scrolling, and accessible focus management.
- **Accessibility (a11y)**: Proper landmark regions (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`), valid `aria` attributes where applicable, and high-visibility keyboard focus rings (blueprint cyan).
