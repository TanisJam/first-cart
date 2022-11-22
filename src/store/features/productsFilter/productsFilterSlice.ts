import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@Store/store";
import { Product } from "@Types/product";

interface ProductsFilterState {
  categories: string[];
  searchQuery: string;
  filteredList: Product[];
}

const initialState: ProductsFilterState = {
  categories: [],
  searchQuery: "",
  filteredList: [],
};

export const productsFilterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategory: (state, action) => {
      const category = action.payload;
      const index = state.categories.indexOf(category);
      if (index === -1) {
        state.categories.push(category);
      } else {
        state.categories.splice(index, 1);
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});

export const { setCategories, setCategory, setSearchQuery, setFilteredList } =
  productsFilterSlice.actions;

export const selectFilteredList = (state: RootState) =>
  state.productsFilter.filteredList;

export default productsFilterSlice.reducer;
