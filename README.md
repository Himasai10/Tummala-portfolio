# Himasai Tummala - Portfolio

A dark, elegant, and highly interactive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Interactive Particle System** - Custom HTML5 Canvas particle constellation that responds to mouse movement
- **Scroll Animations** - Smooth reveal animations powered by Intersection Observer
- **Project Showcase** - Interactive project cards with expandable modals
- **Animated Timeline** - Interactive vertical timeline showing journey from high school to present
- **Skills Grid** - Clean, scannable skill categories
- **Strategic Hobbies Section** - Basketball, Poker, and Chess framed to impress recruiters
- **Responsive Design** - Fully responsive across all devices
- **Performance Optimized** - Respects `prefers-reduced-motion`, pauses animations when tab inactive

## Tech Stack

- **Frontend:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + Custom CSS
- **Icons:** Lucide React
- **Fonts:** Space Grotesk (headings), Inter (body), JetBrains Mono (monospace)

## Project Structure

```
src/
├── components/
│   ├── ParticleCanvas.jsx   # Interactive particle system
│   ├── Navbar.jsx           # Fixed navigation
│   ├── Hero.jsx            # Landing section
│   ├── About.jsx           # About + Stats
│   ├── Projects.jsx        # Project cards + modal
│   ├── Timeline.jsx        # Journey timeline
│   ├── Skills.jsx          # Skills grid
│   ├── Hobbies.jsx         # Hobbies with animations
│   └── Footer.jsx          # Contact + footer
├── hooks/
│   └── useScrollReveal.js   # Intersection Observer hook
├── data/
│   └── portfolio.js         # All content in one file
├── App.jsx
└── index.css               # Tailwind + custom styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Select `tummala-portfolio` as root directory
4. Deploy

### Manual Deployment

Build the project:
```bash
npm run build
```

The `dist/` folder contains the static site ready for deployment.

## Customization

All content is centralized in `src/data/portfolio.js`. Edit this file to update:
- Personal information
- Projects
- Timeline events
- Skills
- Contact details

## Performance

- Particle system optimized with spatial awareness and requestAnimationFrame
- Animations paused when tab is inactive
- Respects `prefers-reduced-motion` accessibility setting
- Mobile optimizations (fewer particles, no mouse interaction)

## License

MIT

---

Built with ♥ by Himasai Tummala