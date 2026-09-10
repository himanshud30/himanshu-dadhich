# Himanshu Dadhich — Personal Ecosystem & TLR Studio Website

> **“Jodhpur is the base. The world is the field. The work is the bridge.”**

This is the production-ready digital home of **Himanshu Dadhich**: creative strategist, filmmaker, storyteller, and founder building **TLR (The Local Roots)**—a globally relevant creative strategy and design studio from Jodhpur, Rajasthan.

---

## 🏛️ Project Architecture & Design System

The site reproduces the custom Figma design language with uncompromising visual rigor:

- **Aesthetic**: Modern heritage minimalism, high-contrast typography, and atmospheric film grain.
- **Palette**:
  - `cream` (`#F5F0E7`, `#E8D8BC`)
  - `sandstone` (`#C79368`, `#D4A574`)
  - `dark` (`#111111`, `#0D0B09`, `#1A1A1A`)
  - `indigo` (`#24345B`), `rust` (`#A84F2A`), and `muted` (`#7A6E62`)
- **Typography**:
  - Display: **Bebas Neue** (Condensed geometric impact for titles & manifesto headlines)
  - Body: **Inter** (Crisp editorial readability)
  - Serif: **Lora** (Philosophical italics, pull quotes, and intimate field observations)
- **Motifs**: Hand-carved sandstone architectural proportions, subtle Jali grid backgrounds, status indicator pulses, and film grain overlay.

---

## 🗺️ Route Directory

| Route | Purpose | Features |
|---|---|---|
| `/` | **Flagship Homepage** | Hero with coordinates & status, Intro manifesto, Selected Work, Episodic series, Services overview, Sundarkand spotlight, Field notes, Living ideas board, CTA |
| `/about` | **Biography & Studio Ethos** | Marwar heritage roots, TLR origin story, creative tenets, studio snapshot |
| `/work` | **Case Studies Archive** | Filterable archive (Brand Storytelling, Film, Creative Strategy, Content Systems) |
| `/work/[slug]` | **Case Study Deep-Dive** | Client context, core challenge, strategic insight, process roadmap, deliverables, measured outcomes, field stills |
| `/series` | **Episodic Series Hub** | Original episodic properties (*How We Learn*, *Notes from the Blue City*, *The Unseen Craft*) |
| `/series/[slug]` | **Series & Episodes Player** | Interactive video player hero, transcripts, references, chronological episode list |
| `/services` | **Services & Packages** | Fixed-scope packages, pricing, timelines, deliverables, and client FAQ |
| `/projects` | **Original Projects** | Independent intellectual properties & cultural preservation works |
| `/projects/sundarkand`| **Sundarkand Project** | Milestone tracker (68%), vision, archetypes, open-book budget transparency, patron call |
| `/ideas` | **Living Board of Inquiries**| Active hypotheses & conceptual research with status badges (*Observing*, *Researching*, *Developing*, *Producing*) |
| `/field-notes` | **Field Notes Archive** | Visual and spatial dispatches from Jodhpur and Western Rajasthan |
| `/field-notes/[slug]` | **Dispatch Detail** | Sensory observations, local encounters, vernacular notes, strategic takeaways |
| `/newsletter` | **Field Dispatches Hub** | Fortnightly editorial archive and interactive subscriber dispatch form |
| `/collaborate` | **Brand Collaboration Brief**| Comprehensive multi-field intake form for founders, CMOs, and cultural patrons |
| `/conversation` | **Open Studio Channel** | Direct line to Himanshu for readers, researchers, and fellow creatives |
| `/supporters` | **Patron Circle Wall** | Patron tiers (*Seed*, *Sapling*, *Tree*, *Forest*) and permanent wall of stewards |
| `/sitemap.xml` | **Dynamic XML Sitemap** | Automated SEO index of all static and dynamic pages |
| `/robots.txt` | **Robots.txt** | Crawler indexing rules |

---

## 🚀 Running Locally

Ensure Node.js is installed.

```bash
# In this directory:
cd scratch/himanshu-dadhich

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm start
```

---

## ⚙️ Environment Variables (`.env.local`)

Copy `.env.example` to `.env.local` to configure optional integrations:
- `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Database for submissions/patrons)
- `RESEND_API_KEY` (Transactional notification emails)
- `NEXT_PUBLIC_SITE_URL` (Domain URL for SEO and OpenGraph previews)
