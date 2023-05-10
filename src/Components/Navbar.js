import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar className="navbar m-auto">
      <Container className="navCont">
        <Link className="navLink" to="/">Liam Salmon</Link>
        <Nav>
        <Link className="navLink" to="/projects">Projects</Link>
        <Link className="navLink" to="/CV">CV</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar;