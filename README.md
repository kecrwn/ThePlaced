<div align="center">

# ⚔️ The Placed — Chrono Adventure RPG

**An interactive 2D narrative web RPG exploring Past, Present, and Future realms.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Phaser](https://img.shields.io/badge/Phaser-3.80-FF7700?style=for-the-badge&logo=phaser&logoColor=white)](https://phaser.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Supabase](https://img.shields.io/badge/Supabase-2.42-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📖 About

**The Placed** is an interactive 2D narrative RPG and time-travel adventure web game built on top of **Next.js 16**, **React 19**, and the **Phaser 3** game engine.

The game follows the intertwined journey of **Player** and **Adelia** across three temporal realms:
- ⏳ **The Past Scene**: Ancient ruins and forgotten memories.
- 🏙️ **The Present Scene**: Contemporary urban interactions and choices.
- 🚀 **The Future Scene**: Sci-fi horizons and the culmination of their destiny.

With dynamic client-side Phaser canvas mounting, Framer Motion UI dialogues, and Supabase cloud state persistence, The Placed blends classic 2D game aesthetics with modern web application engineering.

---

## ✨ Features

- 🎮 **Phaser 3 Game Engine Integration**: 2D physics, tilemaps, sprite sheets, and animated character controllers seamlessly embedded within Next.js.
- ⏳ **Three Temporal Chapters**: Seamless scene transitions between Past, Present, and Future scenarios.
- 🎭 **Narrative Dialogue System**: Expressive HUD overlay and dialogue system rendered with React & Framer Motion.
- 👥 **Character Systems**: Custom implementations for `Player` and `Adelia` with dedicated movement, collision, and state logic.
- ☁️ **Cloud Connectivity**: Supabase database integration for persistent player saves, state tracking, and achievements.
- 📱 **Responsive Viewport Handling**: Fullscreen canvas scaling designed for immersive play on desktop and tablets.

---

## 🛠️ Architecture & Tech Stack

```
ThePlaced/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/           # React overlays (PhaserGame canvas, GameUI HUD)
├── game/
│   ├── characters/       # Player.ts, Adelia.ts character controllers
│   ├── scenes/           # BootScene, PastScene, PresentScene, FutureScene
│   └── main.ts           # Phaser game configuration & lifecycle
└── public/               # Game sprites, audio, and tilemap assets
```

- **Core Framework**: [Next.js 16](https://nextjs.org/) & [React 19](https://react.dev/)
- **Game Engine**: [Phaser 3](https://phaser.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database / Backend**: [Supabase](https://supabase.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17+ or v20+)
- npm, pnpm, or yarn

### Installation & Run

1. **Clone repository:**
   ```bash
   git clone https://github.com/kecrwn/ThePlaced.git
   cd ThePlaced
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (optional for Supabase):**
   ```bash
   cp .env.example .env.local
   ```
   Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

4. **Launch development server:**
   ```bash
   npm run dev
   ```

5. **Play:**
   Open `http://localhost:3000` in your web browser and use arrow keys / WASD to explore.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
