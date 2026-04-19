# About Me

A personal one-page site prepared to run on GitHub Pages.

## Files

- `index.html`: Page structure
- `styles.css`: Visual design and responsive layout
- `script.js`: Content data and dynamic section rendering

## Quick customization

You can change all text and links from the `profile` object inside `script.js`.

Update these fields first:

- `name`
- `roleLabel`
- `tagline`
- `summary`
- `quickFacts`
- `story`
- `timeline`
- `projects`
- `contactLinks`

Fields like `hello@example.com` and `@username` are placeholders and should be replaced with your own details.

## Run locally

Because the project is static, you can open it directly in a browser:

```bash
xdg-open index.html
```

Or start a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This repo can be published from the `main` branch. In GitHub settings:

1. `Settings`
2. `Pages`
3. `Deploy from a branch`
4. `main` ve `/ (root)`

After that, the site will be published.
