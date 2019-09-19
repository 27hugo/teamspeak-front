import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import QueueIcon from '@material-ui/icons/Queue';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ClientChannelsComponent from '../clients/ClientChannelsComponent';
import ChannelCreateComponent from '../channels/ChannelCreateComponent';
import UpdateClientComponent from '../clients/UpdateClientComponent';
import ChangePasswordComponent from '../clients/ChangePasswordComponent';
import FooterComponent from '../footer/FooterComponent';
import DashboardComponent from './DashboardComponent';

function AdminComponent(props){    
    const [selectedIndex, setSelectedIndex] = React.useState(1);


    useEffect( () => {
        if ( !localStorage.getItem('logueado') ) { 
            document.location.href='/';
            return null;
        }
    
    });
    const logout = () => {
        localStorage.clear();
        document.location.href='/';
      };
    function handleListItemClick(event, index) {
      setSelectedIndex(index);
    }
    return(
        <Grid style={{minHeight: "80vh"}} container>
            <Grid style={{backgroundColor: "#000020", color: "white", borderTop: "1px solid #333", borderBottom: "1px solid #333"}} item xs={6} md={2}>
                
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={event => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DashboardIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={event => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <QueueIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Crear canal" />
                </ListItem>
                
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={event => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <FormatListBulletedIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Revisar canales" />
                </ListItem>
                
                <ListItem
                    button
                    selected={selectedIndex === 4}
                    onClick={event => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <PersonIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Actualizar mis datos" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 5}
                    onClick={event => handleListItemClick(event, 5)}
                >
                    <ListItemIcon>
                        <VpnKeyIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Cambiar contraseña" />
                </ListItem>

                <ListItem
                    button
                    selected={selectedIndex === 6}
                    onClick={event => handleListItemClick(event, 6)}
                >
                    <ListItemIcon>
                        <ExitToAppIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText onClick={logout} primary="Cerrar sesión" />
                </ListItem>

                </List>
            </Grid>
            <Grid style={{backgroundColor: "#fff"}} item xs={6} md={10} >
                <div style={{ backgroundColor: "#fff", paddingTop: 15, paddingBottom: "90px", paddingLeft: 50, paddingRight: 50}}>
                {selectedIndex === 1 && (<DashboardComponent/>)}
                
                {selectedIndex === 2 && (
                    <Grid item xs={12} md={6} lg={3}>
                    <ChannelCreateComponent />
                    </Grid>
                )}
                
                {selectedIndex === 3 && (<ClientChannelsComponent/>)}
                
                {selectedIndex === 4 && (
                    <Grid item xs={12} md={8} lg={6}>
                    <UpdateClientComponent/>
                    </Grid>
                )}
                
                {selectedIndex === 5 && (
                    <Grid item xs={12} md={6} lg={3}>
                    <ChangePasswordComponent/>
                    </Grid>
                )}
                </div>
            </Grid>
            
        </Grid>
   
    );
}
export default AdminComponent;