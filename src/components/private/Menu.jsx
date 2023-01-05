import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  PRIVATE,
  MYKITCHEN,
  PROFILE,
  PASSWORD,
  DASHBOARD,
} from "../../config/routes/paths";
import { BsSpeedometer2, BsFillPersonFill } from "react-icons/bs";
import { GiCook } from "react-icons/gi";
import { CgLastpass } from "react-icons/cg";

function Menu() {
  const { t } = useTranslation();

  return (
    <div className="pv-sidebar col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light border border-top-0">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
        <span className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none fs-5 d-none d-sm-inline">
          {t("Private Area")}
        </span>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100"
          id="menu"
        >
          <li className="nav-item my-2 w-100">
            <NavLink
              to={`${PRIVATE}/${DASHBOARD}`}
              className="text-decoration-none align-middle px-1 py-1 d-block w-100"
            >
              <BsSpeedometer2 className="text-dark" />{" "}
              <span className="ms-1 d-none d-sm-inline">{t("Dashboard")}</span>
            </NavLink>
          </li>
          <li className="nav-item my-2 w-100">
            <NavLink
              to={`${PRIVATE}/${PROFILE}`}
              className="text-decoration-none align-middle px-1 py-1 d-block w-100"
            >
              <BsFillPersonFill className="text-dark" />{" "}
              <span className="ms-1 d-none d-sm-inline">{t("Profile")}</span>
            </NavLink>
          </li>
          <li className="nav-item my-2 w-100">
            <NavLink
              to={`${PRIVATE}/${MYKITCHEN}`}
              className="text-decoration-none align-middle px-1 py-1 d-block w-100"
            >
              <GiCook className="text-dark" />{" "}
              <span className="ms-1 d-none d-sm-inline">{t("My Kitchen")}</span>
            </NavLink>
          </li>
          <li className="nav-item my-2 w-100">
            <NavLink
              to={`${PRIVATE}/${PASSWORD}`}
              className="text-decoration-none align-middle px-1 py-1 d-block w-100"
            >
              <CgLastpass className="text-dark" />{" "}
              <span className="ms-1 d-none d-sm-inline">
                {t("Change Pasword")}
              </span>
            </NavLink>
          </li>

          {/* <li>
            <a
              href="#submenu1"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-speedometer2"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
            </a>
            <ul
              className="collapse show nav flex-column ms-1"
              id="submenu1"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 1{" "}
                </a>
              </li>
              <li>
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 2{" "}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-table"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Orders</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle "
            >
              <i className="fs-4 bi-bootstrap"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 1
                </a>
              </li>
              <li>
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Item</span> 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle"
            >
              <i className="fs-4 bi-grid"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
            </a>
            <ul
              className="collapse nav flex-column ms-1"
              id="submenu3"
              data-bs-parent="#menu"
            >
              <li className="w-100">
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 1
                </a>
              </li>
              <li>
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 2
                </a>
              </li>
              <li>
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 3
                </a>
              </li>
              <li>
                <a href="#!" className="nav-link px-0">
                  {" "}
                  <span className="d-none d-sm-inline">Product</span> 4
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-people"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
            </a>
          </li>
           */}
        </ul>
        {/* <hr />
        <div className="dropdown pb-4">
          <a
            href="#!"
            className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="hugenerd"
              width="30"
              height="30"
              className="rounded-circle"
            />
            <span className="d-none d-sm-inline mx-1">loser</span>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#!">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Sign out
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
