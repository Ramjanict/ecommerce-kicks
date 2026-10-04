// src/data/products.ts
import { Review } from "./types";

// Review images
import review1Img from "@/assets/images/product8.png";
import review2Img from "@/assets/images/product9.png";
import review3Img from "@/assets/images/product10.png";

// Review avatars
import avatar1 from "@/assets/images/product9.png";
import avatar2 from "@/assets/images/product10.png";
import avatar3 from "@/assets/images/product8.png";

// Additional sneaker product images
import sneaker1 from "@/assets/images/product11.jpg";
import sneaker2 from "@/assets/images/product12.jpg";
import sneaker3 from "@/assets/images/product13.jpg";
import sneaker4 from "@/assets/images/product14.jpg";
import sneaker5 from "@/assets/images/product15.jpg";

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

export const newDropSneakerImages = [
  { id: 11, name: "Air Max Red Velocity", image: sneaker1, tag: "Running" },
  { id: 12, name: "Retro Street High-Top", image: sneaker2, tag: "Basketball" },
  { id: 13, name: "Minimal Classic White", image: sneaker3, tag: "Lifestyle" },
  { id: 14, name: "Neon Cyber Trainer", image: sneaker4, tag: "Training" },
  { id: 15, name: "Chunky Urban Lifestyle", image: sneaker5, tag: "Streetwear" },
];
