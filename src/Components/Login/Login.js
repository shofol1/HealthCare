import React from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import image from "./login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const { user, handleSignInUSer, handleGoogle } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");
  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    if (e.target.value >= 6) {
      setPassword(e.target.value);
      seterr("");
    } else {
      seterr("Password length at least 6");
    }
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    handleSignInUSer(email, password)
      .then((res) => {
        history.push(redirect_url);
      })
      .catch((error) => {});
  };

  const handleGoogleSignIn = () => {
    handleGoogle()
      .then((res) => {
        history.push(redirect_url);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <div
        className="container mb-5"
        style={{ height: "100vh", overflow: "none" }}
      >
        <div className="bg-dark text-white p-5 text-center">
          <h1>Login</h1>
        </div>
        <Row className="mx-auto pt-5">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <p className="text-danger fw-bold bg-dark p-2">{err}</p>
              </Form.Group>
              <button className="btn btn-secondary" onClick={handleLoginUser}>
                Login
              </button>
            </Form>
            <div className="pt-3">
              <p>login with</p>
              <button className="btn btn-danger" onClick={handleGoogleSignIn}>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faGoogle} color="white" />{" "}
                </span>{" "}
                Google
              </button>
            </div>
          </Col>
          <Col md={6}>
            <Image src={image} thumbnail />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
