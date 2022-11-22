import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from "@mui/material/Typography"
import { sxCartHeader } from "./CartHeader.styles"

type Props = {
  toggleCart: () => void,
}

export default function CartHeader({ toggleCart }: Props) {
  return (
    <Paper
      sx={sxCartHeader}
    >
      <IconButton
        aria-label="back"
        color="info"
        onClick={toggleCart}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Typography variant="h5" component="h2">
        Your Shopping Cart
      </Typography>
    </Paper>
  )
}