export const sxTotalContainer = {
  backgroundColor: "unset",
};

export const sxTotalPriceLabel = {
  width: 120,
  position: "relative",
  backgroundColor: "secondary.main",
  color: "secondary.contrastText",
  borderRadius: "1000px",
  fontSize: "1rem",
  padding: "5.5px 1.25rem",
};

export const sxDiscount = (top?: boolean) => ({
  backgroundColor: "info.main",
  color: "info.contrastText",
  borderRadius: top ? "8px 8px 0px 0px" : "0px 0px 8px 8px",
  fontSize: ".85rem",
  fontWeight: "normal",
  lineHeight: "1rem",
  height: "unset",
  "& span": {
    padding: "0 .5rem",
  },
  position: "absolute",
  top: top ? "-1rem" : "unset",
  bottom: top ? "unset" : "-1rem",
  left: "50%",
  transform: "translateX(-50%)",
});
