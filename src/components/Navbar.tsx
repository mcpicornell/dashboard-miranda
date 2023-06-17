import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import LateralMenu from "./LateralMenu";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { deleteDataLocalStorage } from "../data/localStorage";

interface PropsNavbar {
  title: string;
}

interface PropsOpen {
  open: boolean;
}

const NavBar = (props: PropsNavbar) => {
  const { dispatch } = useContext(UserContext);
  const logOutClickHandler = (event: React.MouseEvent<SVGElement>) => {
    event.preventDefault();
    deleteDataLocalStorage("auth");
    dispatch({ type: "logOut" });
  };
  const [open, setOpen] = useState(false);

  const closeOpenMenu = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <LateralMenu open={open} />

      <Nav>
        <NavSection>
          <OptionsDiv open={open}>
            <OpenLateralMenuArrowContainer open={open}>
              <BsChevronLeft
                className="arrow-left"
                style={{ color: "rgb(57, 57, 57)" }}
                onClick={closeOpenMenu}
              />
              <BsChevronRight
                className="arrow-right"
                style={{ color: "rgb(57, 57, 57)" }}
                onClick={closeOpenMenu}
              />
            </OpenLateralMenuArrowContainer>
            <Title className="options__title-h1">{props.title}</Title>
          </OptionsDiv>

          <OptionsDiv open={open}>
            <FiMail className="options__elements-nav" />
            <HiOutlineBell className="options__elements-nav" />
            <MdLogout
              className="options__elements-nav"
              onClick={logOutClickHandler}
            />
          </OptionsDiv>
        </NavSection>
      </Nav>
    </>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 100px;
  padding-left: 20px;
  display: inline-block;
  position: absolute;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000005;
  opacity: 1;

  .options__elements-nav {
    margin-right: 20px;
    width: 27px;
    height: 24px;
    padding-left: 20px;
    color: #799283;
    opacity: 1;
    :hover {
      cursor: pointer;
    }
  }
`;

const NavSection = styled.section`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionsDiv = styled.div<PropsOpen>`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #799283;
  margin-left: ${(props) => (props.open === false ? "250px" : "0px")};
`;
const Title = styled.h1`
  position: relative;
  margin-left: -100px;
  font: normal normal 600 28px/42px "Poppins";
  font-size: 24px;
  letter-spacing: 0px;
  color: #262626;
  opacity: 1;
  width: 315px;
  padding-top: 2px;
`;

const OpenLateralMenuArrowContainer = styled.div<PropsOpen>`
  position: relative;
  width: 100%;
  :hover {
    cursor: pointer;
  }
  .arrow-left {
    position: absolute;
    color: #799283;
    opacity: 1;
    top: -7px;
    visibility: ${(props) => (props.open === false ? "visible" : "hidden")};
  }
  .arrow-right {
    position: absolute;
    top: -7px;
    color: #799283;
    opacity: 1;
    visibility: ${(props) => (props.open === true ? "visible" : "hidden")};
  }
`;
