import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { sxError } from './Error.styles';

export default function Error() {
  return (
    <Box sx={sxError}>
      <ErrorOutlineIcon sx={{ fontSize: 100, color: "info.main" }} />
      <Typography variant="h4" component="h2">
        Something went wrong...
      </Typography>
      <Typography variant="h5" component="h3">
        We couldn't load the products. Please try again later.
      </Typography>
    </Box>
  )
}