# Personal Website

A three-page personal site (Home, About, Contact) built with React and Vite.
Navigation is state-based with URL hash syncing (`#home`, `#about`, `#contact`) — no router dependency required.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`, ready to deploy anywhere that serves static files (Netlify, Vercel, GitHub Pages, etc).

## Project structure

```
src/
  App.jsx              # top-level layout + page switching
  index.css            # all styles and design tokens (CSS variables)
  components/
    Navbar.jsx
    Home.jsx
    About.jsx
    Contact.jsx
```

## Customizing

- **Your info**: name/bio is in `Home.jsx`, mission statement and values are in `About.jsx`, email/socials are in `Contact.jsx`.
- **Colors and fonts**: all defined as CSS variables at the top of `src/index.css` (`--bg`, `--accent`, `--brass`, etc.) — change them once and the whole site updates. Dark mode is handled automatically via `prefers-color-scheme`.
- **Contact form**: currently just shows a success message locally (see the comment in `Contact.jsx`). To actually receive messages, wire `handleSubmit` up to a backend endpoint, a form service (e.g. Formspree, Resend), or your own API route.
