import { useState } from "react"
import Navbar from "@Organisms/Navbar"
import Cart from "@Organisms/Cart"
import Container from "@mui/material/Container"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"

type Props = {
  children?: React.ReactNode,
}

export default function Main({ children }: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen((currentState) => !currentState)
  }

  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <SwipeableDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOpen={() => setIsCartOpen(true)}
        ModalProps={{
          keepMounted: false,
        }}
      >
        <Cart toggleCart={toggleCart} />
      </SwipeableDrawer>
      <Container maxWidth="lg" sx={{ marginTop: "8rem" }}>
        {children}
      </Container>
    </>
  )
}