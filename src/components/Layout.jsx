
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LateralMenu from '../components/LateralMenu.jsx';
import NavBar from '../components/Navbar.jsx';

export const Layout = (props) => {


    return (
        <>
        <div style={{display: 'flex'}}>
            <div style={{display: 'inline-block'}}>
                <LateralMenu />
                <NavBar props ={props} />
            </div>
            
            <Outlet />
        </div>
        </>
    );
};

