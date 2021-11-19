import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

import './RegisterScreen.css';

const RegisterScreen = () => {
    return (            
        <Container className="main-container">
            <Row>
                <h1 className="title">Signup in <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box signup-form">
                <Row>
                <Col lg={6} md={12} sm={12}>
                <p>Already a user?
                    <Link to="/signin"><span> Sign In</span></Link>
                </p>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Your Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Full Name Here" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Contact Number:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Contact Number Here" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Address:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Complete Address Here" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Your Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email Here" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Your Password:</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password Here" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Confirm Your Password:</Form.Label>
                                <Form.Control type="password" placeholder="Re-Enter Your Password Here" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="end-btn">
                        <Button variant="outline-light" className="contact-end-btn">Sign Up</Button>                                    
                        </Col>
                    </Row>
                </Form>
                </Col>
                <Col lg={6} md={12} sm={12} >
                    <div className="img-register hover01"><Image src="/images/home.png" rounded fluid/></div>
                </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default RegisterScreen;
