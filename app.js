/**
 * MAHESH JEWELLERS - FINE 925 STERLING SILVER ATELIER
 * Core E-Commerce & Interactive Client Logic
 */

// --- 1. PRODUCT CATALOG DATABASE ---
const PRODUCTS = [
  // --- WOMEN'S BRACELET COLLECTION (From Provided Photography) ---
  {
    id: "mj-w01",
    name: "The Tri-Orb Pavé Bangle",
    category: "womens",
    price: 3890,
    originalPrice: 4850,
    tag: "Bestseller",
    isBestseller: true,
    image: "assets/womens/tri_tone_orb_bangle.jpg",
    tagline: "Elegance in Every Detail. Shine that speaks your style.",
    description: "A masterwork in 925 sterling silver featuring three hand-set micro-pavé spherical beads in white rhodium, 18k yellow gold, and rose gold plating. Engineered with high-tensile solid silver wire for enduring grace.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Triple Rhodium & 18k Micron Accents",
      hallmark: "BIS 925 Laser Inscribed",
      weight: "14.2 Grams",
      clasp: "Flexible Tension Bypass",
      hypoallergenic: "100% Nickel & Cadmium Free"
    },
    sizes: ["56 mm (Small)", "58 mm (Standard)", "62 mm (Medium)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-w02",
    name: "The Aurelia Pyramid Facet Cuff",
    category: "womens",
    price: 4250,
    originalPrice: 5300,
    tag: "Featured",
    isBestseller: true,
    image: "assets/womens/pyramid_faceted_cuff.jpg",
    tagline: "Effortless Beauty. Everyday Elegance.",
    description: "Architectural minimalism realized in sterling silver. Rows of continuous pyramid-faceted studs reflect ambient light with every gesture. Coated with a durable champagne gold barrier over pure 925 silver.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Champagne Gold Micron Vermeil",
      hallmark: "BIS 925 Certified",
      weight: "16.8 Grams",
      clasp: "Open Contour Torque Bangle",
      hypoallergenic: "100% Dermatologically Safe"
    },
    sizes: ["58 mm (Universal)", "62 mm (Relaxed)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-w03",
    name: "The Azure Bloom Pavé Bypass Bangle",
    category: "womens",
    price: 3490,
    originalPrice: 4400,
    tag: "Artisan Edit",
    isBestseller: false,
    image: "assets/womens/azure_bloom_bangle.jpg",
    tagline: "Poetry in Royal Blue Enamel & Diamond Brilliance.",
    description: "Twin blossoms finished with rich guilloché cobalt enamel converge at the center of a pavé stone ribbon. Hand-set brilliant zircon crystals encircle the delicate sterling silver bypass frame.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Platinum-Grade Liquid Rhodium",
      hallmark: "BIS 925 Laser Inscribed",
      weight: "12.5 Grams",
      clasp: "Contoured Bypass Clasp",
      hypoallergenic: "100% Nickel-Safe"
    },
    sizes: ["56 mm (Small)", "58 mm (Standard)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-w04",
    name: "The Lumina Multi-Strand Beaded Wire",
    category: "womens",
    price: 2950,
    originalPrice: 3750,
    tag: "Delicate Edit",
    isBestseller: false,
    image: "assets/womens/lumina_multistrand_cuff.jpg",
    tagline: "Delicate by Design. A bracelet that moves with your grace.",
    description: "Multiple whispering filaments of pure silver memory wire strung with precision faceted diamond-cut micro beads in alternating rhodium and rose gold tones. Airy, weightless, and endlessly radiant.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Diamond-Cut Beaded Finish",
      hallmark: "BIS 925 Authenticated",
      weight: "11.8 Grams",
      clasp: "Multi-Wire Flexible Memory Band",
      hypoallergenic: "100% Skin Friendly"
    },
    sizes: ["Adjustable (Fits 5.5\" - 7.2\" Wrists)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-w05",
    name: "The Solitaire Halo Emerald Cluster Wire",
    category: "womens",
    price: 4750,
    originalPrice: 5900,
    tag: "High Jewelry",
    isBestseller: true,
    image: "assets/womens/radiant_solitaire_wire.jpg",
    tagline: "Subtle Spark. Lasting Grace for every moment.",
    description: "Three parallel strands of gilded silver wire framing a geometric emerald-cut halo station set with baguette and pavé crystals, accented by a single blush pink sapphire stone. Regal and unforgettable.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "18k Warm Gold Plated Wire",
      hallmark: "BIS 925 Hallmark Verified",
      weight: "15.0 Grams",
      clasp: "Hidden Safety Click Clasp",
      hypoallergenic: "100% Pure & Clean Alloy"
    },
    sizes: ["58 mm (Standard)", "62 mm (Medium)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-w06",
    name: "The Heritage Filigree Rosette Cuff",
    category: "womens",
    price: 4100,
    originalPrice: 5100,
    tag: "Timeless",
    isBestseller: false,
    image: "assets/womens/heritage_filigree_band.jpg",
    tagline: "Timeless Elegance. Crafted to shine with you, always.",
    description: "An homage to antique Indian silver filigree work. Three hand-soldered silver rosette medallions gracefully bridge twin twisted-cable silver bands. Antiqued with subtle oxidation to highlight depth.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Vintage Satin Oxidized Silver",
      hallmark: "BIS 925 Hallmark Stamped",
      weight: "17.4 Grams",
      clasp: "Artisan Open Adjustable Torque",
      hypoallergenic: "100% Nickel-Free"
    },
    sizes: ["One Size (Fits 56mm - 65mm)"],
    waterResistant: true,
    tarnishFree: true
  },

  // --- MEN'S BRACELET COLLECTION (From Generated Photography) ---
  {
    id: "mj-m01",
    name: "The Sovereign Heavy Cuban Link",
    category: "mens",
    price: 5850,
    originalPrice: 7200,
    tag: "Bestseller",
    isBestseller: true,
    image: "assets/mens/cuban_bracelet.jpg",
    tagline: "Uncompromising Strength. Bold 925 Sterling Silver.",
    description: "A commanding 12mm Cuban curb chain crafted from dense, solid 925 sterling silver. Diamond-cut link facets catch the light with masculine sophistication. Features a reinforced double-latch safety clasp.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "High-Polish Mirror & Anti-Tarnish Rhodium",
      hallmark: "BIS 925 Stamped on Clasp",
      weight: "38.5 Grams Pure Silver",
      clasp: "Heavy Duty Custom Box Safety Clasp",
      hypoallergenic: "100% Nickel-Free Pure Silver"
    },
    sizes: ["7.5 Inches (Standard)", "8.0 Inches (Relaxed)", "8.5 Inches (Broad)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-m02",
    name: "The Vulcan Hand-Hammered Silver Cuff",
    category: "mens",
    price: 4450,
    originalPrice: 5600,
    tag: "Minimalist",
    isBestseller: true,
    image: "assets/mens/hammered_cuff.jpg",
    tagline: "Raw Texture Meets Architectural Restraint.",
    description: "Each cuff is individually shaped by hand using artisan ball-peen hammering techniques, producing an organic light-dappled surface. Satin brushed finish on edges with the BIS 925 hallmark stamped on the interior rim.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Artisan Hammered Matte Finish",
      hallmark: "BIS 925 Laser Inscribed",
      weight: "26.8 Grams",
      clasp: "Solid Anatomical Open Cuff",
      hypoallergenic: "100% Hypoallergenic"
    },
    sizes: ["Medium (6.8\" - 7.5\" Wrist)", "Large (7.5\" - 8.3\" Wrist)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-m03",
    name: "The Vanguard Braided Wheat Chain",
    category: "mens",
    price: 4890,
    originalPrice: 6100,
    tag: "Signature",
    isBestseller: false,
    image: "assets/mens/braided_chain.jpg",
    tagline: "Intricate Weave. Engineered Precision.",
    description: "An 8mm dense braided wheat chain woven from supple sterling silver strands that drape naturally over the wrist. Fitted with an industrial knurled cylindrical magnetic clasp engraved with hallmark coordinates.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      finish: "Oxidized Shadow Grain & Rhodium",
      hallmark: "BIS 925 Hallmarked",
      weight: "31.2 Grams",
      clasp: "Knurled Magnetic Twist Push-Lock",
      hypoallergenic: "100% Pure Silver"
    },
    sizes: ["7.5 Inches", "8.0 Inches"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-m04",
    name: "The Obsidian Inlay Minimalist Torque",
    category: "mens",
    price: 5200,
    originalPrice: 6500,
    tag: "Modernist",
    isBestseller: false,
    image: "assets/mens/onyx_torque.jpg",
    tagline: "Brushed Sterling Silver & Natural Black Onyx.",
    description: "A striking juxtaposition of matte brushed 925 silver with precision channel-inlaid geometric black onyx gemstone tiles. Designed for the discerning gentleman who appreciates sculptural modern jewelry.",
    specs: {
      metal: "Solid 925 Sterling Silver",
      stone: "Natural Polished Black Onyx",
      finish: "Satin Brushed Finish",
      hallmark: "BIS 925 Certified",
      weight: "29.4 Grams",
      clasp: "Contoured Architectural Cuff",
      hypoallergenic: "100% Safe Alloy"
    },
    sizes: ["Universal Fit (Adjustable Tension)"],
    waterResistant: true,
    tarnishFree: true
  },
  {
    id: "mj-m05",
    name: "The Royal Romanesque Beveled Kada",
    category: "mens",
    price: 6200,
    originalPrice: 7800,
    tag: "Iconic Heritage",
    isBestseller: true,
    image: "assets/mens/silver_kada.jpg",
    tagline: "Generational Craft. Contemporary Silhouette.",
    description: "A substantial solid sterling silver kada with crisp beveled chamfer edges and a subtle vintage brushed patina. Heavyweight, reassuringly solid, and built to be passed down through generations.",
    specs: {
      metal: "Heavy Gauge 925 Sterling Silver",
      finish: "Chamfered Bevel & Brushed Satin",
      hallmark: "BIS 925 Authenticated",
      weight: "44.0 Grams Heavy Silver",
      clasp: "Solid Torque Kada Form",
      hypoallergenic: "100% Pure Silver Guarantee"
    },
    sizes: ["Traditional 2.6 (Medium)", "Traditional 2.8 (Large)", "Traditional 3.0 (XL)"],
    waterResistant: true,
    tarnishFree: true
  }
];

