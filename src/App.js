import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BookingsPage from "./pages/BookingsPage";
import RoomsPage from "./pages/RoomsPage";
import RoomsAddPage from "./pages/RoomsAddPage";

import ContactPage from "./pages/ContactPage";

import UsersPage from "./pages/UsersPage";
import UsersAddPage from "./pages/UsersAddPage";
import UsersEditPage from "./pages/UsersEditPage";
import { PrivateRoute } from './components/PrivateRoute';
import { Layout } from './components/Layout';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [authenticated, setAuthenticated] = useState(localStorage.getItem("auth"));

  useEffect(() => {
    if (authenticated) {
      localStorage.setItem("auth", "true");
    } else {
      localStorage.removeItem("auth");
    }
  }, [authenticated]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<LoginPage setAuthenticated={setAuthenticated}/>} />

        <Route element={<PrivateRoute auth={authenticated}/>}> 
          <Route element={<Layout setAuthenticated={setAuthenticated}/>}>

              <Route exact path="/" element={<Dashboard />} />

              <Route exact path="/bookings" element={<BookingsPage />} />
              <Route path="/bookings/:id" element={<BookingsPage/>} />

              <Route exact path="/rooms" element={<RoomsPage />}/>
              <Route path='/rooms/addRoom' element={<RoomsAddPage />} />

              <Route exact path='/contact' element={<ContactPage />} />

              <Route exact path='/users' element={<UsersPage/>} /> 
              <Route path='/users/addUser' element={<UsersAddPage/>} /> 
              <Route path='/users/:id' element={<UsersEditPage/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
