import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [caption, setCaption] = useState('');
    const [media, setMedia] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('media', media);
        formData.append('caption', caption);
        formData.append('userId', 'YOUR_USER_ID'); // replace with the actual user ID

        try {
            await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Caption" onChange={(e) => setCaption(e.target.value)} />
            <input type="file" onChange={(e) => setMedia(e.target.files[0])} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default Upload;
