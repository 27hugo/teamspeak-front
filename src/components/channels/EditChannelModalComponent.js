import React, { useState } from 'react';
import {  Button, FormGroup, FormHelperText, Typography } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
import ChannelModel from '../../models/ChannelModel';
import {Form, Field} from 'react-final-form';
import {TextField} from 'final-form-material-ui';
import ChannelsService from '../../services/ChannelsService';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(theme => ({
    root:{
        padding:15
    },
    form: {
        margin: 20,
    },
    formControl: {
        padding: 0,
        marginTop: 5,
        marginBottom: 5
    },
    modal:{
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    
    modalheader:{
        border: 1,
        color: "#000",
        backgroundColor: "#fff",
    },
    modalbody:{
        padding: 20,
        color: "#000",
        backgroundColor: "#fff",
    },
    modalfooter:{
        border: 0,
        backgroundColor: "#fff",
    },
    
}));


function EditChannelModalComponent(props) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);

    const classes = useStyles();
    const channelsService = new ChannelsService(); 
    const [success, setSuccess] = useState(undefined);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const onSubmit = async (values) => {
        setIsSubmitting(true);
        const channel = new ChannelModel(props.channel.can_id, null , null, values.name, values.password, null, null); 
        
        let respName = await channelsService.updateChannelName(channel);
        let respPass = await channelsService.updateChannelPassword(channel);
        var msg = '';
        if(respName.status === 'OK' || respPass.status === 'OK'){
            msg = 'Canal editado exitosamente';
        }else{
            msg = respPass.error;
        }

        setIsSubmitting(false);
        msg += '. Redirigiendo en 3 segundos';
        setSuccess(msg);
        setTimeout(
            function() {
                window.location.reload()
            },
            3000
        );
        //console.log('modificando');
        //console.log(props.channel);
    }
    const required = value => (value ? undefined : 'Este campo es requerido');
    const alphanumeric = value => ( value.match(/^[a-z\d\-_\s]+$/i) ? undefined: 'Debe ingresar sólo números y letras');
    const minLength = min => value => value.length < min ? `Debe ingresar al menos ${min} caracteres`: undefined;
    const maxLength = max => value => value.length > max ? `El límite de caracteres es de ${max}`: undefined;
    
    const composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);





  
    return (
      <>
 
  
        <Modal className={classes.modal}  show={show} onHide={handleClose}>
          <Modal.Header className={classes.modalheader} closeButton>
            <Typography variant="h5">
                Editar canal
            </Typography>
          </Modal.Header>
          <Modal.Body className={classes.modalbody}>
          <Typography style={{paddingBottom: 15}} variant="body1">
              Aquí puedes editar los datos de tu canal.
          </Typography>
          <Form
            className={classes.form}
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
                                autoComplete="off"
                                
                                defaultValue={props.channel.can_nombre}
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
                                autoComplete="off"
                                defaultValue={props.channel.can_contrasena}
                            />   
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                </FormGroup>
                {success?<FormHelperText style={{ fontSize: 14 ,textAlign: "center", margin: 10, color: "red"}}>{success}</FormHelperText>:null}
            
                <Button disabled={isSubmitting || pristine || invalid} type="submit" variant="contained" size="large" color="primary">
                    Guardar cambios
                    {isSubmitting ? <CircularProgress style={{marginLeft:10}} size={18} />  :  <ChevronRightIcon/>}     
                </Button>
            </form>
            )}
        />

        
          </Modal.Body>
          
          
          <Modal.Footer className={classes.modalfooter}>
            
            <Button onClick={handleClose}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default EditChannelModalComponent;