document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  const submitBtn = document.querySelector("button[type='submit']");

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));

  // Submit button interaction
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitBtn.textContent = "Submitting...";
    submitBtn.disabled = true;

    setTimeout(() => {
      alert("Form submitted successfully! 🌙");
      submitBtn.textContent = "Submit";
      submitBtn.disabled = false;
    }, 1500);
  });
});
