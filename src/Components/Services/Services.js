import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
           <div className="container">
           <Row xs={1} md={3} className="g-4">
            {
                data.map(sData=><div key={sData._id} className="pt-5">
                    <Col >
                    <Card>
                    <Card.Img variant="top" src={sData.photo} />
                    <Card.Body>
                    <Card.Title>{sData.ttbasetitle}</Card.Title>
                    <Card.Text>{sData.des}</Card.Text>
                    <Link to={`/services/${sData._id}`}>
                        <button className="btn btn-dark">See Details</button>
                    </Link>
                    </Card.Body>
                    </Card>
                    </Col>
                </div>)
            }
            </Row>
           </div>
        </div>
    );
};

export default Services;