// --- 2. GLOBAL STATE MANAGEMENT ---
let currentFilter = "all";
let currentSort = "featured";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("mj_silver_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("mj_silver_wishlist") || "[]");
let appliedCoupon = null; // { code: 'ROYAL10', rate: 0.10 }

// --- 3. DOM ELEMENTS ---
const productsGrid = document.getElementById("productsGrid");
const categoryTabs = document.getElementById("categoryTabs");
const sortSelect = document.getElementById("sortSelect");
const searchTrigger = document.getElementById("searchTrigger");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchClose = document.getElementById("searchClose");
const filterFeedback = document.getElementById("filterFeedback");
const feedbackText = document.getElementById("feedbackText");
const resetFilterBtn = document.getElementById("resetFilterBtn");

// Cart Drawer
const cartTrigger = document.getElementById("cartTrigger");
const cartOverlay = document.getElementById("cartOverlay");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartCount = document.getElementById("cartCount");
const cartTotalItemsCount = document.getElementById("cartTotalItemsCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartDiscount = document.getElementById("cartDiscount");
const discountRow = document.getElementById("discountRow");
const cartGrandTotal = document.getElementById("cartGrandTotal");
const couponInput = document.getElementById("couponInput");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const couponStatus = document.getElementById("couponStatus");
const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");

// Wishlist
const wishlistTrigger = document.getElementById("wishlistTrigger");
const wishlistCount = document.getElementById("wishlistCount");

// Modals
const quickViewModal = document.getElementById("quickViewModal");
const quickViewClose = document.getElementById("quickViewClose");
const quickViewContent = document.getElementById("quickViewContent");
const wristGuideModal = document.getElementById("wristGuideModal");
const wristGuideClose = document.getElementById("wristGuideClose");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutClose = document.getElementById("checkoutClose");
const orderSuccessModal = document.getElementById("orderSuccessModal");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

// --- 4. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  setupMobileNav();
});

// --- 5. EVENT LISTENERS ---
function setupEventListeners() {
  // Category tabs
  categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    updateFilterFeedback();
    renderCatalog();
  });

  // Header Nav Links
  document.querySelectorAll(".nav-link, .mob-link").forEach(link => {
    link.addEventListener("click", (e) => {
      const filter = link.dataset.filter;
      if (filter) {
        currentFilter = filter;
        document.querySelectorAll(".tab-btn").forEach(b => {
          b.classList.toggle("active", b.dataset.filter === filter);
        });
        updateFilterFeedback();
        renderCatalog();
        if (mobileNav) mobileNav.classList.remove("open");
      }
    });
  });

  // Sort dropdown
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderCatalog();
  });

  // Search trigger & overlay
  searchTrigger.addEventListener("click", () => {
    searchOverlay.classList.toggle("active");
    if (searchOverlay.classList.contains("active")) {
      searchInput.focus();
    }
  });

  searchClose.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    searchQuery = "";
    searchInput.value = "";
    updateFilterFeedback();
    renderCatalog();
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    updateFilterFeedback();
    renderCatalog();
  });

  resetFilterBtn.addEventListener("click", () => {
    currentFilter = "all";
    searchQuery = "";
    searchInput.value = "";
    document.querySelectorAll(".tab-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.filter === "all");
    });
    updateFilterFeedback();
    renderCatalog();
  });

  // Cart Drawer toggling
  cartTrigger.addEventListener("click", openCartDrawer);
  cartCloseBtn.addEventListener("click", closeCartDrawer);
  cartOverlay.addEventListener("click", (e) => {
    if (e.target === cartOverlay) closeCartDrawer();
  });

  // Coupon Engine
  applyCouponBtn.addEventListener("click", applyCouponCode);
  couponInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyCouponCode();
    }
  });

  // Checkout modal
  proceedToCheckoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Your shopping bag is empty.", "error");
      return;
    }
    closeCartDrawer();
    openCheckoutModal();
  });

  checkoutClose.addEventListener("click", () => {
    checkoutModal.classList.remove("active");
  });

  // Wishlist trigger
  wishlistTrigger.addEventListener("click", () => {
    currentFilter = "wishlist";
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    updateFilterFeedback();
    renderCatalog();
    scrollToSection("collections");
  });

  // Modals close on ESC or backdrop
  quickViewClose.addEventListener("click", () => quickViewModal.classList.remove("active"));
  wristGuideClose.addEventListener("click", () => wristGuideModal.classList.remove("active"));

  [quickViewModal, wristGuideModal, checkoutModal, orderSuccessModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      quickViewModal.classList.remove("active");
      wristGuideModal.classList.remove("active");
      checkoutModal.classList.remove("active");
      orderSuccessModal.classList.remove("active");
      searchOverlay.classList.remove("active");
    }
  });
}

