// This file handles the authentication logic for the login and signup pages, including simple validation for username and password.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            if (validateCredentials(username, password)) {
                alert('Login successful!');
                // Redirect to homepage or dashboard
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = signupForm.username.value;
            const password = signupForm.password.value;

            if (validateCredentials(username, password)) {
                alert('Signup successful! You can now log in.');
                // Optionally redirect to login page
                window.location.href = 'login.html';
            } else {
                alert('Invalid input. Please ensure username and password are valid.');
            }
        });
    }

    function validateCredentials(username, password) {
        return username.length >= 3 && password.length >= 6;
    }
});