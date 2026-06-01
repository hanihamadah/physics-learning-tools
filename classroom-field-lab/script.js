const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const parallaxItems = document.querySelectorAll(".parallax");

if (!reduceMotion && parallaxItems.length) {
  window.addEventListener("pointermove", (event) => {
    const x = event.clientX - window.innerWidth / 2;
    const y = event.clientY - window.innerHeight / 2;

    parallaxItems.forEach((item) => {
      const depth = Number(item.getAttribute("data-depth") || 0.03);
      item.style.translate = `${x * depth}px ${y * depth}px`;
    });
  });
}

document.querySelectorAll("[data-email-reveal]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const email = link.getAttribute("data-email-reveal");

    if (email && link.textContent.trim() !== email) {
      event.preventDefault();
      link.textContent = email;
      link.setAttribute("aria-label", `Email ${email}`);
    }
  });
});
