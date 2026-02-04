# Personal Website - Comprehensive Documentation

## Project Overview

Personal portfolio and blog website for Bijaya Budhathoki - Site Reliability Engineer & Security Engineer.

**Tech Stack:**
- Next.js 15 (App Router)
- React 18
- Framer Motion (animations)
- MDX (blog content)
- Static Export (for GitHub Pages)

**Key URLs:**
- Production: To be deployed on GitHub Pages
- Repository: TBD

---

## Design System & Style Guide

### Color Palette

```css
/* Primary Colors */
--bg-primary: #0a0a0f        /* Main background - very dark blue-black */
--bg-secondary: #12121a      /* Card backgrounds - slightly lighter */
--bg-tertiary: #1a1a24       /* Tertiary backgrounds - code blocks, forms */

/* Text Colors */
--text-primary: #ffffff      /* Main headings, important text - white */
--text-secondary: #a0a0b2    /* Body text, descriptions - light gray */
--text-muted: #6b6b7a        /* Metadata, subtle text - muted gray */

/* Accent Colors */
--accent-primary: #6366f1    /* Primary brand color - indigo/purple */
--accent-secondary: #818cf8  /* Lighter accent - for hovers */
--accent-glow: rgba(99, 102, 241, 0.3)  /* Glow effects */

/* Border & States */
--border-color: rgba(255, 255, 255, 0.08)  /* Subtle borders */
--border-hover: rgba(99, 102, 241, 0.3)    /* Hover state borders */

/* Social Media Brand Colors */
--social-twitter: #1DA1F2
--social-linkedin: #0A66C2

/* Overlays */
--overlay-dark: rgba(10, 10, 15, 0.8)    /* Navigation scrolled state */
--overlay-black: rgba(0, 0, 0, 0.2)      /* Code block headers, mobile menu */
```

### Container Width Hierarchy

```css
--container-narrow: 800px    /* Reserved for future use */
--container-medium: 990px    /* STANDARD WIDTH - Used across all pages */
--container-wide: 1100px     /* Reserved for future use */
--container-full: 1200px     /* Navigation, Footer - full width */
```

**Current Implementation (Standardized 990px):**
- **All content pages use 990px** for consistent alignment and optimal readability
- Pages using `--container-medium` (990px):
  - About page
  - Work/Portfolio page
  - Blog list page
  - Blog post detail pages
  - Contact page
  - Privacy page
  - Resume page
- **Full (1200px)**: Only used for navigation and footer

**Rationale for 990px:**
- Balances readability (not too wide for text) with layout flexibility (enough room for grids)
- Ensures all page titles align at the exact same horizontal position
- Works well for both text-heavy content (blog posts, about) and card-based layouts (blog list, work)
- Eliminates double-padding issues by relying solely on `.section` class padding

### Spacing Scale (6-tier system)

```css
--space-xs: 0.5rem    /* 8px  - Small gaps between tags, inline elements */
--space-sm: 1rem      /* 16px - Form fields, list items, vertical rhythm */
--space-md: 1.5rem    /* 24px - Section internal spacing, card padding */
--space-lg: 2rem      /* 32px - Grid gaps, major card spacing */
--space-xl: 3rem      /* 48px - Section margins, vertical separation */
--space-2xl: 4rem     /* 64px - Major section separation, page-level spacing */
```

**Usage Guidelines:**
- Use `--space-xs` for tight groupings (tags, badges, small elements)
- Use `--space-sm` to `--space-md` for component internal spacing
- Use `--space-lg` for grid gaps and card-to-card spacing
- Use `--space-xl` to `--space-2xl` for major section breaks

### Border Radius Scale

```css
--radius-sm: 6px     /* Small elements - tags, badges, buttons */
--radius-md: 8px     /* Medium elements - form inputs, primary buttons */
--radius-lg: 12px    /* Large elements - cards (project, blog, resume) */
```

**Usage:**
- **6px**: Tags, badges, featured labels, small buttons, pagination numbers
- **8px**: Form inputs, primary/secondary buttons, navigation items
- **12px**: All card components (project cards, blog cards, resume sections)

### Typography System

**Font Families:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;  /* Body text */
font-family: 'JetBrains Mono', monospace;  /* Code, technical elements */
```

**Heading Sizes (Responsive with clamp):**
```css
/* Global defaults in globals.css */
h1: clamp(2.5rem, 6vw, 4rem)    /* 40px → 64px */
   font-weight: 700
   line-height: 1.2

h2: clamp(2rem, 4vw, 3rem)      /* 32px → 48px */
   font-weight: 600
   line-height: 1.2

h3: clamp(1.25rem, 2.5vw, 1.75rem)  /* 20px → 28px */
   font-weight: 600
   line-height: 1.2
```

**Blog-specific (MDX) Heading Sizes:**
```css
/* Blog post title */
.post-header h1: clamp(2.5rem, 6vw, 4rem)

