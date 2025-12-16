function getCourseIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"), 10);
}

function findCourseById(id) {
    return courses.find(course => course.id === id);
}

function renderCourseDetails(course) {
    if (!course) {
        document.querySelector("main").innerHTML =
            "<p>Course not found.</p>";
        return;
    }

    document.querySelector("#course-title").textContent = course.title;
    document.querySelector("#course-category").textContent =
        `${course.category} · ${course.level}`;
    document.querySelector("#course-description-text").textContent =
        course.description;

    const img = document.querySelector("#course-image");
    img.src = course.image;
    img.alt = course.title;

    const outcomesList = document.getElementById("outcomes-list");
    course.learningOutcomes.forEach(outcome => {
        const li = document.createElement("li");
        li.textContent = outcome;
        outcomesList.appendChild(li);
    });
    
    const topicsContainer = document.getElementById("topics-container");
    course.topics.forEach(topic => {
        const span = document.createElement("span");
        span.classList.add("topic-tag");
        span.textContent = topic;
        topicsContainer.appendChild(span);
    });

    const prereqText = document.getElementById("prerequisites-text");

    if (course.prerequisites.length === 0) {
    prereqText.textContent = "No prior knowledge required.";
    } else {
    prereqText.textContent = course.prerequisites.join(", ");
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const courseId = getCourseIdFromURL();
    const course = findCourseById(courseId);
    renderCourseDetails(course);
    renderRelatedCoursesCarousel(course);
    renderFacts(course);
});

function renderRelatedCoursesCarousel(currentCourse) {
    const carousel = document.querySelector("#related-courses .carousel");
    if (!carousel) return;

    const relatedCourses = courses.filter(course =>
        course.category === currentCourse.category &&
        course.id !== currentCourse.id
    );

    if (relatedCourses.length === 0) {
        carousel.style.display = "none";
        return;
    }

    initCarousel(carousel, relatedCourses);
}

function renderFacts(course) {
    const durationEl = document.getElementById("fact-duration");
    const levelEl = document.getElementById("fact-level");
    const recommendedEl = document.getElementById("fact-recommended");

    if (durationEl) durationEl.textContent = course.duration || "—";
    if (levelEl) levelEl.textContent = course.level || "—";

    if (recommendedEl) {
        if (course.recommended === true) recommendedEl.textContent = "Recommended";
        else if (course.recommended === false) recommendedEl.textContent = "Not recommended";
        else recommendedEl.textContent = "—";
    }
}




