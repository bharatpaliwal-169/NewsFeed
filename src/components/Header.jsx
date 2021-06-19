import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
export default function Header(props) {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand className="ms-5">What's the News ? </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <a className="nav-link active"  href="https://github.com/bharatpaliwal-169/NewsFeed" rel="noreferrer" target="_blank">
              <Nav.Item className="me-5">
                  Star &#38; Fork on GitHub
              </Nav.Item>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}
