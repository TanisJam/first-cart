import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { addToCart } from "@Store/features/cart/cartSlice";
import RatingStars from "@Atoms/RatingStars";
import capitalizeString from "@Utils/functions/capitalizeString";
import formatNumber from "@Utils/functions/formatNumber";
import type { Product } from "@Types/product";

type Props = Product & {
  /** Optional: parent can intercept "quick view" — modal etc. */
  onQuickView?: (product: Product) => void;
};

/**
 * Storefront product card.
 *
 * UX choices worth calling out:
 * - The image sits in a neutral chamber with `aspect-ratio` so cards stay aligned even
 *   when product photos vary wildly in dimensions (FakeStore images really do).
 * - Hover lifts the card 4px and zooms the image — two parallel transforms on different
 *   elements so the lift never makes the photo escape its frame.
 * - The "Quick view" / wishlist actions appear ONLY on hover (and only on devices that
 *   actually have hover) — phones get the full set of always-visible controls.
 * - Add-to-cart morphs to "Added ✓" for ~1.4s as page-local feedback. The toast is
 *   global feedback; the local one is what makes the click feel responsive.
 */
export default function ProductCard({
  id,
  title,
  price,
  rating,
  image,
  category,
  description,
  onQuickView,
}: Props) {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const isInCart = useMemo(() => items.some((i) => i.id === id), [items, id]);

  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart({ id, quantity: 1 }));
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <motion.article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #F4F4F5",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 18px 40px -12px rgba(15,15,30,0.14), 0 6px 12px -6px rgba(15,15,30,0.06)"
          : "0 1px 2px 0 rgba(15,15,30,0.04)",
        transitionProperty: "box-shadow",
        transitionDuration: "240ms",
        transitionTimingFunction: "ease",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image chamber */}
      <Box
        sx={{
          position: "relative",
          aspectRatio: "1 / 1",
          backgroundColor: "background.subtle",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: "16%",
            transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Top-left: in-cart badge */}
        <AnimatePresence>
          {isInCart && (
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ position: "absolute", top: 12, left: 12 }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  height: 24,
                  px: 1,
                  borderRadius: 999,
                  backgroundColor: "rgba(16,185,129,0.10)",
                  color: "#047857",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  border: "1px solid rgba(16,185,129,0.18)",
                }}
              >
                <CheckRoundedIcon sx={{ fontSize: 12 }} />
                In cart
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top-right: wishlist + quick view (hover-revealed on desktop, always on touch) */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            flexDirection: "column",
            gap: 0.75,
            opacity: { xs: 1, md: hovered ? 1 : 0 },
            transform: { xs: "none", md: hovered ? "translateX(0)" : "translateX(8px)" },
            transition: "opacity 200ms ease, transform 200ms ease",
          }}
        >
          <Tooltip title={wishlisted ? "Remove from wishlist" : "Add to wishlist"} placement="left">
            <IconButton
              onClick={() => setWishlisted((w) => !w)}
              sx={{
                width: 34,
                height: 34,
                backgroundColor: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(6px)",
                border: "1px solid",
                borderColor: "divider",
                color: wishlisted ? "error.main" : "secondary.main",
                "&:hover": { backgroundColor: "#fff" },
              }}
            >
              {wishlisted ? (
                <FavoriteRoundedIcon sx={{ fontSize: 16 }} />
              ) : (
                <FavoriteBorderRoundedIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </Tooltip>
          {onQuickView && (
            <Tooltip title="Quick view" placement="left">
              <IconButton
                onClick={() =>
                  onQuickView({ id, title, price, rating, image, category, description })
                }
                sx={{
                  width: 34,
                  height: 34,
                  backgroundColor: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid",
                  borderColor: "divider",
                  color: "secondary.main",
                  "&:hover": { backgroundColor: "#fff" },
                }}
              >
                <VisibilityOutlinedIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2.25, display: "flex", flexDirection: "column", gap: 1, flex: 1 }}>
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", lineHeight: 1 }}
        >
          {capitalizeString(category)}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "secondary.main",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: "2.9em",
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>

        <RatingStars rate={rating.rate} count={rating.count} />

        <Box
          sx={{
            mt: "auto",
            pt: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="overline"
              sx={{ color: "text.secondary", lineHeight: 1 }}
            >
              Price
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.125rem",
                letterSpacing: "-0.01em",
                color: "secondary.main",
                lineHeight: 1.2,
                mt: 0.25,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              ${formatNumber(price)}
            </Typography>
          </Box>

          <Button
            onClick={handleAdd}
            variant={justAdded ? "contained" : "contained"}
            color={justAdded ? "success" : "primary"}
            size="small"
            startIcon={
              justAdded ? (
                <CheckRoundedIcon sx={{ fontSize: 16 }} />
              ) : (
                <AddShoppingCartRoundedIcon sx={{ fontSize: 16 }} />
              )
            }
            sx={{
              minWidth: 112,
              height: 38,
              transition: "background-color 200ms ease, color 200ms ease",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={justAdded ? "added" : "add"}
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ duration: 0.14 }}
              >
                {justAdded ? "Added" : "Add"}
              </motion.span>
            </AnimatePresence>
          </Button>
        </Box>
      </Box>
    </motion.article>
  );
}
