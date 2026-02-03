# Bijaya Budhathoki - Personal Website

A minimal, elegant personal website for a Security Engineer & SRE. Built with Next.js 15 and the App Router, featuring a clean, futuristic design with subtle animations, MDX blog, and professional aesthetic.

🔗 **Live Site**: [bijayabudhathoki.com](https://bijayabudhathoki.com)

## Design Philosophy

- **Minimal & Elegant**: Clean lines, ample whitespace, and a refined color palette
- **Futuristic**: Modern design with subtle grid background and smooth transitions
- **Professional**: Focused on content and readability, perfect for a technical audience
- **Responsive**: Fully responsive across all devices
- **Performance-First**: Static export for lightning-fast page loads

## Features

### Core Features
- **Multi-page Navigation**: Dedicated pages for Home, About, Portfolio, Blog, Resume, and Contact
- **Subtle Grid Background**: Elegant animated background pattern
- **Smooth Animations**: Gentle fade-in effects using Framer Motion
- **Dark Theme**: Carefully selected colors for optimal readability
- **Static Export**: Pre-rendered HTML for GitHub Pages deployment

### Blog Features
- **MDX Support**: Write blog posts in Markdown with React components
- **Syntax Highlighting**: Beautiful code blocks with Atom One Dark theme
- **Copy Code Button**: One-click code copying with visual feedback
- **Reading Progress Bar**: Visual scroll indicator on blog posts
- **Search & Filter**: Fuzzy search with Fuse.js and tag-based filtering
- **Pagination**: 6 posts per page with smooth navigation
- **Responsive Design**: Optimized for mobile and desktop reading

### Typography
- **Inter**: Clean, professional body text
- **JetBrains Mono**: Monospace font for code and technical elements

## Tech Stack

- **Framework**: Next.js 15.5.11 (App Router)
- **UI Library**: React 19
- **Styling**: CSS Modules with custom properties
- **Animations**: Framer Motion
- **Blog**: MDX with next-mdx-remote
- **Code Highlighting**: rehype-highlight with highlight.js
- **Search**: Fuse.js (fuzzy search)
- **Deployment**: GitHub Pages (static export)
- **PDF Generation**: Puppeteer (GitHub Actions)

## Color Palette

- **Background**: Dark (#0a0a0f, #12121a, #1a1a24)
- **Text**: White (#ffffff) and muted grays (#a0a0b2, #6b6b7a)
- **Accent**: Indigo (#6366f1, #818cf8)
- **Borders**: Subtle with transparency

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
```

The static site will be generated in the `out/` folder.

## Project Structure

```
personal_website/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with navigation
│   ├── page.js            # Home page
│   ├── about/             # About page
│   ├── portfolio/         # Portfolio page
│   ├── blog/              # Blog pages
│   │   ├── page.js        # Blog listing
│   │   ├── [slug]/        # Individual blog posts
│   │   └── page/[number]/ # Pagination
│   ├── resume/            # Resume page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navigation.jsx     # Header navigation
│   ├── Footer.jsx         # Footer
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About component
│   ├── Portfolio.jsx      # Portfolio grid
│   ├── Resume.jsx         # Resume content
│   ├── Contact.jsx        # Contact form
│   ├── BlogList.jsx       # Blog listing with search
│   ├── CodeBlock.jsx      # Code block with copy button
│   ├── ReadingProgress.jsx # Reading progress bar
│   └── ParticleBackground.jsx # Animated grid
├── content/               # Content files
│   └── blog/             # MDX blog posts
├── lib/                   # Utility functions
│   └── posts.js          # Blog post utilities
├── public/                # Static assets
│   ├── resume.pdf        # Auto-generated resume PDF
│   └── favicon.ico       # Site favicon
├── scripts/               # Build scripts
│   └── generate-pdf.cjs  # Resume PDF generator
├── docs/                  # Documentation
│   └── blog-features-todo.md # Future features
└── next.config.mjs        # Next.js configuration
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.jsx`):
   - Update name, title, and description

2. **About Page** (`components/About.jsx`):
   - Update bio text
   - Update skills array
   - Update certifications

3. **Portfolio** (`components/Portfolio.jsx`):
   - Replace sample projects with your work
   - Update project links and descriptions

4. **Resume** (`components/Resume.jsx`):
   - Update work experience
   - Update education
   - Update certifications
   - Update skills

5. **Contact** (`components/Contact.jsx`):
   - Update email address
   - Update location
   - Update social links (GitHub, LinkedIn, Twitter)

6. **Footer** (`components/Footer.jsx`):
   - Update social profile links

### Writing Blog Posts

Create a new MDX file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-02-15"
author: "Bijaya Budhathoki"
excerpt: "Brief description of your post"
tags: ["kubernetes", "security", "devops"]
featured: false
---

Your content here with full MDX support!

## Code Examples

```yaml
apiVersion: v1
kind: Pod
```

## Features
- Bullet points
- **Bold text**
- [Links](https://example.com)
```

Supported code languages: yaml, bash, javascript, typescript, python, go, terraform, dockerfile, json, and more.

### Customize Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --accent-primary: #6366f1;
  --accent-secondary: #818cf8;
  /* ... other colors */
}
```

## Deployment to GitHub Pages

### Option 1: Manual Deployment

```bash
npm run build
```

Then push the `out/` folder to your `gh-pages` branch.

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Configure GitHub Pages

1. Go to repository Settings → Pages
2. Set source to `gh-pages` branch
3. Your site will be live at `https://username.github.io/`

## Automated Resume PDF Generation

The resume page automatically generates a PDF version using GitHub Actions.

### How It Works

1. **Single Source of Truth**: Resume content lives in `components/Resume.jsx`
2. **Auto-Generate**: GitHub Action triggers when Resume files change
3. **Perfect Quality**: Puppeteer renders the page and generates PDF
4. **Auto-Commit**: PDF saved to `public/resume.pdf` and committed back
5. **Always Up-to-Date**: PDF regenerates whenever you update the resume

### Local Testing

Generate PDF locally:

```bash
npm run generate-pdf
```

This will:
1. Build your Next.js site
2. Use Puppeteer to generate PDF from `/resume` page
3. Save to `public/resume.pdf`

**Note**: PDF generation may not work in WSL environments. It will work correctly in GitHub Actions.

### GitHub Action Setup

The workflow (`.github/workflows/generate-resume-pdf.yml`) runs automatically when:
- You push changes to `components/Resume.jsx` or `components/Resume.css`
- You manually trigger it from GitHub Actions tab

### First Time Setup

1. Go to your repo Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Save

This allows the GitHub Action to commit the generated PDF back to your repo.

## Future Features

See `docs/blog-features-todo.md` for planned enhancements including:
- Table of Contents
- Previous/Next Post Navigation
- Anchor Links for Headings
- Archive Page
- Related Posts
- And more...

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint
- `npm run generate-pdf` - Generate resume PDF locally

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Static Export**: Pre-rendered HTML for instant page loads
- **Optimized Assets**: Automatic code splitting and minification
- **Responsive Images**: Optimized for all screen sizes

## License

MIT License - feel free to use this as a template for your own portfolio!

## Credits

Built with ❤️ by Bijaya Budhathoki

---

**Stack**: Next.js 15 · React 19 · MDX · Framer Motion · Deployed on GitHub Pages