/* MDX content headings */
.mdx-h1: clamp(2rem, 4vw, 3rem)
.mdx-h2: clamp(1.75rem, 3.5vw, 2.5rem)
.mdx-h3: clamp(1.25rem, 2.5vw, 1.75rem)
```

**Body Text:**
```css
p: clamp(0.95rem, 1.5vw, 1.05rem)
   line-height: 1.7
   color: var(--text-secondary)
```

**Why Responsive Typography:**
- All headings use `clamp()` for fluid scaling
- Ensures readability across all screen sizes
- No need for multiple media query breakpoints
- Maintains hierarchy on mobile and desktop

### Shadow System

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1)      /* Subtle lift - cards at rest */
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15)    /* Elevated - cards on hover */
--shadow-glow: 0 0 12px var(--accent-glow)     /* Accent glow - current timeline dot */
```

**Usage:**
- All cards have `box-shadow: var(--shadow-sm)` by default
- On hover, cards transition to `box-shadow: var(--shadow-md)`
- Glow shadow used for special elements (current career position, progress bar)

### Transition System

```css
--transition-fast: 0.2s ease    /* Quick interactions - hovers, clicks, small elements */
--transition-base: 0.3s ease    /* Standard - cards, larger elements, transforms */
```

**Usage Pattern:**
- **Fast (0.2s)**: Links, buttons, color changes, small hovers
- **Base (0.3s)**: Cards, timeline items, scale transforms, complex transitions

### Button Styles

**Primary Button:**
```css
.btn-primary {
  background: var(--accent-primary);
  color: var(--text-primary);
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}
.btn-primary:hover {
  background: var(--accent-secondary);
  transform: translateY(-1px);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}
.btn-secondary:hover {
  border-color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.05);
}
```

### Card Styles

**Standard Card Pattern:**
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}
.card:hover {
  border-color: var(--border-hover);
  transform: translateY(-2px) or translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

**Examples:**
- `.glass-card` (globals.css)
- `.project-card` (Portfolio.css)
- `.blog-card` (BlogList.css)
- `.resume-content` (Resume.css)

### Form Styles

```css
input, textarea {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 0.875rem;
  color: var(--text-primary);
  transition: all var(--transition-fast);
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  background: var(--bg-tertiary);
}
```

### Accent Line Component

**Visual Element:**
- Appears above section headers (About, Portfolio, Blog, Contact)
- Purple horizontal line for visual accent
- Consistent placement and styling

```css
.accent-line {
  width: 60px;
  height: 3px;
  background: var(--accent-primary);
  border-radius: 2px;
  margin-bottom: var(--space-xs);
}
```

**Where Used:**
- About page (section-header)
- Portfolio page (section-header)
- Blog page (section-header in page.js)
- Contact page (section-header)
- NOT used on: Resume, Privacy (different page types)

---

## Architecture

### Project Structure

```
/home/bijaya/test/personal_website/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout with Navigation & Footer
│   ├── page.js                   # Homepage (Hero component)
│   ├── globals.css               # Global styles & design system variables
│   ├── about/page.js            # About page
│   ├── portfolio/page.js        # Portfolio/Work page
│   ├── contact/page.js          # Contact page
│   ├── resume/page.js           # Resume page
│   ├── privacy/page.js          # Privacy Policy page
│   ├── blog/
│   │   ├── page.js              # Blog index (with section-header)
│   │   ├── [slug]/
│   │   │   ├── page.js          # Individual blog post
│   │   │   └── blogPost.css     # Blog post specific styles
│   │   └── page/[number]/page.js # Pagination
│   └── not-found.js             # 404 page
│
├── components/                   # React components
│   ├── Navigation.jsx/css       # Fixed top navigation
│   ├── Footer.jsx/css           # Site footer with disclaimer
│   ├── Hero.jsx/css             # Homepage hero section
│   ├── About.jsx/css            # About page content
│   ├── Portfolio.jsx/css        # Portfolio/projects grid
│   ├── Contact.jsx/css          # Contact form & info
│   ├── Resume.jsx/css           # Resume content
│   ├── Privacy.jsx/css          # Privacy policy content
│   ├── BlogList.jsx/css         # Blog cards grid with search/filter
│   ├── CodeBlock.jsx/css        # Code block with copy button
│   └── ReadingProgress.jsx/css  # Blog reading progress bar
│
├── lib/
│   └── posts.js                 # Blog post utilities (MDX parsing, pagination)
│
├── content/
│   └── blog/                    # MDX blog posts
│       ├── kubernetes-security-hardening.mdx
│       ├── devsecops-ci-cd-pipelines.mdx
│       ├── zero-trust-service-mesh.mdx
│       └── terraform-security-best-practices.mdx
│
├── public/
│   ├── resume.pdf               # Downloadable PDF resume
│   └── .nojekyll               # GitHub Pages config
│
├── docs/
│   └── blog-features-todo.md    # Remaining blog features roadmap
│
├── next.config.mjs              # Next.js config (static export)
├── package.json
└── claude.md                    # This file
```

### Routing System

**Static Routes (App Router):**
- `/` - Homepage (Hero)
- `/about` - About page
- `/portfolio` - Work/Projects
- `/blog` - Blog index (page 1)
- `/blog/page/[number]` - Blog pagination
- `/blog/[slug]` - Individual blog post
- `/contact` - Contact page
- `/resume` - Resume page
- `/privacy` - Privacy policy

**Navigation Items (components/Navigation.jsx):**
```javascript
const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Work' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];
```

**Note:** Resume is NOT in main navigation - accessible via:
- Footer links
- About page CTA section
- Hero page "View Resume" button

### Page Layout Pattern

**Standard Page Structure:**
```jsx
export default function Page() {
  return (
    <div style={{ paddingTop: '80px' }}>  {/* Fixed nav offset */}
      <section className="section">
        <div className="[page]-container">
          {/* Optional: section-header with accent-line */}
          <div className="section-header">
            <div className="accent-line"></div>
            <h2>Page Title</h2>
            <p className="section-subtitle">Optional subtitle</p>
          </div>

          {/* Page content */}
          <ComponentName />
        </div>
      </section>
    </div>
  );
}
```

**Key Points:**
- `paddingTop: 80px` accounts for fixed navigation
- `.section` class provides min-height and base padding
- Container classes use appropriate width variable
- Section headers follow consistent pattern where applicable

### Component Architecture

**Client vs Server Components:**

**Client Components ('use client'):**
- Navigation.jsx (state for mobile menu, scroll detection)
- All page content components (About, Portfolio, Contact, etc.) - use Framer Motion
- BlogList.jsx (search/filter state)
- CodeBlock.jsx (copy button state)
- ReadingProgress.jsx (scroll tracking)

**Server Components (default):**
- app/layout.js
- All page.js files (pages themselves)
- lib/posts.js (MDX utilities)

**Why this split:**
- Pages are server components for better SEO and initial load
- Content components are client for animations (Framer Motion)
- Interactive features (search, copy, scroll) require client state

### Animation System (Framer Motion)

**Standard Fade-In Pattern:**
```jsx
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={fadeIn}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

**Staggered Children:**
```jsx
<motion.div
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }}
>
  {children.map(child => (
    <motion.div variants={fadeIn} key={child.id}>
      {child}
    </motion.div>
  ))}
