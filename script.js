
document.addEventListener("DOMContentLoaded", function () {

    // Update footer year automatically
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            `&copy; ${new Date().getFullYear()} Shridhar Padashetty. Built with HTML, CSS, and AWS.`;
    }

    // Highlight the navigation link for the selected section
    const navLinks = document.querySelectorAll(".links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    // Smooth scrolling for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");

            if (targetId.length > 1) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Display a welcome message in the browser console
    console.log("Welcome to Shridhar's Portfolio!");
    console.log("Portfolio loaded successfully.");

});
