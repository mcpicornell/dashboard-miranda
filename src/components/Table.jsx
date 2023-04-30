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
      startDate: "Start Date",
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
        <TitleRow />

          <Row>
            {content}
          </Row>
        
        </>
      )

  }
  
};


const Row = styled.div`
margin-top: 150px;
width: 100%;
`



