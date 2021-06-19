import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
export default function Header(props) {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand>What's the News ? </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link active href="#">Star &and; Fork on GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
