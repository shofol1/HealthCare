import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MemberShip = () => {
    const[membership,setMembership]=useState([]);
    useEffect(()=>{
        fetch('./membership.json')
        .then(res=>res.json())
        .then(data=>setMembership(data))
    },[])
    return (
        <div className="mt-4 mb-4 text-center">
               <Container>
               <CardGroup className="gap-4">
                    {
                        membership.map(mData=>
                            <Card key={mData._id} style={{borderRadius:"30px"}}>
    
                                <Card.Body>
                                <Card.Title>{mData?.plan}</Card.Title>
                                <Card.Text>
                                {mData?.price}
                                </Card.Text>
                                <Card.Text>
                                {mData?.for}
                                </Card.Text>
                               <Link to="/plans"><button className="btn btn-danger mt-3 mb-3">SELECT PLAN</button></Link>
                                <Card.Text>
                                {mData?.access}
                                </Card.Text>
                                <Card.Text>
                                {mData?.des}
                                </Card.Text>
                                <Card.Text>
                                {mData?.time}
                                </Card.Text>
                                <Card.Text>
                                {mData?.facility}
                                </Card.Text>
                                <Card.Text>
                                {mData?.person} Free personal trainings
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    }
                </CardGroup>
               </Container>
        </div>
    );
};

export default MemberShip;