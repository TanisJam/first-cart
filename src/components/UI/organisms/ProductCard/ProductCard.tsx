import { useState } from 'react';
import CardContent from '@Organisms/CardContent';
import CardActions from '@Organisms/CardActions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { sxProductCard, sxCardImage } from './ProductCard.styles';
import { Product } from '@Types/product';

export default function ProductCard({ title, price, rating, image }: Product) {
  const [quantity, setQuantity] = useState(1);
  return (
    <Card sx={sxProductCard}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={sxCardImage}
      />
      <CardContent {... { title, price, rating }} />
      <CardActions {...{ price, quantity, setQuantity }} />
    </Card>
  )
}