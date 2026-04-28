import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppDispatch } from "@Store/hooks";
import { editCartItem, removeFromCart } from "@Store/features/cart/cartSlice";
import QuantitySelector from "@Molecules/QuantitySelector";
import ConfirmDialog from "@Molecules/ConfirmDialog";
import getDiscountPercentage from "@Utils/functions/getDiscountPercentage";
import formatNumber from "@Utils/functions/formatNumber";
import capitalizeString from "@Utils/functions/capitalizeString";
import type { Product } from "@Types/product";

interface Props extends Product {
  quantity: number;
}

export default function CartItem({
  id,
  title,
  price,
  image,
  category,
  quantity,
}: Props) {
  const dispatch = useAppDispatch();
  const [openConfirm, setOpenConfirm] = useState(false);

  const discount = useMemo(() => getDiscountPercentage(quantity), [quantity]);
  const subtotal = price * quantity;
  const discounted = subtotal * (1 - discount);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ type: "spring", stiffness: 360, damping: 30 }}
    >
      <ConfirmDialog
        title="Remove from cart?"
        description="This will remove the item from your cart."
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={() => {
          dispatch(removeFromCart(id));
          setOpenConfirm(false);
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "84px 1fr auto",
          gap: 2,
          py: 2.25,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            width: 84,
            height: 84,
            borderRadius: 2,
            backgroundColor: "background.subtle",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
            p: 1.25,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            loading="lazy"
            sx={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, minWidth: 0 }}>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", lineHeight: 1 }}
          >
            {capitalizeString(category)}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: "secondary.main",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.35,
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
              mt: 1,
              flexWrap: "wrap",
            }}
          >
            <QuantitySelector
              quantity={quantity}
              setQuantity={(q) => dispatch(editCartItem({ id, quantity: q }))}
              size="sm"
            />
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
              {discount > 0 && (
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.disabled",
                    textDecoration: "line-through",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  ${formatNumber(subtotal)}
                </Typography>
              )}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  color: "secondary.main",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                ${formatNumber(discounted)}
              </Typography>
            </Box>
          </Box>

          {discount > 0 && (
            <Chip
              size="small"
              label={`${formatNumber(discount * 100)}% volume discount`}
              color="primary"
              sx={{ alignSelf: "flex-start", mt: 0.75 }}
            />
          )}
        </Box>

        <IconButton
          aria-label="Remove from cart"
          onClick={() => setOpenConfirm(true)}
          sx={{
            width: 32,
            height: 32,
            color: "text.secondary",
            alignSelf: "flex-start",
            "&:hover": { color: "error.main", backgroundColor: "rgba(239,68,68,0.06)" },
          }}
        >
          <CloseRoundedIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </motion.div>
  );
}
