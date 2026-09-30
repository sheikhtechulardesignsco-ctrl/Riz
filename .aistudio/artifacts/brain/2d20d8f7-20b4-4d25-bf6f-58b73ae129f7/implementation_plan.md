# RIZ — Creative Director & Literary Showcase Portfolio

A minimalist, high-end gallery showcase website for **Riz the Wizz — Your go-to creative bloke**, crafted with **zero JavaScript** using semantic HTML5 and modern CSS3. The showcase spotlights Riz's creative direction, illustrated book collections, cover art, and brand identity systems extracted directly from the attached publications, featuring the creator's portrait and direct commission access.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Revised Requirements & Confirmed Decisions**:
> - **Hero Spotlight & Creator Persona**: Integrated the creator's portrait photo with the headline **"Riz the Wizz — Your go-to creative bloke"** into the hero showcase alongside the featured flagship publication.
> - **Direct Studio Contact**: Direct commission email **`sheikhtechulardesignsco@gmail.com`** embedded across the header, hero CTA, and footer inquiry card.
> - **Pure CSS Filter Tabs**: Radio-button CSS filtering for *All Works*, *Novels & Thrillers*, *Children's Illustrated*, and *Brand Identity*.
> - **Pure CSS Modal Synopses**: `:target` modal overlays allowing visitors to read full back-cover synopses, illustrator credits, and publication details without JavaScript.
> - **Design Aesthetics**: Deep Obsidian (`#0D0D0F`), Warm Bronze (`#C5A059`), Soft Sand (`#F8F7F4`), Syne + Cinzel display typography, and Plus Jakarta Sans body.

---

## 1. Overview & Core Concept

- **What It Does**: Presents a high-end editorial portfolio for creative director and illustrator Riz ("Riz the Wizz"). Highlights his dual mastery: vibrant, emotionally resonant children's book illustrations (e.g. *Carboot Karma*, *Hector The Hermit Crab*, *Sunny Meadows*, *Maisie Manners*) and gripping, high-concept novel covers & corporate branding (e.g. *Beneath the Foxglove*, *Storm*, *Ven of Nordia*, *Master Yine*).
- **Target Audience**: Authors, publishing houses, creative agencies, and indie creators seeking elite cover art, children's book illustration, or brand identity systems.
- **Key Value**: 100% Zero-JavaScript implementation, lightning-fast rendering, responsive 3D book hover effects, pure CSS modal synopses, and direct inquiry access.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero Spotlight**:
   - Left / Focal Hero: Creator portrait framed in an obsidian card with bronze accent border, badge title **"Riz the Wizz — Your go-to creative bloke"**, brief studio ethos, and quick action buttons (`sheikhtechulardesignsco@gmail.com` and "Explore Works").
   - Right / Flagship Spotlight: 3D perspective display of flagship thriller *Beneath the Foxglove* (G.K. Boni) and signature children's title *Carboot Karma* (illustrated by Riz Wan).
2. **Interactive Pure CSS Gallery Filtering**:
   - Filter bar with styled segmented radio tabs:
     - `All Works (20+)`
     - `Novels & Thrillers`
     - `Children's Illustrated`
     - `Brand Identity Systems`
   - Dynamically filters the responsive card grid with CSS transition effects without page reloads.
3. **Pure CSS Deep-Dive Modals (`:target`)**:
   - Clicking "Read Synopsis" or any book cover opens a full-screen, high-contrast modal dialog containing:
     - High-aspect cover visual with realistic paper texture and spine embossing
     - Full extracted back-cover blurb from the source publication
     - Illustrator/Author credits (`Illustrated by: Riz Wan` / Author attribution)
     - Target audience / themes and publication specs
     - Seamless close button (`✕`) and click-outside backdrop linking back to `#gallery`.
4. **Studio Commissions & Inquiries**:
   - Minimalist footer and inquiry banner featuring `sheikhtechulardesignsco@gmail.com`, commission availability status, and social channels.

### Visual Identity & Theme Tokens
- `--bg-canvas`: `#0B0B0D` (Deep obsidian black)
- `--bg-surface`: `#141417` (Rich slate obsidian)
- `--bg-elevated`: `#1C1C22` (Card surface)
- `--text-primary`: `#F8F7F4` (Soft sand / off-white)
- `--text-muted`: `#9E9A91` (Warm editorial stone)
- `--accent-gold`: `#C5A059` (Warm bronze / burnished gold)
- `--accent-gold-light`: `#E2C285`
- `--border-hairline`: `rgba(197, 160, 89, 0.2)`
- **Typography Pairings**:
  - Headings: `Syne` (modern, punchy editorial display font) + `Cinzel` (Roman elegance)
  - Body: `Plus Jakarta Sans` (ultra-clean, highly legible geometric sans)

---

## 3. Key Product Decisions & Trade-Offs

- **Creator Presentation (Hero Integration)**:
  - *Chosen Approach*: Unify the creator portrait ("Riz the Wizz — Your go-to creative bloke") with the hero showcase as an editorial creator card, maintaining high-fashion portfolio aesthetics rather than a generic resume bio.
  - *Why*: Directly satisfies the user's photo and tagline revision while preserving the sleek gallery look.
