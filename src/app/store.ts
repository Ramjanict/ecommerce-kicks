import cartReducer from "@/features/cart/cartSlice";
import productsReducer from "@/features/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import baseAPI from "./baseAPI";

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    products: productsReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
