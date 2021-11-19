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
                                        <Col lg={3}>
                                            <i className="fas fa-map-marker-alt contact-icon"></i>
                                        </Col>
                                        <Col className="pad"> 
                                            <h3 className="venue">Location:</h3>
                                            <p>Atal Bihari Vajpayee Indian Institute of Information Technology & Management, Gwalior, MP, 474001</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                    <Col lg={12}>
                                    <Row>
                                        <Col lg={3}>
                                            <i className="fas fa-envelope-open contact-icon"></i>
                                        </Col>
                                        <Col className="pad">    
                                            <h3 className="venue">Email:</h3>
                                            <p>kantabay@gmail.com</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                    <Col lg={12}>
                                    <Row>
                                        <Col lg={3}>
                                        <i className="fas fa-phone-square contact-icon"></i>
                                        </Col>
                                        <Col className="pad">
                                        <h3 className="venue">Call:</h3>
                                        <p>+91 7225836257</p>
                                        </Col>
                                    </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className="form-class outer-div">
                                    <Form>
                                    <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                        <Form.Label className="form-label">Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Your Name Here" className="form-content" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group>
                                        <Form.Label className="form-label">Your Email</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" className="form-content" required/>
                                        </Form.Group>
                                    </Col>
                                    </Row>
                                    <Col lg={12}>
                                        <Form.Group>
                                        <Form.Label className="form-label">Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Subject" className="form-content" required/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12}>
                                        <Form.Group>
                                        <Form.Label className="form-label">Message</Form.Label>
                                        <Form.Control as="textarea" rows={2} placeholder="Enter Your Message" className="form-content" required/>
                                        </Form.Group>
                                    </Col>
                                    <Row>
                                    <Col className="end-btn">
                                    <Button variant="outline-light" className="contact-end-btn letter-spacing">Send Message</Button>                                    
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
