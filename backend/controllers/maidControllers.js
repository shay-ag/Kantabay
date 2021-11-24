import asyncHandler from  'express-async-handler';

import Maid from '../models/MaidModel.js';

const getMaids = asyncHandler (async (req, res) => {

    const maids = await Maid.find({})
    
    res.json(maids);
});

const getMaidDetails = asyncHandler ( async (req, res) => {

    const maid = await Maid.findById(req.params.maidid);

    if(maid){
        res.json(maid);
    } else {
        res.status(404);
        throw new Error('Maid Not Found');
        
    }


});

export { getMaids, getMaidDetails };
