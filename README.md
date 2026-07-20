# 🌐 kewldan — Portfolio

> Personal portfolio of an indie developer, live at [kewldan.ru](https://kewldan.ru).

![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-3-5FC3E7?style=flat)

## ✨ Features

- 🌍 **i18n** — English and Russian via `next-intl`, cookie-based locale with an in-page switcher
- 🌗 **Themes** — light / dark mode with `next-themes`
- 🎞 **Animations** — Framer Motion transitions, parallax tilt cards, autoplaying Embla carousels
- 🧩 **Sections** — hero, skills, donate and stats on the home page, plus dedicated `/business`, `/indie` and `/market` pages
- 🔗 **Short links** — built-in redirects: `/github`, `/telegram`, `/vk`, `/npm`, `/x`, `/linked-in`, `/stack-overflow`
- 📈 **Analytics** — Yandex Metrika integration
- 🐳 **Docker-ready** — single-command deploy behind Traefik

## 🛠 Tech stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 3, Radix UI primitives, `class-variance-authority`, `tailwindcss-animate`
- **UX:** Framer Motion, Embla Carousel, `react-parallax-tilt`, Sonner toasts, Lucide + React Icons
- **i18n:** next-intl 3 (messages in `messages/en.json` / `messages/ru.json`)
- **Infra:** Docker, Docker Compose, Traefik labels

## 🚀 Getting started

The project uses **npm** (`package-lock.json`):

```bash
npm ci
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start    # next start -p 80
```

No environment variables are required.

### Docker

```bash
docker compose up -d --build
```

The compose file expects an external `virtual-hosts` network with Traefik routing `kewldan.ru` to the container.

## 📂 Project structure

```
├── messages/          # en.json / ru.json translations
├── src/
│   ├── app/           # pages: /, /business, /indie, /market
│   ├── components/
│   │   ├── sections/  # hero, skills, donate, stats
│   │   └── ui/        # shared UI primitives
│   ├── i18n/          # next-intl config
│   └── lib/           # technologies list, utils
├── Dockerfile
└── docker-compose.yml
```
