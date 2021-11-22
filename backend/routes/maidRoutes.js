import express from "express";
import asyncHandler from  'express-async-handler';

import Maid from '../models/maidModel.js';

const router = express.Router();

//get all maids
router.get('/', asyncHandler (async (req, res) => {

    const maids = await Maid.find({})

    res.json(maids);
}));

//get maid by id
router.get('/:maidid', asyncHandler ( async (req, res) => {

    const maid = await Maid.findById(req.params.maidid);

    if(maid){
        res.json(maid);
    } else {
        res.status(404).json({ message: 'Maid Not Found' });
    }

    // const maid = maids.find( (maid) => {
    //     return maid._id === req.params.maidid;
    // });

    // res.json(maid);
}));

export default router;