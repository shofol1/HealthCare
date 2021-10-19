import React from 'react';
import { Container } from 'react-bootstrap';
import MemberShip from '../MemberShip/MemberShip';

const Plans = () => {
    return (
        <div>
            <Container >
                <div className="text-center bg-dark text-white p-4">
                    <h3>BECOME A PART OF US</h3>
                    <h1>OUR MEMBERSHIPS</h1>
                </div>
            
            <MemberShip></MemberShip>
            </Container>
        </div>
    );
};

export default Plans;