const mongoose = require("mongoose");

const MediaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        tags: {
            type: String
        },
        team: {
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        videos: [{ type: String }],
    },
    {
        timestamps: true,
    }
);

module.exports = Media = mongoose.model("Media", MediaSchema);
