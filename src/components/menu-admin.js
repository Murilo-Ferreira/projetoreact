import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/dashboard" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button component="a" href="/integrations" >
      <ListItemIcon>
        <AddToHomeScreenIcon />
      </ListItemIcon>
      <ListItemText primary="Product Register" />
    </ListItem>

    <ListItem button component="a" href="/product-information" >
      <ListItemIcon>
        <MobileFriendlyIcon />
      </ListItemIcon>

      <ListItemText primary="Products Informations" />
    </ListItem>
    <ListItem button component="a" href="/test-cases" >
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Test Cases" />
    </ListItem>

    <ListItem button component="a" href="/test-plans">
      <ListItemIcon>
        <DynamicFeedIcon  />
      </ListItemIcon>
      <ListItemText primary="Test Plans" />
    </ListItem>
    
    <ListItem button component="a" href="/" >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="New Function" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Other New Function" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Another New Function" />
    </ListItem>
  </div>
);