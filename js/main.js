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
      "Premium Coffee – designed for modern lifestyle. Savor rich aroma and deep flavor, whether at home, at work, or with friends.",
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
    stars += `<i class="fas fa-star star"></i>`;
  }

  if (hasHalfStar) {
    stars += `<i class="fas fa-star-half-alt star"></i>`;
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += `<i class="far fa-star star-empty"></i>`;
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
  card.className = "product-card";

  const categoryLabel = getCategoryLabel(product.category);
  const ratingStars = generateRatingStars(product.rating);
  const specsBadges = generateSpecsBadges(product.specs);

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${
    product.name
  }" loading="lazy" onerror="this.src='https://picsum.photos/seed/${
    product.id
  }/400/300.jpg'">
      <span class="product-badge">${categoryLabel}</span>
      ${product.isFeatured ? `<span class="product-badge">Unggulan</span>` : ""}
      ${
        !product.inStock
          ? `<span class="product-badge" style="background-color: #dc2626;">Stok Habis</span>`
          : ""
      }
    </div>
    <div class="product-content">
      <h3 class="product-title">${product.name}</h3>
      <p class="text-gray-600 mb-4 line-clamp-2">${product.description}</p>
      
      <div class="product-rating">
        <div class="rating-stars">
          ${ratingStars}
        </div>
        <span class="rating-value">${product.rating}</span>
      </div>

      <div class="mb-4">
        <div class="flex flex-wrap gap-1">
          ${specsBadges}
        </div>
      </div>

      <div class="product-price">${product.price}</div>
      <div class="text-xs text-gray-500 mb-4">Min. ${product.minOrder} ${
    product.category === "kelapa-sawit" && product.name.includes("Liter")
      ? "liter"
      : "kg"
  }</div>

      <div class="product-actions">
        <a href="product-detail.html?id=${
          product.id
        }" class="product-btn product-btn-outline">Detail</a>
        <a href="contact.html" class="product-btn product-btn-primary" onclick="setProductInterest('${
          product.name
        }')">Beli</a>
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

// Product Detail Functions
function loadProductDetail(productId) {
  const product = products.find((p) => p.id == productId);

  if (!product) {
    showError();
    return;
  }

  displayProductDetail(product);
  loadRelatedProducts(product.category, product.id);
  setupImageZoom();
  updateCanonicalUrl(product);
}

function displayProductDetail(product) {
  // Hide loading state
  const loadingState = document.getElementById("loadingState");
  const productContent = document.getElementById("productContent");

  if (loadingState) loadingState.classList.add("hidden");
  if (productContent) productContent.classList.remove("hidden");

  // Update breadcrumb
  const productName = document.getElementById("productName");
  if (productName) productName.textContent = product.name;

  // Update product image
  const productImage = document.getElementById("productImage");
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
    productImage.onerror = function () {
      this.src = `https://picsum.photos/seed/${product.id}/600/600.jpg`;
    };
  }

  // Create image thumbnails
  createImageThumbnails(product);

  // Update product badge if featured
  const productBadge = document.getElementById("productBadge");
  if (productBadge && product.isFeatured) {
    productBadge.textContent = "Unggulan";
    productBadge.classList.add("badge-featured");
    productBadge.classList.remove("hidden");
  }

  // Update product title
  const productTitle = document.getElementById("productTitle");
  if (productTitle) productTitle.textContent = product.name;

  // Update product category
  const productCategory = document.getElementById("productCategory");
  if (productCategory)
    productCategory.textContent = getCategoryLabel(product.category);

  // Update rating
  const productRating = document.getElementById("productRating");
  const productRatingValue = document.getElementById("productRatingValue");
  if (productRating)
    productRating.innerHTML = generateRatingStars(product.rating);
  if (productRatingValue)
    productRatingValue.textContent = `${product.rating} (${
      Math.floor(Math.random() * 50) + 10
    } ulasan)`;

  // Update product specs
  const productSpecs = document.getElementById("productSpecs");
  if (productSpecs) {
    productSpecs.innerHTML = "";
    product.specs.forEach((spec) => {
      const badge = document.createElement("span");
      badge.className = "spec-badge";
      badge.textContent = spec;
      productSpecs.appendChild(badge);
    });
  }

  // Update description
  const productDescription = document.getElementById("productDescription");
  const fullDescription = document.getElementById("fullDescription");
  if (productDescription) productDescription.textContent = product.description;
  if (fullDescription) {
    fullDescription.textContent = `${product.description} 

Produk ini memiliki kualitas terbaik dan telah melalui proses quality control yang ketat untuk memastikan kepuasan pelanggan. Dengan harga yang kompetitif, produk ini menjadi pilihan utama untuk kebutuhan agroindustri Anda.

Keunggulan Produk:
• Kualitas premium terjamin
• Sertifikasi internasional
• Harga kompetitif
• Pengiriman tepat waktu
• Layanan pelanggan terbaik

Aplikasi Produk:
 ${product.specs.map((spec) => `• ${spec}`).join("\n")}

Untuk informasi lebih lanjut tentang harga, ketersediaan stok, dan proses pemesanan, silakan hubungi tim sales kami.`;
  }

  // Update specifications
  const specList = document.getElementById("specList");
  if (specList) {
    specList.innerHTML = "";
    const categoryLabel = getCategoryLabel(product.category);

    // Add basic specs
    const basicSpecs = [
      { label: "Kategori", value: categoryLabel },
      { label: "Harga", value: product.price },
      {
        label: "Minimum Order",
        value: `${product.minOrder} ${
          product.category === "kelapa-sawit" && product.name.includes("Liter")
            ? "liter"
            : "kg"
        }`,
      },
      {
        label: "Ketersediaan",
        value: product.inStock ? "Tersedia" : "Stok Habis",
      },
      { label: "Rating", value: `${product.rating}/5.0` },
    ];

    basicSpecs.forEach((spec) => {
      const specItem = document.createElement("li");
      specItem.innerHTML = `
        <span class="spec-label">${spec.label}</span>
        <span class="spec-value">${spec.value}</span>
      `;
      specList.appendChild(specItem);
    });

    // Add all specs from product data
    product.specs.forEach((spec) => {
      const specItem = document.createElement("li");
      specItem.innerHTML = `
        <span class="spec-label">${spec}</span>
        <span class="spec-value">Tersedia</span>
      `;
      specList.appendChild(specItem);
    });
  }
}

