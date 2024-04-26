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
    if(req.cookies.profile == userCheck._id) {
        req.profileOwner = true;
        next();
    };
    req.profileOwner = false;
    next();
}

export {
    userData,
    profileCheck
}