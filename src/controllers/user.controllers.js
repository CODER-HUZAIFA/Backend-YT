import User from "../models/user.models.js"


const registerHandle = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })

    if (user) return res.status(404).send("User is already Exist")

    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.redirect("/profile")
}

const userDataHandling = {
    prfileName: req.body.username,
    profileFollowers: 1000
};

export {
    registerHandle,
    userDataHandling
}