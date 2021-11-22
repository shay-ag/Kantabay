import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';

// import maids from './data/maids.js';
// import blogs from './data/blogs.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import maidRoutes from './routes/maidRoutes.js';
import blogRoutes from './routes/blogsRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/maids', maidRoutes);
app.use('/api/blogs', blogRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});