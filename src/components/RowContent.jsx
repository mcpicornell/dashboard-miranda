import styled from "styled-components"
import {BsTelephoneFill} from "react-icons/bs"

export const RowContent = (props) => {

    return (
        <>
        <h1>HOLAAAAAAAAAAAAAAAAAAAAAAAA</h1>
        <Container>
            <NameInfo>
                    <ImgContainer>
                        <img src={props.info.photo}/>
                    </ImgContainer>
                    <h4>{props.info.name}</h4>
                    <h5>{props.info.id}</h5>
                    <h5>{props.info.email}</h5>
                    <h5>{props.info.startDate}</h5>
                </NameInfo>

                <JobDesk>
                    <h5>{props.info.descriptionJob}</h5>
                </JobDesk>

                <Contact>
                    <BsTelephoneFill />
                    <h5>{props.info.contact}</h5>
                </Contact>

                <Status>
                <h5>{props.info.status}</h5>
                </Status>
        </Container>
            
        
        </>
    )
}

const Container = styled`
display: flex;
flex-direction: row;
width: auto;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 20px;
opacity: 1;
margin-top: 200px;

`

const ImgContainer = styled`
width: auto;
`

const NameInfo = styled`
width: auto;
`

const JobDesk = styled`
width: auto;
`

const Contact = styled`
width: auto;
`

const Status = styled`
width: auto;
`