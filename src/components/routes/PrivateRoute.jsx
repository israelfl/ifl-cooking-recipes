import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";
import Navbar from "../Navbar";

function PrivateRoute() {
  const { isAuthenticated, user } = useAuthContext();

  if (!isAuthenticated) return <Navigate to={LOGIN} />;

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default PrivateRoute;
