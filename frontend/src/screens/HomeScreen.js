import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <Container>
            <Row>
                <Col lg={8} md={12} sm={12}>
                    <p className="tag-line">
                    Are you tired of <span className="nearby">finding a maid</span> nearby?
                    </p>
                    <h1 className="main-title">Welcome To <span className="kanta">Kanta</span>Bay...</h1>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <div className="img-home hover01"><Image src="/images/home.png" rounded fluid/></div>
                </Col>
            </Row>
            
            <Row>
                <Col lg={2} md={3}>
                    <Button variant="outline-light">Explore</Button>
                </Col>
                <Col lg={2} md={3}>
                    <Button variant="outline-light">Book A Service</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeScreen
