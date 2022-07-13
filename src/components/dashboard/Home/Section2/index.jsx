import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AllCrypto from './allCrypto';
import AllGiftCards from './allGiftCards';
import '../../../../assets/css/dashboardhome.module.css'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SectionTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}} className="transactionTab" >
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="All Crypto" {...a11yProps(0)} style={{ margin:'40px 40px 10px', }} />
          <Tab label="All Gift Cards" {...a11yProps(1)} style={{margin:'40px 40px 10px', }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <AllCrypto />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllGiftCards/>
      </TabPanel>
      
    </Box>
  );
}
