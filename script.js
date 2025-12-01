// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        let errors = [];

        if (name.length < 3) {
            errors.push("Name must be at least 3 characters.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.push("Email is not in a valid format.");
        }

        const phoneRegex = /^[0-9]{9,11}$/;
        if (!phoneRegex.test(phone)) {
            errors.push("Phone must contain 9–11 digits only.");
        }

        if (message.length < 10) {
            errors.push("Message must be at least 10 characters.");
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        } else {
            alert("Form submitted successfully (prototype only).");
        }
    });
}

// SCM FEATURES – toggle details on card click
const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("open");
    });
});

// ABOUT PAGE – accordion cards (chỉ mở 1 card một lúc)
const aboutCards = document.querySelectorAll(".about-card");

aboutCards.forEach(card => {
    card.addEventListener("click", () => {
        aboutCards.forEach(c => {
            if (c !== card) c.classList.remove("open");
        });
        card.classList.toggle("open");
    });
});
