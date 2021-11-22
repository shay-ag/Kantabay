//separate script for importing data to mongodb.

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js';
import maids from './data/maids.js';
import blogs from './data/blogs.js';
import User from './models/userModel.js';
import Maid from './models/maidModel.js';
import Blog from './models/blogModel.js';
import Booking from './models/bookingModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Booking.deleteMany();
        await User.deleteMany();
        await Maid.deleteMany();
        await Blog.deleteMany();

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleMaids = maids.map( (maid) => {
            return { ...maid, user: adminUser }
        })
        await Maid.insertMany(sampleMaids);

        const sampleBlogs = blogs.map( (blog) => {
            return { ...blog, user: adminUser }
        })
        await Blog.insertMany(sampleBlogs);

        console.log('Data Imported'.green.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Booking.deleteMany();
        await User.deleteMany();
        await Maid.deleteMany();
        await Blog.deleteMany();

        console.log('Data Destroyed'.red.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if(process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}