function setupMobileNav() {
  if (!mobileMenuBtn || !mobileNav) return;
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
}

// --- 6. CATALOG RENDERING & FILTERING ---
function getFilteredProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (currentFilter === "womens") {
    list = list.filter(p => p.category === "womens");
  } else if (currentFilter === "mens") {
    list = list.filter(p => p.category === "mens");
  } else if (currentFilter === "bestseller") {
    list = list.filter(p => p.isBestseller);
  } else if (currentFilter === "under4000") {
    list = list.filter(p => p.price < 4000);
  } else if (currentFilter === "wishlist") {
    list = list.filter(p => wishlist.includes(p.id));
  }

  // Search filter
  if (searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(searchQuery) ||
      p.tagline.toLowerCase().includes(searchQuery) ||
      p.description.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      p.specs.metal.toLowerCase().includes(searchQuery)
    );
  }

  // Sorting
  if (currentSort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

function renderCatalog() {
  const items = getFilteredProducts();

  if (items.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 2.5rem; margin-bottom: 1rem;">💍</div>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; color: #fff;">No Creations Found</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          We could not find any bracelets matching your criteria.
        </p>
        <button class="btn btn-secondary" onclick="resetAllFilters()">View All Creations</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = items.map(p => {
    const isWish = wishlist.includes(p.id);
    const savingsPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    const categoryLabel = p.category === "womens" ? "Women's 925 Silver" : "Men's 925 Silver";

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-img-wrapper">
          <span class="card-tag">${p.tag}</span>
          <button class="card-wishlist ${isWish ? 'active' : ''}" onclick="toggleWishlist('${p.id}', event)" title="Save to Wishlist" aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <img src="${p.image}" alt="${p.name}" loading="lazy" onclick="openQuickView('${p.id}')">
          <button class="quick-view-overlay-btn" onclick="openQuickView('${p.id}')">Quick View</button>
        </div>

        <div class="product-details">
          <div class="product-meta-row">
            <span class="product-gender">${categoryLabel}</span>
            <span class="product-purity-stamp">925 Hallmark</span>
          </div>

          <h3 class="product-title" onclick="openQuickView('${p.id}')" style="cursor: pointer;">${p.name}</h3>
          <p class="product-tagline">"${p.tagline}"</p>

          <div class="product-price-row">
            <span class="current-price">₹${p.price.toLocaleString("en-IN")}</span>
            <span class="original-price">₹${p.originalPrice.toLocaleString("en-IN")}</span>
            <span class="savings-tag">Save ${savingsPercent}%</span>
          </div>

          <div class="product-actions-row">
            <button class="btn-card-cart" onclick="addToCart('${p.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line></svg>
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function updateFilterFeedback() {
  if (searchQuery || currentFilter === "wishlist" || currentFilter === "under4000") {
    filterFeedback.style.display = "flex";
    if (searchQuery) {
      feedbackText.textContent = `"${searchQuery}"`;
    } else if (currentFilter === "wishlist") {
      feedbackText.textContent = `Your Wishlist (${wishlist.length} saved)`;
    } else if (currentFilter === "under4000") {
      feedbackText.textContent = `Bracelets Under ₹4,000`;
    }
  } else {
    filterFeedback.style.display = "none";
  }
}

function resetAllFilters() {
  currentFilter = "all";
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === "all");
  });
  updateFilterFeedback();
  renderCatalog();
}

function filterAndScroll(category) {
  currentFilter = category;
  searchQuery = "";
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".tab-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.filter === category);
  });
  updateFilterFeedback();
  renderCatalog();
  scrollToSection("collections");
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// --- 7. QUICK VIEW MODAL ---
function openQuickView(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const savingsPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
  let selectedSize = p.sizes[0] || "Standard (58 mm)";
  let quantity = 1;

  quickViewContent.innerHTML = `
    <div class="quick-view-grid">
      <div class="qv-image-box">
        <span class="card-tag">${p.tag}</span>
        <img src="${p.image}" alt="${p.name}">
      </div>

      <div class="qv-info">
        <span class="qv-category-pill">${p.category === 'womens' ? "Women's Collection" : "Men's Collection"} • 925 Pure Silver</span>
        <h2 class="qv-title">${p.name}</h2>
        <p class="qv-tagline">"${p.tagline}"</p>

        <div class="qv-price-box">
          <span class="qv-current-price">₹${p.price.toLocaleString("en-IN")}</span>
          <span class="original-price">₹${p.originalPrice.toLocaleString("en-IN")}</span>
          <span class="savings-tag">Save ${savingsPercent}%</span>
        </div>

        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.2rem; line-height: 1.6;">
          ${p.description}
        </p>

        <!-- Specifications Table -->
        <table class="qv-specs-table">
          <tbody>
            <tr><td>Metal & Purity</td><td>${p.specs.metal}</td></tr>
            <tr><td>Surface Plating</td><td>${p.specs.finish}</td></tr>
            <tr><td>Certification</td><td>${p.specs.hallmark}</td></tr>
            <tr><td>Silver Weight</td><td>${p.specs.weight}</td></tr>
            <tr><td>Closure / Clasp</td><td>${p.specs.clasp}</td></tr>
            <tr><td>Tarnish & Water</td><td>Protected with Liquid Rhodium • Water Resistant</td></tr>
          </tbody>
        </table>

        <!-- Size Selection -->
        <div class="qv-size-selector">
          <div class="qv-size-header">
            <span>Select Dimension / Fit:</span>
            <span class="size-guide-link" onclick="openWristGuide()">Wrist Size Chart ↗</span>
          </div>
          <div class="size-options-pills">
            ${p.sizes.map((s, idx) => `
              <button class="size-pill-btn ${idx === 0 ? 'selected' : ''}" onclick="selectModalSize(this, '${s}')">${s}</button>
            `).join("")}
          </div>
        </div>

        <!-- Quantity & Add to Bag -->
        <div class="qv-actions-row">
          <div class="qv-quantity-stepper">
            <button class="qty-btn" onclick="stepModalQty(-1)">&minus;</button>
            <span class="qty-val" id="modalQtyDisplay">1</span>
            <button class="qty-btn" onclick="stepModalQty(1)">&plus;</button>
          </div>
          <button class="btn btn-primary" style="flex: 1;" onclick="addFromModal('${p.id}')">
            <span>Add to Shopping Bag</span>
          </button>
        </div>

        <p style="font-size: 0.72rem; color: var(--text-muted); margin-top: 1rem; text-align: center;">
          ✨ Includes signature Mahesh Jewellers velvet box, silver polishing cloth & certificate.
        </p>
      </div>
    </div>
  `;

  // Attach state to window for modal buttons
  window._modalSelectedSize = selectedSize;
  window._modalQty = quantity;

  quickViewModal.classList.add("active");
}

function selectModalSize(btn, size) {
  document.querySelectorAll(".size-pill-btn").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  window._modalSelectedSize = size;
}

function stepModalQty(delta) {
  let q = (window._modalQty || 1) + delta;
  if (q < 1) q = 1;
  if (q > 10) q = 10;
  window._modalQty = q;
  const disp = document.getElementById("modalQtyDisplay");
  if (disp) disp.textContent = q;
}

function addFromModal(productId) {
  const size = window._modalSelectedSize || "Standard";
  const qty = window._modalQty || 1;
  addToCart(productId, size, qty);
  quickViewModal.classList.remove("active");
  openCartDrawer();
}

// --- 8. WRIST SIZING GUIDE ---
function openWristGuide() {
  wristGuideModal.classList.add("active");
}

function openConciergeModal() {
  window.open("https://wa.me/919999999999?text=Hello%20Mahesh%20Jewellers,%20I%20would%20like%20guidance%20on%20sizing%20and%20silver%20purity.", "_blank");
}

// --- 9. SHOPPING CART ENGINE ---
function addToCart(productId, size = null, quantity = 1) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const itemSize = size || p.sizes[0] || "Standard (58 mm)";
  const existingIndex = cart.findIndex(ci => ci.id === productId && ci.size === itemSize);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      size: itemSize,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${p.name}" to your shopping bag!`, "toast-gold");
}

function updateCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(index) {
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`Removed "${removedName}" from bag.`);
}

function saveCart() {
  localStorage.setItem("mj_silver_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCount) cartCount.textContent = totalItems;
  if (cartTotalItemsCount) cartTotalItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'Piece' : 'Pieces'}`;

  // Calculate discount
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.rate) {
      discountAmount = Math.round(subtotal * appliedCoupon.rate);
    } else if (appliedCoupon.flat) {
      discountAmount = Math.min(appliedCoupon.flat, subtotal);
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount);

  if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  if (cartGrandTotal) cartGrandTotal.textContent = `₹${grandTotal.toLocaleString("en-IN")}`;

  if (discountRow) {
    if (discountAmount > 0) {
      discountRow.style.display = "flex";
      cartDiscount.textContent = `-₹${discountAmount.toLocaleString("en-IN")} (${appliedCoupon.code})`;
    } else {
      discountRow.style.display = "none";
    }
  }

  // Render items
  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🛍️</div>
          <h4>Your Bag is Empty</h4>
          <p>Explore our handcrafted 925 sterling silver bracelets for men & women.</p>
          <button class="btn btn-secondary btn-sm" onclick="closeCartDrawer(); scrollToSection('collections');">
            Discover Collection
          </button>
        </div>
      `;
      if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = true;
    } else {
      if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = false;
      cartItemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
          <div class="ci-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="ci-details">
            <div>
              <h4 class="ci-title">${item.name}</h4>
              <div class="ci-meta">Size: ${item.size} • 925 Silver</div>
            </div>
            <div class="ci-bottom-row">
              <div class="ci-qty-controls">
                <button class="ci-qty-btn" onclick="updateCartQty(${idx}, -1)">&minus;</button>
                <span class="ci-qty-val">${item.quantity}</span>
                <button class="ci-qty-btn" onclick="updateCartQty(${idx}, 1)">&plus;</button>
              </div>
              <span class="ci-price">₹${(item.price * item.quantity).toLocaleString("en-IN")}</span>
            </div>
            <button class="ci-remove-btn" onclick="removeFromCart(${idx})">Remove</button>
          </div>
        </div>
      `).join("");
    }
  }
}

function openCartDrawer() {
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// --- 10. COUPON ENGINE ---
function applyCouponCode() {
  const code = (couponInput.value || "").trim().toUpperCase();
  if (!code) return;

  if (code === "ROYAL10") {
    appliedCoupon = { code: "ROYAL10", rate: 0.10 };
    couponStatus.className = "coupon-status success";
    couponStatus.textContent = "✓ Privilege coupon ROYAL10 applied (10% Off)!";
    showToast("10% Privilege discount applied!", "toast-gold");
  } else if (code === "SILVER925" || code === "MAHESH500") {
    appliedCoupon = { code: code, flat: 500 };
    couponStatus.className = "coupon-status success";
    couponStatus.textContent = `✓ Special voucher ${code} applied (₹500 Off)!`;
    showToast("₹500 voucher discount applied!", "toast-gold");
  } else {
    couponStatus.className = "coupon-status error";
    couponStatus.textContent = "Invalid or expired code. Try 'ROYAL10'.";
    return;
  }

  updateCartUI();
}

// --- 11. CHECKOUT MODAL & ORDER PROCESSING ---
function openCheckoutModal() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.rate) discountAmount = Math.round(subtotal * appliedCoupon.rate);
    else if (appliedCoupon.flat) discountAmount = Math.min(appliedCoupon.flat, subtotal);
  }
  const grandTotal = Math.max(0, subtotal - discountAmount);

  document.getElementById("checkoutPayAmount").textContent = `₹${grandTotal.toLocaleString("en-IN")}`;
  document.getElementById("coSubtotal").textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  document.getElementById("coTotal").textContent = `₹${grandTotal.toLocaleString("en-IN")}`;

  const discountLine = document.getElementById("coDiscountLine");
  if (discountAmount > 0) {
    discountLine.style.display = "flex";
    document.getElementById("coDiscount").textContent = `-₹${discountAmount.toLocaleString("en-IN")}`;
  } else {
    discountLine.style.display = "none";
  }

  // Preview items list
  const previewBox = document.getElementById("checkoutItemsPreview");
  previewBox.innerHTML = cart.map(item => `
    <div class="co-item">
      <span class="co-item-name">${item.quantity}x ${item.name} (${item.size})</span>
      <span class="co-item-price">₹${(item.price * item.quantity).toLocaleString("en-IN")}</span>
    </div>
  `).join("");

  checkoutModal.classList.add("active");
}

function submitOrder() {
  const fullName = document.getElementById("cFullName").value.trim();
  const phone = document.getElementById("cPhone").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const city = document.getElementById("cCity").value.trim();

  if (!fullName || !phone || !email || !city) {
    showToast("Please fill in all mandatory shipping fields.", "error");
    return;
  }

  const btn = document.getElementById("placeOrderBtn");
  btn.disabled = true;
  btn.innerHTML = `<span>Securing Insured Order...</span>`;

  setTimeout(() => {
    // Generate order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `#MJ-${randomNum}`;
    document.getElementById("confirmedOrderId").textContent = orderId;

    // Reset cart
    cart = [];
    appliedCoupon = null;
    saveCart();
    updateCartUI();

    // Close checkout and open success
    checkoutModal.classList.remove("active");
    orderSuccessModal.classList.add("active");

    btn.disabled = false;
    btn.innerHTML = `<span>Complete Order</span>`;
    showToast(`Order ${orderId} confirmed successfully!`, "toast-gold");
  }, 1200);
}

