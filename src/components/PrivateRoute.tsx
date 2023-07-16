import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../App";

export const PrivateRoute = () => {
  if (isLoggedIn() === true) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};
