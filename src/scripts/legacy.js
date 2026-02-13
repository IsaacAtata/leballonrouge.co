// assets/js/home.js
const I18N = {
  fr: {
    "meta.title": "Le Ballon Rouge — Accueil",
    "brand.subtitle": "Garderie francophone",

    "nav.home": "Accueil",
    "nav.programmes": "Programmes",
    "nav.centres": "Centres",
    "nav.about": "Qui sommes-nous?",
    "nav.contact": "Contact",
    "nav.apply": "Inscription",
    "nav.parents": "Espace parents",

    "cta.visit": "Planifier une visite",
    "cta.apply": "Demander une place",
    "cta.programme": "Voir le programme",

    "chips.qualified": "Personnel qualifié",
    "chips.safe": "Milieu sécuritaire",
    "chips.french": "Programme en français",

    "hero.title": "Une garderie francophone chaleureuse et sécuritaire",
    "hero.subtitle": "Apprentissage par le jeu, exploration, routines sécurisantes et français au quotidien.",
    "hero.image": "Image / illustration",

    "story.title": "Le ciel est la limite.",
    "story.body":
      "C’est en 1986 qu’un groupe de parents incorpore la Garderie Française de Hamilton Inc. et que la garderie Le Ballon Rouge ouvre ses portes dans l’école élémentaire catholique Monseigneur-de-Laval (Hamilton). En 2011, un deuxième centre ouvre à Brantford en partenariat avec le CSC Mon Avenir. Notre environnement intérieur et extérieur évolue constamment pour répondre aux besoins des enfants.",
    "story.more": "En savoir plus",

    "vmv.vision.title": "Vision",
    "vmv.vision.body":
      "Un environnement francophone de qualité axé sur l’apprentissage par le jeu et l’exploration, au Ballon Rouge le ciel est la limite!",
    "vmv.mission.title": "Mission",
    "vmv.mission.body":
      "Offrir un service de garde de qualité en français et développer la francophonie locale en partenariat avec les municipalités et les conseils scolaires francophones.",
    "vmv.values.title": "Valeurs",
    "vmv.values.list1": "Bienveillance",
    "vmv.values.list2": "Respect",
    "vmv.values.list3": "Sécurité",
    "vmv.values.list4": "Inclusion et diversité",
    "vmv.values.list5": "Partenariat",
    "vmv.values.list6": "Excellence",

    "centres.title": "Nos centres",
    "centres.subtitle": "Hamilton et Brantford — coordonnées et horaires.",
    "centres.cta": "Voir tous les centres",
    "centres.details": "Détails",

    "centres.ham.title": "Le Ballon Rouge — Hamilton",
    "centres.ham.addr": "135 Bendamere Ave, Hamilton, ON L9C 1N4",
    "centres.ham.phone": "Téléphone: 905-383-8371",
    "centres.ham.hours": "Heures: Lun–Ven 7h00–17h30",

    "centres.bra.title": "Le Ballon Rouge — Brantford",
    "centres.bra.addr": "60 Clench Ave, Brantford, ON N3T 1B8",
    "centres.bra.phone": "Téléphone: 519-753-6541",
    "centres.bra.hours": "Heures: Lun–Ven 7h30–17h30",

    "partners.title": "Partenariats",
    "partners.subtitle": "Un réseau de partenaires communautaires et institutionnels.",
    "partners.cta": "Voir la liste",
    "partners.more": "…et plus",

    "footer.subtitle": "Ontario",
    "footer.desc": "Centre de garde francophone, milieu accueillant et sécuritaire.",
    "footer.cta1": "Inscription",
    "footer.cta2": "Trouver un centre",
    "footer.links": "Liens",
    "footer.contact": "Contact",
    "footer.emailLabel": "Courriel:",
    "footer.note": "Pour une demande de place, utilisez le formulaire d’inscription."
  },

  en: {
    "meta.title": "Le Ballon Rouge — Home",
    "brand.subtitle": "French-language daycare",

    "nav.home": "Home",
    "nav.programmes": "Programs",
    "nav.centres": "Centres",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.apply": "Registration",
    "nav.parents": "Parents",

    "cta.visit": "Book a visit",
    "cta.apply": "Request a spot",
    "cta.programme": "View programs",

    "chips.qualified": "Qualified staff",
    "chips.safe": "Safe environment",
    "chips.french": "French program",

    "hero.title": "A warm and safe French-language daycare",
    "hero.subtitle": "Play-based learning, exploration, supportive routines, and French every day.",
    "hero.image": "Image / illustration",

    "story.title": "The sky is the limit.",
    "story.body":
      "In 1986, a group of parents incorporated Garderie Française de Hamilton Inc. and Le Ballon Rouge opened its doors in an elementary school in Hamilton. In 2011, a second centre opened in Brantford in partnership with CSC Mon Avenir. Our indoor and outdoor environment keeps evolving to meet children’s needs.",
    "story.more": "Learn more",

    "vmv.vision.title": "Vision",
    "vmv.vision.body":
      "A high-quality French environment focused on play-based learning and exploration—at Le Ballon Rouge, the sky is the limit!",
    "vmv.mission.title": "Mission",
    "vmv.mission.body":
      "Provide high-quality childcare in French and strengthen local Francophonie through partnerships with municipalities and French school boards.",
    "vmv.values.title": "Values",
    "vmv.values.list1": "Kindness",
    "vmv.values.list2": "Respect",
    "vmv.values.list3": "Safety",
    "vmv.values.list4": "Inclusion & diversity",
    "vmv.values.list5": "Partnership",
    "vmv.values.list6": "Excellence",

    "centres.title": "Our centres",
    "centres.subtitle": "Hamilton and Brantford — contacts and hours.",
    "centres.cta": "View all centres",
    "centres.details": "Details",

    "centres.ham.title": "Le Ballon Rouge — Hamilton",
    "centres.ham.addr": "135 Bendamere Ave, Hamilton, ON L9C 1N4",
    "centres.ham.phone": "Phone: 905-383-8371",
    "centres.ham.hours": "Hours: Mon–Fri 7:00–17:30",

    "centres.bra.title": "Le Ballon Rouge — Brantford",
    "centres.bra.addr": "60 Clench Ave, Brantford, ON N3T 1B8",
    "centres.bra.phone": "Phone: 519-753-6541",
    "centres.bra.hours": "Hours: Mon–Fri 7:30–17:30",

    "partners.title": "Partnerships",
    "partners.subtitle": "A network of community and institutional partners.",
    "partners.cta": "See the list",
    "partners.more": "…and more",

    "footer.subtitle": "Ontario",
    "footer.desc": "French-language childcare in a welcoming and safe environment.",
    "footer.cta1": "Registration",
    "footer.cta2": "Find a centre",
    "footer.links": "Links",
    "footer.contact": "Contact",
    "footer.emailLabel": "Email:",
    "footer.note": "To request a spot, use the registration form."
  }
};

