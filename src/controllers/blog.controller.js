import { Blog } from "../models/blogs.models.js";
import User from "../models/user.models.js";

const blogSubmitHandler = async (req, res) => {
    const user = await User.findOne({ username: req.params.username })
    const { title, blog } = req.body;
    const blogCreated = await Blog.create({
        title: title,
        desc: blog,
        createdBy: user._id,
    })
    const userUpdated = await User.findOne({ _id: user._id })
    userUpdated.blogs.push(blogCreated._id);
    await userUpdated.save()
    console.log(userUpdated)

    res.redirect("/")
}

export {
    blogSubmitHandler,
}