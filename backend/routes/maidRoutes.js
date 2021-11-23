import express from "express";

import { getMaids, getMaidDetails } from "../controllers/maidControllers.js";

const router = express.Router();

//get all maids
router.get('/', getMaids );

//get maid by id
router.get('/:maidid', getMaidDetails );

export default router;