import { editCartItem, removeFromCart } from "@Store/features/cart/cartSlice";
import { useAppDispatch } from "@Store/hooks";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@Organisms/CardContent";
import CardActions from "@Organisms/CardActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Product } from "@Types/product";
import {
  sxCartItem,
  sxCartDelIcon,
  sxCartImage,
  sxCartContent,
} from "./CartItem.styles";

interface Props extends Product {
  quantity: number;
}

export default function CartItem({
  id,
  title,
  price,
  rating,
  quantity,
  image,
}: Props) {
  const dispatch = useAppDispatch();

  const handleSetQuantity = (value: number) => {
    dispatch(
      editCartItem({
        id,
        quantity: value,
      })
    );
  };
  const handleRemoveItem = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card sx={sxCartItem}>
      <IconButton aria-label="delete" color="error" sx={sxCartDelIcon}
        onClick={handleRemoveItem}
      >
        <CloseIcon />
      </IconButton>
      <CardMedia component="img" alt={title} image={image} sx={sxCartImage} />
      <Box sx={sxCartContent}>
        <CardContent isCart {...{ title, price, rating }} />
        <CardActions
          isCart
          {...{ id, price, quantity, setQuantity: handleSetQuantity }}
        />
      </Box>
    </Card>
  );
}
