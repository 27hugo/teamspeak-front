import React, { useState } from 'react';
import { Select, MenuItem, FormControl, Grid, TextField, Button, FormGroup, FormHelperText, InputLabel } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import LoginModel from '../../models/LoginModel';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LoginService from '../../services/LoginService';
import ClientModel from '../../models/ClientModel';
import regiones from '../../utils/RegionesService.json';
const loginService = new LoginService();

const useStyles = makeStyles(theme => ({
    formControl: {
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
    root: {
        padding:15,
        flexGrow: 1,
      }
}));

function RegisterComponent(){
    const classes = useStyles();
  const [submitting, setSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(false);
 const [formError, setFormError] = useState(true);
  const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        region: '',
        city: '',
        repeatPassword: '',
        nickname: '',
        birthdate: '1998-01-31'
      });

      const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        region: false,
        city: false,
        repeatPassword: false,
        nickname: false,
        birthdate: false
      });
  
    const handleClickShowPassword = () => {
        setForm({ ...form, showPassword: !form.showPassword });
      };
    
      
      const handleChange = prop => event => {
        setForm({ ...form, [prop]: event.target.value });
        
        if(event.target.value === ''){
          setErrors({...errors, [prop]: true});
          setFormError(true);
        }else if(prop === 'password' && event.target.value.length < 6){
            setErrors({...errors, [prop]: true});
            setFormError(true);
        }else if(prop === 'repeatPassword' && event.target.value !== form.password){
            setErrors({...errors, [prop]: true});
            setFormError(true);
        }else{
          setErrors({...errors, [prop]: false});
          setFormError(false);
        }

        if( form.city === '' || form.region ===''){
            setFormError(true);
        }else{
            setFormError(false);
        }   
        
        
      };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const login = new LoginModel(null, form.email, form.password, null, null, null);
        const client = new ClientModel(null, null, form.name, form.nickname, form.region.region, form.city, form.birthdate, null);
        const model = {...login, ...client};
        console.log(model);
        const resp = await loginService.register(model);
        console.log(resp);
        if(resp.status === 'ERROR' || resp.status === 'FATAL' ){
          setRegisterError(resp.error);
        }else if(resp.status === 'OK'){
          setRegisterError(resp.data);
        }else{
          setRegisterError(false);
        }
        //console.log(regiones.regiones);
        //console.log(region);
        //setRegisterError(true);
        setSubmitting(false);
      };
    
    return(
<div className={classes.root}>
<form id="loginForm" onSubmit={handleSubmit}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
            <FormGroup>
                <TextField 
                    margin="dense"
                    label="Ingrese su correo electrónico"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                    autoFocus
                    type="email"
                    error={errors.email}
                    helperText={errors.email?"Debe ingresar su correo electrónico":""}
                />
            </FormGroup>
        </Grid>
        <Grid item xs={12} sm={4}>
            <FormGroup>
                <TextField 
                    margin="dense"
                    label="Nombre"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                    error={errors.name}
                    helperText={errors.name?"Debe ingresar su nombre":""}
                />
            </FormGroup>
        </Grid>
        <Grid item xs={12} sm={4}>
            <FormGroup>
                <TextField 
                    margin="dense"
                    label="Ingrese su alias"
                    value={form.nickname}
                    onChange={handleChange('nickname')}
                    error={errors.nickname}
                    helperText={errors.nickname?"Debe ingresar su alias":""}
                />
          </FormGroup>
        </Grid>
        
        <Grid item xs={12} sm={4}>
            <FormGroup>
            <TextField 
                    margin="dense"
                    label="Ingrese su fecha de nacimiento"
                    defaultValue={form.birthdate}
                    onChange={handleChange('birthdate')}
                    required
                    type="date"
                    error={errors.birthdate}
                    helperText={errors.birthdate?"Debe ingresar su fecha de nacimiento":""}
                />
            </FormGroup>
        </Grid>

        <Grid item xs={12} sm={6}>
            <FormGroup>
            <FormControl>
            <InputLabel htmlFor="age-helper">Seleccione su región *</InputLabel>
                <Select
                    value={form.region}
                    onChange={handleChange('region')}
                    autoWidth
                    required
                    >
                    {regiones.regiones.map( region => (
                        <MenuItem key={region.region} value={region}>{region.region}</MenuItem>
                    ))}
                    
                </Select>
            </FormControl>
            </FormGroup>
        </Grid>
        
        <Grid item xs={12} sm={6}>
            <FormGroup>
            <FormControl>
            <InputLabel htmlFor="age-helper">Seleccione su ciudad *</InputLabel>
                <Select
                    value={form.city}
                    onChange={handleChange('city')}
                    autoWidth
                    required
                    >
                    {form.region?form.region.comunas.map( comuna => (
                        <MenuItem key={comuna} value={comuna}>{comuna}</MenuItem>
                    )):<MenuItem value=''>Seleccione una región...</MenuItem>}
                    
                </Select>
            </FormControl>
            </FormGroup>
        </Grid>
        
        
        <Grid item xs={12} sm={6}>
            <FormGroup>
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
                      helperText={errors.password?"La contraseña debe contener entre 6 y 12 caracteres":""}
                />
            </FormGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FormGroup>
                <TextField 
                    margin="dense"
                    value={form.repeatPassword}
                    onChange={handleChange('repeatPassword')}
                    label="Repita su contraseña"
                    type={form.showPassword ? 'text' : 'password'}
                    
                      required
                      error={errors.repeatPassword}
                      helperText={errors.repeatPassword?"Las contraseñas no coinciden":""}
                />
            </FormGroup>
        </Grid>
        <Grid item xs={12} sm={12}>
            <FormGroup>
                {registerError?<FormHelperText style={{ fontSize: 14 ,textAlign: "center", margin: 10, color: "red"}}>{registerError}</FormHelperText>:''}
                <Button disabled={submitting || formError} type="submit" variant="contained" size="large" color="primary">
                    Registrarse
                    <ChevronRightIcon/>    
                </Button>
               
            </FormGroup>
        </Grid>
      </Grid>
      </form>
      </div>


       
             
              
            
               
                
             
       
    );
}
export default RegisterComponent;