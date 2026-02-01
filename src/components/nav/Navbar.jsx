// // src/components/nav/Navbar.jsx
// import React from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// export default function AppNavbar() {
//   return (
//     <>
//       {/* ✅ Inline Custom CSS */}
//       <style>{`
//         .custom-navbar {
//           background: linear-gradient(90deg, #111827, #1f2937);
//           padding: 0.8rem 1rem;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.2);
//           z-index: 1030;
//         }

//         .custom-navbar .navbar-brand {
//           font-size: 1.5rem;
//           font-weight: 600;
//           color: #facc15 !important;
//           letter-spacing: 0.5px;
//           transition: color 0.3s ease;
//         }

//         .custom-navbar .navbar-brand:hover {
//           color: #fde68a !important;
//         }

//         .custom-navbar .nav-link {
//           color: #f3f4f6 !important;
//           font-weight: 500;
//           transition: color 0.3s ease;
//         }

//         .custom-navbar .nav-link:hover {
//           color: #facc15 !important;
//         }

//         .custom-navbar .dropdown-menu {
//           background-color: #1f2937;
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 0.5rem;
//         }

//         .custom-navbar .dropdown-item {
//           color: #f3f4f6 !important;
//           font-weight: 500;
//           transition: background 0.3s ease, color 0.3s ease;
//         }

//         .custom-navbar .dropdown-item:hover {
//           background-color: #facc15 !important;
//           color: #111827 !important;
//         }

//         @media (max-width: 768px) {
//           .custom-navbar {
//             padding: 0.6rem 0.8rem;
//           }
//         }
//       `}</style>

//       <Navbar expand="lg" variant="dark" sticky="top" className="custom-navbar">
//         <Container className="d-flex justify-content-between align-items-center">
//           {/* Left: Brand */}
//           <Navbar.Brand as={Link} to="/">
//             AccessoriesShop
//           </Navbar.Brand>

//           {/* Center: Products Dropdown */}
//           <Nav className="mx-auto">
//             <NavDropdown
//               title="Products"
//               id="products-dropdown"
//               menuVariant="dark"
//               align="center"
//             >
//               <NavDropdown.Item as={Link} to="/rings">Rings</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/necklaces">Necklaces</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/bracelets">Bracelets</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/earrings">Earrings</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

         
//         </Container>
//       </Navbar>
//     </>
//   );
// }
// src/components/nav/Navbar.jsx
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AppNavbar() {
  return (
    <>
      {/* ✅ Inline Custom CSS */}
      <style>{`
        .custom-navbar {
          background: linear-gradient(90deg, #111827, #1f2937);
          padding: 0.8rem 1rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          z-index: 1030;
        }

        .custom-navbar .navbar-brand {
          font-size: 1.5rem;
          font-weight: 600;
          color: #facc15 !important;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .custom-navbar .navbar-brand:hover {
          color: #fde68a !important;
        }

        .custom-navbar .nav-link {
          color: #f3f4f6 !important;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .custom-navbar .nav-link:hover {
          color: #facc15 !important;
        }

        .custom-navbar .dropdown-menu {
          background-color: #1f2937;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.5rem;
        }

        .custom-navbar .dropdown-item {
          color: #f3f4f6 !important;
          font-weight: 500;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .custom-navbar .dropdown-item:hover {
          background-color: #facc15 !important;
          color: #111827 !important;
        }

        @media (max-width: 768px) {
          .custom-navbar {
            padding: 0.6rem 0.8rem;
          }
        }
      `}</style>

      <Navbar expand="lg" variant="dark" sticky="top" className="custom-navbar">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left: Brand */}
          <Navbar.Brand as={Link} to="/">
            AccessoriesShop
          </Navbar.Brand>

          {/* Center: Best Sale + Products Dropdown */}
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/bestsale">
              Best Sale
            </Nav.Link>

            <NavDropdown
              title="Products"
              id="products-dropdown"
              menuVariant="dark"
              align="center"
            >
              <NavDropdown.Item as={Link} to="/rings">Rings</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/necklaces">Necklaces</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bracelets">Bracelets</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/earrings">Earrings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
