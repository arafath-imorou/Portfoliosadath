const services = [
  {
    id: 1,
    title: "Logos & Branding",
    icon: "fas fa-pen-nib",
    desc: "Création d'identités visuelles uniques et mémorables pour votre marque.",
    image: "Images/service_branding.png"
  },
  {
    id: 2,
    title: "Cartes de Visite",
    icon: "fas fa-address-card",
    desc: "Design professionnel pour une première impression percutante.",
    image: "Images/service_cards.png"
  },
  {
    id: 3,
    title: "Flyers & Affiches",
    icon: "fas fa-layer-group",
    desc: "Supports de communication visuels pour vos événements et promotions.",
    image: "Images/service_flyers.png"
  },
  {
    id: 4,
    title: "Impression sur Supports",
    icon: "fas fa-print",
    desc: "T-shirts, casquettes, tasses et objets personnalisés de haute qualité.",
    image: "Images/service_print_supports.png"
  },
  {
    id: 21,
    title: "Factures & Cachets",
    icon: "fas fa-file-invoice",
    desc: "Conception de documents administratifs et tampons professionnels.",
    image: "Images/service_stamps.png"
  },
  {
    id: 6,
    title: "Communication Visuelle",
    icon: "fas fa-bullhorn",
    desc: "Solutions globales pour booster la visibilité de votre entreprise.",
    image: "Images/service_visual_com.png"
  },
  {
    id: 7,
    title: "Événementiel",
    icon: "fas fa-calendar-star",
    desc: "Organisation complète d'événements : de la conception à la finition. Logistique, Sécurité, Mise en œuvre, Décoration, etc.",
    image: "Images/service_events.png"
  },
  {
    id: 8,
    title: "Formation",
    icon: "fas fa-graduation-cap",
    desc: "Découvrez nos formations complètes couvrant l'ensemble de nos expertises : graphisme, impression et communication visuelle.",
    image: "Images/service_formation.png"
  },
  {
    id: 9,
    title: "Intermédiation commerciale",
    icon: "fas fa-handshake",
    desc: "Nous facilitons vos échanges commerciaux et partenariats stratégiques pour booster votre croissance économique.",
    image: "Images/service_intermediation.png"
  }
];

// Data for Portfolio
const portfolioProjects = [
  { id: 1, title: "Réalisation Top Services", category: "objects", image: "Images/06b7e2e5-1505-4207-a0a8-67fe8cfc5eda.jpg" },
  { id: 2, title: "Identité Visuelle", category: "logos", image: "Images/0b0de4a3-f7a6-4430-90d6-00d07db51ba0.jpg" },
  { id: 3, title: "Objet Personnalisé", category: "objects", image: "Images/13b74472-84c1-49ff-8dad-cc099e25a2ae.jpg" },
  { id: 4, title: "Impression Objet", category: "objects", image: "Images/178de24f-970c-4b6d-8d69-48d8e29ca9b0.jpg" },
  { id: 5, title: "Cadeau Personnalisé", category: "objects", image: "Images/1866d061-5cde-44e5-94b4-45f8bf7f58c2.jpg" },
  { id: 6, title: "Support Publicitaire", category: "objects", image: "Images/1ab7dc3c-ab68-443d-b796-4e1d6b7a04e2.jpg" },
  { id: 7, title: "Affiche & Print", category: "print", image: "Images/2087c332-958f-43f4-9d88-95347077f3f9.jpg" },
  { id: 8, title: "Logo Design", category: "logos", image: "Images/20a9b1a3-b1b1-4f56-92ef-694638a98fe3.jpg" },
  { id: 9, title: "Impression sur objet", category: "objects", image: "Images/28e3d2a2-a2ca-422e-9f85-1b8678d7f5c3.jpg" },
  { id: 10, title: "Textile Personnalisé", category: "objects", image: "Images/2bef5879-f6e2-40ac-8cd8-97767aa003d7.jpg" },
  { id: 11, title: "Goodies entreprises", category: "objects", image: "Images/2eafea52-20b9-48a2-805b-09dff302ba8e.jpg" },
  { id: 12, title: "Marquage Publicitaire", category: "objects", image: "Images/2f07431d-c3f7-4ac9-b9e9-81b41bc125bd.jpg" },
  { id: 13, title: "Support de Communication", category: "print", image: "Images/2f08b8f6-42d9-40cc-8fc9-b1a41cfde1d1.jpg" },
  { id: 14, title: "Cadeau Corporatif", category: "objects", image: "Images/2fc87935-cc7f-4258-be83-7d09d8f7a8d7.jpg" },
  { id: 15, title: "Flyer & Prospectus", category: "print", image: "Images/33e7a592-f3cb-439a-bf68-70a78d1a373f.jpg" },
  { id: 16, title: "Affiche Événementielle", category: "print", image: "Images/33f7ba80-f873-48f5-8197-37be61e6bbb5.jpg" },
  { id: 17, title: "Mug Personnalisé", category: "objects", image: "Images/38bff205-98fe-433e-9d72-f3f1f1cffc5e.jpg" },
  { id: 18, title: "Casquette Logo", category: "objects", image: "Images/3a87af49-a7e3-4e53-a039-9801f491963d.jpg" },
  { id: 19, title: "Branding textile", category: "objects", image: "Images/3aa98674-662f-4479-8d06-c8be393d4c90.jpg" },
  { id: 20, title: "Packaging & Print", category: "print", image: "Images/3cd90bbf-72a7-4c76-b2e4-10c2eede7d17.jpg" },
  { id: 21, title: "Brochure Entreprise", category: "print", image: "Images/3d47d882-8bf0-40db-8da9-8d53e2e8bc18.jpg" },
  { id: 22, title: "Flyer Top Services", category: "print", image: "Images/3fb76f0d-4848-468b-a68c-8fd1e2f2ea72.jpg" },
  { id: 23, title: "Impression numérique", category: "objects", image: "Images/42a9ec23-4767-45e2-aefb-90a78b6bce32.jpg" },
  { id: 24, title: "Objet de com", category: "objects", image: "Images/434b85ab-651d-4a43-a4b3-00f411653200.jpg" },
  { id: 25, title: "Cadeau d'affaires", category: "objects", image: "Images/4bd5c923-501f-4719-894d-37c886a46f57.jpg" },
  { id: 26, title: "Catalogue & Édition", category: "print", image: "Images/52a2c19d-80df-4ff6-877b-4b095436f485.jpg" },
  { id: 27, title: "Affiche Grand Format", category: "print", image: "Images/53f5383c-fb5d-4197-94e2-dfc53302499c.jpg" },
  { id: 28, title: "Impression Offset", category: "print", image: "Images/546ac120-9d84-4317-825a-b7b65b9803b5.jpg" },
  { id: 29, title: "T-shirt personnalisé", category: "objects", image: "Images/5c40f19e-1758-4a79-b6d4-9c45e486b9bd.jpg" },
  { id: 30, title: "Impression Sublimation", category: "objects", image: "Images/5c79b868-082e-4a5a-8fe4-e6bd238adee0.jpg" },
  { id: 31, title: "Support textile", category: "objects", image: "Images/6443315e-c534-4aea-883c-d18e106dc4e0.jpg" },
  { id: 32, title: "Dépliant & Print", category: "print", image: "Images/686dc217-4c38-4744-9413-d95a448efa36.jpg" },
  { id: 33, title: "Cadeau Photo", category: "objects", image: "Images/69a04c56-f53a-4bed-b909-377dfe5639d9.jpg" },
  { id: 34, title: "Grave & Découpe", category: "objects", image: "Images/6b58f050-0a05-4e1b-ad87-7d097d5631b5.jpg" },
  { id: 35, title: "Signalétique", category: "print", image: "Images/716e3b24-7fc4-4b1a-9100-139007da57cb.jpg" },
  { id: 36, title: "Création de Logo", category: "logos", image: "Images/76a3edae-029c-48d2-b2e0-c496bd768de6.jpg" },
  { id: 37, title: "Impression Papier", category: "print", image: "Images/772c3826-c0d2-4f1f-9ce0-a5223b13f8c1.jpg" },
  { id: 38, title: "Menu & Print", category: "print", image: "Images/7b60189f-8ab7-468f-9e82-5f2bd74833b1.jpg" },
  { id: 39, title: "Objet de décoration", category: "objects", image: "Images/7c01e6bf-63a1-40ca-acca-22ffd866f99b.jpg" },
  { id: 40, title: "Gadget Publicitaire", category: "objects", image: "Images/7c9f680f-5891-4767-a192-484e7060a5c1.jpg" },
  { id: 41, title: "Impression sur toile", category: "objects", image: "Images/81c903a4-5fdc-4aba-aeb1-d42f2451f48f.jpg" },
  { id: 42, title: "Accessoire de bureau", category: "objects", image: "Images/82169796-3ff8-40a1-932a-ecf39033b72a.jpg" },
  { id: 43, title: "Cadeau souvenir", category: "objects", image: "Images/82995490-695a-4d87-9bd9-d2dc1fd8c37e.jpg" },
  { id: 44, title: "Support événement", category: "objects", image: "Images/83272168-9817-4191-8338-a54852870b5a.jpg" },
  { id: 45, title: "Marquage textile", category: "objects", image: "Images/83a08f34-6192-4860-b40b-42b00f2b75fe.jpg" },
  { id: 46, title: "Calendrier & Print", category: "print", image: "Images/85ec628d-17b8-421c-8d02-df1bd164b867.jpg" },
  { id: 47, title: "Impression UV", category: "objects", image: "Images/8651ffff-8009-45e7-a5d7-a7197183a638.jpg" },
  { id: 48, title: "Goodies marquage", category: "objects", image: "Images/884d9772-a184-43c2-a132-aeecaeecb396.jpg" },
  { id: 49, title: "Faire-part & Print", category: "print", image: "Images/8e3e153b-08b0-4e5d-a482-67114b5f299e.jpg" },
  { id: 50, title: "Coque téléphone", category: "objects", image: "Images/905db3e7-d889-488e-a08e-4e751e16a528.jpg" },
  { id: 51, title: "Logotype Premium", category: "logos", image: "Images/91e787eb-d04f-407a-9f95-c4072ee39a4e.jpg" },
  { id: 52, title: "Sac personnalisé", category: "objects", image: "Images/9370c1f1-a6be-447a-8c72-a367c63a3785.jpg" },
  { id: 53, title: "Impression Laser", category: "objects", image: "Images/94a29519-5a78-4d9b-a13d-3a10dac2848b.jpg" },
  { id: 54, title: "Mug Sublimation", category: "objects", image: "Images/9b7c41cf-b319-490e-9d07-8f96f0b4f219.jpg" },
  { id: 55, title: "Stylo personnalisé", category: "objects", image: "Images/9edcb87d-36e3-4b55-abf4-05f66f7ffe37.jpg" },
  { id: 56, title: "Badge & Objet", category: "objects", image: "Images/a05d76e8-bd08-45d9-a972-ba3f322a8291.jpg" },
  { id: 57, title: "Plaquette Print", category: "print", image: "Images/a11a7e70-292a-4f57-a4dc-a8f4c2b98f3e.jpg" },
  { id: 58, title: "Affiche Publicitaire", category: "print", image: "Images/a3878f42-93bb-4134-b043-4e94959066d5.jpg" },
  { id: 60, title: "Chemise Portfolio", category: "print", image: "Images/a87bfacd-bd6d-418a-b02e-73beae13e759.jpg" },
  { id: 61, title: "Identité de marque", category: "logos", image: "Images/ab7ed7af-8fb3-4f10-9ef1-18e4475492ea.jpg" },
  { id: 62, title: "Logo Institutionnel", category: "logos", image: "Images/aecfbbf3-b606-4471-b71f-b6ab3c13e672.jpg" },
  { id: 63, title: "Impression de plans", category: "print", image: "Images/b29c99e2-5de0-483e-aeb5-08a2a2713225.jpg" },
  { id: 64, title: "Set de Table Print", category: "print", image: "Images/b61fbf70-4f0d-4ca8-9618-1e9917c5abee.jpg" },
  { id: 65, title: "Support marketing", category: "objects", image: "Images/b7b35291-860c-41f3-ba3f-6c9125f42e33.jpg" },
  { id: 66, title: "Gourde personnalisée", category: "objects", image: "Images/b9a34473-9fc0-465a-8a26-8785e9be1e0f.jpg" },
  { id: 67, title: "Marquage véhicule", category: "objects", image: "Images/bb90e4b9-db99-49c1-aa54-d1f78d601d13.jpg" },
  { id: 68, title: "Bâche publicitaire", category: "objects", image: "Images/bf4f9d03-d762-45a7-a198-cc0f0610db71.jpg" },
  { id: 69, title: "Porte-clefs", category: "objects", image: "Images/bfe491e3-c2bb-42a5-bd57-f0baa14468d8.jpg" },
  { id: 70, title: "Invitation Print", category: "print", image: "Images/c698946b-745a-4903-a959-4bb66b28de37.jpg" },
  { id: 71, title: "Impression plexi", category: "objects", image: "Images/c834f213-783d-4a3d-bcb1-d974122ddb83.jpg" },
  { id: 72, title: "Logo d'Entreprise", category: "logos", image: "Images/ce24f0f0-645b-40d1-bdd0-5560831bdf3e.jpg" },
  { id: 73, title: "Cadeau de fin d'année", category: "objects", image: "Images/cfd7335f-b3be-4af9-89a8-743135ab3c7f.jpg" },
  { id: 74, title: "Impression papier d'art", category: "print", image: "Images/d0c72c30-1ce4-4406-898a-c0d566216af8.jpg" },
  { id: 75, title: "Packaging Produit", category: "print", image: "Images/d220455c-437f-432d-916d-a208cc4ce363.jpg" },
  { id: 76, title: "Objet promotionnel", category: "objects", image: "Images/d50ffc7b-7ac7-41d2-acc9-37842ecfdc83.jpg" },
  { id: 77, title: "Tee-shirt marquage", category: "objects", image: "Images/d62ed3de-feae-4983-bd61-aef090e1fb71.jpg" },
  { id: 78, title: "Accessoire mode", category: "objects", image: "Images/d6ceeb2c-68dd-4773-a424-71300f9f22be.jpg" },
  { id: 79, title: "Rapport Annuel Print", category: "print", image: "Images/d94f7117-ca13-4228-9d67-2f2b1ebecbc1.jpg" },
  { id: 80, title: "Logo vectoriel", category: "logos", image: "Images/d9cf43a2-96c1-415a-8f8f-0131657abb08.jpg" },
  { id: 81, title: "Décoration de vitrine", category: "print", image: "Images/da717fc8-5b26-4911-ab57-6b8cb67fa7de.jpg" },
  { id: 82, title: "Impression vinyl", category: "print", image: "Images/dada2d37-5865-485c-8909-7659f7d8df45.jpg" },
  { id: 83, title: "Tableau personnalisé", category: "objects", image: "Images/dc149e7a-f2d4-4f25-9eaf-fe42e3ffdbc9.jpg" },
  { id: 84, title: "Impression métal", category: "objects", image: "Images/e07d7a82-4e05-4244-b7c7-9404c4de671f.jpg" },
  { id: 85, title: "Impression grand volume", category: "print", image: "Images/e0c56fe6-8df5-4560-b7a2-228904f31315.jpg" },
  { id: 86, title: "Accessoire photo", category: "objects", image: "Images/e64933aa-0c75-42b6-b3ad-1c53c3e8734d.jpg" },
  { id: 87, title: "Cadre personnalisé", category: "objects", image: "Images/e87746ef-299d-49b2-9499-497c9c73a5b8.jpg" },
  { id: 88, title: "Signalétique Bureau", category: "print", image: "Images/e956179e-a368-42f3-b737-5164eb9f0a29.jpg" },
  { id: 89, title: "Cadeau Luxe", category: "objects", image: "Images/eb0bf8a8-5f32-48cf-a2fb-8ce715d35ee5.jpg" },
  { id: 90, title: "Impression Bois", category: "objects", image: "Images/edb170f6-85ec-471d-8154-927582cfb231.jpg" },
  { id: 91, title: "Support de vente", category: "objects", image: "Images/efd3b4c2-af80-45c5-a0f7-be77803c30aa.jpg" },
  { id: 92, title: "Objet de marque", category: "objects", image: "Images/f11bb75b-1825-4097-8c75-fa4f239efa5f.jpg" },
  { id: 93, title: "Impression bâche", category: "print", image: "Images/f466dd69-dc65-4d40-bbfe-0bd96474fdda.jpg" },
  { id: 94, title: "Autocollant Print", category: "print", image: "Images/f48951e2-df0d-44d8-86e7-8d745de718f3.jpg" },
  { id: 95, title: "Kakemono marquage", category: "objects", image: "Images/f52ec2e4-ca32-4d8a-8145-f3cb3ec3c2b8.jpg" },
  { id: 96, title: "Roll-up publicitaire", category: "objects", image: "Images/f5e7f3b6-211a-4dd4-b7ac-a4cf891a0dac.jpg" },
  { id: 97, title: "Goodies marquage", category: "objects", image: "Images/f6a74fcb-a0ed-4da4-b23c-34a3b4601213.jpg" },
  { id: 98, title: "Support personnalisé", category: "objects", image: "Images/f9166b6e-c5dc-42e8-80fd-7e4b91f7dd71.jpg" },
  { id: 99, title: "Logo Corporate", category: "logos", image: "Images/f9566c13-a51b-4cba-b378-e4e94006f694.jpg" },
  { id: 100, title: "Flyer promotionnel", category: "print", image: "Images/fdafd07e-6081-4adf-8cbc-732b2ed12cf1.jpg" },
  { id: 101, title: "Affiche Publicitaire", category: "print", image: "Images/fe05e9f0-abee-46c4-8f2b-9e52834d73c8.jpg" },
  { id: 102, title: "Impression sur objet", category: "objects", image: "Images/ff174bf2-a0a9-43d6-a697-84e2be7fd7a2.jpg" },
  { id: 103, title: "Journal & Print", category: "print", image: "Images/ff208b01-295e-4fd6-b9d2-b1c9be913f2c.jpg" }
];

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPortfolio('all');
  setupNavbar();
  setupPortfolioFilters();
  setupContactForm();
  setupLightbox();
  initStatsCounter();
});

