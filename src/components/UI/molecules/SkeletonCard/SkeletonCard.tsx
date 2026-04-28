import Box from "@mui/material/Box";

/**
 * Loading placeholder that mirrors ProductCard's geometry exactly,
 * so the grid doesn't reflow when products arrive. Real shimmer (gradient + bg-position keyframe)
 * instead of MUI's pulse — feels closer to what Linear/Vercel use.
 */
export default function SkeletonCard() {
  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "#F4F4F5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Shimmer sx={{ aspectRatio: "1 / 1" }} />
      <Box sx={{ p: 2.25, display: "flex", flexDirection: "column", gap: 1 }}>
        <Shimmer sx={{ width: 60, height: 10 }} />
        <Shimmer sx={{ width: "85%", height: 14 }} />
        <Shimmer sx={{ width: "60%", height: 14 }} />
        <Shimmer sx={{ width: 90, height: 12, mt: 0.5 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
          <Shimmer sx={{ width: 64, height: 22 }} />
          <Shimmer sx={{ width: 96, height: 36, borderRadius: 999 }} />
        </Box>
      </Box>
    </Box>
  );
}

function Shimmer({ sx }: { sx?: object }) {
  return (
    <Box
      sx={{
        borderRadius: 1,
        background:
          "linear-gradient(90deg, #f4f4f5 0%, #fafaf9 50%, #f4f4f5 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.6s ease-in-out infinite",
        ...sx,
      }}
    />
  );
}
