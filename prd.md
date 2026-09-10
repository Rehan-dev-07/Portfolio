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

# Portfolio Website PRD

> **Design Theme**: [Apex Engineering](file:///c:/Users/ishan/Desktop/Portfolio/DESIGN.md) — Precision Technical Blueprint & High-Performance Interface  
> **Implementation Scope**: Full 5-Phase Architecture (Structure &bull; Visuals &bull; Content &bull; Components &bull; Verification)

## Purpose
Establish a high-performance, precision-engineered personal portfolio website for **Ishaneswar Negi** (Aspiring Software Engineer & B.Tech Computer Software Engineering student). The portfolio acts as a digital technical profile that communicates engineering focus, technical versatility, and an active learning journey in software engineering and intelligent technologies (AI/ML).

## Audience
- **Technical Recruiters & Hiring Managers**: Evaluating engineering fundamentals, verified credentials, and potential for internships and junior software engineering roles.
- **Software Engineers & System Architects**: Reviewing technical discipline, problem-solving capability, code quality, and engineering mindset.
- **Academic & Open-Source Collaborators**: Seeking collaborative builders passionate about software development and emerging intelligent systems.

## Main Goals
1. **5-Second Clarity**: Ensure any visitor immediately grasps who Ishaneswar is, what he builds, and his core engineering direction within five seconds of landing.
2. **Project-Centric Evidence**: Position real projects as the visual and structural centerpiece of the site, letting concrete implementation work prove capability rather than exaggerated claims.
3. **Authentic & Honest Technical Identity**: Present skills and experience with strict honesty—highlighting genuine curiosity, foundational depth, and active learning without claiming mastery where unearned.
4. **Engineering Rigor & Visual Discipline**: Implement the high-precision "Apex Engineering" design system (sharp 0px borders, technical blueprint hierarchy, high-contrast typography, and strict 4.5:1 contrast accessibility).
5. **Mobile Accessibility**: Keep primary interactive actions (like "View My Projects" CTA) readily accessible and thumb-reachable across all screen sizes, down to 320px width.

## Required Section
The page must strictly adhere to the following section sequence:
1. **Hero**: Name, professional identity, core value statement, supporting message, and primary CTA ("View My Projects").
2. **About**: Engineering background, driving motivations (software development, intelligent technologies, continuous learning).
3. **Skills**: Scannable, categorized overview of programming languages, tools, and technical areas actively used or being learned.
4. **Projects**: The **most visually prominent section** on the page. Structured evidence of problem solving, technologies used, and outcomes.
5. **Education**: Academic history (GIET University Gunupur & Pragati Science Higher Secondary School) representing the foundation of the learning journey.
6. **Achievements**: Verified industry certifications and job simulations.
7. **Contact**: Straightforward communication channels (Email, LinkedIn, Location) for direct recruitment and collaboration inquiries.

## Required Behaviours
- **Strict Linear Order**: Maintain the 7-section flow without rearranging order.
- **Airy Spacing & Hierarchy**: Generous spacing intervals between sections to prevent cognitive clutter and allow projects to stand out individually.
- **Accessible Contrast**: Ensure all body copy meets or exceeds WCAG AA 4.5:1 contrast ratio against the dark background.
- **Mobile-First CTA Reachability**: Primary action buttons must remain within easy thumb reach on mobile viewport widths.
- **Sharp Technical Interactions**: High-contrast state transitions without decorative fluff, soft shadows, or bloated animations.
- **Safe External Navigation**: All external links (GitHub, LinkedIn, Email) must open safely with appropriate attributes (`rel="noopener noreferrer"`).

## Features
- **Semantic Blueprint Layout**: Built with React (Vite + React) using semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) adhering to 12-column architectural grid principles.
- **Apex Engineering Design System**: Space Grotesk headings, Inter body text, and JetBrains Mono telemetry labels with a deep carbon foundation (`#0d150f`) and racing crimson accents (`#E63946`).
- **Telemetry & Metadata Tags**: Monospaced chips for technologies and dates.
- **Project Showcase Cards**: High-priority technical panels emphasizing problem, architecture, stack, and demo/code links.
- **Direct Contact Triggers**: One-click mailto, telephone, and LinkedIn shortcuts.