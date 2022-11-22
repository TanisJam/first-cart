import { useMemo } from "react"
import { useAppSelector } from "@Store/hooks"
import { useGetProductsQuery } from "@Store/services/products"
import formatNumber from "@Utils/formatNumber"
import getDiscountPercentage from "@Utils/getDiscountPercentage"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { sxCartFooter, sxCardFooterBox } from "./CartFooter.styles"


export default function CartFooter() {
  const { items } = useAppSelector((state) => state.cart)
  const { data } = useGetProductsQuery()

  const [total, totalWithDiscount] = useMemo(() => {
    return items.reduce((acc, item) => {
      const product = data?.find((product) => product.id === item.id)
      if (!product) return acc
      const total = acc[0] + (product.price * item.quantity)
      const totalWithDiscount = acc[1] + (product.price * item.quantity * (1 - getDiscountPercentage(item.quantity)))
      return [total, totalWithDiscount]
    }, [0, 0])
  }, [items, data])

  return (
    <Paper
      sx={sxCartFooter}
    >
      <Box sx={sxCardFooterBox}>
        <Typography variant="h6" component="p" color="secondary.main">
          Total:
        </Typography>
        <Typography variant="h6" component="p" color="neutral.main"
          sx={{ marginLeft: "5rem", textDecoration: "line-through" }}>
          ${formatNumber(total)}
        </Typography>
        <Typography variant="h5" component="p" fontWeight={"bold"}>
          ${formatNumber(totalWithDiscount)}
        </Typography>
      </Box>
      <Button variant="contained" size="large">
        CHECKOUT
      </Button>
    </Paper>
  )
}