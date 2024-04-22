import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    blogsCount: {
        type: Number,
        default: 0,
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema)

export default User