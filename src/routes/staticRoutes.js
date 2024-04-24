import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    if(req.cookies.uid) return res.redirect("/profile")
    console.log(req)
    res.render("index")
});

router.get("/register", (req, res) => {
    res.render("register")
})

router.get("/login", (req, res) => {
    res.render("login")
})

export default router