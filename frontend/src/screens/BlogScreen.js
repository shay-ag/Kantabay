import React from 'react'
import { Container, Row } from 'react-bootstrap'

import './BlogScreen.css';

const BlogScreen = () => {
    return (
        <Container>
            <Row>
                <h1 className="title">Blogs on <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box">
                
            </Row>
        </Container>
    )
}

export default BlogScreen
