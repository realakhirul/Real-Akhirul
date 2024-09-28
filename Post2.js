const multer = require('multer');
const router = require('express').Router();
const Post = require('../models/Post');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({ storage: storage });

// Create a post with media
router.post('/', upload.single('media'), async (req, res) => {
    const newPost = new Post({
        userId: req.body.userId,
        caption: req.body.caption,
        mediaUrl: req.file.path,
    });
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});