function createImageThumbnails(product) {
  const imageThumbnails = document.getElementById("imageThumbnails");
  if (!imageThumbnails) return;

  // Clear existing thumbnails
  imageThumbnails.innerHTML = "";

  // Generate additional image URLs for thumbnails
  const thumbnailImages = [
    product.image,
    `https://picsum.photos/seed/${product.id}-1/300/300.jpg`,
    `https://picsum.photos/seed/${product.id}-2/300/300.jpg`,
    `https://picsum.photos/seed/${product.id}-3/300/300.jpg`,
  ];

  // Create thumbnail elements
  thumbnailImages.forEach((imageUrl, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail" + (index === 0 ? " active" : "");

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = `${product.name} - Gambar ${index + 1}`;
    img.loading = "lazy";

    thumbnail.appendChild(img);
    thumbnail.addEventListener("click", function () {
      // Update main image
      const productImage = document.getElementById("productImage");
      if (productImage) productImage.src = imageUrl;

      // Update active thumbnail
      document
        .querySelectorAll(".thumbnail")
        .forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
    });

    imageThumbnails.appendChild(thumbnail);
  });
}

function setupImageZoom() {
  const mainImageContainer = document.getElementById("mainImageContainer");
  const zoomLens = document.getElementById("zoomLens");
  const zoomResult = document.getElementById("zoomResult");
  const zoomImage = document.getElementById("zoomImage");
  const productImage = document.getElementById("productImage");

  if (
    !mainImageContainer ||
    !zoomLens ||
    !zoomResult ||
    !zoomImage ||
    !productImage
  )
    return;

  // Only enable zoom on desktop
  if (window.innerWidth > 768) {
    mainImageContainer.addEventListener("mousemove", function (e) {
      zoomLens.style.opacity = "1";
      zoomResult.style.opacity = "1";

      // Get mouse position
      const rect = mainImageContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position lens
      let lensX = x - 50;
      let lensY = y - 50;

      // Constrain lens within image
      if (lensX < 0) lensX = 0;
      if (lensY < 0) lensY = 0;
      if (lensX > rect.width - 100) lensX = rect.width - 100;
      if (lensY > rect.height - 100) lensY = rect.height - 100;

      zoomLens.style.left = lensX + "px";
      zoomLens.style.top = lensY + "px";

      // Update zoomed image
      const zoomX = (lensX / rect.width) * 100;
      const zoomY = (lensY / rect.height) * 100;

      zoomImage.src = productImage.src;
      zoomImage.style.transform = `scale(2) translate(-${zoomX}%, -${zoomY}%)`;
    });

    mainImageContainer.addEventListener("mouseleave", function () {
      zoomLens.style.opacity = "0";
      zoomResult.style.opacity = "0";
    });
  }
}