const INFO_CARDS = {
  fr: [
    {
      tag: "Immersion en français",
      title: "Langue au quotidien",
      body: "Un environnement où le français est la langue principale de communication."
    },
    {
      tag: "Petits groupes",
      title: "Attention individualisée",
      body: "Des groupes adaptés pour soutenir le rythme et les besoins de chaque enfant."
    },
    {
      tag: "Repas & collations",
      title: "Habitudes de vie",
      body: "Des repas équilibrés et des routines qui favorisent le bien-être."
    }
  ],
  en: [
    {
      tag: "French immersion",
      title: "French every day",
      body: "An environment where French is the main language of communication."
    },
    {
      tag: "Small groups",
      title: "Individual support",
      body: "Groups designed to support each child’s pace and needs."
    },
    {
      tag: "Meals & snacks",
      title: "Healthy routines",
      body: "Balanced meals and routines that support children’s well-being."
    }
  ]
};

function renderInfoCards(lang) {
  const wrap = document.getElementById("infoCards");
  if (!wrap) return;

  const cards = INFO_CARDS[lang] || INFO_CARDS.fr;
  wrap.innerHTML = cards.map(c => `
    <article class="rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-xl shadow-black/5">
      <div class="inline-flex rounded-full border border-black/10 bg-white/80 px-3 py-2 text-xs font-extrabold text-slate-600">
        ${c.tag}
      </div>
      <h3 class="mt-3 text-lg font-black">${c.title}</h3>
      <p class="mt-2 leading-7 text-slate-600">${c.body}</p>
    </article>
  `).join("");
}

