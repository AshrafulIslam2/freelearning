import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContexts } from "../UserContext/UserContext";

const PrivetRoute = ({ children }) => {
  const { Duser, loder } = useContext(AuthContexts);
  const location = useLocation();
  if (loder) {
    return (
      <div>
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (Duser && Duser.uid) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivetRoute;
