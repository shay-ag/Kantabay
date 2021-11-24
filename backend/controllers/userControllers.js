import asyncHandler from  'express-async-handler';

import User from '../models/UserModel.js';
import generateToken from '../utils/generateWebToken.js';

// logging in a user
const authUser = asyncHandler( async (req, res) => {
    
    const { email, password }= req.body

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// register a user
const registerUser = asyncHandler( async (req, res) => {
    
    const { name, email, password }= req.body

    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name, 
        email,
        password
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else{
        res.status(400);
        throw new Error('Invalid User Data');
    }

});

// getting user profile
const getUserProfile = asyncHandler( async (req, res) => {
    
    const user = await User.findById(req.user.id);

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else{
        res.status(404);
        throw new Error('User Not Found');
    }

});

export { authUser, getUserProfile, registerUser };
