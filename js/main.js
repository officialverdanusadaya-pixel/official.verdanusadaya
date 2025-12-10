// Main JavaScript file for Verda Nusadaya Static Website

// Company Configuration - Centralized Data
const COMPANY_CONFIG = {
  name: "PT. Verda Nusadaya",
  address: {
    street: "Jl. Raya Gondang No.16, Gondang Village",
    district: "Gangga Subdistrict",
    regency: "North Lombok Regency",
    province: "West Nusa Tenggara",
    postalCode: "83353",
    country: "Indonesia",
  },
  contact: {
    phone: "+62 812-3456-7890",
    email: "info@verdanusadaya.com",
    salesPhone: "+62 812-3456-7890",
    customerServicePhone: "+62 811-2345-6789",
  },
  social: {
    facebook: "https://www.facebook.com/verdanusadaya",
    instagram: "https://www.instagram.com/verdanusadaya",
    twitter: "https://www.twitter.com/verdanusadaya",
  },
  operatingHours: {
    weekdays: "08:00 AM - 05:00 PM WIB",
    saturday: "08:00 AM - 12:00 PM WIB",
  },
};

// Mobile Menu Toggle Function
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  } else {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Product Data with Enhanced Information
const products = [
  {
    id: 1,
    name: "Premium Coffee",
    category: "kopi",
    description:
      "Premium Coffee – designed for the modern lifestyle. Savor the rich aroma and deep flavor, whether at home, at work, or with friends.",
    image:
      "https://images.unsplash.com/photo-1589830802010-c2c25d784842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp 150.000/kg",
    rating: 4.8,
    isFeatured: true,
    inStock: true,
    minOrder: 100,
    specs: [
      "100% Arabika",
      "Grade 1",
      "Single Origin",
      "Roasted Fresh",
      "Certified Organic",
    ],
    categoryLabel: "Kopi",
  },
  {
    id: 2,
    name: "Cashew Crush",
    category: "karet",
    description:
      "Cashew Crush features hand-selected, crunchy cashews with a rich, buttery flavor. Perfect as a snack or a gourmet addition to your favorite recipes, delivering an irresistible crunch in every bite.",
    image:
      "https://images.unsplash.com/photo-1626609940583-15b24846eadd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp 25.000/kg",
    rating: 4.7,
    isFeatured: true,
    inStock: true,
    minOrder: 500,
    specs: [
      "SIR-20 Standard",
      "Moisture < 0.8%",
      "Impurities < 0.05%",
      "Packing 50kg",
    ],
    categoryLabel: "Karet",
  },
  {
    id: 3,
    name: "Golden Clove",
    category: "kelapa-sawit",
    description:
      "Golden Clove offers the finest, hand-selected cloves with a rich, warm aroma. Perfect for enhancing the flavor of your culinary creations, beverages, or spice blends, delivering an unforgettable taste experience.",
    image:
      "https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp 12.000/kg",
    rating: 4.9,
    isFeatured: true,
    inStock: true,
    minOrder: 1000,
    specs: [
      "FFB Quality",
      "Free Fatty Acid < 5%",
      "Moisture < 0.2%",
      "Halal Certified",
      "RSPO Certified",
    ],
    categoryLabel: "Kelapa Sawit",
  },
  {
    id: 4,
    name: "Golden Coconut",
    category: "kopi",
    description:
      "Experience the tropical freshness of Golden Coconut. Its rich aroma and natural sweetness bring a refreshing taste to every dish or drink.",
    image:
      "https://images.unsplash.com/photo-1537191072641-5e19cc173c6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp 120.000/kg",
    rating: 4.6,
    isFeatured: false,
    inStock: true,
    minOrder: 100,
    specs: ["100% Robusta", "Grade 1", "High Caffeine", "Medium Roast"],
    categoryLabel: "Kopi",
  },
];

// Helper Functions
function getCategoryLabel(category) {
  const labels = {
    kopi: "Kopi",
    karet: "Karet",
    "kelapa-sawit": "Kelapa Sawit",
    lainnya: "Lainnya",
  };
  return labels[category] || category;
}

function generateRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = "";

  for (let i = 0; i < fullStars; i++) {
    stars += `
      <svg class="star w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;
  }

  if (hasHalfStar) {
    stars += `
      <svg class="star w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += `
      <svg class="star w-4 h-4 star-empty" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    `;
  }

  return stars;
}

function generateSpecsBadges(specs) {
  const maxSpecs = 2;
  let badges = "";

  specs.slice(0, maxSpecs).forEach((spec) => {
    badges += `<span class="badge badge-secondary text-xs">${spec}</span>`;
  });

  if (specs.length > maxSpecs) {
    badges += `<span class="badge badge-secondary text-xs">+${
      specs.length - maxSpecs
    }</span>`;
  }

  return badges;
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className =
    "card group hover:shadow-xl transition-all duration-300 overflow-hidden";

  const categoryLabel = getCategoryLabel(product.category);
  const ratingStars = generateRatingStars(product.rating);
  const specsBadges = generateSpecsBadges(product.specs);

  card.innerHTML = `
    <div class="card-image-container">
      <img src="${product.image}" alt="${
    product.name
  }" class="card-image" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(
    product.name
  )}'">
      <span class="badge badge-primary absolute top-4 left-4">${categoryLabel}</span>
      ${
        product.isFeatured
          ? `
        <span class="badge badge-yellow absolute top-4 right-4">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292z"></path>
          </svg>
          Unggulan
        </span>
      `
          : ""
      }
      ${
        !product.inStock
          ? `
        <span class="badge bg-red-500 text-white absolute top-4 right-4">Stok Habis</span>
      `
          : ""
      }
    </div>
    <div class="card-content">
      <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
      <p class="text-gray-600 mb-4 line-clamp-2">${product.description}</p>
      
      <div class="flex items-center mb-3">
        <div class="flex">
          ${ratingStars}
        </div>
        <span class="ml-2 text-sm text-gray-600">${product.rating}</span>
      </div>

      <div class="mb-4">
        <div class="flex flex-wrap gap-1">
          ${specsBadges}
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div>
          <span class="text-lg font-bold text-green-600">${product.price}</span>
          <span class="text-xs text-gray-500 block">Min. ${product.minOrder} ${
    product.category === "kelapa-sawit" && product.name.includes("Liter")
      ? "liter"
      : "kg"
  }</span>
        </div>
        <div class="flex gap-2">
          <a href="product-detail.html?id=${
            product.id
          }" class="btn btn-outline btn-sm">Detail</a>
          <a href="#contact" class="btn btn-primary btn-sm" onclick="setProductInterest('${
            product.name
          }')">Beli</a>
        </div>
      </div>
    </div>
  `;

  return card;
}

// Product Rendering Functions
function renderProducts(filteredProducts = products) {
  const container = document.getElementById("productsContainer");
  const noResults = document.getElementById("noResults");
  const productCount = document.getElementById("productCount");

  if (!container) return;

  container.innerHTML = "";

  if (filteredProducts.length === 0) {
    container.style.display = "none";
    if (noResults) noResults.classList.remove("hidden");
    if (productCount) productCount.textContent = "0";
    return;
  }

  container.style.display = "grid";
  if (noResults) noResults.classList.add("hidden");
  if (productCount) productCount.textContent = filteredProducts.length;

  filteredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProductsContainer");

  if (!container) return;

  const featuredProducts = products.filter((p) => p.isFeatured && p.inStock);

  container.innerHTML = "";

  featuredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// Filter and Search Functions
function filterProducts() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch && product.inStock;
  });

  renderProducts(filteredProducts);
}

function resetFilters() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  if (searchInput) searchInput.value = "";
  if (categoryFilter) categoryFilter.value = "all";

  renderProducts();
}

// Enhanced Form Validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

function validateForm(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 3) {
    errors.name = "Nama lengkap minimal 3 karakter";
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = "Format email tidak valid";
  }

  if (!formData.phone || !validatePhone(formData.phone)) {
    errors.phone = "Format nomor telepon tidak valid";
  }

  if (!formData.subject || formData.subject.trim().length < 5) {
    errors.subject = "Subjek minimal 5 karakter";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Pesan minimal 10 karakter";
  }

  return errors;
}

function showFormErrors(errors) {
  // Clear previous errors
  document
    .querySelectorAll(
      ".form-input.error, .form-textarea.error, .form-select.error"
    )
    .forEach((el) => {
      el.classList.remove("error");
    });
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  Object.keys(errors).forEach((field) => {
    const input = document.getElementById(field);
    if (input) {
      input.classList.add("error");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message text-red-500 text-sm mt-1";
      errorDiv.textContent = errors[field];
      input.parentNode.appendChild(errorDiv);
    }
  });
}

// Enhanced Contact Form Handler
function handleContactForm(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");

  // Get form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    company: form.company.value,
    productInterest: form.productInterest.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  // Validate form
  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    showFormErrors(errors);
    return;
  }

  // Clear previous errors
  showFormErrors({});

  // Show loading state
  if (submitBtn) {
    submitBtn.innerHTML = `
      <div class="loading-spinner inline-block mr-2"></div>
      Mengirim...
    `;
    submitBtn.disabled = true;
  }

  // Simulate form submission
  setTimeout(() => {
    // Show success message
    if (formStatus) {
      formStatus.className = "success-message p-4 rounded-md mb-4";
      formStatus.innerHTML = `
        <p class="text-green-800">✓ Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</p>
        <p class="text-green-700 text-sm mt-2">Terima kasih telah menghubungi PT. Verda Nusadaya.</p>
      `;
    }

    // Reset form
    form.reset();

    // Reset button
    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
        Kirim Pesan
      `;
      submitBtn.disabled = false;
    }

    // Hide status message after 7 seconds
    setTimeout(() => {
      if (formStatus) {
        formStatus.className = "hidden p-4 rounded-md mb-4";
        formStatus.innerHTML = "";
      }
    }, 7000);

    // Log form data (in real implementation, this would be sent to server)
    console.log("Form submitted:", formData);
  }, 2000);
}

