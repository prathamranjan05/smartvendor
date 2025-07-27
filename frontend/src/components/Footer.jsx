// src/components/Footer.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './Footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="footer-container">
            <Container>
                <Row className="align-items-center justify-content-between">
                    {/* Column 1: Logo and Brand Info */}
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <div className="brand-info">
                            <img src={logo} alt="App Logo" className="footer-logo" />
                            <div>
                                <h5 className="footer-brand-name">Smart Vendor</h5>
                                <p className="footer-tagline">
                                    Bridging the gap between vendors and suppliers.
                                </p>
                            </div>
                        </div>
                    </Col>

                    {/* Column 2: Quick Links */}
                    <Col md={6} className="text-center text-md-end">
                        <ul className="footer-links">
                            <li><Link to="/Contactus">Contact Us</Link></li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Smart Vendor. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
