import { createTheme } from "@mui/material/styles";

const ThemedContext = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#FD751B",
      dark: "#DB5702",
      light: "#FED4B9",
      contrastText: "#FBFBFB",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      defaultProps: {
        color: "secondary",
      },
    },
    MuiSnackbar: {
      defaultProps: {
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 6000,
      },
    },
  },
});

export { ThemedContext };
