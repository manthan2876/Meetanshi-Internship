import "../styles/Navbar.css";
import { SiCodechef } from "react-icons/si";

function Navbar() {
  return (
    <nav className="chef-navbar">
      <span className="chef-icon" role="img" aria-label="chef">
        <SiCodechef />
      </span>
      <span className="chef-title">Chef Claude</span>
    </nav>
  );
}

export default Navbar;