// Navbar Effects
function setupNavbar() {
  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// Render Services
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = services.map(service => {
    const isSpecial = service.title === "Formation" || service.title === "Intermédiation commerciale";
    const ctaText = isSpecial ? "Contactez-nous" : "Voir plus";
    const ctaLink = isSpecial ? "#quote" : "#portfolio";
    
    return `
      <div class="service-card" data-aos="fade-up">
        <div class="service-image">
          <img src="${service.image}" alt="${service.title}">
          <div class="service-icon"><i class="${service.icon}"></i></div>
        </div>
        <div class="service-details">
          <h3>${service.title}</h3>
          <p>${service.desc}</p>
          <a href="${ctaLink}" class="service-link">${ctaText} <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    `;
  }).join('');
}

// Portfolio Pagination state
let itemsToShow = 36;
let currentFilter = 'all';

// Render Portfolio
function renderPortfolio(filter, incremental = false) {
  const grid = document.getElementById('portfolio-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (!grid) return;

  if (filter !== currentFilter) {
    currentFilter = filter;
    itemsToShow = 36; // Reset on filter change
  }

  const filteredProjects = filter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  const displayProjects = filteredProjects.slice(0, itemsToShow);

  grid.innerHTML = displayProjects.map(project => `
    <div class="portfolio-item" data-category="${project.category}" data-aos="zoom-in">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="portfolio-overlay">
        <h4>${project.title}</h4>
        <span class="category-tag">${project.category}</span>
        <button class="view-project">Voir</button>
      </div>
    </div>
  `).join('');

  // Show/Hide Load More button
  if (loadMoreBtn) {
    if (itemsToShow >= filteredProjects.length) {
      loadMoreBtn.parentElement.style.display = 'none';
    } else {
      loadMoreBtn.parentElement.style.display = 'flex';
    }
  }
}

// Portfolio Filtering & Load More setup
function setupPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const loadMoreBtn = document.getElementById('load-more-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPortfolio(btn.dataset.filter);
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      itemsToShow += 12;
      renderPortfolio(currentFilter);
    });
  }
}

