import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@Store/store";
import { Product } from "@Types/product";
import toast from "react-hot-toast";

interface CartState {
  items: {
    id: Product["id"];
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    addToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      toast.success("Added to cart");
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast.success("Removed from cart");
    },
    editCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      toast.success("Updated cart item");
    },
  },
});

export const { hydrate, addToCart, removeFromCart, editCartItem } =
  cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
