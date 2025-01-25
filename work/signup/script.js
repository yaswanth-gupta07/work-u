// Signup Form Handling
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    // Validate input fields
    if (fullname === "") {
        alert("Full name cannot be empty.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must contain at least 6 characters, 1 uppercase letter, and 1 number.");
        return;
    }

    // Save user data to localStorage (simulating a database)
    const userData = {
        fullname: fullname,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Success message and redirect to login page
    alert("Sign up successful! Please login.");
    window.location.href = "index.html"; // Redirect to login page
});
