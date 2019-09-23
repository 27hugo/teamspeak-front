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
        
        <Grid className={classes.container} container>
            
            <HeaderComponent/>
            <SectionInfoComponent/>
            <AdminsComponent/>
            <MusicBotsComponent/>
            <FaqComponent/>
      
        </Grid>
    );
}

export default HomeComponent;