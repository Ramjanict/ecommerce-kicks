// export interface Product {
//   id: string;
//   name: string;
//   brand: string;
//   price: number;
//   originalPrice?: number;
//   description: string;
//   shortDescription: string;
//   images: string[];
//   colors: ProductColor[];
//   sizes: number[];
//   category: string;
//   tags: string[];
//   rating: number;
//   reviewCount: number;
//   isNew: boolean;
//   isFeatured: boolean;
//   stock: number;
// }

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  avatar: string;
  image?: string;
  date: string;
}

// export interface Category {
//   id: string;
//   name: string;
//   image: string;
//   count: number;
// }
// main types

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
};
