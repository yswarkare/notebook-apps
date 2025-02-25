import { createTheme, PaletteOptions } from '@mui/material';
import { defaultPallette } from '../theme';
import { typography } from '../typography';

const halloweenPalette: PaletteOptions = {
	...defaultPallette,
	primary: {
		main: '#ffc5e6',
		light: '#fce7f3',
		dark: '#c093ad',
		contrastText: '#161314',
	},
	secondary: {
		main: '#FFDC7F',
		light: '#ba68c8',
		dark: '#7b1fa2',
		contrastText: '#161106',
	},
	error: {
		main: '#E4003A',
		light: '#ef5350',
		dark: '#c62828',
		contrastText: '#ffd8d6',
	},
	warning: {
		main: '#FFB22C',
		light: '#ff9800',
		dark: '#e65100',
		contrastText: '#160c01',
	},
	info: {
		main: '#0F67B1',
		light: '#03a9f4',
		dark: '#01579b',
		contrastText: '#d1e0f1',
	},
	success: {
		main: '#399918',
		light: '#4caf50',
		dark: '#1b5e20',
		contrastText: '#010800',
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

export const halloween = createTheme({
	palette: halloweenPalette,
	typography
});
