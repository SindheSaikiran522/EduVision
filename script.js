// Initialize variables
let isLoggedIn = false;
let userName = "";

// Handle language change
function changeLanguage(event) {
    const selectedLang = event.target.value;
    alert(`Language switched to: ${selectedLang}`);
    // Add functionality to change text on the page dynamically based on the selected language
}

// Show Register form
document.getElementById("show-register").addEventListener("click", () => {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("register-section").classList.remove("hidden");
});

// Show Login form
document.getElementById("show-login").addEventListener("click", () => {
    document.getElementById("register-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
});

// Handle Register form submission
document.getElementById("register-form").addEventListener("submit", (event) => {
    event.preventDefault();
    userName = document.getElementById("register-username").value;
    alert("Registration successful! Please log in.");
    document.getElementById("register-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
});

// Handle Login form submission
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    isLoggedIn = true;
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("user-name").textContent = userName;
});

// Handle dashboard form submission for planting prediction
document.getElementById("user-inputs").addEventListener("submit", (event) => {
    event.preventDefault();

    // Simulated weather alerts
    const weatherAlert = "Heavy rains expected in the next 2 days.";
    document.getElementById("weather-message").textContent = weatherAlert;
    document.getElementById("weather-alerts").classList.remove("hidden");

    // Simulating results (in a real app, you'd calculate these based on the user's inputs)
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result-crop").textContent = "Wheat";
    document.getElementById("result-profit").textContent = "30%";
    document.getElementById("result-duration").textContent = "6 months";
    document.getElementById("result-weather").textContent = "Moderate";
    document.getElementById("result-recommendations").textContent = "Plant in early spring";
    document.getElementById("result-fertilizer").textContent = "Kg per hectare";
});

// Handle logout
document.getElementById("logout-button").addEventListener("click", () => {
    isLoggedIn = false;
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("auth-container").classList.remove("hidden");
    document.getElementById("user-name").textContent = "";
});
