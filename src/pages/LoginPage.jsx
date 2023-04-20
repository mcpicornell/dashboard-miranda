
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) =>{

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

    const nav = useNavigate();

    const logInSubmitHandler = (event) => {
        event.preventDefault();
        props.setAuthenticated(true);
        nav("/");
    }

    return (
        <>
        <form onSubmit={logInSubmitHandler}>
            <label>Introduce tu email</label>
            <input placeholder='email' request type='email'/>
            <label>Introduce contraseña</label>
            <input placeholder='contraseña' request type='password'/>
            <button type='submit'>Submit</button>
        </form>
        
        </>
        
    )

};

export default LoginPage;

