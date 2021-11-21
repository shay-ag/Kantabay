import React from 'react';
import { Card } from 'react-bootstrap';

import './Blog.css';

const Blog = ( {blog} ) => {
    return (
        <Card className='my-3 mx-2 mb-5'>
            <a href={`/blogs/${blog._id}`}>
                <Card.Img src={blog.image} variant='bottom' width="100" height="150"/>
            </a>
            <Card.Body className='card-body'>
                <a href={`/blogs/${blog._id}`}>
                    <Card.Title as='div'>
                        <strong className="card-title">{blog.title}</strong>
                    </Card.Title>
                </a>
                <Card.Text as='div' className="card-text">
                    <div className='my-3'>
                        <span>Author:</span> {blog.author}
                    </div>
                    <div>
                        <span>Published on:</span><br /> {blog.date}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Blog;
