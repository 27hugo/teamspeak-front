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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

const channelsService = new ChannelsService();
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
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
  }));

function ClientChannelsComponent(props){
    
    const classes = useStyles();
    const [canales, setCanales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteError, setDeleteError] = useState({
        state: false,
        error: ''
    });
  
    useEffect( () => {     
            if( localStorage.getItem('logueado') ){
                channelsService.getChannelsByCliId( JSON.parse(localStorage.getItem('user')).id )
                .then( canales => {
                    setCanales(canales.data.data);
                    setLoading(false);
                });
            }
    }, []);
    
    if ( !localStorage.getItem('logueado') ) { 
        props.history.push('/login');
        return null;
    }
    const deleteChannel = async (can_id, index) => {
        var resp = await channelsService.deleteChannel(can_id);
        if(resp.status === 'OK'){
            canales.splice(index, 1);
            setCanales([...canales]);
        }
        if(resp.status === 'ERROR' || resp.status === 'FATAL'){
            setDeleteError({state:true, error: resp.error});
        }
    }

    if( loading ){
        return(
            <div>
                <Grid item md={3}>
                    <Typography variant="h6" className={classes.title}>
                        Canales cliente {JSON.parse(localStorage.getItem('user')).email}
                    </Typography>
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                            <CircularProgress className={classes.progress} />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </div>
        );
    }else{
        return(
            <div>
                <Grid item md={3}>
                <Typography variant="h6" className={classes.title}>
                    Canales cliente {JSON.parse(localStorage.getItem('user')).email}
                </Typography>
                <div className={classes.demo}>
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
                            secondary={canal.can_creacion}
                        />
                        <ListItemSecondaryAction>
                        <IconButton onClick={() => deleteChannel(canal.can_id, index)} edge="end">
                            <DeleteIcon  />
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>    
                )):
                    <div className={classes.demo}>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="No has creado ningún canal aún"
                            />
                        </ListItem>
                    </List>
                    </div>
                }
                </List>
                {deleteError.state?
                <div className={classes.demo}>
                <List>
                    <ListItem>
                        <Avatar>
                            <FolderIcon />
                        </Avatar>
                        <ListItemText
                            primary={deleteError.error}
                        />
                    </ListItem>
                </List>
                </div>
                :null}
                </div>
                </Grid>
            </div>
        );
    }
}

export default ClientChannelsComponent;