import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  size?: "sm" | "md";
};

export default function Logo({ size = "md" }: Props) {
  const dim = size === "sm" ? 24 : 28;

  return (
    <Box
      component="a"
      href="/"
      aria-label="First Cart"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1.25,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        sx={{
          width: dim,
          height: dim,
          borderRadius: "8px",
          background:
            "linear-gradient(135deg, #5B5BD6 0%, #7B5BD6 50%, #8584E8 100%)",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.2) inset, 0 6px 14px -4px rgba(91,91,214,0.45)",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: "-0.02em",
        }}
      >
        F
      </Box>
      <Typography
        component="span"
        sx={{
          fontWeight: 700,
          fontSize: size === "sm" ? "0.95rem" : "1.05rem",
          letterSpacing: "-0.015em",
          color: "secondary.main",
        }}
      >
        First Cart
      </Typography>
    </Box>
  );
}
