import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Cars from "./pages/Cars";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import CarDetails from "./components/CarDetails";
import FormSeller from "./pages/test/FormSeller";
import FormInfoSeller from "./pages/test/FormInfoSeller";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/order" element={<Order />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/car-details" element={<CarDetails />} />
      <Route path="/seller" element={<FormSeller />} />
      <Route path="/info" element={<FormInfoSeller />} />
    </Routes>
  );
}

export default App;
