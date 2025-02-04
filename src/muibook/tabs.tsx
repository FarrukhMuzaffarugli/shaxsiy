import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DescriptionComponent from '../components/shoppapka/Description';
import { TDorilar } from '../mock/Tdorilar';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

interface BasicTabsProps {
  product: TDorilar; 
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ product }: BasicTabsProps) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '1440px', marginTop: "100px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFF',
          color: 'var(--Secondary-50, #80B4FF)',
          fontFamily: 'Jost',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '28px', // 140%
          letterSpacing: '0.03px',
          textTransform: 'uppercase',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label="Description"
            {...a11yProps(0)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#8DC8FF',
                color: 'white',
              },
            }}
          />
          <Tab
            label="additional information"
            {...a11yProps(1)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#8DC8FF',
                color: 'white',
              },
            }}
          />
          <Tab
            label={`Reviews (${product.reviews.length})`}
            {...a11yProps(2)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#8DC8FF',
                color: 'white',
              },
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <DescriptionComponent product={product} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </Box>
  );
}

