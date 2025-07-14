// ================================
// CONTACT FORM FUNCTIONALITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFormAnimations();
});

// ================================
// FORM INITIALIZATION
// ================================
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // Initialize form validation
    initFormValidation(form);
    
    // Initialize form submission
    form.addEventListener('submit', handleFormSubmission);
    
    // Initialize character counter for textarea
    initCharacterCounter();
    
    // Initialize form field animations
    initFieldFocusEffects();
}

// ================================
// FORM VALIDATION
// ================================
function initFormValidation(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
        // Real-time validation on blur
        field.addEventListener('blur', () => validateField(field));
        
        // Clear errors on input
        field.addEventListener('input', () => clearFieldError(field));
        
        // Special handling for email field
        if (field.type === 'email') {
            field.addEventListener('input', debounce(() => {
                if (field.value) validateEmail(field);
            }, 500));
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    
    // Clear previous errors
    clearFieldError(field);
    
    // Check if required field is empty
    if (isRequired && !value) {
        showFieldError(field, 'Este campo es requerido');
        return false;
    }
    
    // Validate specific field types
    switch (field.type) {
        case 'email':
            return validateEmail(field);
        case 'tel':
            return validatePhone(field);
        default:
            if (field.tagName === 'TEXTAREA') {
                return validateTextarea(field);
            }
            return validateText(field);
    }
}

function validateEmail(field) {
    const value = field.value.trim();
    if (!value) return true; // Empty is OK if not required
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showFieldError(field, 'Por favor ingresa un email válido');
        return false;
    }
    
    return true;
}

function validatePhone(field) {
    const value = field.value.trim();
    if (!value) return true; // Phone is optional
    
    // Basic phone validation (accepts various formats)
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    
    if (!phoneRegex.test(value)) {
        showFieldError(field, 'Por favor ingresa un teléfono válido');
        return false;
    }
    
    return true;
}

function validateText(field) {
    const value = field.value.trim();
    const minLength = field.getAttribute('minlength');
    
    if (minLength && value.length < parseInt(minLength)) {
        showFieldError(field, `Mínimo ${minLength} caracteres requeridos`);
        return false;
    }
    
    return true;
}

function validateTextarea(field) {
    const value = field.value.trim();
    const minLength = 10; // Minimum message length
    
    if (field.hasAttribute('required') && value.length < minLength) {
        showFieldError(field, `Por favor escribe al menos ${minLength} caracteres`);
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('field--error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field__error';
    errorElement.textContent = message;
    
    const formGroup = field.closest('.form__group');
    formGroup.appendChild(errorElement);
    
    // Animate error appearance
    requestAnimationFrame(() => {
        errorElement.classList.add('field__error--visible');
    });
}

function clearFieldError(field) {
    field.classList.remove('field--error');
    
    const formGroup = field.closest('.form__group');
    const errorElement = formGroup.querySelector('.field__error');
    
    if (errorElement) {
        errorElement.remove();
    }
}

// ================================
// FORM SUBMISSION
// ================================
function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('.form__submit');
    
    // Validate entire form
    if (!validateForm(form)) {
        showFormError('Por favor corrige los errores antes de enviar');
        return;
    }
    
    // Show loading state
    showLoadingState(submitButton);
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        // In a real application, you would send the data to your server here
        // For this demo, we'll just show a success message
        
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData);
        
        console.log('Form data:', formObject);
        
        showSuccessMessage(form);
        resetForm(form);
        hideLoadingState(submitButton);
        
    }, 2000); // Simulate network delay
}

function validateForm(form) {
    const fields = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function showLoadingState(button) {
    button.disabled = true;
    button.innerHTML = `
        <span class="loading-spinner"></span>
        Enviando...
    `;
    button.classList.add('btn--loading');
}

function hideLoadingState(button) {
    button.disabled = false;
    button.innerHTML = 'Enviar Mensaje';
    button.classList.remove('btn--loading');
}

function showSuccessMessage(form) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form__success';
    successDiv.innerHTML = `
        <div class="success__icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
        </div>
        <h3>¡Mensaje enviado exitosamente!</h3>
        <p>Gracias por contactarme. Te responderé dentro de 48 horas.</p>
        <p class="success__note">Revisa tu bandeja de entrada para la confirmación.</p>
    `;
    
    form.style.display = 'none';
    form.parentNode.insertBefore(successDiv, form);
    
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-hide success message after 10 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        setTimeout(() => {
            successDiv.remove();
            form.style.display = 'block';
        }, 500);
    }, 10000);
}

function showFormError(message) {
    const existingError = document.querySelector('.form__error');
    if (existingError) existingError.remove();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form__error';
    errorDiv.innerHTML = `
        <div class="error__icon">⚠️</div>
        <span>${message}</span>
    `;
    
    const form = document.getElementById('contact-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

function resetForm(form) {
    form.reset();
    
    // Clear all errors
    const errorElements = form.querySelectorAll('.field__error');
    errorElements.forEach(error => error.remove());
    
    const errorFields = form.querySelectorAll('.field--error');
    errorFields.forEach(field => field.classList.remove('field--error'));
}

// ================================
// FORM ANIMATIONS & UX ENHANCEMENTS
// ================================
function initFormAnimations() {
    const formGroups = document.querySelectorAll('.form__group');
    
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 100}ms`;
        group.classList.add('form__group--animate');
    });
}

function initFieldFocusEffects() {
    const fields = document.querySelectorAll('.form__input, .form__textarea, .form__select');
    
    fields.forEach(field => {
        field.addEventListener('focus', function() {
            this.closest('.form__group').classList.add('form__group--focused');
        });
        
        field.addEventListener('blur', function() {
            this.closest('.form__group').classList.remove('form__group--focused');
            
            if (this.value) {
                this.closest('.form__group').classList.add('form__group--filled');
            } else {
                this.closest('.form__group').classList.remove('form__group--filled');
            }
        });
        
        // Check initial state
        if (field.value) {
            field.closest('.form__group').classList.add('form__group--filled');
        }
    });
}

function initCharacterCounter() {
    const textarea = document.getElementById('message');
    if (!textarea) return;
    
    const maxLength = 1000;
    const counter = document.createElement('div');
    counter.className = 'character-counter';
    
    textarea.setAttribute('maxlength', maxLength);
    textarea.parentNode.appendChild(counter);
    
    function updateCounter() {
        const current = textarea.value.length;
        const remaining = maxLength - current;
        
        counter.textContent = `${current}/${maxLength}`;
        
        if (remaining < 50) {
            counter.classList.add('character-counter--warning');
        } else {
            counter.classList.remove('character-counter--warning');
        }
    }
    
    textarea.addEventListener('input', updateCounter);
    updateCounter(); // Initial count
}

// ================================
// UTILITY FUNCTIONS
// ================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================
function initAccessibilityFeatures() {
    // Add ARIA labels for better screen reader support
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // Announce form errors to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'form-announcer';
    
    document.body.appendChild(announcer);
    
    // Enhanced keyboard navigation
    const formElements = form.querySelectorAll('input, textarea, select, button');
    
    formElements.forEach((element, index) => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && this.tagName !== 'TEXTAREA') {
                e.preventDefault();
                const nextElement = formElements[index + 1];
                if (nextElement) {
                    nextElement.focus();
                }
            }
        });
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibilityFeatures);