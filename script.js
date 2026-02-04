// ============================
// Hero Background Slideshow
// ============================
const heroBackgrounds = [
    "url('assets/images/hero/hero1.jpg')",
    "url('assets/images/hero/hero2.jpg')",
    "url('assets/images/hero/hero3.jpg')",
    "url('assets/images/hero/hero4.jpg')",
    "url('assets/images/hero/hero5.jpg')"
];

let currentSlide = 0;
const heroBg = document.getElementById('heroBg');

function initHeroSlideshow() {
    // Create slide elements
    heroBackgrounds.forEach((bg, index) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide';
        slide.style.background = bg;
        if (index === 0) {
            slide.classList.add('active');
        }
        heroBg.appendChild(slide);
    });
    
    // Start slideshow
    setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroBackgrounds.length;
        slides[currentSlide].classList.add('active');
    }, 3000);
}

// ============================
// Mobile Menu Toggle
// ============================
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav && mobileMenuBtn && !mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// ============================
// Menu Image Modal (PERBAIKAN)
// ============================
function openImageModal(imageSrc, itemName) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('menuModalImage');
    const caption = document.getElementById('modalCaption');
    
    if (!modal || !modalImg || !caption) {
        console.error('Menu modal elements not found!');
        return;
    }
    
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    modalImg.alt = itemName;
    caption.textContent = itemName;
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Menu modal opened:', imageSrc);
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('✅ Menu modal closed');
    }
}

// ============================
// Menu Data & Tabs
// ============================
const menuData = {
    coffee: [
        { name: 'Cappuccino', price: 'Rp 35.000', description: 'Espresso dengan susu steamed dan foam yang creamy', popular: true, image: 'assets/images/menu/cappuccino.jpg' },
        { name: 'Americano', price: 'Rp 28.000', description: 'Espresso dengan air panas yang nikmat', popular: false, image: 'assets/images/menu/americano.jpg' },
        { name: 'Espresso', price: 'Rp 25.000', description: 'Kopi murni yang kuat dan rich', popular: false, image: 'assets/images/menu/espresso.jpg' },
        { name: 'Mocha', price: 'Rp 40.000', description: 'Cokelat belgia dengan espresso dan susu', popular: true, image: 'assets/images/menu/mocha.jpg' },
        { name: 'Macchiato', price: 'Rp 32.000', description: 'Espresso dengan sedikit foam susu', popular: false, image: 'assets/images/menu/macchiato.jpg' },
    ],
    noncoffee: [
        { name: 'Matcha Latte', price: 'Rp 42.000', description: 'Matcha premium dari Jepang dengan susu creamy', popular: true, image: 'assets/images/menu/matcha_latte.jpg' },
        { name: 'Chocolate Milk', price: 'Rp 35.000', description: 'Cokelat hangat dengan marshmallow', popular: false, image: 'assets/images/menu/chocolate_milk.jpg' },
        { name: 'Thai Tea', price: 'Rp 32.000', description: 'Teh Thailand otentik yang creamy', popular: true, image: 'assets/images/menu/thai_tea.jpg' },
        { name: 'Lemon Tea', price: 'Rp 28.000', description: 'Teh segar dengan lemon asli', popular: false, image: 'assets/images/menu/lemon_tea.jpg' },
        { name: 'Orange Juice', price: 'Rp 35.000', description: 'Jus jeruk segar dari buah asli', popular: false, image: 'assets/images/menu/orange_juice.jpg' },
        { name: 'Avocado Juice', price: 'Rp 40.000', description: 'Jus alpukat dengan susu cokelat', popular: true, image: 'assets/images/menu/avocado_juice.jpg' },
    ],
    snacks: [
        { name: 'Croissant', price: 'Rp 25.000', description: 'French pastry yang renyah dan buttery', popular: true, image: 'assets/images/menu/croissant.jpg' },
        { name: 'Cheesecake', price: 'Rp 45.000', description: 'Cheesecake New York yang creamy', popular: true, image: 'assets/images/menu/cheesecake.jpg' },
        { name: 'Brownies', price: 'Rp 30.000', description: 'Brownies cokelat yang lembut dan fudgy', popular: false, image: 'assets/images/menu/brownies.jpg' },
        { name: 'Sandwich', price: 'Rp 40.000', description: 'Club sandwich dengan isian lengkap', popular: false, image: 'assets/images/menu/sandwich.jpg' },
        { name: 'French Fries', price: 'Rp 28.000', description: 'Kentang goreng crispy dengan bumbu spesial', popular: false, image: 'assets/images/menu/french_fries.jpg' },
        { name: 'Donut', price: 'Rp 22.000', description: 'Donut lembut dengan topping berbagai rasa', popular: false, image: 'assets/images/menu/donut.jpg' },
    ]
};

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    
    card.innerHTML = `
        <div class="menu-card-image-wrapper">
            <img src="${item.image}" 
                 alt="${item.name}" 
                 class="menu-card-image" 
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/400x300/27272a/d97706?text=${encodeURIComponent(item.name)}'">
        </div>
        <div class="menu-card-header">
            <div class="menu-card-title-wrapper">
                <h3 class="menu-card-title">${item.name}</h3>
                ${item.popular ? '<span class="popular-badge"><i class="fas fa-star"></i> Popular</span>' : ''}
            </div>
        </div>
        <p class="menu-card-description">${item.description}</p>
        <div class="menu-card-footer">
            <div class="menu-card-price">${item.price}</div>
            <a href="https://wa.me/6281234567890?text=Halo, saya mau pesan ${encodeURIComponent(item.name)}" 
               target="_blank" 
               class="btn btn-whatsapp menu-card-order">
                <i class="fab fa-whatsapp"></i>
                Pesan
            </a>
        </div>
    `;
    
    // Event listener untuk preview
    const img = card.querySelector('.menu-card-image');
    img.addEventListener('click', function() {
        openImageModal(item.image, item.name);
    });
    
    return card;
}

function renderMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    const items = menuData[category];
    items.forEach((item, index) => {
        const card = createMenuCard(item);
        card.style.animationDelay = `${index * 0.1}s`;
        menuGrid.appendChild(card);
    });
}

function switchMenuTab(tabName) {
    // Update tab active state
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        }
    });
    
    // Render menu items
    renderMenu(tabName);
}

// ============================
// Gallery Modal (PERBAIKAN)
// ============================
const galleryImages = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200',
    'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=1200',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200'
];

function openGalleryImage(index) {
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('galleryModalImage');
    
    if (!modal || !modalImage) {
        console.error('Gallery modal elements not found!');
        return;
    }
    
    modalImage.src = galleryImages[index];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Gallery modal opened');
}

function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('✅ Gallery modal closed');
    }
}

// ============================
// Smooth Scroll for Navigation Links
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================
// Scroll-based Animations
// ============================
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.feature-card, .menu-card, .gallery-item, .contact-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ============================
// Header Background on Scroll
// ============================
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(9, 9, 11, 0.98)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.background = 'rgba(9, 9, 11, 0.9)';
            header.style.boxShadow = 'none';
        }
    }
}

// ============================
// Initialize Everything
// ============================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize hero slideshow
    initHeroSlideshow();
    
    // Initialize menu
    renderMenu('coffee');
    
    // Event listener untuk close modal dengan ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeImageModal();
            closeGalleryModal();
        }
    });
    
    // Event listener untuk close menu modal dengan click background
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }
    
    // Add scroll event listeners
    window.addEventListener('scroll', throttle(handleScrollAnimations, 100));
    window.addEventListener('scroll', throttle(handleHeaderScroll, 100));
    
    // Initial check for scroll animations
    handleScrollAnimations();
    
    // Log that everything is loaded
    console.log('🚀 Parewa Coffee Website Loaded Successfully!');
    console.log('✓ Hero slideshow initialized');
    console.log('✓ Menu tabs loaded');
    console.log('✓ Gallery modal ready');
    console.log('✓ Scroll animations enabled');
    console.log('✓ Image modal ready');
});

// ============================
// Utility Functions
// ============================

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}