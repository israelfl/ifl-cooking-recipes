import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../contexts/authContext";
import { HOME, LOGIN } from "../config/routes/paths";
import ls from "../assets/login-signup.jpg";

function Signup() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuthenticated, signup, getSession } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [validForm, setValidForm] = useState({ email: true, password: true });

  useEffect(() => {
    getSession()
      .then((result) => {
        console.log('result', result, isAuthenticated)
        if (result.data.session) navigate(HOME);
      })
      .catch((error) => console.error(error));
  }, [navigate, getSession, isAuthenticated]);

  const validateEmail = (mail) =>
    /^\w+([.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail);

  const handleSignup = async (e) => {
    e.preventDefault();

    setValidForm({
      email: email.length !== 0 && validateEmail(email),
      password: password.length >= 8,
    });

    if (validForm.email && validForm.password) {
      signup(email, password).then((result) => {
        console.log('result handleSignup', result, isAuthenticated)
        if (result.data.session) navigate(HOME);
      })
      .catch((error) => console.error(error));;
    }
  };

  return (
    <div className="row">
      <div className="col-md-8 offset-md-4">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={ls}
                className="img-fluid d-none d-sm-none d-md-block"
                alt="Cookea Logo"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  {t("Become a new cookea")}
                  <br />
                  {t("Get started here")}
                </h5>
                <form onSubmit={handleSignup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-control mb-2 ${
                      !validForm.email && "is-invalid"
                    }`}
                    required
                  />
                  {!validForm.email && (
                    <div className="invalid-feedback">
                      {t("Please enter a valid email.")}
                    </div>
                  )}
                  <div className="input-group mb-2 has-validation">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className={`form-control ${
                        !validForm.password && "is-invalid"
                      }`}
                      name="password"
                      placeholder={t("Password")}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPasswordShown(!passwordShown);
                      }}
                      className="input-group-text"
                    >
                      <i
                        className={`fa-regular ${
                          passwordShown ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                    {!validForm.password && (
                      <div className="invalid-feedback">
                        {t("Password must be at leat 8 characters.")}
                      </div>
                    )}
                  </div>
                  <button className="btn btn-success" tabIndex={0}>
                    {t("Signup")}
                  </button>
                </form>
                <div className="mt-2">
                  <Link to={LOGIN}>{t("or Sign in with email")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