</motion.div>
```

**When NOT to animate:**
- Don't animate on every page load after first visit
- Don't animate critical interactive elements (buttons work immediately)
- Static pages (Resume print view) have animations hidden

---

## Blog System

### MDX Configuration

**Plugins Used:**
```javascript
// app/blog/[slug]/page.js
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

options: {
  mdxOptions: {
    remarkPlugins: [remarkGfm],        // GitHub Flavored Markdown
    rehypePlugins: [rehypeHighlight],  // Syntax highlighting
  },
}
```

**Syntax Highlighting:**
- Theme: Atom One Dark (`highlight.js/styles/atom-one-dark.css`)
- Languages: Auto-detected from code fence language
- Custom styling in CodeBlock.css and blogPost.css

### Blog Post Structure (MDX)

**Frontmatter Format:**
```yaml
---
title: "Post Title"
date: "2024-01-15"
excerpt: "Brief description for blog cards"
author: "Bijaya Budhathoki"
tags: ["Tag1", "Tag2", "Tag3"]
featured: true  # Optional - shows featured badge
readingTime: 8  # Minutes
---

# Heading 1

Content here...

## Heading 2

More content...
```

**Frontmatter Fields:**
- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD)
- `excerpt` (required): Short description for cards
- `author` (required): Author name
- `tags` (required): Array of tags for filtering
- `featured` (optional): Boolean for featured badge
- `readingTime` (required): Estimated reading time in minutes

### MDX Component Overrides

**Custom Components (app/blog/[slug]/page.js):**
```javascript
const components = {
  h1: (props) => <h1 className="mdx-h1" {...props} />,
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  h3: (props) => <h3 className="mdx-h3" {...props} />,
  p: (props) => <p className="mdx-p" {...props} />,
  a: (props) => <a className="mdx-link" {...props} />,
  ul: (props) => <ul className="mdx-ul" {...props} />,
  ol: (props) => <ol className="mdx-ol" {...props} />,
  li: (props) => <li className="mdx-li" {...props} />,
  pre: ({ children, ...props }) => {
    // Custom CodeBlock component for syntax highlighting
  },
  blockquote: (props) => <blockquote className="mdx-blockquote" {...props} />,
}
```

**Styling Applied:**
- All headings: Responsive sizing with clamp, white text
- Links: Accent color with hover underline
- Lists: Custom markers in accent color
- Code blocks: Custom CodeBlock component with copy button

### Blog Pagination

**Configuration (lib/posts.js):**
```javascript
const POSTS_PER_PAGE = 6;

