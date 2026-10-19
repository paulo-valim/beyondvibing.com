# beyondvibing.com — context for agents (Tidewave, Claude, Codex)

The sales page for **Beyond Vibing Academy**, a cohort course by **Groxio** (Bruce Tate's Elixir teaching company). The Academy is a Groxio product, not a separate company: say "by Groxio" on the page.

Source of truth for everything below: the groxio HQ (Google Drive, `Projetos/groxio`): `TASKS.md` (BV-12), `STATUS.md`, `docs/decisions/decision-log.md`, `docs/products/beyond-vibing-academy/`. If this file and the HQ disagree, the HQ wins; ask Paulo.

## Stack

Astro 7 + Tailwind 4 (Vite plugin) + Tidewave, static build, GitHub Pages, domain `beyondvibing.com` (CNAME written by `.github/workflows/astro.yml`). Same skeleton as Gig City Elixir. Dev server: `http://localhost:4322`. No server, no proxy through grox.io: the site must stand alone.

## Brand (fixed; do not redesign)

- The lighthouse wordmark is the logo (`src/images/logo-*.png`). Use the complete two-line wordmark; never detach the lighthouse; never recolour it.
- **Dark first.** Colours are in `src/styles/base.css`: water `#00303A`, beam `#FCC418` (never change the yellow), tower `#557A70` (`#A3C4B9` on dark), paper `#F7F5EE`.
- Type: Archivo (display), Inter (body), JetBrains Mono (labels, uppercase, tracked).
- Brand line: "Intelligence with intention." Descriptor: "Agentic coding, with guidance. For developers and technical founders who build with AI and keep the judgment."
- Reference layout (a sample, copy not final): HQ `docs/products/beyond-vibing-academy/brand/output/beyond-vibing-lighthouse-system/site.html`.

## The offer (what the page must say)

- **Promise:** use AI agents for serious product work while keeping human judgment, architecture and evidence. Vibing is agentic coding without guidance; we teach the other way.
- **Four modules, sold together, taught live** (never sell a module alone):
  1. **Coding** — turn a request into small, well-specified stories and the context an agent needs; explain why a failed attempt failed.
  2. **Steered coding** — judge agent output against design principles, discard what does not fit, and explain at a whiteboard how the remaining system works.
  3. **Verified coding** — put verification gates in place in order of cost; recognize common AI-generated failures and catch them before review.
  4. **Automated coding** — run selected automations with clear rules for adding or reducing them; people still review changes and merge pull requests.
- **Shared practice:** scout → plan → build → verify → review. **Proof:** the whiteboard test (explain how the system works).
- **For:** developers (junior and senior) and technical founders who already build software. Not for beginners.
- **People:** Bruce Tate (founder of Groxio, one of Elixir's most published authors; technical teaching). Paulo Valim (business, context and product; context, stories and verification coaching). Never present Paulo as junior to Bruce or as "sales".
- **Price:** US$2,500. **Founding price US$2,000** for cohort 1.
- **Dates:** 4 months, starting January 2027. The exact start date and weekly rhythm are pending (decision D16; proposal: week of Jan 11, 16 weekly 2-hour sessions). Show "January 2027" until Paulo confirms.
- **Enrollment:** "Reserve a founding seat" → a short form (name, email, what you are building). **No payment now.** The cohort runs if at least 6 people join; everyone hears by **December 11**, and the invoice comes only after that. The form posts to an **n8n webhook that adds the person to MailerLite** (founding waitlist group; a separate checkbox opts them into the newsletter). The webhook URL is not set yet: read it from `PUBLIC_RESERVE_WEBHOOK_URL` and keep a clearly marked placeholder until Paulo provides it.
- **Secondary entry:** the free live every two weeks, `https://grox.io/live`. Bruce walks through a real agent conversation on screen (he does not live-code).
- **Why (voice):** Bruce's foreword to the ebook, HQ `docs/strategic-actions/bruce-articles/00-foreword.md`: "oversight is the work"; agents serve people; the junior role moved up the stack. Quote it briefly and attribute it.

## Never

- Name any client or past client. No logos, no case studies, no "trusted by".
- Claim an AI coach, measured results, job outcomes, or anything that does not exist today.
- Claim Elixir is the best language, that OTP makes systems self-healing, or that the course eliminates errors.
- Mention a 14-day trial, `/try`, US$299/yr or a monthly plan. Do not mix in Groxio's team training offer: one CTA per page section, and the main CTA is the reservation.
- Say "Soul" (the public term is Persona).
- Touch the Campus repository (`../beyond-vibing`): it is a different project and read-only.

## Working rules

Work on a branch. Show screenshots at desktop and mobile (375 px) widths. Do not commit, push, deploy or change DNS unless Paulo asks. All page copy is in English.
