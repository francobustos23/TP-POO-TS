import { Router } from "express";
import userRoutes from "./user.routes"
import productRoutes from './product.routes'

const router: Router = Router();

router.use('/api', userRoutes);
router.use('/api', productRoutes);

export { router };