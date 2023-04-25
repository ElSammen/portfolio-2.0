import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Link} from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="navbar m-auto">
        <Container>
          <Link className="navLink" to="/">Liam Salmon</Link>
          <Nav className="ms-auto me-5">
            <Link className="navLink" to="/projects">Projects</Link>
            <Link className="navLink" to="/CV">CV</Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default CustomNavbar;