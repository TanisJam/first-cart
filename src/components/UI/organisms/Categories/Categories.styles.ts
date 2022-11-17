export const sxAccordion = {
  "&.MuiPaper-root ": {
    marginTop: "0rem",
    color: "secondary.main",
  },
  "& .swiper-button-prev, .swiper-button-next  ": {
    "--swiper-navigation-size": "24px",
    "--swiper-theme-color": "secondary.light",
  },
};

export const sxAccordionSummary = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .MuiAccordionSummary-content": {
    margin: "8px 0 0 0",
    "&.Mui-expanded": {
      margin: "8px 0 0 0",
    },
  },
};
