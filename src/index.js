import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
  
    {/* <BrowserRouter>
      <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route exact path="/bookings" element={<BookingsPage />} />
              <Route path="/bookings/:id" element={<BookingsPage/>} />

              <Route exact path="/rooms" element={<RoomsPage />}/>
              <Route path='/rooms/addRoom' element={<RoomsAddPage />} />

              <Route path='/contact' element={<ContactPage />} />

              <Route exact path='/users' element={<UsersPage/>} /> 
              <Route path='/users/addUser' element={<UsersAddPage/>} /> 
              <Route path='/users/:id' element={<UsersEditPage/>} /> 
      </Routes>
    </BrowserRouter> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