function applyTranslations(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.dataset.lang = lang;

  const dict = I18N[lang] || I18N.fr;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key || !(key in dict)) return;
    el.textContent = dict[key];
  });

  // Update <title> safely
  const titleEl = document.querySelector("title[data-i18n='meta.title']");
  if (titleEl && dict["meta.title"]) titleEl.textContent = dict["meta.title"];

  // Toggle button label: show the OTHER language
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = (lang === "fr") ? "EN" : "FR";

  renderInfoCards(lang);
}

function getLang() {
  return localStorage.getItem("site_lang") || "fr";
}

function setLang(lang) {
  localStorage.setItem("site_lang", lang);
  applyTranslations(lang);
}

(function init() {
  // footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("hidden") === false;
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // language
  const btn = document.getElementById("langToggle");
  const initial = getLang();
  applyTranslations(initial);

  btn?.addEventListener("click", () => {
    const next = (getLang() === "fr") ? "en" : "fr";
    setLang(next);
  });
})();

/*>-------------------------------------------------------------------------------------------------------------------------------------------<*/

//Enhanced JS, Enhanced dynamic cards + mouse movement
const CARDS_DATA = {
  fr: [
    {
      icon: "🌍",
      tag: "Immersion française",
      title: "Langue au quotidien",
      body: "Français comme langue principale à travers chansons, histoires, jeux et activités créatives.",
      link: { href: "/programmes.html", text: "Voir programmes" }
    },
    {
      icon: "👨‍👩‍👧‍👦",
      tag: "Petits groupes",
      title: "Attention personnalisée",
      body: "Groupes adaptés au rythme de chaque enfant avec ratios respectés par le Ministère.",
      link: { href: "/centres.html", text: "Nos centres" }
    },
    {
      icon: "🍎",
      tag: "Habitudes saines",
      title: "Repas & activités",
      body: "Guide alimentaire canadien, activités physiques quotidiennes et repos structuré.",
      link: { href: "/espace-parents.html", text: "Espace parents" }
    }
  ],
  en: [
    {
      icon: "🌍",
      tag: "French immersion",
      title: "French every day",
      body: "French as main language through songs, stories, games and creative activities.",
      link: { href: "/en/programs.html", text: "View programs" }
    },
    {
      icon: "👨‍👩‍👧‍👦",
      tag: "Small groups",
      title: "Personalized attention",
      body: "Groups adapted to each child's pace with Ministry-compliant ratios.",
      link: { href: "/en/centres.html", text: "Our centres" }
    },
    {
      icon: "🍎",
      tag: "Healthy habits",
      title: "Meals & activities",
      body: "Canada's food guide, daily physical activities and structured rest.",
      link: { href: "/en/parents.html", text: "Parents area" }
    }
  ]
};

class DynamicCards {
  constructor() {
    this.cards = [];
    this.mouse = { x: 0, y: 0 };
    this.rafId = null;
    this.enabled = false;
    this.init();
  }

  init() {
    // Render returns true/false depending on if the container exists
    this.enabled = this.renderCards();

    // If this page doesn't have #infoCards, stop here (no errors)
    if (!this.enabled) return;

    this.bindEvents();
    this.animateLoop();
  }

