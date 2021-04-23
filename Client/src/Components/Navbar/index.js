import { Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavbarBrand = () => {
  return (
    <Navbar expand="lg" className=" navbar-wrapper">
      <Navbar.Brand href="/" className="brand-title">
        PT. Nastha Global Utama
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/add-event" className="navbar-text">
            + Add Event
          </NavLink>
          <NavLink to="/dashboard" className="navbar-text">
            Dashboard
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarBrand;
