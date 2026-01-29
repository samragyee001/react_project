import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaMoon} from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

function BasicExample() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Navbar
      expand="lg"
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
      className="px-3"
    >
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* LEFT LINKS */}
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Products">Product</Nav.Link>

            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item>Rings</NavDropdown.Item>
              <NavDropdown.Item>Necklaces</NavDropdown.Item>
              <NavDropdown.Item>Earrings</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* SEARCH */}
          <Form className="d-flex me-3">
            <Form.Control type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>

          {/* RIGHT ICONS */}
          <Nav className="align-items-center gap-3">
            {/* Moon Toggle */}
            <Nav.Link onClick={toggleTheme} style={{ cursor: "pointer" }}>
              {theme === "light" ? <FaMoon size={18} /> : <FaMoon size={18} />}
            </Nav.Link>

            {/* Cart */}
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={18} />

              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.6rem" }}
                >
                  {cartCount}
                </span>
              )}
            </Nav.Link>

            {/* Profile */}
            <NavDropdown
              title={<FaUserCircle size={20} />}
              id="profile-dropdown"
              align="end"
            >
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
