// Redirect to "Create Account" page
document.getElementById("createAccountBtn")?.addEventListener("click", function () {
    window.location.href = "create_account.html";
});

// Login functionality
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Admin credentials
    if (username === "Administratorgroup4" && password === "Research2025") {
        alert("Welcome, Admin!");
        window.location.href = "admin_dashboard.html"; // Redirect to admin dashboard
        return;
    }

    // Normal user login
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Welcome, ${user.role}!`);
        localStorage.setItem("isLoggedIn", JSON.stringify(user)); // Save logged-in user

        // Redirect based on user role
        if (user.role === "Student") {
            window.location.href = "student_dashboard.html";
        } else {
            window.location.href = "dashboard.html"; // Replace with instructor dashboard if necessary
        }
    } else {
        message.textContent = "Invalid username or password.";
    }
});

// Register new users
document.getElementById("createAccountForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const message = document.getElementById("message");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.username === username)) {
        message.textContent = "Username already exists.";
        return;
    }

    users.push({ username, email, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully! You can now log in.");
    window.location.href = "index.html";
});

// Back to Login
document.getElementById("backToLogin")?.addEventListener("click", function () {
    window.location.href = "index.html";
});
