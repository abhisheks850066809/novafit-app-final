import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
function navbar() {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Nova-Fit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/session">Sessions</Nav.Link>
            <Nav.Link href="#deets">Subscription</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
            <Nav.Link href="#deets">Book Online</Nav.Link>
            <Nav.Link href="/store">Shop</Nav.Link>
            
            <Nav.Link href="#deets">Faq</Nav.Link>
            <Nav.Link href="#deets">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  )
}

export default navbar;