function loadRelatedProducts(category, currentProductId) {
  const relatedProducts = document.getElementById("relatedProducts");
  if (!relatedProducts) return;

  // Filter products by category (excluding current product)
  const related = products
    .filter(
      (p) => p.category === category && p.id != currentProductId && p.inStock
    )
    .slice(0, 4);

  // Clear related products container
  relatedProducts.innerHTML = "";

  if (related.length === 0) {
    relatedProducts.innerHTML =
      '<p class="text-gray-500 text-center col-span-full">Tidak ada produk terkait yang tersedia</p>';
    return;
  }

  // Add related products
  related.forEach((product, index) => {
    const productCard = createRelatedProductCard(product);
    productCard.setAttribute("data-aos", "fade-up");
    productCard.setAttribute("data-aos-delay", (index * 100).toString());
    relatedProducts.appendChild(productCard);
  });
}

function createRelatedProductCard(product) {
  const card = document.createElement("div");
  card.className = "related-product";

  const categoryLabel = getCategoryLabel(product.category);
  const ratingStars = generateRatingStars(product.rating);

  card.innerHTML = `
    <div class="related-product-image">
      <img src="${product.image}" alt="${
    product.name
  }" loading="lazy" onerror="this.src='https://picsum.photos/seed/${
    product.id
  }/400/300.jpg'">
      ${product.isFeatured ? `<span class="product-badge">Unggulan</span>` : ""}
    </div>
    <div class="related-product-content">
      <h3 class="related-product-title">${product.name}</h3>
      <p class="text-gray-600 mb-4 line-clamp-2">${product.description}</p>
      
      <div class="product-rating mb-3">
        <div class="rating-stars">${ratingStars}</div>
        <span class="rating-value">${product.rating}</span>
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
        <a href="product-detail.html?id=${
          product.id
        }" class="btn btn-primary btn-sm">Detail</a>
      </div>
    </div>
  `;

  return card;
}

function updateCanonicalUrl(product) {
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.href = `https://officialverdanusadaya-pixel.github.io/official.verdanusadaya/product-detail.html?id=${product.id}`;
  }
}

function showError() {
  const loadingState = document.getElementById("loadingState");
  const errorState = document.getElementById("errorState");

  if (loadingState) loadingState.classList.add("hidden");
  if (errorState) errorState.classList.remove("hidden");
}

// Filter and Search Functions
function filterProducts() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortBy = document.getElementById("sortBy");

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "all";
  const selectedSort = sortBy ? sortBy.value : "featured";

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.categoryLabel.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch && product.inStock;
  });

  // Sort products
  switch (selectedSort) {
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "price-low":
      filteredProducts.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
        return priceA - priceB;
      });
      break;
    case "price-high":
      filteredProducts.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
        const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
        return priceB - priceA;
      });
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "featured":
    default:
      // Featured products first, then by rating
      filteredProducts.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return b.rating - a.rating;
      });
      break;
  }

  renderProducts(filteredProducts);
}

function filterByCategory(category) {
  const categoryFilter = document.getElementById("categoryFilter");
  if (categoryFilter) {
    categoryFilter.value = category;
    filterProducts();
  }
}

function toggleView(viewType) {
  const container = document.getElementById("productsContainer");
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");

  if (viewType === "list") {
    container.classList.add("product-list-view");
    listBtn.classList.add("text-green-600");
    gridBtn.classList.remove("text-green-600");
  } else {
    container.classList.remove("product-list-view");
    gridBtn.classList.add("text-green-600");
    listBtn.classList.remove("text-green-600");
  }
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
        <i class="fas fa-paper-plane mr-2"></i>
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

// Event Listeners Setup
function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortBy = document.getElementById("sortBy");

  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
  }

  if (sortBy) {
    sortBy.addEventListener("change", filterProducts);
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
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  }
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  // Setup all event listeners
  setupEventListeners();
  setupSmoothScroll();
  setupNavScrollEffect();

  // Check current page and initialize accordingly
  if (document.getElementById("productsContainer")) {
    renderProducts();
  } else if (document.getElementById("featuredProductsContainer")) {
    renderFeaturedProducts();
  } else if (window.location.pathname.includes("product-detail.html")) {
    // Get product ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
      loadProductDetail(productId);
    } else {
      showError();
    }
  }
});

// Make functions globally available
window.toggleMobileMenu = toggleMobileMenu;
window.showTab = showTab;
window.downloadCatalog = downloadCatalog;
window.setProductInterest = setProductInterest;
window.resetFilters = resetFilters;
window.filterByCategory = filterByCategory;
window.toggleView = toggleView;
