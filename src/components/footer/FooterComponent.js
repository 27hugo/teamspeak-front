import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root:{
    justifyContent: "center",
    textAlign: "center"
  },
  container: {
    paddingTop: 50,
    paddingBottom: 50, 
    justifyContent: "center",
    textAlign: "center"
  }
}));

function FooterComponent() {
  const classes = useStyles();
  return (
    <Grid container style={{backgroundColor: "#000020", color: "white"}}>
        
      <Container className={classes.root} fixed>
          <Grid className={classes.container} container>
            <p>Creado por owc.cl</p>
          </Grid>
      </Container>
    </Grid>
  );
}

export default FooterComponent;
