# Growing Missionaries Centre — Church Website

A modern, responsive church website for **Growing Missionaries Centre** (Isebania, Kenya). Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

- **Full-screen video hero** with animated gradient overlay
- **Multi-language support** — English / Kiswahili toggle
- **Ministry pages** — 9 ministries with detail pages, YouTube playlists, and photo galleries
- **Branches page** — 8 branch locations with photo mosaics
- **Sermons page** — Embedded YouTube video grid
- **Blog / News page** — Update posts with categories
- **Online giving** — Bank transfer and M-Pesa details with copy-to-clipboard
- **Photo lightbox** — Keyboard-navigable image viewer
- **Animated counters** — Scroll-triggered stats
- **Responsive design** — Mobile-first, glassmorphism UI
- **SEO metadata** — Schema.org JSON-LD, Open Graph tags

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Vite](https://vite.dev) | Build tool |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion) | Animations |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [Lucide React](https://lucide.dev) | Icons |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is in the `dist/` folder, ready for static hosting.

## Project Structure

```
src/
├── components/       # Reusable UI (Header, Footer, Lightbox, etc.)
├── context/          # Language context (EN/SW)
├── data/             # Site content, translations, sermons, blog
├── lib/              # Utilities (cn helper)
├── pages/            # Route pages (Home, About, Ministries, etc.)
├── types/            # TypeScript interfaces
├── App.tsx           # Root component with routing
├── main.tsx          # Entry point
└── index.css         # Tailwind imports + custom theme
```

## Pages

| Route | Page |
|-------|------|
| `/` | Landing hero (full-screen, no scroll) |
| `/about` | Mission, vision, objectives |
| `/ministries` | All ministry listing |
| `/ministries/:id` | Ministry detail (with video & gallery) |
| `/services` | Weekly schedule |
| `/branches` | Branch photo grids |
| `/giving` | Bank & M-Pesa giving info |
| `/contact` | Contact form & map |
| `/sermons` | YouTube sermon videos |
| `/blog` | News & updates |
| `/credits` | Image attributions |

## Customization

- **Colors & theme** — Edit `--color-*` variables in `src/index.css` (`@theme` block)
- **Content** — Edit `src/data/siteData.ts` for ministries, branches, services, giving details
- **Translations** — Edit `src/data/translations.ts` to add or modify language strings
- **Sermons** — Edit `src/data/sermons.ts`
- **Blog posts** — Edit `src/data/blog.ts`

## Image Credits

Images used under Creative Commons licenses. See the [Credits](/credits) page for details.

## License

© Growing Missionaries Centre. All rights reserved.
