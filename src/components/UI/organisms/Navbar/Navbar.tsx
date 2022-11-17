import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CartIcon from '@Atoms/CartIcon';
import Container from '@mui/material/Container';
import SearchBar from '@Molecules/SearchBar';
import Categories from '@Organisms/Categories';

import { sxNavContainer } from './Navbar.styles';


export default function SearchAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar >
          <Container maxWidth="lg" sx={sxNavContainer}>
            <CartIcon />
            <SearchBar />
          </Container>
        </Toolbar>
        <Categories />
      </AppBar>
    </Box>
  );
}