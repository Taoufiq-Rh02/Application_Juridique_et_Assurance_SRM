const express = require('express');
const router = express.Router();

import { createProfile } from '../controllers/profileController.js';
import { verifyToken, checkRole } from '../../config/authMiddleware.js';

// const {
//   createProfile
// } = require('../controllers/profileController');

// const { verifyToken, checkRole } = require('../../config/authMiddleware');

// 1
router.post('/', verifyToken, checkRole(['Administrateur']), createProfile);


export default router;