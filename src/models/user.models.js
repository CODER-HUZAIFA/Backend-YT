import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    fullName: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    about: {
        type: String
    },
    profileDesc: {
        type: String,
        require: true,
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog"
        },
    ],
    blogsView: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
            default: []
        },
    ],
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    }
    
}, {timestamps: true});

const User = mongoose.model("User", userSchema)

export default User