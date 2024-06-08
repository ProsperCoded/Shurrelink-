import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import {} from "@mui/material/colors";
const colorPrimary = {
  main: "#7ecf4c",
  dark: "#39a749",
  light: "#89ff67",
};
const colorSecondary = {
  main: "#1895b1",
};
const colorNeutral = {
  light: "#fafafa",
  dark: "#231f20",
};
const fontPrimary = "Montserrat";
const fontSecondary = "Montserrat";
const known = 2;
const theme = createTheme({
  palette: {
    contrastThreshold: 5,
    primary: {
      main: colorPrimary.main,
      dark: colorPrimary.dark,
      light: colorPrimary.light,
      contrastText: colorNeutral.light,
    },
    secondary: {
      main: colorSecondary.main,
    },
    text: {
      primary: colorNeutral.dark,
      secondary: colorNeutral.light,
    },
    background: { default: colorNeutral.light },
  },
  typography: {
    fontFamily: fontPrimary,
    button: {
      fontFamily: fontSecondary,
    },
  },
});

export function ThemeConfig({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
