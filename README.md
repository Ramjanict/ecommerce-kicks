# KICKS — Sneaker Hyperstore

A production-ready sneaker e-commerce app built with React 18, TypeScript, Tailwind CSS v3, shadcn/ui, Redux Toolkit, and Framer Motion.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — lightning-fast dev server & bundler
- **Tailwind CSS v3** — utility-first styling
- **shadcn/ui** — accessible component primitives
- **Framer Motion** — smooth page transitions & animations
- **Redux Toolkit** — global state (cart, products)
- **React Router v6** — client-side routing

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
kicks/
├── public/              # Static assets
├── src/
│   ├── app/             # Redux store + typed hooks
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, Container, PageTransition
│   │   └── shared/      # SectionTitle, Newsletter, Badge, RatingStars, QuantitySelector
│   ├── features/
│   │   ├── products/    # Product slice, types, data, components
│   │   └── cart/        # Cart slice, CartItem, OrderSummary
│   ├── hooks/           # useMediaQuery
│   ├── lib/             # Framer Motion variants
│   ├── pages/           # Home, ProductDetails, Cart
│   ├── routes/          # AppRoutes with AnimatePresence
│   └── utils/           # cn, formatCurrency
```

## Features

- 🛒 **Shopping Cart** with Redux Toolkit — add, remove, update quantity
- 🎞️ **Page transitions** with Framer Motion AnimatePresence
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🔍 **Search overlay** with animated entry
- 🖼️ **Product gallery** with multi-image viewer
- 📏 **Size selector** with visual feedback
- 🎨 **Color selector** for product variants
- ✉️ **Newsletter signup** component
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage: hero, new drops, categories, reviews |
| `/product/:id` | Product detail page with gallery, sizes, add to cart |
| `/cart` | Cart with items, quantity selector, order summary |
