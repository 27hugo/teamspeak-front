import React, { useState } from 'react';
import { TextField, Button, FormGroup } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import LoginModel from '../../models/LoginModel';


import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    formControl: {
        padding: 0,
        marginTop: 15,
        marginBottom: 15
    },
}));

function LoginComponent(){
    const classes = useStyles();

    const [form, setForm] = useState({
        email: '',
        password: ''
      });

    const handleClickShowPassword = () => {
        setForm({ ...form, showPassword: !form.showPassword });
      };
    
 

      const handleChange = prop => event => {
        setForm({ ...form, [prop]: event.target.value });
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        const login = new LoginModel(null, form.email, form.password, null, null, null);
        console.log(login);
    };

    return(
        <form onSubmit={handleSubmit}>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={form.email}
                    onChange={handleChange('email')}
                    label="Correo electrónico" 
                    variant="outlined"
                />
            </FormGroup>
            <FormGroup className={classes.formControl}>
                <TextField 
                    value={form.password}
                    onChange={handleChange('password')}
                    label="Contraseña"
                    type={form.showPassword ? 'text' : 'password'}
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                            >
                            {form.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                />
            </FormGroup>
            <Button type="submit" variant="contained" size="large" color="primary">
                Iniciar Sesion
                <ChevronRightIcon/>    
            </Button>
            <a style={{ marginLeft: 10 }} href="google.cl">¿Ha olvidado su contraseña?</a>
        </form>
    );
}
export default LoginComponent;