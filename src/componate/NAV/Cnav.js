import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

function Cnav() {
    const [navc, setnavc] = useState(true)
    document.addEventListener('scroll', () => {
        if (window.scrollY < 30) {
            setnavc(true);
        } else {
            setnavc(false);
        }
    });

    return (
        <Navbar expand="lg" fixed="top" style={{ zIndex: 999, backgroundColor: navc ? "transparent" : "white" }} >
            <Container fluid='xl'>
                <Navbar.Brand href="index.html" className="d-flex align-items-center me-auto">
                    <img src={"https://bootstrapmade.com/demo/templates/QuickStart/assets/img/logo.png"} alt="" style={{ height: '30px', marginRight: '10px' }} />
                    <h1 className="sitename">QuickStart</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navmenu" />
                <Navbar.Collapse id="navmenu" className='navmenu'>
                    <Nav className="ms-auto">
                        <Nav.Link href="index.html#hero" className="active">Home</Nav.Link>
                        <Nav.Link href="index.html#about">About</Nav.Link>
                        <Nav.Link href="index.html#features">Features</Nav.Link>
                        <Nav.Link href="index.html#services">Services</Nav.Link>
                        <Nav.Link href="index.html#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Dropdown 1</NavDropdown.Item>
                            <NavDropdown title="Deep Dropdown" id="deep-nav-dropdown">
                                <NavDropdown.Item href="#">Deep Dropdown 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Deep Dropdown 2</NavDropdown.Item>
                                <NavDropdown.Item href="#">Deep Dropdown 3</NavDropdown.Item>
                                <NavDropdown.Item href="#">Deep Dropdown 4</NavDropdown.Item>
                                <NavDropdown.Item href="#">Deep Dropdown 5</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 3</NavDropdown.Item>
                            <NavDropdown.Item href="#">Dropdown 4</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="index.html#contact">Contact</Nav.Link>
                    </Nav>
                    <Button href="index.html#about" className="btn-getstarted">Get Started</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Cnav