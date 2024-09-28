document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('register-form').classList.add('hidden');
});

document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('register-form').classList.toggle('hidden');
    document.getElementById('login-form').classList.add('hidden');
});

document.getElementById('submit-login').addEventListener('click', function() {
    // Simulate login logic (you can implement real logic later)
    alert('Logged in!');
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('feed').classList.remove('hidden');
});

document.getElementById('submit-register').addEventListener('click', function() {
    // Simulate registration logic (you can implement real logic later)
    alert('Registered!');
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('feed').classList.remove('hidden');
});

document.getElementById('upload-btn').addEventListener('click', function() {
    const photoInput = document.getElementById('upload-photo');
    const videoInput = document.getElementById('upload-video');
    const postsDiv = document.getElementById('posts');
    
    if (photoInput.files.length > 0) {
        const photoURL = URL.createObjectURL(photoInput.files[0]);
        postsDiv.innerHTML += `<img src="${photoURL}" style="width:100px;height:auto;margin:10px;">`;
        photoInput.value = ''; // Clear input
    }

    if (videoInput.files.length > 0) {
        const videoURL = URL.createObjectURL(videoInput.files[0]);
        postsDiv.innerHTML += `<video width="100" controls>
                                <source src="${videoURL}" type="video/mp4">
                                Your browser does not support the video tag.
                                </video>`;
        videoInput.value = ''; // Clear input
    }
});
