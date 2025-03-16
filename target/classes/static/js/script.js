// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
    
    // Toggle menu button appearance
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const spans = menuBtn.getElementsByTagName('span');
    
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Team Card Expand/Collapse
function toggleCardExpand(card) {
    const isExpanded = card.classList.contains('expanded');
    
    // Close all expanded cards first
    document.querySelectorAll('.team-card').forEach(otherCard => {
        otherCard.classList.remove('expanded');
    });
    
    // Toggle the clicked card
    if (!isExpanded) {
        card.classList.add('expanded');
    }
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            alert('Thank you for your message. We\'ll get back to you soon!');
            
            // Reset form
            contactForm.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        });
    }
    
    // Update copyright year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});