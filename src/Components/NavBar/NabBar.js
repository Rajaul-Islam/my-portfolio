import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NabBar = () => {
    return (
        <div className='py-3'>
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <Nav.Link as={HashLink} to='/home#home'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>

                            <Nav.Link as={HashLink} to="/home#about">Skills</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#projects">
                                Projects
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">
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