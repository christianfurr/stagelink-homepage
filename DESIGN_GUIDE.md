# Stage Link App Design Guide

Dark-mode design system for the Stage Link application.
Derived from the landing page mockups — same palette, typography, and visual language,
adapted for a dark UI that matches the fake-app preview and feature demo cards.

---

## 1. Color Palette

### Brand Colors (unchanged from landing page)

| Token | Hex | Usage |
|-------|-----|-------|
| `gold` | `#C9A227` | Primary accent — buttons, active states, highlights, graphs |
| `gold-bright` | `#E8B84B` | Hover/focus for gold elements, bright emphasis |
| `amber` | `#F5A623` | Warm glow effects, gradient stops, decorative |
| `crimson` | `#B71C2E` | Secondary accent — live indicators, destructive actions, alerts, secondary buttons |

### Dark-Mode Semantic Tokens

These replace the light-mode tokens from the landing page. Use CSS variables so
shadcn/ui components inherit them automatically.

| Token | Hex | Description |
|-------|-----|-------------|
| `--background` | `#0C0A09` | App body background (near-black, warm undertone) |
| `--foreground` | `#F5F0E8` | Primary text (warm off-white) |
| `--card` | `#161412` | Card/panel backgrounds |
| `--card-foreground` | `#F5F0E8` | Card text |
| `--popover` | `#1C1916` | Popover/dropdown backgrounds |
| `--popover-foreground` | `#F5F0E8` | Popover text |
| `--primary` | `#C9A227` | Gold — primary buttons, active links |
| `--primary-foreground` | `#0C0A09` | Text on gold buttons |
| `--secondary` | `#B71C2E` | Crimson — secondary buttons, live badge |
| `--secondary-foreground` | `#FFFFFF` | Text on crimson buttons |
| `--muted` | `#1E1B18` | Muted backgrounds (sidebar headers, inactive areas) |
| `--muted-foreground` | `#A89B8C` | Secondary/dimmed text |
| `--accent` | `#2A2520` | Subtle hover states, active backgrounds |
| `--accent-foreground` | `#F5F0E8` | Text on accent backgrounds |
| `--destructive` | `#B71C2E` | Error states, destructive actions |
| `--destructive-foreground` | `#FFFFFF` | Text on destructive |
| `--border` | `#FFFFFF1A` | `white/10` — subtle borders throughout |
| `--input` | `#FFFFFF0D` | `white/5` — input field backgrounds |
| `--ring` | `#C9A227` | Focus ring (gold) |

### Surface Layers

Build depth with these layered backgrounds (from deepest to most elevated):

| Token | Hex | Usage |
|-------|-----|-------|
| `--surface-0` | `#0C0A09` | Page/body |
| `--surface-1` | `#121010` | Main content area, sidebar background |
| `--surface-2` | `#1A1614` | Cards, panels, chat panel |
| `--surface-3` | `#221E1A` | Elevated cards, modals, floating stats |
| `--surface-4` | `#2A2520` | Hover states on cards, active selections |

### Overlay / Glass

For floating elements (stats card, tooltips, dropdown menus):

```
background: rgba(22, 20, 18, 0.95);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.10);
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
```

---

## 2. Typography

### Font Stack

| Role | Font | Variable | Weights |
|------|------|----------|---------|
| Body / UI | Geist Sans | `--font-geist-sans` | 400 (regular), 500 (medium), 600 (semibold) |
| Display / Headings | Cormorant Garamond | `--font-cormorant` | 300 (thin), 400 (regular), 600 (semibold) |

### Scale

| Element | Size | Weight | Tracking | Font |
|---------|------|--------|----------|------|
| Page title | `clamp(2rem, 4vw, 3rem)` | 300 | `-0.02em` | Display |
| Section heading | `1.5rem – 2rem` | 600 | `-0.02em` | Display |
| Card title | `1rem (16px)` | 600 | `tight` | Sans |
| Body text | `0.875rem (14px)` | 400 | `normal` | Sans |
| Small / label | `0.75rem (12px)` | 500 | `normal` | Sans |
| Micro / badge | `0.625rem (10px)` | 600 | `wide` | Sans |
| Monospace stats | `0.6875rem (11px)` | 500 | `normal` | Sans |

