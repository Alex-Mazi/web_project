/* ===================================== */
/* CAROUSEL CORE LOGIC */
/* ===================================== */

function createCourseCard(course) {
    const card = document.createElement("a");
    card.classList.add("course-card", "course");
    card.href = `course-details.html?id=${course.id}`;

    const imgSrc = course.image || "assets/img/thumbnails/default-course.png";

    card.innerHTML = `
        <img src="${imgSrc}" alt="${course.title}">
        <h4>${course.title}</h4>
    `;

    return card;
}

function createBookCard(book) {
    const card = document.createElement("a");
    card.classList.add("course-card", "book"); // reuse same styling
    card.href = book.amazon_link;
    card.target = "_blank";
    card.rel = "noopener";

    const imgSrc = book.img || "assets/img/thumbnails/default-book.png";

    card.innerHTML = `
        <img src="${imgSrc}" alt="${book.title}">
        <h4>${book.title}</h4>
    `;

    return card;
}



/* ===================================== */
/* INITIALIZE A CAROUSEL INSTANCE */
/* ===================================== */

window.initCarousel = function initCarousel(carouselElement, items, createCardFn = createCourseCard) {
    const track = carouselElement.querySelector(".carousel-track");
    const prevBtn = carouselElement.querySelector(".carousel-btn.prev");
    const nextBtn = carouselElement.querySelector(".carousel-btn.next");

    if (!track || !prevBtn || !nextBtn) return;

    track.innerHTML = "";
    items.forEach(item => track.appendChild(createCardFn(item)));

    let index = 0;
    let maxIndex = 0;

    track.style.transition = "transform 0.35s ease";
    track.style.willChange = "transform";

    function getMetrics() {
        const card = track.querySelector(".course-card");
        if (!card) return null;

        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.gap) || 16;

        const cardWidth = card.getBoundingClientRect().width + gap;
        const viewportWidth = carouselElement.getBoundingClientRect().width;

        const visibleCards = Math.floor(viewportWidth / cardWidth) || 1;
        maxIndex = Math.max(items.length - visibleCards, 0);

        return cardWidth;
    }

    function update() {
        const cardWidth = getMetrics();
        if (!cardWidth) return;

        index = Math.max(0, Math.min(index, maxIndex));
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < maxIndex) {
            index++;
            update();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            update();
        }
    });

    const observer = new ResizeObserver(() => {
        index = 0;
        update();
    });

    observer.observe(carouselElement);

    update();
};



