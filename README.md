# 🎨 Theme Switcher

![HTML](https://img.shields.io/badge/HTML5-semantic-orange.svg)
![CSS](https://img.shields.io/badge/CSS3-custom--properties-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-yellow.svg)
![Accessibility](https://img.shields.io/badge/Accessibility-ARIA%20Friendly-brightgreen.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

An **accessible, vanilla JavaScript theme switcher** that allows users to toggle between multiple visual themes while receiving polite, animated feedback via an ARIA live region.

This project focuses on **clean state management**, **progressive enhancement**, and **accessibility-first UI design** — no frameworks, no dependencies.

---

## ✨ Features

- 🎛️ Theme dropdown menu (Solarized, Light, Dark, Quiet Light)
- ♿ Fully accessible using ARIA roles and attributes
- 🗣️ Polite announcements using `aria-live`
- 🎨 CSS custom properties and class-based theming
- 🌗 Smooth fade-out transition for status messages
- ⌨️ Keyboard and screen-reader friendly
- 🧠 Separation of concerns (JS = state, CSS = visuals)

---

## ♿ Accessibility Highlights

Accessibility is a core goal of this project.

- **ARIA menu pattern**
  - `role="menu"` and `role="menuitem"`
  - `aria-expanded`, `aria-controls`, and `aria-haspopup`
- **Live region announcements**
  - Theme changes are announced using `aria-live="polite"`
  - Messages fade visually without interrupting screen readers
- **Reduced motion support**
  - Respects `prefers-reduced-motion`
- **Semantic HTML**
  - Real `<button>` elements (no div-button hacks)

---

## 🎨 Themes Included

| Theme | Description |
|------|-------------|
| ☀️ Solarized | Balanced colors designed to reduce eye strain |
| 🌤️ Light | Bright and clean for well-lit environments |
| 🌙 Dark | Low-glare viewing in low-light settings |
| 🤍 Quiet Light | Muted tones for distraction-free reading |

Themes are applied by toggling a single class on the `<body>` element.

---

## 🧠 How It Works (High Level)

- JavaScript listens for menu item selection
- The selected theme name is derived from the menu item ID
- A matching class is applied to `<body>`
- CSS updates colors using custom properties
- A status message is announced and gently fades away

This ensures:
- predictable state
- minimal DOM manipulation
- no inline style conflicts

---

## 📂 Project Structure

```
├── index.html      # Markup & ARIA structure
├── styles.css      # Themes, layout, transitions
├── script.js       # Theme logic & announcements
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/karianjahi/theme-switcher.git
   ```
2. Open `index.html` in your browser
3. Click **Switch Theme** and explore 🎉

No build step required.

---

## 🛡️ License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and share.

---

## 🌱 Why This Project?

This repo demonstrates that:
- Accessibility doesn’t require frameworks
- ARIA works best when paired with good UX
- Small UI patterns can be built cleanly and responsibly

Perfect as a **learning reference**, **portfolio piece**, or **starter pattern** for accessible theming.