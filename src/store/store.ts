import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";
import productsReducer from "./features/productsFilter/productsFilterSlice";
import { productsApi } from "./services/products";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    productsFilter: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
