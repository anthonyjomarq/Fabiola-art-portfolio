// ================================
// GALLERY FUNCTIONALITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initLightbox();
    loadGalleryItems();
});

// Portfolio artwork data - All Paintings (Cuadros)
const artworkData = [
    {
        id: 1,
        title: "Cuadro I",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro.jpg"
    },
    {
        id: 2,
        title: "Cuadro II",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro2.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro2.jpg"
    },
    {
        id: 3,
        title: "Cuadro III",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro3.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro3.jpg"
    },
    {
        id: 4,
        title: "Cuadro IV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro4.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro4.jpg"
    },
    {
        id: 5,
        title: "Cuadro V",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro5.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro5.jpg"
    },
    {
        id: 6,
        title: "Cuadro VI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro6.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro6.jpg"
    },
    {
        id: 7,
        title: "Cuadro VII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro7.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro7.jpg"
    },
    {
        id: 8,
        title: "Cuadro VIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro8.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro8.jpg"
    },
    {
        id: 9,
        title: "Cuadro IX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro9.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro9.jpg"
    },
    {
        id: 10,
        title: "Cuadro X",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro10.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro10.jpg"
    },
    {
        id: 11,
        title: "Cuadro XI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro11.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro11.jpg"
    },
    {
        id: 12,
        title: "Cuadro XII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro12.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro12.jpg"
    },
    {
        id: 13,
        title: "Cuadro XIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro13.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro13.jpg"
    },
    {
        id: 14,
        title: "Cuadro XIV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro14.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro14.jpg"
    },
    {
        id: 15,
        title: "Cuadro XV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro15.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro15.jpg"
    },
    {
        id: 16,
        title: "Cuadro XVI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro16.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro16.jpg"
    },
    {
        id: 17,
        title: "Cuadro XVII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro17.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro17.jpg"
    },
    {
        id: 18,
        title: "Cuadro XVIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro18.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro18.jpg"
    },
    {
        id: 19,
        title: "Cuadro XIX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro19.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro19.jpg"
    },
    {
        id: 20,
        title: "Cuadro XX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro20.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro20.jpg"
    },
    {
        id: 21,
        title: "Cuadro XXI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro21.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro21.jpg"
    },
    {
        id: 22,
        title: "Cuadro XXII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro22.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro22.jpg"
    },
    {
        id: 23,
        title: "Cuadro XXIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro23.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro23.jpg"
    },
    {
        id: 24,
        title: "Cuadro XXIV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro24.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro24.jpg"
    },
    {
        id: 25,
        title: "Cuadro XXV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro25.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro25.jpg"
    },
    {
        id: 26,
        title: "Cuadro XXVI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro26.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro26.jpg"
    },
    {
        id: 27,
        title: "Cuadro XXVII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro27.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro27.jpg"
    },
    {
        id: 28,
        title: "Cuadro XXVIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro28.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro28.jpg"
    },
    {
        id: 29,
        title: "Cuadro XXIX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro29.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro29.jpg"
    },
    {
        id: 30,
        title: "Cuadro XXX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro30.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro30.jpg"
    },
    {
        id: 31,
        title: "Cuadro XXXI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro31.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro31.jpg"
    },
    {
        id: 32,
        title: "Cuadro XXXII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro32.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro32.jpg"
    },
    {
        id: 33,
        title: "Cuadro XXXIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro33.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro33.jpg"
    },
    {
        id: 34,
        title: "Cuadro XXXIV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro34.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro34.jpg"
    },
    {
        id: 35,
        title: "Cuadro XXXV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro35.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro35.jpg"
    },
    {
        id: 36,
        title: "Cuadro XXXVI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro36.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro36.jpg"
    },
    {
        id: 37,
        title: "Cuadro XXXVII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro37.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro37.jpg"
    },
    {
        id: 38,
        title: "Cuadro XXXVIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro38.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro38.jpg"
    },
    {
        id: 39,
        title: "Cuadro XXXIX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro39.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro39.jpg"
    },
    {
        id: 40,
        title: "Cuadro XL",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro40.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro40.jpg"
    },
    {
        id: 41,
        title: "Cuadro XLI",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro41.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro41.jpg"
    },
    {
        id: 42,
        title: "Cuadro XLII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro42.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro42.jpg"
    },
    {
        id: 43,
        title: "Cuadro XLIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro43.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro43.jpg"
    },
    {
        id: 44,
        title: "Cuadro XLIV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro44.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro44.jpg"
    },
    {
        id: 45,
        title: "Cuadro XLV",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro45.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro45.jpg"
    },
    {
        id: 46,
        title: "Cuadro XLVII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro47.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro47.jpg"
    },
    {
        id: 47,
        title: "Cuadro XLVIII",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro48.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro48.jpg"
    },
    {
        id: 48,
        title: "Cuadro XLIX",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro49.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro49.jpg"
    },
    {
        id: 49,
        title: "Cuadro L",
        description: "Obra original sobre lienzo",
        category: "pintura",
        year: "2024",
        medium: "Óleo sobre lienzo",
        price: "Consultar precio",
        image: "images/Portfolio pics/cuadro/cuadro50.jpg",
        thumbnail: "images/Portfolio pics/cuadro/cuadro50.jpg"
    }
];

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