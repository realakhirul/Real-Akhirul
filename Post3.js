const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    caption: { type: String, required: true },
    mediaUrl: { type: String, required: true },
    likes: { type: Array, default: [] },  // Array of user IDs who liked the post
    comments: [{ 
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String },
    }],
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
