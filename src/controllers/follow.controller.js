import User from "../models/user.models.js"

const followHandler = async (req, res) => {
    // Fan
    const follower = await User.findOne({ username: req.params.following })
    // Celebrity
    const user = await User.findOne({ username: req.params.username })

    if (user.followers.indexOf(follower._id) == -1) {
        await user.followers.push(follower._id);
        await user.save();
        await follower.following.push(user._id);
        await follower.save();  
    }else {
        await user.followers.splice(follower._id, 1)
        await follower.following.splice(user._id, 1)
        await user.save()
        await follower.save()
    }

    res.redirect(`/profile/${user.username}`)
}

export {
    followHandler
}