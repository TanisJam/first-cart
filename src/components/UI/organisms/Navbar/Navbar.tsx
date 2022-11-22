import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CartIcon from '@Atoms/CartIcon';
import Container from '@mui/material/Container';
import SearchBar from '@Molecules/SearchBar';
import Categories from '@Organisms/Categories';
import { sxNavContainer } from './Navbar.styles';

type Props = {
  toggleCart: () => void,
}


export default function SearchAppBar({ toggleCart }: Props) {
  return (
    <Box >
      <AppBar position="fixed">
        <Toolbar >
          <Container maxWidth="lg" sx={sxNavContainer}>
            <CartIcon onClick={toggleCart} />
            <SearchBar />
          </Container>
        </Toolbar>
        <Categories />
      </AppBar>
    </Box>
  );
}