import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link as NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <Navbar bg="primary" variant="dark" fixed="top">
    <Container>
    <Navbar.Brand href="#home">Learn From US</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="px-3 link text-white" to="/home">Home</NavLink>
      <NavLink className="px-3 link text-white" to="/services">Services</NavLink>
      <NavLink className="px-3 link text-white" to="/oursuccess">Our success</NavLink>
      <NavLink className="px-3 link text-white" to="/aboutus">About us</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;