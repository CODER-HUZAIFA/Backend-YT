import { getUser } from "../utils/auth.js";

const isLoggedIn = async (req, res, next) => {
    const userCookie = req.cookies.uid
    if(!userCookie) return res.redirect("/login")
    const user = getUser(userCookie)
    if(!user) return res.redirect("/register")

    req.user = user;
    next();
}

export{
    isLoggedIn,
}