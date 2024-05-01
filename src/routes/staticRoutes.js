import { Router } from "express";
import { userData } from "../middleware/user.middleware.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { findBlog } from "../middleware/blog.middleware.js";
import { homeController } from "../controllers/home.controller.js";

const router = Router()


router.get("/", userData, (req, res) => {
    res.render("index")
});

router.get("/home", isLoggedIn, findBlog, homeController)

router.get("/register", userData, (req, res) => {
    res.render("register")
})

router.get("/login", userData, (req, res) => {
    res.render("login")
})

export default router