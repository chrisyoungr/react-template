import React from 'react';
import {Navbar,Nav,NavItem,NavDropdown,Dropdown} from 'react-bootstrap';
import history from '../history';

export default class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">React-Bootstrap
                <img src="/img/favicon.png" alt="logo" height="30" width="30" />
                </Navbar.Brand>
                <NavDropdown id="basic-nav-dropdown" title={<span><i className="fa fa-user fa-fw" /></span>}>
                    <NavDropdown.Item href="/"><i className="fa fa-user fa-fw" /> User Settings</NavDropdown.Item>
                    <NavDropdown.Item href="/admin"><i className="fa fa-gear fa-fw" /> Admin</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/"><i className="fa fa-sign-out fa-fw" /> Logout</NavDropdown.Item>
                </NavDropdown>

                
            </Navbar>
        </div>
        );
    }
}