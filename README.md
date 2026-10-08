# Ninad Belorkar — Portfolio

Personal portfolio website for **Ninad Belorkar**, Software Intern & Computer Science Engineer.

🌐 **Live site:** [ninadbelorkar.space](https://ninadbelorkar.space)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Vanilla CSS (custom design tokens in `globals.css`) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Design tokens — colors, type, spacing, grid
│   ├── layout.tsx         # Root layout — FloatingDock + WelcomeIntro
│   ├── page.tsx           # Homepage
│   └── projects/
│       └── page.tsx       # /projects — full project listing
├── components/
│   ├── navigation/
│   │   └── FloatingDock.tsx   # Bottom navigation dock
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── FadeIn.tsx         # Scroll-triggered fade animation
│       ├── LinkButton.tsx     # Unified button component
│       ├── SocialIcons.tsx    # GitHub / LinkedIn icons
│       └── WelcomeIntro.tsx   # One-time welcome animation
├── data/
│   ├── experience.ts      # Work experience entries
│   ├── projects.ts        # Project data
│   ├── skills.ts          # Skills by category
│   └── social.ts          # Social links / email
└── public/
    ├── images/
    │   ├── profile/       # profile.png
    │   ├── projects/      # project poster images
    │   └── experience/    # optional company logos
    └── resume/
        └── Ninad_Belorkar_VIT.pdf
```

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Next.js. No extra configuration needed.
4. Set your custom domain `ninadbelorkar.space` in **Project → Settings → Domains**.

No environment variables are required — the site is fully static.

---

## Adding Assets

### Profile photo
Replace `public/images/profile/profile.png` with your photo.

### Project posters
Add images to `public/images/projects/` and reference them in `data/projects.ts`:

```ts
poster: '/images/projects/your-image.png'
```

### Company logos (optional)
Add images to `public/images/experience/` and uncomment the `logo` field in `data/experience.ts`:

```ts
logo: '/images/experience/company.png'
```

### Resume
Replace `public/resume/Ninad_Belorkar_VIT.pdf` with your latest resume.  
Update the filename references in:
- `components/navigation/FloatingDock.tsx`
- `components/sections/Contact.tsx`

---

## Content

All content is data-driven. Update these files to change what appears on the site:

| File | Controls |
|---|---|
| `data/experience.ts` | Work experience entries |
| `data/projects.ts` | Projects (featured + all) |
| `data/skills.ts` | Skills by category |
| `data/social.ts` | Email, GitHub, LinkedIn, Instagram links |

---

## Design System

One unified design system. All tokens live in `app/globals.css`.

- **Colors:** `--color-bg`, `--color-fg`, `--color-fg-2`, `--color-fg-3`, `--color-surface`, `--color-accent`
- **Typography:** `--text-display`, `--text-h1`, `--text-title`, `--text-body`, `--text-meta`
- **Spacing:** `--sp-1` through `--sp-22`
- **Layout:** `.c` (container, 1200px max-width) · `.s` (section padding)

---

Built with Next.js · Deployed on Vercel