### Text Colors

| Purpose | Color | Tailwind Class |
|---------|-------|---------------|
| Primary text | `#F5F0E8` | `text-foreground` |
| Secondary text | `#A89B8C` | `text-muted-foreground` |
| Dimmed/hint | `rgba(255,255,255,0.40)` | `text-white/40` |
| Disabled | `rgba(255,255,255,0.25)` | `text-white/25` |
| Gold emphasis | `#C9A227` | `text-gold` |
| Crimson emphasis | `#B71C2E` | `text-crimson` |
| Link default | `#C9A227` | `text-gold` |
| Link hover | `#E8B84B` | `text-gold-bright` |

---

## 3. Spacing & Layout

### Base Grid

- Base unit: **4px**
- Use multiples: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64`
- Max content width: `1280px`
- Standard page padding: `24px` (px-6)

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Small chips, badges, inputs |
| `--radius-md` | `12px` | Cards, buttons, panels |
| `--radius-lg` | `16px` | Large cards, modal containers |
| `--radius-xl` | `20px` | Hero elements, video player |

### Sidebar + Main Layout

```
┌──────────────────────────────────────────┐
│ Top Bar (h-12, surface-1, border-b)      │
├────────────┬─────────────────────────────┤
│ Sidebar    │ Main Content                │
│ (w-60)     │                             │
│ surface-1  │ surface-0                   │
│ border-r   │                             │
│            ├─────────────────┬───────────┤
│            │ Video Player    │ Chat      │
│            │ (surface-2)     │ (surface-2│
│            │                 │  border-l)│
│            ├─────────────────┴───────────┤
│            │ Bottom Bar (controls)       │
└────────────┴─────────────────────────────┘
```

---

## 4. Borders & Dividers

All borders use low-opacity white to maintain the dark aesthetic:

| Style | Value | Usage |
|-------|-------|-------|
| Default border | `1px solid rgba(255,255,255,0.10)` | Cards, panels, sections |
| Subtle border | `1px solid rgba(255,255,255,0.06)` | Inner dividers |
| Accent border | `2px solid rgba(201,162,39,0.30)` | Featured/active cards, stats card |
| Crimson border | `2px solid rgba(183,28,46,0.40)` | Live/alert elements |
| Focus ring | `3px solid rgba(201,162,39,0.50)` | Focused interactive elements |

Tailwind equivalents: `border-white/10`, `border-white/6`, `border-gold/30`, `border-crimson/40`

---

## 5. Buttons

### Primary (Gold)

```
bg: #C9A227
text: #0C0A09
hover-bg: #C9A227/90
border-radius: 12px (rounded-xl)
height: 36px (default), 40px (lg), 48px (xl)
font: 14px, semibold, tracking-wide
```

### Secondary (Crimson)

```
bg: #B71C2E
text: #FFFFFF
hover-bg: #B71C2E/80
```

### Outline / Ghost (on dark)

```
bg: transparent
border: 1px solid rgba(201,162,39,0.30)
text: #C9A227
hover-bg: rgba(201,162,39,0.10)
hover-border: rgba(201,162,39,0.50)
```

### Crimson Outline

```
bg: transparent
border: 1px solid rgba(183,28,46,0.40)
text: #B71C2E
hover-bg: rgba(183,28,46,0.10)
hover-border: rgba(183,28,46,0.60)
```

### Destructive

```
bg: #B71C2E
text: white
hover-bg: #B71C2E/90
```

### Ghost (subtle)

```
bg: transparent
text: #A89B8C
hover-bg: rgba(255,255,255,0.06)
hover-text: #F5F0E8
```

### Button Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| xs | 24px | px-2 | 12px |
| sm | 32px | px-3 | 13px |
| default | 36px | px-4 | 14px |
| lg | 40px | px-6 | 14px |
| icon | 36x36 | — | — |

---

## 6. Badges & Status Indicators

### LIVE Badge

```
bg: #B71C2E (crimson) with 80% opacity
text: white, 10px, font-semibold
Leading dot: 6x6 white circle
Animation: live-pulse (opacity 1 → 0.5 → 1, 2s, infinite)
border-radius: 4px
padding: 2px 8px
```

### Mode Badge (SFU / P2P)

```
SFU:     bg: rgba(201,162,39,0.09)  text: #C9A227  box-shadow: 0 0 10px rgba(201,162,39,0.19)
P2P:     bg: rgba(183,28,46,0.09)   text: #B71C2E  box-shadow: 0 0 10px rgba(183,28,46,0.19)
font: 10px, medium
border-radius: full (pill)
padding: 2px 8px
```

### Stat Badge (ping, resolution, fps)

```
bg: rgba(201,162,39,0.10) or rgba(255,255,255,0.10)
text: #C9A227 (gold) or white/60
font: 10px, medium
border-radius: full
padding: 2px 6px
```

---

## 7. Cards & Panels

### Standard Card

```
background: var(--surface-2)  /* #1A1614 */
border: 1px solid rgba(255,255,255,0.10)
border-radius: 16px
padding: 24px
```

### Elevated Card (stats panel, floating elements)

```
background: rgba(22,20,18,0.95)
backdrop-filter: blur(20px)
border: 2px solid rgba(201,162,39,0.30)
border-radius: 12px
padding: 14px
box-shadow: 0 25px 50px rgba(0,0,0,0.50)
```

### Hover State (all cards)

```
hover-bg: var(--surface-4) / rgba(255,255,255,0.04)
hover-border: rgba(201,162,39,0.30) or rgba(183,28,46,0.30)
transform: translateY(-2px)
transition: all 300ms ease
```

---

## 8. Inputs & Form Controls

### Text Input

```
background: rgba(255,255,255,0.05)
border: 1px solid rgba(255,255,255,0.10)
border-radius: 8px
text: #F5F0E8
placeholder: rgba(255,255,255,0.40)
padding: 6px 10px
font: 13px
focus:
  border: 1px solid rgba(201,162,39,0.50)
  ring: 3px solid rgba(201,162,39,0.25)