// Set product interest for contact form
function setProductInterest(productName) {
  // Store in sessionStorage to use when contact page loads
  sessionStorage.setItem("productInterest", productName);
}

// Initialize product interest from sessionStorage
function initializeProductInterest() {
  const productInterest = sessionStorage.getItem("productInterest");
  if (productInterest) {
    const productSelect = document.getElementById("productInterest");
    if (productSelect) {
      // Find matching option
      Array.from(productSelect.options).forEach((option) => {
        if (
          option.text.toLowerCase().includes(productInterest.toLowerCase()) ||
          productName.toLowerCase().includes(option.text.toLowerCase())
        ) {
          productSelect.value = option.value;
        }
      });
    }
    // Clear sessionStorage
    sessionStorage.removeItem("productInterest");
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm);
  }

  // Initialize product interest
  initializeProductInterest();
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Navigation scroll effect
function setupNavScrollEffect() {
  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        nav.classList.add("shadow-md");
      } else {
        nav.classList.remove("shadow-md");
      }
    });
  }
}

// Lazy loading for images
function setupLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Download catalog function
function downloadCatalog() {
  const catalogContent = `
VERDA NUSADAYA - PRODUCT CATALOG
=====================================

Premium Agro-Industry Products

${products
  .map(
    (product) => `
${product.id}. ${product.name}
   Category: ${product.categoryLabel}
   Price: ${product.price}
   Minimum Order: ${product.minOrder} ${
      product.category === "kelapa-sawit" && product.name.includes("Liter")
        ? "liter"
        : "kg"
    }
   Rating: ${product.rating}/5
   ${product.isFeatured ? "⭐ Featured Product" : ""}
   
   Description: ${product.description}
   
   Specifications:
   ${product.specs.map((spec) => `   • ${spec}`).join("\n")}
   
   ---
`
  )
  .join("\n")}

Company Information:
==================
${COMPANY_CONFIG.name}
Address: ${COMPANY_CONFIG.address.street}
         ${COMPANY_CONFIG.address.district}
         ${COMPANY_CONFIG.address.regency}
         ${COMPANY_CONFIG.address.province} ${COMPANY_CONFIG.address.postalCode}
         ${COMPANY_CONFIG.address.country}

Contact:
Phone: ${COMPANY_CONFIG.contact.phone}
Email: ${COMPANY_CONFIG.contact.email}

Operating Hours:
Monday - Friday: ${COMPANY_CONFIG.operatingHours.weekdays}
Saturday: ${COMPANY_CONFIG.operatingHours.saturday}

Website: https://officialverdanusadaya-pixel.github.io/official.verdanusadaya/

For more information or to place an order, please contact our sales team.

Generated on: ${new Date().toLocaleDateString("id-ID")}
  `;

  const blob = new Blob([catalogContent], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "verda-nusadaya-product-catalog.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Tab switching for product detail
function showTab(tabName) {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.classList.remove("active");
    if (button.textContent.toLowerCase().includes(tabName)) {
      button.classList.add("active");
    }
  });

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  const activeTab = document.getElementById(`${tabName}Tab`);
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Setup all event listeners
  setupEventListeners();
  setupSmoothScroll();
  setupNavScrollEffect();
  setupLazyLoading();

  // Check current page and initialize accordingly
  if (document.getElementById("productsContainer")) {
    renderProducts();
  } else if (document.getElementById("featuredProductsContainer")) {
    renderFeaturedProducts();
  }
});

// Make functions globally available
window.toggleMobileMenu = toggleMobileMenu;
window.showTab = showTab;
window.downloadCatalog = downloadCatalog;
window.setProductInterest = setProductInterest;
window.resetFilters = resetFilters;
