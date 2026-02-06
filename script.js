const WHATSAPP_NUMBER = "YOUR_NUMBER_NO_PLUS";
const PREFILL_TEXT =
  "Hi Ahmed, I’m from [Company]. Market: [ ]. Budget: [ ]. Goal: [Leads/Sales]. Website/IG: [ ]. When can we talk?";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const whatsappButtons = document.querySelectorAll(".whatsapp-btn");
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL_TEXT)}`;

whatsappButtons.forEach((button) => {
  button.setAttribute("href", whatsappLink);
  button.addEventListener("click", (event) => {
    const position = button.dataset.position || "unknown";
    if (typeof gtag === "function") {
      gtag("event", "whatsapp_click", { position, value: 1 });
    }
    if (typeof fbq === "function") {
      fbq("trackCustom", "WhatsAppClick", { position });
    }
  });
});

const revealElements = document.querySelectorAll("[data-reveal]");

if (!prefersReducedMotion && revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 60}ms`;
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("in-view"));
}

const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navAnchors.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => sectionObserver.observe(section));

if (prefersReducedMotion) {
  document.documentElement.style.scrollBehavior = "auto";
}
