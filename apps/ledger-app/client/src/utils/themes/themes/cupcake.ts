import { createTheme, PaletteOptions } from '@mui/material';
import { typography } from '../typography';

const cupcakePallette: PaletteOptions = {
  mode: 'light',
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#1c19fd',
    light: '#4b48fd',
    dark: '#0400ff',
    contrastText: '#c6dbff',
  },
  secondary: {
    main: '#007b6f',
    light: '#088b80',
    dark: '#025e56',
    contrastText: '#d3e4e1',
  },
  error: {
    main: '#ff5085',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#160206',
  },
  warning: {
    main: '#ffb800',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#160c00',
  },
  info: {
    main: '#00e1ff',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#001216',
  },
  success: {
    main: '#28ff37',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#011601',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#e7d6e7',
    default: '#fce3fc',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.04)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const cupcakeTheme = createTheme({
  palette: cupcakePallette,
  typography
});

