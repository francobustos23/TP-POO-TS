import { Router } from "express";


const router = Router();

router.use("/api", (req, res) => {
    res.send("Hello World")
})

export { router }