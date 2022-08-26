import { useState } from 'react';
import { Box, Tabs, Tab, Button } from '@mui/material';
import { SaveAlt, Delete } from '@mui/icons-material';

import GeneralForm from './form/GeneralForm';
import Table from '../../list-views/data-table/Table';

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
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="History" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <GeneralForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            my: 3,
          }}
        >
          <Button variant="contained" startIcon={<SaveAlt />}>
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            sx={{ mx: 2 }}
          >
            Delete
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Table />
      </TabPanel>
    </Box>
  );
}
