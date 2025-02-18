import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RentMyCar from "./pages/RentMyCar";
import Cars from "./pages/Cars";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import CarDetails from "./components/CarDetails";
import FormSeller from "./pages/test/FormSeller";
import FormInfoSeller from "./pages/test/FormInfoSeller";
import CarViewInMap from "./pages/CarViewInMap";
import Map from "./components/map/Map";
import CarsInfo from "./pages/test/CarsInfo";
import MapUser from "./components/map/MapUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/RentMyCar" element={<RentMyCar />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/order" element={<Order />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/car-details" element={<CarDetails />} />
      <Route path="/seller" element={<FormSeller />} />
      <Route path="/info" element={<FormInfoSeller />} />
      <Route path="/Mapi" element={<CarViewInMap />} />
      <Route path="/map" element={<Map />} />
      <Route path="/mapuser" element={<MapUser />} />
      <Route path="/carinfo" element={<CarsInfo />} />
    </Routes>
  );
}

export default App;
