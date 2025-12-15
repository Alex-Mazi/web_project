document.addEventListener("DOMContentLoaded", () => {
    const indexCarousel = document.querySelector("#recommended-courses .carousel");
    if (!indexCarousel) return;

    const recommendedCourses = courses.filter(c => c.recommended);
    initCarousel(indexCarousel, recommendedCourses);
});