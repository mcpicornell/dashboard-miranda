import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import { useReducer } from 'react';
import { useState } from 'react';
import {AddUser} from './users/UsersAddPage'


const LoginPage = (props) =>{

    const user = {
        userName: "admin",
        email: "admin",
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
            alert("Incorrect email user and password")
        }
        else if(emailValue === user.email && 
            passwordValue !== user.password){
            alert("The password is incorrect, please introduce it again")
        }
        else{
            alert("The email user is incorrect, please introduce it again")
        }
    }

    return (
        <>
        <LoginForm onSubmit={loginSubmitHandler}>
            <FormOptions>
                <label className='label-login'>Introduce your email user</label>
                <input className='input-login' name='email' placeholder='email' request  onChange={e => setEmail(e.target.value)}/>
            </FormOptions>
            <FormOptions>
                <label className='label-login'>Introduce your password</label>
                <input className='input-login' name='password' placeholder='password' request type='password' onChange={e => setPassword(e.target.value)} />
            </FormOptions>
            <ButtonLogin  type='submit'>Log In</ButtonLogin>
        </LoginForm>
        </>
    )
};

export default LoginPage;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 17%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #FFFFFF;
    padding-bottom: 40px;
    padding-top: 30px;
    position: relative;
    top: 200px;
    border: 1px solid grey;
    border-radius: 5px;
`

const FormOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: auto;
    border-radius: 10px;
    
    .label-login{
    }
    
    .input-login{
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid grey;
        padding: 3px;
        margin-bottom: 10px;
    }
`

const ButtonLogin = styled(AddUser)`
    margin-top: 5px;
`