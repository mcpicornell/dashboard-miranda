
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LateralMenu from '../components/LateralMenu.jsx';
import NavBar from '../components/Navbar.jsx';

export const Layout = (props) => {

    const [show, setShow] = useState(true);

    const showMenuClickHandler = (event) => {
        setShow(!show);
    };

    const logOutClickHandler = (event) => {
        props.setAuthenticated(false);
    }


    return (
        // <MenuLayout>
        //     {show && <LeftMenu>
        //         <SideBar/>
        //     </LeftMenu>}
        
        //     <RightPage>
        //         <TopBarWrapper>
        //             <TopBarLeft>
        //                 <ShowButton onClick={showMenuClickHandler}>{show ? <img src={arrowLeft} alt="" /> : <img src={arrowRight} alt="" />} </ShowButton>
        //                 <SectionTitle>Section</SectionTitle>
        //             </TopBarLeft>
            
        //          <TopBarIcons>
        //             <IconButton><img src={message} alt="" /></IconButton>
        //             <IconButton><img src={bell} alt="" /></IconButton>
        //             <IconButton onClick={logOutClickHandler}><img src={logout} alt="" /></IconButton>
        //         </TopBarIcons>
            
        //         </TopBarWrapper>
        //         <Content>
        //             <Outlet/>
        //         </Content>
        //     </RightPage>
        // </MenuLayout>
        <>
            <LateralMenu/>
            <NavBar  props ={props} />
        </>

        
    );
};

