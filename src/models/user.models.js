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
    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    blogsCount: {
        type: Number,
        default: 0,
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema)