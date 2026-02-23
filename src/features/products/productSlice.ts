import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./types";

interface ProductsState {
  items: Product[] | [];
  selectedProduct: Product | null;
  filter: string;
  loading: boolean;
}

const initialState: ProductsState = {
  items: [],
  selectedProduct: null,
  filter: "all",
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { setSelectedProduct, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
