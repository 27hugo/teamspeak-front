import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SectionInfoComponent from './SectionInfoComponent';
import HeaderComponent from './HeaderComponent';
import AdminsComponent from './AdminsComponent';
import FaqComponent from './FaqComponent';
import MusicBotsComponent from './MusicBotsComponent';
const useStyles = makeStyles(theme => ({
    info:{
        justifyContent: "center",
        flexGrow: 1,
    },
    admins:{
        backgroundImage: "",
        backgroundSize: "cover",
        justifyContent: "center",
        flexGrow: 1,
    },
    musicbots:{
        justifyContent: "center",
        flexGrow: 1,
    },
    faq:{
        justifyContent: "center",
        flexGrow: 1,
    },
  }));
function HomeComponent(){
    const classes = useStyles();
    return(
        <div>
            <HeaderComponent/>
            <Grid className={classes.info} container>       
                <SectionInfoComponent/>
            </Grid>
            <Grid className={classes.admins} container>
                <AdminsComponent/>
            </Grid>
            <Grid className={classes.musicbots} container>
                <MusicBotsComponent/>
            </Grid>
            <Grid className={classes.faq} container>
                <FaqComponent/>
        </Grid>
        </div>
    );
}

export default HomeComponent;