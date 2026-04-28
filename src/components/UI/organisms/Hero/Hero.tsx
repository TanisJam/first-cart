import { useMemo } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RatingStars from "@Atoms/RatingStars";
import capitalizeString from "@Utils/functions/capitalizeString";
import formatNumber from "@Utils/functions/formatNumber";
import type { Product } from "@Types/product";

type Props = {
  products: Product[];
  /** Smoothly scroll to the product grid when the CTA is clicked. */
  onShopAll?: () => void;
};

/**
 * Hero section. Picks the top-rated product as the featured item — purely a UI flourish
 * that gives the landing area a "real storefront" feel without needing a CMS.
 */
export default function Hero({ products, onShopAll }: Props) {
  const featured = useMemo(() => {
    if (!products.length) return undefined;
    return [...products].sort((a, b) => b.rating.rate - a.rating.rate)[0];
  }, [products]);

  if (!featured) return <HeroSkeleton />;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 16, sm: 24 },
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        p: { xs: 3, sm: 5, md: 6 },
        mb: { xs: 4, sm: 6 },
      }}
    >
      {/* Decorative gradient blob — pure CSS, no asset cost */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          background:
            "radial-gradient(closest-side, rgba(91,91,214,0.18), transparent 70%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Chip
            label="Featured"
            size="small"
            color="primary"
            sx={{ mb: 2, fontWeight: 600 }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
              mb: 2,
              maxWidth: 560,
            }}
          >
            Considered design.{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Honest pricing.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.0625rem" },
              maxWidth: 520,
              mb: 4,
            }}
          >
            A small, hand-picked catalog. The more you buy, the more you save —
            volume discounts apply automatically at checkout.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={onShopAll}
            >
              Shop all products
            </Button>
            <Button variant="outlined" size="large">
              How discounts work
            </Button>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <FeaturedCard product={featured} />
        </motion.div>
      </Box>
    </Box>
  );
}

function FeaturedCard({ product }: { product: Product }) {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        backgroundColor: "background.subtle",
        aspectRatio: "4 / 5",
        maxWidth: 460,
        marginInline: { xs: "auto", md: 0 },
        marginLeft: { md: "auto" },
        boxShadow:
          "0 30px 60px -20px rgba(15, 15, 30, 0.18), 0 12px 24px -8px rgba(15, 15, 30, 0.10)",
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        loading="eager"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          padding: 6,
        }}
      />

      {/* Floating info card — overlapping the image, anchored bottom-left */}
      <Box
        sx={{
          position: "absolute",
          left: 16,
          right: 16,
          bottom: 16,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: 3,
          border: "1px solid rgba(228,228,231,0.6)",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "text.secondary", display: "block" }}
        >
          {capitalizeString(product.category)}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          <RatingStars rate={product.rating.rate} count={product.rating.count} />
          <Typography sx={{ fontWeight: 700, fontSize: "1.0625rem" }}>
            ${formatNumber(product.price)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function HeroSkeleton() {
  return (
    <Box
      sx={{
        height: 360,
        borderRadius: 24,
        mb: 6,
        background:
          "linear-gradient(90deg, #f4f4f5 0%, #fafaf9 50%, #f4f4f5 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.6s ease-in-out infinite",
      }}
    />
  );
}
