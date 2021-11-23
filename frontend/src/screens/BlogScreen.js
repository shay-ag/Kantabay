import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import axios from 'axios';

import './BlogScreen.css';
import Blog from '../components/Blog';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listBlogs } from '../actions/blogActions';
// import blogs from '../blogs';

const BlogScreen = ({history}) => {

    const dispatch = useDispatch();

    const blogList = useSelector( state => state.blogList );
    const { loading, error, blogs } = blogList

    useEffect( () => {
        dispatch(listBlogs())
    }, [dispatch])

    // const [blogs, setBlogs] = useState([]);

    // useEffect( () => {
    //     const fetchBlogs = async () => {
    //         const { data } = await axios.get('/api/blogs');

    //         setBlogs(data);
    //     }

    //     fetchBlogs();
    // });

    const handleClick = () => {
        history.push('/login?redirect=submitblog');
    }

    return (
        <Container className="main-container">
            <Row>
                <h1 className="title">Blogs on <span>Kanta</span>Bay<span>...</span></h1>
            </Row>
            { loading ? <Loader /> : error ? (
                <Message variant='danger'>{error}</Message>
            ) 
            : (
                <Row className="content-box">
                    {blogs.map( (blog) => {
                        return (
                            <Col sm={12} md={6} lg={4} xl={3}>
                            <Blog blog={blog} />
                        </Col>
                        )
                    })}
                    <Row>
                        <Col className="end-btn">
                        <Button variant="outline-light" className="review-end-btn blog-btn letter-spacing" onClick={handleClick}>Wanna Submit A Blog ??<br />Click Me</Button>
                        </Col>
                    </Row>
                </Row>
            )}
            
            
        </Container>
    )
}

export default BlogScreen;
