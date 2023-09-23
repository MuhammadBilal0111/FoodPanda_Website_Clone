document.addEventListener("DOMContentLoaded", function () {
    let previousScrollY = window.scrollY;
    let navLarge = document.getElementById("navbar-large");
    let navSmall = document.getElementById("navbar-small");

    function toggleNav() {
        let currentScrollY = window.scrollY;
        if (previousScrollY <= currentScrollY) {
            navLarge.classList.add("navbar-hidden");
            navSmall.classList.remove("navbar-hidden");
        } else {
            navLarge.classList.remove("navbar-hidden");
            navSmall.classList.add("navbar-hidden");
        }
        previousScrollY = currentScrollY;
    }

    function toggleNavbarVisibility() {
        if (window.innerWidth <= 957) {
            navLarge.style.display = "none";
            navSmall.style.display = "block";
        } else {
            navLarge.style.display = "block";
            navSmall.style.display = "none";
        }
    }

    window.addEventListener("load", toggleNavbarVisibility);
    window.addEventListener("scroll", toggleNav);
    window.addEventListener("resize", toggleNavbarVisibility);
});
