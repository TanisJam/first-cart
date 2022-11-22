export default function getCartFromLocalStorage() {
  try {
    const persistedState = localStorage.getItem("cartState");
    if (persistedState) return JSON.parse(persistedState);
  } catch (error) {
    console.error(error);
  }
}
