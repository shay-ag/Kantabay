import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './ShippingScreen.css';
import CheckoutSteps from '../components/CheckOutSteps';

const ShippingScreen = ({history}) => {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        history.push('/booking');
    }

    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">Location <span>Details</span>...</h1>
            </Row>
            <Row className="content-box signup-form">
            <CheckoutSteps step1 step2/>
            <Col>
                <Form onSubmit={submitHandler}>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter address'
                                value={address}
                                required
                                onChange={ (e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter city'
                                value={city}
                                required
                                onChange={ (e) => setCity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                        <Form.Group controlId='postalCode'>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter postalCode'
                                value={postalCode}
                                required
                                onChange={ (e) => setPostalCode(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                        <Form.Group controlId='country'>
                            <Form.Label>Country</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter country'
                                value={country}
                                required
                                onChange={ (e) => setCountry(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="end-btn">
                        <Button type="submit" variant="outline-light" className="contact-end-btn letter-spacing">Book a Service</Button>                                    
                        </Col>
                    </Row>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ShippingScreen;
