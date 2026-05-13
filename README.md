# Ha Lim Chung — Portfolio

Personal portfolio for Ha Lim Chung (preferred name: Jack).  
Business Analytics graduate student at The George Washington University.

**Live site:** https://jack-portfolio-wjdgkfla.vercel.app *(update after deployment)*

---

## Tech stack

- Next.js 15 (App Router)
- React 19
- Plain CSS (no framework)
- Vercel Speed Insights
- Hosted on Vercel

---

## Run locally

```bash
npm install
npm run dev
```

Then open: `http://localhost:3000`

---

## File structure

```
app/
  layout.jsx        ← root layout, fonts, metadata, Speed Insights
  page.jsx          ← assembles all sections
  globals.css       ← all styles
components/
  Nav.jsx
  Hero.jsx
  About.jsx
  Projects.jsx
  Experience.jsx
  Skills.jsx
  Leadership.jsx
  Contact.jsx
  Footer.jsx
  Icons.jsx
data/
  portfolio.js      ← all content lives here — edit this to update the site
public/
  uploads/
    Ha_Lim_Chung_Resume_Mar4_2026.pdf
```

---

## Edit content

Everything is in `data/portfolio.js`. Change values there and the whole site updates.

---

## Deploy to GitHub

```bash
git init
git add .
git commit -m "initial next.js portfolio"
git branch -M main
git remote add origin https://github.com/wjdgkfla/jack-portfolio.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New → Project** → import `jack-portfolio`
3. Settings:
   - **Framework Preset:** Next.js *(auto-detected)*
   - **Build Command:** `npm run build` *(auto)*
   - **Output Directory:** `.next` *(auto)*
4. Click **Deploy**
