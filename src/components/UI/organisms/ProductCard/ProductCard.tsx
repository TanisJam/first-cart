import { useState, useMemo } from 'react';
import { useAppSelector } from '@Store/hooks';
import CardContent from '@Organisms/CardContent';
import CardActions from '@Organisms/CardActions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { sxProductCard, sxProductCardChipCategory, sxProductCardChipCart, sxCardImage } from './ProductCard.styles';
import { Product } from '@Types/product';

export default function ProductCard({ title, price, rating, image, id, category }: Product) {
  const [quantity, setQuantity] = useState(1);
  const { items } = useAppSelector((state) => state.cart);

  const isProductInCart = useMemo(() => {
    return items.some((item) => item.id === id);
  }, [items, id]);


  return (
    <Card sx={sxProductCard}>
      <Box>
        <Chip label={category} sx={sxProductCardChipCategory} color="secondary" />
        {isProductInCart && (
          <Chip
            color="primary"
            label="Alredy in cart"
            sx={sxProductCardChipCart} />
        )}
      </Box>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={sxCardImage}
      />
      <CardContent {... { title, price, rating }} />
      <CardActions {...{ price, quantity, setQuantity, id }} />
    </Card>
  )
}