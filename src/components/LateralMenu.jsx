import styled from 'styled-components';
import  logoCompleto  from '../img/logoCompleto.PNG';
import fakeMale from '../img/fakeMale.jpg'
import {MdOutlineDashboard } from 'react-icons/md';
import {RiCalendarEventLine} from 'react-icons/ri';
import {VscKey } from 'react-icons/vsc';
import {BiUser } from 'react-icons/bi';
import {BsChevronRight} from 'react-icons/bs';
import {BsChevronLeft} from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import {css} from 'styled-components';
import { useState, useEffect } from 'react';



const LateralMenu = () => {

    const [ open, setOpen ] = useState(true);
    const navigate = useNavigate();

    const closeOpenMenu = (event) => {
        setOpen(prevState => !prevState);
    }

    useEffect( () => {
        console.log(open)
    }, [open]);
    
    
    const navToDashboard= () => {
        navigate("/");
    }

    const navToBookings= () => {
        navigate("/bookings");
    }

    const navToRooms= () => {
        navigate("/rooms");
    }

    const navToUsers= () => {
        navigate("/users");
    }

    return (
        <Aside open={open}>
            
                <div className='aside__logo'>
                    
                    <img className='logo__img' src={logoCompleto} />
                    <a className='menuCloseObenButton' onClick={closeOpenMenu}><BsChevronLeft className='logo__img-arrow-righ'/></a>
                </div>

                <div className='aside__list'>
                    <div className='list__container-element'>
                    
                    <MdOutlineDashboard/>
                    <a className='buttonNavigateLateralMenu' onClick={navToDashboard}><span className='container-element__name-list-element'>Dashboard</span></a>

                           
                        
                    </div>
                </div>

                <div className='aside__list'>
                    <div className='list__container-element'>
                        <RiCalendarEventLine/>
                        <a className='buttonNavigateLateralMenu' onClick={navToBookings}><span className='container-element__name-list-element'>Bookings</span></a>
                    </div>
                </div>

                <div className='aside__list'>
                    <div className='list__container-element'>
                        <VscKey/>
                        <a className='buttonNavigateLateralMenu' onClick={navToRooms}><span className='container-element__name-list-element'>Rooms</span></a>
                    </div>
                </div>

                <div className='aside__list'>
                    <div className='list__container-element'>
                        <BiUser/>
                        <a className='buttonNavigateLateralMenu' onClick={navToUsers}><span className='container-element__name-list-element'>Users</span></a>
                    </div>
                </div>

                <div className='aside__card'>
                    <img className='card__img-aside-card' src={fakeMale}/>
                    <h4 className='card__user-name'>Antonio López Parés</h4>
                    <h5 className='card__user-email'>toni.lopez.pares@gmail.com</h5>
                    <a className='card__edit-button'><span className='edit__button-span-card'>Edit</span></a>
                </div>
                
                <div className='aside__bottom'>
                    <span className='bottom-title'>Travl Hotel Admin Dashboard</span>
                    <span className='bottom-subtitle'>© 2020 All Rights Reserved</span>
                </div>
        </Aside>
    )
};



const Aside = styled.aside`
        display: inline-block;
        margin: 0px;
        padding-top: 32px;
        padding-left: 56px;
        width: 285px;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 13px 3px 40px #00000005;
        opacity: 1;
        z-index: 2;
        ${props  => !props.open && css`
        position: absolute;
        left:-310px;
        `} 
    

    .aside__logo{
       
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 62px;
        width: 100%;
        justify-content: space-between;
    }

    .logo__img{
        width: 220px;
    }

    .menuCloseObenButton:hover{
        cursor: pointer;
    }

    .logo__img-arrow-righ{
        color: hsla(144, 10%, 52%, 1);
        opacity: 1;
        border-radius: 8px;
        padding-right: 8px;
    }

    .logo__content{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content__title-logo{
        padding: 0px;
        margin:0px 0px 0px 0px;
        font-family: 'Poppins';
        font-size: 28px;
        opacity: 1;
        color: black;
    }

    .content__subtitle-logo{
        margin:0px 0px 0px 0px;
        font-size: 12px;
        line-height: 18px;
        font-family: 'Poppins';
        font-weight: 300;
        letter-spacing: 0px;
        color: #5D5449;
        opacity: 1;
    }

    .aside__list{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 57px;
        background: #ffffff 0% 0% no-repeat padding-box;
        background: hsla(0, 0%, 100%, 1) 0% 0% no-repeat padding-box;
        opacity: 1;
        color: hsla(144, 10%, 52%, 1);
    }

    .container-element__name-list-element{
        margin-left: 26px;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: hsla(144, 10%, 52%, 1);
        opacity: 1;
    }

    .aside__card{
        width: 233px;
        margin-top: 5px;
        margin-bottom: 62px;
        padding-bottom: 24px; 
        
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 20px 30px #00000014;
        border-radius: 18px;
        opacity: 1;
        text-align: center;

    }

    .card__img-aside-card{
        width: 70px;
        background: #c5c5c5 0% 0% no-repeat padding-box;
        background: #C5C5C5 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
    }
    .card__user-name{
        color: #393939;
        font: normal normal medium 16px/25px Poppins;
        letter-spacing: 0px;
        color: #393939;
        opacity: 1;
    }
    .card__user-email{
        text-align: center;
        font: normal normal 300 12px/18px Poppins;
        letter-spacing: 0px;
        color: #B2B2B2;
        opacity: 1;
        
       
    }
    
    .aside__bottom{
        display: flex;
        flex-direction: column;
    }

   .bottom-title{
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #212121;
    opacity: 1;
    margin-bottom: 5px;
   }
   .bottom-subtitle{
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
    margin-bottom: 24px;
   
   }

   .card__edit-button{
        background: #EBF1EF 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        margin-bottom: 24px;
        padding-top: 3px;
        padding-right: 50px;
        padding-bottom: 8px;
        padding-left: 50px;
    }

   .edit__button-span-card{
    
    font: normal normal 600 14px/21px Poppins;
    letter-spacing: 0px;
    color: #135846;
    opacity: 1;
    margin-bottom: 5px;
    
   }

   .buttonNavigateLateralMenu{
    cursor: pointer;
   }
`;




export default LateralMenu;




