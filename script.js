// Hamburger toggle for mobile menu
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");      // Open/close menu
    toggle.classList.toggle("active");  // Animate hamburger to X
  });
}

// Automatically highlight the active menu link
const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }

  // Close mobile menu when a link is clicked
  link.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      toggle.classList.remove("active"); // Reset hamburger to original
    }
  });
});
