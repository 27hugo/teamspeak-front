import React, { useState, useEffect } from 'react';
import ChannelsService from '../../services/ChannelsService';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import LoadingComponent from '../loading/LoadingComponent';
import AuthenticationService from '../../services/AuthenticationService';
import Tooltip from '@material-ui/core/Tooltip';

const authenticationService = new AuthenticationService();
const channelsService = new ChannelsService();
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      //padding: 15
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(2, 2, 0),
    },
    progress: {
        margin: theme.spacing(2),
      },
      typography: {
        padding: theme.spacing(2),
      }
  }));


  

function ClientChannelsComponent(props){
    
    const classes = useStyles();
    const [canales, setCanales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState({state: false, index: null});
    const [deleteError, setDeleteError] = useState({
        state: false,
        error: ''
    });
  
    useEffect( () => {   
        console.log(authenticationService.isLogged());
        if(authenticationService.isLogged()){  
                channelsService.getChannelsByCliId( authenticationService.getUserId() )
                .then( canales => {
                    setCanales(canales.data.data);
                    setLoading(false);
                });
        }else{
            setLoading(false);
        }
    }, []);
    
    const deleteChannel = async (can_id, index) => {
        setSubmitting(true);
        var resp = await channelsService.deleteChannel(can_id);
        if(resp.status === 'OK'){
            canales.splice(index, 1);
            setCanales([...canales]);
        }
        if(resp.status === 'ERROR' || resp.status === 'FATAL'){
            setDeleteError({state:true, error: resp.error});
        }
        setSubmitting(false);
    }

    

    return(
        <div className={classes.root}>
            {loading ? <LoadingComponent/> : (
            <List>
            {canales.length > 0 ?canales.map( (canal, index) => (       
                <ListItem key={canal.can_id}>
                    <ListItemAvatar>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={canal.can_nombre}
                        secondary={'Contraseña: '+canal.can_contrasena}
                    />
                    <ListItemSecondaryAction>
                         <Tooltip title="Eliminar">
                         <IconButton disabled={submitting.state && submitting.index === index ? true : false} onClick={() => {deleteChannel(canal.can_id, index); setSubmitting({state: true, index: index})}} edge="end">
                        { submitting.state && submitting.index === index ? <CircularProgress /> : <DeleteIcon />}
                    </IconButton>
                    </Tooltip>               
                    </ListItemSecondaryAction>
                </ListItem>    
            )):
                <List>
                    <ListItem>
                        <ListItemText
                            
                            primary="No has creado ningún canal aún"
                        />
                    </ListItem>
                </List>
            }
            </List>
            )}
            {deleteError.state?
            <div className={classes.demo}>
            <List>
                <ListItem>

                    <ListItemText
                        primary={deleteError.error}
                    />
                </ListItem>
            </List>
            </div>
            :null}
            
        </div>
    );
    
}

export default ClientChannelsComponent;