# Content Management Guide

This guide shows you how to easily add and update content on your portfolio website.

## 📸 Adding New Artwork to Gallery

1. **Add your image file** to the `images/Portfolio pics/cuadro/` folder
2. **Open** `gallery.html` 
3. **Find** the gallery grid section (around line 50)
4. **Add** a new artwork card:

```html
<article class="artwork-card" data-aos="fade-up">
    <div class="artwork-card__image">
        <img src="images/Portfolio pics/cuadro/your-new-image.jpg" alt="Description of your artwork" loading="lazy">
    </div>
</article>
```

## 🏠 Updating Featured Artworks on Home Page

1. **Open** `index.html`
2. **Find** the featured section (around line 68)
3. **Replace** the image paths in the existing artwork cards:

```html
<img src="images/Portfolio pics/cuadro/your-featured-image.jpg" alt="Your artwork description" loading="lazy">
```

## 📖 Adding New Research Projects

1. **Create a folder** for your project in `images/Investigaciones/`
2. **Add your images** to that folder
3. **Open** `investigaciones.html`
4. **Add** a new investigation item (copy the pattern from existing ones):

```html
<article class="investigation__item" data-aos="fade-up">
    <div class="investigation__image">
        <img src="images/Portfolio pics/cuadro/your-cover-image.jpg" alt="Project name" loading="lazy">
    </div>
    <div class="investigation__content">
        <h3 class="investigation__title">Your Project Title</h3>
        <p class="investigation__description">
            Brief description of your project...
        </p>
        <div class="investigation__details">
            <span class="investigation__tag">Tag 1</span>
            <span class="investigation__tag">Tag 2</span>
        </div>
        <button class="investigation__expand btn btn--outline" data-target="your-project-id">Ver más</button>
    </div>
    <div class="investigation__expanded" id="your-project-id" style="display: none;">
        <div class="investigation__expanded-content">
            <h4>Full Project Title</h4>
            <p>Detailed description...</p>
            <div class="investigation__gallery">
                <div class="gallery__grid">
                    <div class="image-container loading">
                        <img src="images/Investigaciones/your-folder/image1.jpg" alt="Description" loading="lazy">
                    </div>
                    <!-- Add more images as needed -->
                </div>
            </div>
        </div>
    </div>
</article>
```

## ✏️ Updating Personal Information

### About Page (`about.html`)
- **Line 96**: Update your bio description
- **Line 103**: Replace profile image path
- **Line 118-122**: Update your projects list
- **Line 129**: Update recognition/awards

### Contact Page (`contact.html`)
- **Line 105**: Update email address
- **Line 109**: Update location
- **Line 114-116**: Update social media links

## 🎨 Changing Colors

All colors are defined in `css/modern-portfolio.css` at the top:

```css
:root {
  --color-accent: #FF6B35;        /* Orange accent color */
  --color-tertiary: #4ECDC4;      /* Teal color */
  --color-secondary: #F7931E;     /* Secondary orange */
}
```

## 📝 Quick Tips

1. **Always backup** your files before making changes
2. **Test on mobile** after making changes
3. **Keep image sizes consistent** (recommended: 1200px width for gallery images)
4. **Use descriptive alt text** for all images
5. **Compress images** before uploading to keep site fast

## 🔧 File Structure

```
your-portfolio/
├── index.html              # Home page
├── gallery.html            # Gallery page
├── about.html              # About page
├── investigaciones.html    # Research page
├── contact.html            # Contact page
├── css/
│   └── modern-portfolio.css # All styles
├── images/
│   ├── Portfolio pics/
│   │   └── cuadro/         # Gallery images go here
│   ├── Investigaciones/    # Research project images
│   └── branding/           # Logo and branding
└── js/                     # JavaScript files
```

## 🚀 Publishing Changes

After making changes:
1. Save all files
2. Commit to your GitHub repository
3. Changes will automatically appear on your live site

Need help? Email the developer or check the comments in the HTML files for guidance!