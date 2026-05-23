# GikiEats — Online Food Ordering & Campus Delivery Platform

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://danishjavedcodes.github.io/gikeats.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

> **GikiEats** is a lightweight, mobile-friendly **online food ordering website** built for **GIK Institute** (Ghulam Ishaq Khan Institute), Pakistan. Browse fast food, desi cuisine, desserts, and beverages — add items to your cart, choose a payment method, and place orders in minutes.

**Live demo:** [danishjavedcodes.github.io/gikeats.github.io](https://danishjavedcodes.github.io/gikeats.github.io/)

---

## Table of Contents

- [About GikiEats](#about-gikieats)
- [Features](#features)
- [Menu Categories](#menu-categories)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment on GitHub Pages](#deployment-on-github-pages)
- [Pages Overview](#pages-overview)
- [Contributing](#contributing)
- [Contact & Support](#contact--support)
- [Keywords](#keywords)

---

## About GikiEats

GikiEats (*GIKEATS*) is a **campus food delivery** and **online restaurant ordering** platform designed to make healthy eating convenient for students and staff at GIK Institute. The tagline says it best: **"Eat healthy at the right time."**

Whether you want a zinger burger after class, chicken karahi for dinner, or chai between lectures, GikiEats brings a simple, fast, and convenient ordering experience directly to your browser — no app install required.

### Why GikiEats?

- **Built for GIK Institute** — tailored for on-campus and nearby delivery addresses
- **Category-based browsing** — fast food, Pakistani desi dishes, sweet treats, and drinks
- **Local payment support** — EasyPaisa, JazzCash, and Cash on Delivery (COD)
- **Student-friendly signup** — register with email, password, and batch number
- **Fully static & free to host** — deploy instantly on GitHub Pages

---

## Features

| Feature | Description |
|---------|-------------|
| **Food Menu Browsing** | Explore items across four categories with prices in PKR |
| **Shopping Cart** | Review products, adjust quantities, and see subtotals |
| **User Authentication** | Sign up and sign in pages for registered users |
| **Secure Checkout** | Payment page with EasyPaisa, JazzCash, and COD options |
| **Order Confirmation** | Thank-you page after successful order placement |
| **Shop Dashboard** | Admin-style view for products and order tracking |
| **Responsive Design** | Mobile-first layout with Google Fonts (Montserrat, Raleway) |
| **About Page** | Full ordering guide and contact information |

---

## Menu Categories

### Fast Food (`fast.html`)
BBQ Pizza, Pepperoni Pizza, Fajita Pizza, Zinger Burger, Patty Burger, Club Sandwich, Cheese Sandwich, and more.

### Desi Food (`desi.html`)
Chicken Karahi, White Karahi, Seekh Kabab, Dum Pukht, Murgh Chana, Biryani, and traditional Pakistani favorites.

### Sweet Dishes (`des.html`)
Lava Cake, Chocolate Brownie, Gulab Jamun, Kheer, and other desserts.

### Drinks & Beverages (`shake.html`)
Chai, Coffee, Pepsi, Fanta, Sprite, and cold drinks.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (modular stylesheets per page) |
| Scripting | Vanilla JavaScript |
| Fonts | Google Fonts — Montserrat Alternates, Raleway |
| Icons & Assets | PNG, JPEG, SVG, Font Awesome (public/fonts) |
| Hosting | GitHub Pages |

No build step, no framework, and no backend required — clone and open `index.html` locally, or push to GitHub for instant deployment.

---

## Project Structure

```
gikeats.github.io/
├── index.html              # Home page — hero, category cards, navigation
├── about.html              # About GikiEats & how to order
├── fast.html               # Fast food menu
├── desi.html               # Desi / Pakistani food menu
├── des.html                # Sweet dishes & desserts
├── shake.html              # Drinks & beverages
├── cart.html               # Shopping cart & checkout summary
├── payment.html            # Payment method selection
├── Thanks.html             # Order confirmation
├── signin.html             # User sign in
├── signup.html             # User registration
├── shopview.html           # Shop / order management dashboard
├── style.css               # Global & home page styles
├── style-*.css             # Page-specific stylesheets
├── assets/images/
│   ├── brand/              # logo.png, cart.png, user.png, debit-card.png
│   ├── backgrounds/        # back.jpg (shared page background)
│   ├── categories/         # Home page category card images
│   ├── menu/
│   │   ├── fast/           # Fast food item photos
│   │   ├── desi/           # Desi food item photos
│   │   ├── desserts/       # Sweet dish photos
│   │   └── beverages/      # Drink photos
│   ├── cart/               # Cart product images
│   └── misc/               # Unused / spare images
└── public/                 # Shared assets (fonts, SVGs)
```

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- [Git](https://git-scm.com/) (optional, for cloning)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/danishjavedcodes/gikeats.github.io.git
cd gikeats.github.io

# Open the home page in your browser
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Alternatively, serve the folder with any static file server:

```bash
# Python 3
python3 -m http.server 8080
# Then visit http://localhost:8080
```

---

## Deployment on GitHub Pages

This repository is configured for **GitHub Pages** static hosting.

1. Push the `main` branch to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`
4. Select branch `main` and folder `/ (root)`
5. Your site will be live at:

   **https://danishjavedcodes.github.io/gikeats.github.io/**

---

## Pages Overview

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/index.html` | Landing page with food category cards |
| About | `/about.html` | Company info, ordering steps, contact |
| Fast Food | `/fast.html` | Burgers, pizzas, sandwiches |
| Desi Food | `/desi.html` | Pakistani & desi cuisine |
| Desserts | `/des.html` | Sweet dishes |
| Beverages | `/shake.html` | Drinks & shakes |
| Cart | `/cart.html` | Review cart before checkout |
| Payment | `/payment.html` | Select payment & place order |
| Sign In | `/signin.html` | Existing user login |
| Sign Up | `/signup.html` | New user registration |
| Shop View | `/shopview.html` | Products & orders dashboard |

---

## Contributing

Contributions are welcome! To improve GikiEats:

1. **Fork** this repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "Add: describe your change"`
4. **Push** to your fork: `git push origin feature/your-feature-name`
5. **Open** a Pull Request against `main`

Ideas for contributions: cart persistence with JavaScript, responsive image optimization, accessibility (ARIA labels), backend API integration, and SEO meta tags on HTML pages.

---

## Contact & Support

- **Email:** [support@gikieats.pk](mailto:support@gikieats.pk)
- **GitHub:** [danishjavedcodes/gikeats.github.io](https://github.com/danishjavedcodes/gikeats.github.io)
- **Live Site:** [danishjavedcodes.github.io/gikeats.github.io](https://danishjavedcodes.github.io/gikeats.github.io/)

For questions, bug reports, or feature requests, please [open an issue](https://github.com/danishjavedcodes/gikeats.github.io/issues) on GitHub.

---

## Keywords

`gikieats` · `gikeats` · `online food ordering` · `food delivery app` · `campus food delivery` · `GIK Institute food` · `Ghulam Ishaq Khan Institute` · `Pakistan food ordering` · `HTML CSS food website` · `GitHub Pages restaurant` · `EasyPaisa JazzCash COD` · `desi food delivery` · `fast food ordering` · `student food app` · `open source food platform`

---

<p align="center">
  Made with ❤️ for the GIK Institute community · <strong>GikiEats — Eat healthy at the right time</strong>
</p>
