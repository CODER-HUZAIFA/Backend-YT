import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        re: "User"
    },
    profileName: {
        type: String,
        require: true,
    }
}, {timestamps: true});

export const Profile = mongoose.model("Profile", profileSchema);