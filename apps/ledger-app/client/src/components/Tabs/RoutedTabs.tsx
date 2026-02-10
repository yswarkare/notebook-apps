import { useEffect, useState } from "react";
import { useNavigate, useMatches } from "react-router-dom";
import { AppBar, Box, Tab, Tabs } from "@mui/material";

function a11yProps(id: string, index: number) {
  return {
    id: `${id}-tabs-${index}`,
    'aria-controls': `${id}-tabpanel-${index}`,
  };
}

type Props = {
  id: string;
  nestedLevel: number;
  tabs: Array<{ label: string, url: string }>
}

function RoutedTabs({ id, tabs, nestedLevel }: Props) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()
  const match = useMatches()

  useEffect(() => {
    if (match[nestedLevel]) {
      let index = 0;
      tabs.forEach((el, i) => {
        if (match[nestedLevel].pathname === el.url) {
          index = i
        }
      })
      setValue(index)
    }
  }, [tabs, nestedLevel, match])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(tabs[newValue].url)
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label={`${id}-tabs`}
        >
          {tabs.map(({ label }, index) => (
            <Tab label={label} {...a11yProps(id, index)} />
          ))}
        </Tabs>
      </AppBar>
    </Box>
  )
}

export default RoutedTabs