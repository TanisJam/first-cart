import useGetCartTotals from "@Utils/hooks/useGetCartTotals";
import formatNumber from "@Utils/functions/formatNumber";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { sxCartFooter, sxCardFooterBox } from "./CartFooter.styles";

export default function CartFooter() {
  const { total, totalWithDiscount } = useGetCartTotals();

  return (
    <Paper sx={sxCartFooter}>
      <Box sx={sxCardFooterBox}>
        <Typography variant="h6" component="p" color="secondary.main">
          Total:
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="neutral.main"
          sx={{textDecoration: "line-through" }}
        >
          ${formatNumber(total)}
        </Typography>
        <Typography variant="h5" component="p" fontWeight={"bold"}>
          ${formatNumber(totalWithDiscount)}
        </Typography>
      </Box>
      <Button variant="contained" size="large">
        CHECKOUT
      </Button>
    </Paper>
  );
}
