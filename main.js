var tl = gsap.timeline({ delay: 1.75 });
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

// Define the font sizes for large and small devices
const largeDeviceFontSize = "15vw";
const smallDeviceFontSize = "20vw"; // Adjust this value as needed

// Check if the device is small
const isSmallDevice = window.matchMedia("(max-width: 768px)").matches;

// Set the appropriate font size based on the device size
const targetFontSize = isSmallDevice
  ? smallDeviceFontSize
  : largeDeviceFontSize;

// Apply the font size using gsap
tl.to(".header-hero", {
  fontSize: targetFontSize,
  duration: 1,
  ease: "power3.out",
});

const headerHero = document.getElementById(".header-hero");

function increaseFont() {
  if (window.innerWidth < 768) {
    headerHero.style.fontSize = "20vw";
  } else {
    headerHero.style.fontSize = "15vw";
  }
}

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

// to duplicate html logo
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".product-logos").appendChild(copy);

// Car Product Slider

function init() {
  let current = 0;
  let directionForward = true;
  const items = document.querySelectorAll(".car-slider .product-items .item");
  const nextBtn = document.querySelector(".car-slider .next");
  const prevBtn = document.querySelector(".car-slider .prev");

  const getCurrentTime = () => {
    return;
  };
  const getCard = (item) => {
    return item.querySelector(".card");
  };

  const getTitle = (item) => {
    return item.querySelector(".product-title span");
  };

  const setItems = () => {
    items.forEach((item, index) => {
      getTitle(item).innerHTML = getTitle(item).textContent.replace(
        /\S/g,
        `<span class="letter">$&</span>`
      );
      if (index === current) return;

      anime.set(getCard(item), {
        translateX: "100vw",
      });
      anime.set(getTitle(item).querySelectorAll(".letter"), {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      });
    });
    anime.set(items[current], {
      translateX: 0,
      opacity: 1,
    });
  };

  const animate = {
    in(item) {
      const card = getCard(item);
      const title = getTitle(item);
      var tl = anime.timeline({
        duration: 1000,
        easing: "easeOutExpo",
      });
      tl.add({
        targets: card,
        translateX: directionForward ? ["100vw", 0] : ["-100vw", 0],
        rotate: [40, 0],
      }).add(
        {
          targets: title.querySelectorAll(".letter"),
          clipPath: [
            "polygon(0 0, 100% 0, 100% 0, 0 0 )",
            "polygon(0 0, 100% 0, 100% 100%, 0 100% )",
          ],
          translateY: directionForward ? ["2em", 0] : ["-2em", 0],
          delay: anime.stagger(40),
        },
        "-=1000"
      );
      return tl;
    },
    out(item) {
      const card = getCard(item);
      const title = getTitle(item);
      const tl = anime.timeline({
        duration: 1000,
        easing: "cubicBezier(0.86, 0, 0.07, 1))",
      });

      tl.add({
        targets: card,
        translateX: directionForward ? [0, "100vw"] : [0, "-100vw"],
        rotate: [0, -40],
      }).add(
        {
          targets: title.querySelectorAll(".letter"),
          clipPath: [
            "polygon(0 0, 100% 0, 100% 100%, 0 100% )",
            "polygon(0 0, 100% 100%, 100% 100%, 0 100% )",
          ],
          translateY: directionForward ? [0, "-15em"] : [0, "-15em"],
          delay: anime.stagger(40),
          // opacity: 0,
        },
        "-=1000"
      );
      return tl;
    },
  };
  function updateClasses() {
    items.forEach((item, index) => {
      if (index === current) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  }
  function next() {
    if (!directionForward) {
      directionForward = !directionForward;
    }
    animate.out(items[current]);
    current = (current + 1) % items.length; // fixed index calculation
    setTimeout(function () {
      animate.in(items[current]);
    }, 500);
    updateClasses();
  }

  function prev() {
    if (directionForward) {
      directionForward = !directionForward;
    }
    animate.out(items[current]);
    current = (current - 1 + items.length) % items.length; // fixed index calculation
    setTimeout(function () {
      animate.in(items[current]);
    }, 500);
    updateClasses();
  }
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  setItems();
}

document.addEventListener("DOMContentLoaded", init);
