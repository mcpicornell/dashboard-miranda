import { StatusButton, NotesButton } from "../components/Button";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {RowContent}  from "../components/RowContent"

export const Table = (props) => {
  
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [targetId, setTargetId] = useState("")
  const location = useLocation();
  const dataArr = props.data;
  const content = [];


  switch(location.pathname){
    case "/users":

    const titleRow = {
      name: "Name",
      description: "Description",
      contact: "Contact",
      status: "Status"
    }

    dataArr.forEach((data) => { 
      const savedData = 
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
            <RowContent info={savedData}/>
          </>
        );
        
      });
      

      return(
        <>

        <TableStyled>
          <TitleRow>
            <TitleRowElement className="titleRowElementName"><span>{titleRow.name}</span></TitleRowElement>
            <TitleRowElement>{titleRow.description}</TitleRowElement>
            <TitleRowElement>{titleRow.contact}</TitleRowElement>
            <TitleRowElement>{titleRow.status}</TitleRowElement>
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

const Rows = styled.div`
margin-top: 0px;
width: 100%;
`

const TitleRow = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
margin-top: 150px;
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

