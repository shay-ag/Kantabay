import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './LoginScreen.css';

const LoginScreen = () => {
    return (            
        <Container className="main-container">
        <Row>
            <h1 className="title">Sign in <span>Kanta</span>Bay<span>...</span></h1>
        </Row>
        <Row className="content-box">
        </Row>
    </Container>
    )
}

export default LoginScreen;
