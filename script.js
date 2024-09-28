document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    const videoInput = document.getElementById('videoInput');
    if (videoInput.files.length > 0) {
        const videoFile = videoInput.files[0];
        const videoUrl = URL.createObjectURL(videoFile);

        // Create a video element to display the uploaded video
        const videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.controls = true;

        // Add the video to the feed
        document.getElementById('videoFeed').appendChild(videoElement);

        // Clear the input field
        videoInput.value = '';
    } else {
        alert('Please select a video to upload.');
    }
});
