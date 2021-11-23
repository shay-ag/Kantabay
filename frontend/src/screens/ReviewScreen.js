import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ReviewScreen.css';

const ReviewScreen = () => {
    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">Reviews on <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box2">
                <Row>
                    <p className="header-text">Hear what our existing customers have to say from their experience with our services. <br />
                    We take pride in carefully listening to all of the feedback from our customers.</p>
                </Row>
                <Col lg={3} md={6} sm={12} className="review-div">
                    <p className="num"><i className="fas fa-quote-right io"></i></p>
                    <p className="review">“I can't believe that i really got a cleaner within an hour. Will definitely use again.”</p>
                    <p className="reviwer-name">- Service tater</p>
                </Col>
                <Col lg={3} md={6} sm={12} className="review-div">
                    <p className="num"><i className="fas fa-quote-right io"></i></p>
                    <p className="review">“The on demand maidsapp service is awesome. All our property managers use this services. It makes our management service more efficient during vacancies. No more need to make cleaning services appointments ahead of time. Thank you maidsapp.”</p>
                    <p className="reviwer-name">- Pearl Apartments</p>
                </Col>
                <Col lg={3} md={6} sm={12} className="review-div">
                    <p className="num"><i className="fas fa-quote-right io"></i></p>
                    <p className="review">“Awesome app. Within 20 minutes someone was at my house cleaning. Also the cleaner did a great job. Good job Maidsapp.”</p>
                    <p className="reviwer-name">- JudgeApp24*7</p>
                </Col>
                <Col lg={3} md={6} sm={12} className="review-div">
                    <p className="num"><i className="fas fa-quote-right io"></i></p>
                    <p className="review">“Have used another app in the past and the service was terrible each and everyt time i tried... then i found MaidsApp and was blown away at the quality!!! My house has never been cleaner! And they arrived within two hours of booking.”</p>
                    <p className="reviwer-name">- Bow Workers</p>
                </Col>
                <Row>
                    <Col className="end-btn">
                    <Link to='/contact'>
                    <Button variant="outline-light" className="review-end-btn letter-spacing">Wanna Add A Review ?<br />Click Me</Button>
                    </Link>
                    </Col>
                </Row>
            </Row>
            
        </Container>
    )
}

export default ReviewScreen;
