# Proxydale site

Static site for **Proxydale**, generated from this repository and deployed by Cloudflare Pages.

```text
site/
  templates/   Jinja2 layout and page copy
  static/      stylesheet and progressive-enhancement script
  dist/        build output, git-ignored, rebuilt from scratch every run
```

## Build

```bash
pip install -r requirements.txt
python scripts/build_site.py
```

Then open `site/dist/index.html` in a browser. Relative paths are used throughout, so the local
preview works straight from the filesystem, with no server.

## Where the content comes from

| Source | Supplies |
|---|---|
| `site/templates/index.html.j2` | all page copy: hero, overview, how it works, rules, design |
| `scripts/build_site.py` | the data: navigation, hero facts, rulebook and script download cards |
| `downloads/rules/` | the rulebook PDFs, copied byte-for-byte into `dist/downloads/` |

Copy lives in the template because it is prose, written once and read as a whole. Anything that
repeats — a download card, a navigation entry — is data in the generator instead, so the three
script cards cannot drift apart in markup.

The build **fails** rather than publishing a gap: a download card pointing at a file that is not in
`downloads/` stops it.

## Adding or changing content

- **Page copy**: edit `site/templates/index.html.j2` and rebuild.
- **A new script**: add an entry to `SCRIPTS` in `scripts/build_site.py`. The `step` field is the
  badge that places it on the learning path.
- **A new rulebook edition**: drop the PDF in `downloads/rules/` and add a link to `RULEBOOK`.
- **A new section**: add it to `index.html.j2` with an `id`, then add that id to `NAV`. The sticky
  header picks it up, including the scroll-spy highlight.

The site has no build-time dependency on any external host. The only network request at runtime is
the Google Fonts stylesheet; self-hosting Cinzel and Inter under `static/fonts/` would remove it.

## Deployment

Cloudflare Pages, connected to this repository, building on every push to `main`.

**Pages flow** (Workers & Pages → the Pages tab → Connect to Git): framework preset *None*, root
directory `/`, build output directory `site/dist`, build command:

```bash
pip install -r requirements.txt && python scripts/build_site.py
```

Set `PYTHON_VERSION` in the project's environment variables rather than relying on the build
image's default, so a Cloudflare-side change cannot alter the build.

Do not add a `wrangler.toml` or `wrangler.jsonc`: a Pages project reads it for its own settings and
does not understand an `assets` block, which can make the build fail. That file belongs to the
Workers flow, which this project does not use.

`site/dist` is absent from the repository by design: git-ignored, recreated by every build. The
generator also emits `404.html`, which Pages serves for unknown paths without any configuration,
and `_redirects`, which forwards the legacy `/Proxydale/*` paths to their new location.
