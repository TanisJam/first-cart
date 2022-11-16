import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    neutral: {
      main: string;
      light: string;
      dark: string;
    };
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#EDC42C",
      light: "#FFE482",
      dark: "#FFC900",
    },
    secondary: {
      main: "#2D2E32",
      light: "#5C6687",
      dark: "#000000",
    },
    neutral: {
      main: "#9C9C9C",
      light: "#CFCFCF",
      dark: "#7C7979",
    },
    info: {
      main: "#6564DB",
      light: "#A3A2F7",
      dark: "#3A39AE",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#FAFAFA",
          color: "#9C9C9C",
          fontWeight: 700,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          switch (ownerState.color) {
            case "primary":
              return {
                fontWeight: 700,
                borderRadius: 100,
              };
            case "secondary":
              return {
                fontWeight: 600,
                borderRadius: 100,
                borderWidth: ownerState.variant === "outlined" ? 2 : 0,
                "&:hover": {
                  borderWidth: ownerState.variant === "outlined" ? 2 : 0,
                },
              };
            default: {
              return {
                borderRadius: 100,
              };
            }
          }
        },
      },
    },
  },
});

// theme = createTheme(theme, {
//   palette: {
//     info: {
//       main: theme.palette.secondary.main,
//     },
//   },
// });

export default theme;
