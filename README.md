# Fabiola D.V. - Portfolio de Arte

Un sitio web profesional para mostrar el trabajo artístico de Fabiola D.V., especializada en arte ambiental y comunitario.

## 🎨 Características

- **Diseño moderno y responsivo** - Funciona perfectamente en dispositivos móviles y de escritorio
- **Galería interactiva** - Sistema de filtrado por categorías con lightbox
- **Optimizado para rendimiento** - Carga rápida con imágenes optimizadas
- **Formulario de contacto** - Sistema de contacto profesional para consultas
- **Animaciones suaves** - Experiencia de usuario mejorada con transiciones elegantes
- **SEO optimizado** - Estructura preparada para motores de búsqueda

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica moderna
- **CSS3** - Diseño con CSS Grid, Flexbox y Custom Properties
- **JavaScript (ES6+)** - Interactividad y funcionalidad dinámica
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll
- **Google Fonts** - Tipografías profesionales (Inter + Playfair Display)

## 📁 Estructura del Proyecto

```
fabiola-art-portfolio/
├── index.html              # Página principal
├── gallery.html            # Galería de obras
├── about.html              # Sobre la artista
├── contact.html            # Página de contacto
├── videos.html             # Videos documentales
├── css/
│   └── main.css            # Estilos principales
├── js/
│   ├── main.js             # JavaScript principal
│   ├── gallery.js          # Funcionalidad de galería
│   └── contact.js          # Funcionalidad de contacto
├── images/                 # Imágenes organizadas por categoría
│   ├── environmental/      # Arte ambiental
│   ├── community/          # Arte comunitario
│   ├── portrait/           # Retratos
│   ├── abstract/           # Arte abstracto
│   ├── mixed_media/        # Técnica mixta
│   └── thumbnails/         # Miniaturas optimizadas
└── assets/                 # Recursos adicionales
```

## 🎯 Categorías de Arte

El portfolio está organizado en las siguientes categorías:

- **🌿 Ambiental** - Obras inspiradas en la naturaleza y conservación
- **👥 Comunitario** - Trabajos que surgen del diálogo con la comunidad
- **👤 Retratos** - Representaciones de personas y figuras
- **🎨 Abstracto** - Composiciones abstractas y experimentales
- **🖼️ Técnica Mixta** - Obras que combinan múltiples medios

## 📱 Características Responsivas

- **Mobile First** - Diseñado primero para dispositivos móviles
- **Breakpoints optimizados** - Adaptación fluida a diferentes tamaños de pantalla
- **Navegación táctil** - Interacciones optimizadas para touch
- **Imágenes responsivas** - Carga eficiente según el dispositivo

## 🔧 Configuración para GitHub Pages

### Opción 1: Configuración Automática
1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Elige "main" branch y "/ (root)"
5. El sitio estará disponible en `https://usuario.github.io/nombre-repositorio`

### Opción 2: GitHub Actions (Recomendado)
Incluye un workflow automatizado para despliegue:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📸 Organización de Imágenes

### Convención de Nomenclatura
```
fabiola_[categoria]_[numero]_[año].jpg

Ejemplos:
- fabiola_environmental_001_2024.jpg
- fabiola_community_002_2024.jpg
- fabiola_portrait_003_2023.jpg
```

### Script de Organización
Ejecuta el script incluido para organizar automáticamente las imágenes:

```bash
./organize-images.sh
```

### Optimización de Imágenes
Para mejor rendimiento, optimiza las imágenes:

```bash
# Crear miniaturas (requiere ImageMagick)
convert imagen.jpg -resize 400x300^ -gravity center -extent 400x300 thumbnail.jpg

# Comprimir para web
convert imagen.jpg -quality 85 -strip imagen_optimizada.jpg
```

## 🎨 Personalización

### Colores
Los colores se definen en CSS Custom Properties en `css/main.css`:

```css
:root {
  --color-primary: #2c5530;        /* Verde principal */
  --color-secondary: #8b956d;      /* Verde secundario */
  --color-accent: #d4af37;         /* Dorado para acentos */
}
```

### Tipografías
- **Display**: Playfair Display (para títulos)
- **Body**: Inter (para texto)

### Animaciones
Las animaciones se controlan con AOS (Animate On Scroll):

```html
<div data-aos="fade-up" data-aos-delay="100">
  <!-- Contenido -->
</div>
```

## 📊 Rendimiento

- **Lazy Loading** - Las imágenes se cargan según sean necesarias
- **CSS optimizado** - Uso eficiente de Custom Properties
- **JavaScript modular** - Carga condicional de funcionalidades
- **Minificación** - Archivos optimizados para producción

## 🔍 SEO

- **Meta tags** optimizados en cada página
- **Estructura semántica** con HTML5
- **Alt text** descriptivo para todas las imágenes
- **URLs amigables** y navegación clara
- **Schema markup** para mejor indexación

## 📞 Contacto y Soporte

Para consultas sobre el sitio web o modificaciones:

- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [tu-usuario-github]

## 📄 Licencia

Este proyecto está diseñado específicamente para el portfolio de Fabiola D.V. 
El código está disponible bajo licencia MIT para fines educativos.

---

**Desarrollado con ❤️ para mostrar el increíble trabajo artístico de Fabiola D.V.**