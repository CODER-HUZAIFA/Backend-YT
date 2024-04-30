import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        require: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        require: true
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }
}, {timestamps: true })

export const Comment = mongoose.model("Comment", commentSchema)