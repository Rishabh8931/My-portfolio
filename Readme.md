# Personal Portfolio

> A modern engineering portfolio designed to showcase projects, technical work, system design explorations, and the engineering journey behind them.

**Live:** `https://your-domain.com`
**Source:** `https://github.com/your-username/your-repo`

---

## Overview

This repository contains the source code for my personal portfolio.

The portfolio is not intended to be just a collection of projects. It is built as an **engineering interface** — a place where I document what I build, how I think about technical problems, and the decisions behind my implementations.

The primary goals are:

- Present projects through real engineering context
- Demonstrate frontend and backend capabilities
- Document system design and architectural decisions
- Maintain a fast and accessible web experience
- Keep the codebase modular and maintainable
- Experiment with modern web technologies

---

## Architecture

The application follows a component-driven architecture with a strong separation between presentation, content, and application logic.

```text
┌──────────────────────────────────────────────┐
│                  Portfolio                   │
├──────────────────────────────────────────────┤
│                                              │
│                 Presentation                 │
│                                              │
│   Navbar   Hero   Projects   Experience      │
│   About    Skills  Contact   Case Studies    │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│              Application Layer               │
│                                              │
│   Theme System   UI State   Interactions     │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│                 Content                      │
│                                              │
│   Projects   Experience   Skills   Metadata  │
│                                              │
├──────────────────────────────────────────────┤
│                                              │
│                Infrastructure                │
│                                              │
│      Build → Deploy → CDN → Browser         │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Engineering Principles

The project is built around a few principles:

### 01 — Performance

Keep the critical rendering path small and avoid unnecessary client-side JavaScript.

### 02 — Accessibility

Semantic HTML, keyboard navigation, readable contrast, and accessible interactive components are treated as first-class requirements.

### 03 — Maintainability

Components should have clear responsibilities rather than becoming large collections of unrelated UI logic.

### 04 — Progressive Enhancement

The page should remain useful even when JavaScript is unavailable or unnecessary.

### 05 — Design Systems

Typography, spacing, colors, borders, shadows, and interaction states are defined systematically instead of being scattered throughout the codebase.

### 06 — Engineering Over Decoration

Visual effects should support communication and hierarchy rather than exist purely for visual novelty.

---

## Tech Stack

| Layer           | Technology                    |
| --------------- | ----------------------------- |
| Framework       | Next.js                       |
| Language        | TypeScript                    |
| UI              | React                         |
| Styling         | Tailwind CSS                  |
| Typography      | Space Grotesk + IBM Plex Mono |
| Deployment      | Vercel                        |
| Version Control | Git + GitHub                  |

> The stack may evolve as the portfolio evolves.

---

## Key Features

### Theme System

Supports light and dark themes using a centralized theme strategy.

```text
User
 │
 ▼
Theme Toggle
 │
 ▼
Theme State
 │
 ▼
DOM Theme Attribute
 │
 ▼
CSS Variables
 │
 ├── Colors
 ├── Backgrounds
 ├── Borders
 └── Components
```

This keeps theme behavior consistent across the entire application.

---

### Responsive Interface

The interface is designed around multiple viewport sizes rather than treating mobile as an afterthought.

```text
Mobile
   ↓
Tablet
   ↓
Desktop
   ↓
Large Desktop
```

Layouts adapt based on available space while maintaining the same visual hierarchy.

---

### Project Showcase

Projects are presented with engineering context rather than only screenshots.

Each project can communicate:

```text
Problem
   ↓
Constraints
   ↓
Architecture
   ↓
Implementation
   ↓
Trade-offs
   ↓
Result
```

This makes the portfolio useful for understanding both **what was built** and **why it was built that way**.

---

### System Design

Selected projects include architectural explanations covering topics such as:

- API design
- Authentication
- Database architecture
- Caching
- Load balancing
- Event-driven systems
- Scalability
- Reliability
- Trade-offs

---

## Project Structure

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   └── ...
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   └── ...
│
├── data/
│   ├── projects/
│   ├── experience/
│   └── ...
│
├── public/
│   ├── images/
│   └── assets/
│
├── styles/
│   └── ...
│
├── package.json
├── tsconfig.json
└── README.md
```

