import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import Rating from '../components/Rating';
import maids from '../maids';
import './MaidInfoScreen.css';

const MaidInfoScreen = ( {match} ) => {

    const maid = maids.find( (maid) => {
        return (
            maid._id === match.params.maidid
        )
    } )

    return (
        <Container className="main-container">
        <Row>
            <h1 className="title"><span>Kanta</span>Bay Maid<span>Info</span>...</h1>
        </Row>
        <Row className="content-box">
            <Row>
                <Col>

                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Row>
        </Container>
    )
}

export default MaidInfoScreen;
