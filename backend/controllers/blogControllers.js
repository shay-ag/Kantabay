import asyncHandler from  'express-async-handler';

import Blog from '../models/BlogModel.js';

const getBlogs = asyncHandler( async (req, res) => {
    
    const blogs = await Blog.find({})
    
    res.json(blogs);
});

const getBlogDetails = asyncHandler( async (req, res) => {

    const blog = await Blog.findById(req.params.blogid);

    if(blog){
        res.json(blog);
    } else {
        res.status(404);
        throw new Error('Blog Not Found');

    }


});

export { getBlogs, getBlogDetails};
