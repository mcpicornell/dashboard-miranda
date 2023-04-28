import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import { useReducer } from 'react';
import { useState } from 'react';


const LoginPage = (props) =>{

    const user = {
        userName: "admin",
        email: "admin@admin.com",
        password: "admin"
      };

    const {state, dispatch} = useContext(UserContext);

    const nav = useNavigate();

    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        if (emailValue === user.email && 
            passwordValue === user.password ){
            dispatch({type: "auth", value: {userName: user.userName, email: emailValue}})
            nav("/")
        }
        else if(emailValue !== user.email && 
            passwordValue !== user.password){
            console.log("El email y la contraseña son incorrectos")
        }
        else if(emailValue === user.email && 
            passwordValue !== user.password){
            console.log("La contraseña es incorrecta")
        }
        else{
            console.log("El email el incorrecto")
        }
    }

    return (
        <>
        <LoginForm onSubmit={loginSubmitHandler}>
            <FormOptions>
                <label>Introduce tu email</label>
                <input name='emailValue' placeholder='email' request type='email' onChange={e => setEmail(e.target.value)}/>
            </FormOptions>
            <FormOptions>
                <label>Introduce contraseña</label>
                <input name='passwordValue' placeholder='password' request type='password' onChange={e => setPassword(e.target.value)} />
            </FormOptions>
            <button type='submit'>Submit</button>
        </LoginForm>
        </>
    )
};

export default LoginPage;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`

const FormOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
`