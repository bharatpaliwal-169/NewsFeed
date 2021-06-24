import React from 'react'
import {Navbar} from 'react-bootstrap';
export default function Header(props) {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed='top'>
        <Navbar.Brand className="ms-5">What's the News ? </Navbar.Brand>
      </Navbar>
    </React.Fragment>
  )
}
