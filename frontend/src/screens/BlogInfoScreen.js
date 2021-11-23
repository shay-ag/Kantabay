import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import './BlogInfoScreen.css';
import axios from 'axios';
// import blogs from '../blogs';

const BlogInfoScreen = ( { match } ) => {

    const [blog, setBlog] = useState({});

    useEffect( () => {
        const fetchBlog = async() => {
            const { data } = await axios(`/api/blogs/${match.params.blogid}`);

            setBlog(data);
        }
        fetchBlog();
    })

    // const blog = blogs.find( (blog) => {
    //     return blog._id === match.params.blogid
    // } )

    return <Container className="main-container">
        <Row>
            <h1 className="title blog-title">{blog.title}</h1>
        </Row>
        <Row className="content-box">
            <Row>
                <Col>
                    <Image className="p-5" src={blog.image} alt={blog.title} fluid />
                    <Link to='/blogs'>
                    <Button variant="outline-light" className="home-end-btn one letter-spacing">Go Back</Button>
                    </Link>
                </Col>
                <Col className="blog-div">
                <i className="fas fa-pencil-alt blog-icon"></i><div className="maid-info-field">Written By:</div><div className="maid-info">{blog.author}</div><br />

                <i className="far fa-clock blog-icon"></i><div className="maid-info-field">Published On:</div><div className="maid-info">{blog.date}</div><br />

                <i className="fas fa-quote-left blog-icon"></i><div className="blog-content">{blog.content}</div>
                </Col>
            </Row>
        </Row>
    </Container>
}

export default BlogInfoScreen;
