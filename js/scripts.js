window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink
    const navbarShrink = () => {
        const navbar = document.body.querySelector('#mainNav');
        if (!navbar) return;
        if (window.scrollY === 0) navbar.classList.remove('navbar-shrink');
        else navbar.classList.add('navbar-shrink');
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Collapse responsive navbar
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
