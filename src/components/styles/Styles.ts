import { createTheme, Theme } from "@mui/material";

const theme = createTheme({
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: `"Arial"`,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#e50613",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "0.9rem",
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#e50613",
      contrastText: "#202020",
    },
    background: {
      default: "#d7d7d7",
      paper: "#e9e9e9",
    },
    error: {
      main: "#f44336",
      contrastText: "#ffffff",
    },
    info: {
      main: "#2196f3",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          color: "#000000",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        style: {
          padding: 0,
        },
      },
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: 0,
          "&>:not(:first-of-type)": {
            marginLeft: 0,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        style: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;

export const adminQuizOverviewStyles = {
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    padding: (theme: Theme) => theme.spacing(3),
    "@media (max-width: 600px)": {},
  },
};

export const paperStyles = {
  backgroundColor: theme.palette.background.default,
  color: "#111",
  padding: theme.spacing(2),
  borderRadius: 0,
};

export const customBarStyles = {
  root: {
    border: (theme: Theme) => `1px solid ${theme.palette.divider}`,
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: 26,
    borderRadius: 2,
  },
  value: {
    position: "absolute",
    lineHeight: "24px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  bar: {
    height: "100%",
    "&.low": {
      backgroundColor: "#f44336",
    },
    "&.medium": {
      backgroundColor: "#ffaa00",
    },
    "&.high": {
      backgroundColor: "#088208a3",
    },
  },
};
