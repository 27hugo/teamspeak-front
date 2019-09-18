import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section:{
        paddingTop: 20,
        paddingBottom: 20
    },

  }));
function SectionInfoComponent(){
    const classes = useStyles();
    return(

            <Grid className={classes.section} item xs={7}>
                <h3>Dirección IP TS3: owc.cl</h3>
                <h1>Canales gratuitos para usuarios nuevos</h1>
                <p>* Para poder crear canales debes iniciar sesión, es <b>gratis</b>!.</p>
                <p>En nuestro servidor de <b>teamspeak 3</b> puedes crear tus canales sin ningún costo, sólo necesitas <b>registrarte</b> en nuestra página 
                en el siguiente <i>enlace</i>. Cada usua    rio puede crear hasta 3 canales, si necesitas algún canal extra puedes solicitarlo
                con algun admin o soporte que se encuente conectado en el servidor.</p>
            
            
                <h2>Reglas para usuarios</h2>
                <p>
                        <b>Se prohibe spamear chat.</b><br/>
                        Cualquier spameo publicitando otros servidores en el chat privado o bien en el chat general, será motivo de ban.
                    </p>
                    <p>
                        <b>Uso indebido de privilegios.</b><br/>
                        Para los usuarios con permisos dentro del servidor, ante cualquier reporte se revisará el caso de un uso indebido y se procederá a banear al usuario.
                    </p>
                
            
            </Grid>

    );
}

export default SectionInfoComponent;