function closeOrderSuccess() {
  orderSuccessModal.classList.remove("active");
  scrollToSection("collections");
}

// --- 12. WISHLIST MANAGEMENT ---
function toggleWishlist(productId, e) {
  if (e) e.stopPropagation();
  const idx = wishlist.indexOf(productId);
  const p = PRODUCTS.find(x => x.id === productId);

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`Removed from Wishlist.`);
  } else {
    wishlist.push(productId);
    showToast(`Saved "${p ? p.name : 'Item'}" to Wishlist!`, "toast-gold");
  }

  localStorage.setItem("mj_silver_wishlist", JSON.stringify(wishlist));
  updateWishlistUI();
  renderCatalog();
}

function updateWishlistUI() {
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }
}

// --- 13. VIP NEWSLETTER & UTILITIES ---
function subscribeNewsletter() {
  const email = document.getElementById("newsletterEmail").value.trim();
  if (!email) return;

  document.getElementById("newsletterSuccess").style.display = "block";
  document.getElementById("newsletterEmail").value = "";
  showToast("Welcome to the Privileged Circle! Code: ROYAL10", "toast-gold");
}

function showShippingInfo() {
  alert("Complimentary Priority Air Shipping:\n\n• Delivery within 2-4 business days across India.\n• Fully insured transit against damage or loss.\n• Discreet tamper-proof packaging with security seal.");
}

function showReturnPolicy() {
  alert("15-Day Exchange & Guarantee:\n\n• 15-day complimentary exchange for resizing or styling preferences.\n• Lifetime authenticity guarantee on 925 BIS Hallmarking.\n• Free door-step pickup on return requests.");
}

// --- 14. TOAST NOTIFICATIONS ---
function showToast(message, extraClass = "") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${extraClass}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
