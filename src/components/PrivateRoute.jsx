import { Navigate, Outlet } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../UserContext";

export const PrivateRoute = () => {

    const {state, dispatch} = useContext(UserContext);

    if (state === true) {
        return <Outlet/>;
        
    }
    return <Navigate to="/login" />
    
}