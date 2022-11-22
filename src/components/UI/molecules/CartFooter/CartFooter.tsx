import { useMemo } from "react"
import { useAppSelector } from "@Store/hooks"
import { useGetProductsQuery } from "@Store/services/products"
import formatNumber from "@Utils/formatNumber"
import getDiscountPercentage from "@Utils/getDiscountPercentage"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { sxCartFooter } from "./CartFooter.styles"


export default function CartFooter() {
  const { items } = useAppSelector((state) => state.cart)
  const { data } = useGetProductsQuery()

  const total = useMemo(() => {
    return items.reduce((acc, item) => {
      const product = data?.find((product) => product.id === item.id)
      if (!product) return acc
      return acc + (product.price * item.quantity * (1 - getDiscountPercentage(item.quantity)))
    }, 0)
  }, [items, data])

  return (
    <Paper
      sx={sxCartFooter}
    >
      <Typography variant="h5" component="h2">
        Total: ${formatNumber(total)}
      </Typography>
      <Typography variant="h5" component="h2">
        Checkout
      </Typography>
    </Paper>
  )
}