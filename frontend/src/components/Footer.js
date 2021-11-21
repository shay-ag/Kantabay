import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container>
            <Row className="outer-row">
                <Col>
                    <Row>
                        <div className="text-center py-3">
                            <div className="topfooter">Developer's Contact:</div>
                        </div>
                    </Row>
                    <Row>
                        <div className="text-center">
                            <span>Shashwat Agrawal:</span> 
                            <Link to={{ pathname: "https://github.com/shay-ag" }} target="_blank">
                                <i className="fab fa-github social-media-icon"></i>
                            </Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/shashwat-agrawal-b6984b192/"}} target="_blank">
                                <i class="fab fa-linkedin social-media-icon"></i>
                            </Link>
                            <Link to={{ pathname: "https://www.instagram.com/shay_ag_/"}} target="_blank">
                                <i class="fab fa-instagram social-media-icon"></i>
                            </Link>
                        </div>
                    </Row>
                </Col>
                <Col className="mid-footer">
                    <div className="text-center py-3 topfooter">Made with <i class="fas fa-heart social-media-icon"></i> & <i class="fas fa-coffee social-media-icon"></i> </div>
                </Col>
                <Col className="px-5">
                    <Row>
                        <Col className="text-center py-3">
                            <div className="topfooter">Copyright &copy; KantaBay. All Rights Reserved.</div>
                        </Col>
                    </Row>
                    <Row>
                    <div className="footer">
                    <Link to="/">
                        <i className="fab fa-github social-media-icon"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-facebook social-media-icon"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-instagram social-media-icon"></i>   
                    </Link>
                    <Link to="/">
                        <i className="fab fa-twitter social-media-icon"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-pinterest social-media-icon"></i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-linkedin social-media-icon"></i>
                    </Link>
                    </div>
                    </Row>
                </Col>
            </Row>
                
            </Container>
        </footer>
    )
}

export default Footer
