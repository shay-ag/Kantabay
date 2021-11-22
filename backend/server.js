import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';

import maids from './data/maids.js';
import blogs from './data/blogs.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/api/maids', (req, res) => {
    res.json(maids);
});

app.get('/api/maids/:maidid', (req, res) => {

    const maid = maids.find( (maid) => {
        return maid._id === req.params.maidid;
    });

    res.json(maid);
});

app.get('/api/blogs/:blogid', (req, res) => {

    const blog = blogs.find( (blog) => {
        return blog._id === req.params.blogid;
    });

    res.json(blog);
});

app.get('/api/blogs', (req, res) => {
    res.json(blogs);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});