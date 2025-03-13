import { createTheme, PaletteOptions } from '@mui/material';
import { createTypographyWithColors } from './typography';
import { darkTextColors } from './colors';

const toastifyPalette: PaletteOptions = {
	mode: 'dark',
	common: {
    black: '#000',
    white: '#fff',
  },
	primary: {
		main: '#ba68c8',
		light: '#ce93d8',
		dark: '#ab47bc',
		contrastText: '#161314',
	},
	secondary: {
		main: '#10e6d0',
		light: '#2fe0cf',
		dark: '#03b488',
		contrastText: '#161106',
	},
	error: {
		main: '#e74c3c',
		light: '#ef5350',
		dark: '#c62828',
		contrastText: '#ffd8d6',
	},
	warning: {
		main: '#f1c40f',
		light: '#ff9800',
		dark: '#e65100',
		contrastText: '#160c01',
	},
	info: {
		main: '#3498db',
		light: '#03a9f4',
		dark: '#01579b',
		contrastText: '#d1e0f1',
	},
	success: {
		main: '#07bc0c',
		light: '#4caf50',
		dark: '#1b5e20',
		contrastText: '#010800',
	},
	grey: {
		50: "#eceff1",
		100: "#cfd8dc",
		200: "#b0bec5",
		300: "#90a4ae",
		400: "#78909c",
		500: "#607d8b",
		600: "#546e7a",
		700: "#455a64",
		800: "#37474f",
		900: "#263238",
		A100: '#cfd8dc',
		A200: '#b0bec5',
		A400: '#78909c',
		A700: '#455a64',
	},
	text: {
		primary: '#b3b3b3',
		secondary: '#b2b2b2',
		disabled: '#c9c9c9',
	},
	divider: 'rgba(0, 0, 0, 0.12)',
	background: {
		paper: '#1E201E',
		default: '#191a19',
	},
	action: {
		active: '#fff',
		hover: 'rgba(255, 255, 255, 0.08)',
		hoverOpacity: 0.08,
		selected: 'rgba(255, 255, 255, 0.16)',
		selectedOpacity: 0.16,
		disabled: 'rgba(255, 255, 255, 0.3)',
		disabledBackground: 'rgba(255, 255, 255, 0.12)',
		disabledOpacity: 0.38,
		focus: 'rgba(255, 255, 255, 0.12)',
		focusOpacity: 0.12,
		activatedOpacity: 0.24,
	},
};

export const toastifyTheme = createTheme({
	palette: toastifyPalette,
	typography: createTypographyWithColors(darkTextColors),
});
