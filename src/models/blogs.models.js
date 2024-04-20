import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    views: {
        type: Number,
        default: 0
    },
    commentNumber: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    }
}, {timestamps: true})

export const Blog = mongoose.model("Blog", blogSchema);