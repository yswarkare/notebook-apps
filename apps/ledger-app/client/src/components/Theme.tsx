import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useColorScheme } from '@mui/material/styles';
import { MenuItem, Select } from '@mui/material';

export default function ThemeSelector() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        display: 'flex',
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
          name="theme-toggle"
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as 'system' | 'light' | 'dark')
          }
        >
          <MenuItem value={"system"}>System</MenuItem>
          <MenuItem value={"light"}>Light</MenuItem>
          <MenuItem value={"dark"}>Dark</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
