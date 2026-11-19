# apps-hub

A single-page portfolio hub for apps built with Grok Build: **Better Beer**, **Voxhelion Radio** and **Groovy Greens**. It's plain HTML, CSS and JS, with no backend and no build step, so it runs for free on GitHub Pages or Netlify.

## Structure

```
apps-hub/
├── index.html            # the page
├── css/styles.css        # all styling
├── js/apps.js            # EDIT THIS: app names, flyers, pitches, links
├── js/main.js            # renders the cards (no need to edit)
├── assets/flyers/        # official flyer images
│   ├── better-beer.jpg
│   ├── voxhelion-radio.jpg
│   └── groovy-greens.jpg
├── .nojekyll             # tells GitHub Pages to serve files as-is
└── netlify.toml          # Netlify publish settings
```

## Updating an app card

1. Drop the real flyer into `assets/flyers/` (PNG, JPG or SVG; portrait 3:4 looks best).
2. Open `js/apps.js` and change that app's `flyer` path, `pitch` and `link`.
3. A link of `"#"` shows a grey "Coming soon" button instead of "Open app".

## Hosting

**GitHub Pages:** go to the repo's Settings, then Pages, choose "Deploy from a branch", pick `main` and `/ (root)`, and save. The site appears at `https://betterbeerchris.github.io/apps-hub/` within a minute or two.

**Netlify:** "Add new site", import this GitHub repo, leave the build command empty and the publish directory as `.`, then deploy.

## Copyright

© 2026 Chris Conzelmann. All rights reserved.
