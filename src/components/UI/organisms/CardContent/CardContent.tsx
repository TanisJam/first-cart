import CardContentMui from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

type Props = {
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  isCart?: boolean;
}

export default function CardContent({ title, price, rating, isCart }: Props) {
  return (
    <CardContentMui>
      <Typography gutterBottom variant="body1" component="p">
        {title}
      </Typography>
      {!isCart && (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: "center" }}>
          <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
          <Typography variant="body2" color="text.secondary">
            {rating.count}
          </Typography>
        </Box>
      )}
      <Typography variant="h6" color="text.secondary.main">
        ${price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </Typography>
    </CardContentMui>
  )
}