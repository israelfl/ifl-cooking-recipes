import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import ls from "../assets/login-signup.jpg";
import { HOME, SIGNUP } from "../config/routes/paths";

function Login() {
  const navigate = useNavigate();
  const { login, getSession } = useAuthContext();

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
  }, [navigate, getSession]);

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
          console.log("response Login", response);
          navigate(HOME)
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
              <div className="card-body">
                {Boolean(loginError.length) && (
                  <div className="alert alert-danger" role="alert">
                    {loginError}
                  </div>
                )}
                <h5 className="card-title mb-4">Sign in</h5>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    name="email"
                    placeholder="youremail@site.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-control mb-2 ${
                      !validForm.email && "is-invalid"
                    }`}
                    required
                  />
                  {!validForm.email && (
                    <div className="invalid-feedback">
                      Please enter a valid email.
                    </div>
                  )}
                  <div className="input-group mb-2 has-validation">
                    <input
                      type={passwordShown ? "text" : "password"}
                      className={`form-control ${
                        !validForm.password && "is-invalid"
                      }`}
                      name="password"
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
                        Password is required.
                      </div>
                    )}
                  </div>
                  <button className="btn btn-success">Login</button>
                </form>
                <div className="mt-2">
                  <Link to={SIGNUP}>or Sign up with email</Link>
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
