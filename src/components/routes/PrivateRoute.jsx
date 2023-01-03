import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";
import Navbar from "../Navbar";
import Menu from "../private/Menu";

function PrivateRoute() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user.profile?.roles) {
      if (!user.profile?.roles.includes("user")) return navigate(LOGIN);
    }
  }, [navigate, user]);

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
            <Menu />
          <div className="col py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateRoute;
