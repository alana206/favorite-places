document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        text: document.querySelector('.scroll-sticky-text'),
        hero: document.querySelector('.hero-section')
    };
    
    if (!elements.text || !elements.hero) return;
    
    const config = {
        originalOffset: elements.text.offsetTop,
        parallaxSpeed: 0.5
    };

    const applyParallax = (scrollPos) => {
        if (scrollPos < config.originalOffset) {
            const translateY = scrollPos * config.parallaxSpeed;
            elements.text.style.transform = `translateY(${translateY}px)`;
        }
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const heroBottom = elements.hero.offsetTop + elements.hero.offsetHeight;
        
        elements.text.classList.toggle('fixed', 
            scrollPosition > config.originalOffset && 
            scrollPosition < heroBottom
        );
        
        applyParallax(scrollPosition);
    };

    // Debounced scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
});