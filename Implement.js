document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        // Redirect or update UI as needed
    } else {
        alert("Invalid email or password.");
    }
});
