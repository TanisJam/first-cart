import { createTheme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    neutral: { main: string; light: string; dark: string; contrastText: string };
    surface: { main: string; raised: string; sunken: string };
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  interface TypeBackground {
    subtle: string;
  }

  interface Theme {
    customShadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      ring: string;
      ringStrong: string;
    };
  }
  interface ThemeOptions {
    customShadows?: Theme["customShadows"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const indigo = {
  main: "#5B5BD6",
  light: "#8584E8",
  dark: "#4747B8",
  contrastText: "#FFFFFF",
};

const ink = {
  main: "#18181B",
  light: "#3F3F46",
  dark: "#09090B",
  contrastText: "#FFFFFF",
};

const slate = {
  main: "#71717A",
  light: "#E4E4E7",
  dark: "#52525B",
  contrastText: "#FFFFFF",
};

const customShadows = {
  xs: "0 1px 2px 0 rgba(15, 15, 30, 0.04)",
  sm: "0 1px 3px 0 rgba(15, 15, 30, 0.06), 0 1px 2px -1px rgba(15, 15, 30, 0.04)",
  md: "0 4px 12px -2px rgba(15, 15, 30, 0.06), 0 2px 4px -2px rgba(15, 15, 30, 0.04)",
  lg: "0 12px 28px -8px rgba(15, 15, 30, 0.10), 0 4px 8px -4px rgba(15, 15, 30, 0.06)",
  xl: "0 24px 48px -16px rgba(15, 15, 30, 0.18), 0 8px 16px -8px rgba(15, 15, 30, 0.08)",
  ring: `0 0 0 4px ${alpha(indigo.main, 0.12)}`,
  ringStrong: `0 0 0 4px ${alpha(indigo.main, 0.24)}`,
};

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: ink,
    neutral: slate,
    surface: {
      main: "#FFFFFF",
      raised: "#FFFFFF",
      sunken: "#FAFAF9",
    },
    info: { main: "#5B5BD6", light: "#8584E8", dark: "#4747B8", contrastText: "#fff" },
    success: { main: "#10B981", light: "#34D399", dark: "#059669", contrastText: "#fff" },
    warning: { main: "#F59E0B", light: "#FBBF24", dark: "#D97706", contrastText: "#1c1917" },
    error: { main: "#EF4444", light: "#F87171", dark: "#DC2626", contrastText: "#fff" },
    background: { default: "#FAFAF9", paper: "#FFFFFF", subtle: "#F4F4F5" },
    text: { primary: "#18181B", secondary: "#71717A", disabled: "#A1A1AA" },
    divider: "#E4E4E7",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontWeight: 700, fontSize: "3.5rem", letterSpacing: "-0.03em", lineHeight: 1.05 },
    h2: { fontWeight: 700, fontSize: "2.5rem", letterSpacing: "-0.025em", lineHeight: 1.1 },
    h3: { fontWeight: 600, fontSize: "1.875rem", letterSpacing: "-0.02em", lineHeight: 1.2 },
    h4: { fontWeight: 600, fontSize: "1.5rem", letterSpacing: "-0.015em", lineHeight: 1.25 },
    h5: { fontWeight: 600, fontSize: "1.25rem", letterSpacing: "-0.01em", lineHeight: 1.3 },
    h6: { fontWeight: 600, fontSize: "1.0625rem", letterSpacing: "-0.005em", lineHeight: 1.35 },
    subtitle1: { fontWeight: 500, fontSize: "1rem", lineHeight: 1.5 },
    subtitle2: { fontWeight: 500, fontSize: "0.875rem", lineHeight: 1.5 },
    body1: { fontSize: "0.9375rem", lineHeight: 1.55 },
    body2: { fontSize: "0.875rem", lineHeight: 1.55 },
    button: { fontWeight: 600, letterSpacing: "0", textTransform: "none" },
    caption: { fontSize: "0.75rem", lineHeight: 1.4, letterSpacing: "0.01em" },
    overline: {
      fontSize: "0.6875rem",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1.2,
    },
  },
  customShadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha("#FFFFFF", 0.8),
          backdropFilter: "saturate(180%) blur(12px)",
          WebkitBackdropFilter: "saturate(180%) blur(12px)",
          color: ink.main,
          boxShadow: "none",
          borderBottom: "1px solid #E4E4E7",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: false },
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          textTransform: "none",
          padding: "0.5rem 1rem",
          transition:
            "background-color 160ms ease, transform 120ms ease, box-shadow 160ms ease, color 160ms ease",
          "&:active": { transform: "translateY(1px)" },
        },
        sizeLarge: { padding: "0.75rem 1.25rem", fontSize: "0.9375rem" },
        containedPrimary: {
          backgroundColor: indigo.main,
          color: "#fff",
          boxShadow: `0 1px 0 0 ${alpha("#000", 0.04)}, inset 0 1px 0 0 ${alpha("#fff", 0.12)}`,
          "&:hover": { backgroundColor: indigo.dark },
        },
        containedSecondary: {
          backgroundColor: ink.main,
          color: "#fff",
          "&:hover": { backgroundColor: ink.dark },
        },
        outlined: {
          borderColor: "#E4E4E7",
          color: ink.main,
          backgroundColor: "#FFFFFF",
          "&:hover": {
            borderColor: "#D4D4D8",
            backgroundColor: "#FAFAF9",
          },
        },
        textPrimary: {
          color: ink.main,
          "&:hover": { backgroundColor: alpha(ink.main, 0.04) },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: "background-color 160ms ease, color 160ms ease, transform 120ms ease",
          "&:hover": { backgroundColor: alpha(ink.main, 0.04) },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
          fontSize: "0.75rem",
          height: 24,
        },
        outlined: {
          borderColor: "#E4E4E7",
          backgroundColor: "#FFFFFF",
          color: ink.main,
        },
        filledPrimary: {
          backgroundColor: alpha(indigo.main, 0.10),
          color: indigo.dark,
          fontWeight: 600,
        },
        filledSuccess: {
          backgroundColor: alpha("#10B981", 0.10),
          color: "#047857",
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
        rounded: { borderRadius: 12 },
        elevation1: { boxShadow: customShadows.sm },
        elevation2: { boxShadow: customShadows.md },
        elevation3: { boxShadow: customShadows.lg },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: "#FFFFFF",
          border: "1px solid #F4F4F5",
          boxShadow: customShadows.xs,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: ink.main,
          color: "#fff",
          fontSize: "0.75rem",
          fontWeight: 500,
          padding: "6px 10px",
          borderRadius: 8,
        },
        arrow: { color: ink.main },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { fontSize: "0.9375rem" },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(ink.dark, 0.45),
          backdropFilter: "blur(2px)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
          borderLeft: "1px solid #E4E4E7",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          boxShadow: customShadows.xl,
        },
      },
    },
  },
});

export default theme;
