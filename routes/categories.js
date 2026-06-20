import express from 'express';
import { index, show, getProducts } from '../controllers/categoriesController.js';
import validateIdSlug from '../middlewares/idSlugValidation.js';

const router = express.Router();

router.get('/', index);
router.get('/:name', validateIdSlug, show);
router.get('/:name/products', getProducts);

export default router;