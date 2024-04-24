import User from "../models/user.models.js"
let userData;


const registerHandle = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })

    if (user) return res.status(404).send("User is already Exist")
    
    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password
    })

    if (!newUser) return res.redirect("/");
    res.redirect("/profile")
}

export {
    registerHandle,
}