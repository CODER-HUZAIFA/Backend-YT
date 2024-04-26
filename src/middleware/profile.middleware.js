import User from "../models/user.models.js"

const userDataToShow = async (req, res, next) => {
    const userData = await User.findOne({username: req.params.username})
    req.showUser = userData;
    next();
}

export {
    userDataToShow
}