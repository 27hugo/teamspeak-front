import React, { useState } from 'react';
import { TextField, Button, FormGroup } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import LoginModel from '../../models/LoginModel';

const useStyles = makeStyles(theme => ({
    formControl: {
        marginTop: 10,
        marginBottom: 10
    },
}));

function LoginComponent(){
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const handleSubmit = (event) => {
        event.preventDefault();
        const login = new LoginModel(null, email, password, null, null, null);
        console.log(login);
    };

    return(
        <form onSubmit={handleSubmit}>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    label="Correo electrónico" 
                />
            </FormGroup>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    label="Contraseña"
                    type="password"
                />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary">
                Iniciar Sesion
                <ChevronRightIcon/>    
            </Button>
            <a style={{ marginLeft: 10 }} href="google.cl">¿Ha olvidado su contraseña?</a>
        </form>
    );
}
export default LoginComponent;