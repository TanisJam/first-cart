export const sxCardsBox = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, minmax(0, 1fr))",
    sm: "repeat(2, minmax(0, 1fr))",
    md: "repeat(3, minmax(0, 1fr))",
    lg: "repeat(4, minmax(0, 1fr))",
  },
  gap: { xs: 2, sm: 3 },
  alignItems: "stretch",
};
