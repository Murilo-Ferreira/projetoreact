import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { mainListItems, secondaryListItems } from '../../components/menu-admin';
import {useHistory} from 'react-router-dom';
import {Button, TextField} from '@material-ui/core';

import { BoxForm, Row} from './styles';
import { ErrorSharp, Label, SettingsRemoteOutlined } from '@material-ui/icons';
import { useForm } from "react-hook-form";
import {reactLocalStorage} from 'reactjs-localstorage';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="">
        CIn
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const { register, handleSubmit, errors } = useForm();
  const [open, setOpen] = useState(true);
  const [name, setNome] = useState('');
  const [list, setList] = useState([]);
  const [listStorage, setListStorage] = useState([]);

  const history = useHistory();
  const classes = useStyles();
  

  useEffect(() => {
    (async () => {
      const result = JSON.parse(reactLocalStorage.get('list'));
      setListStorage([...listStorage, result]);
    })();
  },[])

  console.log(listStorage)

  const onSubmit = async (data) => {
    // ao clicar em enviar vem o objeto no data.
    setList([...list, data]);
    reactLocalStorage.setObject('list', list);
  }

  
  const handleDrawer = () => {
    setOpen(!open);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={() => {
            history.push('/');
          }} color="inherit">
            <Badge color="secondary">
              <SettingsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container style={{  margin: 0 }} spacing={75}>

          <Container>
              <BoxForm>  
                <form onSubmit={handleSubmit(onSubmit)}>                              
                  <h4 >Products Especifications</h4>
                  <hr style={{ marginBottom: 15 }}/>

                  <TextField
                  size="small"                  
                  inputRef={register({required: true})}
                  name="productName"
                  fullWidth
                  style={{  marginTop: 0 }}                  
                  label="Product Name"
                  variant='filled' />
                 
                  <TextField
                  size="small"
                  name="intenalName"
                  fullWidth
                  inputRef={register}
                  style={{  marginTop: 10 }}
                  label="Internal Name"
                  variant='filled' />   

                  <TextField
                  size="small"
                  name="buildName"
                  fullWidth
                  inputRef={register}
                  style={{  marginTop: 10 }}
                  label="Build Name"
                  variant='filled'/>  
                
                           

                <Row>
                  <Button type="submit" size="small" color="default" variant='contained' >Create</Button>                  
                </Row>
                </form> 
            </BoxForm>
          </Container>

          <Container>
            <table>
              <thead>
                <th>nome</th>
                <th>sobrenome</th>
                <th>apelido</th>
              </thead>
              <tbody>
                {listStorage.length && listStorage.map( value => (
                    <tbody>
                      <tr>
                        <td>{value.productName}</td>
                        <td>{value.intenalName}</td>
                        <td>{value.buildName}</td>
                      </tr>
                    </tbody>                  
                ))}
              </tbody>
            </table>
          </Container>

          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}