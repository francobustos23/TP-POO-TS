import { Router } from "express";
import { getUsers } from "../Controllers/user.controllers";

const router = Router();

router.use('/api', getUsers);

export default router;