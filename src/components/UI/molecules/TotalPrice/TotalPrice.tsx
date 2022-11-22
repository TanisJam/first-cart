import Label from "@Atoms/Label"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Typography from "@mui/material/Typography"
import formatNumber from "@Utils/formatNumber"
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
        ${formatNumber(totalPrice * (1 - discount))}
        {discount > 0 && <Chip
          label={`${formatNumber(discount * 100)}% off`}
          sx={sxDiscount(labelTop)}
        />}
      </Typography>
    </Box>
  )
}
