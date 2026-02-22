import baseAPI from "@/app/baseAPI";
import { Category, Product } from "./types";

export const productAPI = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<Product[], void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductsDetails: build.query<Product, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getAllCategories: build.query<Category[], void>({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    getSingleCategory: build.query<Category, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsDetailsQuery } =
  productAPI;
