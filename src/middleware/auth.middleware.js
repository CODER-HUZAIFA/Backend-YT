import User from "../models/user.models.js";
import { getUser } from "../utils/auth.jwt.js";

const isLoggedIn = async (req, res, next) => {
    const userCookie = req.cookies.uid
    if(!userCookie) return res.redirect("/login")
    const user = getUser(userCookie)
    if(!user) return res.redirect("/register")

    const userData = await User
        .findOne({username: user.username})
        .populate("blogs")
    req.user = userData;
    next();
}

export{
    isLoggedIn,
}