import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
  toggleCart: () => void;
  itemCount: number;
};

export default function CartHeader({ toggleCart, itemCount }: Props) {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 3,
        height: 64,
        backgroundColor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ lineHeight: 1, mb: 0.25 }}>
          Your cart
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {itemCount} {itemCount === 1 ? "item" : "items"}
        </Typography>
      </Box>
      <IconButton
        onClick={toggleCart}
        aria-label="Close cart"
        sx={{
          width: 36,
          height: 36,
          backgroundColor: "background.subtle",
          "&:hover": { backgroundColor: "#E4E4E7" },
        }}
      >
        <CloseRoundedIcon sx={{ fontSize: 18 }} />
      </IconButton>
    </Box>
  );
}
