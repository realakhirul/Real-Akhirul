import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:5000/api/posts');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id}>
                    <img src={post.mediaUrl} alt="Post" />
                    <p>{post.caption}</p>
               
