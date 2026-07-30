# Bahaa Youssof — Portfolio Website

A modern, high-performance portfolio website built with **React 19**, **TypeScript**, **Vite 8**, and **SCSS**. Designed with a premium SaaS aesthetic, featuring an interactive Developer Telemetry HUD, default dark-mode system, high-contrast light mode, flagship project showcases, and a responsive experience timeline.

## 🌟 Live Demo

**[View Live Portfolio](https://bahaayoussof.vercel.app/)**

---

## ✨ Key Features

- **Interactive Developer Telemetry HUD**: Tabbed code editor preview (`engineer.ts`) with syntax highlighting, live metrics (`telemetry.stats`), terminal prompt, and technology matrix chips.
- **Default Dark Mode & Theme Switcher**: Automatic dark theme initialization (`data-theme="dark"`) with smooth theme context switching and local storage persistence.
- **Enhanced Light Mode Clarity**: High-contrast syntax colors, crisp slate containers, and polished card UI for light mode visitors.
- **Flagship & Studio Project Showcase**: Highlighting _Resumind AI_, _Live-Docs_, and _Snapgram_ with interactive tabbed details, tech tags, and equal-width hover action buttons (`Live` & `Repo`).
- **Detailed Experience & Projects Timeline**: Breakdown of corporate and FinTech engineering roles (_AZM Squad_, _Damen E-Payment_) showcasing 7+ production systems including Petrotrade Android POS, CIB Corporate Banking, and Damen Portal.
- **Web3Forms Contact Integration**: Fully functional contact form powered by Web3Forms API with instant Toast notification feedback.
- **Type-Safe Architecture & Lazy Loading**: 100% TypeScript implementation with code-splitting via React `Suspense` and `lazy` loading for optimal performance.

---

## 🛠️ Tech Stack & Dependencies

| Layer              | Technology                                 |
| ------------------ | ------------------------------------------ |
| **Core Framework** | React 19, TypeScript 6                     |
| **Build Tool**     | Vite 8                                     |
| **Styling**        | SCSS / Sass, CSS Custom Properties         |
| **Animations**     | Framer Motion                              |
| **Icons**          | Tabler Icons React (`@tabler/icons-react`) |
| **Notifications**  | React Hot Toast                            |
| **Form Engine**    | Web3Forms API                              |
| **Deployment**     | Vercel                                     |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Loader/
│   │   ├── Navbar/
│   │   ├── NavigationDots.tsx
│   │   ├── SocialMedia.tsx
│   │   └── ToggleTheme.tsx
│   ├── constants/
│   ├── container/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── Work/
│   ├── context/
│   │   └── theme.tsx
│   ├── types/
│   ├── wrapper/
│   ├── App.scss
│   ├── App.tsx
│   ├── data.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bahaayoussof/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run local development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 📜 Available Scripts

- `npm run dev` — Launch Vite dev server with instant HMR
- `npm run build` — Run TypeScript type checks (`tsc -b`) and bundle for production
- `npm run preview` — Locally preview production build
- `npm run lint` — Lint codebase using ESLint
- `npm run type-check` — Perform strict TypeScript validation without emitting files

---

## 📱 Sections Overview

1. **Navigation (`Navbar`)**: Glassmorphic top navigation bar with active section tracking, theme toggle button, and mobile menu.
2. **Hero (`Header`)**: Headline, career subtitle, resume link, contact button, and interactive Developer Telemetry HUD.
3. **Projects (`Work`)**: Flagship AI resume analyzer breakdown + grid of web applications with live links and repository shortcuts.
4. **Experience (`Experience`)**: Detailed career path across AZM Squad & Damen E-Payment detailing project impacts, challenges, and tech stack tags.
5. **Contact (`Footer`)**: Reactive Web3Forms contact form with toast notifications and social platform links.

---

⭐ Star this repository if you find it helpful!
