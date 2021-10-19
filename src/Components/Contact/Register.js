import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already Have an Account?" />
                    </Form.Group>
                    <button className="btn btn-secondary" type="submit">
                        Register
                    </button>
                    </Form>
            </div>
        </div>
    );
};

export default Register;