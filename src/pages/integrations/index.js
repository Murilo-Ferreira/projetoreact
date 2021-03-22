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
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { mainListItems, secondaryListItems } from '../../components/menu-admin';
import {useStyles} from '../product-information/styles'
import {Button, TextField } from '@material-ui/core';
import { useForm } from "react-hook-form";
import {reactLocalStorage} from 'reactjs-localstorage';
import {useHistory} from 'react-router-dom';
import {v4 as uuid} from 'uuid'



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



export default function Integrations() {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [array, setArray] = useState([]);
  const history = useHistory();


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
  },[]);


// //insere dentro do storage
  useEffect(() => {
    console.log(array, '2');
    if(array.length > 0){
      reactLocalStorage.setObject('list', array);
    }  

  },[array]);  

  //recebe o dado do form e anexa ao array de objetos
  const onSubmit = (data) => {
    data.key = uuid();
    setArray([...array, data]);

    setTimeout(() => {
        console.log("gravado com sucesso!")
    }, 3000);
    //pagina o form
    history.push('/product-information');
}

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
            Integrations
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

          <h4>Registro</h4>
          <hr/>

          <Container style={{margin:'30px 0px'}}>
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
            
                <Button type="submit" size="small" style={{  marginTop: 10 }} color="default" variant='contained' >Create</Button>                  
           
            </form> 
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
