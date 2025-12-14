// Select the container where the cards will be inserted
const carouselTrack = document.querySelector(".carousel-track");

// Function to choose which courses should appear in the carousel
// (Later you may adjust the selection logic)
function getRecommendedCourses() {
    return courses.filter(course => course.recommended === true);
}

function createCourseCard(course) {
    const card = document.createElement("div");
    card.classList.add("course-card");

    const imgSrc = course.image || "assets/img/thumbnails/default-course.png";

    card.innerHTML = `
        <img src="${imgSrc}" alt="${course.title}">
        <h4>${course.title}</h4>
    `;

    // Make whole card clickable
    card.addEventListener("click", () => {
        window.location.href = `course-details.html?id=${course.id}`;
    });

    return card;
}



// Function to render the recommended courses into the carousel
function renderCarousel() {
    const recommended = getRecommendedCourses();

    recommended.forEach(course => {
        const card = createCourseCard(course);
        carouselTrack.appendChild(card);
    });
}

// Initialize the carousel on page load
renderCarousel();

// --- Carousel Sliding Feature ---

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Detect how far to scroll: width of 1 card + gap
function getScrollAmount() {
    const card = document.querySelector('.course-card');
    if (!card) return 200; // fallback
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.columnGap || style.gap || 16);
    return card.offsetWidth + gap;
}

nextBtn.addEventListener('click', () => {
    track.scrollBy({ 
        left: getScrollAmount(), 
        behavior: 'smooth' 
    });
});

prevBtn.addEventListener('click', () => {
    track.scrollBy({ 
        left: -getScrollAmount(), 
        behavior: 'smooth' 
    });
});

