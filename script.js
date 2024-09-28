// Show Login or Registration Form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
}

function showRegister() {
    document.getElementById('registerForm').style.display = 'block';
}

// Close Form
function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

// Register Function (Note: For front-end only, you will need a backend to save data)
function register() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Store user info (localStorage for demo purposes)
    localStorage.setItem('user', JSON.stringify({ firstName, lastName, username, contactInfo, password }));

    alert("Registration Successful!");
    closeForm('registerForm');
    document.getElementById('uploadForm').style.display = 'block';
}

// Login Function
function login() {
    const loginUser = document.getElementById('loginUser').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && (user.username === loginUser || user.contactInfo === loginUser) && user.password === loginPassword) {
        alert("Login Successful!");
        closeForm('loginForm');
        document.getElementById('uploadForm').style.display = 'block';
    } else {
        alert("Login Failed! Incorrect Username or Password.");
    }
}

// Upload Post Function
function uploadPost() {
    const file = document.getElementById('fileUpload').files[0];
    const caption = document.getElementById('caption').value;

    if (file) {
        alert("File uploaded successfully!");
        // For real use-case, you'd need a backend to save and handle files.
    } else {
        alert("Please select a file.");
    }
}
