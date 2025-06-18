// include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    fetch(el.getAttribute("data-include"))
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;

        // Add this block to attach the toggle after header is loaded
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenuButton && mobileMenu) {
          mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
          });
        }
      });
  });
});