import React from 'react';
import { Grid, Container } from '@material-ui/core';

function FooterComponent() {
  return (
      <Container fixed>
          <Grid container>
            <Grid item xs={12} sm={3}>
                <p>Horarios</p>
            </Grid>
            <Grid item xs={12} sm={3}>
                <p>Terminos</p>
            </Grid>
            <Grid item xs={12} sm={3}>
                <p>Logo</p>
            </Grid>
          </Grid>
          <Grid container>
            <p>Creado por owc.cl</p>
          </Grid>
      </Container>
  );
}

export default FooterComponent;
