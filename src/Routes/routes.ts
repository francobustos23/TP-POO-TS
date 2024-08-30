import { Router } from "express";
import userRoutes from "./user.routes"
import productRoutes from './product.routes'
import cartRoutes from './cart.routes'
const router: Router = Router();

router.use('/api', userRoutes);
router.use('/api', productRoutes);
router.use('/api', cartRoutes)

export { router };