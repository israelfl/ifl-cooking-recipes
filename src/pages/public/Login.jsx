import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuthContext } from "../../contexts/authContext";
import { HOME, SIGNUP } from "../../config/routes/paths";
import ls from "../../assets/login-signup.jpg";

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isAuthenticated, login, getSession } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [validForm, setValidForm] = useState({ email: true, password: true });
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    getSession()
      .then((result) => {
        if (result.data.session) navigate(HOME);
      })
      .catch((error) => console.error(error));
  }, [navigate, getSession, isAuthenticated]);

  const validateEmail = (mail) =>
    /^\w+([.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(mail);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoginError("");

    setValidForm({
      email: email.length !== 0 && validateEmail(email),
      password: password.length >= 0,
    });

    if (validForm.email && validForm.password)
      await login(email, password).then((response) => {
        if (response.error) setLoginError(response.error.message);
        else {
          return navigate(HOME);
        }
      });
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
              <div className="card-body text-center">
                {Boolean(loginError.length) && (
                  <div className="alert alert-danger" role="alert">
                    {loginError}
                  </div>
                )}
                <h5 className="card-title mb-4">{t("Sign in")}</h5>
                <form onSubmit={handleLogin}>
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
                  <div className="input-group mb-2">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className={`form-control ${
                        !validForm.password && "is-invalid"
                      }`}
                      name="password"
                      placeholder={t("Password")}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      required
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPasswordShown(!passwordShown);
                      }}
                      className="input-group-text"
                    >
                      {passwordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                    {!validForm.password && (
                      <div className="invalid-feedback">
                        {t("Password is required.")}
                      </div>
                    )}
                  </div>
                  <button className="btn btn-success">{t("Login")}</button>
                </form>
                <div className="mt-2">
                  <Link to={SIGNUP}>{t("or Sign up with email")}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
