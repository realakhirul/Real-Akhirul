document.getElementById("uploadButton").addEventListener("click", function() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (file) {
        alert("File uploaded: " + file.name);
        // Add logic to display the uploaded content on the page if needed
    } else {
        alert("Please select a file to upload.");
    }
});
