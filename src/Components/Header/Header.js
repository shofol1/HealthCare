import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logo1.png'
import "./Header.css"

const Header = () => {
    const {user,handleLogout}=useFirebase();
    console.log(user);
    return (
        <div>
            <div className="container mb-2" >
            <Navbar  bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container className="d-flex">
                    <Navbar.Brand className="d-flex align-items-center"><img src={logo} alt="" /><span className="ms-3">Power Gym</span></Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="ms-auto text-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/trainers">Our Trainers</Nav.Link>
                    <Nav.Link as={Link} to="/Classes">Classes</Nav.Link>
                    <Nav.Link as={Link} to="/plans">Plans</Nav.Link>
                   {
                       !user.email?
                    <div className="d-flex ms-auto">
                        <Nav.Link as={Link} to="/contact" className="btn btn-danger text-white p-2 me-3" style={{borderRadius:"5px"}}>Login</Nav.Link>
                    <Nav.Link as={Link} to="/register" className="btn btn-danger text-white p-2 me-2" style={{borderRadius:"5px"}}>Sign Up</Nav.Link>
                    </div>:
                    <div className="d-flex align-items-center">
                   { user.displayName?
                   <h5 className=" me-3" style={{color:"#ddd"}}>{user?.displayName}</h5>:
                   <h5 className=" me-3" style={{color:"#ddd"}}>{user?.email}</h5>
                   }
                    <button className="btn btn-danger text-white p-2" style={{borderRadius:"5px"}} onClick={handleLogout}>Log Out</button>
                    </div>
                    }
                    </Nav>
                   </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
        </div>
    );
};

export default Header;