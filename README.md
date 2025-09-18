# Century Group Website

A modern, responsive web application for Century Group, built with **React**, **TypeScript**, and **Vite**.  
This project showcases Century Group’s services, team, projects, and more, with interactive overlays, carousels, and detailed service pages.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Responsive design for all devices
- Animated overlay sections for services
- Service detail pages with dynamic routing
- Carousel for projects and media
- Team and leadership profiles
- Stats bar and business highlights
- Modular, reusable components
- TypeScript for type safety
- ESLint and Prettier for code quality

---

## Project Structure

```
CG-Website/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, SVGs, videos
│   ├── Components/          # Reusable UI components (Button, CarouselSection, Navigation, StatsBar, etc.)
│   ├── Pages/
│   │   ├── OurServices/     # Service overlays, detail pages, tabs
│   │   ├── FacesOfCG/       # Team and leadership profiles
│   │   └── ...              # Other pages (Contact, Discovery, etc.)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Vite entry point
│   ├── router.tsx           # App routing configuration
│   └── ...                  # Other config and utility files
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── ...
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/gpiiltd/CG-Website
cd CG-Website
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run format` — Format code with Prettier

---

## Configuration

- **Routing:** See `src/router.tsx` and `src/Components/Navigation/RouteNames.ts` for route definitions.
- **ESLint/Prettier:** Configured for TypeScript and React best practices.
- **Assets:** Place images, SVGs, and videos in `src/assets/`.

---

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a Pull Request

---

## License

This project is licensed under the MIT License.

---

**Century Group Website** —  Century Group Energy Services Limited