import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const {user,handleRegistration}=useFirebase();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        console.log(e.target.value);
        if(e.target.value>6){
            setPassword(e.target.value);
        }else{
            console.log("6 er kom");
        }
    }
    const handleUserLogin=(e)=>{
        e.preventDefault();
        handleRegistration(email,password);
    }
    return (
        <div>
            <div className="container" style={{height:"100vh"}}>
            <div className="bg-dark text-white p-5 text-center">
                    <h1>Register Now</h1>
                    <h1>{user?.displayName}</h1>
                </div>
            <Form className="w-75 mx-auto top-2 mt-5" onSubmit={handleUserLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <button className="btn btn-secondary" type="submit">
                        Register
                    </button>
                    <Link to="/contact" className="text-white fw-bold ms-2 bg-dark p-2">Already have an account?</Link>
                    </Form>
            </div>
        </div>
    );
};

export default Register;