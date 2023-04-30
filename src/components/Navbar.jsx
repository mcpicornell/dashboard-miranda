import styled from 'styled-components';
import {FiMail } from 'react-icons/fi';
import {HiOutlineBell} from 'react-icons/hi';
import {MdLogout } from 'react-icons/md';
import {GrTextAlignFull } from 'react-icons/gr';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const NavBar = (props) =>{
    const nav = useNavigate();
    const {state, dispatch} = useContext(UserContext);
    const logOutClickHandler = (event) => {
        event.preventDefault();
        dispatch({  type: "logOut" });
    }
    
    return(
        <Nav>
            <section className='nav-section'>
                <div className='nav-section__options'>
                    <GrTextAlignFull className='options__elements-nav' style={{color: 'rgb(57, 57, 57)'}} />
                    <h1  className='options__title-h1'>{props.title}</h1>
                </div>

                <div className='nav-section__options'>
                    <FiMail  className='options__elements-nav' />
                    <HiOutlineBell  className='options__elements-nav' />
                    <MdLogout  className='options__elements-nav' onClick={logOutClickHandler}/>
                </div>

            </section>
        </Nav>
    )
};

export default NavBar;

const Nav = styled.nav`
    height: 120px;
    padding-left: 20px;
    display: inline-block;
    position: absolute;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000005;
    opacity: 1;
    

    .nav-section{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-section__options{
        display: flex;
        align-items: center;
        margin-right: 20px;
        color: #799283;
    }

    .options__elements-nav{
        margin-right: 20px;
        width: 27px;
        height: 24px;
        padding-left: 20px;
        color: #799283;
        opacity: 1;
    }


    .options__title-h1{
        font: normal normal 600 28px/42px 'Poppins';
        letter-spacing: 0px;
        color: #262626;
        opacity: 1;
    }
`





