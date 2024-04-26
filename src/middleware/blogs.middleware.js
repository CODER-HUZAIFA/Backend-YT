import User from "../models/user.models.js";

const userPopulate = async (req, res, next) => {
    const userBlogs = await User
        .findOne({ _id: req.user._id })
        .populate("blogs")

    // console.log(userBlogs)

    req.user = userBlogs;
    next();
}

export {
    userPopulate
}