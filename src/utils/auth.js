import jwt from 'jsonwebtoken'

const secretKey = "jbdsjdbsbfubfncrufrufcvefyvy"

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        blogs: user.blogs,
        followers: user.followers,
        username: user.username,
        fullName: user.fullName,
        profileDesc: user.profileDesc,
        email: user.email
    }, secretKey)
}

function getUser(token) {
    if(!token) return null
    try {
        return jwt.verify(token, secretKey)
    } catch (error) {
        return null;
    }
}

export {
    setUser,
    getUser,
}