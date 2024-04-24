import User from "../models/user.models.js"
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../utils/auth.js";


const registerHandle = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })

    if (user) return res.status(404).redirect("/")

    const newUser = await User.create({
        username: req.body.username,
        fullName: req.body.displayName,
        password: req.body.password,
        email: req.body.email,
        profileDesc: req.body.profileDesc,
    });

    res.redirect("/login")
}

const loginHandle = async (req, res, next) => {
    const { email, password, username } = req.body;
    const loginUser = await User.findOne({ email, password, username }) 

    if (!loginUser) return res.redirect("/")

    const token = setUser(loginUser)
    res.cookie("uid", token)
    res.redirect("/profile/" + username)
}

export {
    registerHandle,
    loginHandle
}