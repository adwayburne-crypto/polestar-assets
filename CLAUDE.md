# polestar-assets — GitHub-Pages host for public brand images + landing/widget previews

Static publish target so email clients and WordPress iframes get a stable public URL for Polestar/Iso Fit/IMAA logos, photos, and high-fidelity page previews. These are PUBLISHED COPIES — `brand-os` is the source of truth. Served at `https://adwayburne-crypto.github.io/polestar-assets/<path>/`. Deeper docs: README.md (brief).

## Prime directive
- Ground brand facts (logos/colours/fonts/voice) in `~/brand-os/<brand>/` first; it is authoritative. Files here are downstream copies — re-sync from brand-os, never hand-edit a logo here and call it canonical. If a needed asset isn't in brand-os, say so, don't invent.

## Scope
- In: public image assets (logos, ribbon, hero/class photos) + standalone hosted pages (`teacher-training/` landing, `courses/` calendar widget, `landing-preview/`) for Polestar HK / Iso Fit / IMAA. | Out: the canonical brand system (brand-os), live WordPress sites (web-studio), the in-WP course calendar feed (isofit-course-calendar — see gotcha).

## How it runs
- Pure static GitHub Pages off `main` (no `.github/` workflow, no build step). Publish = commit + push; the live URL updates automatically. There is no cron and no server here.

## The loop (most-repeated task)
- Add/refresh an asset: drop the file under the right brand subdir (mirroring brand-os layout), commit with a message that says where it came from (e.g. "sync iso-fit logo from brand-os"), push. The raw GitHub Pages URL is then linkable from newsletters/WP.

## Architecture (only the non-obvious)
- `courses/courses.json` is a STATIC CRM snapshot (`generated_at` 2026-06-03) — it does NOT auto-refresh; the widget fetches it client-side and postMessages `{isofitCalHeight}` (auto-resize) + `{isofitRegister:{url,title}}` (parent fires GA4 register_click) to the embedding page.
- `teacher-training/` is a Claude Design handoff (Page.jsx/lib.jsx React+Babel in index.html); its `Dates` section reuses the `../courses/` widget via iframe, NOT its own data. `lib.jsx CONFIG` holds registerUrl/contactUrl fallbacks (still placeholders — confirm before any WP publish).
- `polestar/newsletter-hk/` logos are low-res design crops flagged for hi-res replacement.

## Governance (Constitution §3)
- Public repo — assume everything here is world-readable. Never commit secrets or anything PII/student-data. Customer-facing pages stay drafts/previews; a human picks what goes live on WordPress. No keys belong in this repo.

## Gotchas / Close out
- DUPLICATE-SOLUTION TRAP: the `courses/` widget here is a parallel build to the canonical in-WP calendar (isofit-course-calendar). On 8 Jun 2026 the site was switched BACK to the in-WP widget (cron-fed, always fresh); the GitHub Pages calendar is left intact but UNUSED by isofit.com.hk. Do NOT re-embed this static widget on the live page — it has no refresh and shows stale dates. Align with isofit-course-calendar before touching course dates anywhere.
- Logos/photos here can drift from brand-os; treat brand-os as truth and re-sync rather than editing in place.
- Close out: commit + push (it's the deploy). Update SOLUTIONS_WE_HAVE only if scope changes — registry already lists this as a non-canonical asset store feeding brand-os.
