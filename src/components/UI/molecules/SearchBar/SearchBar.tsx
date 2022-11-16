import IconButton from "@mui/material/IconButton"
import InputBase from "@mui/material/InputBase"
import Paper from "@mui/material/Paper"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


type Props = {}

export default function SearchBar({ }: Props) {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: 300,
        borderRadius: "50px",
        boxShadow:
          "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
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