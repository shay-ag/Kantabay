import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import './MessageScreen.css';

const MessageScreen = () => {
    return (
        <Container className="main-container">
        <Row className="content-box">
                <Col lg={4} className="book-div">
                    <i className="fas fa-smile-beam booked-icon"></i><br />
                    <div className="congrats">Thanks for your response!</div><br />
                    <div className="done">We will get back to you soon.</div>
                </Col>
        </Row>
            
        </Container>
    )
}


export default MessageScreen
