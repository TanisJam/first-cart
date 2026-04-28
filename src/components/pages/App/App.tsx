import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "@Store/hooks";
import { hydrate } from "@Store/features/cart/cartSlice";
import getCartFromLocalStorage from "@Utils/functions/getCartFromLocalStorage";
import Main from "@Templates/Main";
import CardsContainer from "@Templates/CardsContainer";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const cart = getCartFromLocalStorage();
    if (cart) dispatch(hydrate(cart));
  }, [dispatch]);

  return (
    <Main>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2400,
          style: {
            background: "#18181B",
            color: "#FAFAFA",
            border: "1px solid #27272A",
            borderRadius: 12,
            padding: "10px 14px",
            fontSize: 14,
            fontWeight: 500,
            boxShadow:
              "0 12px 28px -8px rgba(15, 15, 30, 0.25), 0 4px 8px -4px rgba(15, 15, 30, 0.15)",
          },
          success: { iconTheme: { primary: "#5B5BD6", secondary: "#FFFFFF" } },
          error: { iconTheme: { primary: "#EF4444", secondary: "#FFFFFF" } },
        }}
      />
      <CardsContainer />
    </Main>
  );
}

export default App;
