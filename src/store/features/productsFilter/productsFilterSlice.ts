import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@Store/store";
import { Product } from "@Types/product";

interface ProductsFilterState {
  categories: {
    isFiltering: boolean;
    categories: string[];
  };
  search: {
    isSearching: boolean;
    query: string;
  };
  filteredList: Product[];
}

const initialState: ProductsFilterState = {
  categories: {
    isFiltering: false,
    categories: [],
  },
  search: {
    isSearching: false,
    query: "",
  },
  filteredList: [],
};

export const productsFilterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});

export const { setCategories, setSearch, setFilteredList } =
  productsFilterSlice.actions;

export const selectFilteredList = (state: RootState) =>
  state.productsFilter.filteredList;

export default productsFilterSlice.reducer;
