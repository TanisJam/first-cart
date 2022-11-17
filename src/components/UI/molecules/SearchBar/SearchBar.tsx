import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Paper from "@mui/material/Paper"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { sxSearchBar } from "./SearchBar.styles"


type Props = {}

export default function SearchBar({}: Props) {
  return (
    <Paper
      component="form"
      sx={sxSearchBar}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchOutlinedIcon />
      </IconButton>
    </Paper>
  )
}