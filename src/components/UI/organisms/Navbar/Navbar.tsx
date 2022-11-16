import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CartIcon from '@Atoms/CartIcon';
import Container from '@mui/material/Container';
import SearchBar from '@Molecules/SearchBar';

export default function SearchAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar >
          <Container maxWidth="lg" sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem"
          }}>
            <CartIcon />
            <SearchBar />
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}