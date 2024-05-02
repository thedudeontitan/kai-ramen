import express from 'express';
import { createProduct, getProducts } from '../controller/product_controller.js';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.get('/product', getProducts);
router.post('/product', createProduct);

export default router;
