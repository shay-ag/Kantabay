import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Stack } from 'react-bootstrap';

import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
                <Navbar.Brand>
                <img
                    src="images/logo.png"
                    width="90"
                    height="90"
                    className="d-inline-block align-top logo"
                    alt="KantaBay"
                />
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0">
                
                <Stack direction="horizontal" gap={4}>
                <LinkContainer to="/">
                <Nav.Link ><div className="custom-nav-item">Home</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                <Nav.Link ><div className="custom-nav-item">About</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/maids">
                <Nav.Link ><div className="custom-nav-item">Find Maids</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/reviews">
                <Nav.Link ><div className="custom-nav-item">Reviews</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blogs">
                <Nav.Link ><div className="custom-nav-item">Blogs</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                <Nav.Link ><div className="custom-nav-item">Contact</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/joinus">
                <Nav.Link ><div className="custom-nav-item">Join Us</div></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                <Nav.Link ><div className="custom-nav-item">Sign In</div></Nav.Link>
                </LinkContainer>
                </Stack>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
