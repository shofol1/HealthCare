import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Image, Row, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
const Service = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [sigleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    console.log(data);
    const foundService = data.find((fdata) => fdata._id === id);
    setSingleService(foundService);
  }, [data]);
  return (
    <div>
      <div className="container mb-5">
        <div className="bg-dark text-white p-5 text-center">
          <h1>Service</h1>
        </div>
        <Card className="text-center mt-3">
          <Card.Header>
            <Image className="img-fluid" src={sigleService?.photo}></Image>
          </Card.Header>
          <Card.Body>
            <Card.Title>{sigleService?.ttbasetitle}</Card.Title>
            <Card.Text>{sigleService?.des}</Card.Text>
            <Card.Text>{sigleService?.price}</Card.Text>
            <Card.Text>{sigleService?.time}</Card.Text>
            <NavLink as={Link} to="/home" variant="primary">
              Go Back
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Service;
