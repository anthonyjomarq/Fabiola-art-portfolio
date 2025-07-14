// ================================
// GALLERY FUNCTIONALITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initLightbox();
    loadArtworkData();
});

// Load artwork data from external JSON
async function loadArtworkData() {
    try {
        const response = await fetch('data/artworks.json');
        artworkData = await response.json();
        loadGalleryItems();
    } catch (error) {
        console.error('Error loading artwork data:', error);
        // Fallback to empty array if JSON loading fails
        artworkData = [];
        loadGalleryItems();
    }
}

// Portfolio artwork data - loaded from external JSON
let artworkData = [];

let currentFilter = 'all';
let lightboxImages = [];
let currentLightboxIndex = 0;

// ================================
// GALLERY INITIALIZATION
// ================================
function initGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            filterGallery(filter);
        });
    });
}

// ================================
// GALLERY FILTERING
// ================================
function filterGallery(filter) {
    currentFilter = filter;
    const galleryGrid = document.getElementById('gallery-grid');
    
    // Add loading state
    galleryGrid.classList.add('loading');
    
    setTimeout(() => {
        loadGalleryItems();
        galleryGrid.classList.remove('loading');
    }, 300);
}

function loadGalleryItems() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;
    
    const filteredArtworks = currentFilter === 'all' 
        ? artworkData 
        : artworkData.filter(artwork => artwork.category === currentFilter);
    
    galleryGrid.innerHTML = '';
    
    filteredArtworks.forEach((artwork, index) => {
        const artworkElement = createArtworkElement(artwork, index);
        galleryGrid.appendChild(artworkElement);
    });
    
    // Update lightbox images array
    lightboxImages = filteredArtworks;
    
    // Reinitialize AOS for new elements
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function createArtworkElement(artwork, index) {
    const artworkDiv = document.createElement('div');
    artworkDiv.className = 'artwork-item';
    artworkDiv.setAttribute('data-aos', 'fade-up');
    artworkDiv.setAttribute('data-aos-delay', (index % 12) * 50); // Stagger animations in groups
    
    artworkDiv.innerHTML = `
        <div class="artwork-item__image" data-lightbox-index="${index}">
            <img src="${artwork.thumbnail}" alt="${artwork.title}" loading="lazy">
            <div class="artwork-item__overlay">
                <div class="artwork-item__info">
                    <h3 class="artwork-item__title">${artwork.title}</h3>
                    <p class="artwork-item__description">${artwork.description}</p>
                    <div class="artwork-item__meta">
                        <span class="artwork-item__year">${artwork.year}</span>
                        <span class="artwork-item__medium">${artwork.medium}</span>
                    </div>
                    <span class="artwork-item__price">${artwork.price}</span>
                </div>
                <button class="artwork-item__view" data-lightbox-index="${index}">
                    <span>Ver Detalles</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Add click event for lightbox
    const imageContainer = artworkDiv.querySelector('.artwork-item__image');
    const viewButton = artworkDiv.querySelector('.artwork-item__view');
    
    [imageContainer, viewButton].forEach(element => {
        element.addEventListener('click', function() {
            const lightboxIndex = this.getAttribute('data-lightbox-index');
            openLightbox(parseInt(lightboxIndex));
        });
    });
    
    return artworkDiv;
}

// ================================
// LIGHTBOX FUNCTIONALITY
// ================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');
    const overlay = lightbox.querySelector('.lightbox__overlay');
    
    // Close lightbox events
    [closeBtn, overlay].forEach(element => {
        element.addEventListener('click', closeLightbox);
    });
    
    // Navigation events
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('lightbox--open')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    });
}

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    
    updateLightboxContent();
    lightbox.classList.add('lightbox--open');
    document.body.classList.add('lightbox-open');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('lightbox--open');
    document.body.classList.remove('lightbox-open');
}

function showPrevImage() {
    currentLightboxIndex = currentLightboxIndex > 0 
        ? currentLightboxIndex - 1 
        : lightboxImages.length - 1;
    updateLightboxContent();
}

function showNextImage() {
    currentLightboxIndex = currentLightboxIndex < lightboxImages.length - 1 
        ? currentLightboxIndex + 1 
        : 0;
    updateLightboxContent();
}

function updateLightboxContent() {
    const artwork = lightboxImages[currentLightboxIndex];
    if (!artwork) return;
    
    const lightbox = document.getElementById('lightbox');
    const image = lightbox.querySelector('.lightbox__image');
    const title = lightbox.querySelector('.lightbox__title');
    const description = lightbox.querySelector('.lightbox__description');
    const year = lightbox.querySelector('.lightbox__year');
    const medium = lightbox.querySelector('.lightbox__medium');
    const price = lightbox.querySelector('.lightbox__price');
    
    // Update content
    image.src = artwork.image;
    image.alt = artwork.title;
    title.textContent = artwork.title;
    description.textContent = artwork.description;
    year.textContent = artwork.year;
    medium.textContent = artwork.medium;
    price.textContent = artwork.price;
    
    // Update navigation button states
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');
    
    prevBtn.style.opacity = lightboxImages.length > 1 ? '1' : '0.5';
    nextBtn.style.opacity = lightboxImages.length > 1 ? '1' : '0.5';
}

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Preload next and previous images for better UX
function preloadLightboxImages(currentIndex) {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : lightboxImages.length - 1;
    const nextIndex = currentIndex < lightboxImages.length - 1 ? currentIndex + 1 : 0;
    
    [prevIndex, nextIndex].forEach(index => {
        const img = new Image();
        img.src = lightboxImages[index].image;
    });
}

// Intersection Observer for progressive image loading
function initProgressiveImageLoading() {
    const images = document.querySelectorAll('.artwork-item img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Replace thumbnail with high-res image
                    const highResSource = img.src.replace('/thumbnails/', '/');
                    
                    const highResImg = new Image();
                    highResImg.onload = function() {
                        img.src = highResSource;
                        img.classList.add('loaded');
                    };
                    highResImg.src = highResSource;
                    
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}