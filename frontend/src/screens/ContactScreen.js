import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

import './ContactScreen.css';

const ContactScreen = () => {
    return (
        <div>
            <Container className="main-container">
                <Row>
                    <h1 className="title">Contact <span>Kanta</span>Bay<span>...</span></h1>
                </Row>
                <Row className="content-box">
                        <Row>
                            <Col>
                                <Row>
                                    <Col lg={12}>
                                    <Row>
                                        <Col>
                                            <i class="fas fa-map-marker-alt"></i>
                                        </Col>
                                        <Col> 
                                            <h3>Location:</h3>
                                            <p>Atal Bihari Vajpayee Indian Institute of Information Technology & Management, Gwalior, MP, 474001</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                    <Col lg={12}>
                                    <Row>
                                        <Col>
                                            <i class="fas fa-envelope-open"></i>
                                        </Col>
                                        <Col>    
                                            <h3>Email:</h3>
                                            <p>kantabay@gmail.com</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                    <Col lg={12}>
                                    <Row>
                                        <Col>
                                        <i class="fas fa-phone-alt"></i>
                                        </Col>
                                        <Col>
                                        <h3>Call:</h3>
                                        <p>+91 7225836257</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Form>
                                    <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name Here" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group>
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                    </Col>
                                    </Row>
                                    <Col lg={12}>
                                        <Form.Group>
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Subject"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter Your Message"/>
                                        </Form.Group>
                                    </Col>
                                    <Row>
                                    <Col className="end-btn">
                                    <Button variant="outline-light" className="contact-end-btn">Explore</Button>                                    
                                    </Col>
                                    </Row>
                                    </Form>
                                </Row>
                            </Col>
                        </Row>
                        
                </Row>
            </Container>
        </div>
    )
}

export default ContactScreen
