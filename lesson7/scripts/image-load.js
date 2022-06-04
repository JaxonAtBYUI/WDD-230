// Get all the images
const images = document.querySelectorAll('img');
const options = {threshold: .5, rootMargin:"0px 0px 100px 0px"}

// Create a new observer
const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        })
    }, options
)

// Preload the image
function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source)  {
        return;
    }
    img.src = source;
}

// Check to see if the images are on screen.
images.forEach(image => {
    io.observe(image);
})
