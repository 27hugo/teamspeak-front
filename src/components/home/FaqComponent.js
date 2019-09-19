import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section:{
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom:50
    },

  }));
function FaqComponent(){
    const classes = useStyles();
    return(          
            
            <Grid id="faq" className={classes.section} item xs={11} sm={10} md={9} lg={7}>
               <Typography variant="h5"><b>Preguntas Frecuentes</b></Typography>
                <div style={{marginTop: 30}}>
                    <Typography variant="h6">
                        ¿Para qué es esta página?.
                        </Typography>
                    <Typography style={{marginTop: 10}} variant="subtitle1">
                        Esta página permite a los usuarios que hagan uso de teamspeak3, crear sus canales de forma totalmente gratuita.
                    </Typography>
                </div>
                <div style={{marginTop: 30}}>
                    <Typography variant="h6">
                        ¿Cómo creo un canal?.
                    </Typography>
                    <Typography style={{marginTop: 10}} variant="subtitle1">
                        Para comenzar necesitas registrarte en nuestra página en el botón de iniciar sesión, luego clickeando en registrarse. 
                        Debes proporcionar ciertos datos obligatorios para el inicio de sesión, siendo estos cifrados para que nadie más que tu
                        tenga acceso a estos. Luego de iniciar sesión, desde la página principal puedes agregar un canal ingresando el nombre
                        y una contraseña para este.
                    </Typography>
                </div>
                <div style={{marginTop: 30}}>
                    <Typography variant="h6">
                        Tengo un problema para iniciar sesión o crear un canal ¿Qué hago?.
                    </Typography>
                    <Typography style={{marginTop: 10}} variant="subtitle1">
                        Asegurate de estar registrado y de ingresar bien la contraseña, luego si al intentar crear un canal se muestra algún
                        error puede ser porque hayas superado el límite de canales permitidos, o bien el canal ya exista con ese nombre, si el problema
                        persiste, contáctanos en nuestro formulario o bien con un admin en el servidor de teamspeak3.
                    </Typography>
                </div>
            </Grid>
      
    );
}

export default FaqComponent;