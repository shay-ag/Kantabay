import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <div className="topfooter">Copyright &copy; KantaBay. All Rights Reserved.</div>
                    </Col>
                </Row>
                <Row>
                <div className="footer">
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
