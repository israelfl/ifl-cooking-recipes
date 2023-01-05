import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";
import { GiCook } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useUser } from "@supabase/auth-helpers-react";

import { HOME, LOGIN, MYKITCHEN, PRIVATE, TASKS } from "../config/routes/paths";
import logo from "../assets/logo.png";
import { lngConfig } from "../config/i18n";
import { useServices } from "../services";

function Navbar() {
  const user = useUser();
  const {logout} = useServices();

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [langName, setLangName] = useState(
    lngConfig[window.localStorage.getItem("i18nextLng")]
  );

  //const logout = () => console.log("logout");

  const changeLang = (e, lang, langName) => {
    e.preventDefault();
    console.log("changeLanguage", lang);
    i18n.changeLanguage(lang);
    setLangName(langName);
  };

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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="navbarDropdownLanguageLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <HiLanguage /> {langName}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownLanguageLink"
                style={{ margin: 0 }}
              >
                {Object.keys(lngConfig).map((langItem) => (
                  <li key={langItem}>
                    <a
                      className="nav-link"
                      href="#!"
                      onClick={(e) =>
                        changeLang(e, langItem, lngConfig[langItem])
                      }
                    >
                      {lngConfig[langItem]}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              {!user && (
                <Link className="nav-link" to={LOGIN}>
                  {t("Login")}
                </Link>
              )}
            </li>
            {user && (
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
                  style={{ margin: 0 }}
                >
                  <li>
                    <Link to={`${PRIVATE}/${TASKS}`} className="nav-link">
                      {t("Tasks")}
                    </Link>
                  </li>
                  <li>
                    <Link to={`${PRIVATE}/${MYKITCHEN}`} className="nav-link">
                      <GiCook /> {t("My Kitchen")}
                    </Link>
                  </li>
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
                      <RiLogoutCircleRLine /> {t("Logout")}
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
