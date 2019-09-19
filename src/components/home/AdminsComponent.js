import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SteamService from '../../services/SteamService';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
const useStyles = makeStyles(theme => ({
    section:{
        paddingTop: 20,
        paddingBottom: 20
    },
    card: {
        margin: theme.spacing(4),
        maxWidth: 345,
    },
    media: { 
        width: "90%",
        borderRadius: "100%"
    },
    cardContent: {
        textAlign: "center"
    }
}));
const adminsIDs = ['76561198057941343','76561198210474587','76561198356392862'];
const steamService = new SteamService();    
function AdminsComponent(){
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [admins, setAdmins] = useState([]);


    useEffect( () => {
        adminsIDs.forEach(adminID => {
            steamService.getProfile(adminID)
            .then(resp => {
                resp = resp.data;
                if(resp.status === 'OK'){
                    const admin = resp.data;
                    setAdmins(admins => [...admins, admin]);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                console.log(err);
            });
        });
       
    }, []);


    return(
            <Grid className={classes.section} item xs={11} md={7}>
                    
                    <h3><b>Administradores / Soporte</b></h3>
                    <p>Puedes contactarte con nosotros directamente desde steam ante cualquier problema clickeando los perfiles.</p>
                    
                    <Grid container justify="center">
                        {( isLoading ? Array.from(new Array(3)) : admins).map( (admin, i) => (
                            <Grid key={i} item xs={6} sm={6} md={4}>
                                <div className={classes.card}>
                                        <CardMedia style={{justifyContent:"center",justifyItems:"center", justifySelf:"center" ,textAlign:"center"}}>
                                       {admin ? (
                                        <img alt={i} className={classes.media} src={admin.avatarFull}/>
                                        
                                        ) : (
                                            <Skeleton width="100%" height={100} />
                                        )}
                                        </CardMedia>
                                        <CardContent className={classes.cardContent} >
                                        {admin ? (
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {admin.steamID}
                                        </Typography>
                                        ) : (
                                            <Skeleton width="100%" component="h2"/>
                                        )}
                                        
                                        {admin ? (
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {admin.stateMessage}<br/>
                                            {admin.location ? admin.location : 'No registra ciudad'}
                                        </Typography>
                                        ) : (
                                            <Skeleton width="60%"/>
                                        )}
                                        </CardContent>
                                    
                                    {!isLoading ? (
                                    <CardActions style={{justifyContent: "center"}}>
                                        <Button href={'http://steamcommunity.com/profiles/'+admin.steamID64} size="small" color="primary">
                                        Ver Perfil
                                        </Button>
                                    </CardActions>
                                    ):null}
                                </div>
                            </Grid>
                        ))}
                    </Grid>
            </Grid>
    );
}

export default AdminsComponent;