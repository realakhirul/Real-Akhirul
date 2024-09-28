// Get user profile
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const posts = await Post.find({ userId: user._id });
        res.status(200).json({ user, posts });
    } catch (err) {
        res.status(500).json(err);
    }
});
