const sections = document.querySelectorAll('section:not(#top)');
const navLinks = document.querySelectorAll('a.nav-link');

let intersectionRatios = {};
sections.forEach(section => {
    intersectionRatios[section.id] = 0;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100), // [0, 0.01, 0.02, ..., 1]
    rootMargin: '0px -100px -100px 0px'
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
        }

        intersectionRatios[entry.target.id] = entry.intersectionRatio;
    });

    const mostIntersectingSectionId = Object.keys(intersectionRatios).sort((a, b) => intersectionRatios[b] - intersectionRatios[a])[0];

    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${mostIntersectingSectionId}` && intersectionRatios[mostIntersectingSectionId] > 0.01) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })

}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

