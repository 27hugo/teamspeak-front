﻿import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import LoginModalComponent from '../login/LoginModalComponent';
import './NavbarComponent.css';
import logo from '../../assets/images/logo.png';
import AuthenticationService from '../../services/AuthenticationService';
const authenticationService = new AuthenticationService();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: 180,
    height: 50
  },
  appbar:{
      backgroundColor: "#00002F"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links:{
    color: "#000",
      textDecoration: "none"
  }
}));

function NavbarComponent(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(localStorage.getItem('token'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const admin = false;
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const logout = () => {
    setAnchorEl(null);
    setAuth(false);
    authenticationService.logout();
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          { admin ? (
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          ): null}
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.links} style={{color:"white"}} to={'/'}>
              <img className={classes.logo} alt="logo" src={logo} />
            </Link>
          </Typography>


          
          {auth ? (
            <div>
              Hola, {authenticationService.getUser().alias ? authenticationService.getUser().alias : authenticationService.getUser().nombre}
              <IconButton
                onClick={handleMenu}
                color="inherit"
              >
    
              <Avatar alt="account-avatar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/61/6168121087e36a7563a45ecfa3adf87823579968_full.jpg"/>
              
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                
                    <Link className={classes.links} to={'/admin'}><MenuItem onClick={handleClose}>Mis canales </MenuItem></Link>
                    <Link className={classes.links} onClick={logout} to={'/'}><MenuItem onClick={logout}>Cerrar Sesión</MenuItem></Link>
                
              </Menu>
            </div>
          ) : (
            <LoginModalComponent/>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarComponent;