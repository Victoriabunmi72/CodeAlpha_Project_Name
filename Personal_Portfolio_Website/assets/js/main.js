document.addEventListener('DOMContentLoaded', function () {
    // Typed.js Initialization
    if (typeof Typed !== 'undefined') {
        new Typed('.typedText', {
            strings: ['a Software Engineer', 'a Community Builder', 'an Educator'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 2000,
            loop: true
        });
    } else {
        console.error('Typed.js is not loaded.');
    }

    // ScrollReveal Initialization
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.featured-box', { delay: 200, distance: '50px', origin: 'bottom' });
        ScrollReveal().reveal('.about-info', { delay: 200, distance: '50px', origin: 'left' });
        ScrollReveal().reveal('.skills-box', { delay: 200, distance: '50px', origin: 'right' });
        ScrollReveal().reveal('.project-box', { delay: 200, distance: '50px', origin: 'bottom', interval: 100 });
        ScrollReveal().reveal('.contact-info', { delay: 200, distance: '50px', origin: 'left' });
        ScrollReveal().reveal('.form-control', { delay: 200, distance: '50px', origin: 'right' });
    } else {
        console.error('ScrollReveal.js is not loaded.');
    }

    // Responsive Navigation Menu Toggle
    const navMenu = document.getElementById('myNavMenu');
    const navMenuBtn = document.querySelector('.nav-menu-btn');

    if (navMenu && navMenuBtn) {
        navMenuBtn.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    } else {
        console.error('Navigation menu elements are not found.');
    }

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-link');
            }
        });
    });

    document.querySelectorAll('.video-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    });
    
});