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

function createBookCard(book) {
    const card = document.createElement("a");
    card.classList.add("course-card"); // reuse same styling
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

    items.forEach(item => {
        track.appendChild(createCardFn(item));
    });

    function getScrollAmount() {
        const card = track.querySelector(".course-card");
        if (!card) return 200;

        const gap = parseInt(getComputedStyle(track).gap || 16);
        return card.offsetWidth + gap;
    }

    nextBtn.onclick = () =>
        track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });

    prevBtn.onclick = () =>
        track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
};

