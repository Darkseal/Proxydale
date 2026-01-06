# Proxydale — Static Site

A GitHub Pages-ready Jekyll site for the Proxydale variant of **Blood on the Clocktower**. The homepage is a one-page presentation with room to grow (rules, scripts, changelog, and more).

## Quick start
1. Push the repository to GitHub.
2. In **Settings → Pages**, set **Source** to **Deploy from branch**, select **main**, and **/ (root)**. Save. GitHub Pages will build automatically with the default Jekyll engine (no custom plugins required).
3. Visit the published URL (shown in the Pages settings panel) once the build finishes.

## Editing content
- The homepage lives in `index.md` (Markdown). Update headings, copy, and sections there; anchors in the sticky navigation match the section IDs.
- The base layout is `_layouts/default.html`. Shared components live in `_includes/` (for example, `download-card.html`).
- Styles are in `assets/css/styles.css`. Keep paths relative (e.g., `{{ '/assets/css/styles.css' | relative_url }}`).

## Adding downloads
- Place the rules PDF at `/downloads/rules/Proxydale_Rules.pdf`.
- For each script, keep the existing folder names and filenames so the homepage links stay valid:
  - `downloads/scripts/welcome-to-proxydale/Welcome_to_Proxydale.json`
  - `downloads/scripts/welcome-to-proxydale/Welcome_to_Proxydale.pdf`
  - `downloads/scripts/revenge-of-the-seat/Revenge_of_the_Seat.json`
  - `downloads/scripts/revenge-of-the-seat/Revenge_of_the_Seat.pdf`
  - `downloads/scripts/final-delegation/Final_Delegation.json`
  - `downloads/scripts/final-delegation/Final_Delegation.pdf`
- Replace the placeholder files in those locations with your actual exports. Commit and push; GitHub Pages will serve them immediately.

## Extending the site
- Add a page (e.g., `rules.md`, `changelog.md`) with front matter `layout: default`. Link to it from the navigation or sections using relative paths.
- Create new includes in `_includes/` for reusable elements. Use the existing `download-card.html` as a pattern.
- To add more scripts, create new folders under `downloads/scripts/` and reference them from `index.md` (or a future `scripts.md`) by adding new entries to the scripts list in the front matter.

## Local preview (optional)
If you want to preview locally, install Ruby and Jekyll, then run:
```bash
bundle exec jekyll serve --livereload
```
Using `plugins: []` in `_config.yml` keeps the build compatible with GitHub Pages.
