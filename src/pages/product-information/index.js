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
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>  
         
         <h4>Lista de Produtos</h4>
         <TableContainer className={classes.TopTable}>
             <Table>
                 <TableHead style={{background: '#000'}}>
                     <TableRow>
                         <TableCell style={{color: '#fff'}}>Nome produto</TableCell>
                         <TableCell style={{color: '#fff'}}>Quantidade</TableCell>
                         <TableCell style={{color: '#fff'}}>Cliente</TableCell>
                         <TableCell style={{color: '#fff'}}>Ações</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {array && array.map(item => (
                         <TableRow key={item.key}>
                            <TableCell>{item.productName}</TableCell>
                            <TableCell>{item.intenalName}</TableCell>
                            <TableCell>{item.buildName}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" onClick={() => {}}>
                                    <Edit size={ 30 }/>
                                </Button>
                                <Button color="secondary" variant="contained" style={{marginLeft:4}} onClick={() => {}}>
                                    <Delete size={ 30 }/>
                                </Button>
                            </TableCell>
                        </TableRow>
                     ))}
                 </TableBody>
             </Table>
         </TableContainer>

         
         
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

