# Moje prvé portfólio — šablóna

Jednoduchá statická šablóna osobného portfólia. Len HTML + CSS + JS, žiadny backend.

## Štruktúra
- `index.html` — sekcie: Hero, O mne, Zručnosti, Projekty, Kontakt
- `style.css` — svetlý responzívny dizajn
- `data.js` — **tu upravuješ obsah**:
  - `SKILLS` → tvoje zručnosti + percentá
  - `PROJECTS` → tvoje projekty (`title, desc, tag, cat, color, emoji`)
- `app.js` — render, filter projektov, mobilné menu, formulár (len demo)

## Ako si ju upraviť
1. V `index.html` prepíš „Tvoje meno", email, telefón.
2. V `data.js` doplň vlastné projekty a skills.
3. Otvor `index.html` v prehliadači — nič netreba inštalovať.

## Zverejnenie (GitHub Pages)
Settings → Pages → Deploy from branch → `main` → `/ (root)`.
