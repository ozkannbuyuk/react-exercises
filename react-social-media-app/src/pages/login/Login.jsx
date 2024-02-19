import Topbar from "../../components/topbar/Topbar";

import "./login.css";

export default function Login() {
  return (
    <>
      <Topbar />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h4 className="loginLogo">Login</h4>
            <span className="loginDesc">
              Consequat ut fugiat exercitation aliquip laborum veniam nostrud
              sint deserunt aliqua sint cillum.
            </span>
          </div>

          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <button className="loginButton">Login</button>
              <span className="loginForgot">Forgot Password?</span>

              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
