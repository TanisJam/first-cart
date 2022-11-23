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
    dispatch(hydrate(cart));
  }, []);

  return (
    <Main>
      <Toaster />
      <CardsContainer />
    </Main>
  );
}

export default App;
