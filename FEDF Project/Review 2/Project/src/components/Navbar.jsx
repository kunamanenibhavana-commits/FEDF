import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <h2>Workspace Booking Portal</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/signup" className="nav-btn">
          Signup
        </Link>

        <Link to="/login" className="nav-btn">
          Login
        </Link>
        <Link to="/history">
  Booking History
</Link>

      </div>

    </nav>
  );
}

export default Navbar;