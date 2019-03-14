import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,Dropdown} from 'react-bootstrap';
import history from '../history';

export default class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/monthly-report">Monthly Report</Nav.Link>
                        <Nav.Link href="/appointments">Appointments</Nav.Link>
                        <Nav.Link href="/call-tracker">Call Tracker</Nav.Link>
                        <NavDropdown.Divider />
                        <NavDropdown id="basic-nav-dropdown" title={<div><i className="fa fa-user fa-fw" /><span>John Smith</span></div>}>
                            <NavDropdown.Item href="/user-profile">User Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}