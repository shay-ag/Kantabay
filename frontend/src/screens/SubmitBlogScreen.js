import React, {useState} from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './SubmitBlogScreen.css';

const SubmitBlogScreen = ({history}) => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleClick = (e) => {
        history.push('/message');
    }

    return (
        <Container className="main-container">
        <Row>
            <h1 className="title">Write <span>Your</span>Blog<span>...</span></h1>
        </Row>

        <Row className="content-box">
        <Form className="signup-form">
        
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group controlId='name'>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Name of the Author "
                        value={name}
                        onChange={ (e) => setName(e.target.value)} 
                        required />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group controlId='title'>
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Blog Title" 
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)} 
                        required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form.Group>
                        <Form.Label className="form-label">Blog Content</Form.Label>
                        <Form.Control as="textarea" rows={5} 
                        placeholder="Enter Blog Content" 
                        className="form-content" 
                        value={content}
                        onChange={ (e) => setContent(e.target.value)} 
                        required/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col className="end-btn">
                <Link to='/message'>
                <Button variant="outline-light" className="contact-end-btn letter-spacing" onClick={handleClick}>Submit Blog</Button>                                    
                </Link>
                </Col>
                <Col className="end-btn">
                <Link to='/blogs'>
                <Button variant="outline-light" className="contact-end-btn letter-spacing">Go Back</Button>                                    
                </Link>
                </Col>
            </Row>
        </Form>
        </Row>
    </Container>
    )
}

export default SubmitBlogScreen;
