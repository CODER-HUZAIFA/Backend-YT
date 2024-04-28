import { Blog } from "../models/blogs.models.js";
import User from "../models/user.models.js";

const blogAuth = async (req, res, next) => {
    const paramUser = req.params.username;
    const loggedInUser = req.user;
    const profileOwn = req.profileOwner;

    if (profileOwn == false)  res.redirect(`/profile/${req.user.username}/blog`) 
    next()
}



const blogSee = async (req, res, next) => {
    const userParams = await User.findOne({ username: req.params.username }).populate("blogs")
    const  blogParams = await Blog.findOne({ title: req.params.title })

    if(!userParams || !blogParams) return res.status(404).send(" Username or blog is not Exist. <br> Error ocuring ")


    userParams.blogs.forEach((e) => {
        if(e.title == blogParams.title) {
            req.blog = blogParams;
            return next()
        }
    })

    return;
}

export {
    blogAuth,
    blogSee,
} 