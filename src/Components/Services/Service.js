import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Service = () => {
    const{id}=useParams();
    const [data,setData]=useState([]);
    const[sigleService,setSingleService]=useState({});
    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    useEffect(()=>{
       const foundService= 
       data.find(fdata=>fdata._id===id)
       setSingleService(foundService);
    },[])
    return (
        <div>
            <div className="container" style={{height:"100vh"}}>
            <Row xs={1} md={2} className="g-4">
    <Col>
      <Card>
        <Card.Img variant="top" src={sigleService?.photo}  alternative="photo"/>
        <Card.Body>
          <Card.Title>{sigleService?.ttbasetitle}</Card.Title>
          <Card.Text>
          {sigleService?.des}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
            </div>
        </div>
    );
};

export default Service;