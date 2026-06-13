import { useNavigate } from "react-router-dom";
import "./styles.css";

function Signup() {

  const navigate = useNavigate();

  const handleSignup = (e) => {

    e.preventDefault();

    alert("Account Created Successfully");

    navigate("/");
  };

  return (

    <div className="signup-container">

      <div className="overlay">

        <form className="signup-box" onSubmit={handleSignup}>

          <h1>Create Account</h1>

          <input
            type="text"
            placeholder="Enter Full Name"
            required
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button type="submit">
            Sign Up
          </button>

          <p>
            Already have an account?
            <span onClick={() => navigate("/")}>
              Login
            </span>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Signup;