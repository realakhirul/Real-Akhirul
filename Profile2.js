import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const res = await axios.get(`http://localhost:5000/api/users/${id}`);
            setUser(res.data.user);
            setPosts(res.data.posts);
        };
        fetchUserProfile();
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>{user.username}'s Profile</h2>
            <img src={user.profilePicture} alt="Profile" />
            <h3>Posts:</h3>
            {posts.map((post) => (
                <div key={post._id}>
                    <img src={post.mediaUrl} alt="Post" />
                    <p>{post.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default Profile;
