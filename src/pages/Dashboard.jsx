import styled from "styled-components";
import {BiBed} from "react-icons/bi"
import {RiCalendarCheckLine} from "react-icons/ri"
import {IoLogOutOutline} from "react-icons/io5"
import {IoLogInOutline} from "react-icons/io5"


const Dashboard = () =>{
    return (
        <>

        <Title>
            <h1 className="title">Dashboard</h1>
        </Title>
        
            <Header>
                <HeaderElements>
                    <BiBed className='bed' />
                    <ElementsInformation>
                        <span>8461</span>
                        <h4 className="h4">New Booking</h4>
                    </ElementsInformation>
                </HeaderElements>

                <HeaderElements>
                    <RiCalendarCheckLine className='bed' />
                    <ElementsInformation>
                        <span>963</span>
                        <h4 className="h4">Scheduled Room</h4>
                    </ElementsInformation>
                </HeaderElements>

                <HeaderElements>
                    <IoLogInOutline className='bed' />
                    <ElementsInformation>
                        <span>753</span>
                        <h4 className="h4">Check In</h4>
                    </ElementsInformation>
                </HeaderElements>

                <HeaderElements>
                    <IoLogOutOutline className='bed' />
                    <ElementsInformation>
                        <span>516</span>
                        <h4 className="h4">Check Out</h4>
                    </ElementsInformation>
                </HeaderElements>
            </Header>
        </>
    )
};

export default Dashboard;

const Title = styled.div`
        z-index: 0;
        position: relative;
        top: 0px;
        left: 100px;
        height: 10px;
        

        .title{
            width: 159px;
            height: 10px;
            font: normal normal 600 28px/42px Poppins;
            letter-spacing: 0px;
            color: #262626;
        }
`

const Header = styled.header`
    margin-top: 150px;
    margin-left: -100px;
    display: flex;

    

    .bed{
        width: 28px;
        height: 20px;
        margin-right: 22px;
        padding: 20px;
        background: #FFEDEC 0% 0% no-repeat padding-box;
        border-radius: 8px;
        opacity: 1;
        color: #E23428;
    }
`;

const HeaderElements = styled.div`
    display: flex;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    opacity: 1;
    height: 125px;
    align-items: center;
    margin-right: 38px;
    padding-right: 100px;
    padding-left: 30px;
`;
const ElementsInformation = styled.div`
    margin-top: 0px;
    margin-right: 38px;
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .h4{
    margin: 0px;
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
    opacity: 1;
    width: 100px;
    
    }
    span{
        text-align: left;
        font: normal normal 600 30px/46px Poppins;
        letter-spacing: 0px;
        color: #393939;
        opacity: 1;
    }
`;