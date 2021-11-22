import express from 'express';
import maids from './data/maids.js';
import blogs from './data/blogs.js';

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

app.listen(5000, (req, res) => {
    console.log('Server started on Port 5000');
});