```

### Chat Input (from mockup)

```
background: rgba(255,255,255,0.05)
border: 1px solid rgba(255,255,255,0.10)
border-radius: 8px
text: rgba(255,255,255,0.40) (placeholder)
padding: 6px 10px
font: 10px
```

### Toggle / Switcher

```
Track inactive: rgba(255,255,255,0.10)
Track active (gold): rgba(201,162,39,0.15), text-gold, shadow
Track active (crimson): rgba(183,28,46,0.15), text-crimson, shadow
Container: rounded-xl, border gold/30, bg surface-2, p-1
Tab: rounded-lg, px-4, py-2, text-sm, font-medium
```

---

## 9. Chat UI

### Chat Message

```
Container: space-y-2.5
Name (gold role):  font-medium, color #C9A227
Name (crimson role): font-medium, color #B71C2E
Role label:        font-normal, color white/50, parenthesized
Message body:      color white/60
Font: 11px, leading-relaxed
```

### Chat Role Colors

| Role | Color |
|------|-------|
| SM (Stage Manager) | `#C9A227` (gold) |
| LX (Lighting) | `#C9A227` (gold) |
| Audio | `#B71C2E` (crimson) |
| Host | `#B71C2E` (crimson) |
| Default crew | alternating gold / crimson |

### Online Count

```
font: 9px
color: white/40
position: below chat input
```

---

## 10. Video Player Area

### Container

