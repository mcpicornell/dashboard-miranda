
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BookingsPage from "./pages/bookings/BookingsPage";
import BookingsInfoPage from './pages/bookings/BookingsInfoPage';
import RoomsPage from "./pages/rooms/RoomsPage";
import RoomsAddPage from "./pages/rooms/RoomsAddPage";
import ContactPage from "./pages/ContactPage";

import UsersPage from "./pages/users/UsersPage";
import UsersAddPage from "./pages/users/UsersAddPage";
import UsersEditPage from "./pages/users/UsersEditPage";
import { PrivateRoute } from './components/PrivateRoute';
import { Layout } from './components/Layout';
import { useState } from 'react';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import {store} from './app/store'
// import { useLocation } from 'react-router-dom';

function App() {

  // const location = useLocation();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("auth"));

  useEffect(() => {
    if (authenticated) {
      localStorage.setItem("auth", "true");
    } else {
      localStorage.removeItem("auth");
    }
  }, [authenticated]);

  // const getTitle = (pathname) => {
  //   switch (pathname) {
  //     case "/":
  //       return "Dashboard";
  //     case "/rooms":
  //       return "Rooms";
  //     case "/bookings":
  //       return "Bookings";
  //     case "/guest":
  //       return "Guest";
  //     case "/contact":
  //       return "Contact";
  //     default:
  //       return "Dashboard";
  //   }
  // };

  return (
    <Provider store={store}>

    
    <BrowserRouter>

        <Routes>
          <Route path="/login" element={<LoginPage setAuthenticated={setAuthenticated}/>} />

          <Route element={<PrivateRoute auth={authenticated}/>}> 
            <Route element={<Layout />}>

                <Route exact path="/" element={<Dashboard />} />

                <Route exact path="/bookings" element={<BookingsPage />} />
                <Route path="/bookings/:id" element={<BookingsInfoPage/>} />

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
    </Provider>
  );
}

export default App;
