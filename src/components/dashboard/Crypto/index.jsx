import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BuyCrypto from './BuyCrypto';



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

export default function CryptoTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  style={{width:'50%',borderRadius:'12px', background:'',  marginTop:'20px', border:'10px solid #21242d', height:'450px'}} >
      <Box  style={{background:'#21242d'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="Buy" {...a11yProps(0)} />
          <Tab label="Sell" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <BuyCrypto/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      
    </Box>
  );
}
