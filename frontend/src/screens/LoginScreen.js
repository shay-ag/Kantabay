import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './LoginScreen.css';

const LoginScreen = () => {
    return (            
        <Container className="main-container">
        <Row>
            <h1 className="title">Sign in <span>Kanta</span>Bay<span>...</span></h1>
        </Row>
        <Row className="content-box">
        <Form className="signup-form">
            /*<Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Full Name Here" required/>
                    </Form.Group>
                </Col>
            </Row>*/
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Your Email:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email Here" required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password Here" required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="end-btn">
                <Button variant="outline-light" className="contact-end-btn letter-spacing">Sign In</Button>                                    
                </Col>
            </Row>
        </Form>
        </Row>
    </Container>
    )
}

export default LoginScreen;
