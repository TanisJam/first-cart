import { useEffect } from "react";
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
      <CardsContainer />
    </Main>
  );
}

export default App;
