import { useMemo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "@Store/hooks";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

type Props = {
  onClick: () => void;
};

/**
 * Cart trigger in the navbar.
 * - Renders the cart count as a chip-shaped badge instead of MUI's tiny dot.
 * - On count increase we briefly bounce the icon AND pulse the badge — the page-wide
 *   "you added something" feedback. Decrease just updates the number quietly.
 */
export default function CartIcon({ onClick }: Props) {
  const { items } = useAppSelector((state) => state.cart);
  const totalItems = useMemo(
    () => items.reduce((acc, item) => acc + item.quantity, 0),
    [items]
  );

  const prevTotal = useRef(totalItems);
  const [bump, setBump] = useState(0);
  useEffect(() => {
    if (totalItems > prevTotal.current) setBump((b) => b + 1);
    prevTotal.current = totalItems;
  }, [totalItems]);

  return (
    <Box sx={{ position: "relative" }}>
      <motion.div
        key={bump}
        initial={{ scale: 1 }}
        animate={{ scale: bump ? [1, 1.18, 0.96, 1] : 1 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        style={{ display: "inline-flex" }}
      >
        <IconButton
          onClick={onClick}
          aria-label={`Open cart (${totalItems} items)`}
          sx={{
            width: 42,
            height: 42,
            borderRadius: "12px",
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "#fff",
            color: "secondary.main",
            "&:hover": {
              backgroundColor: "background.subtle",
              borderColor: "#D4D4D8",
            },
          }}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </motion.div>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            key="badge"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            style={{
              position: "absolute",
              top: -6,
              right: -6,
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                minWidth: 20,
                height: 20,
                px: 0.75,
                borderRadius: 999,
                backgroundColor: "primary.main",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                display: "grid",
                placeItems: "center",
                boxShadow:
                  "0 0 0 2px #fff, 0 4px 8px -2px rgba(91,91,214,0.45)",
                lineHeight: 1,
              }}
            >
              {totalItems > 99 ? "99+" : totalItems}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
