import { createTheme } from "@mui/material/styles";
import { CurrencyType } from "./types";

import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
      // secondary: colorNeutral.light,
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
const materialTheme = materialExtendTheme(theme);

export function ThemeConfig({ children }: { children: React.ReactNode }) {
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        {children}
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
export const acceptedCurrencies: { [key: string]: CurrencyType }[] = [
  { NGN: "₦" },
  { USD: "$" },
  { EUR: "€" },
];
export const IS_DESKTOP_AND_ABOVE = window.innerWidth >= 1200;
export const IS_EXTRA_LARGE_AND_ABOVE = window.innerWidth >= 1600;
export const IS_MOBILE_SMALL = window.innerWidth < 400;
export const IS_MOBILE_LARGE = window.innerWidth < 600;
export const IS_IPAD_AND_ABOVE = window.innerWidth >= 600;
