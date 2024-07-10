document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false // Whether elements should animate out while scrolling past them
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});


/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 400) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});
