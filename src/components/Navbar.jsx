import { Link, NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import { CustomLink } from "./CustomLink";

export const Navbar = () => {
  
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <CustomLink/>
      <Link to="/connect" className="connect-link">
        Connect
      </Link>
    </nav>
  );
};
