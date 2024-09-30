document.getElementById('registration').addEventListener('submit', function(e) {
    e.preventDefault();
    // Capture user data
    const fullName = this[0].value;
    const username = this[1].value;
    const contact = this[2].value;
    const password = this[3].value;
    const confirmPassword = this[4].value;

    // Simple validation
    if (password === confirmPassword) {
        alert("Registration successful!");
        // Here you can save user data to local storage or a database
    } else {
        alert("Passwords do not match.");
    }
});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    const contact = this[0].value;
    const password = this[1].value;

    // Add logic to check credentials
    // For demonstration, we're just showing a success message
    alert("Login successful!");
});
