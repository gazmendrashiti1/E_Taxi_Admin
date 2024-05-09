var adminPassword = "admin123"; // Set your default admin password

    function validateForm() {
        var username = document.getElementById('yourUsername').value;
        var password = document.getElementById('yourPassword').value;

        // Simple validation, you can add more complex validation as needed
        if (username === "") {
            alert("Please enter your username.");
            return;
        }

        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        // Check if the entered password is the default admin password
        if (password === adminPassword) {
            // Redirect to example.html on successful authentication
            window.location.href = "example.html";
        } else {
            // Show a pop-up if the entered password is incorrect
            alert("You are not the admin.");
        }
    }