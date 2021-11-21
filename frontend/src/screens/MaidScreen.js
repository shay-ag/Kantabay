import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Maid from '../components/Maid';
import './MaidScreen.css';
import maids from '../maids';

const MaidScreen = () => {
    return (
        <Container>
            <Row>
                <h1 className="title">Maids in <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box">
                {maids.map( (maid) => {
                    return (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Maid maid={maid} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default MaidScreen
