import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/contact" className="logo" aria-label="Stackly home">
        <span className="logo-mark">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 3L44 14L24 25L4 14L24 3Z" fill="#76C7FF" />
            <path d="M4 19L24 30L44 19V26L24 37L4 26V19Z" fill="#9270FF" />
            <path d="M4 29L24 40L44 29V36L24 47L4 36V29Z" fill="#5145E5" />
          </svg>
        </span>
        <span className="logo-word">stackly<span className="logo-dot">.</span></span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact" className="contact-link">Contact Us <span>↗</span></Link>
      </div>
    </nav>
  );
}

export default Navbar;