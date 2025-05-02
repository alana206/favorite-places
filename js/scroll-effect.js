document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.scroll-sticky-text');
    const heroSection = document.querySelector('.hero-section');
    const originalOffset = textElement.offsetTop;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
        if (scrollPosition > originalOffset && scrollPosition < heroBottom) {
            textElement.classList.add('fixed');
        } else {
            textElement.classList.remove('fixed');
        }
        
        // Parallax effect while scrolling before becoming fixed
        if (scrollPosition < originalOffset) {
            const translateY = scrollPosition * 0.5; // Adjust speed by changing multiplier
            textElement.style.transform = `translateY(${translateY}px)`;
        }
    });
});