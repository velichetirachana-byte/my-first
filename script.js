// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Allow normal navigation to other pages
        if (href.includes('.html')) {
            return;
        }

        // Smooth scroll for page sections
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();

            const section = document.querySelector(href);

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Sticky header shadow
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }
});

// Button animation
document.querySelectorAll('.btn').forEach(button => {

    button.addEventListener('mouseenter', () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = "scale(1)";
    });

});

// Contact Form Validation
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const message = document.getElementById("message");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            phone.value.trim() === "" ||
            message.value.trim() === ""
        ) {
            alert("Please fill in all the fields.");
            return;
        }

        alert("Thank you! Your request has been submitted successfully.");

        form.reset();

    });

}