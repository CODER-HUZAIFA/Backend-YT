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
    views: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        },
    ],
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    blogImage: {
        type: String,
        require: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    }
}, {timestamps: true})

export const Blog = mongoose.model("Blog", blogSchema);