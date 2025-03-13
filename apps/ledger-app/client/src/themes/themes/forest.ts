import { createTheme, PaletteOptions } from '@mui/material';
import { createTypographyWithColors } from './typography';
import { lightTextColors } from './colors';

const forestPalette: PaletteOptions = {
	mode: 'light',
	common: {
		black: '#000',
		white: '#fff',
	},
	primary: {
		main: '#4a00ff',
		light: '#42a5f5',
		dark: '#1565c0',
		contrastText: '#d2daff',
	},
	secondary: {
		main: '#a3b900',
		light: '#ba68c8',
		dark: '#7b1fa2',
		contrastText: '#0a0d00',
	},
	error: {
		main: '#ec5165',
		light: '#ef5350',
		dark: '#c62828',
		contrastText: '#130203',
	},
	warning: {
		main: '#ffa100',
		light: '#ff9800',
		dark: '#e65100',
		contrastText: '#160900',
	},
	info: {
		main: '#00ecff',
		light: '#03a9f4',
		dark: '#01579b',
		contrastText: '#001316',
	},
	success: {
		main: '#00ffd4',
		light: '#4caf50',
		dark: '#1b5e20',
		contrastText: '#001610',
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
		paper: '#c5dede',
		default: '#e3ffff',
	},
	action: {
		active: 'rgba(0, 0, 0, 0.54)',
		hover: 'rgba(0, 0, 0, 0.04)',
		hoverOpacity: 0.04,
		selected: 'rgba(0, 0, 0, 0.08)',
		selectedOpacity: 0.08,
		disabled: 'rgba(0, 0, 0, 0.26)',
		disabledBackground: 'rgba(0, 0, 0, 0.12)',
		disabledOpacity: 0.38,
		focus: 'rgba(0, 0, 0, 0.12)',
		focusOpacity: 0.12,
		activatedOpacity: 0.12,
	},
};

export const lightGreenTheme = createTheme({
	palette: forestPalette,
	typography: createTypographyWithColors(lightTextColors)
});
