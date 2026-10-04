# 👟 KICKS — Premium Sneaker Hyperstore

<div align="center">

![KICKS Banner](https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&auto=format&fit=crop&q=80)

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Preview-blue?style=for-the-badge&logo=vercel)](https://ecommerce-kicks-steel.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-v2.3-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.12-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

**A cutting-edge, high-performance sneaker e-commerce platform delivering fluid interactions, persistent shopping workflows, and modern street-culture aesthetics.**

[🌐 Explore Live Application](https://ecommerce-kicks-steel.vercel.app/) · [Report Bug](https://github.com/Ramjanict/ecommerce-kicks/issues) · [Request Feature](https://github.com/Ramjanict/ecommerce-kicks/issues)

</div>

---

## 📖 Overview

**KICKS** is a production-grade, modern e-commerce web application engineered for sneakerheads, streetwear enthusiasts, and contemporary retail brands. Built with **React 18**, **TypeScript**, and **Tailwind CSS v4**, the application showcases fluid micro-interactions with **Framer Motion**, reliable asynchronous state management with **Redux Toolkit & RTK Query**, and resilient local state persistence with **Redux Persist**.

From discovery through seamless checkout preparation, KICKS delivers an ultra-smooth retail experience across mobile, tablet, and ultra-wide displays.

---

## ✨ Key Features

- ⚡ **Interactive Hero Showcase:** Dynamic banner switcher showcasing flagship drops with smooth spring transitions and responsive vertical badges.
- 🛍️ **Comprehensive Product Catalog:** Categorized sneaker collections, interactive carousels, and grid view with loading skeletons.
- 🔍 **Animated Search Modal:** Real-time search overlay with backdrop blur and instant navigation.
- 👟 **Deep Product Details:** High-resolution multi-angle image gallery, interactive size grid, live color variant picker, and dynamic quantity selector.
- 🛒 **Persistent Shopping Cart:** Fully reactive shopping cart backed by **Redux Persist** (`localStorage`), ensuring customer carts survive page reloads and browser sessions.
- 🏷️ **Dynamic Order Summary:** Real-time price, subtotal, and tax calculation with interactive remove and quantity adjustment controls.
- 📱 **Mobile-First Responsive Layout:** Fluid navigation with custom animated drawer menus, sticky navigation bars, and gesture-friendly touch targets.
- 🎨 **Modern Design System:** Built on **Tailwind CSS v4**, **shadcn/ui** primitives, and custom street-inspired typography and palettes.
- ♿ **Accessible & SEO-Ready:** Semantic HTML structure, ARIA compliance, keyboard-navigable dialogs, and clean client-side routing.

---

## 🚀 Live Demo

Experience the full live deployment on Vercel:

👉 **[https://ecommerce-kicks-steel.vercel.app/](https://ecommerce-kicks-steel.vercel.app/)**

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Styling & Components** | [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI Primitives](https://www.radix-ui.com/) |
| **Animations & Motion** | [Framer Motion](https://www.framer.com/motion/) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) (RTK Query), [Redux Persist](https://github.com/rt2zz/redux-persist) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Carousels & Sliders** | [Embla Carousel React](https://www.embla-carousel.com/) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

```text
ecommerce-kicks/
├── public/                     # Static public assets (icons, images)
│   ├── images/                 # High-resolution sneaker photography
│   └── favicon.svg             # Application favicon
├── src/
│   ├── app/                    # Central Redux store & RTK Query base API
│   │   ├── baseAPI.ts          # Centralized RTK Query endpoints definition
│   │   ├── hooks.ts            # Typed Redux hooks (useAppDispatch, useAppSelector)
│   │   └── store.ts            # Store configuration with redux-persist
│   ├── assets/
│   │   └── images/             # Brand logos, product photography & banners
│   ├── components/
│   │   ├── layout/             # Container, Navbar, Footer, MainLayout, PageTransition
│   │   ├── shared/             # SectionTitle, RatingStars, QuantitySelector, Badges, Loaders
│   │   └── ui/                 # shadcn & Radix primitive wrappers (Button, Carousel, Dialog)
│   ├── features/
│   │   ├── cart/               # Cart slice, CartItem component, OrderSummary calculations
│   │   ├── home/               # Hero, New Drops showcase, Category slider, Customer Reviews
│   │   ├── navbar/             # NavMenu, MobileMenu, SearchOverlay
│   │   └── products/           # Product slices, RTK Query API endpoints, Gallery, Selectors
│   ├── hooks/                  # Custom React hooks (useDebounce, useMediaQuery)
│   ├── lib/                    # Framer Motion animation presets & utility helpers
│   ├── pages/                  # Top-level route pages (Home, ProductDetails, Cart)
│   ├── routes/                 # Route configuration with AnimatePresence
│   └── utils/                  # Currency formatting, Tailwind class merger (cn)
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript compiler options
├── vercel.json                 # Vercel deployment rewrite rules
└── vite.config.ts              # Vite plugins and path alias resolution
```

---

## 🚦 Getting Started

Follow these steps to set up and run the project locally.

### 1. Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v18.0.0 or higher recommended, tested on v22.x)
- **npm**, **pnpm**, or **yarn**

### 2. Clone the Repository

```bash
git clone https://github.com/Ramjanict/ecommerce-kicks.git
cd ecommerce-kicks
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.escuelajs.co/api/v1
```

### 5. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts the Vite local development server with HMR |
| **Build** | `npm run build` | Type-checks with TypeScript and compiles production bundle |
| **Preview** | `npm run preview` | Locally serves the production build |
| **Lint** | `npm run lint` | Runs ESLint to check code quality |

---

## 🗺️ Application Routes

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Hero banner, new drops carousel, category browser, and verified reviews |
| `/product/:id` | **Product Detail** | Interactive gallery, color/size selection, description, and cart actions |
| `/cart` | **Shopping Cart** | Cart items overview, quantity management, item deletion, and live total calculation |

---

## 💡 State Management Architecture

```
   ┌────────────────────────────────────────────────────────┐
   │                     Redux Store                        │
   ├────────────────────────────┬───────────────────────────┤
   │        Cart Slice          │          Base API         │
   │  - items: CartItem[]       │     (RTK Query Cache)     │
   │  - totalQuantity           │  - getAllProducts         │
   │  - totalPrice              │  - getProductDetails      │
   │  - addItem / removeItem   │  - getAllCategories       │
   └─────────────┬──────────────┴───────────────────────────┘
                 │
                 ▼
       ┌───────────────────┐
       │   Redux Persist   │  ──▶ LocalStorage sync (Cart retained on reload)
       └───────────────────┘
```

- **RTK Query:** Handles cached server state, automatic background re-fetching, and loading/error states for products and categories.
- **Redux Persist:** Synchronizes client shopping cart state to browser `localStorage`, guaranteeing checkout continuity.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Crafted with passion by **[Ramjan Ali](https://github.com/Ramjanict)**

</div>
