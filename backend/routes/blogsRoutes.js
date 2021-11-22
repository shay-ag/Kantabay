import express from "express";
import asyncHandler from  'express-async-handler';

import Blog from '../models/blogModel.js';

const router = express.Router();

// get all blogs
router.get('/', asyncHandler( async (req, res) => {
    
    const blogs = await Blog.find({})
    
    res.json(blogs);
}));

//get blog by id
router.get('/:blogid', asyncHandler( async (req, res) => {

    const blog = await Blog.findById(req.params.blogid);

    if(blog){
        res.json(blog);
    } else {
        res.status(404).json({ message: 'Blog Not Found' });
    }

    // const blog = blogs.find( (blog) => {
    //     return blog._id === req.params.blogid;
    // });

    // res.json(blog);
}));

export default router;