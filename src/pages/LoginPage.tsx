import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import styled from 'styled-components';
import { useState } from 'react';
import {AddUser} from './users/UsersAddPage'
import { logoImg } from '../components/LateralMenu';
import { getObjInLocalStorage,  saveInLocalStorage} from '../data/localStorage';
import { loginPost } from '../features/loginFetch';
import { getUserById } from '../features/users/fetchUsers';

const LoginPage = () =>{

    interface IUser {
        userName: string,
        email: string,
        password: string
    }

    const user: IUser = {
        userName: "admin",
        email: "admin",
        password: "admin"
    }

    const {dispatch} = useContext(UserContext);

    const nav = useNavigate();

    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const loginSubmitHandler = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        try{
            const  idAndTokeObj = await loginPost({email: emailValue, password: passwordValue})
            
        if(idAndTokeObj){
            saveInLocalStorage("auth", idAndTokeObj)
            const user = await getUserById(idAndTokeObj.id)
            dispatch({type: "auth", value: {userName: user.name, email: user.email}})
            nav("/")
        }

        else if (emailValue === user.email && 
            passwordValue === user.password ){
            dispatch({type: "auth", value: {userName: user.userName, email: emailValue}})
            nav("/")
        }
        else{
            alert("Something was wrong, please introduce your credentials again")
        }
        }
        catch(error){
            console.log("Error: ", error)
        }
        
    }

    return (
        <>
        <LoginForm onSubmit={loginSubmitHandler}>
            <FormOptions>
                <LogoImg src={logoImg} />
            </FormOptions>
            <FormOptions>
                <label className='label-login'>Introduce your email user</label>
                <input className='input-login' name='email' placeholder='email'  onChange={e => setEmail(e.target.value)}/>
            </FormOptions>
            <FormOptions>
                <label className='label-login'>Introduce your password</label>
                <input className='input-login' name='password' placeholder='password' type='password' onChange={e => setPassword(e.target.value)} />
            </FormOptions>
            <ButtonLogin  type='submit'>Log In</ButtonLogin>
            <CredentialContainer>
            <div className='credentials'>
                <label>user credential:</label>
                <span>admin</span>
            </div>
            <div className='credentials'>
                <label>password credential:</label>
                <span>admin</span>
            </div>
        </CredentialContainer>
        </LoginForm>
        
        </>
    )
};

export default LoginPage;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #FFFFFF;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
    top: 200px;
    border: 1px solid grey;
    border-radius: 5px;


`

const CredentialContainer = styled.div`
    .credentials{
        display: flex;
        flex-direction: row;
        justify-content: left;
        font-size: 12px;
        margin-top: 5px;
    }
    span{
        margin-left: 10px;
        font-weight: 600;
    }
`

const FormOptions = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: auto;
    border-radius: 10px;
    
    .label-login{
        margin-bottom: 5px;
    }
    
    .input-login{
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid grey;
        padding: 3px;
        margin-bottom: 10px;
    }
`

const LogoImg = styled.img`
    width: 300px;
`

const ButtonLogin = styled(AddUser)`
    margin-top: 5px;
    margin-bottom: 5px;
    width: 150px;
`