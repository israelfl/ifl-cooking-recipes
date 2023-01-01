import { Link, useNavigate } from "react-router-dom";
import { HOME, LOGIN } from "../config/routes/paths";
import { useAuthContext } from "../contexts/authContext";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const { logout, isAuthenticated, user } = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to={HOME}>
          <img
            src={logo}
            alt=""
            height="40"
            className="d-inline-block align-text-top"
          />
          {/* IFL Cooking Recipes */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {!isAuthenticated && (
                <Link className="nav-link" to={LOGIN}>
                  Login
                </Link>
              )}
            </li>
            {isAuthenticated && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.email}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="nav-link"
                      href="#!"
                      onClick={(event) => {
                        event.preventDefault();
                        logout();
                        navigate(HOME);
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
