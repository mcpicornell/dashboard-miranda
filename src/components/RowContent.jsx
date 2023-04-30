import styled from "styled-components"
import {BsTelephoneFill} from "react-icons/bs"

export const RowContent = (props) => {

    return (
        <>
        <Container>
            <NameInfo>
                    <ImgContainer>
                        <img src={props.info.photo}/>
                    </ImgContainer>
                    <NameProperties>
                        <h4>{props.info.name}</h4>
                        <h5>{props.info.id}</h5>
                        <h5>{props.info.email}</h5>
                        <h5>{props.info.startDate}</h5>
                    </NameProperties>
                    
            </NameInfo>

            <JobDesk>
                    <h5>{props.info.descriptionJob}</h5>
            </JobDesk>

            <Contact>
                    <BsTelephoneFill className="rowContent__telephoneIcon"/>
                    <h5>{props.info.contact}</h5>
            </Contact>

            <Status>
                <h5>{props.info.status}</h5>
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
border-radius: 10px;
opacity: 1;
align-items: center;
`
const NameInfo = styled.div`
display: flex;
width: auto;
align-items: center;
`

const ImgContainer = styled.div`
width: auto;
`

const NameProperties = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
justify-content: center;

h4{
    margin: 0px;
}
h5{
    margin: 0px;
}
`

const JobDesk = styled.div`
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
`

