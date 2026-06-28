# Kevin Barry Dever — Portfolio Website

A single-page professional portfolio for Kevin Barry Dever, built as a static site
ready for **GitHub Pages**. No build step required.

## Files
- `index.html` — page markup (hero, about, experience, recognition, testimonials, contact)
- `styles.css` — styling
- `script.js` — mobile nav + footer year
- `assets/` — headshot and press/award images

## Preview locally
From this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `kevin-dever-portfolio`).
2. From this folder, push the files:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**.
   Set **Source** to *Deploy from a branch*, **Branch** to `main` / `/ (root)`, then **Save**.
4. After a minute, the site is live at
   `https://<your-username>.github.io/<your-repo>/`.

> Tip: For a cleaner URL, name the repo `<your-username>.github.io` to publish at the root domain.

The included `.nojekyll` file tells GitHub Pages to serve the files as-is.

## Updating content
Edit the relevant section in `index.html`. To swap the headshot, replace
`assets/headshot.png` (keep the same filename) or update the `src` in the hero section.
