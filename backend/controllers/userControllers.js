import asyncHandler from  'express-async-handler';

import User from '../models/userModel.js';
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
