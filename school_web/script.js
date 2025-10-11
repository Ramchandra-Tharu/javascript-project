document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Section Image Slider (UPDATED) ---
    const heroSection = document.querySelector('.hero-section');
    // 👇 New sports-themed images
    const images = [
        'https://source.unsplash.com/1920x1080/?school,basketball',
        'https://source.unsplash.com/1920x1080/?school,soccer',
        'https://source.unsplash.com/1920x1080/?school,running,track'
    ];
    let currentImageIndex = 0;

    // Set the initial image
    heroSection.style.backgroundImage = `url('${images[0]}')`;

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    }

    // 👇 This is set to 3000 milliseconds, which is exactly 3 seconds.
    setInterval(changeBackgroundImage, 3000);

    // --- Dynamic Stats Counter ---
    const counters = document.querySelectorAll('.counter');

    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 3000; // Animation duration in milliseconds
        let startTime = null;

        const animateCount = (currentTime) => {
            if (startTime === null) {
                startTime = currentTime;
            }

            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * target);

            counter.innerText = currentValue;

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                counter.innerText = target;
            }
        };

        requestAnimationFrame(animateCount);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                startCounter(counter);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });

});