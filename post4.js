// Like a post
router.put('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("Post liked");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("Post unliked");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Add a comment
router.put('/:id/comment', async (req, res) => {
    const comment = {
        userId: req.body.userId,
        text: req.body.text,
    };
    try {
        await Post.findByIdAndUpdate(req.params.id, { $push: { comments: comment } });
        res.status(200).json("Comment added");
    } catch (err) {
        res.status(500).json(err);
    }
});