- **Pure CSS Tab Filtering (Radio Inputs)**:
  - *Chosen Approach*: Radio buttons with labels styled as segmented buttons (`input[id="tab-all"]:checked ~ .grid .card`, etc.).
  - *Why*: 100% Zero-JavaScript interactive filtering that works on all modern browsers and doesn't pollute the browser history.
- **Pure CSS Modals (`:target`)**:
  - *Chosen Approach*: CSS `:target` pseudo-class for lightbox popups (`#modal-foxglove:target`, `#modal-carboot:target`).
  - *Why*: Allows opening and closing overlays cleanly with zero scripts, supporting keyboard accessibility (Esc/Back button).

---

## 4. Technical Architecture & System Layout

```
┌────────────────────────────────────────────────────────────────────────┐
│               Minimal Header (RIZ Studio Navigation)                  │
│       [RIZ]  ───  [Works] · [Children's] · [Branding] · [Contact]      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Hero Section (Split Grid)                       │
│   ┌──────────────────────────────┐  ┌────────────────────────────────┐ │
│   │ Creator Spotlight            │  │ Flagship Book Showcase         │ │
│   │ • User Portrait Photo        │  │ • "Beneath the Foxglove"       │ │
│   │ • "Riz the Wizz — Your       │  │ • 3D Perspective Cover         │ │
│   │   go-to creative bloke"      │  │ • Extracted Synopsis Excerpt   │ │
│   │ • sheikhtechulardesignsco... │  │ • Quick Actions [Read Blurb]   │ │
│   └──────────────────────────────┘  └────────────────────────────────┘ │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│               Works Gallery (Pure CSS Segmented Filter)                │
│       [All Works]   [Fiction & Noir]   [Children's]   [Brand Identity] │
│                                                                        │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│   │ Storm        │  │ Carboot Karma│  │ Hector Crab  │  │ Surviving │  │
│   │ 2:3 Cover    │  │ 2:3 Cover    │  │ 2:3 Cover    │  │ 2:3 Cover │  │
│   │ Blurb & CTA  │  │ Blurb & CTA  │  │ Blurb & CTA  │  │ Blurb&CTA │  │
│   └──────────────┘  └──────────────┘  └──────────────┘  └───────────┘  │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────────┐  │
│   │ Ven of Nordia│  │ Hide-and-Seek│  │ Maisie M.    │  │ ...etc.   │  │
│   └──────────────┘  └──────────────┘  └──────────────┘  └───────────┘  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                    Pure CSS Modal Lightbox Overlays                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Full synopsis, cover artwork inspection, publication specs,    │   │
│   │ author/illustrator credits, and [✕ Close] returning to gallery.│   │
│   └────────────────────────────────────────────────────────────────┘   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 Studio Contact & Commission Footer                     │
│    sheikhtechulardesignsco@gmail.com · Copyright © 2026 RIZ Studio     │
└────────────────────────────────────────────────────────────────────────┘
```

### Complete Extracted Catalogue:
1. **Beneath the Foxglove: Murder, Memory and the Poison We Bury** (G.K. Boni) — Southern Noir
2. **Carboot Karma** (Riz Wan) — Children's Illustrated
3. **Hector The Hermit Crab** (Riz Wan) — Children's Illustrated
4. **Hide-and-Seek** (Riz Wan) — Children's Illustrated
5. **Maisie Manners** (Riz Wan) — Children's Illustrated
6. **Sunny Meadows Woodland School: A School Trip** (Riz Wan) — Children's Illustrated
7. **The Tooth Fairies & the Cleaning Factory** (Riz Wan) — Children's Illustrated
8. **Storm** (Susan Wilson) — Drama / Fiction
9. **Surviving the Game: The Childcare Chronicles** (Kimberly Watkins-Almond) — Leadership
10. **The Bad Board Members** (Kimberly Watkins-Almond) — Whistleblower Non-Fiction
11. **Leveraging the Power of the Process** (Dr. Cedric B. Howard) — Business & Growth
12. **Legendary Tales & Short Story Adventures Vol. 1** (T.P. Taylor) — Epic Fantasy
13. **Ven of Nordia** (Ezu Feboke) — Nordic High Fantasy
14. **Chasing Greatness** (Dr. Darren Johnson) — Sports & Biography
15. **Through The Heart's Lens** (Helena Stamatiou) — Poetry Collection
16. **Blind to the Blatantly Obvious** (Ron Patterson) — Investigative Non-Fiction
17. **The Urban Copper Concrete Amerindian** (Chief Peace Eagle) — Cultural History
18. **Holistic Healing: Natural Remedies** (Dr. Robert Christopher Wade) — Health & Wellness
19. **Bubba The Big Bad Rooster** (Erlene Fuller) — Illustrated Farm Fable
20. **Visual Brand Identity Showcase** (Master Yine, Max Meridian, Citius, Finchat, Grand Karma, Dé Habillé, Proxima Builders, Dad Bod, Webstones Tax)
