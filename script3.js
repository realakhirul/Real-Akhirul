document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const photo = document.getElementById('photo').files[0];
    const video = document.getElementById('video').files[0];

    if (photo) {
        alert('Photo uploaded successfully!');
        // Here you would handle the actual upload process
    }
    if (video) {
        alert('Video uploaded successfully!');
        // Here you would handle the actual upload process
    }
});
