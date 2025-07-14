// ================================
// INVESTIGATIONS PAGE FUNCTIONALITY
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initInvestigations();
});

function initInvestigations() {
    const expandButtons = document.querySelectorAll('.investigation__expand');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const expandedSection = document.getElementById(targetId);
            const isExpanded = expandedSection.style.display !== 'none';
            
            if (isExpanded) {
                // Collapse
                expandedSection.style.display = 'none';
                this.textContent = 'Ver más';
                this.classList.remove('btn--primary');
                this.classList.add('btn--outline');
            } else {
                // Expand
                expandedSection.style.display = 'block';
                this.textContent = 'Ver menos';
                this.classList.remove('btn--outline');
                this.classList.add('btn--primary');
                
                // Smooth scroll to expanded content
                setTimeout(() => {
                    expandedSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            }
        });
    });
}

// Initialize AOS animations if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
}