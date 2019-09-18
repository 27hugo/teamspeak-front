import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Link} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
      backgroundColor: "#00002F"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(3),
    flexGrow: 1,
  },
  links:{
      textDecoration: "none"
  }
}));

function NavbarComponent() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const admin = false;
  const open = Boolean(anchorEl);


  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
    console.log('handlemenu');
  }

  function handleClose() {
    setAnchorEl(null);
    console.log('handleclose');
  }

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
            OWC
          </Typography>


          
          {auth && (
            <div>
              Hola, Hugo
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
                <MenuItem onClick={handleClose}>
                    <Link className={classes.links} to={'/account/changepassword'}>Cambiar contraseña</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className={classes.links} to={'/account/update'}>Actualizar datos</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Cerrar Sesión
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavbarComponent;