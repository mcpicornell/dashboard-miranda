import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsersStatus, getUsersData, getUsersError} from '../../features/users/UsersSlice'
import { fetchUsers, addUser, deleteUser } from "../../features/asyncThunk";
import usersJSON from "../../data/users.json";
import styled from "styled-components";

const UsersPage = () =>{

     const dispatch = useDispatch();
     
     const usersStatus = useSelector(getUsersStatus);
     const usersData = useSelector(getUsersData);
     const usersError = useSelector(getUsersError);

    useEffect(() => {
        if (usersStatus == "idle") {
          dispatch(fetchUsers(usersJSON))
        }
      }, [usersStatus], dispatch);

      const user = {
        id: 4,
        name: "user"
      }

      const addUserClick = () => {
        dispatch(addUser(user))
        console.log("Se añade usuario")
        console.log(usersData)
    }

    const deleteUserClick = () => {
        dispatch(deleteUser(user))
        console.log("Se elimina usuario")
        console.log(usersData)
    }
      
    return (
        <>
        <h1>UsersPage</h1>

            <Button onClick={addUserClick}>
                UPLOAD
            </Button>

            <Button onClick={deleteUserClick}>
                DELETE
            </Button>
        </>
        
    )
};

export default UsersPage;

const Button = styled.button`


`