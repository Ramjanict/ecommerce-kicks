// src/data/products.ts
import { Category, Product, Review } from "./types";

// Product images
import product10 from "@/assets/images/product10.png";
import product2 from "@/assets/images/product2.png";
import {
  default as product1,
  default as product3,
} from "@/assets/images/product3.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";
import product6 from "@/assets/images/product6.png";
import product7 from "@/assets/images/product7.png";
import product8 from "@/assets/images/product8.png";
import product9 from "@/assets/images/product9.png";

// Review images
import review3Img from "@/assets/images/product10.png";
import review1Img from "@/assets/images/product8.png";
import review2Img from "@/assets/images/product9.png";

// Review avatars
import avatar2 from "@/assets/images/product10.png";
import avatar3 from "@/assets/images/product8.png";
import avatar1 from "@/assets/images/product9.png";

// Category images
import lifestyleImg from "@/assets/images/product6.png";
import basketballImg from "@/assets/images/product8.png";

export const products: Product[] = [
  {
    id: "1",
    name: "Adidas 4DFWD X Parley Running Shoes",
    brand: "Adidas",
    price: 125,
    description:
      "Shadow Navy / Army Green. This product is excluded from all promotional discounts and offers. Pay over time in interest-free installments with Affirm, Klarna or Afterpay. Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
    shortDescription: "Men's Road Running Shoes",
    images: [product1, product10, product9, product5],
    colors: [
      { name: "Shadow Navy", hex: "#1c2951" },
      { name: "Army Green", hex: "#4a5240" },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    category: "runners",
    tags: ["new", "running"],
    rating: 4.8,
    reviewCount: 234,
    isNew: true,
    isFeatured: true,
    stock: 15,
  },
  {
    id: "2",
    name: "Adidas 4DFWD X Parley Running Shoes",
    brand: "Adidas",
    price: 125,
    originalPrice: 139,
    description:
      "Premium running shoes with 4D-printed midsole for unmatched comfort and performance.",
    shortDescription: "Men's Road Running Shoes",
    images: [product2, product3, product4, product5],
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Red", hex: "#e63946" },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    category: "runners",
    tags: ["new"],
    rating: 4.6,
    reviewCount: 189,
    isNew: true,
    isFeatured: false,
    stock: 8,
  },
  {
    id: "3",
    name: "Adidas 4DFWD X Parley Running Shoes",
    brand: "Adidas",
    price: 125,
    description:
      "Engineered with Parley Ocean Plastic, made from recycled ocean waste for sustainability.",
    shortDescription: "Men's Road Running Shoes",
    images: [product3, product4, product1, product2],
    colors: [
      { name: "Dark Green", hex: "#2d6a4f" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    category: "runners",
    tags: ["new"],
    rating: 4.7,
    reviewCount: 156,
    isNew: true,
    isFeatured: false,
    stock: 12,
  },
  {
    id: "4",
    name: "Adidas 4DFWD X Parley Running Shoes",
    brand: "Adidas",
    price: 125,
    description:
      "High-performance running shoe with 4D midsole technology and Parley design.",
    shortDescription: "Men's Road Running Shoes",
    images: [product4, product5, product6, product7],
    colors: [
      { name: "Orange", hex: "#fd7e14" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    category: "runners",
    tags: ["new"],
    rating: 4.9,
    reviewCount: 312,
    isNew: true,
    isFeatured: false,
    stock: 5,
  },
  {
    id: "5",
    name: "Nike Air Max Dropset Trainer",
    brand: "Nike",
    price: 130,
    description:
      "Men's Road Running Shoes. Enamel Blue / University White. Premium trainer for gym and street.",
    shortDescription: "Men's Road Running Shoes",
    images: [product5, product6, product7, product8],
    colors: [
      { name: "Enamel Blue", hex: "#1c6ea4" },
      { name: "University White", hex: "#f5f5f5" },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    category: "sneakers",
    tags: ["featured"],
    rating: 4.5,
    reviewCount: 98,
    isNew: false,
    isFeatured: true,
    stock: 20,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    author: "Alex M.",
    rating: 5,
    comment:
      "I highly recommend shopping from kicks. Amazing quality and fast delivery!",
    avatar: avatar1,
    image: review1Img,
    date: "2024-10-15",
  },
  {
    id: "2",
    author: "Sarah K.",
    rating: 5,
    comment:
      "I highly recommend shopping from kicks. Best sneaker store online!",
    avatar: avatar2,
    image: review2Img,
    date: "2024-10-10",
  },
  {
    id: "3",
    author: "Jordan T.",
    rating: 5,
    comment:
      "I highly recommend shopping from kicks. Great selection and prices!",
    avatar: avatar3,
    image: review3Img,
    date: "2024-09-28",
  },
];

export const categories: Category[] = [
  {
    id: "lifestyle",
    name: "Lifestyle Shoes",
    image: lifestyleImg,
    count: 48,
  },
  {
    id: "basketball",
    name: "Basketball Shoes",
    image: basketballImg,
    count: 32,
  },
];
