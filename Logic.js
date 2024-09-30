document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    
    // Here, you would typically check against a database
    // For now, we can simply store the user in local storage
    localStorage.setItem("loggedInUser", email);
    alert("Login successful!");
    // Redirect to the main page or update UI accordingly
});
