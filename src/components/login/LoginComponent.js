import React, { useState } from 'react';
import { TextField, Button, FormGroup, FormHelperText } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import LoginModel from '../../models/LoginModel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LoginService from '../../services/LoginService';

const loginService = new LoginService();

const useStyles = makeStyles(theme => ({
    formControl: {
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
}));

function LoginComponent(){
    const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(false);

    const [form, setForm] = useState({
        email: '',
        password: ''
      });

      const [errors, setErrors] = useState({
        email: false,
        password: false
      });
  
    const handleClickShowPassword = () => {
        setForm({ ...form, showPassword: !form.showPassword });
      };
    
      const handleChange = prop => event => {
        setForm({ ...form, [prop]: event.target.value });
        
        if(event.target.value === ''){
          setErrors({...errors, [prop]: true});
        }else{
          setErrors({...errors, [prop]: false});
        }

      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const login = new LoginModel(null, form.email, form.password, null, null, null);
        const resp = await loginService.login(login);
        if(resp.status === 'ERROR' ){
          setLoginError(resp.error);
        }else{
          setLoginError(false);
        }
        setSubmitting(false);
      };
    
    return(
        <form id="loginForm" onSubmit={handleSubmit}>
            <FormGroup className={classes.formControl}>
                <TextField 
                margin="dense"
                id="outlined-error"
                label="Ingrese su correo electrónico"
                value={form.email}
                onChange={handleChange('email')}
                required
                autoFocus
                error={errors.email}
                helperText={errors.email?"Debe ingresar su correo electrónico":""}
                />
            </FormGroup>
            <FormGroup className={classes.formControl}>
                <TextField 
                margin="dense"
                    value={form.password}
                    onChange={handleChange('password')}
                    label="Ingrese su contraseña"
                    type={form.showPassword ? 'text' : 'password'}
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
                      required
                      error={errors.password}
                      helperText={errors.password?"Debe ingresar su contraseña":""}
                />
            </FormGroup>
            {loginError?<FormHelperText style={{ fontSize: 14 ,textAlign: "center", margin: 10, color: "red"}}>{loginError}</FormHelperText>:''}
            <Button disabled={submitting || form.email === '' || form.password === '' || errors.password} type="submit" variant="contained" size="large" color="primary">
                Iniciar Sesion
                <ChevronRightIcon/>    
            </Button>
            <a style={{ marginLeft: 10 }} href="google.cl">¿Ha olvidado su contraseña?</a>
        </form>
    );
}
export default LoginComponent;