import Topbar from "../../components/topbar/Topbar";

import "./register.css";

export default function Register() {
  return (
    <>
      <Topbar />
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h4 className="loginLogo">Register</h4>
            <span className="loginDesc">
              Et sunt minim irure laboris tempor consequat duis nulla ullamco
              excepteur cupidatat proident.
            </span>
          </div>

          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password Again" className="loginInput" />
              <button className="loginButton">Register</button>
              <button className="loginRegisterButton">
                Log Into Your Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
