import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CheckJsonTab from './CheckJsonTab';

type TabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Check a single JSON" {...a11yProps(0)} />
          <Tab disabled label="Check a file" {...a11yProps(1)} />
          <Tab disabled label="Check a Github repo" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CheckJsonTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>TODO</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>TODO</div>
      </TabPanel>
    </div>
  );
}
