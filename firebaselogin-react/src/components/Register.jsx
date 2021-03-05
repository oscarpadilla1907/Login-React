import React, { useState } from 'react'
import { auth } from '../firebaseconf'

const Register = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then((res) => alert('Usuario registrado'))
            .catch(err => alert("La contraseña debe ser de 6 caracteres"))
    }

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={registrarUsuario}>
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
                    value="Registrar"
                />
            </form>
        </div>
    )
}

export default Register