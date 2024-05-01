import { Blog } from "../models/blogs.models.js";
import User from "../models/user.models.js";
import { getUser } from "../utils/auth.jwt.js";

const blogAuth = async (req, res, next) => {
    const profileOwn = req.profileOwner;
    console.log(profileOwn)
    if (profileOwn == false) return res.redirect(`/profile/${req.user.username}/blogs`) 
    next()
}



const blogSee = async (req, res, next) => {
    const userParams = await User.findOne({ username: req.params.username }).populate("blogs")
    const  blogParams = await Blog.findOne({ title: req.params.title }).populate("createdBy").populate("comment")

    if(!userParams || !blogParams) return res.status(404).send(" Username or blog is not Exist. <br> Error ocuring ")
    userParams.blogs.forEach((e) => {
        if(e.title == blogParams.title) {
            req.blog = blogParams;
            return next()
        }
    })
    return;
}

const blogSeeComment = async (req, res, next) => {
    const  blogParams = await Blog.findOne({ title: req.params.title }).populate("createdBy").populate("comment")
    req.blog = blogParams
    return next();
}

const blogViewsCount = async (req, res, next) => {
    const userId = req.cookies.uid 
    if(!userId) return next();
    
    const loggedInUser = getUser(userId);
    const blog = await Blog.findOne({ title: req.params.title })
    const user = await User.findOne({ username: loggedInUser.username }).populate("blogsView")
    
    let hasViewed = false
    blog.views.forEach((e) => {
        if(e.toString() === user._id.toString()) {
            hasViewed = true
        }
    })

    if(hasViewed) return next()

    await user.blogsView.push(blog._id);
    await blog.views.push(loggedInUser._id)
    await blog.save();
    await user.save();
    return next();
}


const isLoggedInBlog = async (req, res, next) => {
    const userCookie = req.cookies.uid
    if(!userCookie) {
        req.loggedIn = false
        return next()
    }
    const user = getUser(userCookie)

    req.loggedIn = true
    const userData = await User
        .findOne({username: user.username})
        .populate("blogs")
    req.user = userData;
    next();
}


const findBlog = async (req, res, next) => {

    const allBlog = await Blog.find()
        .populate("createdBy")
        .populate("comment")
        .populate("createdBy")

    req.allBlog = allBlog;
    next()
}


export {
    blogAuth,
    blogSee,
    blogViewsCount,
    isLoggedInBlog,
    blogSeeComment,
    findBlog,
} 