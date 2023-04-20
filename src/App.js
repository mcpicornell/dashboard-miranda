import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, PrivateRoute} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BookingsPage from "./pages/BookingsPage";
import RoomsPage from "./pages/RoomsPage";
import RoomsAddPage from "./pages/RoomsAddPage";

import ContactPage from "./pages/ContactPage";

import UsersPage from "./pages/UsersPage";
import UsersAddPage from "./pages/UsersAddPage";
import UsersEditPage from "./pages/UsersEditPage";
function App() {
  return (
    <BrowserRouter>

    
      <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Dashboard />} />

              <Route exact path="/bookings" element={<BookingsPage />} />
              <Route path="/bookings/:id" element={<BookingsPage/>} />

              <Route exact path="/rooms" element={<RoomsPage />}/>
              <Route path='/rooms/addRoom' element={<RoomsAddPage />} />

              <Route path='/contact' element={<ContactPage />} />

              <Route exact path='/users' element={<UsersPage/>} /> 
              <Route path='/users/addUser' element={<UsersAddPage/>} /> 
              <Route path='/users/:id' element={<UsersEditPage/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
