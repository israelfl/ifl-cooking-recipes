import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { LOGIN } from "../../config/routes/paths";
import { useServices } from "../../services";

function AdminRoute() {
  const navigate = useNavigate();
  const { user, userProfile } = useServices();

  useEffect(() => {
    if (userProfile.roles) {
      if (!userProfile.roles.includes("admin")) return navigate(LOGIN);
    }
  }, [navigate, userProfile.roles]);

  useEffect(() => {
    if (user === null) return navigate(LOGIN);
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
