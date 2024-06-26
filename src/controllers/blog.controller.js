import { Blog } from "../models/blogs.models.js";
import User from "../models/user.models.js";

const blogSubmitHandler = async (req, res) => {
    const user = await User.findOne({ username: req.params.username })
    const { blog } = req.body;
    const title = req.body.title.split(" ").join("_")
    console.log(req.file.filename)
    const blogCreated = await Blog.create({
        title: title,
        desc: blog,
        createdBy: user._id,
        blogImage: req.file.filename,
    })

    const userUpdated = await User.findOne({ _id: user._id })
    userUpdated.blogs.push(blogCreated._id);
    await userUpdated.save()

    res.redirect("/")
}

export {
    blogSubmitHandler,
}