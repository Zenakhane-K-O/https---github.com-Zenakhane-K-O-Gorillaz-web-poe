// Toggle menu for mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    const email = document.getElementById("email");
    if (!email.value) {
        e.preventDefault();
        alert("Please enter a valid email.");
    }
});

// Footer form validation
document.getElementById("footer-form").addEventListener("submit", function (e) {
    const email = document.getElementById("footer-email");
    if (!email.value) {
        e.preventDefault();
        alert("Please enter your email address.");
    }
});
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
// Toggle menu for mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});

// Contact form validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        const email = document.getElementById("email");
        if (!email.value.trim()) {
            e.preventDefault();
            alert("Please enter your email address.");
        }
    });
}
document.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-target').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
         el.classList.add('fade-in');
      }
    });
  });
  
  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('active');
  });
  
