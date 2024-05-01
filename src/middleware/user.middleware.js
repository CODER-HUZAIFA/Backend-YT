import jwt from "jsonwebtoken"
const secretKey = "jbdsjdbsbfubfncrufrufcvefyvy"
import User from "../models/user.models.js";

const userData = async (req, res, next) => {
    const loggedInUser = req.cookies.uid
    if(!loggedInUser) return next();

    const userData = jwt.verify(loggedInUser, secretKey)
    if(userData) return res.redirect("/profile/" + userData.username)
    // console.log(userData)
};

const profileCheck = async (req, res, next) => {
    const userCheck = await User.findOne({ username: req.params.username })
    if (!userCheck) return res.send("User is not Exist");
    const userId = userCheck._id.toString()
    if(req.cookies.profile == userId) {
        req.profileOwner = true;
        next();
        return null
    };
    req.profileOwner = false;
    next();
}

const followingCheck = async (req, res, next) => {
    if(req.profileOwner) return next()
    req.user.following.forEach((foll) => {
        if (foll._id.toString() == req.showUser._id.toString()) {
            req.following = true;
            next()
            return;
        }
    })
}

export {
    userData,
    profileCheck,
    followingCheck,
}