export function getPaginatedPosts(page = 1, postsPerPage = POSTS_PER_PAGE) {
  // Returns: { posts, currentPage, totalPages }
}
```

**URL Structure:**
- Page 1: `/blog`
- Page 2+: `/blog/page/2`, `/blog/page/3`, etc.

**Pagination UI:**
- Previous/Next buttons
- Page numbers (up to 5 visible)
- Current page highlighted with accent color

### Blog Search & Filtering

**Features (BlogList.jsx):**
1. **Search**: Filters by title, excerpt, and content
2. **Tag Filtering**: Click tag to filter posts by that tag
3. **Combined**: Search + tag filter work together
4. **Results Count**: Shows "X posts found"

**State Management:**
```javascript
const [searchQuery, setSearchQuery] = useState('');
const [selectedTag, setSelectedTag] = useState('');

// Filter logic
const filteredPosts = posts.filter(post => {
  const matchesSearch = searchQuery === '' ||
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

  const matchesTag = selectedTag === '' ||
    post.tags.includes(selectedTag);

  return matchesSearch && matchesTag;
});
```

### Code Block Features

**CodeBlock Component (components/CodeBlock.jsx):**
- **Language Detection**: Automatically detects from code fence
- **Copy Button**: Copies code to clipboard with visual feedback
- **Syntax Highlighting**: Via rehype-highlight + highlight.js
- **Custom Scrollbar**: Styled scrollbar for horizontal overflow
- **Header**: Shows language name in uppercase

**Copy Button States:**
```javascript
const [copied, setCopied] = useState(false);

// On click:
// 1. Copy to clipboard
// 2. Show "Copied!" text + checkmark icon
// 3. After 2s, reset to "Copy" + copy icon
```

### Reading Progress Bar

**ReadingProgress Component:**
- Fixed at top of page (below navigation)
- Calculates scroll percentage
- Gradient bar fills left-to-right
- Only visible on blog post pages
- Smooth animation with CSS transition

```javascript
// Scroll calculation
const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
```

---

## Key Features & Implementations

### Navigation System

**Desktop Navigation:**
- Fixed at top, transparent background
- On scroll: Adds dark overlay background + border-bottom
- Logo on left, nav items on right
- Active page highlighted with bottom border
- Smooth transitions

**Mobile Navigation:**
- Hamburger menu button (right side)
- Slide-in panel from right
- Full-height overlay with blur
- Active page highlighted with left border + background
- Scroll locking when menu open (prevents body scroll)

**Scroll Lock Implementation:**
```javascript
// When menu opens:
document.body.style.position = 'fixed';
document.body.style.top = `-${scrollY}px`;
document.body.style.width = '100%';

