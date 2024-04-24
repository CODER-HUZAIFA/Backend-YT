import jwt from "jsonwebtoken"
const secretKey = "jbdsjdbsbfubfncrufrufcvefyvy"


const userData = async (req, res, next) => {
    const loggedInUser = req.cookies.uid
    if(!loggedInUser) return next();

    const userData = jwt.verify(loggedInUser, secretKey)
    if(userData) return res.redirect("/profile/" + userData.username)
    console.log(userData)
};



export {
    userData
}