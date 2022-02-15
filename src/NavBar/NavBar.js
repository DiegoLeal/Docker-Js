import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
 
import '../Welcome/Welcome';
import '../Secured/Secured';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/Welcome">Docker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">componente Publíco</Nav.Link>
                    <Nav.Link href="/secured">componente Privado</Nav.Link>                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
       </Navbar>
    );
  }

export default NavBar;