// When menu closes:
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0, savedScrollY);
```

### Footer Structure

**Footer Links:**
- GitHub (external)
- LinkedIn (external)
- Twitter (external)
- Resume (internal Next.js Link)
- Privacy (internal Next.js Link)

**Footer Disclaimer:**
```
"All views and opinions expressed are my own and do not represent
those of my employer."
```

**Copyright:**
```
© 2026 Bijaya Budhathoki. All rights reserved.
```

### Career Timeline (About Page)

**Visual Design:**
- Vertical timeline with gradient line
- Dot markers for each position
- Current position: Larger dot with glow animation
- Hover: Dot scales up, content slides right

**Data Structure:**
```javascript
const careerJourney = [
  {
    role: 'Site Reliability Engineer',
    company: 'Alcidion',
    period: 'July 2024 - Present',
    current: true,  // Triggers glow animation
  },
  {
    role: 'InfoSec Lead',
    company: 'Genese',
    period: 'September 2023 - July 2024',
    current: false,
  },
  {
    role: 'InfoSec Engineer',
    company: 'Fusemachines',
    period: 'March 2022 - August 2023',
    current: false,
  },
  {
    role: 'System Administrator',
    company: 'Fusemachines',
    period: 'November 2019 - April 2022',
    current: false,
  },
  {
    role: 'System Administrator',
    company: 'DryIce',
    period: 'November 2018 - October 2019',
    current: false,
  },
];
```

**Pulse Animation (current position):**
```css
@keyframes pulse {
  0%, 100% { box-shadow: var(--shadow-glow); }
  50% { box-shadow: 0 0 20px var(--accent-glow); }
}
animation: pulse 2s infinite;
```

### Resume Features

**Download Button:**
- Positioned top-right on resume page
- Links to `/resume.pdf` in public folder
- `download` attribute sets filename
- Hidden in print view (`.no-print` class)

**Print Styles:**
```css
@media print {
  .no-print { display: none; }
  .resume-content {
    background: white;
    border: none;
    box-shadow: none;
  }
  /* Hardcoded colors for print */
  h1, h2, h3 { color: #000; }
  p, li { color: #333; }
}
```

**Sections:**
1. Professional Summary
2. Professional Experience (3 recent roles with bullet points)
3. Earlier Experience (2 roles, no bullets)
4. Technical Skills (8 categories in 2-column grid)
5. Certifications (5 certs)
6. Education (2 degrees)
7. References

### Contact Page

**Current Implementation:**
- Clean, minimal design focused on real contact methods
- NO contact form (removed - will add later with Formspree if needed)
- All content centered for clean presentation

**Layout Structure:**
1. **Intro paragraph** (centered, max-width 700px)
   - Brief text about openness to collaboration

2. **Three information cards** (grid layout, 3 columns)
   - **Open to:** Technical discussions, Consulting inquiries
   - **Best way to reach me:** LinkedIn
   - **Location:** Plymouth, UK (BST/GMT)

3. **Social links** (horizontal row, centered)
   - GitHub, LinkedIn, Twitter
   - Underline animation on hover

**Styling:**
- Card backgrounds: `var(--bg-secondary)`
- Border + shadow for depth
- Hover effects: Enhanced border + shadow
- Responsive: 3-column grid → single column stack on mobile

### Work/Portfolio Page

**Current State:**
- Single real project: **DevUtils.sh**
- NO dummy/sample projects
- Full-width card layout (blog card style, horizontal)

**Project Structure:**
```javascript
const projects = [
  {
    id: 1,
    title: 'DevUtils.sh',
    category: 'Developer Tools',
    description: 'A collection of free, privacy-first developer tools...',
    url: 'https://devutils.sh',
  },
];
```

**Layout:**
- Vertical stack (flex column) for scalability
- Each project card displays:
  1. Category badge (top)
  2. Project title
  3. URL (clickable, monospace font) - https://devutils.sh
  4. Description paragraph
  5. "Visit Site →" link at bottom

**Styling:**
- Full-width cards (not grid)
- Same design language as blog cards
- Hover: Lifts up 4px with enhanced shadow
- NO tags displayed (removed for cleaner look)
- When more projects added, they'll stack vertically

### Privacy Policy

**Structure:**
- GDPR-compliant privacy policy
- Sections: Overview, Information Collection, Data Usage, GDPR Rights, etc.
- Last updated date at top
- Links to external privacy policies (GitHub Pages)
- No actual data collection yet (form doesn't work)

---

## Build & Deployment

### Build Configuration

**next.config.mjs:**
```javascript
const nextConfig = {
  output: 'export',           // Static HTML export
  images: {
    unoptimized: true,        // No image optimization (for static)
  },
  trailingSlash: true,        // Add trailing slashes to URLs
};
```

**Why Static Export:**
- Deploys to GitHub Pages (static hosting)
- No server-side rendering needed
- Better performance (CDN)
- Lower costs (free hosting)

### Build Commands

```bash
npm run dev        # Development server (localhost:3000)
npm run build      # Production build to /out directory
npm run start      # Preview production build locally
```

**Build Output:**
- Generates static HTML/CSS/JS in `/out` directory
- All routes pre-rendered at build time
- Blog posts generated from MDX files

### GitHub Pages Deployment

**Required Files:**
- `public/.nojekyll` - Tells GitHub Pages not to use Jekyll
- `next.config.mjs` with `output: 'export'`

**Deployment Steps:**
1. `npm run build` - Generate static files
2. Push `/out` directory to `gh-pages` branch
3. Configure repository settings to serve from `gh-pages`

**GitHub Actions (Configured):**
- Auto-build on push to main via `deploy.yml`
- Deploy to GitHub Pages using `actions/deploy-pages`
- PDF resume generated during build (before deployment)

---

## Content Guidelines

### Resume Content

**Professional Summary:**
- Focus on current SRE role + security background
- Mention key transitions: SysAdmin → Security → SRE
- Highlight: Terraform, CI/CD, Prometheus, Kubernetes, security frameworks

**Experience Format:**
- Recent roles (last 3): Detailed with bullet points
- Earlier roles (2): Brief descriptions without bullets
- Dates: "Month Year - Month Year" or "Month Year - Present"

**Technical Skills Categories:**
1. Cloud Platforms
2. Container & Orchestration
3. Infrastructure as Code
4. Security Tools
5. CI/CD & Automation
6. Monitoring & Observability
7. Programming & Scripting
8. Methodologies

**Certifications (in order):**
1. CISSP
2. AWS Certified Security - Specialty
3. AWS Certified Solutions Architect - Associate
4. Google Cloud Associate Cloud Engineer
5. Certified SOC Analyst (CSA)

**Education:**
1. MSc Cyber Security - University of Plymouth (2023-2024)
2. BTech Computer Science - Maharshi Dayanand University (2014-2018)

### About Page Content

**Structure:**
1. Intro text (3 paragraphs about career journey)
2. Two-column layout (About text + Technical Skills side-by-side)
   - **Skills list:** Single column (8 key skills, displayed vertically)
3. Certifications list (top 3)
4. Career timeline (5 positions with actual dates)
5. Resume CTA (two buttons: View Full Resume, Download PDF)

**Layout Details:**
- `.about-content` grid: 1fr 1fr (two columns)
- Left: About text paragraphs
- Right: Technical skills (displayed as single-column vertical list)
- Skills grid: `grid-template-columns: 1fr` for one-per-row layout

**Tone:**
- Professional but approachable
- Technical but not jargon-heavy
- Emphasizes progression: SysAdmin → Security → SRE
- Highlights hands-on experience, not just theory

### Blog Content Guidelines

**Current State:**
- **Clean slate approach:** No published posts yet
- Blog shows "No posts yet. Coming soon!" message
- Search and filter UI hidden when no posts exist
- One placeholder post exists (`.gitkeep-placeholder.mdx`) with `published: false` flag for build requirements

**Content Strategy:**
- All posts are filtered by `published` field
- Only posts with `published: true` (or omitting the field) will display
- Placeholder post never shows on site but ensures build succeeds

**Future Topics:**
- Cloud security (AWS, GCP, Azure)
- Kubernetes hardening and security
- DevSecOps practices
- Infrastructure as Code security
- SRE practices and observability
- Incident response and automation

**Post Format:**
- Title: Clear, specific, action-oriented
- Excerpt: 1-2 sentences, compelling summary
- Content: Technical depth with practical examples
- Code examples: Always include when relevant
- Tags: 3-4 relevant tags per post
- Set `published: true` in frontmatter to make post visible

---

## Technical Decisions & Rationale

### Why Next.js App Router?

**Benefits:**
- Server Components by default (better performance)
- Improved routing with file-based system
- Better SEO with static generation
- Modern React features (Suspense, etc.)
- Static export support

**Challenges:**
- Learning curve from Pages Router
- Some features require client components ('use client')
- Static export limitations (no server-side features)

### Why Static Export vs SSR?

**Rationale:**
- Deploying to GitHub Pages (free, simple)
- No dynamic content that needs server rendering
- Blog posts are static MDX files
- Better performance with CDN
- Simpler deployment (no server needed)

**Tradeoffs:**
- Can't use server-side features (API routes, ISR)
- Forms need third-party services (Formspree)
- View counts/analytics need client-side or GitHub API

### Why MDX for Blog?

**Benefits:**
- Write content in Markdown (easy)
- Import React components in posts (flexibility)
- Syntax highlighting out of the box
- Type-safe with TypeScript (if added)
- Git-based content management

**vs. CMS:**
- No database needed
- Version control for content
- Faster builds (no API calls)
- Full control over content structure

### Why Framer Motion?

**Benefits:**
- Declarative animations
- Great performance
- Easy stagger/orchestration
- Works with React 18
- Small bundle size

**Alternatives considered:**
- CSS animations (less flexible)
- GSAP (larger, overkill for simple fades)
- React Spring (more complex API)

### Container Width Standardization (990px)

**Problem:**
- Initially had multiple container widths (800px, 900px, 1100px)
- Different widths caused page titles to misalign horizontally
- Double padding issue: `.section` class AND container classes both had horizontal padding

**Solution:**
- Standardized ALL pages to 990px (`--container-medium`)
- Removed horizontal padding from ALL container classes
- Containers now only use `.section` class padding (single source of truth)
- All page titles now align perfectly at the same horizontal position

**Implementation:**
```css
/* Container classes now only handle width and centering */
.about-container,
.blog-container,
.portfolio-container,
.contact-container,
.privacy-container,
.blog-post-container,
.resume-container {
  max-width: var(--container-medium);  /* 990px */
  margin: 0 auto;
  /* NO padding - inherits from .section */
}

/* .section provides ALL padding */
.section {
  min-height: 100vh;
  padding: 6rem var(--space-lg);  /* Vertical + horizontal */
  position: relative;
  z-index: 1;
}
```

**Benefits:**
- Perfect alignment across all pages
- Optimal balance for both text (readability) and cards (layout)
- Simpler CSS architecture (no padding conflicts)
- Easier to maintain consistency

### Design Philosophy

**Minimal & Futuristic:**
- Dark background with subtle gradients
- Purple/indigo accent color (tech, modern)
- Lots of whitespace
- Clean typography (Inter + JetBrains Mono)
- Subtle animations (fade-in, slides)
- Glass-morphism effects (blur, transparency)

**Influences:**
- Apple product pages (clean, minimal)
- Vercel design system (modern, technical)
- GitHub dark theme (developer-focused)

---

## Common Patterns & Conventions

### File Naming

**Components:**
- PascalCase for JSX files: `Navigation.jsx`, `BlogList.jsx`
- kebab-case for CSS files: `Navigation.css`, `blog-list.css`
- Co-located: Component and CSS in same directory

**Pages:**
- lowercase for page.js files: `page.js`, `layout.js`
- Folders match URL structure: `blog/[slug]/page.js`

**Content:**
- kebab-case for MDX files: `kubernetes-security-hardening.mdx`
- Matches URL slug: `/blog/kubernetes-security-hardening`

### CSS Organization

**Pattern:**
```css
/* Component/Page Styles */
.component-name { }

/* Child Elements */
.component-name .element { }

/* Modifiers */
.component-name.modifier { }

/* States */
.component-name:hover { }
.component-name.active { }

/* Media Queries (at end) */
@media (max-width: 768px) { }
```

**Variable Usage:**
- Always use CSS variables over hardcoded values
- Exception: Print styles (hardcoded black/white for compatibility)
- Use semantic names: `--text-primary` not `--white`

### Import Order

**JavaScript/JSX:**
```javascript
// 1. React/Next.js imports
import { useState } from 'react';
import Link from 'next/link';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Local components
import Navigation from './Navigation';

// 4. Utilities/data
import { getAllPosts } from '../lib/posts';

// 5. Styles (last)
import './Component.css';
```

### Responsive Breakpoints

**Standard Breakpoints:**
```css
@media (max-width: 768px)  /* Tablet and below */
@media (max-width: 480px)  /* Mobile only */
```

**Mobile-First Approach:**
- Desktop styles in main CSS
- Tablet overrides at 768px
- Mobile overrides at 480px
- Use `clamp()` to reduce media queries

### Accessibility Considerations

**Current Implementation:**
- Semantic HTML (nav, main, section, article, header, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on images (when added)
- Focus states on interactive elements
- Color contrast meets WCAG AA standards

**TODO Improvements:**
- Add aria-labels to icon buttons
- Skip-to-content link
- Keyboard navigation testing
- Screen reader testing

---

## Performance Optimizations

### Current Optimizations

1. **Static Generation**: All pages pre-rendered at build time
2. **Code Splitting**: Next.js automatic code splitting per route
3. **CSS Modules**: Scoped CSS prevents conflicts
4. **Lazy Loading**: Images and heavy components (if added)
5. **Font Optimization**: Next.js automatic font optimization
6. **Minification**: Production build minifies CSS/JS

### Build Size (Current)

```
First Load JS shared by all: 103 kB
  ├ chunks/255-*.js: 46.1 kB
  ├ chunks/4bd1b696-*.js: 54.2 kB
  └ other shared chunks: 2.54 kB

Individual Pages: 1-3 kB each
```

**Good Performance:**
- Shared JS bundle < 150 kB (current: 103 kB)
- Individual pages < 5 kB (current: 1-3 kB)
- Total page load < 200 kB

### Future Optimizations

1. **Image Optimization**: Add next/image for photos
2. **Font Subsetting**: Only load needed characters
3. **Bundle Analysis**: Use @next/bundle-analyzer
4. **Preload Critical Assets**: Fonts, hero images
5. **Service Worker**: Offline support (PWA)

---

## Known Issues & Limitations

### Current Issues

1. **Contact Form**: No backend, form doesn't submit
2. **Search**: Client-side only, no fuzzy matching
3. **No Comments**: Blog has no comment system
4. **No Analytics**: No view tracking

### Static Export Limitations

**Cannot Use:**
- API Routes (`/api/*`)
- Server-side rendering (SSR)
- Incremental Static Regeneration (ISR)
- Image optimization (Next.js Image API)
- Rewrites/Redirects (server-level)

**Workarounds:**
- Forms: Use Formspree, Netlify Forms, or similar
- Analytics: Use Google Analytics, Plausible (client-side)
- Comments: GitHub Discussions API (giscus)
- Images: Manual optimization or Cloudinary

### Browser Compatibility

**Tested:**
- Chrome/Edge (Chromium) - ✅
- Firefox - ✅
- Safari - ⚠️ (needs testing)

**Known Safari Issues:**
- Backdrop-filter may need -webkit- prefix (already included)
- Smooth scroll behavior might not work (graceful degradation)

---

## Environment & Dependencies

### Key Dependencies

```json
{
  "next": "15.5.11",
  "react": "18.3.1",
  "react-dom": "18.3.1",
  "framer-motion": "^11.x",
  "next-mdx-remote": "^5.x",
  "react-intersection-observer": "^9.x",
  "rehype-highlight": "^7.x",
  "remark-gfm": "^4.x",
  "highlight.js": "^11.x"
}
```

**Purpose:**
- `next-mdx-remote`: MDX rendering in App Router
- `framer-motion`: Animations
- `react-intersection-observer`: Scroll-triggered animations
- `rehype-highlight`: Code syntax highlighting
- `remark-gfm`: GitHub Flavored Markdown (tables, strikethrough)
- `highlight.js`: Syntax highlighting CSS themes

### Development Setup

**Requirements:**
- Node.js 18+ (for Next.js 15)
- npm or yarn
- Git

**First Time Setup:**
```bash
cd /home/bijaya/test/personal_website
npm install
npm run dev
```

**Environment:**
- OS: Linux (WSL2)
- Node: v18+
- Working Directory: `/home/bijaya/test/personal_website`

---

## Future Roadmap

### Phase 1 - Blog Enhancements (Priority)
- [ ] Table of Contents (auto-generated from headings)
- [ ] Previous/Next Post Navigation
- [ ] Anchor Links for Headings
- [ ] Archive Page (posts organized by date)

### Phase 2 - Deployment
- [x] GitHub Actions CI/CD
- [x] Auto-generate resume PDF
- [x] Deploy to GitHub Pages
- [ ] Custom domain setup

### Phase 3 - Engagement
- [ ] Comments (giscus/utterances)
- [ ] Related Posts
- [ ] RSS Feed
- [ ] Social Share Images

### Phase 4 - Advanced Features
- [ ] Newsletter signup
- [ ] View counter
- [ ] Dark/Light mode toggle (currently dark only)
- [ ] Mermaid diagrams for architecture posts

---

## Troubleshooting & Common Issues

### Build Fails with "Cannot find module"
- Run `npm install` to ensure all dependencies
- Delete `.next` folder: `rm -rf .next`
- Try `npm run build` again

### Featured Badge Flying to Corner
**Fixed**: Added `position: static` to `.post-header .featured-badge`
**Root Cause**: Generic `.featured-badge` in BlogList.css had `position: absolute`

### Mobile Menu Not Working After Scroll
**Fixed**: Changed from `overflow: hidden` to full `position: fixed` technique
**Root Cause**: Browser scroll behavior with overflow hidden

### Syntax Highlighting Not Showing
**Fixed**: Import `highlight.js/styles/atom-one-dark.css` in blog post page
**Root Cause**: CSS theme not loaded

### Typography Not Responsive
**Fixed**: Changed from fixed `px` values to `clamp()` for all headings
**Root Cause**: No responsive scaling in original implementation

---

## Style Audit Summary (Completed)

### Before Standardization
- 5 different container widths (no pattern)
- 5 different border-radius values (4px, 6px, 8px, 12px, 16px)
- Spacing: 0.5rem to 4rem with no consistent scale
- Typography: Mix of fixed sizes and responsive clamp
- Hardcoded colors: Twitter/LinkedIn blues, rgba values
- Missing shadows on cards
- Inconsistent transitions (0.1s to 2s)

### After Standardization
- 4 container widths with clear hierarchy
- 3 border-radius values (sm/md/lg)
- 6-tier spacing scale (xs to 2xl)
- All typography responsive with clamp
- All colors use CSS variables
- Shadows on all cards (sm + md on hover)
- Standardized transitions (fast/base)

**Result**: Consistent, maintainable design system across 15+ CSS files.

---

## Session Context Preservation

**Important for Claude:**
- This file should be read at the start of each session
- Contains all critical context about the project
- Design decisions are documented with rationale
- Refer to this file before making style changes
- Update this file when making significant changes

**User Profile:**
- Name: Bijaya Budhathoki
- Role: Site Reliability Engineer (current) + Security Engineer background
- Location: Plymouth, UK / Remote
- Career Path: System Admin (2018-2022) → Security Engineer (2022-2024) → SRE (2024-present)
- Education: MSc Cyber Security (Plymouth, 2023-2024), BTech CS (MDU Rohtak, 2014-2018)

**User Preferences:**
- Prefers asking before major changes
- Wants accurate, factual content (no embellishment)
- Values clean, minimal design
- Dislikes over-engineering
- Appreciates ideation before implementation

---

## Change Log

### February 4, 2026 - PDF Generation Fix

**Resume PDF Auto-Generation:**
- Fixed static file server in `scripts/generate-pdf.cjs` to properly handle Next.js static export URLs
- Server now correctly resolves `/resume` to `/out/resume.html` instead of falling back to index.html
- Updated print styles in `components/Resume.css`:
  - Added footer to hidden elements in print mode
  - Reduced spacing between sections for compact PDF layout
  - Fixed page-break behavior to avoid large gaps

**Workflow Cleanup:**
- Removed `generate-resume-pdf.yml` workflow (was causing local/remote divergence by committing PDF back to repo)
- PDF generation now handled solely by `deploy.yml` at deploy time

---

### February 3, 2026 - Major Content & Architecture Updates

**Container Width Standardization:**
- Standardized all pages to 990px for consistent alignment
- Removed double-padding issue (containers now rely solely on `.section` padding)
- Perfect horizontal alignment of all page titles achieved

**Content Updates:**
- **Work/Portfolio**: Removed all dummy projects, added real DevUtils.sh project
- **Blog**: Implemented clean slate approach, removed all sample posts
- **Contact**: Complete redesign - removed form, added info cards (Open to, Best way to reach me, Location)
- **About**: Updated career timeline with actual dates and companies (DryIce → Fusemachines → Genese → Alcidion)
- **About**: Changed skills layout from 2-column to single-column list
- **Resume**: Updated education with actual credentials (MSc Plymouth, BTech MDU Rohtak)

**Technical Changes:**
- Blog filtering system with `published` field for hiding placeholder posts
- Container architecture simplified (no padding in containers, only `.section`)
- Work page layout changed to full-width cards (blog card style)

---

**Last Updated**: February 4, 2026
**Document Version**: 1.2
**Project Status**: Core features complete, PDF generation working, ready for deployment
