import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Blog from '../components/Blog';
import './BlogScreen.css';
import blogs from '../blogs';

const BlogScreen = () => {
    return (
        <Container>
            <Row>
                <h1 className="title">Blogs on <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            <Row className="content-box">
                {blogs.map( (blog) => {
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Blog blog={blog} />
                    </Col>
                })}
            </Row>
        </Container>
    )
}

export default BlogScreen;
