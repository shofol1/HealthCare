import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import { useState } from "react";

const Contact = () => {
    const{user,handleSignInUSer,handleGoogle}=useFirebase();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }


    const handleLoginUser=(e)=>{
        e.preventDefault();
        handleSignInUSer(email,password)
    }
    return(
        <div>
            <div className="container" style={{height:"100vh"}}>
            <div className="bg-dark text-white p-5 text-center">
                    <h1>Login</h1>
                    <h1>{user?.displayName}</h1>
                </div>
            <Row className="mx-auto pt-5">
                <Col md={6}>
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <button className="btn btn-secondary" onClick={handleLoginUser}>Login</button>
                        </Form>
                        <div className="pt-3">
                            <p>login with</p><button className="btn btn-danger" onClick={handleGoogle}>Google</button>
                        </div>
                </Col>
                <Col md={6}>
                </Col>
            </Row>
            </div>
    </div>
    )
};

export default Contact;