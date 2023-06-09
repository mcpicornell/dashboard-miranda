import styled from "styled-components";
import {
  MdOutlineDashboard,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { VscKey } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserById } from "../features/users/fetchUsers";
import { IUsers } from "../features/interfaces";
import { useEffect } from "react";
import { useState } from "react";
import { getObjInLocalStorage } from "../data/localStorage";

export const logoImg = require("../img/logoCompleto.PNG");

interface PropsLateralMenu {
  open: boolean;
}

export const validateImageFormat = (imageUrl: string): string => {
  const img = new Image();
  img.src = imageUrl;

  if (img.complete && img.naturalWidth > 0) {
    return imageUrl;
  } else {
    return "https://assets.3dtotal.com/neo-arc-04.ycg6wu.expanded.fjn.jpg";
  }
};

const LateralMenu = (props: PropsLateralMenu) => {
  const nav = useNavigate();

  const [user, setUser] = useState<IUsers | null>();

  const getUser = async () => {
    try {
      const objInLocalStorage = getObjInLocalStorage("auth");
      if (objInLocalStorage && objInLocalStorage.id) {
        const user = await getUserById(objInLocalStorage.id);
        setUser(user);
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  useEffect(() => {
    if(!user){
      getUser();
    }
  }, [user]);



  const navToEditUser = () => {
    nav(`/users/${user?._id}`, { state: user });
  };

  return (
    <Aside open={props.open}>
      <AsideLogo>
        <img className="logo__img" src={logoImg} alt='user img'/>
      </AsideLogo>

      <AsideList className="aside__list">
        <div className="list__container-element">
          <LinkList to="/">
            <MdOutlineDashboard className="container-element__svg" />
            <span className="container-element__name-list-element">
              Dashboard
            </span>
          </LinkList>
        </div>
      </AsideList>

      <AsideList className="aside__list">
        <div className="list__container-element">
          <LinkList to="/bookings">
            <RiCalendarEventLine className="container-element__svg" />
            <span className="container-element__name-list-element">
              Bookings
            </span>
          </LinkList>
        </div>
      </AsideList>

      <AsideList className="aside__list">
        <div className="list__container-element">
          <LinkList to="/rooms">
            <VscKey className="container-element__svg" />
            <span className="container-element__name-list-element">Rooms</span>
          </LinkList>
        </div>
      </AsideList>

      <AsideList className="aside__list">
        <div className="list__container-element">
          <LinkList to="/contacts">
            <MdOutlinePermContactCalendar className="container-element__svg" />
            <span className="container-element__name-list-element">
              Contact
            </span>
          </LinkList>
        </div>
      </AsideList>

      <AsideList className="aside__list">
        <div className="list__container-element">
          <LinkList to="/users">
            <BiUser className="container-element__svg" />
            <span className="container-element__name-list-element">Users</span>
          </LinkList>
        </div>
      </AsideList>

      <AsideCard className="aside__card">
        <img
          className="card__img-aside-card"
          src={validateImageFormat(user?.photo!)}
        alt='user img'/>
        <h4 className="card__user-name">{user?.name}</h4>
        <h5 className="card__user-email">{user?.email}</h5>
        <a className="card__edit-button" onClick={navToEditUser}>
          <span className="edit__button-span-card">Edit</span>
        </a>
      </AsideCard>

      <div className="aside__bottom">
        <span className="bottom-title">Travl Hotel Admin Dashboard</span>
        <span className="bottom-subtitle">© 2020 All Rights Reserved</span>
      </div>
    </Aside>
  );
};

const LinkList = styled(NavLink)`
  text-decoration: none;
  color: #5d5449;
  font-weight: 600;
  display: flex;
  align-items: center;

  .container-element__name-list-element {
    color: #5d5449;
  }

  &.active {
    color: red;
  }

  &.active span {
    color: red;
  }

  &.container-element__svg {
    color: red;
  }
`;

const AsideLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 62px;
  width: 100%;
  justify-content: space-between;

  .logo__img {
    width: 220px;
    margin-right: 5px;
  }
`;

const AsideList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  background: hsla(0, 0%, 100%, 1) 0% 0% no-repeat padding-box;
  opacity: 1;
  color: hsla(144, 10%, 52%, 1);
`;

const AsideCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: -5px;
  margin-right: 0px;
  width: 90%;
  margin-top: 5px;
  margin-bottom: 62px;
  padding-bottom: 0px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  opacity: 1;
  text-align: center;

  .card__img-aside-card {
    width: 70px;
    background: #c5c5c5 0% 0% no-repeat padding-box;
    background: #c5c5c5 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
  }
  .card__user-name {
    color: #393939;
    font: normal normal medium 16px/25px "Poppins";
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
    margin: 10px 0px 8px 0px;
  }
  .card__user-email {
    margin: 0px 0px 10px 0px;
    text-align: center;
    font: normal normal 300 12px/18px "Poppins";
    letter-spacing: 0px;
    color: #b2b2b2;
    opacity: 1;
  }
  .card__edit-button {
    background: #ebf1ef 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin-bottom: 24px;
    padding-top: 3px;
    padding-right: 50px;
    padding-bottom: 8px;
    padding-left: 50px;
  }
  .edit__button-span-card {
    font: normal normal 600 14px/21px "Poppins";
    letter-spacing: 0px;
    color: #135846;
    opacity: 1;
    margin-bottom: 5px;
    :hover {
      cursor: pointer;
    }
  }
`;

const Aside = styled.aside<PropsLateralMenu>`
  display: inline-block;
  border-radius: 10px;
  margin: 0px;
  padding-top: 32px;
  padding-right: 5px;
  padding-left: 30px;
  width: 220px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 13px 3px 40px #00000005;
  opacity: 1;
  z-index: 2;
  height: 100%;
  position: ${(props) => (props.open === true ? "absolute" : "relative")};
  left: ${(props) => (props.open === true ? "-300px" : "0px")};

  .logo__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container-element__name-list-element {
    margin-left: 26px;
    font-size: 14px;
    line-height: 27px;
    font-family: "Poppins";
    letter-spacing: 0px;
    color: hsla(144, 10%, 52%, 1);
    opacity: 1;
  }

  .aside__bottom {
    display: flex;
    flex-direction: column;
  }

  .bottom-title {
    font: normal normal 600 16px/25px "Poppins";
    font-size: 14px;
    letter-spacing: 0px;
    color: #212121;
    opacity: 1;
    margin-bottom: 5px;
  }
  .bottom-subtitle {
    font: normal normal 300 14px/21px "Poppins";
    font-size: 12px;
    letter-spacing: 0px;
    color: #799283;
    opacity: 1;
    margin-bottom: 24px;
  }
`;

export default LateralMenu;
