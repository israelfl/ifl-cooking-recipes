import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LOGIN } from "../../config/routes/paths";
import { useAuthContext } from "../../contexts/authContext";

function AdminRoute() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user.profile?.roles) {
      if (!user.profile?.roles.includes("admin")) return navigate(LOGIN);
    }
  }, [navigate, user]);

  return (
    <div>
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminRoute;
