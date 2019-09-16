import React, { useState } from 'react';
import {  Button, FormGroup, FormHelperText } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import {TextField} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import ChannelModel from '../../models/ChannelModel';

import {Form, Field} from 'react-final-form';
import {TextField} from 'final-form-material-ui';
import ChannelsService from '../../services/ChannelsService';

//import IconButton from '@material-ui/core/IconButton';
//import InputAdornment from '@material-ui/core/InputAdornment';
//import Visibility from '@material-ui/icons/Visibility';
//import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    formControl: {
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
}));

function ChannelCreateComponent(){
    const classes = useStyles();
    const channelsService = new ChannelsService(); 
    const [success, setSuccess] = useState(undefined);
    const onSubmit = async (values) => {
        const channel = new ChannelModel(null, JSON.parse(localStorage.getItem('user')).id, null, values.name, values.password, null, null);    
        let resp = await channelsService.createChannel(channel);
        if(resp.status === 'OK'){
            setSuccess('Canal creado exitosamente');
        }
        if(resp.status === 'ERROR' || resp.status === 'FATAL'){
            setSuccess(resp.error);
        }
    }
    
    const required = value => (value ? undefined : 'Este campo es requerido');
    //const email = value => ( value.match(/[a-zA-Z]@/) ? undefined: 'El correo ingresado no es válido  ' );
    const alphanumeric = value => ( value.match(/^[a-z\d\-_\s]+$/i) ? undefined: 'Debe ingresar sólo números y letras');
    //const mustBeNumber = value => (isNaN(value) ? 'Debe ingresar un numero' : undefined);
    //const minValue = min => value => isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
    const minLength = min => value => value.length < min ? `Debe ingresar al menos ${min} caracteres`: undefined;
    const maxLength = max => value => value.length > max ? `El límite de caracteres es de ${max}`: undefined;
    
    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);


    return(
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Field>
                        {({ meta }) => (
                        <div>
                            <Field
                                validate={composeValidators(required, alphanumeric, minLength(3), maxLength(20))}
                                name="name"
                                type="text"
                                component={TextField}
                                label="Nombre del canal"
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />   
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                </FormGroup>
                <FormGroup className={classes.formControl}>
                    <Field>
                        {({ meta }) => (
                        <div>
                            <Field
                                validate={composeValidators(required, minLength(4), maxLength(12))}
                                name="password"
                                type="password"
                                component={TextField}
                                label="Contraseña del canal"
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />   
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                </FormGroup>
                {success?<FormHelperText style={{ fontSize: 14 ,textAlign: "center", margin: 10, color: "red"}}>{success}</FormHelperText>:null}
                <Button disabled={submitting || pristine || invalid} type="submit" variant="contained" size="large" color="primary">
                    Crear canal
                    <ChevronRightIcon/>    
                </Button>
            </form>
            )}
        />
    );
}
export default ChannelCreateComponent;