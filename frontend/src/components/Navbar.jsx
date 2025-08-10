import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "bg-gray-300 blueBtn  px-3 py-20" : "px-3 py-20";
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <h3><NavLink to='/'>Seena</NavLink></h3> */}
        <NavLink to="/">
          <img src={logo} alt="Seena" className="logoImage" />
        </NavLink>
      </div>

      <div className="menu">
        <NavLink to="/" className={linkClass}>
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/jobs" className={linkClass}>
          {" "}
          Jobs
        </NavLink>
        <NavLink to="/addJob" className={linkClass}>
          {" "}
          Hire{" "}
        </NavLink>
        <NavLink to="/learn" className={linkClass}>
          {" "}
          Learn skill
        </NavLink>
        <NavLink to="/lorin" className={linkClass}>
          {" "}
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
