import { Profile } from "../models/profile.models.js";
import User from "../models/user.models.js"
import { setUser } from "../utils/auth.jwt.js";


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

    const userProfile = await Profile.create({
        createdBy: newUser._id,
        profileName: newUser.username
    })

    const profileId = userProfile.createdBy
    res.cookie("profile", profileId)

    res.redirect("/login")
}

const loginHandle = async (req, res, next) => {
    const { email, password, username } = req.body;
    const loginUser = await User.findOne({ email, password, username }) 
    if (!loginUser) return res.redirect("/")

    const token = setUser(loginUser)
    res.cookie("uid", token, {domain: 'localhost', expires: new Date(Date.now() + 864000000)})
    const userProfile = await Profile.findOne({ profileName: username })
    res.cookie("profile", userProfile.createdBy, {domain: 'localhost', expires: new Date(Date.now() + 864000000)})
    res.redirect("/profile/" + username)
}

export {
    registerHandle,
    loginHandle
}