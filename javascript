// User Registration
function register(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            // User registered
            console.log("User registered:", userCredential.user);
        })
        .catch(error => {
            console.error("Error registering:", error);
        });
}

// User Login
function login(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log("User logged in:", userCredential.user);
        })
        .catch(error => {
            console.error("Error logging in:", error);
        });
}
