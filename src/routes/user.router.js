import { Router } from "express"
import { isLoggedIn } from "../middleware/auth.middleware.js"
import { registerHandle, loginHandle } from "../controllers/user.controllers.js"
import { profileCheck } from "../middleware/user.middleware.js"
import { userDataToShow } from "../middleware/profile.middleware.js"
import { blogSubmitHandler } from "../controllers/blog.controller.js"
import { blogAuth, blogSee } from "../middleware/blog.middleware.js"
import { viewsCount } from "../middleware/view.middleware.js"

const router = Router()

router.get("/:username", isLoggedIn, userDataToShow, profileCheck, async (req, res, next) => {
    const userData = await req.showUser.populate("blogs")
    const profileOwn = req.profileOwner

    res.render("profile", {
        username: userData.username,
        Blogs: userData.blogs,
        profileName: userData.fullName,
        profileFollowers: userData.followers.length,
        profileDesc: userData.profileDesc,
        profileOwner: profileOwn,
        user: req.user,
    });

    // console.log(userData.blogs)
})

router.get("/:username/blogs", isLoggedIn, profileCheck, blogAuth, async (req, res, next) => {
    res.render("blogWritten.ejs", {
        user: req.user,
    })
})

router.get("/:username/blogs/:title", viewsCount, blogSee, (req, res) => {
    res.render("blogSee", { blogData: req.blog, blogDesc: req.blog.desc })
})

router.post("/:username/blog", blogSubmitHandler)
router.post("/register", registerHandle)
router.post("/login", loginHandle)

export default router