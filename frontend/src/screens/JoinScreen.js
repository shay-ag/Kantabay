import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './JoinScreen.css';

const JoinScreen = () => {
    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">Register as <span>Maid</span>...</h1>
            </Row>
            <Row className="content-box">
            <Row>
                <p className="header-text" >Our team members enjoy many benefits and convenience of our platform. <br />
                See how we can help change your future. <br /></p>
                <br />
            </Row>
            <Row className="upper-div">                
                <Col lg={8} md={12} sm={12} className="inner-div">
                    <h2 className="title-div"><span>Interested</span> in becoming part of our <span>team</span>?
                    </h2>
                    <p>Our platform allows for a flexible schedule with generous pay. Becoming a maid is a simple process that provides the luxuries of working when and where you want. Submit your information in the form given below and we will process your application and contact you.</p>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className="img-join hover01"><Image src="/images/join_us.png" rounded fluid/></div>
                </Col>
            </Row>
            <Row>
                <div className="submit-info">Submit your information and we will get back to you</div>
            </Row>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Your Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full Name Here" required/>
                        </Form.Group>
                    </Col>
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
                            <Form.Label>Age:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Age Here" required/>
                        </Form.Group></Col>
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
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Contact Number Here" required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Expected Salary:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Expected Amount of Salary" required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Domain of Work:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Name Here" required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Gender:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Gender Here" required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Specialized in:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Specialization Field" required/>
                        </Form.Group>
                  </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Other details:</Form.Label>
                            <Form.Control type="text" placeholder="This field is optional" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <div className="end"><Form.Check />By registration, you agree to our terms & condition.</div>
                </Row>
                <Row>
                    <Col className="end-btn">
                    <Link to='/message'>
                        <Button variant="outline-light" className="contact-end-btn letter-spacing">Register as Maid</Button>  
                    </Link>
                    </Col>
                </Row>
            </Form>
            </Row>
        </Container>
    )
};

export default JoinScreen;
