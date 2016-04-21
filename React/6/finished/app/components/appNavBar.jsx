import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';

class AppNavBar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">My Facebook</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Glyphicon glyph="envelope"/></NavItem>
          <NavItem><Glyphicon glyph="bullhorn"/></NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNavBar;