import { Blog } from "../models/blogs.models.js";
import jwt from "jsonwebtoken"
const secretKey = "jbdsjdbsbfubfncrufrufcvefyvy"

const viewsCount = async (req, res, next) => {
    const userCookie = req.cookies.uid
    console.log(req.params.title);
    if(!userCookie) return next();
    const user = jwt.verify(userCookie, secretKey)
    const blog = await Blog.findOne({ title: req.params.title })
    console.log(user);
    user.viewBlogs.push(blog._id)
    console.log("Hello");
    return next()
}

export {
    viewsCount,
}