```
background: linear-gradient(to bottom-right, #1a0808, #200e0e, #0f0505)
border-radius: 20px (outer container)
overflow: hidden
aspect-ratio: 16/9
```

### Stage Lighting Overlays

```
Top curtain wash:    linear-gradient(to bottom, rgba(74,16,16,0.30), rgba(42,8,8,0.20), transparent)
Center spotlight:    radial-gradient(ellipse 60% 40% at 50% 20%, rgba(255,200,120,0.12), transparent 70%)
Left key light:      radial-gradient(ellipse 30% 50% at 35% 60%, rgba(255,180,80,0.06), transparent 60%)
Right key light:     radial-gradient(ellipse 30% 50% at 65% 60%, rgba(255,180,80,0.06), transparent 60%)
Floor shadow:        linear-gradient(to top, rgba(10,5,5,0.80), transparent)  height 30%
```

### Video Overlay Badges

LIVE, resolution, fps badges positioned `top-2.5 left-2.5`.
Camera label positioned `bottom-2.5 right-2.5`.

```
Badge bg: rgba(0,0,0,0.40), backdrop-blur
Badge text: white/60, 10px
LIVE badge: crimson bg, white text (see Badges section)
```

### Camera Controls Bar

```
background: rgba(0,0,0,0.80)
border-top: 1px solid white/10
padding: 8px 12px
Camera label: text-xs, white/60, selected camera in white font-medium
Switch button: text-gold, border border-gold/20, px-2 py-1, rounded-md, 10px
```

---

## 11. Performance Stats

### Stats Card Layout

```
Key-value pairs in a vertical list
Label: white/60, left-aligned
Value: white font-medium, right-aligned
Gold value: text-gold (e.g., ping)
Font: 10–11px
Spacing: space-y-1.5
```

### Mini Graph

```
Stroke: #C9A227, width 1.5, round caps
Fill: linear-gradient(top #C9A227 at 20% opacity → transparent)
Height: 24px
Animation: stroke-dasharray 300 → 0, 2.5s ease-out
```

---

## 12. Top App Bar

```
height: ~44px (py-2.5)
background: rgba(0,0,0,0.90) or surface-1
border-bottom: 1px solid white/10
padding: 0 16px
Layout: flex, space-between, items-center
Logo: "Stage Link", 14px, font-semibold, tracking-tight, white
Show name: 12px, white/60 label + white font-medium name
Right side: mode badge + ping badge + viewer count
```

---

## 13. Shadows & Glow Effects

### Card Shadow

```
box-shadow: 0 4px 6px rgba(0,0,0,0.3);
```

### Elevated Shadow

```
box-shadow: 0 25px 50px -12px rgba(0,0,0,0.50);
```

### Gold Glow (active/featured elements)

```
box-shadow: 0 0 40px rgba(201,162,39,0.15);
```

### Crimson Glow (live/alert elements)

```
box-shadow: 0 0 12px rgba(183,28,46,0.25);
```

### Ambient Background Glow

```
Radial gradient, centered, 600-800px diameter
Gold: rgba(201,162,39,0.06) → transparent
Apply with blur(100px), opacity ~10-14%
Position behind main content area
```

---

## 14. Animations

### Live Pulse

```css
@keyframes live-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
/* 2s ease-in-out infinite */
```

### Graph Draw

```css
@keyframes graph-draw {
  from { stroke-dashoffset: 300; }
  to { stroke-dashoffset: 0; }
}
/* stroke-dasharray: 300, 2.5s ease-out forwards */
```

### Entrance Animations (Framer Motion)

