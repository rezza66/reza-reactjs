import React, { Component } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar expand='lg' className='bg-primary w-100 fixed-top z-1' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#' className='fs-3'>Omeza<span className='text-dark'>present</span></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto w-100 dflex justify-content-end'>
                        <Nav.Link href='#header'>Home</Nav.Link>
                        <Nav.Link href='#about'>About</Nav.Link>
                        <Nav.Link href='#project'>Project</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
  }
}
