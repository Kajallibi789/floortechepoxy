// include.js
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const includeSrc = el.getAttribute('data-include');
    fetch(includeSrc)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;

        if (includeSrc.includes("header.html")) {
    requestAnimationFrame(() => {
    });}
        if (includeSrc.includes("services.html")) {
          initCarousel();
        }
        if (includeSrc.includes("whatwedo.html")) {
          initWhatwedo();
        }

        setupMobileMenuToggle();
        initScrollAnimations(); // ✅ attach fade-in animations
      });
  });

  initScrollAnimations(); // ✅ also run once in case content is already in page
});

function initHeader() {
  const mainNav = document.querySelector('.main-nav');


  window.addEventListener('scroll', function () {
    if (this.scrollY > 200) {
      mainNav.classList.add('slidedown', 'backdrop-blur-md', 'bg-blue-900/50');

    } else {
      mainNav.classList.remove('slidedown', 'backdrop-blur-md', 'bg-blue-900/50');

    }
  });
}


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
      image: "../assets/puflooring.webp",
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
        <div class="absolute top-2 right-2 bg-white hover:bg-gray-200 text-gray-900 rounded-full py-2 px-2 shadow-lg transition-transform">
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

function initWhatwedo() {
  const bullet = '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Arrow_Circle_Right"> <path id="Vector" d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#2296f9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>';
  const bulletNames = document.getElementsByClassName("bullet-point");
  for (let i = 0; i < bulletNames.length; i++) {
    bulletNames[i].innerHTML = bullet;
  }
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
      mobileMenu.classList.toggle("hidden");
    });
  }
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-on-scroll');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-5');
        obs.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2 // Adjust how much of the element needs to be visible
  });

  elements.forEach(el => observer.observe(el));
}
