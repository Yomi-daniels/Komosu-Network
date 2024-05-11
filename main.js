let swiperPopular = new Swiper(".popular-container", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const tl = gsap.timeline({ delay: 1.75 });
const movements = [-100, 300, 150, -300, -90, 100, -200];
gsap.set("section", { opacity: 0, display: "none" });

gsap.set(".header-hero", { y: 100 });
gsap.set(".counter p", { y: 35 });

tl.to(".header-hero", {
  y: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.1,
});

tl.from(".tagline", { y: 40, opacity: 0, duration: 0.4 });

tl.to(".counter p", { y: 0, duration: 0.5, ease: "power3.out" }, "-=0.5");
tl.to(".counter p", { y: -35, duration: 0.5, ease: "power3.out", delay: 0.5 });

tl.to(".counter p", { y: -70, duration: 0.5, ease: "power3.out", delay: 0.5 });

tl.to(".counter p", {
  y: -105,
  duration: 0.5,
  ease: "power3.out",
  delay: 0.75,
});

tl.from(".tagline", { y: 40, opacity: 0 }, "-=4");

tl.to(".header-hero", {
  fontSize: "15vw",
  duration: 1,
  ease: "power3.out",
});

tl.to(".header-item", { clipPath: "none", duration: 0.1 }, "<");

tl.to(
  ".block",
  {
    clipPath: "polygon(0% 0%, 100% 0%, 10% 0%,0% 0%)",
    duration: 0.5,
    stagger: {
      amount: 0.5,
      from: "random",
      ease: "power3.out",
    },
  },
  "<"
);

tl.fromTo(
  "nav",
  { opacity: 0 },
  { opacity: 1, duration: 1, ease: "power2.out" }
);

tl.fromTo(
  ".hero-footer",
  { opacity: 0 },
  { opacity: 1, duration: 1.3, ease: "power3.out" }
);

movements.forEach((move, index) => {
  tl.to(
    `.h-${index + 2}`,
    {
      y: move,
      duration: 1,
      ease: "power3.out",
    },
    "<"
  );
});

tl.to(".tagline", {
  opacity: 0,
});

tl.to("section", { opacity: 1, display: "flex" });

const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const menuContainer = document.getElementById("menu");

openMenuBtn.addEventListener("click", function () {
  menuContainer.classList.add("open");
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", function () {
  menuContainer.classList.remove("open");
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
  document.body.style.overflow = "scroll";
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all menu item links
  const menuItems = document.querySelectorAll(".menu-item");

  // Function to close the menu
  function closeMenu() {
    document.getElementById("menu").classList.remove("open");
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "block";
    document.body.style.overflow = "scroll";
  }

  // Add click event listener to each menu item
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", closeMenu);
  });
});
