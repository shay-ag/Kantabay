import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';

import connectDB from './config/db.js';


import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import maidRoutes from './routes/maidRoutes.js';
import blogRoutes from './routes/blogsRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use('/api/maids', maidRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});
