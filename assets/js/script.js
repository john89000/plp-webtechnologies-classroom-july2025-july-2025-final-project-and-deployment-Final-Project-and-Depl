// ✅ Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you, " + name + "! Your message has been sent.");
  this.reset();
});


// ✅ Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle?.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


// ✅ Hero Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 4 seconds
if (slides.length > 0) {
  showSlide(currentSlide); // show first slide immediately
  setInterval(nextSlide, 4000);
}
