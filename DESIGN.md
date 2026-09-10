---
name: Apex Engineering
colors:
  surface: '#0d150f'
  surface-dim: '#0d150f'
  surface-bright: '#333b33'
  surface-container-lowest: '#08100a'
  surface-container-low: '#161d16'
  surface-container: '#1a221a'
  surface-container-high: '#242c24'
  surface-container-highest: '#2f372f'
  on-surface: '#dce5d9'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#dce5d9'
  inverse-on-surface: '#2a322b'
  outline: '#909095'
  outline-variant: '#45474b'
  surface-tint: '#c6c6cc'
  primary: '#c6c6cc'
  on-primary: '#2f3035'
  primary-container: '#0f1115'
  on-primary-container: '#7b7c82'
  inverse-primary: '#5d5e63'
  secondary: '#ffb3b1'
  on-secondary: '#680011'
  secondary-container: '#ad0224'
  on-secondary-container: '#ffb8b5'
  tertiary: '#98cdf2'
  on-tertiary: '#00344c'
  tertiary-container: '#00131f'
  on-tertiary-container: '#4d83a5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
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
  background: '#0d150f'
  on-background: '#dce5d9'
  surface-variant: '#2f372f'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
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
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
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

# Apex Engineering Design System (Dark Mode Specification)

> **Design Theme**: Apex Engineering | **Mode**: Technical Blueprint Dark Foundation (`#0d150f`) | **Accent**: Racing Crimson (`#E63946`) | **Guides**: Blueprint Cyan (`#457B9D`) | **Phases**: 1 to 5 Lifecycle Reference

## Brand & Style

This design system merges high-performance engineering aesthetics with precision-crafted software tools. Inspired by technical blueprints and high-contrast performance visuals, the aesthetic bridges minimalism and bold high-contrast statements. 

- **Personality:** Analytical, relentless, precise, and deeply curious.
- **Audience:** Software engineers, systems architects, and technical creators building future-forward technology.
- **Emotional Response:** Empowers focus, clarity, and an innate trust in structural integrity.

## Colors

The palette relies on restrained technical darks paired with stark, paper-like neutrals and an unmistakable high-voltage accent. 

- **Primary:** Deep carbon black (`#0F1115`) for high-performance foundation surfaces.
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

Depth is articulated through precise low-contrast outlines ("ghost borders") and subtle tonal layering rather than heavy drop shadows. Surfaces stack cleanly from deep carbon foundations to raised component tiers using crisp 1px borders tinted with blueprint cyan or muted neutral opacity, maintaining a flat, highly calibrated engineering aesthetic.

## Shapes

The shape language strictly embraces absolute sharpness (`0px` roundedness). Corners are precise and 90-degrees, reinforcing the rigorous mathematical precision found in technical blueprints, schematics, and high-performance racing components.

## Components

- **Buttons:** Sharp-edged rectangular containers with high-contrast text. Primary actions utilize the vibrant crimson accent with bold typography, while secondary actions use ghost borders with monospaced labels.
- **Chips & Tags:** Monospaced, uppercase micro-tags enclosed in thin 1px borders, ideal for status indicators and telemetry data.
- **Input Fields:** Flush, border-defined text areas featuring sharp corners, monospaced input text, and clear blueprint-cyan focus rings.
- **Cards:** Data panels structured with strict 1px grid lines, generous internal padding, and distinct header metadata zones.
- **Checkboxes & Radios:** Sharp square and point-aligned geometric selectors that snap cleanly into active states without soft transitions.