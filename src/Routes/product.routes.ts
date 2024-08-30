import { Router } from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../Controllers/product.controllers";

const router: Router = Router();

router.get('/products', getProducts)
router.post('/product', createProduct)
router.post('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

export default router;