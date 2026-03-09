"use strict";

/* -----------------------------
   Active nav helpers
----------------------------- */
function cleanPath(p) {
  if (!p) return "/";
  p = String(p).split("?")[0].split("#")[0].trim();
  try {
    if (p.startsWith("http://") || p.startsWith("https://")) p = new URL(p).pathname;
  } catch {}
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/index\.html$/i, "");
  p = p.replace(/\.html$/i, "");
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p || "/";
}

function pathsMatch(current, href) {
  if (href === current) return true;
  if (href !== "/" && current.startsWith(href + "/")) return true;
  return false;
}

function initActiveNav() {
  const nav = document.querySelector('nav[aria-label="Navigation"]');
  if (!nav) return;

  const current = cleanPath(window.location.pathname);

  nav.querySelectorAll(".nav-active").forEach((el) => el.classList.remove("nav-active"));
  nav.querySelectorAll(".nav-group.nav-active").forEach((el) => el.classList.remove("nav-active"));

  nav.querySelectorAll('a[href]:not(.dropdown-item)').forEach((a) => {
    const href = cleanPath(a.getAttribute("href"));
    if (pathsMatch(current, href)) a.classList.add("nav-active");
  });

  nav.querySelectorAll(".nav-group").forEach((group) => {
    const items = group.querySelectorAll(".nav-dropdown a.dropdown-item[href]");
    let active = false;
    items.forEach((item) => {
      const href = cleanPath(item.getAttribute("href"));
      if (pathsMatch(current, href)) active = true;
    });
    if (active) group.classList.add("nav-active");
  });
}

/* -----------------------------
   Mobile menu — handled by Nav.astro
----------------------------- */
function initMobileMenu() {
  // Intentionally empty — managed entirely by Nav.astro inline script
}

/* -----------------------------
   Footer year
----------------------------- */
function initFooterYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

/* -----------------------------
   Dynamic card mouse effects
----------------------------- */
class DynamicCards {
  constructor() {
    this.cards = [];
    this.mouse = { x: 0, y: 0 };
    this.rafId = null;
    this.init();
  }

  init() {
    const container = document.getElementById("infoCards");
    if (!container) return;

    this.cards = Array.from(container.querySelectorAll(".dynamic-card"));
    if (!this.cards.length) return;

    this.bindEvents();
    this.animateLoop();
  }

  bindEvents() {
    document.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX / window.innerWidth;
      this.mouse.y = e.clientY / window.innerHeight;
    });

    this.cards.forEach((card, i) => {
      card.addEventListener("mouseenter", () => this.onCardHover(i));
      card.addEventListener("mouseleave", () => this.onCardLeave());
      card.addEventListener("touchstart", (e) => {
        e.preventDefault();
        card.classList.add("scale-105");
      }, { passive: false });
      card.addEventListener("touchend", () => card.classList.remove("scale-105"));
    });

    window.addEventListener("beforeunload", () => {
      if (this.rafId) cancelAnimationFrame(this.rafId);
    });
  }

  onCardHover(index) {
    const len = this.cards.length;
    const neighbors = [
      this.cards[(index + 1) % len],
      this.cards[(index + len - 1) % len]
    ];
    [this.cards[index], ...neighbors].forEach((c) => c?.classList.add("paired"));
  }

  onCardLeave() {
    this.cards.forEach((c) => {
      c.classList.remove("paired");
      c.style.removeProperty("--neighbor-glow");
    });
  }

  animateLoop() {
    this.cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const centerX = (rect.left + rect.width / 2) / window.innerWidth;
      const centerY = (rect.top + rect.height / 2) / window.innerHeight;
      const dx = (this.mouse.x - centerX) * 8;
      const dy = (this.mouse.y - centerY) * 8;

      card.style.transform = `
        translate3d(${dx}px, ${dy}px, 0)
        rotateX(${(this.mouse.y - centerY) * 2}deg)
        rotateY(${(this.mouse.x - centerX) * 2}deg)
      `;

      const distance = Math.hypot(this.mouse.x - centerX, this.mouse.y - centerY);
      card.style.setProperty("--mouse-glow", String(Math.max(0, 1 - distance * 2)));
    });

    this.rafId = requestAnimationFrame(() => this.animateLoop());
  }
}

/* -----------------------------
   App init
----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initFooterYear();
  initActiveNav();
  new DynamicCards();
});