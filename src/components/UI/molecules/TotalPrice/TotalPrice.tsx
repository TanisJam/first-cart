import Label from "@Atoms/Label"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import { sxTotalContainer, sxTotalPriceLabel, sxDiscount } from "./TotalPrice.styles"

type Props = {
  title?: string,
  labelTop?: boolean,
  totalPrice: number,
  discount?: number,
}

export default function TotalPrice({ title, labelTop, totalPrice, discount = 0 }: Props) {
  return (
    <Box sx={sxTotalContainer}>
      {title && <Label>{title}</Label>}
      <Typography variant="h6" sx={sxTotalPriceLabel}>
        ${(totalPrice * (1 - discount)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        {discount > 0 && <Chip
          label={`${discount * 100}% off`}
          sx={sxDiscount(labelTop)}
        />}
      </Typography>
    </Box>
  )
}
