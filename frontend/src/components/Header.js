import React from 'react'
import { Navbar, Nav, Container, Stack } from 'react-bootstrap';

import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="#home">
                <img
                    src="images/logo.png"
                    width="90"
                    height="90"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0">
                
                <Stack direction="horizontal" gap={4}>
                <Nav.Link href="#home"><div className="custom-nav-item">Home</div></Nav.Link>
                <Nav.Link href="#features"><div className="custom-nav-item">About</div></Nav.Link>
                <Nav.Link href="#pricing"><div className="custom-nav-item">Find Maids</div></Nav.Link>
                <Nav.Link href="#home"><div className="custom-nav-item">Reviews</div></Nav.Link>
                <Nav.Link href="#features"><div className="custom-nav-item">Blogs</div></Nav.Link>
                <Nav.Link href="#pricing"><div className="custom-nav-item">Contact</div></Nav.Link>
                <Nav.Link href="#pricing"><div className="custom-nav-item">Join Us</div></Nav.Link>
                <Nav.Link href="#pricing"><div className="custom-nav-item">SIGN IN</div></Nav.Link>
                </Stack>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
