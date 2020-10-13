import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Webshop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <div>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;