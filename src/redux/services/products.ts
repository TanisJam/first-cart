import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "@Types/product";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),
    getCategoryProducts: builder.query<Product[], string>({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetCategoryProductsQuery,
} = productsApi;