| Element | Initial | Animate | Duration | Ease |
|---------|---------|---------|----------|------|
| Fade up | `{ opacity: 0, y: 20 }` | `{ opacity: 1, y: 0 }` | 0.5s | `[0.25, 0.1, 0.25, 1]` |
| Slide in (chat) | `{ opacity: 0, x: -8 }` | `{ opacity: 1, x: 0 }` | 0.3s | default |
| Scale in (badge) | `{ scale: 0.9, opacity: 0 }` | `{ scale: 1, opacity: 1 }` | 0.2s | spring |
| Counter tick | `{ y: -4, opacity: 0 }` | `{ y: 0, opacity: 1 }` | 0.2s | default |
| Stagger children | — | — | delay 0.08–0.15s per child | — |

### Hover Transitions

```
transition: all 300ms ease
Cards: translateY(-2px) + shadow-lg
Icons: scale(1.1)
Borders: color shift over 300ms
```

---

## 15. Noise Texture Overlay

Applied as a fixed full-screen pseudo-element for subtle film-grain texture:

```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.03;  /* slightly stronger in dark mode */
  background-image: url("data:image/svg+xml,...feTurbulence fractalNoise...");
  background-repeat: repeat;
  background-size: 256px 256px;
}
```

---

## 16. CSS Variables (copy-paste ready)

```css
:root {
  --radius: 0.75rem;

  /* Brand */
  --gold: #C9A227;
  --gold-bright: #E8B84B;
  --crimson: #B71C2E;
  --amber: #F5A623;

  /* Dark-mode semantic */
  --background: #0C0A09;
  --foreground: #F5F0E8;
  --card: #161412;
  --card-foreground: #F5F0E8;
  --popover: #1C1916;
  --popover-foreground: #F5F0E8;
  --primary: var(--gold);
  --primary-foreground: #0C0A09;
  --secondary: var(--crimson);
  --secondary-foreground: #FFFFFF;
  --muted: #1E1B18;
  --muted-foreground: #A89B8C;
  --accent: #2A2520;
  --accent-foreground: #F5F0E8;
  --destructive: var(--crimson);
  --destructive-foreground: #FFFFFF;
  --border: rgba(255, 255, 255, 0.10);
  --input: rgba(255, 255, 255, 0.05);
  --ring: var(--gold);

  /* Surfaces (layered depth) */
  --surface-0: #0C0A09;
  --surface-1: #121010;
  --surface-2: #1A1614;
  --surface-3: #221E1A;
  --surface-4: #2A2520;

  --live-red: var(--crimson);
}
```

---

## 17. Tailwind v4 `@theme` Block (copy-paste ready)

```css
@theme inline {
  --font-sans: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
  --font-display: var(--font-cormorant), Georgia, serif;

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 8px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-surface-0: var(--surface-0);
  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-surface-3: var(--surface-3);
  --color-surface-4: var(--surface-4);

  --color-gold: var(--gold);
  --color-gold-bright: var(--gold-bright);
  --color-crimson: var(--crimson);
  --color-amber: var(--amber);
  --color-live-red: var(--live-red);
}
```

---

## 18. Icon Guidelines

- Library: **Lucide React**
- Default stroke width: `1.8`
- Default size: `20px` (h-5 w-5)
- Small icons: `16px` (h-4 w-4)
- Color: inherit from parent or use `text-gold` / `text-crimson`
- Icon containers: `rounded-xl`, accent-colored background at 10% opacity

---

## 19. Quick Reference — Component Patterns

### App Shell

```
bg-surface-0 text-foreground font-sans antialiased
```

### Sidebar

```
w-60 bg-surface-1 border-r border-white/10
```

### Panel Header

```
px-3 py-2 border-b border-white/10 text-xs font-semibold text-white
```

### Key-Value Row (stats)

```
flex justify-between text-[11px]
Label: text-white/60
Value: text-white font-medium  (or text-gold for highlighted)
```

### Chat Message

```
text-[11px] leading-relaxed
Name: font-medium color-gold or color-crimson
Role: font-normal text-white/50
Body: text-white/60
```

### Floating Overlay

```
rounded-xl border-2 border-gold/30 bg-black/95 backdrop-blur-xl p-3.5 shadow-2xl shadow-black/50
```
