import { Blog } from "../models/blogs.models.js";
import { Comment } from "../models/comments.models.js"
import User from "../models/user.models.js";

const commentHandler = async (req, res) => {
    const blog = await Blog.findOne({ title: req.params.title })
    const user = await User.findOne({ username: req.params.username })
    const commentCreated = await Comment.create({
        comment: req.body.comment,
        blog: req.blog._id,
        name: req.user.fullName,
        createdBy: req.user._id
    });
    await blog.comment.push(commentCreated)
    await blog.save();
    await user.comment.push(commentCreated)
    await user.save();

    res.redirect(`/profile/${req.blog.createdBy.username}/blogs/${req.blog.title}`)
}

export {
    commentHandler,
}