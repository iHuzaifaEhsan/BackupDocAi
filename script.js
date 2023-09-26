// Function to add the 'animate' class when an element enters the viewport
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Adjust this threshold as needed
});

// Add elements you want to animate to the observer
const elementsToAnimate = document.querySelectorAll('.animate-fade-in');
elementsToAnimate.forEach((element) => {
    observer.observe(element);
});