import styled from "styled-components"
import {BsTelephoneFill} from "react-icons/bs"
import {BsThreeDotsVertical} from "react-icons/bs"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteUser } from "../features/asyncThunk"

export const RowContent = (props) => {
    const dispatch = useDispatch();
    const [deleteOption, setdeleteOption] = useState(false);

    const showDeleteOption = (event) => {
        setdeleteOption(prevState => !prevState);
    }

    const deleteUserClick = () => {
        dispatch(deleteUser(props.info))
    }
    

    return (
        <>
        <Container >
            <NameInfo>
                    <ImgContainer>
                        <img src={props.info.photo}/>
                    </ImgContainer>
                    <NameProperties>
                        <h5>{props.info.name}</h5>
                        <ElementGreyName>#{props.info.id}</ElementGreyName>
                        <ElementGreyName>{props.info.email}</ElementGreyName>
                        <ElementGreyName>{props.info.startDate}</ElementGreyName>
                    </NameProperties>
                    
            </NameInfo>

            <Description>
                    <ElementGrey>{props.info.descriptionJob}</ElementGrey>
            </Description>

            <Contact>
                    <BsTelephoneFill className="rowContent__telephoneIcon"/>
                    <ElementGrey>{props.info.contact}</ElementGrey>
            </Contact>

            <Status >
                <StatusSpan status={props.info.status}>{props.info.status}</StatusSpan>
                <DeleteButton onClick={showDeleteOption}>
                    <BsThreeDotsVertical />
                    <DeleteOption active={deleteOption} onClick={deleteUserClick}>
                        <span>Delete</span>
                    </DeleteOption>
                </DeleteButton>
            </Status>
        </Container>
        </>
    )
}

const Container = styled.section`
padding: 30px;
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
width: auto;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 0px 0px 10px 10px;
opacity: 1;
align-items: center;
margin-top: 1px;
`
const NameInfo = styled.div`
display: flex;
width: auto;
align-items: center;
`

const ImgContainer = styled.div`
width: auto;
    img{
        border-radius: 10px;
    }

`

const ElementGrey = styled.span`
    margin-top: 0px;
    font: normal normal normal 14px "Poppins";
    letter-spacing: 0px;
    color: #393939;
    opacity: 1; 
`

const ElementGreyName = styled.span`
    margin-top: 5px;
    font-size: 14px;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1; 
`

const NameProperties = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
    h5{
        margin: 0px;
        padding-bottom: 10px;
        font-size: 16px;
        letter-spacing: 0px;
        color: #212121;
        opacity: 1;
    }

`

const Description = styled.div`
width: auto;
`

const Contact = styled.div`
display: flex;
align-items: center;
text-align: left;

width: auto;
    .rowContent__telephoneIcon{
        margin-right: 10px;
    }
`

const Status = styled.div`
width: auto;
font: normal normal 600 14px/21px 'Poppins';
letter-spacing: 0px;
opacity: 1;
display: flex;
justify-content: space-between;
align-items: center;
`

const StatusSpan = styled.span`
margin-left: 20px;
text-transform: uppercase;
font: normal normal 600 14px/21px 'Poppins';
color: ${props => props.status==="Active" ? "#5AD07A" : "#E23428" }
`

const DeleteButton = styled.a`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover{
        cursor: pointer;
    }
    
`

const DeleteOption = styled.a`
    color: #E23428;
    background-color: #F8F8F8;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    visibility: ${props => props.active === true ? "visible" : "hidden"};
    font-size: 16px;
    .span{
        font-size: 16px;
        font-weight: 400;
        opacity: 1;
    }
`