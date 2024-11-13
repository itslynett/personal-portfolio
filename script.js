document.addEventListener("DOMContentLoaded", function() {
    
    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('nav ul li a');
    navigationLinks.forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project Slideshow Functionality
    const projectSlides = document.querySelectorAll(".project-slide");
    let currentProjectSlide = 0;

    function showProjectSlides() {
        projectSlides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentProjectSlide);
        });
        currentProjectSlide = (currentProjectSlide + 1) % projectSlides.length;
    }

    // Start project slideshow loop every 3 seconds
    setInterval(showProjectSlides, 3000);

    // Contact Form Validation and Submission
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate fields
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Successful submission alert
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    });
});
