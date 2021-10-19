import React from 'react';
import { Col, Form, Image, Row } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import { useState } from "react";
import { useHistory, useLocation } from 'react-router';
import image from './login.png'

const Contact = () => {
    const{user,handleSignInUSer,handleGoogle}=useFirebase();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const location=useLocation();
    const redirect_url=location.state?.from||'/home'
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }


    const handleLoginUser=(e)=>{
        e.preventDefault();
        handleSignInUSer(email,password)
        .then((res) => {
           history.push(redirect_url)
          })
          .catch((error) => {
           
          });
    }

    const handleGoogleSignIn=()=>{
        handleGoogle()
        .then(res=>{
           
        }).catch(err=>{
           
        })
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
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control onChange={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <button className="btn btn-secondary" onClick={handleLoginUser}>Login</button>
                        </Form>
                        <div className="pt-3">
                            <p>login with</p><button className="btn btn-danger" onClick={handleGoogleSignIn}>Google</button>
                        </div>
                </Col>
                <Col md={6}>
                <Image src={image} thumbnail />
                </Col>
            </Row>
            </div>
    </div>
    )
};

export default Contact;