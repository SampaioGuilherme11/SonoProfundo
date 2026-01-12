// Substitua pelo seu link de checkout da Kirvano
const kirvanoCheckoutUrl = "https://pay.kirvano.com/52e4fc52-2acb-48b5-bbec-ff1419b4d535";

document.addEventListener("DOMContentLoaded", () => {
  // Menu hamburguer: abre/fecha no mobile
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("menu");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      const isActive = menu.classList.toggle("active");
      hamburger.classList.toggle("active", isActive);
      hamburger.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
          hamburger.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // CTA principal → redireciona ao checkout
  const ctaCheckout = document.getElementById("ctaCheckout");
  if (ctaCheckout) {
    ctaCheckout.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("CTA Checkout clicado");
      window.location.href = kirvanoCheckoutUrl;
    });
  }

  // Scroll suave para âncoras (exceto o CTA de checkout)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href !== "#" && href !== "#!" && link.id !== "ctaCheckout") {
      link.addEventListener("click", (e) => {
        const targetId = href.slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  });

  // CTA do topo: rola até preço
  const ctaTop = document.getElementById("ctaTop");
  if (ctaTop) {
    ctaTop.addEventListener("click", (e) => {
      const targetEl = document.getElementById("preco");
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
});

