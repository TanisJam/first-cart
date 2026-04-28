import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  rate: number;
  count?: number;
  size?: "sm" | "md";
  showCount?: boolean;
};

const STAR_PATH =
  "M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.6l-5.88 3.01 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z";

/**
 * Custom rating display — a single SVG with a clipped overlay for fractional fill.
 * Smaller bundle than MUI's Rating (no readonly state machinery) and we control color/fill exactly.
 */
export default function RatingStars({
  rate,
  count,
  size = "sm",
  showCount = true,
}: Props) {
  const px = size === "sm" ? 13 : 16;
  const totalWidth = px * 5 + 8; // 5 stars + 4 gaps of 2px
  const fillPct = Math.max(0, Math.min(1, rate / 5)) * 100;

  return (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
      <Box
        sx={{
          position: "relative",
          width: totalWidth,
          height: px,
          display: "inline-block",
          lineHeight: 0,
        }}
        aria-label={`Rated ${rate.toFixed(1)} out of 5`}
      >
        {/* Empty track */}
        <Box sx={{ display: "flex", gap: "2px" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width={px} height={px} viewBox="0 0 24 24" aria-hidden>
              <path d={STAR_PATH} fill="#E4E4E7" />
            </svg>
          ))}
        </Box>
        {/* Filled overlay clipped to the rating percentage */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: `${fillPct}%`,
            overflow: "hidden",
            display: "flex",
            gap: "2px",
            pointerEvents: "none",
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <svg
              key={i}
              width={px}
              height={px}
              viewBox="0 0 24 24"
              style={{ flex: "0 0 auto" }}
              aria-hidden
            >
              <path d={STAR_PATH} fill="#F59E0B" />
            </svg>
          ))}
        </Box>
      </Box>
      {showCount && typeof count === "number" && (
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", fontWeight: 500 }}
        >
          {rate.toFixed(1)} <Box component="span" sx={{ opacity: 0.6 }}>· {count}</Box>
        </Typography>
      )}
    </Box>
  );
}
