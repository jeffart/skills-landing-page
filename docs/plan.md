& # Plan: AutomateAI Landing Page

## Context
The user provided 3 reference images (IMG_7283.jpg, IMG_7284.jpg, structure.PNG) showing a dark-themed AI automation SaaS landing page called **AutomateAI**. The repo is empty (no source files yet). The target stack is **Vite + React + Tailwind CSS v4 (PostCSS mode)**.

## Visual Spec (from images)
- **Navbar**: `AutomateAI` logo in blue (left), links `Services | Testimonials | Contact` (right), dark background
- **Hero**: Two-column layout — left: headline "Automate Your Business with AI", subtext, two CTA buttons (`Get Started` blue fill, `Learn More` outline); right: grey placeholder box "Image Coming Soon"
- **Services ("What We Offer")**: iridescent/gradient light background, title + subtitle, 6-card grid:
  - Workflow Automation, AI Chatbots, Data Processing, Email/CRM, Integrations, Reporting
- **Testimonials**: 3 cards with avatar initials, name, quote
- **Footer**: 3-column with links + contact info

## Implementation Steps

### 1. Initialize Vite + React project
```
npm create vite@latest . -- --template react
npm install
```

### 2. Install Tailwind CSS v4 (PostCSS mode)
```
npm install tailwindcss @tailwindcss/vite
```
Configure `vite.config.js` with `@tailwindcss/vite` plugin.
Add `@import "tailwindcss"` to `src/index.css`.

### 3. Create component files
- `src/components/Navbar.jsx` — sticky dark navbar with logo + nav links
- `src/components/Hero.jsx` — two-col dark hero with CTAs + image placeholder
- `src/components/Services.jsx` — 6-card grid on iridescent gradient bg
- `src/components/Testimonials.jsx` — 3 testimonial cards with initials avatars
- `src/components/Footer.jsx` — 3-column footer

### 4. Wire up in `src/App.jsx`
Import and render all components in order: Navbar → Hero → Services → Testimonials → Footer

### 5. Clean up boilerplate
Remove default Vite template styles/content from `App.jsx` and `index.css`.

## Critical Files to Create/Modify
| File | Action |
|------|--------|
| `package.json` | created by Vite init |
| `vite.config.js` | add Tailwind plugin |
| `src/index.css` | replace with Tailwind import |
| `src/App.jsx` | replace with component composition |
| `src/components/Navbar.jsx` | create |
| `src/components/Hero.jsx` | create |
| `src/components/Services.jsx` | create |
| `src/components/Testimonials.jsx` | create |
| `src/components/Footer.jsx` | create |

## Verification
1. Run `npm run dev` → open `http://localhost:5173`
2. Check navbar is sticky and links scroll to sections
3. Check Hero renders with both CTA buttons and placeholder box
4. Check Services shows 6 cards on gradient background
5. Check Testimonials shows 3 cards
6. Check Footer renders 3 columns
7. Verify responsiveness on mobile viewport
