
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
import { useContext, useReducer, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from './UserContext';




const initialState = {
  auth: false,
  email: "",
  userName: ""
};
const reducer = (state, action) => {
if(action.type === "auth"){
  state = {...state, auth: true, userName: action.value.userName, email: action.value.email};
  return state;
} 
else if (action.type === "logOut"){
  state = {...state, auth: false};
  return state;
  }

else{
  state = {...state, auth: false};
  return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   if (state == true) {
  //     localStorage.setItem("auth", "true");
  //   } else {
  //     localStorage.removeItem("auth");
  //   }
  // });
  
  return (
    <UserContext.Provider value={{state, dispatch}}>

    <BrowserRouter>

        <Routes>
          <Route path="/login" element={<LoginPage auth={state} />} />

          <Route element={<PrivateRoute auth={state}/>}> 
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
      </UserContext.Provider>
   
  );
}

export default App;
