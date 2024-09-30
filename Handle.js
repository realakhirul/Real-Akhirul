document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    // Store user data in local storage
    localStorage.setItem("registeredUser", JSON.stringify({ email, password }));
    alert("Registration successful! You can now login.");
});
