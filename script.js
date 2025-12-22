// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler with mailto
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Get recipient email from form action attribute
        const formAction = this.getAttribute('action');
        const recipientEmail = formAction ? formAction.replace('mailto:', '') : 'beamlak.tareke@torontomu.ca';
        
        // Format the email subject and body
        const subject = encodeURIComponent(`New Lead from VICAD Website - ${name}`);
        let body = encodeURIComponent(`Name: ${name}\n`);
        body += encodeURIComponent(`Email: ${email}\n`);
        if (phone) {
            body += encodeURIComponent(`Phone: ${phone}\n`);
        }
        body += encodeURIComponent(`\nMessage:\n${message}`);
        
        // Create mailto link using the email from form action
        const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message after a short delay
        setTimeout(() => {
            alert('Thank you for your message! Your email client should open shortly.');
            contactForm.reset();
        }, 500);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (for future mobile menu implementation)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        // Add mobile menu functionality if needed
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu && !document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.cssText = `
                display: none;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--primary-color);
            `;
            
            // Insert before nav-menu
            navMenu.parentNode.insertBefore(menuToggle, navMenu);
        }
    }
};

// Initialize on load
window.addEventListener('load', () => {
    createMobileMenu();
});

// Re-check on resize
window.addEventListener('resize', () => {
    createMobileMenu();
});