> The structure may change as the application grows.

---

## Local Development

### Prerequisites

Make sure you have:

- Node.js
- pnpm / npm / yarn
- Git

### Clone

```bash
git clone https://github.com/your-username/your-repo.git

cd your-repo
```

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file when environment-specific configuration is required.

```env
NEXT_PUBLIC_SITE_URL=
```

Never commit secrets or private credentials to the repository.

---

## Development Workflow

The project follows a simple development loop:

```text
Idea
 │
 ▼
Design
 │
 ▼
Implementation
 │
 ▼
Test
 │
 ▼
Review
 │
 ▼
Deploy
 │
 ▼
Observe
 │
 └───────────────► Iterate
```

---

## Design System

### Typography

The portfolio uses two complementary typefaces:

**Space Grotesk**

Used for:

- Headings
- Navigation
- Body content
- UI elements

**IBM Plex Mono**

Used for:

- Metadata
- Technical labels
- Code
- Project information
- Small engineering details

The combination creates a balance between **modern product design** and **engineering-oriented visual language**.

---

## Performance Goals

The portfolio aims to maintain strong web performance by focusing on:

- Minimal client-side JavaScript
- Optimized images
- Responsive assets
- Server-rendered content where appropriate
- Lazy loading for non-critical resources
- Avoiding unnecessary dependencies
- Semantic HTML

Target:

```text
Performance      ██████████  90+
Accessibility    ██████████  90+
Best Practices   ██████████  90+
SEO              ██████████  90+
```

These are targets rather than claims of measured results.

---

## SEO

The portfolio is designed to be discoverable by search engines through:

- Semantic HTML
- Metadata
- Open Graph information
- Structured content
- Descriptive URLs
- Sitemap
- Robots configuration
- Server-rendered content where appropriate

---

## Accessibility

Accessibility considerations include:

- Semantic elements
- Keyboard navigation
- Focus states
- Accessible labels
- Sufficient color contrast
- Reduced-motion considerations
- Responsive typography

---

## Roadmap

- [x] Initial portfolio architecture
- [x] Responsive layout
- [x] Light / dark theme
- [x] Project showcase
- [x] Engineering-focused project pages
- [ ] Advanced project case studies
- [ ] Interactive architecture diagrams
- [ ] Performance monitoring
- [ ] Accessibility audit
- [ ] Automated Lighthouse checks
- [ ] Content management workflow
- [ ] More system design visualizations

---

## Engineering Notes

This repository is also an ongoing laboratory for experimenting with modern web engineering.

Areas of exploration include:

```text
Frontend Architecture
        │
        ├── Rendering strategies
        ├── Component architecture
        ├── Design systems
        └── Web performance
                │
                ▼
Backend Engineering
        │
        ├── API design
        ├── Authentication
        ├── Databases
        └── Distributed systems
                │
                ▼
Infrastructure
        │
        ├── Deployment
        ├── CI/CD
        ├── Observability
        └── Scalability
```

The portfolio itself is therefore treated as a **continuously evolving engineering project**, not a finished static artifact.

---

## Contributing

This is a personal portfolio, so direct contributions are generally not expected.

However, technical feedback, accessibility suggestions, performance observations, and thoughtful engineering discussions are welcome.

---

## License

The source code is available for educational and reference purposes.

Content, personal information, project descriptions, images, and branding are not licensed for reuse without permission.

---

## Contact

If you want to discuss engineering, collaborate on a project, or exchange ideas:

**Portfolio:** `https://your-domain.com`
**GitHub:** `https://github.com/your-username`
**LinkedIn:** `https://linkedin.com/in/your-username`

---

<div align="center">

### Built with curiosity. Engineered with intent.

`Design → Build → Measure → Learn → Iterate`

</div>
