import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header:{
        backgroundImage: "url('https://owc.cl/assets/images/wp1.jpg')",
        backgroundAttachment: "fixed",
        height: "100vh"
    },
    headerTitle:{
        margin: "auto",
        color: "#FFAA4B",
        fontSize: "2rem",
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
                    <h2 className={classes.headerTitle}>BIENVENIDO A OWC</h2>
                    <p style={{color:"#FFAA4B", fontSize:"1.5rem"}}>Registrate y crea un canal de ts3 gratis</p>
                </Grid>
            </Grid>

    );
}

export default HeaderComponent;