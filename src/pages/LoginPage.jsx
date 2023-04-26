
import { useNavigate } from 'react-router-dom';

const LoginPage = (props) =>{

    const nav = useNavigate();

    const loginSubmitHandler = (event) => {
        event.preventDefault();
        props.setAuthenticated(true);
        nav("/");
    }

    return (
        <>
        <form onSubmit={loginSubmitHandler}>
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