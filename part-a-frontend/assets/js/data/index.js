/**
 * @author Alexandra-Maria Mazi @Alex-Mazi|| p3220111@aueb.gr
 * @author Christina Perifana @c-peri || p3220160@aueb.gr
 * 
 * Creates and initializes the recommended courses carousel on the index page.
 */

document.addEventListener("DOMContentLoaded", () => {
    const indexCarousel = document.querySelector("#recommended-courses .carousel");
    if (!indexCarousel) return;

    const recommendedCourses = courses.filter(c => c.recommended);
    initCarousel(indexCarousel, recommendedCourses);
});