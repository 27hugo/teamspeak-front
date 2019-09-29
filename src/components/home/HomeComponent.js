import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SectionInfoComponent from './SectionInfoComponent';
import HeaderComponent from './HeaderComponent';
import AdminsComponent from './AdminsComponent';
import FaqComponent from './FaqComponent';
import MusicBotsComponent from './MusicBotsComponent';
const useStyles = makeStyles(theme => ({
    container:{
        justifyContent: "center",
        flexGrow: 1,
    },
  }));
function HomeComponent(){
    const classes = useStyles();
    return(
        <div>
        <HeaderComponent/>
            
        <Grid className={classes.container} container>
            
            <SectionInfoComponent/>
            <AdminsComponent/>
            <MusicBotsComponent/>
            <FaqComponent/>
      
        </Grid>
        </div>
    );
}

export default HomeComponent;