document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Scroll Animation for Quality Cards
    const qualityCards = document.querySelectorAll('.quality-card');
    const testimonials = document.querySelectorAll('.testimonial');
    const memeCards = document.querySelectorAll('.meme-card');
    
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    };
    
    // Function to add animation class when element is in viewport
    const animateOnScroll = () => {
        qualityCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        testimonials.forEach(testimonial => {
            if (isInViewport(testimonial)) {
                testimonial.style.opacity = '1';
                testimonial.style.transform = 'translateY(0)';
            }
        });
        
        memeCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles
    qualityCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    testimonials.forEach(testimonial => {
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateY(20px)';
        testimonial.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    memeCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // CTA Button Animation
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const qualitiesSection = document.querySelector('.qualities');
            qualitiesSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Easter Egg - Corban's face appears when clicking on certain text
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        let clickCount = 0;
        heroTitle.addEventListener('click', () => {
            clickCount++;
            if (clickCount >= 5) {
                alert('You found the secret! Corban is watching you right now... 👀');
                
                // Create floating Corban face
                const corbanFace = document.createElement('div');
                corbanFace.style.position = 'fixed';
                corbanFace.style.bottom = '20px';
                corbanFace.style.right = '20px';
                corbanFace.style.width = '100px';
                corbanFace.style.height = '100px';
                corbanFace.style.borderRadius = '50%';
                corbanFace.style.backgroundColor = '#ffcc99';
                corbanFace.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
                corbanFace.style.display = 'flex';
                corbanFace.style.justifyContent = 'center';
                corbanFace.style.alignItems = 'center';
                corbanFace.style.fontSize = '40px';
                corbanFace.style.cursor = 'pointer';
                corbanFace.style.zIndex = '1000';
                corbanFace.style.transition = 'all 0.3s ease';
                corbanFace.innerHTML = '😎';
                
                document.body.appendChild(corbanFace);
                
                // Make it follow cursor
                document.addEventListener('mousemove', (e) => {
                    setTimeout(() => {
                        corbanFace.style.bottom = `${Math.random() * 70 + 10}px`;
                        corbanFace.style.right = `${Math.random() * 70 + 10}px`;
                    }, 100);
                });
                
                corbanFace.addEventListener('click', () => {
                    corbanFace.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        corbanFace.style.transform = 'scale(1)';
                    }, 200);
                    
                    const phrases = [
                        "I'm watching you!",
                        "Corban approves!",
                        "You're doing great!",
                        "Keep clicking!",
                        "I'm majestic!"
                    ];
                    
                    alert(phrases[Math.floor(Math.random() * phrases.length)]);
                });
            }
        });
    }
});