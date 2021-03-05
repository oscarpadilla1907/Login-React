import React, { useState } from 'react'
import { auth } from '../firebaseconf'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home'
import { render } from '@testing-library/react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const loginUsuario = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, pass)
            .then((res) => window.location.href="https://keen-lamarr-285c08.netlify.app/home")
            .catch(err => alert("Introduce bien tus credenciales"))
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={loginUsuario}>
                <input 
                onChange={(e) => { setEmail(e.target.value) }}
                className="form-control mb-3" type="email"
                placeholder="Correo electronico"
                />
                <input onChange={(e) => { setPass(e.target.value) }} 
                    type="password" placeholder="Contraseña"
                    className="form-control mb-3"
                />
                <input type="submit" 
                    className="btn btn-block btn-info"
                    value="Login"
                />
            </form>
        </div>
    )
}


export default Login