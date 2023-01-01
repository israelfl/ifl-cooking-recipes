import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function PublicRoute() {

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default PublicRoute;
