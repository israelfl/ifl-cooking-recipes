import { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import Navbar from "../Navbar";
import Menu from "../private/Menu";

import { useServices } from "../../services";

function PrivateRoute() {
  const navigate = useNavigate();
  const { user, userProfile } = useServices();

  useEffect(() => {
    if (userProfile.roles) {
      if (!userProfile.roles.includes("user")) return navigate(LOGIN);
    }
  }, [navigate, userProfile.roles]);

  const conditionalRender = () => {
    if (user === null) return <Navigate to={LOGIN} />;
    else
      return (
        <div>
          <Navbar />
          <div className="container-fluid">
            <div className="row flex-nowrap">
              <Menu />
              <div className="col ps-5 py-4">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      );
  };

  return conditionalRender();
}

export default PrivateRoute;
