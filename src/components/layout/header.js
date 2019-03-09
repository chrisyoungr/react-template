import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import history from '../history';

export default class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap
                <img src="/img/favicon.png" alt="logo" height="30" width="30" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}