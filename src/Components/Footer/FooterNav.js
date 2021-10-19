import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterNav = () => {
    return (
        <div className="pt-2">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="fs-6">Power Gym | Fitness Club by shofol</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto text-end">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/trainers">Our Trainers</Nav.Link>
                    <Nav.Link as={Link} to="/Classes">Classes</Nav.Link>
                    <Nav.Link as={Link} to="/plans">Plans</Nav.Link>
                </Nav>
            </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default FooterNav;