document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const description = document.getElementById('description').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulating user registration (replace with backend API call)
    localStorage.setItem('user', JSON.stringify({ name, email, password, dob, description }));
    alert('Registration successful!');
});
