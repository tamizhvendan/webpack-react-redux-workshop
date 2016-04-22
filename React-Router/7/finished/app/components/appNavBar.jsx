import React from 'react';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

class AppNavBar extends React.Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">My Facebook</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to={{pathname : "messages"}}>
            <NavItem><Glyphicon glyph="envelope"/></NavItem>
          </LinkContainer>
          <LinkContainer to={{pathname : "notifications"}}>
            <NavItem><Glyphicon glyph="bullhorn"/></NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNavBar;