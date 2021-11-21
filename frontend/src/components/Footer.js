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
                    <i className="fab fa-github social-media-icon"></i>
                    <i className="fab fa-facebook social-media-icon"></i>
                    <i className="fab fa-instagram social-media-icon"></i>
                    <i className="fab fa-twitter social-media-icon"></i>
                    <i className="fab fa-pinterest social-media-icon"></i>
                    <i className="fab fa-linkedin social-media-icon"></i>
                </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
