import { useMemo } from "react";
import { useAppDispatch } from "@Store/hooks";
import QuantitySelector from "@Molecules/QuantitySelector";
import TotalPrice from "@Molecules/TotalPrice";
import CardActionsMui from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import getDiscountPercentage from "@Utils/functions/getDiscountPercentage";
import type { Product } from "@Types/product";
import { addToCart } from "@Store/features/cart/cartSlice";
import { sxActionsBox, sxActionsContainer } from "./CardActions.styles";

type CardActionsProps = {
  id: Product["id"];
  price: Product["price"];
  quantity: number;
  setQuantity: (quantity: number) => void;
  isCart?: boolean;
};

export default function CardActions({
  id,
  price,
  quantity,
  setQuantity,
  isCart,
}: CardActionsProps) {
  const totalPrice = useMemo(() => quantity * price, [quantity, price]);
  const discount = useMemo(() => getDiscountPercentage(quantity), [quantity]);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        quantity,
      })
    );
    setQuantity(1);
  };

  return (
    <CardActionsMui sx={sxActionsContainer}>
      <Box sx={sxActionsBox}>
        <QuantitySelector
          title={isCart ? "" : "QUANTITY"}
          {...{ quantity, setQuantity }}
        />
        <TotalPrice
          title={isCart ? "" : "TOTAL"}
          {...{ totalPrice, discount }}
          labelTop={isCart}
        />
      </Box>
      {!isCart && (
        <Button onClick={handleAddToCart} variant="contained" fullWidth>
          ADD TO CART
        </Button>
      )}
    </CardActionsMui>
  );
}
