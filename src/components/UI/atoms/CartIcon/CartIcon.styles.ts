export const sxCartIcon = {
  backgroundColor: "secondary.main",
  color: "secondary.contrastText",
  borderRadius: "50%",
  padding: "0.5rem",
  width: "4rem",
  height: "4rem",
  "&:hover": {
    cursor: "pointer",
    color: "primary.light",
    transition: "transform 0.1s ease-in-out, color .5s ease-in-out",
    transform: "scale(1.05)",
  },
};

export const sxCartIconBadge = {
  "& span": {
    transform: "unset",
  },
};
