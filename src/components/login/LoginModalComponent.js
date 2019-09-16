import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

function LoginModalComponent(){
    const[mode, setMode] = useState(true);

    if( mode){
        return(
            <div>
                <button onClick={() => {setMode(true)}}>Login</button>
                <button onClick={() => {setMode(false)}}>Register</button>
                <LoginComponent/>
            </div>
        );
    }else{
        return(
            <div>
                <button onClick={() => {setMode(true)}}>Login</button>
                <button onClick={() => {setMode(false)}}>Register</button>
                <RegisterComponent/>
            </div>
        );
    }
}
export default LoginModalComponent;