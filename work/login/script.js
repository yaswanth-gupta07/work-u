document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulated login check
    if (username === "user" && password === "password") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password!");
    }
});
