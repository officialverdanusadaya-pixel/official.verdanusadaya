// Main JavaScript file for Verda Nusadaya Static Website

// PERBAIKAN: Fungsi toggle menu mobile sudah ada dan bekerja dengan baik
// Fungsi ini digunakan di semua halaman (index, about, products, dll.)
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  } else {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  }
}

// PERBAIKAN: Data produk dipindahkan ke sini agar bisa diakses semua halaman
// Data ini akan digunakan oleh index.html (produk unggulan) dan products.html (semua produk)
const products = [
  {
    id: 1,
    name: "Kopi Arabika Premium",
    category: "kopi",
    description:
      "Kopi arabika pilihan dengan cita rasa yang khas dan aroma yang menggugah selera.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: "Rp 150.000/kg",
    rating: 4.8,
    isFeatured: true,
    specs: ["100% Arabika", "Grade 1", "Single Origin", "Roasted Fresh"],
  },
  {
    id: 2,
    name: "Karet SIR-20",
    category: "karet",
    description:
      "Karet berkualitas tinggi sesuai standar internasional untuk industri.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: "Rp 25.000/kg",
    rating: 4.7,
    isFeatured: true,
    specs: [
      "SIR-20 Standard",
      "Moisture < 0.8%",
      "Impurities < 0.05%",
      "Packing 50kg",
    ],
  },
  {
    id: 3,
    name: "CPO Kelapa Sawit",
    category: "kelapa-sawit",
    description: "Crude Palm Oil berkualitas premium dari perkebunan terbaik.",
    image:
      "https://images.unsplash.com/photo-1592982537442-025781f5f7eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: "Rp 12.000/kg",
    rating: 4.9,
    isFeatured: true,
    specs: [
      "FFB Quality",
      "Free Fatty Acid < 5%",
      "Moisture < 0.2%",
      "Halal Certified",
    ],
  },
  {
    id: 4,
    name: "Kopi Robusta",
    category: "kopi",
    description:
      "Kopi robusta dengan kandungan kafein tinggi dan rasa yang kuat.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: "Rp 120.000/kg",
    rating: 4.6,
    isFeatured: false,
    specs: ["100% Robusta", "Grade 1", "High Caffeine", "Medium Roast"],
  },
  {
    id: 5,
    name: "Karet RSS-1",
    category: "karet",
    description: "Karet berkualitas untuk berbagai aplikasi industri.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: "Rp 22.000/kg",
    rating: 4.5,
    isFeatured: false,
    specs: [
      "RSS-1 Standard",
      "Moisture < 0.8%",
      "Impurities < 0.05%",
      "Packing 50kg",
    ],
  },
  {
    id: 6,
    name: "Minyak Goreng Sawit",
    category: "kelapa-sawit",
    description:
      "Minyak goreng berkualitas tinggi untuk kebutuhan rumah tangga dan industri.",
    image:
      "https://images.unsplash.com/photo-1592982537442-025781f5f7eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    price: "Rp 15.000/liter",
    rating: 4.7,
    isFeatured: false,
    specs: ["RBDPO", "FFA < 0.1%", "Packing 1L & 5L", "Halal Certified"],
  },
];

// PERBAIKAN: Fungsi helper untuk label kategori agar konsisten
function getCategoryLabel(category) {
  const labels = {
    kopi: "Kopi",
    karet: "Karet",
    "kelapa-sawit": "Kelapa Sawit",
    lainnya: "Lainnya",
  };
  return labels[category] || category;
}

// PERBAIKAN: Fungsi helper untuk membuat bintang rating
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
        <svg class="star w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        `;
  }

  return stars;
}

// PERBAIKAN: Fungsi helper untuk membuat badge spesifikasi
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

