export interface IThemeSliceState {
  currentTheme: 'dark' | 'light';
}

type ColorPalette = {
  white: string;
  grey: string;
  mainTitle: string;
  target: string;
  mapMarkerTitle: string;
  toastBg: string;
  error: string;
  loaderBg: string;
};

type ThemeColors = {
  background: string;
  primary: string;
  border: string;
  toggleButton: string;
  inputBg: string;
  convertItem: string;
  rateText: string;
  bannerBg: string;
};

type FontFamily = {
  main: string;
  secondary: string;
};

type FontSize = {
  xs6: string;
  xs5: string;
  xs4: string;
  xs3: string;
  xs2: string;
  xs1: string;
  sm: string;
  md: string;
  lg: string;
  xl1: string;
  xl2: string;
  xl3: string;
  xl4: string;
  xl5: string;
  xl6: string;
};

type FontWeight = {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
};

type BorderRadius = {
  small: string;
  medium: string;
  large: string;
  circle: string;
};

type Spaces = {
  xs3: string;
  xs2: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

type Breakpoints = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tabletS: string;
  tabletL: string;
  laptopS: string;
  laptopM: string;
  desktopM: string;
  desktopXL: string;
};

type LayoutValues = {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  borderRadius: BorderRadius;
  spaces: Spaces;
  breakpoints: Breakpoints;
};

export type ThemeTypes = {
  dark: {
    color: ColorPalette & ThemeColors;
  } & LayoutValues;
  light: {
    color: ColorPalette & ThemeColors;
  } & LayoutValues;
};
