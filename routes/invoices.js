import express from 'express';
import { index, show, store } from '../controllers/invoicesController.js';
import validateIdSlug from '../middlewares/idSlugValidation.js';

const router = express.Router();

router.get('/', index);
router.get('/:id', validateIdSlug, show);
router.post('/', store);

export default router;