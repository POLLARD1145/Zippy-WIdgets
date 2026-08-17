<div align="center">

<img src="public/ZippyWidgets%20Logo.png" alt="Zippy Widgets Logo" width="280" />

# Zippy Widgets

### Free Online Tools & Browser Games

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-zippywidgets.online-38bdf8?style=for-the-badge)](https://zippywidgets.online)
[![No Sign-up](https://img.shields.io/badge/No%20Sign--up-Required-4ade80?style=for-the-badge)](#)
[![100% Client-side](https://img.shields.io/badge/100%25-Client--side-a78bfa?style=for-the-badge)](#)
[![Privacy Friendly](https://img.shields.io/badge/Privacy-Friendly-f97316?style=for-the-badge)](#)

*A free collection of browser-based tools and mini games that work instantly — no sign-up, no downloads, no data ever sent to a server. Everything runs 100% in your browser.*

</div>

---

Whether you need a **free PDF merger**, an **image compressor**, a **strong password generator**, a **free QR code generator**, a **word counter for essays**, a **random name picker wheel**, or just want to play a quick **daily word scramble**, Zippy Widgets has you covered.

---

## 🛠️ Free Online Tools

### [Free PDF Merger](https://zippywidgets.online/tool/pdf-merger/)
Combine multiple PDF files into one document instantly in your browser. No file size limits, no watermarks, no sign-up, and your files never leave your device.

### [Free Image Compressor](https://zippywidgets.online/tool/image-compressor/)
Reduce JPG, PNG and WebP image file sizes in seconds. Choose quality, resize, and convert formats — all client-side, no upload to any server.

### [Strong Password Generator](https://zippywidgets.online/tool/password-generator/)
Generate secure, random passwords with a live strength meter. Customise length and character types. Uses the Web Crypto API and never stores your passwords.

### [JSON Formatter & CSV Converter](https://zippywidgets.online/tool/json-formatter/)
Format, validate, minify and convert JSON to CSV or CSV to JSON. A clean, privacy-friendly editor for developers and data analysts.

### [Favicon Generator](https://zippywidgets.online/tool/favicon-generator/)
Convert any PNG or JPG logo into a multi-resolution `favicon.ico` file plus an Apple touch icon. Generates the correct HTML tags for your website.

### [Free QR Code Generator](https://zippywidgets.online/tool/qr-code-generator/)
Generate custom QR codes instantly in your browser. Supports custom foreground/background colours, logo overlay, and rounded corner styles. No watermarks, no sign-up, completely free.

### [Unicode Font Generator](https://zippywidgets.online/tool/font-generator/)
Convert plain text into stylish Unicode fonts for Instagram bios, Twitter profiles, Discord usernames, and more. Copy and paste any font style in one click.

### [Random Picker Wheel](https://zippywidgets.online/tool/random-name-picker-wheel/)
Free spinning wheel for random name picking, decision making, classroom activities, and giveaways. Add your own entries, spin, and get a result instantly.

### [Age Calculator](https://zippywidgets.online/tool/age-calculator/)
Calculate your exact age in years, months, and days from your date of birth. Also tells you if today is your birthday.

### [Online Word Counter](https://zippywidgets.online/tool/word-counter/)
Count words, characters, sentences, and paragraphs in real time. Great for essays, social media captions, SEO meta descriptions, and more. Includes per-platform character limit warnings.

### [Internet Speed Test](https://zippywidgets.online/tool/speed-test/)
Test your broadband download and upload speed directly in the browser. No Flash, no extensions needed. Keeps a history of past results in local storage.

---

## 🎮 Free Browser Games

### [Daily Word Scramble](https://zippywidgets.online/game/word-scramble/)
A free daily word unscramble puzzle — similar to Wordle but you rearrange scrambled letters to find the hidden word. New puzzle every day at midnight UTC. Choose from Easy (4-letter), Medium (5-letter), or Hard (6-7 letter) difficulty. Play unlimited bonus rounds after you finish the daily.

### [Emoji Memory Game](https://zippywidgets.online/game/emoji-memory/)
A free online memory card matching game using emoji pairs. Flip cards, find matches, and beat your best time. Works great on mobile and desktop.

### [Rock Paper Scissors](https://zippywidgets.online/game/rock-paper-scissors/)
Play rock paper scissors against the computer in a best-of series. Tracks your wins, losses, and draws with sound effects and a mute toggle.

### [Emoji Geography Quiz](https://zippywidgets.online/game/emoji-geography/)
Guess the country from emoji clues — a fun free geography trivia game. Earn stars for correct answers with fewer hints.

### [AetherForge](https://zippywidgets.online/game/aetherforge/)
A browser-based crafting and alchemy puzzle game. Combine elements to discover new ones and build your way up the crafting tree.

---

## 📝 Blog

Tips, guides, and explainers on internet tools and everyday tech topics:

- [What is a good internet speed?](https://zippywidgets.online/blog/what-is-a-good-internet-speed/)
- [How to make a QR code for WiFi](https://zippywidgets.online/blog/how-to-make-qr-code-for-wifi/)
- [Unicode fonts for Instagram bio](https://zippywidgets.online/blog/unicode-fonts-for-instagram-bio/)
- [How the random name picker works](https://zippywidgets.online/blog/random-name-picker-how-it-works/)

---

## Tech Stack

- **Astro** — static site generator with shared layouts, components and automatic sitemap
- **Pure client-side tool logic** — every utility tool is still vanilla HTML/CSS/JS that runs in the browser
- **Hosted on GitHub Pages** with a custom domain via `public/CNAME`
- **Analytics**: Cloudflare Web Analytics (cookie-free, no consent banner required)
- **Ads**: Google AdSense (deferred, non-blocking)
- **Audio**: Web Audio API for in-game sound effects with persistent mute toggle
- **Persistence**: `localStorage` only — no backend, no database

## Project Structure

```
/
├── .github/workflows/       # GitHub Actions deployment workflow
├── public/                  # Static assets copied as-is to dist/
│   ├── style.css
│   ├── theme.js
│   ├── ZippyWidgets Logo.png
│   ├── CNAME
│   └── games/               # Game pages remain static HTML
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Shared <head>, analytics, AdSense
│   ├── components/
│   │   ├── Nav.astro        # Shared navigation + site search
│   │   └── Footer.astro     # Shared footer
│   ├── data/
│   │   ├── tools.ts         # Central tools list (homepage, nav, search)
│   │   └── posts.ts         # Central blog posts list
│   └── pages/
│       ├── index.astro      # Homepage
│       ├── about/
│       ├── contact/
│       ├── privacy-policy/
│       ├── disclaimer/
│       ├── tool/           # All utility tools live under /tool/*
│       │   ├── pdf-merger/
│       │   ├── image-compressor/
│       │   ├── password-generator/
│       │   ├── json-formatter/
│       │   ├── favicon-generator/
│       │   ├── random-name-picker-wheel/
│       │   ├── font-generator/
│       │   ├── word-counter/
│       │   ├── qr-code-generator/
│       │   ├── age-calculator/
│       │   └── speed-test/
│       └── blog/           # All blog posts live under /blog/*
├── astro.config.mjs         # Astro config: static output, trailing slashes, sitemap
├── package.json
├── tsconfig.json
└── dist/                    # Build output (gitignored)
```

## Local Development

Install dependencies once:

```bash
npm install
```

Start the Astro dev server:

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:4321`).

## Build

Generate the static site in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deployment is handled automatically by GitHub Actions:

1. Push to `main`
2. The workflow in `.github/workflows/deploy.yml` installs dependencies, runs `npm run build`, and deploys the `dist/` folder to GitHub Pages.
3. Make sure your repository **Settings → Pages → Source** is set to **GitHub Actions**.

## Adding a New Tool

1. Add the tool to `src/data/tools.ts` with a `/tool/<tool-slug>/` href.
2. Create `src/pages/tool/<tool-slug>/index.astro` (or migrate the existing HTML page using the migration helper).
3. The tool automatically appears in the homepage grid, navigation dropdown, search, and sitemap.
4. Rebuild and deploy.

---

*All tools and games are free to use. No data is ever collected or sent to a server.*

