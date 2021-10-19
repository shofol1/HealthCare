import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import FooterNav from './FooterNav';

const Footer = () => {
    return (
        <div>
           <div className="container">
               <FooterNav></FooterNav> 
           </div>
        </div>
    );
};

export default Footer;