import asyncHandler from  'express-async-handler';

import Maid from '../models/maidModel.js';

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
        // json({ message: 'Maid Not Found' });
    }

    // const maid = maids.find( (maid) => {
    //     return maid._id === req.params.maidid;
    // });
    //
    // res.json(maid);
});

export { getMaids, getMaidDetails };
