# Personal Site — Cyber Security Portfolio

A clean, professional Jekyll site built for GitHub Pages. It's set up to showcase CTF/lab
**writeups**, **projects**, and **research papers**, alongside a bio, skills/timeline, and a
contact page — with no build tools required on your end. Push markdown files, GitHub Pages
builds the site automatically.

## 1. Get it on GitHub

1. Create a new repository on GitHub.
   - If you want the site at `https://<your-username>.github.io`, name the repo
     `<your-username>.github.io`.
   - If you want it at `https://<your-username>.github.io/<repo-name>`, name it anything you
     like, but set `baseurl: "/<repo-name>"` in `_config.yml` (see step 2).
2. Push the contents of this folder to that repository.
3. In the repo settings, go to **Settings → Pages**, and under "Build and deployment" set the
   source to **Deploy from a branch**, branch `main` (or whichever branch you pushed to),
   folder `/ (root)`.
4. Wait a minute or two — GitHub will build and publish the site automatically. You'll see the
   live URL on the same Pages settings screen.

No Gemfile, Ruby install, or local build step is required — GitHub Pages builds Jekyll for you.

## 2. Personalise the site

Open `_config.yml` and edit the values at the top:

- `title`, `tagline`, `description` — used in the browser tab, search results, and meta tags.
- `url` and `baseurl` — must match where your site is hosted (see step 1).
- `author:` block — your name, role, bio, location, email, and social handles. These power the
  homepage bio card, the About page, and the Contact page automatically. Leave any field blank
  (`""`) to hide that item.

Then update:

- `about.md` — replace the placeholder bio, skills, certifications, and education/experience
  timeline with your own.
- `contact.md` — update or remove the Formspree form (see "Contact form" below).
- `assets/images/` — add a profile photo and point `author.avatar` at it in `_config.yml`. If
  you skip this, a simple initial-based avatar is shown instead.

## 3. Adding content

Each content type lives in its own folder as a **collection**. To add a new entry, create a new
`.md` file in the relevant folder — that's it. No registration, no build step, no need to edit
any index pages.

### Writeups → `_writeups/`

```markdown
---
title: "HTB: Machine Name — Foothold to Root"
date: 2026-06-12
summary: "One or two sentences describing the box and the path to root."
platform: "Hack The Box"     # optional
difficulty: "Medium"          # optional
tags: [web, linux, ctf]
---

Your writeup content goes here, in Markdown. Use fenced code blocks for commands and output —
they're syntax highlighted automatically.
```

### Projects → `_projects/`

```markdown
---
title: "Project Name"
date: 2026-06-12
summary: "A one-line description of what the project does."
status: "Active"              # e.g. Active, Complete, Archived — optional
repo_url: "https://github.com/yourusername/project-name"   # optional
demo_url: ""                  # optional, leave blank to hide
tags: [python, networking]
---

Project write-up content here.
```

### Papers → `_papers/`

```markdown
---
title: "Paper Title"
date: 2026-06-12
summary: "A short abstract or description."
authors: "Your Name"          # optional
venue: "MSc Coursework"        # optional
pdf: "/assets/papers/paper-file.pdf"   # optional — drop the PDF in assets/papers/
tags: [research, machine-learning]
---

Abstract / summary content here.
```

Two example entries are included in each folder — delete or replace them once you've added your
own. Items are sorted by `date` (newest first) on both the homepage and the listing pages, and
the `tags` you set populate the filter buttons on each listing page automatically.

## 4. Contact form

The contact page includes an optional message form powered by
[Formspree](https://formspree.io) — a free service for handling form submissions on static
sites. To enable it:

1. Sign up at formspree.io and create a new form to get an endpoint URL.
2. In `contact.md`, replace `your-form-id` in the form's `action` attribute with your own
   endpoint.

If you'd rather not use a form, just delete the `<form>...</form>` block in `contact.md` — your
email, GitHub and LinkedIn links will still be shown.

## 5. Customisation notes

- **Colours, fonts, spacing** — all defined as CSS custom properties at the top of
  `assets/css/style.css`. Change the values under `:root` and `[data-theme="dark"]` to retheme
  the whole site.
- **Dark mode** — toggled via the button in the header, remembered using `localStorage`.
- **Navigation** — edit the links in `_includes/header.html`.
- **RSS feed, SEO tags, sitemap** — handled automatically by the `jekyll-feed`,
  `jekyll-seo-tag`, and `jekyll-sitemap` plugins (all supported natively by GitHub Pages, no
  extra setup needed).

## 6. Local preview (optional)

If you have Ruby installed and want to preview changes locally before pushing:

```bash
gem install bundler jekyll
bundle init
bundle add jekyll jekyll-feed jekyll-seo-tag jekyll-sitemap
bundle exec jekyll serve
```

Then open `http://localhost:4000`. This step is entirely optional — GitHub Pages will build the
site for you on every push regardless.
