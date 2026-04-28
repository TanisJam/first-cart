import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "@Atoms/Logo";
import CartIcon from "@Atoms/CartIcon";
import SearchBar from "@Molecules/SearchBar";

type Props = {
  toggleCart: () => void;
};

export default function Navbar({ toggleCart }: Props) {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 72 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "auto 1fr auto", sm: "auto 1fr auto" },
              alignItems: "center",
              gap: { xs: 1.5, sm: 3 },
            }}
          >
            <Logo />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: 520,
                marginInline: "auto",
              }}
            >
              <SearchBar />
            </Box>
            <CartIcon onClick={toggleCart} />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
