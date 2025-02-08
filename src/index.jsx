import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import HomeTest from './pages/test/HomeTest';
// import Dashboard from './pages/Dashboard';
// import Booking from './pages/Booking';
// import Cars from './pages/Cars';
import Home from './pages/Home';
// import Order from './pages/Order';
import Payment from './pages/Payment';
// import CarDetails from './components/CarDetails';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HomeTest /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <Home />
      {/* <Dashboard /> */}
    {/* <Booking /> */}
    {/* <CarDetails /> */}
    {/* <Cars /> */}
    {/* <Order /> */}
    <Payment />
  </React.StrictMode>
);
