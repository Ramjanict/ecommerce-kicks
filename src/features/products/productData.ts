// src/data/products.ts
import { Review } from "./types";

// Product images

// Review images
import review3Img from "@/assets/images/product10.png";
import review1Img from "@/assets/images/product8.png";
import review2Img from "@/assets/images/product9.png";

// Review avatars
import avatar2 from "@/assets/images/product10.png";
import avatar3 from "@/assets/images/product8.png";
import avatar1 from "@/assets/images/product9.png";

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
