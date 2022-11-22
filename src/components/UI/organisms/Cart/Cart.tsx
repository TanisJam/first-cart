import { useGetProductsQuery } from "@Store/services/products"
import { useAppSelector } from "@Store/hooks"
import Typography from "@mui/material/Typography"
import CartHeader from "@Molecules/CartHeader"
import CartItem from "@Organisms/CartItem"
import CartFooter from "@Molecules/CartFooter"
import Box from "@mui/material/Box"
import { sxCartMain } from "./Cart.styles"

type Props = {
  toggleCart: () => void,
}

export default function Cart({ toggleCart }: Props) {
  const { data, isLoading, isError } = useGetProductsQuery()
  const { items } = useAppSelector((state) => state.cart)

  if (isError || isLoading || items.length < 1) {
    return (
      <Box sx={{
        position: "relative",
      }}>
        <CartHeader toggleCart={toggleCart} />
        <Box sx={sxCartMain} >
          <Typography variant="h5" component="h2" sx={{ textAlign: "center", width: "450px", maxWidth: "100vw" }}>
            Your cart is empty
          </Typography>
        </Box>
        <CartFooter />
      </Box>
    )
  }



  return (
    <Box sx={{
      position: "relative",
    }}>
      <CartHeader toggleCart={toggleCart} />
      <Box sx={sxCartMain} >
        {items.map((item) => {
          const product = data?.find((product) => product.id === item.id)
          if (!product) return null
          return (
            <CartItem key={item.id} {...product} quantity={item.quantity} />
          )
        })}
      </Box>
      <CartFooter />
    </Box>
  )
}