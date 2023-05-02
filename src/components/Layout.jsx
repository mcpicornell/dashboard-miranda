import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LateralMenu from '../components/LateralMenu.jsx';
import NavBar from '../components/Navbar.jsx';

export const Layout = (props) => {
    const location = useLocation();

    const getTitleSections = () => {
        switch(location.pathname){
            case "/":
                return "Dashboard";

            case "/bookings":
                return "Bookings";

            case "/bookings/addBooking":
                return "New Booking"

            case "/rooms":
                return "Rooms";

            case "/rooms/addRoom":
                return "New Room";

            case "/contact":
                return "Contact";

            case "/users":
                return "Users";

            case "/users/addUser":
                return "New User";
        }
    }
    


    return (
        <>
        <div style={{display: 'flex'}}>
            
                
        <NavBar title ={getTitleSections()} />
            
            
            <Outlet />
        </div>
        </>
    );
};

