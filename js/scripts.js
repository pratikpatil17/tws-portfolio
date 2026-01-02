/*!
 * Portfolio Scripts
 * Author: Pratik Patil
 * Description: Handles navbar behavior and navigation interactions
 */

window.addEventListener("DOMContentLoaded", () => {

    /**
     * Shrink navbar when page is scrolled
     */
    const handleNavbarShrink = () => {
        const navbar = document.querySelector("#mainNav");
        if (!navbar) return;

        if (window.scrollY === 0) {
            navbar.classList.remove("navbar-shrink");
        } else {
            navbar.classList.add("navbar-shrink");
        }
    };

    // Run on page load
    handleNavbarShrink();

    // Run on scroll
    document.addEventListener("scroll", handleNavbarShrink);

    /**
     * Enable Bootstrap ScrollSpy
     */
    const mainNav = document.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    /**
     * Collapse mobile navbar after clicking a link
     */
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (
                navbarToggler &&
                window.getComputedStyle(navbarToggler).display !== "none"
            ) {
                navbarToggler.click();
            }
        });
    });

});
