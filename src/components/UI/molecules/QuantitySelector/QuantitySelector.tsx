import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Label from "@Atoms/Label";

type QuantitySelectorProps = {
  title?: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
};

/**
 * Segmented [-] N [+] control. Single border so the buttons feel like one piece.
 * Animated digit swap on change for a small micro-delight.
 */
export default function QuantitySelector({
  title,
  quantity,
  setQuantity,
  min = 1,
  max = 99,
  size = "md",
}: QuantitySelectorProps) {
  const handleIncrement = () => quantity < max && setQuantity(quantity + 1);
  const handleDecrement = () => quantity > min && setQuantity(quantity - 1);
  const dim = size === "sm" ? 32 : 36;

  return (
    <Box>
      {title && <Label>{title}</Label>}
      <Box
        role="group"
        aria-label="Quantity"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          height: dim,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 999,
          backgroundColor: "background.paper",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={handleDecrement}
          aria-label="Decrease quantity"
          disabled={quantity <= min}
          sx={{
            width: dim,
            height: dim,
            borderRadius: 0,
            color: "secondary.main",
            "&.Mui-disabled": { color: "text.disabled" },
          }}
        >
          <RemoveRoundedIcon sx={{ fontSize: 16 }} />
        </IconButton>
        <Box
          sx={{
            minWidth: 32,
            textAlign: "center",
            position: "relative",
            height: dim,
            display: "grid",
            placeItems: "center",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={quantity}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.16 }}
              style={{ display: "inline-block", lineHeight: 1 }}
            >
              <Typography
                component="span"
                sx={{ fontWeight: 600, fontSize: "0.9375rem", tabularNums: 1 }}
              >
                {quantity}
              </Typography>
            </motion.span>
          </AnimatePresence>
        </Box>
        <IconButton
          onClick={handleIncrement}
          aria-label="Increase quantity"
          disabled={quantity >= max}
          sx={{
            width: dim,
            height: dim,
            borderRadius: 0,
            color: "secondary.main",
            "&.Mui-disabled": { color: "text.disabled" },
          }}
        >
          <AddRoundedIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