  renderCards() {
    const lang = document.documentElement.dataset.lang || 'fr';
    const data = (window.CARDS_DATA && (CARDS_DATA[lang] || CARDS_DATA.fr)) || null;

    const container = document.getElementById('infoCards');

    // ✅ Fix: if container or data doesn't exist, don't run
    if (!container || !data) return false;

    container.innerHTML = data
      .map(
        (card, i) => `
        <article class="dynamic-card group relative" data-card-index="${i}">
          <div class="absolute left-4 top-4 z-10 text-3xl opacity-75 group-hover:opacity-100 transition-all duration-300">${card.icon}</div>

          <div class="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-700 shadow-sm mb-4">
            ${card.tag}
          </div>

          <h3 class="text-xl font-black leading-tight mb-3 text-slate-800 group-hover:text-red-700 transition-colors">${card.title}</h3>

          <p class="text-slate-600 leading-relaxed mb-6">${card.body}</p>

          <a href="${card.link.href}" class="inline-flex items-center gap-2 rounded-full border border-red-700/30 bg-red-50 px-6 py-3 text-sm font-black text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-red-700/20">
            ${card.link.text} →
          </a>
        </article>
      `
      )
      .join('');

    this.cards = Array.from(container.querySelectorAll('.dynamic-card'));
    return this.cards.length > 0;
  }

  bindEvents() {
    // Mouse move
    this.onMouseMove = (e) => {
      this.mouse.x = e.clientX / window.innerWidth;
      this.mouse.y = e.clientY / window.innerHeight;
    };
    document.addEventListener('mousemove', this.onMouseMove);

    // Hover pairing effect
    this.cards.forEach((card, i) => {
      card.addEventListener('mouseenter', () => this.onCardHover(i));
      card.addEventListener('mouseleave', () => this.onCardLeave(i));
    });

    // Mobile touch (keep your behavior, but only on the card tapped)
    this.cards.forEach((card) => {
      card.addEventListener(
        'touchstart',
        (e) => {
          e.preventDefault();
          card.classList.add('scale-105');
        },
        { passive: false }
      );

      card.addEventListener('touchend', () => {
        card.classList.remove('scale-105');
      });
    });

    // Stop animation when leaving page (optional, but clean)
    window.addEventListener('beforeunload', () => {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      document.removeEventListener('mousemove', this.onMouseMove);
    });
  }

  onCardHover(index) {
    if (!this.cards[index]) return;

    this.cards[index].classList.add('paired');

    const len = this.cards.length;
    if (len < 2) return;

    const neighbors = [
      this.cards[(index + 1) % len],
      this.cards[(index + len - 1) % len],
    ];

    neighbors.forEach((neighbor) => {
      if (!neighbor) return;
      neighbor.classList.add('paired');
      neighbor.style.setProperty('--neighbor-glow', '1');
    });
  }

  onCardLeave() {
    this.cards.forEach((card) => {
      card.classList.remove('paired');
      card.style.removeProperty('--neighbor-glow');
    });
  }

  animateLoop() {
    // ✅ If nothing to animate, don't schedule RAF
    if (!this.cards.length) return;

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
      const glow = Math.max(0, 1 - distance * 2);
      card.style.setProperty('--mouse-glow', glow);
    });

    this.rafId = requestAnimationFrame(() => this.animateLoop());
  }
}


// Language switch + other init
function initLanguage() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  const path = window.location.pathname;
  const isEn = path.includes('/en/');
  btn.textContent = isEn ? 'FR' : 'EN';

  btn.addEventListener('click', () => {
    const next = isEn ? path.replace('/en/', '/') : path.replace(/(\/[^\/]+)$/, '/en$1');
    window.location.pathname = next;
  });
}

// Mobile menu
function initMobileMenu() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? '✕' : '☰';
  });
}

// Init everything
document.addEventListener('DOMContentLoaded', () => {
  new DynamicCards();
  initLanguage();
  initMobileMenu();
  
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

(function() {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });
  }

  // Language toggle (your existing logic)
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const path = window.location.pathname;
    const isEn = path.includes('/en/');
    langToggle.textContent = isEn ? 'FR' : 'EN';
    
    langToggle.addEventListener('click', () => {
      const next = isEn ? path.replace('/en/', '/') : path.replace(/\/(?!en\/)/, '/en/');
      window.location.pathname = next;
    });
  }
})();