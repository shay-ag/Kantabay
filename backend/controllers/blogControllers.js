import asyncHandler from  'express-async-handler';

import Blog from '../models/blogModel.js';

const getBlogs = asyncHandler( async (req, res) => {
    
    const blogs = await Blog.find({})
    
    res.json(blogs);
});


