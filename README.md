# STEM Pathways

A modern, responsive website for a student-led STEM career pathway nonprofit, built with Vite, React Router, TypeScript, and Tailwind CSS.

**Live site:** [https://stem-career-pathway-app-kjk4xa4a.devinapps.com](https://stem-career-pathway-app-kjk4xa4a.devinapps.com)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The static build will be in the `dist/` directory. Deploy it to any static hosting provider.

---

## How to Edit Content

### Change the Organization Name

Edit `src/lib/config.ts`:

```ts
export const siteConfig = {
  name: "Your Organization Name",
  tagline: "Your tagline here",
  // ...
};
```

The name and tagline propagate automatically across the entire site (navbar, footer, hero, metadata, etc.).

### Edit Team Members

Edit `src/content/team.ts`:

- **Add a leader**: Add an object to the `teamMembers` array with `role: "co-founder"` or `role: "head-pr"`.
- **Add a member**: Add an object with `role: "member"` and set `team` to `"data-tech"`, `"research"`, or `"outreach"`.

```ts
{
  id: "unique-id",
  name: "Full Name",
  title: "Role Title",
  bio: "Optional bio for leaders",
  team: "data-tech",       // "data-tech" | "research" | "outreach" | "leadership"
  role: "member",           // "co-founder" | "head-pr" | "member"
  linkedin: "https://linkedin.com/in/...",
}
```

### Add New Projects

Edit `src/content/projects.ts`:

```ts
{
  id: "unique-slug",
  title: "Project Title",
  category: "data",          // "data" | "research" | "outreach"
  description: "Short description",
  problem: "Problem statement",
  approach: "How the team approached it",
  tools: ["Python", "React"],
  contributors: ["Name 1", "Name 2"],
  outcomes: ["Outcome 1", "Outcome 2"],
  github: "https://github.com/...",  // optional
}
```

### Add New Recordings

Edit `src/content/recordings.ts`:

```ts
{
  id: "unique-slug",
  title: "Session Title",
  speaker: "Speaker Name",
  speakerTitle: "Their Professional Title",
  field: "tech",              // "medicine" | "engineering" | "tech" | "research"
  description: "Session description",
  takeaways: ["Takeaway 1", "Takeaway 2"],
  date: "2025-12-01",
  duration: "45 min",
}
```

---

## Project Structure

```
src/
  pages/            # Page components (one per route)
    Home.tsx        # Home page
    About.tsx       # About page
    Team.tsx        # Meet Our Team page
    Teams.tsx       # Teams & Opportunities page
    Recordings.tsx  # Recordings library page
    Projects.tsx    # Projects Showcase page
    SignUp.tsx      # Sign Up + FAQ page
    Contact.tsx     # Contact page
  components/       # Shared React components (Navbar, Footer, ImpactChart)
  content/          # Editable data (team, projects, recordings)
  lib/              # Utilities and site config
  App.tsx           # Route definitions
  main.tsx          # Entry point with HashRouter
index.html          # Vite entry HTML
vite.config.ts      # Vite configuration
```

## Tech Stack

- **Vite** (build tool)
- **React 18** with **React Router** (HashRouter for static hosting)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (data visualization)
- **Lucide React** (icons)
