import React from 'react';
import { Form } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const Contact = () => {
    const {handleGoogle,user}=useFirebase();
    return (
        <div>
            <div className="container" style={{height:"100vh"}}>
            <div className="bg-dark text-white p-5 text-center">
                    <h1>Login</h1>
                    <h1>{user.displayName}</h1>
                </div>
            <Form className="w-75 mx-auto top-2 mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already Have an Account?" />
                    </Form.Group>
                    <button className="btn btn-secondary" type="submit">
                        Submit
                    </button>
                    </Form>
                   
                    <div className="w-75 mx-auto">
                    <p >Login with Google</p>
                    <button className="btn btn-danger" onClick={handleGoogle}>Google</button>
                    </div>
            </div>
        </div>
    );
};

export default Contact;