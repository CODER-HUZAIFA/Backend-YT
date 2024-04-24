import { Router } from "express";
import { userData } from "../middleware/user.middleware.js";

const router = Router()

router.get("/", userData, (req, res) => {
    console.log(req.user)
    res.render("index")
});

router.get("/register", userData, (req, res) => {
    res.render("register")
})

router.get("/login", userData, (req, res) => {
    res.render("login")
})

export default router