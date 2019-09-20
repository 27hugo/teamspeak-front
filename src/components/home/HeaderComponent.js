import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import wp1 from '../../assets/images/wp1.jpg';
const useStyles = makeStyles(theme => ({
    header:{
        backgroundImage: "url("+ wp1 +")",
        backgroundAttachment: "fixed",
        height: "100vh"
    },
    headerTitle:{
        margin: "auto",
        color: "#FFAA4B",
        fontSize: "8rem",
        textShadow: "2px 2px #ff0000",
    },

  }));
function HeaderComponent(){
    const classes = useStyles();
    return(    
            <Grid
                className={classes.header}
                container
                spacing={0}
                align="center"
                justify="center"
                direction="column"
                style={{ backgroundColor: 'teal' }}
            >
                <Grid item>
                    <h2 className={classes.headerTitle}>OWC</h2>
                </Grid>
            </Grid>

    );
}

export default HeaderComponent;