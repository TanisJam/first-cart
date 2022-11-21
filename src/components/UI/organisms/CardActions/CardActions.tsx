import { useMemo } from 'react';
import QuantitySelector from '@Molecules/QuantitySelector';
import TotalPrice from '@Molecules/TotalPrice';
import CardActionsMui from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { sxActionsBox, sxActionsContainer } from './CardActions.styles';
import { Button } from '@mui/material';

type CardActionsProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
  price: number;
};

const discount = .25;


export default function CardActions({ quantity, setQuantity, price }: CardActionsProps) {
  const totalPrice = useMemo(() => quantity * price, [quantity, price]);

  return (
    <CardActionsMui sx={sxActionsContainer}  >
      <Box sx={sxActionsBox}>
        <QuantitySelector title='QUANTITY' {...{ quantity, setQuantity }} />
        <TotalPrice title='TOTAL' {...{ totalPrice, discount }} />
      </Box>
      <Button variant="contained" fullWidth>
        ADD TO CART
      </Button>
    </CardActionsMui>
  )
}