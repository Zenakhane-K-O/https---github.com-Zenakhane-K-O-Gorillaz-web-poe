// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // Fade-in on scroll for elements with class 'fade-target'
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".fade-target").forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("fade-in");
            }
        });
    });

    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const email = document.getElementById("email");
            const name = document.getElementById("name");
            const message = document.getElementById("message");

            if (!email.value.trim() || !name.value.trim() || !message.value.trim()) {
                e.preventDefault();
                alert("Please complete all fields before submitting.");
            }
        });
    }

    // Footer newsletter form validation
    const footerForm = document.getElementById("footer-form");
    if (footerForm) {
        footerForm.addEventListener("submit", (e) => {
            const footerEmail = document.getElementById("footer-email");
            if (!footerEmail.value.trim()) {
                e.preventDefault();
                alert("Please enter your email address.");
            }
        });
    }

    // Toggle buttons for About Us (Vision, Mission, HQ)
    const sections = ["vision", "mission", "hq"];
    sections.forEach((id) => {
        const btn = document.getElementById(`${id}-btn`);
        const content = document.getElementById(`${id}-content`);
        if (btn && content) {
            btn.addEventListener("click", () => {
                content.classList.toggle("hidden");
                content.classList.toggle("fade-in");
            });
        }
    });
});
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
