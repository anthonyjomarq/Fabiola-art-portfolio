// Website Configuration
// Edit these values to update your site content easily

const SITE_CONFIG = {
    // Personal Information
    name: "Fabiola E. Báez Flores",
    title: "Artista Visual",
    email: "Fabiesteisy@gmail.com",
    location: "Puerto Rico",
    
    // Bio (used in about page)
    bio: "Artista visual, gestora cultural e investigadora interdisciplinaria puertorriqueña que fusiona las Bellas Artes con las Humanidades Médicas, la Ecología y la Ciencia.",
    
    // Social Media Links
    social: {
        facebook: "https://www.facebook.com/fabiesteisy/",
        instagram: "https://www.instagram.com/fabiesteisy_art"
    },
    
    // Featured Artworks (home page)
    featuredArtworks: [
        {
            src: "images/Portfolio pics/cuadro/cuadro5.jpg",
            alt: "Pintura original sobre lienzo"
        },
        {
            src: "images/Portfolio pics/cuadro/cuadro3.jpg", 
            alt: "Cuadro III - Obra original"
        },
        {
            src: "images/Portfolio pics/cuadro/cuadro7.jpg",
            alt: "Cuadro VII - Obra original"
        }
    ],
    
    // Gallery Images (add new images here)
    galleryImages: [
        "images/Portfolio pics/cuadro/cuadro1.jpg",
        "images/Portfolio pics/cuadro/cuadro2.jpg",
        "images/Portfolio pics/cuadro/cuadro3.jpg",
        "images/Portfolio pics/cuadro/cuadro4.jpg",
        "images/Portfolio pics/cuadro/cuadro5.jpg",
        "images/Portfolio pics/cuadro/cuadro6.jpg",
        "images/Portfolio pics/cuadro/cuadro7.jpg",
        "images/Portfolio pics/cuadro/cuadro8.jpg",
        "images/Portfolio pics/cuadro/cuadro9.jpg",
        "images/Portfolio pics/cuadro/cuadro10.jpg",
        "images/Portfolio pics/cuadro/cuadro11.jpg",
        "images/Portfolio pics/cuadro/cuadro12.jpg",
        "images/Portfolio pics/cuadro/cuadro13.jpg",
        "images/Portfolio pics/cuadro/cuadro14.jpg",
        "images/Portfolio pics/cuadro/cuadro15.jpg",
        "images/Portfolio pics/cuadro/cuadro16.jpg",
        "images/Portfolio pics/cuadro/cuadro17.jpg",
        "images/Portfolio pics/cuadro/cuadro18.jpg",
        "images/Portfolio pics/cuadro/cuadro19.jpg",
        "images/Portfolio pics/cuadro/cuadro20.jpg",
        "images/Portfolio pics/cuadro/cuadro21.jpg",
        "images/Portfolio pics/cuadro/cuadro22.jpg",
        "images/Portfolio pics/cuadro/cuadro23.jpg",
        "images/Portfolio pics/cuadro/cuadro24.jpg",
        "images/Portfolio pics/cuadro/cuadro25.jpg",
        "images/Portfolio pics/cuadro/cuadro26.jpg",
        "images/Portfolio pics/cuadro/cuadro27.jpg",
        "images/Portfolio pics/cuadro/cuadro28.jpg",
        "images/Portfolio pics/cuadro/cuadro29.jpg",
        "images/Portfolio pics/cuadro/cuadro30.jpg",
        "images/Portfolio pics/cuadro/cuadro31.jpg",
        "images/Portfolio pics/cuadro/cuadro32.jpg",
        "images/Portfolio pics/cuadro/cuadro33.jpg",
        "images/Portfolio pics/cuadro/cuadro34.jpg",
        "images/Portfolio pics/cuadro/cuadro35.jpg",
        "images/Portfolio pics/cuadro/cuadro36.jpg",
        "images/Portfolio pics/cuadro/cuadro37.jpg",
        "images/Portfolio pics/cuadro/cuadro38.jpg",
        "images/Portfolio pics/cuadro/cuadro39.jpg",
        "images/Portfolio pics/cuadro/cuadro40.jpg",
        "images/Portfolio pics/cuadro/cuadro41.jpg",
        "images/Portfolio pics/cuadro/cuadro42.jpg",
        "images/Portfolio pics/cuadro/cuadro43.jpg",
        "images/Portfolio pics/cuadro/cuadro44.jpg",
        "images/Portfolio pics/cuadro/cuadro45.jpg",
        "images/Portfolio pics/cuadro/cuadro46.jpg",
        "images/Portfolio pics/cuadro/cuadro47.jpg",
        "images/Portfolio pics/cuadro/cuadro48.jpg",
        "images/Portfolio pics/cuadro/cuadro49.jpg"
    ]
};

// Function to update gallery dynamically (if needed)
function updateGallery() {
    const gallery = document.querySelector('.simple-gallery-grid');
    if (gallery && SITE_CONFIG.galleryImages) {
        gallery.innerHTML = '';
        SITE_CONFIG.galleryImages.forEach((imagePath, index) => {
            const article = document.createElement('article');
            article.className = 'artwork-card';
            article.setAttribute('data-aos', 'fade-up');
            
            const imageDiv = document.createElement('div');
            imageDiv.className = 'artwork-card__image';
            
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = `Obra de arte ${index + 1}`;
            img.loading = 'lazy';
            
            imageDiv.appendChild(img);
            article.appendChild(imageDiv);
            gallery.appendChild(article);
        });
    }
}

// Auto-update social links
function updateSocialLinks() {
    const fbLink = document.querySelector('a[href*="facebook"]');
    const igLink = document.querySelector('a[href*="instagram"]');
    
    if (fbLink) fbLink.href = SITE_CONFIG.social.facebook;
    if (igLink) igLink.href = SITE_CONFIG.social.instagram;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateSocialLinks();
    // updateGallery(); // Uncomment if you want to use dynamic gallery
});