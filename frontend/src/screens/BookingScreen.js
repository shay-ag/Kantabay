import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './BookingScreen.css';
import CheckoutSteps from '../components/CheckOutSteps';

const BookingScreen = () => {

    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">Payment <span>Details</span>...</h1>
            </Row>
            <Row className="content-box">
            <CheckoutSteps step1 step2 step3/>
                <Col lg={4} className="book-div">
                    <i className="fas fa-check-circle booked-icon"></i><br />
                    <div className="congrats">Congratulations!</div><br />
                    <div className="done">Your KantaBay is Booked</div>
                </Col>
            </Row>
        </Container>
    )
}

export default BookingScreen;
