    // Function to validate the registration form
    function validateForm() {
        var name = document.getElementById('yourName').value;
        var email = document.getElementById('yourEmail').value;
        var username = document.getElementById('yourUsername').value;
        var password = document.getElementById('yourPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        var acceptTerms = document.getElementById('acceptTerms').checked;

        // Validate against default admin values
        if (name !== "admin" || email !== "admin@grandcruize.com" || password !== "12341234" || confirmPassword !== "12341234") {
            alert("Invalid registration details. Please enter the default admin values.");
            return false;
        }

        // Validate username
        if (username === "") {
            alert("Please choose a username.");
            return false;
        }

        // Validate email format
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validate password length
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return false;
        }

        // Validate password and confirmPassword match
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
            return false;
        }

        // Validate terms acceptance
        if (!acceptTerms) {
            alert("You must agree to the terms and conditions before submitting.");
            return false;
        }

        // If validation passes, you can submit the form or perform other actions here
        alert("Registration successful!");
        // You may want to submit the form or perform other actions here
    }

    // Function to check if the email is valid (basic validation)
    function isValidEmail(email) {
        // You can replace this with a more robust email validation logic
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
