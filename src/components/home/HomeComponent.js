import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SectionInfoComponent from './SectionInfoComponent';
import HeaderComponent from './HeaderComponent';
import AdminsComponent from './AdminsComponent';
import FaqComponent from './FaqComponent';
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
            <FaqComponent/>
      
        </Grid>
    );
}

export default HomeComponent;