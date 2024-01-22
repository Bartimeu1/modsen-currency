const lightTheme = {
  background: '#f5f5f5',
  border: '#030304',
  text: '#000',
  toggleButton: '#000',
  inputBg: '#fff',
  target: '#00CE2C',
  convertItem: '#F0F0F0',
  rateText: '#000',
  title: 'linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
} as const;

const darkTheme = {
  background: '#030304',
  border: '#474747',
  text: '#fff',
  toggleButton: '#fff',
  inputBg: '#1B2028',
  target: '#00CE2C',
  convertItem: '#202025',
  rateText: '#a7b2c3',
  title: 'linear-gradient(90deg, #00CE2C 0.18%, #AEDF23 49.3%, #A3DC00 99.88%)',
} as const;

const layoutValues = {
  fontSize: {
    xs3: '12px',
    xs2: '20px',
    xs1: '24px',
    sm: '25px',
    md: '26px',
    lg: '30px',
    xl1: '32px',
    xl2: '33px',
    xl3: '35px',
    xl4: '38px',
    xl5: '90px',
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
} as const;

const theme = {
  dark: {
    color: darkTheme,
    ...layoutValues,
  },
  light: {
    color: lightTheme,
    ...layoutValues,
  },
} as const;

export default theme;
