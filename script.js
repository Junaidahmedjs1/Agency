const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-link");
const counters = document.querySelectorAll(".counter");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-white", "shadow-md", "text-black");
    navbar.classList.remove("text-white");
    links.forEach((link) => {
      link.classList.remove("text-white");
      link.classList.add("text-black");
    });
  } else {
    navbar.classList.remove("bg-white", "shadow-md", "text-black");
    navbar.classList.add("text-white");
    links.forEach((link) => {
      link.classList.remove("text-black");
      link.classList.add("text-white");
    });
  }
});
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  const fill = document.getElementById("fill");
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Show button after scrolling 100px
  if (scrollTop > 100) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }

  // Animate fill color based on scroll
  fill.style.background = `linear-gradient(to top, #940fde 0%, #ffc107 ${scrollPercent}%, transparent ${scrollPercent}%)`;
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

AOS.init({
  duration: 2000,
  once: true,
});
AOS.init({
  duration: 1200,
  once: true,
});
AOS.init({
  duration: 1200,
  once: true,
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
window.addEventListener("load", () => {
  document.getElementById("loaderWrapper").style.display = "none";
});

// Hamburger Menu
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => menu.classList.remove("hidden"));
closeBtn.addEventListener("click", () => menu.classList.add("hidden"));
