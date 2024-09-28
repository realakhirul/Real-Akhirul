let posts = [
    { id: 1, videoUrl: 'video1.mp4', likes: 0, comments: [] },
    { id: 2, videoUrl: 'video2.mp4', likes: 0, comments: [] },
];

function renderPosts() {
    const videoFeed = document.getElementById('video-feed');
    videoFeed.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'video-post';
        postDiv.innerHTML = `
            <video src="${post.videoUrl}" controls></video>
            <div class="buttons">
                <button onclick="likePost(${post.id})">Like (${post.likes})</button>
                <button onclick="commentPost(${post.id})">Comment</button>
                <button onclick="sharePost(${post.id})">Share</button>
            </div>
            <div class="comments">${post.comments.join('<br>')}</div>
        `;
        videoFeed.appendChild(postDiv);
    });
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes++;
    renderPosts();
}

function commentPost(postId) {
    const comment = prompt("Enter your comment:");
    const post = posts.find(p => p.id === postId);
    if (comment) {
        post.comments.push(comment);
        renderPosts();
    }
}

function sharePost(postId) {
    alert(`Post ${postId} shared!`);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Implement login logic here
    alert(`Logged in as ${username}`);
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Implement registration logic here
    alert(`Registered as ${username}`);
}

// Initial render
renderPosts();
