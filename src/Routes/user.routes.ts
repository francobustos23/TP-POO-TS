import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../Controllers/user.controllers";

const router: Router = Router();

router.use('/users', getUsers);
router.post('/user', createUser);
router.post('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;