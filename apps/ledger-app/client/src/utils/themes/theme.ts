import { createTheme, PaletteOptions } from '@mui/material';

export const defaultPallette: PaletteOptions = {
	mode: 'light',
	common: {
		black: '#000',
		white: '#fff',
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
	divider: 'rgba(0, 0, 0, 0.12)',
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

export const defaultTheme = createTheme({
	palette: defaultPallette,
});
