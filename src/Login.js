import React from 'react';
import { auth, provider} from './firebase';
import './Login.css';
import {Button} from '@material-ui/core';

function Login(){
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return(
        <div className='login'>
            <div className='login__logo'>
                <img src='https://www.freepnglogos.com/uploads/discord-logo-png/discord-branding-2.png'></img>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>

    )
}

export default Login;