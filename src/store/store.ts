import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import cartReducer, {
  addToCart,
  editCartItem,
  removeFromCart,
} from "./features/cart/cartSlice";
import productsReducer from "./features/productsFilter/productsFilterSlice";
import { productsApi } from "./services/products";

// listen for modifications to the cart state and persist them to localStorage
const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addToCart, editCartItem, removeFromCart),
  effect: (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    localStorage.setItem("cartState", JSON.stringify(state.cart));
  },
});

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsFilter: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApi.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
