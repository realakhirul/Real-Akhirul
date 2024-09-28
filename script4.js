document.getElementById('storyUploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const storyPhoto = document.getElementById('storyPhoto').files[0];
    const storiesDiv = document.getElementById('stories');

    if (storyPhoto) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(storyPhoto);
        img.width = 100; // Adjust size as needed
        storiesDiv.appendChild(img);
        alert('Story uploaded successfully!');
    }
});