// PERBAIKAN: Fungsi untuk membuat kartu produk
// KRITIS: Link tombol "Detail" diperbaiki agar mengarah ke product-detail.html
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
  }" class="card-image">
            <span class="badge badge-primary absolute top-4 left-4">${categoryLabel}</span>
            ${
              product.isFeatured
                ? `
            <span class="badge badge-yellow absolute top-4 right-4">
                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                Unggulan
            </span>
            `
                : ""
            }
        </div>
        <div class="card-content">
            <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
            <p class="text-gray-600 mb-4 line-clamp-2">${
              product.description
            }</p>
            
            <div class="flex items-center mb-3">
                <div class="flex">
                    ${ratingStars}
                </div>
                <span class="ml-2 text-sm text-gray-600">${
                  product.rating
                }</span>
            </div>

            <div class="mb-4">
                <div class="flex flex-wrap gap-1">
                    ${specsBadges}
                </div>
            </div>

            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-green-600">${
                  product.price
                }</span>
                <div class="flex gap-2">
                    <!-- PERBAIKAN KRITIS: Link ini sekarang mengarah ke halaman detail produk dengan ID yang benar -->
                    <a href="product-detail.html?id=${
                      product.id
                    }" class="btn btn-outline btn-sm">Detail</a>
                    <a href="#contact" class="btn btn-primary btn-sm">Beli</a>
                </div>
            </div>
        </div>
    `;

  return card;
}

// PERBAIKAN: Fungsi untuk merender produk di halaman products.html
function renderProducts(filteredProducts = products) {
  const container = document.getElementById("productsContainer");
  const noResults = document.getElementById("noResults");
  const productCount = document.getElementById("productCount");

  // PERBAIKAN: Cek apakah container ada di halaman ini untuk menghindari error
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

// PERBAIKAN: Fungsi untuk merender produk unggulan di index.html
function renderFeaturedProducts() {
  const container = document.getElementById("featuredProductsContainer");

  // PERBAIKAN: Cek apakah container ada di halaman ini
  if (!container) return;

  // Filter hanya produk yang ditandai sebagai unggulan
  const featuredProducts = products.filter((p) => p.isFeatured);

  // Kosongkan container
  container.innerHTML = "";

  // Tambahkan produk unggulan
  featuredProducts.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}

// PERBAIKAN: Fungsi untuk menangani event listener
function setupEventListeners() {
  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  // PERBAIKAN: Cek apakah elemen ada sebelum menambahkan event listener
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
}

// PERBAIKAN: Fungsi untuk filter produk
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
    return matchesCategory && matchesSearch;
  });

  renderProducts(filteredProducts);
}

// PERBAIKAN: Fungsi untuk reset filter
function resetFilters() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  if (searchInput) searchInput.value = "";
  if (categoryFilter) categoryFilter.value = "all";

  renderProducts();
}

// PERBAIKAN: Fungsi untuk menangani submit form kontak
function handleContactForm(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = document.getElementById("submitBtn");
  const formStatus = document.getElementById("formStatus");

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
      formStatus.className =
        "p-4 bg-green-50 border border-green-200 rounded-md mb-4";
      formStatus.innerHTML = `
            <p class="text-green-800">✓ Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.</p>
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

    // Hide status message after 5 seconds
    setTimeout(() => {
      if (formStatus) {
        formStatus.className = "hidden p-4 rounded-md mb-4";
        formStatus.innerHTML = "";
      }
    }, 5000);
  }, 2000);
}

// PERBAIKAN: Inisialisasi berdasarkan halaman yang sedang aktif
document.addEventListener("DOMContentLoaded", function () {
  // Setup event listener umum
  setupEventListeners();

  // PERBAIKAN: Cek halaman mana yang sedang aktif dan jalankan fungsi yang sesuai
  // Halaman Produk
  if (document.getElementById("productsContainer")) {
    renderProducts();
  }
  // Halaman Index (untuk produk unggulan)
  else if (document.getElementById("featuredProductsContainer")) {
    renderFeaturedProducts();
  }
});

// PERBAIKAN: Smooth scroll untuk link anchor
document.addEventListener("DOMContentLoaded", function () {
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
});

// PERBAIKAN: Animasi saat scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav");
  if (nav) {
    if (window.scrollY > 100) {
      nav.classList.add("shadow-md");
    } else {
      nav.classList.remove("shadow-md");
    }
  }
});

// PERBAIKAN: Lazy loading untuk gambar (jika diperlukan)
function lazyLoadImages() {
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

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages);
