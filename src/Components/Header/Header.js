import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logo1.png'
import "./Header.css"

const Header = () => {
    const {user,handleLogout}=useFirebase();
    return (
        <div className="container mb-2 mt-2" >
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container className="d-flex ">
                    <Navbar.Brand className="d-flex align-items-center"><img src={logo} alt="" /><span className="ms-3">Power Gym</span></Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="ms-auto text-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/trainers">Our Trainers</Nav.Link>
                    <Nav.Link as={Link} to="/Classes">Classes</Nav.Link>
                   {
                       !user.email?
                    <div className="d-flex">
                        <Nav.Link as={Link} to="/contact" className="btn btn-danger text-white p-2 me-3" style={{borderRadius:"5px"}}>Login</Nav.Link>
                    <Nav.Link as={Link} to="/register" className="btn btn-danger text-white p-2 me-2" style={{borderRadius:"5px"}}>Sign Up</Nav.Link>
                    </div>:
                    <button className="btn btn-danger text-white p-2" style={{borderRadius:"5px"}} onClick={handleLogout}>Log Out</button>
                    }
                    </Nav>
                   </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;