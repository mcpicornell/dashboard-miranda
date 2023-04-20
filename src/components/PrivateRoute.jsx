import { Navigate, Outlet } from "react-router-dom"


export const PrivateRoute = (props) => {
    if (!props.auth) {
        return <Navigate to="/login" />
    }
    return <Outlet/>;
}