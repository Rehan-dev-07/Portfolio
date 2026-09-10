---
theme: Apex Engineering
variant: Technical Blueprint / High-Performance Dark
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
lifecycle:
  total_phases: 6
  status: Completed (Phases 1-6 Fully Built & Verified)
---

# Phase-Wise Implementation Plan (Phases 1 to 6)

> **Design Theme**: [Apex Engineering](file:///c:/Users/ishan/Desktop/Portfolio/DESIGN.md) — Precision Technical Blueprint & High-Performance Interface  
> **Engineering Lifecycle**: Complete 6-Phase Progression from raw HTML scaffold to an interactive, accessible, and responsive portfolio application with advanced motion physics.


---

## Phase 1: Page Structure Only (Completed)

- **Objective**: Establish the structural HTML skeleton and section scaffolds with zero styling, zero content, and zero custom components.
- **Scope & Deliverables**:
  - Scaffolded semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) in the exact order specified in [prd.md](file:///c:/Users/ishan/Desktop/Portfolio/prd.md):
    1. **Hero Section** (`<section id="hero">`)
    2. **About Section** (`<section id="about">`)
    3. **Skills Section** (`<section id="skills">`)
    4. **Projects Section** (`<section id="projects">`)
    5. **Education Section** (`<section id="education">`)
    6. **Achievements Section** (`<section id="achievements">`)
    7. **Contact Section** (`<section id="contact">`)
  - Included structural section headings (`<h1>` for Hero, `<h2>` for sections).
  - Included structural wireframe placeholder blocks (`<div>` containers) marking layout zones and content slots.
- **Constraints Maintained**:
  - **NO styling**: No CSS stylesheets, inline styles, utility classes, colors, custom fonts, or layout dimensions. Pure unstyled browser-default HTML output.
  - **NO content**: No biographical copy, real names, descriptions, or project details. Only section title headings and unpopulated placeholder boxes.
  - **NO components**: No buttons, cards, chips, form controls, or interactive widgets.
- **Exit Criteria**: Running HTML/React skeleton displaying raw, unstyled semantic headings and structural wireframe placeholder blocks, completely free of styles, content, and interactive components.

---

## Phase 2: Visual Design (Styling & System Integration) (Completed)

- **Objective**: Apply the complete visual design system from [DESIGN.md](file:///c:/Users/ishan/Desktop/Portfolio/DESIGN.md) to the structural scaffold, establishing colors, typography, spacing, and layout hierarchy.
- **Scope & Deliverables**:
  - **Design Tokens & Palette**:
    - Foundation Surface: Technical dark (`#0d150f`, `#0F1115`).
    - High-Voltage Accent: Racing crimson (`#E63946`).
    - Guide / Metadata: Blueprint cyan (`#457B9D`, `#98cdf2`).
    - High-Contrast Text: Technical off-white (`#dce5d9`) meeting WCAG AA >= 4.5:1 contrast ratio.
  - **Typography Scale**:
    - Headings: **Space Grotesk** (architectural, bold 600–700, tight tracking).
    - Body Text: **Inter** (clean, high-legibility, 400 weight).
    - Telemetry / Labels: **JetBrains Mono** (monospaced, uppercase, 0.05em tracking).
  - **Spacing & Layout Rhythm**:
    - 8-point spacing cadence: `space-2xs` (4px), `space-xs` (8px), `space-sm` (16px), `space-md` (24px), `space-lg` (32px), `space-xl` (64px), `space-2xl` (96px).
    - 12-column fluid grid system with 24px gutters and 32px margins.
    - Generous section padding establishing an airy, schematic aesthetic.
  - **Shape Language & Geometry**:
    - **Strict 0px border-radius** across all containers and blocks.
    - Crisp 1px technical blueprint borders and ghost outlines; no heavy drop shadows.
    - Visual prominence rules: Projects section visually dominant over achievements and secondary sections.
- **Constraints Maintained**:
  - Retained wireframe placeholder blocks unpopulated during visual validation.
  - Enforced zero rounded corners, zero glassmorphism blurs, and zero decorative canvas blobs.
- **Exit Criteria**: Visually complete layout demonstrating the raw Apex Engineering design language, colors, typography, and spatial harmony with placeholder blocks fully styled.

---

## Phase 3: Real Content Integration (Completed)

- **Objective**: Replace all wireframe placeholder blocks strictly with verified personal and technical data sourced from [portfolio.txt](file:///c:/Users/ishan/Desktop/Portfolio/portfolio.txt).
- **Scope & Deliverables**:
  - Populated candidate's authentic information strictly from [portfolio.txt](file:///c:/Users/ishan/Desktop/Portfolio/portfolio.txt):
    - **Hero**: Name (Ishaneswar Negi), professional role (Aspiring Software Engineer / B.Tech 1st Year), and focus statement.
    - **About**: Background in low-level systems (C), intelligent technologies (Python), and web engineering, structured around 4 core philosophy pillars.
    - **Skills**: Verified proficiencies in C, Python, HTML5/CSS3, JavaScript, AI & ML fundamentals, and engineering tools.
    - **Projects**: Real projects including Autonomous Flappy Bird AI Agent, Apex Engineering Portfolio, and Algorithmic C Systems.
    - **Education**: GIET University Gunupur (B.Tech in AI & ML, 2025–2029), Pragati Science Higher Secondary School (12th Science), Saraswati Vidhya Mandir (10th).
    - **Achievements & Certifications**: Hedera HCDA/HCF, TCS iON Yuva AI, Deloitte Australia simulations, and Skyscanner simulation.
    - **Contact**: Verified contact coordinates (Email: `rehannegi27@gmail.com`, LinkedIn: `linkedin.com/in/ishaneswar-negi-473619379`, Location: India).
- **Constraints Maintained**:
  - **Strict Zero Filler Policy**: Populated only verified information; no synthetic claims, mock repositories, or artificial metrics.
- **Exit Criteria**: All placeholder blocks replaced strictly with authentic profile records.

---

## Phase 4: Component Architecture & Interactive Behaviors (Completed)

- **Objective**: Build out dedicated components and interactions while upholding all Apex Engineering design constraints.
- **Scope & Deliverables**:
  - **Sharp-Cornered Button Controls**:
    - `.btn-primary`: Racing crimson accent background, bold typography, accessible touch targets (`min-height: 48px`).
    - `.btn-secondary`: Technical container background with blueprint cyan borders.
    - `.btn-ghost`: Border-framed ghost buttons for secondary and card actions.
  - **Monospaced Telemetry Chips & Badges**:
    - Tech stack chips (`.tech-chip`) for project technologies.
    - Status pills (`.telemetry-pill`) for quick profile attributes.
    - Card telemetry headers (`.card-id-telemetry`) for project indexing (`// PROJECT_01`).
  - **Project Showcase Panels**:
    - Structured header zones with project type tags.
    - Problem Statement, Architecture/Contribution, and Outcome/Verification breakdown blocks.
    - Prominence badges highlighting core engineering evidence.
  - **Interactive Communication Triggers**:
    - One-click copy-to-clipboard button with dynamic visual feedback badge (`COPIED TO CLIPBOARD`).
    - Direct `mailto:` email client trigger.
    - External LinkedIn navigation secured with `rel="noopener noreferrer"`.
  - **In-Page Anchor Navigation**:
    - Sticky masthead with smooth scrolling links to all 7 sections (`#about`, `#skills`, `#projects`, `#education`, `#achievements`, `#contact`).
- **Constraints Maintained**:
  - Strict 0px border-radius across all interactive elements.
  - No decorative gradients, no heavy drop shadows, no soft transitions.
- **Exit Criteria**: All components functional, accessible, and fully styled within the Apex Engineering aesthetic.

---

## Phase 5: Responsive Polish, Accessibility Audit & Verification (Completed)

- **Objective**: Ensure seamless operation across devices, verify WCAG AA accessibility, and confirm clean build output.
- **Scope & Deliverables**:
  - **Responsive Layout Verification**:
    - Fluid 12-column grid scaling gracefully from widescreen desktop down to mobile viewports (320px width).
    - Hero primary CTA button ("View My Projects") positioned within easy single-thumb reach on mobile devices.
    - Zero horizontal scrolling or viewport clipping on any screen width.
  - **Accessibility (a11y) Audit**:
    - Proper landmark regions (`<header role="banner">`, `<main>`, `<nav>`, `<section>`, `<footer role="contentinfo">`).
    - Heading hierarchy (`<h1>` strictly for identity, `<h2>` for sections, `<h3>` for cards/categories).
    - High-visibility blueprint focus rings (`:focus-visible`) with 2px cyan outline and 2px offset for full keyboard accessibility.
    - All text meets or exceeds WCAG AA 4.5:1 contrast against the `#0d150f` foundation surface.
  - **Build & Server Verification**:
    - `npm run build` generates optimized production bundle in under 700ms with zero errors.
    - Dev server configured and verified on port 8080.
- **Exit Criteria**: Fully verified, responsive, and accessible personal portfolio ready for deployment.

---

## Phase 6: Interactive Motion Footer Component Integration (`CinematicFooter`) (Completed)

- **Objective**: Integrate the GSAP ScrollTrigger-powered motion footer component from [`component2.txt`](file:///c:/Users/ishan/Desktop/Portfolio/component2.txt) into the codebase, following the shadcn/ui folder architecture (`src/components/ui/`), establishing `@/` path aliasing, and implementing a smooth curtain reveal effect.
- **Scope & Deliverables**:
  - **shadcn/UI Project Structure & Path Resolution**:
    - Configured standard `@/` path alias in [`vite.config.js`](file:///c:/Users/ishan/Desktop/Portfolio/vite.config.js) pointing to `./src`.
    - Created [`tsconfig.json`](file:///c:/Users/ishan/Desktop/Portfolio/tsconfig.json) with path mappings for TypeScript and `.tsx` component resolution.
    - Implemented [`src/lib/utils.ts`](file:///c:/Users/ishan/Desktop/Portfolio/src/lib/utils.ts) exporting the canonical `cn()` class merging utility (`clsx` + `tailwind-merge`).
    - Established `src/components/ui/` as the standard design system primitive directory.
  - **Component Implementation**:
    - Implemented [`src/components/ui/motion-footer.tsx`](file:///c:/Users/ishan/Desktop/Portfolio/src/components/ui/motion-footer.tsx) with:
      - `MagneticButton`: Zero-dependency physics primitive with GSAP cursor attraction, 3D tilt, and elastic spring reset.
      - `CinematicFooter`: Theme-adaptive fixed footer with ambient breathing aurora glow, continuous rotating marquee, GSAP ScrollTrigger parallax on giant background typography (`NEGI`), metallic glowing headline, and dynamic glass pill controls.
      - Parameterized props supporting both Ishaneswar Negi's authentic telemetry and fallback template defaults.
    - Created [`src/components/ui/demo.tsx`](file:///c:/Users/ishan/Desktop/Portfolio/src/components/ui/demo.tsx) providing a standalone test harness for isolated component preview.
  - **Styling Harmony & Curtain Reveal**:
    - Integrated `@import "tailwindcss";` and shadcn theme variables in [`src/index.css`](file:///c:/Users/ishan/Desktop/Portfolio/src/index.css) mapped directly to the Apex Engineering color palette.
    - Scoped border-radius rules specifically to `.cinematic-footer-wrapper` so ambient lights and magnetic pills render fluidly while preserving the strict 0px blueprint grid of the rest of the application.
    - Positioned `<main>` in [`src/App.jsx`](file:///c:/Users/ishan/Desktop/Portfolio/src/App.jsx) with `position: relative; z-index: 10; background-color: var(--surface);` so scrolling past Section 7 unlocks the fixed footer underneath through a polygon clip-path curtain reveal.
- **Dependencies Installed**:
  - `gsap`: ScrollTrigger and physics animation context.
  - `clsx` & `tailwind-merge`: Utility class merging.
  - `lucide-react`: SVG icon primitives.
  - `@tailwindcss/vite` & `tailwindcss`: Tailwind utility integration.
  - `typescript`, `@types/react`, `@types/react-dom`, `@types/node`: TypeScript type safety.
- **Exit Criteria**: `npm run build` compiles with zero errors; the motion footer renders seamlessly at the bottom of the portfolio with responsive magnetic physics and parallax typography.

