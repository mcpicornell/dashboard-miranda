import { StatusButton, NotesButton } from "../components/Button";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {RowContent}  from "../components/RowContent"
import { NavLink } from "react-router-dom";

export const Table = (props) => {
  const [allEmployeeActivate, setAllEmployeeActivate] = useState(false);
  const [activeEmployeeActivate, setActiveEmployeeActivate] = useState(false);
  const [inactiveEmployeeActivate, setInactiveEmployeeActivate] = useState(false);
  const [searcher, setSearcher] = useState("");
  const location = useLocation();
  const dataArr = props.data;
  const content = [];
  

  const allEmployeeActivateOnClick = (event) => {
    setAllEmployeeActivate(prevState => !prevState);
    if(activeEmployeeActivate === true){
      setActiveEmployeeActivate(false)
    }
    else if(inactiveEmployeeActivate === true){
      setInactiveEmployeeActivate(false)
    }
  };

  const activeEmployeeActivateOnClick = (event) => {
    setActiveEmployeeActivate(prevState => !prevState);
    if(allEmployeeActivate === true){
      setAllEmployeeActivate(false)
    }
    else if(inactiveEmployeeActivate === true){
      setInactiveEmployeeActivate(false)
    }
  };

  const inactiveEmployeeActivateOnClick = (event) => {
    setInactiveEmployeeActivate(prevState => !prevState);
    if(allEmployeeActivate === true){
      setAllEmployeeActivate(false)
    }
    else if(activeEmployeeActivate === true){
      setActiveEmployeeActivate(false)
    }
  };


  switch(location.pathname){
    case "/rooms":

    dataArr.forEach((data) => { 
      const info = 
      {
        photo: data.photo,
        roomNumber: data.roomNumber,
        roomType: data.roomType,
        id: data.id,
        ameneties: data.ameneties,
        price: data.price,
        offerPrice: data.offerPrice,
        status: data.status
      }
      console.log(info)

      content.push(
          <>
            <RowContent info={info}/>
          </>
        );
        
      });
      return(
        <>

          <TableStyled>
            <TopOptions>
                <OptionsFilter>
                  <FilterEmployee filterActive={allEmployeeActivate} onClick={allEmployeeActivateOnClick}>
                    <span>All Rooms</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={activeEmployeeActivate} onClick={activeEmployeeActivateOnClick}>
                    <span>Active Employee</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={inactiveEmployeeActivate} onClick={inactiveEmployeeActivateOnClick}>
                    <span>Inactive Employee</span>
                  </FilterEmployee>

                </OptionsFilter>
                <OptionsCreate>
                    <ButtonCreateEmployee to={'/users/addUser'}>
                      <span>+ New Room</span>
                    </ButtonCreateEmployee>
                </OptionsCreate>
            </TopOptions>
            <TitleRow>
              <TitleRowElement className="titleRowElementName"><span>{props.roomTitles.roomName}</span></TitleRowElement>
              <TitleRowElement>{props.roomTitles.roomType}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.amenities}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.price}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.offerPrice}</TitleRowElement>
              <TitleRowElement>{props.roomTitles.status}</TitleRowElement>
            </TitleRow>

            <Rows>
            {content}
            </Rows> 
          </TableStyled>

        </>
      );
    case "/bookings":
      return(
        <></>
      );
    case "/users":
    dataArr.forEach((data) => { 
      const info = 
      {
        contact: data.contact,
        descriptionJob: data.descriptionJob,
        email: data.email,
        id: data.id,
        name: data.name,
        photo: data.photo,
        startDate: data.startDate,
        status: data.status
      }

      content.push(
          <>
            <RowContent info={info}/>
          </>
        );
        
      });
      

      return(
        <>

          <TableStyled>
            <TopOptions>
                <OptionsFilter>
                  <FilterEmployee filterActive={allEmployeeActivate} onClick={allEmployeeActivateOnClick}>
                    <span>All Employee</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={activeEmployeeActivate} onClick={activeEmployeeActivateOnClick}>
                    <span>Active Employee</span>
                  </FilterEmployee>
                  <FilterEmployee filterActive={inactiveEmployeeActivate} onClick={inactiveEmployeeActivateOnClick}>
                    <span>Inactive Employee</span>
                  </FilterEmployee>

                  <FilterSearcher placeholder="Search employee by name" onChange={e => setSearcher(e.target.value)}/>

                </OptionsFilter>
                <OptionsCreate>
                    <ButtonCreateEmployee to={'/users/addUser'}>
                      <span>+ New Employee</span>
                    </ButtonCreateEmployee>
                </OptionsCreate>
            </TopOptions>
            <TitleRow>
              <TitleRowElement className="titleRowElementName"><span>{props.titleRowUsers.name}</span></TitleRowElement>
              <TitleRowElement>{props.titleRowUsers.description}</TitleRowElement>
              <TitleRowElement>{props.titleRowUsers.contact}</TitleRowElement>
              <TitleRowElement>{props.titleRowUsers.status}</TitleRowElement>
            </TitleRow>

            <Rows>
            {content}
            </Rows> 
          </TableStyled>
          
        
        </>
      )

  }
  
};

const TableStyled = styled.section`

display: flex;
flex-direction: column;
margin-left: 40px;
width: 90%;
border-radius: 20px;
`

const TopOptions = styled.div`
  margin-top: 160px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 5px;
  padding-bottom: 15px;

`

const OptionsFilter = styled.div`
  display: flex;
  justify-content: space-around;

`

const FilterEmployee = styled.a`
  padding-right: 30px;
  font-weight: 600;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  opacity: 1;
  color: ${props => props.filterActive === true ? "#135846" : "#6E6E6E"};
  text-decoration: ${props => props.filterActive === true ? " underline 1px solid #135846" : "underline 0.5px solid #6E6E6E"};
  text-underline-offset: 20px;
  
  :hover{
    cursor: pointer;
  }
`

const FilterSearcher = styled.input`
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
`

const OptionsCreate = styled.div`

`

export const ButtonCreateEmployee = styled(NavLink)`
  background-color: #135846;
  border-radius: 15px;
  padding: 10px 25px 10px 25px;
  font: normal normal medium 16px/25px "Poppins";
  letter-spacing: 0px;
  color: #FFFFFF;
  text-decoration: none;
`

const Rows = styled.div`
margin-top: 0px;
width: 100%;
`

const TitleRow = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
background-color: #FFFFFF;
text-align: left;
font: normal normal 600 18px/27px 'Poppins';
padding-top: 20px;
padding-bottom: 10px;
border-radius: 10px 10px 0px 0px;
`

const TitleRowElement = styled.span`

  span{
    padding-left: 30px;
  }


`

