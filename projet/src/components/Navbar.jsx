import { useState } from "react";
import "../styles/Navbar.css";

const Navbar= () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };
  return (
    <nav className="navbar">
      <h2 className="logo">Bella</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li className="dropdown"> <span onClick={toggleMenu}>
          Accesories ▾
          </span>
          {open && (
            <ul className="dropdown-menu">
              <li>Earrings</li>
              <li>Bracelets</li>
              <li>Necklaces</li>
            </ul>
          )}
        </li>
      </ul>

      <input className="search" placeholder="Search..." />
    </nav>
  );
}

export default Navbar;

