import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Service = () => {
    const{id}=useParams();
    const [data,setData]=useState([]);
    const[sigleService,setSingleService]=useState([]);
    useEffect(()=>{
        fetch('/servicesData.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    useEffect(()=>{
        console.log(data);
       const foundService= 
       data.find(fdata=>fdata._id===id)
       setSingleService(foundService);
    },[data])
    return (
        <div>
            <div className="container" style={{height:"100vh"}}>
            <div className="bg-dark text-white p-5 text-center">
                    <h1>Service</h1>
                </div>
                <Table striped bordered hover variant="dark" className="mt-3">
                <thead>
                <tr>
                <th>Service id</th>
                <th>Type</th>
                <th>description</th>
                <th>shift</th>
                <th>price</th>
                <th>Back</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>{id}</td>
                <td>{sigleService?.ttbasetitle}</td>
                <td>{sigleService?.des}</td>
                <td>{sigleService?.time}</td>
                <td>{sigleService?.price}</td>
                <td><Link to="/#service">Go back</Link></td>
                </tr>
                </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Service;