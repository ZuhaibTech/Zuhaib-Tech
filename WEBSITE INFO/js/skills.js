document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    ".skills-section, .contact-header, .contact-form, .social-links"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(section => observer.observe(section));

  // Animate progress bars
  const progressBars = document.querySelectorAll("progress");
  progressBars.forEach(bar => {
    const value = bar.getAttribute("value");
    bar.setAttribute("value", 0);
    setTimeout(() => {
      bar.setAttribute("value", value);
    }, 500);
  });

  // Form submission simulation
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const button = form.querySelector("button");
    button.textContent = "Sending...";
    button.disabled = true;

    setTimeout(() => {
      alert("Message sent successfully! 🚀");
      button.textContent = "Send Message";
      button.disabled = false;
      form.reset();
    }, 1500);
  });
});
