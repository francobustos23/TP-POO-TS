import { Router } from "express";
import { createCart, deleteCart, getCart, updateCart } from "../Controllers/cart.controllers";

const router: Router = Router();

router.get('/carts', getCart);
router.post('/cart', createCart);
router.post('/cart/:id', updateCart);
router.delete('/cart/id', deleteCart);

export default router;