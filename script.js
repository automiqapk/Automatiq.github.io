(() => {
  "use strict";

  const menuButton = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  const header = document.querySelector("[data-header]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  if (menuButton && menu) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector(".sr-only").textContent = "Abrir menu";
      menu.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.querySelector(".sr-only").textContent = isOpen ? "Abrir menu" : "Fechar menu";
      menu.classList.toggle("is-open", !isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) closeMenu();
    });
  }

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 10);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const revealElements = document.querySelectorAll(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
  }
})();