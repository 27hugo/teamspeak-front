import React, { useState } from 'react';
import { TextField, Button, FormGroup } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import LoginModel from '../../models/LoginModel';


const useStyles = makeStyles(theme => ({
    formControl: {
        padding: 0,
        marginTop: 15,
        marginBottom: 15
    },
}));

function RegisterComponent(){
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
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
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={country}
                    onChange={(e) => {setCountry(e.target.value)}}
                    label="Pais"
                    type="text"
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={city}
                    onChange={(e) => {setCity(e.target.value)}}
                    label="Ciudad"
                    type="text"
                    variant="outlined"
                />
            </FormGroup>
            <Button type="submit" variant="contained" size="large" color="primary">
                Registrarse
                <ChevronRightIcon/>    
            </Button>
        </form>
    );
}
export default RegisterComponent;