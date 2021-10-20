import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("/trainerData.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);
  console.log(trainers);
  return (
    <div>
      <div className="container">
        <div className="bg-dark text-white p-5 text-center">
          <h1>Trainers</h1>
        </div>
        <Row xs={1} md={3} className="g-4 pt-5">
          {trainers.map((tData) => (
            <div>
              <Col>
                <Card>
                  <Card.Img
                    className="w-50 mt-2 mx-auto border border-dark rounded-circle"
                    variant="top"
                    src={tData?.photos}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{tData?.Name}</Card.Title>
                    <Card.Text>{tData?.position}</Card.Text>
                    <Card.Text>{tData?.phone}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Trainers;
