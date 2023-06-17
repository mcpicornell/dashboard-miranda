import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

export const Layout = () => {
  const location = useLocation();

  const getTitleSections = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";

      case "/bookings":
        return "Bookings";

      case "/bookings/addBooking":
        return "New Booking";

      case "/rooms":
        return "Rooms";

      case "/rooms/addRoom":
        return "New Room";

      case "/contact":
        return "Contact";

      case "/users":
        return "Users";

      case "/users/addUser":
        return "New User";

      case "/user/":
        return "Edit User";

      default:
        if (location.pathname.startsWith("/bookings/")) {
          return "Booking Details";
        }
        return "Edit User";
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <NavBar title={getTitleSections()} />
        <Outlet />
      </div>
    </>
  );
};
