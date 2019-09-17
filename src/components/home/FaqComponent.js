import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section:{
        paddingTop: 20,
        paddingBottom: 20
    },

  }));
function FaqComponent(){
    const classes = useStyles();
    return(          
            
            <Grid className={classes.section} item lg={7}>
                <div>
                    <h1>Preguntas Frecuentes</h1>
                    <div>
                        <p>
                            <b>¿Para qué es esta página?.</b><br/>
                            Esta página permite a los usuarios que hagan uso de teamspeak3, crear sus canales de forma totalmente gratis.
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>¿Cómo creo un canal?.</b><br/>
                            Para comenzar necesitas registrarte en nuestra página en el botón de iniciar sesión, luego clickeando en registrarse. 
                            Debes proporcionar ciertos datos obligatorios para el inicio de sesión, siendo estos cifrados para que nadie más que tu
                            tenga acceso a estos. Luego de iniciar sesión, desde la página principal puedes agregar un canal ingresando el nombre
                            y una contraseña para este.
                        </p>
                    </div>
                    <div>
                        <p>
                            <b>Tengo un problema para iniciar sesión o crear un canal ¿Qué hago?.</b><br/>
                            Asegurate de estar registrado y de ingresar bien la contraseña, luego si al intentar crear un canal se muestra algún
                            error puede ser porque hayas superado el límite de canales permitidos, o bien el canal ya exista con ese nombre, si el problema
                            persiste, contáctanos en nuestro formulario o bien con un admin en el servidor de teamspeak3.
                        </p>
                    </div>
                    </div>
            </Grid>
      
    );
}

export default FaqComponent;