// Sample user data in JSON format
const users = [
    { username: "chitransh", password: "cj@2005" },
    { username: "abhisar", password: "as@2004" },
    { username: "deepali", password: "dg@2004" },
    { username: "himanshi", password: "hk@2004" },
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check user credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");

        
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});