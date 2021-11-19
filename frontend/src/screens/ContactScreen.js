import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './ContactScreen.css';

const ContactScreen = () => {
    return (
        <div>
            <Container className="main-container">
                <Row>
                    <h1 className="title">Contact <span>Kanta</span>Bay<span>...</span></h1>
                </Row>
            </Container>
        </div>
    )
}

export default ContactScreen
