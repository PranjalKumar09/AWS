// Smooth scrolling for internal anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        target.focus({ preventScroll: true });
      }
    });
  });
});

// Back-to-top button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "↑ Top";
  btn.setAttribute("aria-label", "Back to top");
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    display: "none",
    padding: "0.5rem 0.75rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#0055aa",
    color: "#fff",
    cursor: "pointer",
    zIndex: "1000"
  });
  document.body.appendChild(btn);

  // Show/hide on scroll
  window.addEventListener("scroll", () => {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // Scroll to top when clicked
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Simple client-side form validation feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    let valid = true;
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = "red";
      } else {
        input.style.borderColor = "#aaa";
      }
    });
    if (!valid) {
      e.preventDefault();
      alert("Please fill in all required fields.");
    }
  });
});
