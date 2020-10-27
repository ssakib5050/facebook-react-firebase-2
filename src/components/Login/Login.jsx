import { useState } from "react";
import "./Login.css";

import { Modal } from "react-bootstrap";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [signupError, setSignupError] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [signupModal, setSignupModal] = useState(false);
  const [loginSubmitted, setLoginSubmitted] = useState("");
  const [signupSubmitted, setSignupSubmitted] = useState(false);
  const modalOpen = (e) => {
    e.preventDefault();
    setSignupModal(true);
  };

  const modalClose = () => {
    setSignupModal(false);
    setSignupError("");
    setSignupEmail("");
    setSignupPassword("");
  };

  const loginHandle = (e) => {
    e.preventDefault();

    setLoginSubmitted(true);

    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setLoginSubmitted(false);
      setLoginError(error.message);
    });
  };

  const signupHandle = () => {
    setSignupSubmitted(true);
    auth
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .catch((error) => {
        setSignupSubmitted(false);
        setSignupError(error.message);
      });
  };
  return (
    <div className="login_wrap">
      <Modal show={signupModal} onHide={modalClose} centered>
        <Modal.Header closeButton>
          <h2 className="signup__modal_h2">Signup</h2>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email Address"
            onChange={(e) => setSignupEmail(e.target.value)}
            value={signupEmail}
          />
          <input
            type="password"
            className="form-control  mb-2"
            placeholder="Password"
            onChange={(e) => setSignupPassword(e.target.value)}
            value={signupPassword}
          />
          <p className="text-danger">{signupError}</p>
          <input
            type="submit"
            className={`signup__submit  ${signupSubmitted && "active"}`}
            placeholder="Email Address"
            value="Signup"
            onClick={signupHandle}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <div className="login__bg">
        <div className="login__main container">
          <div className="login__brand d-none d-md-flex ">
            <h1 className="login__brand_name">Facebook</h1>
            <h4 className="login__brand_text">
              Facebook helps you connect and share with the people in your life.
            </h4>
          </div>
          <div className="login__form ">
            <form action="" className="login__form_wrap">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="login__email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                className="login__password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <p className="text-danger">{loginError}</p>
              <input
                type="submit"
                value="Log In"
                className={`login__button  ${loginSubmitted && "active"}`}
                onClick={loginHandle}
              />
              <a href="/#" className="login__reset">
                Forgotten password?
              </a>
              <hr className="login__hr" />
              <button className="login__create" onClick={modalOpen}>
                Create New Account
              </button>
            </form>
            <p>Create a Page for a celebrity, band or business.</p>
          </div>
        </div>
      </div>

      <div className="login__footer">
        <div className="login__footer_first container px-0">
          <button>English (UK)</button>
          <button>বাংলা</button>
          <button>অসমীয়া</button>
          <button>हिन्दी</button>
          <button>Bahasa Indonesia</button>
          <button>नेपाली</button>
          <button>中文(简体)</button>
          <button>العربية</button>
          <button>Bahasa Melayu</button>
          <button>Español</button>
          <button>Português (Brasil)</button>
          <button>+</button>
        </div>
        <hr />

        <div className="login__footer_second container px-0">
          <button>Sign Up</button>
          <button>Log In</button>
          <button>Messenger</button>
          <button>Facebook Lite</button>
          <button> Watch </button>
          <button>People</button>
          <button>Pages</button>
          <button>Page categories</button>
          <button>Places</button>
          <button>Games</button>
          <button>Locations</button>
          <button>Marketplace</button>
          <button>Facebook Pay</button>
          <button>Groups</button>
          <button>Oculus</button>
          <button>Portal</button>
          <button>Instagram</button>
          <button>Local</button>
          <button>Fundraisers</button>
          <button>Services</button>
          <button>Voting Information Centre</button>
          <button>About</button>
          <button>Create ad</button>
          <button>Create Page</button>
          <button>Developers</button>
          <button>Careers</button>
          <button>Privacy</button>
          <button>Cookies</button>
          <button>AdChoices</button>
          <button>Terms</button>
          <button>Help</button>
          <p className="login__copyright ">Copyright &copy; 2020</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
