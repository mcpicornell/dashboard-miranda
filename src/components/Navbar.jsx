import styled from 'styled-components';
import {FiMail } from 'react-icons/fi';

import {HiOutlineBell} from 'react-icons/hi';

import {MdLogout } from 'react-icons/md';

import {GrTextAlignFull } from 'react-icons/gr';


const NavBar = (props) =>{
    return(
        <Nav>
            <div className='nav-options'>
            <GrTextAlignFull />
            {/* <h1 className='options-name-nav'>{props}</h1> */}
            <h1 className='options-name-nav'>Dashboard</h1>
            </div>

            <div>
                <FiMail />
                <HiOutlineBell />
                <GrTextAlignFull />
            </div>
        </Nav>

    )
}


export default NavBar;

const Nav = styled.div`
   display: flex;

    .nav-options{
        display: flex;
    }

`

