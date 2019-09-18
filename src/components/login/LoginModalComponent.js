import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        width: "30%"
    },
    button: {
        margin: theme.spacing(1),
      },
}));
function LoginModalComponent(){
    const classes = useStyles();
    const [register, setRegister] = useState(false);

    return(
        <div className={classes.root}>
            <Button onClick={() => setRegister(false)} variant="contained" color="primary" className={classes.button}>
                Login
            </Button>
            <Button onClick={() => setRegister(true)} variant="contained" color="secondary" className={classes.button}>
                Register
            </Button>
            {register ? <RegisterComponent/> : <LoginComponent/>}
        </div>
    );
    
}
export default LoginModalComponent;