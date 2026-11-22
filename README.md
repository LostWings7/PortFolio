# Vasantha Kumaran D. — Developer Portfolio Website

A modern, high-performance, responsive portfolio website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Designed for software development internships, AI/ML engineering roles, and technical research opportunities.

---

## 🌟 Highlights

- **Bright & Modern Visual Theme**: Clean light mode by default with elegant dark mode toggle.
- **Centralized Data Architecture**: All personal profile info, skills, projects, research, and education are maintained in a single file: `src/data/portfolio.ts`.
- **Authentic Working Project Previews**: Features live preview screenshots captured directly from running applications (QuizX, Smart Timetable Generator, AgroSense, SmartMove/SafeCity, PC Sentinel, and TEP-RB Research).
- **Interactive Project Details Modal**: Deep-dive architecture, problem statement, key features, and technology tags for every project.
- **Dedicated Academic Research Section**: Highlights ongoing research in Tamil-English cross-script representation invariance and selective prediction (TEP-RB).
- **Resume Integration**: Integrated PDF resume accessible at `/resume.pdf` with direct download capability.
- **Responsive & Accessible**: Optimized across all viewports (Mobile 360px/390px, Tablet 768px, Laptop 1024px, Desktop 1440px+) with zero horizontal overflow.

---

## 🚀 Quick Start (Running Locally)

### Prerequisites

- **Node.js**: v18+ (tested on Node.js v24)
- **npm**: v9+ (or pnpm / yarn)

### 1. Install Dependencies

```bash
npm install
```

*(Note for Windows PowerShell: If script execution policy restricts `npm`, use `npm.cmd install`)*

### 2. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

The production-ready assets will be generated in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── public/                         # Static assets served at root
│   ├── favicon.svg                 # Sleek monogram SVG favicon
│   ├── profile.jpg                 # Profile photograph
│   ├── resume.pdf                  # Downloadable PDF resume
│   └── projects/                   # Project preview screenshots
│       ├── quizx.png
│       ├── timetable.png
│       ├── agrosense.png
│       ├── smartmove.png
│       ├── pc_sentinel.png
│       ├── tanglish_research.png
│       ├── tanglish_research_eval.png
│       └── talentlens.png
├── src/
│   ├── components/                 # Modular React components
│   │   ├── Navbar.tsx              # Sticky header, section indicator, theme toggle
│   │   ├── Hero.tsx                # Hero section, headline, CTA, floating pills
│   │   ├── About.tsx               # Academic narrative and 4 key engineering pillars
│   │   ├── Skills.tsx              # Categorized competency cards (no fake % bars)
│   │   ├── Projects.tsx            # Filterable project grid (All, Full-Stack, AI/ML, etc.)
│   │   ├── ProjectModal.tsx        # In-depth architectural modal
│   │   ├── Research.tsx            # Dedicated academic inquiry & TEP-RB deep-dive
│   │   ├── Education.tsx           # KIT B.Tech CSBS degree & accredited certifications
│   │   ├── Approach.tsx            # Engineering principles & problem-solving philosophy
│   │   ├── Contact.tsx             # Validated form + direct links + mailto fallback
│   │   ├── Footer.tsx              # Dynamic copyright, social links, and navigation
│   │   └── BackToTop.tsx           # Floating scroll-to-top button
│   ├── context/
│   │   └── ThemeContext.tsx        # Light/Dark theme provider with localStorage memory
│   ├── data/
│   │   └── portfolio.ts            # ⭐ CENTRAL DATA CONFIGURATION FILE
│   ├── App.tsx                     # Top-level composition
│   ├── index.css                   # Tailwind directives and custom scrollbars
│   └── main.tsx                    # React DOM entry point
├── index.html                      # HTML root with SEO and typography
├── package.json                    # Project dependencies and build scripts
├── tailwind.config.js              # Theme colors, fonts, shadows, and animations
├── tsconfig.json                   # Strict TypeScript compiler options
└── vite.config.ts                  # Vite bundler configuration
```

---

## ⚙️ Customization Guide

### 1. How to Update Personal Information

Open [`src/data/portfolio.ts`](src/data/portfolio.ts). The `portfolioData.profile` object controls:
- `name` & `initials`
- `headline` & `heroSublabel`
- `bio`
- `location`
- `availability` (`status` and `active` boolean)
- `contacts` (`email`, `github`, `linkedin`)

### 2. How to Add, Edit, or Remove Projects

In [`src/data/portfolio.ts`](src/data/portfolio.ts), edit the `portfolioData.projects` array. Each project accepts:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  category: "Full-Stack" | "AI / ML" | "Research" | "Systems",
  status: "Completed" | "In Progress" | "Prototype" | "Research",
  featured: true, // Set to true to show in initial 4 featured cards
  tagline: "Short summary",
  problem: "Core challenge addressed",
  description: "Detailed architecture breakdown",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Python", "Django", "SQLite"],
  role: "Lead Developer / Architect",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  image: "/projects/your_screenshot.png"
}
```

### 3. How to Update the Resume PDF

1. Replace the file at [`public/resume.pdf`](public/resume.pdf) with your updated resume.
2. The portfolio automatically links to `/resume.pdf` from the navigation bar, hero button, contact card, and footer.

### 4. How to Update Profile Photo

1. Place your new portrait image at [`public/profile.jpg`](public/profile.jpg).
2. The hero section will automatically render it with dual-ring gradient framing. If the image fails to load or is removed, an elegant typographic initials monogram (`VK`) displays automatically as a fallback.

### 5. How to Configure the Contact Form

The contact form in [`src/components/Contact.tsx`](src/components/Contact.tsx) currently generates a structured `mailto:` action with pre-filled name, email, subject, and message, ensuring 100% reliable message delivery directly to your email without requiring third-party backend servers.

If you wish to connect an automated email service:
- **Formspree**: Update the `<form>` `action` to `https://formspree.io/f/YOUR_FORM_ID` and method `POST`.
- **EmailJS**: Install `@emailjs/browser` and call `emailjs.send()` in `handleSubmit`.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub (`github.com/lostwings7/portfolio`).
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy to Netlify

1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set build command: `npm run build`.
3. Set publish directory: `dist`.
4. Deploy!

### Deploy to GitHub Pages

1. In `vite.config.ts`, add `base: '/portfolio/'` (matching your GitHub repo name).
2. Run `npm run build`.
3. Deploy the `dist` directory using GitHub Actions or `gh-pages`.

---

## 📄 License

Designed and developed with care by **Vasantha Kumaran D.** Open-source under the MIT License.
