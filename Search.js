import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = async () => {
        const res = await axios.get(`http://localhost:5000/api/users/search?username=${username}`);
        setUsers(res.data);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for users..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <h3>Results:</h3>
            {users.map((user) => (
                <Link to={`/profile/${user._id}`} key={user._id}>
                    <p>{user.username}</p>
                </Link>
            ))}
        </div>
    );
};

export default Search;
