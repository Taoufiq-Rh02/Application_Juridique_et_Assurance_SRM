import express from 'express';
import { 
    createProfile , 
    getAllProfiles,
    getProfileById,
    updateProfile,
    deleteProfile
} from '../controllers/profileController.js';
import { 
    verifyToken, 
    checkRole
} from '../../config/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, checkRole(['Administrateur']), createProfile);

router.get('/profiles', verifyToken, checkRole(['Administrateur']), getAllProfiles);

router.get('/profile/:id', getProfileById);

router.put('/profile/:id', updateProfile);

router.delete("/profile/:id", deleteProfile);

export default router;
