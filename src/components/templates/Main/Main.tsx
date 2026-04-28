import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Navbar from "@Organisms/Navbar";
import Cart from "@Organisms/Cart";

type Props = {
  children?: React.ReactNode;
};

export default function Main({ children }: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen((s) => !s);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar toggleCart={toggleCart} />

      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        ModalProps={{ keepMounted: false }}
        PaperProps={{
          sx: {
            width: { xs: "100vw", sm: 480 },
            maxWidth: "100vw",
            boxShadow: "0 24px 48px -16px rgba(15, 15, 30, 0.18)",
          },
        }}
      >
        <Cart toggleCart={toggleCart} />
      </Drawer>

      <Container maxWidth="xl" sx={{ pt: { xs: 4, sm: 6 }, pb: 12 }}>
        {children}
      </Container>

      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          py: 4,
          textAlign: "center",
          color: "text.secondary",
          fontSize: "0.8125rem",
        }}
      >
        Built with React, MUI &amp; Framer Motion · A First Cart demo
      </Box>
    </Box>
  );
}
