/* ===================================== */
/* CAROUSEL CORE LOGIC */
/* ===================================== */

function createCourseCard(course) {
    const card = document.createElement("a");
    card.classList.add("course-card");
    card.href = `course-details.html?id=${course.id}`;

    const imgSrc = course.image || "assets/img/thumbnails/default-course.png";

    card.innerHTML = `
        <img src="${imgSrc}" alt="${course.title}">
        <h4>${course.title}</h4>
    `;

    return card;
}

/* ===================================== */
/* INITIALIZE A CAROUSEL INSTANCE */
/* ===================================== */

window.initCarousel = function initCarousel(carouselElement, coursesToRender) {
    const track = carouselElement.querySelector(".carousel-track");
    const prevBtn = carouselElement.querySelector(".carousel-btn.prev");
    const nextBtn = carouselElement.querySelector(".carousel-btn.next");

    if (!track || !prevBtn || !nextBtn) return;

    // Render cards
    coursesToRender.forEach(course => {
        track.appendChild(createCourseCard(course));
    });

    // Scroll amount = card width + gap
    function getScrollAmount() {
        const card = track.querySelector(".course-card");
        if (!card) return 200;

        const style = window.getComputedStyle(track);
        const gap = parseInt(style.gap || 16);
        return card.offsetWidth + gap;
    }

    nextBtn.addEventListener("click", () => {
        track.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    });
}
