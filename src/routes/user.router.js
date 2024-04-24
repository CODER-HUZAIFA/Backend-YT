import { Router } from "express"
import { isLoggedIn } from "../middleware/auth.middleware.js"
import { registerHandle, loginHandle } from "../controllers/user.controllers.js"

const router = Router()

router.get("/:username", isLoggedIn ,(req, res) => {
    res.render("profile", {
        Blogs: req.user.blogs,
        profileName: req.user.fullName,
        profileFollowers: req.user.followers.length,
        profileDesc: req.user.profileDesc,
        profileOwner: false
    });
})

router.post("/register", registerHandle)
router.post("/login", loginHandle)

export default router