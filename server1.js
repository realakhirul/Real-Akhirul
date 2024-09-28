const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
