# Professional SaaS Marketing Website

A modern, multilingual marketing website built with Astro, featuring a professional design system powered by shadcn/ui and Tailwind CSS v4. Perfect for SaaS products, AI platforms, or any modern web application requiring a polished marketing presence.

<div align='center'>

![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## ✨ Features

### 🎨 Modern Design System

- **shadcn/ui Components**: 14+ production-ready components (Button, Card, Badge, Separator, Sheet, Tabs, Accordion, etc.)
- **Tailwind CSS v4**: Latest version with CSS variables for theming
- **Design Tokens**: Comprehensive color palette with Stripe-inspired aesthetic
- **Responsive Design**: Mobile-first approach with elegant layouts
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Smooth Animations**: Slide-up, fade-in, and scale animations for polished UX

### 🌍 Internationalization (i18n)

- **7 Languages Supported**: English (default), Spanish, French, German, Portuguese, Arabic, Chinese
- **Astro i18n Routing**: Built-in routing with locale prefixes (`/es/`, `/fr/`, etc.)
- **Type-Safe Translations**: Full TypeScript support for all translations
- **RTL Support**: Ready for right-to-left languages (Arabic, Hebrew, etc.)
- **Localized Content**: Blog posts, about pages, and UI elements
- **SEO Optimized**: Sitemaps and RSS feeds with i18n support
- **Default Locale**: English served at root `/` (no `/en/` prefix)

### 📄 Content Management

- **Blog System**: Markdown-based blog with syntax highlighting (Shiki)
- **Content Collections**: Type-safe content with Astro's content layer
- **Tag System**: Organize posts by tags with dedicated tag pages
- **Search**: Full-text search powered by Pagefind
- **Archives**: Time-based post organization
- **OG Images**: Auto-generated Open Graph images for social sharing
- **Featured Posts**: Highlight important posts on the homepage
- **Related Posts**: AI-powered semantic similarity using pre-computed embeddings (transformers.js)

### 🚀 SaaS-Ready Pages

- **Homepage**: Hero section with gradient backgrounds, feature grids, stats, testimonials, and CTAs
- **Features Page**: Detailed AI capabilities showcase with interactive tabs
- **Pricing Page**: Multi-tier pricing cards with feature comparison
- **About Page**: Localized about content with markdown support
- **Blog**: Full-featured blog with pagination and post details at `/blog`
- **Design System**: Component showcase page at `/design-system`

### ⚡ Performance & SEO

- **Lighthouse Score**: 100/100 for Performance, Accessibility, Best Practices, SEO
- **View Transitions**: Smooth page transitions with Astro's View Transitions API
- **Optimized Images**: Automatic image optimization with responsive layouts
- **Sitemap Generation**: Automatic sitemap with i18n support
- **RSS Feeds**: Per-locale RSS feeds for blog content
- **Fast Build Times**: Static site generation with Astro's island architecture

## 📦 Tech Stack

- **Framework**: [Astro 5.17](https://astro.build)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com) (New York style)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: [Lucide Icons](https://lucide.dev)
- **Interactivity**: [React 18](https://react.dev)
- **Content**: Markdown with [remark](https://github.com/remarkjs/remark) plugins
- **Syntax Highlighting**: [Shiki](https://shiki.style)
- **Search**: [Pagefind](https://pagefind.app)
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org)
- **Package Manager**: [Bun](https://bun.sh)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.3.8 or higher (recommended)
- OR [Node.js](https://nodejs.org) v20.19.0 with [pnpm](https://pnpm.io) v10.6.5 (via Volta)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/) for Cloudflare deployment

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd astro-marketing-website
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser at `http://localhost:4321`

### Project Structure

```
/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/         # Optimized assets
│   ├── components/     # Astro & React components
│   │   ├── sections/  # Reusable section components
│   │   └── ui/        # shadcn/ui components
│   ├── data/           # Content collections
│   │   ├── about/     # Localized about pages
│   │   └── blog/      # Blog posts by locale
│   │       ├── en/    # English posts
│   │       ├── es/    # Spanish posts
│   │       └── ...
│   ├── i18n/           # Internationalization
│   │   ├── config.ts  # Locale configuration
│   │   ├── locales/   # Translation files
│   │   └── utils.ts   # i18n utilities
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   │   ├── [...locale]/ # Localized pages
│   │   │   ├── index.astro      # Homepage
│   │   │   ├── blog/            # Blog pages
│   │   │   ├── about.astro      # About page
│   │   │   ├── search.astro     # Search page
│   │   │   ├── features.astro   # Features page
│   │   │   ├── pricing.astro    # Pricing page
│   │   │   └── tags/            # Tag pages
│   │   ├── design-system.astro  # Component showcase
│   │   └── robots.txt.ts        # Robots.txt generation
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── astro.config.ts     # Astro configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🛠️ Configuration

### Site Configuration

Edit `src/config.ts` to configure your site:

```typescript
export const SITE = {
  website: "https://your-domain.com",
  author: "Your Name",
  desc: "Your site description",
  postPerIndex: 4,  // Posts per page on homepage
  postPerPage: 10,  // Posts per page on blog
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};
```

### Locale Configuration

Add or modify locales in `src/i18n/config.ts`:

```typescript
export const localeToProfile = {
  en: {
    name: "English",
    messages: ENLocale,
    langTag: "en-US",
    direction: "ltr",
    googleFontName: "Inter",
    default: true,  // Served at root path
  },
  es: {
    name: "Español",
    messages: ESLocale,
    langTag: "es-ES",
    direction: "ltr",
    googleFontName: "Inter",
  },
  // Add more locales...
};
```

### Theme Colors

Customize your color palette in `src/styles/global.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --accent: 240 4.8% 95.9%;
  /* ... more colors */
}
```

## 📝 Content Management

### Adding Blog Posts

1. Create a markdown file in `src/data/blog/<locale>/your-post.md`:

```markdown
---
title: "Your Post Title"
description: "Post description for SEO"
pubDatetime: 2024-01-01T00:00:00Z
modDatetime: 2024-01-02T00:00:00Z
author: "Your Name"
featured: true
draft: false
tags:
  - technology
  - tutorial
---

Your content here...
```

2. Supported frontmatter fields:
   - `title`: Post title (required)
   - `description`: SEO description
   - `pubDatetime`: Publication date (required)
   - `modDatetime`: Last modified date
   - `author`: Author name
   - `featured`: Show on homepage
   - `draft`: Hide from production
   - `tags`: Array of tags
   - `ogImage`: Custom OG image path
   - `canonicalURL`: Canonical URL for SEO

### Adding Translations

1. Create/edit translation file in `src/i18n/locales/<locale>.ts`:

```typescript
import type { I18nStrings } from "../types";

const locale: I18nStrings = {
  "site.title": "Your Site Title",
  "site.desc": "Your site description",
  "home": "Home",
  "posts": "Blog",
  // ... more translations
};

export default locale;
```

### Adding About Page

Create `src/data/about/about.<locale>.md`:

```markdown
---
title: "About Us"
description: "Learn more about us"
---

Your about content here...
```

## 🧞 Commands

| Command | Action |
|:--------|:-------|
| `bun install` | Install dependencies |
| `bun run dev` | Start dev server at `localhost:4321` |
| `bun run build` | Build production site to `./dist/` (includes Pagefind search index) |
| `bun run build:full` | Generate similarities + build (for related posts feature) |
| `bun run preview` | Preview build locally before deployment |
| `bun run astro ...` | Run Astro CLI commands |
| `bun run format` | Format code with Biome |
| `bun run lint` | Lint code with Biome |
| `bun run test` | Run tests with Vitest |

## 🚢 Deployment

This site is configured for **Cloudflare Workers** deployment with the `@astrojs/cloudflare` adapter.

### Cloudflare Workers (Recommended)

Deploy automatically via GitHub Actions (see `.github/workflows/deploy.yml`):

1. **Optionally:** Configure the `name` property inside your `wrangler.json`.
2. In your **Cloudflare Dashboard (Workers & Pages > your-worker > Settings > Variables and Secrets)**, add:
   - `TURNSTILE_SITE_KEY`: Your Cloudflare Turnstile Site Key
   - `TURNSTILE_SECRET_KEY`: Your Cloudflare Turnstile Secret Key
3. Add the following to your **GitHub repository** (`Settings > Secrets and variables > Actions`):
   - **Secrets:**
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Workers permissions
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
   - **Variables:**
     - `TURNSTILE_SITE_KEY`: Your Cloudflare Turnstile Site Key (if needed during build)
     - `TURNSTILE_SECRET_KEY`: Your Cloudflare Turnstile Secret Key (if needed during build)
4. Push to `main` branch to trigger deployment

Or deploy manually:

```bash
bun run build
bun run deploy:cf
```

### Netlify

```bash
npm run build
# Deploy ./dist folder
```

### Vercel

```bash
npm run build
# Deploy ./dist folder
```

### GitHub Pages

Update `astro.config.ts`:

```typescript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',
});
```

## 🎨 Design System

Visit `/design-system` to see all available components with live examples:

- Buttons (variants: default, outline, ghost, destructive)
- Cards with headers, content, and footers
- Badges (variants: default, secondary, outline, destructive)
- Separators (horizontal and vertical)
- Tabs with controlled states
- Accordions for collapsible content
- And more...

## 📱 Responsive Design

All components are fully responsive with breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🌙 Dark Mode

Dark mode is implemented using CSS variables and Tailwind's `dark:` variant. The theme preference is stored in localStorage and respects system preferences.

## 🍪 Cookie Consent & Analytics

GDPR-compliant cookie consent is implemented using [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) with Google Tag Manager integration:

- **Granular Consent**: Users can accept/reject analytics and marketing cookies separately
- **GTM Integration**: Google Tag Manager loads only after analytics consent
- **Consent Persistence**: User preferences stored and respected across sessions
- **Customizable**: Full control over cookie categories and styling
- **Legal Pages**: Privacy Policy, Terms of Service, Security Policy, and GDPR pages included

For detailed setup instructions, see [docs/GTM_COOKIE_CONSENT.md](docs/GTM_COOKIE_CONSENT.md).


## 🔍 SEO Features

- Semantic HTML structure
- Open Graph meta tags
- Twitter Card support
- Canonical URLs
- XML Sitemap with i18n
- RSS Feeds per locale
- Structured data (JSON-LD)
- Optimized meta descriptions

## 🧪 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Built with [Astro](https://astro.build)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Inspired by [AstroPaper](https://github.com/satnaing/astro-paper)
- i18n architecture inspired by [astro-paper-i18n](https://github.com/yousef8/astro-paper-i18n)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


---

Made with ❤️ using Astro, shadcn/ui, and Tailwind CSS v4
