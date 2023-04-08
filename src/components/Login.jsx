import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../auth/authSlice';

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const dispatch = useDispatch();

    //  obtiene los datos del formulario 
    const handleInputChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(logIn({
            user: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
            accesstoken: 'myaccesstocken'
        }))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Login {user.name},{user.email}, {user.password}</h3>
                <input name="name" onChange={handleInputChange} type="name" placeholder='Nombre' />
                <input name="email" onChange={handleInputChange} type="email" placeholder='Correo' />
                <input name="password" onChange={handleInputChange} type="password" placeholder='Contrasena' />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login