// Contact Form Handling (WhatsApp flow)
function setupContactForm() {
  const form = document.getElementById('request-form');
  const modal = document.getElementById('recap-modal');
  const recapContent = document.getElementById('recap-details');
  const closeBtn = document.querySelector('.close-modal');
  const sendWhatsappBtn = document.getElementById('send-whatsapp-btn');
  
  if (!form || !modal) return;

  let formData = {};

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capture data
    formData = {
      name: form.querySelector('input[type="text"]').value,
      phone: form.querySelector('input[type="tel"]').value,
      email: form.querySelector('input[type="email"]').value,
      service: form.querySelector('select').options[form.querySelector('select').selectedIndex].text,
      quantity: form.querySelector('input[type="number"]').value,
      date: form.querySelector('input[type="date"]').value,
      description: form.querySelector('textarea').value
    };

    // Generate recap HTML
    recapContent.innerHTML = `
      <div class="recap-item"><strong>Nom:</strong> <span>${formData.name}</span></div>
      <div class="recap-item"><strong>Téléphone:</strong> <span>${formData.phone}</span></div>
      <div class="recap-item"><strong>Email:</strong> <span>${formData.email}</span></div>
      <div class="recap-item"><strong>Service:</strong> <span>${formData.service}</span></div>
      <div class="recap-item"><strong>Quantité:</strong> <span>${formData.quantity}</span></div>
      <div class="recap-item"><strong>Date souhaitée:</strong> <span>${formData.date}</span></div>
      <div class="recap-item"><strong>Description:</strong> <p>${formData.description || 'Aucune description'}</p></div>
    `;

    // Show modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  });

  sendWhatsappBtn.addEventListener('click', () => {
    const text = `*NOUVELLE DEMANDE DE DEVIS - TOP SERVICES*%0A%0A` +
      `*Client:* ${formData.name}%0A` +
      `*Téléphone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Quantité:* ${formData.quantity}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Description:* ${formData.description || 'N/A'}`;
    
    const whatsappUrl = `https://wa.me/2290197351066?text=${text}`;
    window.open(whatsappUrl, '_blank');
    
    // Close and reset
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
    form.reset();
  });

  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
}

