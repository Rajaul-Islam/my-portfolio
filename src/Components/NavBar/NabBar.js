import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NabBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                            <Nav.Link href="">About</Nav.Link>

                            <Nav.Link href="">Skills</Nav.Link>
                            <Nav.Link href="">
                                Projects
                            </Nav.Link>
                            <Nav.Link href="">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NabBar;