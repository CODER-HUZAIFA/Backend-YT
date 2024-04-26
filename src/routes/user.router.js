import { Router } from "express"
import { isLoggedIn } from "../middleware/auth.middleware.js"
import { registerHandle, loginHandle } from "../controllers/user.controllers.js"
import { profileCheck } from "../middleware/user.middleware.js"
import { userDataToShow } from "../middleware/profile.middleware.js"
import { blogSubmitHandler } from "../controllers/blog.controller.js"
import { userPopulate } from "../middleware/blogs.middleware.js"

const router = Router()

router.get("/:username", isLoggedIn, userDataToShow, profileCheck, async (req, res, next) => {
    // const userData = await userDataToShow(req, next)
    const userData = await req.showUser
    console.log(req.user)
    const profileOwn = req.profileOwner
    res.render("profile", {
        username: userData.username,
        Blogs: userData.blogs,
        profileName: userData.fullName,
        profileFollowers: userData.followers.length,
        profileDesc: userData.profileDesc,
        profileOwner: profileOwn,
    });

    console.log(userData.blogs)
})

router.get("/:username/blog", isLoggedIn, profileCheck, async (req, res, next) => {
    res.render("blog", {
        username: req.user.username,
    })
})

router.get("/:username/blogs/:title", isLoggedIn, profileCheck, (req, res) => {

})

router.post("/:username/blog", blogSubmitHandler)
router.post("/register", registerHandle)
router.post("/login", loginHandle)

export default router