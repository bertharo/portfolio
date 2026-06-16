# bertharo.com — make the site crawlable without losing the app

## Why this exists

bertharo.com is a client-rendered React SPA. A raw fetch of the site returns only the
document head and `"You need to enable JavaScript to run this app."` — no body content.

That means Google's crawler, link previews (LinkedIn / Slack / iMessage / email), and
recruiter-sourcing bots all see an empty shell. The site is effectively invisible in
search and shows a blank card when the URL is shared.

## Goal

Serve **real, crawlable HTML for the home page** — name, positioning, proof, experience,
contact, and full SEO head tags — in the initial server response, **without JavaScript
needing to run first**. Visitors with JS still get the full interactive app; crawlers and
previews get real content.

Keep the existing React app and every route working — **especially the daily memo.**

## Hard constraints

1. **Do not break the daily memo or any existing route.** The SPA must still boot and
   hydrate normally for interactive users. This is the top priority — if a prerender
   approach risks the memo, choose a different one.
2. **The home-page content is already written.** Use `bertharo-index.html` (added to the
   repo root) as the source of truth for home copy, `<head>` tags, and the JSON-LD block.
   Do **not** rewrite, paraphrase, or "improve" the copy or the claims. The wording is
   deliberate and was fact-checked line by line.
3. **Never reintroduce these claims** — each was deliberately removed for accuracy:
   - Bert has **not** shipped AI agents at Workday. No "owns agent deployments,"
     "deploys agents in production," or similar.
   - tapsa.ai was **built solo as a project** — **not** a company he founded. Never label
     him "founder" of tapsa.
   - The PM cohort is **not** a Berkeley Haas program. It was a 4-week AI-native PM cohort
     co-taught with a faculty member, to students from UC Berkeley, UC Davis, and
     Northwestern. (His **MBA** is from Haas — that part is correct and stays.)
   - The product area is **Workforce Planning**, not Workforce Intelligence.
   - **No exact internal figures.** Use "nine-figure ARR" and "more than a thousand
     enterprise customers." Never publish $160M, 1,100, or the $76M→$160M growth.
   - **No "field note" / governed-agents memo** on the public page.
4. **Keep the contact CTA neutral.** No open-to-work or hiring language anywhere — the site
   must not read as an active job search.
5. **No phone number** on the public page.

## Identity facts (keep these exact in head tags / JSON-LD)

- Name: **Bert Haro** · Location: **Berkeley, CA**
- Role: **Director of Product Management, Workday**
- Email: **bert.haro@proton.me**
- LinkedIn: **https://www.linkedin.com/in/bert-h-15181116**
- JSON-LD `sameAs`: the LinkedIn URL above, **https://tapsa.ai**, **https://ololand.ai**
- Education: **MBA, UC Berkeley Haas (2022)**; **BA International Relations, CSU Chico (2013)**

## Approach

1. **Investigate first. Change nothing until you've reported back.**
   Inspect `package.json` and configs and tell me:
   - Build tool + framework (Vite + React? Create React App? other?)
   - How routing works (React Router? how many routes?)
   - Where the daily-memo route lives and where its data comes from
   - Your recommended prerender strategy and why
2. **Pick the lightest prerender path that fits the stack:**
   - **Vite + React SPA** → add static prerendering. Prefer `vite-react-ssg` or `vike`;
     or a postbuild prerender via `react-snap` / `@prerenderer/prerenderer`. Prerender at
     minimum the home route `/`.
   - **Create React App** → add `react-snap` as a `postbuild` step and enable hydration
     (`hydrateRoot`).
   - **Already Next.js / has SSR** → ensure the home page is statically generated; if it
     isn't, make `/` static and confirm content renders server-side.
   - If a framework migration is genuinely the only clean fix, **propose it and wait for
     confirmation** before doing it.
3. Ensure the prerendered home HTML contains the real body copy **and** the full `<head>`:
   title, meta description, canonical, Open Graph (`og:title`/`og:description`/`og:url`/
   `og:image`), Twitter card, and theme-color — plus the `Person` JSON-LD with all three
   `sameAs` URLs. Pull all of this from `bertharo-index.html`.
4. Add `public/robots.txt` and `public/sitemap.xml` (list `/`, and the memo route if it
   should be indexed).
5. Reference an OG image at `https://bertharo.com/og.png` (1200×630). If the image file
   isn't in the repo yet, leave a clear TODO rather than inventing one.

## Acceptance criteria (verify these and show the command output)

- After `npm run build`, the built home `index.html` contains the real headline and proof
  copy **in the raw file** — e.g. `grep -i "lead enterprise products" dist/index.html`
  returns a hit.
- `curl`ing the served home route with no JS shows name, positioning, proof, and experience
  — **not** the "enable JavaScript" shell.
- That file's `<head>` contains the meta description, `og:title`/`og:description`/`og:url`,
  `twitter:card`, `canonical`, and the JSON-LD `Person` block with all three `sameAs` URLs.
- The daily-memo route still loads and hydrates correctly with JS on. Confirm no route
  regressed.
- Lighthouse SEO score on the home route ≥ 95 (report the number).

## Deliverables

- The prerender/SSG setup wired into the build pipeline.
- `robots.txt` + `sitemap.xml`.
- A short summary: which approach you chose and why, the verification command output, and
  any open TODOs (e.g. `og.png`).