// Portfolio Lightbox logic
function setupLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');

  let currentItems = [];
  let currentIndex = 0;

  if (!modal || !img || !title) return;

  const updateLightbox = (index) => {
    if (index < 0 || index >= currentItems.length) return;
    currentIndex = index;
    const item = currentItems[currentIndex];
    const itemImg = item.querySelector('img');
    const itemTitle = item.querySelector('h4');
    
    img.src = itemImg.src;
    title.textContent = itemTitle.textContent;
  };

  const nextImage = () => {
    if (currentItems.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentItems.length;
    updateLightbox(currentIndex);
  };

  const prevImage = () => {
    if (currentItems.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    updateLightbox(currentIndex);
  };

  // Event delegation for portfolio items
  document.getElementById('portfolio-grid').addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.view-project');
    if (viewBtn) {
      const portfolioItem = viewBtn.closest('.portfolio-item');
      
      // Get all currently visible portfolio items
      currentItems = Array.from(document.querySelectorAll('.portfolio-item'));
      currentIndex = currentItems.indexOf(portfolioItem);
      
      updateLightbox(currentIndex);
      
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
  });

  const closeLightbox = () => {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  };

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // Close with Escape key & Arrow navigation
  window.addEventListener('keydown', (e) => {
    if (modal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  });
}

// Statistics Counter Animation
function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number');
  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-target'));
        let startTimestamp = null;
        const duration = 2000;

        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * countTo);
          
          target.textContent = currentCount;

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            target.textContent = countTo;
          }
        };

        window.requestAnimationFrame(step);
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  stats.forEach(stat => observer.observe(stat));
}
