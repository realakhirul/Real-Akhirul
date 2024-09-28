import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search'; // Import Search

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:5000/api/posts');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const handleLike = async (postId) => {
        await axios.put(`http://localhost:5000/api/posts/${postId}/like`, { userId: 'YOUR_USER_ID' });
    };

    return (
        <div>
            <Search /> {/* Include Search Component */}
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <img src={post.mediaUrl} alt="Post" />
                    <p>{post.caption}</p>
                    <button onClick={() => handleLike(post._id)}>
                        {post.likes.includes('YOUR_USER_ID') ? 'Unlike' : 'Like'}
                    </button>
                    <h4>Comments:</h4>
                    {post.comments.map((comment) => (
                        <p key={comment.userId}>{comment.text}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Home;
