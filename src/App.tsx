import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BookingsPage from "./pages/bookings/BookingsPage";
import BookingsInfoPage from "./pages/bookings/BookingsInfoPage";
import BookingAddPage from "./pages/bookings/BookingAddPage";
import RoomsPage from "./pages/rooms/RoomsPage";
import RoomsAddPage from "./pages/rooms/RoomsAddPage";
import ContactPage from "./pages/contacts/ContactPage";
import UsersPage from "./pages/users/UsersPage";
import UsersAddPage from "./pages/users/UsersAddPage";
import UsersEditPage from "./pages/users/UsersEditPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Layout } from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContextProvider } from "./UserContext";


export const isLoggedIn = (): boolean => {
  const authData = localStorage.getItem("auth");
  return !!authData;
};

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter basename="/dashboard-miranda">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/dashboard-miranda" />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/bookings/:id" element={<BookingsInfoPage />} />
              <Route path="/bookings/addBooking" element={<BookingAddPage />} />

              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/rooms/addRoom" element={<RoomsAddPage />} />

              <Route path="/contacts" element={<ContactPage />} />

              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/addUser" element={<UsersAddPage />} />
              <Route path="/users/:id" element={<UsersEditPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </UserContextProvider>
  );
}

export default App;
