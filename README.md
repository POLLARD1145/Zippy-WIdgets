<div align="center">

<img src="ZippyWidgets%20Logo.png" alt="Zippy Widgets Logo" width="280" />

# Zippy Widgets

### Free Online Tools & Browser Games

[![Live Site](https://img.shields.io/badge/🌐%20Live%20Site-zippywidgets.online-38bdf8?style=for-the-badge)](https://zippywidgets.online)
[![No Sign-up](https://img.shields.io/badge/No%20Sign--up-Required-4ade80?style=for-the-badge)](#)
[![100% Client-side](https://img.shields.io/badge/100%25-Client--side-a78bfa?style=for-the-badge)](#)
[![Privacy Friendly](https://img.shields.io/badge/Privacy-Friendly-f97316?style=for-the-badge)](#)

*A free collection of browser-based tools and mini games that work instantly — no sign-up, no downloads, no data ever sent to a server. Everything runs 100% in your browser.*

</div>

---

Whether you need a **free QR code generator**, a **word counter for essays**, a **random name picker wheel**, or just want to play a quick **daily word scramble**, Zippy Widgets has you covered.

---

## 🛠️ Free Online Tools

### [Free QR Code Generator](https://zippywidgets.online/qr-code-generator/)
Generate custom QR codes instantly in your browser. Supports custom foreground/background colours, logo overlay, and rounded corner styles. No watermarks, no sign-up, completely free.

### [Unicode Font Generator](https://zippywidgets.online/font-generator/)
Convert plain text into stylish Unicode fonts for Instagram bios, Twitter profiles, Discord usernames, and more. Copy and paste any font style in one click.

### [Random Picker Wheel](https://zippywidgets.online/picker-wheel/)
Free spinning wheel for random name picking, decision making, classroom activities, and giveaways. Add your own entries, spin, and get a result instantly.

### [Age Calculator](https://zippywidgets.online/age-calculator/)
Calculate your exact age in years, months, and days from your date of birth. Also tells you if today is your birthday.

### [Online Word Counter](https://zippywidgets.online/word-counter/)
Count words, characters, sentences, and paragraphs in real time. Great for essays, social media captions, SEO meta descriptions, and more. Includes per-platform character limit warnings.

### [Internet Speed Test](https://zippywidgets.online/speed-test/)
Test your broadband download and upload speed directly in the browser. No Flash, no extensions needed. Keeps a history of past results in local storage.

---

## 🎮 Free Browser Games

### [Daily Word Scramble](https://zippywidgets.online/games/word-scramble/)
A free daily word unscramble puzzle — similar to Wordle but you rearrange scrambled letters to find the hidden word. New puzzle every day at midnight UTC. Choose from Easy (4-letter), Medium (5-letter), or Hard (6-7 letter) difficulty. Play unlimited bonus rounds after you finish the daily.

### [Emoji Memory Game](https://zippywidgets.online/games/emoji-memory/)
A free online memory card matching game using emoji pairs. Flip cards, find matches, and beat your best time. Works great on mobile and desktop.

### [Rock Paper Scissors](https://zippywidgets.online/games/rock-paper-scissors/)
Play rock paper scissors against the computer in a best-of series. Tracks your wins, losses, and draws with sound effects and a mute toggle.

### [Emoji Geography Quiz](https://zippywidgets.online/games/emoji-geography/)
Guess the country from emoji clues — a fun free geography trivia game. Earn stars for correct answers with fewer hints.

### [AetherForge](https://zippywidgets.online/games/aetherforge/)
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

- **Pure HTML/CSS/JS** — no frameworks, no build step, no dependencies
- **Hosted on GitHub Pages** with a custom domain via CNAME
- **Analytics**: Cloudflare Web Analytics (cookie-free, no consent banner required)
- **Ads**: Google AdSense (deferred, non-blocking)
- **Audio**: Web Audio API for in-game sound effects with persistent mute toggle
- **Persistence**: `localStorage` only — no backend, no database

## Project Structure

```
/
├── index.html              # Homepage
├── style.css               # Global styles
├── theme.js                # Dark/light mode toggle
├── games/
│   ├── word-scramble/      # Daily word unscramble puzzle
│   ├── emoji-memory/       # Card matching game
│   ├── rock-paper-scissors/
│   ├── emoji-geography/    # Country emoji quiz
│   └── aetherforge/        # Crafting puzzle game
├── qr-code-generator/
├── font-generator/
├── picker-wheel/
├── age-calculator/
├── word-counter/
├── speed-test/
└── blog/
```

## Local Development

No build process required — open any `index.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

*All tools and games are free to use. No data is ever collected or sent to a server.*

