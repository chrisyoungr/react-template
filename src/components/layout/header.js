import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

export default class Header extends React.Component {
    onHome() {
        history.replace('/');
        history.go(0);
    }
    onAbout() {
        history.replace('/');
        history.go(0);
    }
    render() {
        return (
        <div className="header">
            <Navbar id="mainNav" brand="Reporting Web App" fixedTop>
                <Navbar.Header>
                    <Navbar.Brand className="navbar-brand">
                    <img src="/img/favicon.png" alt="logo" height="30" width="30" />&nbsp;
                    </Navbar.Brand>
                    Reporting Web App
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={() => this.onHome()}>Home</NavItem>
                        <NavItem eventKey={1} onClick={() => this.onAbout()}>About</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}