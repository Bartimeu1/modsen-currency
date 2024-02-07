import { ThemeTypes } from '@root/types/theme';

const commonColors = {
  white: '#fff',
  grey: '#898989',
  mainTitle:
    'linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
  target: '#00CE2C',
  mapMarkerTitle: '#333',
  toastBg: '#34a853',
  error: '#ff0000',
  loaderBg: 'rgba(255, 255, 255, 0.1)',
};

const lightThemeColors = {
  background: '#f5f5f5',
  primary: '#000',
  border: '#030304',
  toggleButton: '#000',
  inputBg: '#fff',
  convertItem: '#F0F0F0',
  rateText: '#000',
  bannerBg:
    'radial-gradient(circle at -1% 57.5%, rgb(19, 170, 82) 0%, rgb(0, 102, 43) 90%)',
};

const darkThemeColors = {
  background: '#030304',
  primary: '#fff',
  border: '#474747',
  toggleButton: '#fff',
  inputBg: '#1B2028',
  convertItem: '#202025',
  rateText: '#a7b2c3',
  bannerBg:
    'linear-gradient( 241deg, rgba(22, 39, 31, 0.79) 61%, rgba(18, 18, 18, 1) 77% )',
};

const layoutValues = {
  fontFamily: {
    main: 'Poppins, sans-serif',
    secondary: 'Inter, sans-serif',
  },
  fontSize: {
    xs6: '12px',
    xs5: '14px',
    xs4: '16px',
    xs3: '18px',
    xs2: '20px',
    xs1: '24px',
    sm: '25px',
    md: '26px',
    lg: '30px',
    xl1: '32px',
    xl2: '33px',
    xl3: '35px',
    xl4: '38px',
    xl5: '43px',
    xl6: '76px',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  borderRadius: {
    small: '8px',
    medium: '15px',
    large: '30px',
    circle: '50%',
  },
  spaces: {
    xs3: '4px',
    xs2: '8px',
    xs: '16px',
    sm: '24px',
    md: '31px',
    lg: '56px',
  },
  breakpoints: {
    mobileS: '355px',
    mobileM: '420px',
    mobileL: '450px',
    tabletS: '500px',
    tabletL: '670px',
    laptopS: '740px',
    laptopM: '840px',
    desktopM: '920px',
    desktopXL: '1150px',
  },
};

const theme: ThemeTypes = {
  dark: {
    color: { ...commonColors, ...darkThemeColors },
    ...layoutValues,
  },
  light: {
    color: { ...commonColors, ...lightThemeColors },
    ...layoutValues,
  },
};

export default theme;

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';
