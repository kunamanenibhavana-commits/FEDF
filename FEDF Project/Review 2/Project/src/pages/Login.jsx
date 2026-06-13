import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import "./styles.css";

function Login() {

  const navigate = useNavigate();

  const [captchaVerified, setCaptchaVerified] =
    useState(false);

  const handleCaptcha = (value) => {

    if (value) {
      setCaptchaVerified(true);
    }

  };

  const handleLogin = (e) => {

    e.preventDefault();

    if (!captchaVerified) {

      alert(
        "Please verify that you are not a robot."
      );

      return;
    }

    navigate("/home");
  };

  return (

    <div className="login-container">

      <div className="overlay">

        <form
          className="login-box"
          onSubmit={handleLogin}
        >

          <h1>
            Workspace Booking Portal
          </h1>

          <input
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            required
          />

          <div className="recaptcha-box">

            <ReCAPTCHA
              sitekey="6Lf_3w8tAAAAAJs79_FjHPfy8zpGhBaomcIfu-Gg"
              onChange={handleCaptcha}
            />

          </div>

          {!captchaVerified && (

            <p className="captcha-warning">

              Please verify that you are
              not a robot

            </p>

          )}

          <button
            type="submit"
            disabled={!captchaVerified}
            className="login-btn"
          >
            Login
          </button>

          <p>

            Don't have an account?

            <span
              onClick={() =>
                navigate("/signup")
              }
            >
              Sign Up
            </span>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;