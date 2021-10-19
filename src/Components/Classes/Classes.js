import React from 'react';
import { Container } from 'react-bootstrap';
import Services from '../Services/Services';

const Classes = () => {
    return (
        <div>
            <Container>
            <div className="bg-dark text-white p-5 text-center">
                    <h1>Classes</h1>
                </div>
                <Services></Services>
            </Container>
        </div>
    );
};

export default Classes;