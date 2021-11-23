import asyncHandler from  'express-async-handler';

import Blog from '../models/blogModel.js';

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
        // json({ message: 'Blog Not Found' });
    }

    // const blog = blogs.find( (blog) => {
    //     return blog._id === req.params.blogid;
    // });

    // res.json(blog);
});

export { getBlogs, getBlogDetails};
