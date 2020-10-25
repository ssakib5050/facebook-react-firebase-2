// import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="login_wrap">
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
              />
              <input
                type="password"
                placeholder="Password"
                className="login__password"
              />
              <input type="submit" value="Log In" className="login__button" />
              <a href="#" className="login__reset">
                Forgotten password?
              </a>
              <hr className="login__hr" />
              <button className="login__create">Create New Account</button>
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
