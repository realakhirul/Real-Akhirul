// Search users
router.get('/search', async (req, res) => {
    const username = req.query.username;
    try {
        const users = await User.find({ username: { $regex: username, $options: 'i' } });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});
