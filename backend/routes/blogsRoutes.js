import express from "express";

import { getBlogs, getBlogDetails } from "../controllers/blogControllers.js";

const router = express.Router();

// get all blogs
router.get('/', getBlogs);

//get blog by id
router.get('/:blogid', getBlogDetails );

export default router;