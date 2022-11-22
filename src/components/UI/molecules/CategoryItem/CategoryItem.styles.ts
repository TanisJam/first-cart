export const sxCategoryContainer = (active?: boolean) => ({
  with: "150px",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: ".25rem",
  marginBottom: ".5rem",
  gap: 0.5,
  useSelect: "none",
  filter: "opacity(0.6) grayscale(.6)",
  transition: "filter 0.3s ease-out, transform 0.1s ease-in-out",
  ...(active && {
    filter: "opacity(1) grayscale(0)",
    "& .MuiCardMedia-root": {
      borderWidth: "2px",
      borderColor: "info.main",
    },
  }),
});

export const sxCategoryImage = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  objectFit: "contain",
  backgroundColor: "white",
  border: "1px solid",
  borderColor: "secondary.main",
};

export const sxCategoryName = {
  fontSize: "13px",
  fontWeight: 600,
  textAlign: "center",
  whiteSpace: "nowrap",
};
