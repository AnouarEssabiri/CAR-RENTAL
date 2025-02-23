import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../config/config.firebase";

const PrivateRoute = () => {

  const user = auth.currentUser;

  return user ? <Outlet /> : <Navigate to="/Member_login" />;
};

export default PrivateRoute;
