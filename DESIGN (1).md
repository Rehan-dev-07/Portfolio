---
name: Apex Engineering
colors:
  surface: '#f3fcf0'
  surface-dim: '#d4ddd1'
  surface-bright: '#f3fcf0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf6ea'
  surface-container: '#e7f0e5'
  surface-container-high: '#e2ebdf'
  surface-container-highest: '#dce5d9'
  on-surface: '#161d16'
  on-surface-variant: '#45474b'
  inverse-surface: '#2a322b'
  inverse-on-surface: '#eaf3e7'
  outline: '#76777b'
  outline-variant: '#c6c6cb'
  surface-tint: '#5d5e63'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c20'
  on-primary-container: '#828489'
  inverse-primary: '#c6c6cc'
  secondary: '#b7102a'
  on-secondary: '#ffffff'
  secondary-container: '#db313f'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2e'
  on-tertiary-container: '#548aac'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001c'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#98cdf2'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#064c6b'
  background: '#f3fcf0'
  on-background: '#161d16'
  surface-variant: '#dce5d9'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: '-0.03'
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: '-0.02'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '-0.01'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0.05'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0.05'
spacing:
  grid-columns: '12'
  gutter: 24px
  margin: 32px
  space-2xs: 4px
  space-xs: 8px
  space-sm: 16px
  space-md: 24px
  space-lg: 32px
  space-xl: 64px
  space-2xl: 96px
---

# Apex Engineering Design System (Light Mode Variant Specification)

> **Design Theme**: Apex Engineering (Light Variant) | **Mode**: Technical Blueprint Light Surface (`#f3fcf0`) | **Accent**: Racing Crimson (`#E63946`) | **Guides**: Blueprint Cyan (`#457B9D`) | **Phases**: 1 to 5 Lifecycle Reference

## Brand & Style

This design system merges high-performance engineering aesthetics with precision-crafted software tools. Inspired by technical blueprints and high-contrast performance visuals, the aesthetic bridges minimalism and bold high-contrast statements. 

- **Personality:** Analytical, relentless, precise, and deeply curious.
- **Audience:** Software engineers, systems architects, and technical creators building future-forward technology.
- **Emotional Response:** Empowers focus, clarity, and an innate trust in structural integrity.

## Colors

The palette relies on restrained technical lights paired with stark, paper-like neutrals and an unmistakable high-voltage accent, adapted for a clean light-mode environment. 

- **Primary:** Deep carbon black (`#0F1115`) for high-contrast foundation surfaces and bold structural typography.
- **Secondary:** Racing crimson (`#E63946`) reserved strictly for focal points, key system telemetry, and critical interactive triggers.
- **Tertiary:** Blueprint cyan (`#457B9D`) for structural guides, metadata, and secondary actions.
- **Neutral:** Clean engineering white/off-white (`#F1FAEE`) ensuring maximum legibility across complex data displays.

## Typography

Typography establishes an uncompromising hierarchy. Headlines leverage geometric, wide-set grotesque proportions for a commanding, architectural presence. Body text prioritizes absolute clarity and scanning efficiency at small sizes, while monospaced labels provide precise telemetry data reminiscent of blueprint annotations.

## Layout & Spacing

An airy, generous spacing rhythm grants complex technical interfaces room to breathe. 

- **Layout Model:** 12-column fluid grid system anchored by strict structural gutters (`24px`) and expansive outer margins (`32px` scaling up on desktop).
- **Density:** Deliberately spaced out to mirror architectural schematics and high-end automotive editorial design, reducing cognitive overload during intense engineering workflows.

## Elevation & Depth

Depth is articulated through precise low-contrast outlines ("ghost borders") and subtle tonal layering rather than heavy drop shadows. Surfaces stack cleanly from clean paper-like foundations to raised component tiers using crisp 1px borders tinted with blueprint cyan or muted neutral opacity, maintaining a flat, highly calibrated engineering aesthetic.

## Shapes

The shape language strictly embraces absolute sharpness (`0px` roundedness). Corners are precise and 90-degrees, reinforcing the rigorous mathematical precision found in technical blueprints, schematics, and high-performance racing components.

## Components

- **Buttons:** Sharp-edged rectangular containers with high-contrast text. Primary actions utilize the vibrant crimson accent with bold typography, while secondary actions use ghost borders with monospaced labels.
- **Chips & Tags:** Monospaced, uppercase micro-tags enclosed in thin 1px borders, ideal for status indicators and telemetry data.
- **Input Fields:** Flush, border-defined text areas featuring sharp corners, monospaced input text, and clear blueprint-cyan focus rings.
- **Cards:** Data panels structured with strict 1px grid lines, generous internal padding, and distinct header metadata zones.
- **Checkboxes & Radios:** Sharp square and point-aligned geometric selectors that snap cleanly into active states without soft transitions.