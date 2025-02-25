import { Box, FormControl, FormLabel, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { setTheme } from '../../store/slices/themes';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  themes?: string[];
};

const ThemeSelector = ({ themes = ['light', 'dark', 'halloween', 'forest', 'cupcake'] }: Props) => {
  const selected = useSelector((state) => state.themes.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    //* Change the icons inside the button based on previous settings
    if ((localStorage.getItem('color-theme'))) {
      const theme = localStorage.getItem('color-theme');
      console.log(theme);
      if (theme || (!('color-theme' in localStorage) && window.matchMedia(`(prefers-color-scheme: ${theme})`).matches)) {
        if (theme) {
          dispatch(setTheme(theme));
          document.documentElement.setAttribute('data-theme', theme);
        }
      } else {
        dispatch(setTheme('dark'));
      }
    }
  }, []);

  const onChangeTheme = (theme = '') => {
    //* if set via local storage previously
    const prevTheme = localStorage.getItem('color-theme');
    if (prevTheme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('color-theme', theme);
      dispatch(setTheme(theme));
      //* if NOT set via local storage previously
    } else {
      const prevTheme = document.documentElement.getAttribute('data-theme');
      if (prevTheme) {
        localStorage.setItem('color-theme', prevTheme);
        dispatch(setTheme(prevTheme));
      } else {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('color-theme', theme);
        dispatch(setTheme(theme));
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <Select
          aria-labelledby="demo-theme-toggle"
          title="select-theme"
          name="theme-toggle"
          value={selected}
          onChange={(e) => onChangeTheme(e.target.value)}
        >
          {themes.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ThemeSelector;
