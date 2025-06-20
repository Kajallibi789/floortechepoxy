// include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const includeSrc = el.getAttribute('data-include');
    fetch(includeSrc)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;

        if (includeSrc.includes("services.html")) {
          initCarousel(); // call your carousel init function here
        }

        // Add this block to attach the toggle after header is loaded
        setupMobileMenuToggle();
      });
  });
});

function initCarousel() {
  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  if (!carousel || !nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  // Optional: dynamically populate items here from data array
  const servicesData = [
    {
      title: "Epoxy Flooring",
      image: "../assets/Epoxy-Floorings-Service.jpg",
      link: "../services/epoxyflooring.html"
    },
    {
      title: "EPU Flooring",
      image: "../assets/EPU-FLOORINGS-services.jpg",
      link: "../services/epu-floorings.html"
    },
    {
      title: "PU Flooring",
      image: "../assets/EPU-FLOORINGS-services.jpg",
      link: "../services/pu-flooring.html"
    },
    {
      title: "EP-PU Flooring",
      image: "../assets/Ep-pu-flooring.jpg",
      link: "../services/ep-pu-flooring.html"
    },
    {
      title: "ESD Flooring",
      image: "../assets/ESD-FLOORINGS.jpg",
      link: "../services/esd-floorings.html"
    },
    {
      title: "PU Concrete Flooring",
      image: "../assets/PU-CONCRETE-FLOORINGS.jpg",
      link: "../services/pu-concrete.html"
    },
    {
      title: "Green Flooring",
      image: "../assets/greenfloors.jpg",
      link: "../services/green.html"
    },
    {
      title: "Poly Aspartic Flooring",
      image: "../assets/POLY-ASPARTIC-FLOORINGS-1.jpg",
      link: "../services/polyaspartic.html"
    },
    {
      title: "One day Flooring",
      image: "../assets/One-day-Floorings-Service.jpg",
      link: "../services/oneday.html"
    },
    {
      title: "Densi Polished Flooring",
      image: "../assets/DENSI-POLISHED-FLOORS-1.jpg",
      link: "../services/densipolished.html"
    },
    {
      title: "Deck Coatings",
      image: "../assets/deck-coating.jpg",
      link: "../services/deckcoatings.html"
    },
    
    // Add more objects here
  ];

  servicesData.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card flex-none w-72 bg-gray-800 overflow-hidden shadow-lg";
     card.innerHTML = `
    <a href="${item.link}" class="block h-full">
      <div class="relative">
        <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover">
        <div class="absolute top-2 right-2 bg-white text-gray-900 rounded-full py-2 px-2 shadow-lg transition-transform">
          <img src="../assets/link.svg" alt="link" class="w-4">
        </div>
      </div>
      <div class="p-4">
        <span class="text-white font-bold">${item.title}</span>
      </div>
    </a>
  `;
    carousel.appendChild(card);
  });
}

// Avoid attaching multiple listeners
function setupMobileMenuToggle() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    // Clone the node to remove old event listeners (safe and easy trick)
    const newButton = mobileMenuButton.cloneNode(true);
    mobileMenuButton.replaceWith(newButton);

    newButton.addEventListener("click", () => {
      console.log("hit");
      mobileMenu.classList.toggle("hidden");
    });
  }
}
