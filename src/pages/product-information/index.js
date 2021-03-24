import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../../components/menu-admin';
import {reactLocalStorage} from 'reactjs-localstorage';
import {
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    TableContainer,
    Button
} from '@material-ui/core';
import {Edit, Delete } from '@material-ui/icons';

//importa css de styles
import {useStyles} from './styles';


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



export default function ProductInformation() {
  const classes = useStyles(); // css
  const [open, setOpen] = React.useState(true); // botao abre e fecha sidebar
  
  const [array, setArray] = useState(null); //array q recebe dados do storage

  //popula tabela
  const handlePopulate =  async () => {
    return new Promise((resolve, reject) => {
        const data = reactLocalStorage.get('list');
        if(data){
            resolve( JSON.parse(data) );
        }else{
            reject();
        }
    });
  };

  // primeiro loading da tela
  useEffect(() => {
    async function init(){
        const result = await handlePopulate(); 
        setArray(result);
    } init();
  },[])

    //fecha e abre coluna do dashboard
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{ background: '#990005' }}>
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
            Product Information
          </Typography>

          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <SettingsIcon />
            </Badge>
          </IconButton>

          <IconButton
            color="inherit">
            <Badge color="secondary">
              <AccountCircleIcon />
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
        <Container style={{padding:10}}>
         
         
         <h4>Lista de Produtos</h4>
         <TableContainer className={classes.TopTable}>
             <Table>
                 <TableHead style={{background: '#000'}}>
                     <TableRow>
                         <TableCell style={{color: '#fff'}}>Internal mame</TableCell>
                         <TableCell style={{color: '#fff'}}>Build name</TableCell>
                         <TableCell style={{color: '#fff'}}>Network</TableCell>
                         <TableCell style={{color: '#fff'}}>Platform</TableCell>
                         <TableCell style={{color: '#fff'}}>OS</TableCell>
                         <TableCell style={{color: '#fff'}}>Dimension</TableCell>
                         <TableCell style={{color: '#fff'}}>display & Tp</TableCell>
                         <TableCell style={{color: '#fff'}}>Rear Camera</TableCell>
                         <TableCell style={{color: '#fff'}}>Front Camera</TableCell>
                         <TableCell style={{color: '#fff'}}>Connectivity</TableCell>
                         <TableCell style={{color: '#fff'}}>Memory Storage</TableCell>
                         <TableCell style={{color: '#fff'}}>I/O</TableCell>
                         <TableCell style={{color: '#fff'}}>Sensor</TableCell>
                         <TableCell style={{color: '#fff'}}>Acoustics</TableCell>
                         <TableCell style={{color: '#fff'}}>Physical Key</TableCell>
                         <TableCell style={{color: '#fff'}}>Battery</TableCell>
                         <TableCell style={{color: '#fff'}}>Others</TableCell>
                         <TableCell style={{color: '#fff'}}>-</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {array && array.map(item => (
                         <TableRow key={item.key}>
                            <TableCell>{item.InternalName}</TableCell>
                            <TableCell>{item.buildName}</TableCell>
                            <TableCell>{item.network}</TableCell>
                            <TableCell>{item.platform}</TableCell>
                            <TableCell>{item.os}</TableCell>
                            <TableCell>{item.dimension}</TableCell>
                            <TableCell>{item.displayTp}</TableCell>
                            <TableCell>{item.rearCamera}</TableCell>
                            <TableCell>{item.frontCamera}</TableCell>
                            <TableCell>{item.connectivity}</TableCell>
                            <TableCell>{item.memory}</TableCell>
                            <TableCell>{item.io}</TableCell>
                            <TableCell>{item.sensor}</TableCell>
                            <TableCell>{item.acoustics}</TableCell>
                            <TableCell>{item.physicalKey}</TableCell>
                            <TableCell>{item.battery}</TableCell>
                            <TableCell>{item.others}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" onClick={() => {
                                    console.log(item)
                                }}>
                                    <AttachFileIcon size={ 30 }/>
                                </Button>
                            </TableCell>
                        </TableRow>
                     ))}
                 </TableBody>
             </Table>
         </TableContainer>

         
         
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

