export const sxSkeletonCard = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: 345,
  minWidth: 256,
  height: 540,
  textAlign: "center",
  backgroundColor: "background.paper",
};

export const sxSkeletonImage = {
  height: 220,
  p: 2,
};

export const sxSkeletonMain = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "2rem 0 auto 0",
  "& span": {
    height: "1.5rem",
    width: "80%",
  },
};

export const sxSkeletonFooter = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  width: "90%",
  marginInline: "auto",
  padding: "1rem",
  gap: "1rem",
  "& span": {
    height: "36px",
    borderRadius: "1.5rem",
    marginInline: ".5rem",
    transform: "unset",
  },
  "& span:last-of-type": {
    marginTop: ".5rem",
    gridColumn: "1 / 3",
  },
};
