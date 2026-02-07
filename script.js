
// Run when the page fully loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Prison System page loaded");

    // Welcome message
    alert("Welcome to the Prison System");
    
    // Get all navigation links
    const links = document.querySelectorAll(".first-container a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {

            // Highlight active link
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Confirmation for Login & Sign Up
            if (this.textContent === "Login" || this.textContent === "Sign Up") {
                const confirmAction = confirm(
                    "Are you sure you want to proceed to " + this.textContent + "?"
                );
                if (!confirmAction) {
                    event.preventDefault(); // stop navigation
                }
            }
        });
    });
});
