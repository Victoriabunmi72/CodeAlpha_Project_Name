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

document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".form-button .btn");
    const nameField = document.querySelector(".form-inputs input:nth-child(1)");
    const emailField = document.querySelector(".form-inputs input:nth-child(2)");
    const messageField = document.querySelector(".text-area textarea");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault();

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before sending.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Message Sent Successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Clear form fields
        nameField.value = "";
        emailField.value = "";
        messageField.value = "";
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
