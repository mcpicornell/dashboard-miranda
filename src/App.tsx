
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BookingsPage from "./pages/bookings/BookingsPage";
import BookingsInfoPage from './pages/bookings/BookingsInfoPage';
import RoomsPage from "./pages/rooms/RoomsPage";
import RoomsAddPage from "./pages/rooms/RoomsAddPage";
import ContactPage from "./pages/ContactPage";
import BookingAddPage from './pages/bookings/BookingAddPage';
import UsersPage from "./pages/users/UsersPage";
import UsersAddPage from "./pages/users/UsersAddPage";
import UsersEditPage from "./pages/users/UsersEditPage";
import { PrivateRoute } from './components/PrivateRoute';
import { Layout } from './components/Layout';
import { useReducer } from 'react';
import { UserContext } from './UserContext';


export interface State {
  auth: boolean,
  email: string,
  userName: string
}

export interface Action {
  type: string,
  payload?: any,
  value?: {
    userName: string,
    email: string
  }
  
}

export const initialState: State = {
  auth: false,
  email: "",
  userName: ""
};

// interface IProvider {
//   children: JSX.Element | JSX.Element[]
// }


export const reducer = (state: typeof initialState, action: Action) => {
if(action.type === "auth"){
  state = {...state, auth: true, userName: action.value!.userName, email: action.value!.email};
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
  return (
    <UserContext.Provider value ={{state, dispatch}}>

    <BrowserRouter>

        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute />}> 
            <Route element={<Layout />}>

                <Route path="/" element={<Dashboard />} />

                <Route path="/bookings" element={<BookingsPage />} />
                <Route path="/bookings/:id" element={<BookingsInfoPage/>} />
                <Route path="/bookings/addBooking" element={<BookingAddPage/>} />

                <Route path="/rooms" element={<RoomsPage />}/>
                <Route path='/rooms/addRoom' element={<RoomsAddPage />} />

                <Route path='/contact' element={<ContactPage />} />

                <Route path='/users' element={<UsersPage/>} /> 
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
