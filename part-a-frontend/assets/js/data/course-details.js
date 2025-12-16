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

    if (course.image) {
        img.src = course.image;
        img.alt = course.title;
    } else {
        img.src = "assets/img/thumbnails/default-course.png";
        img.alt = "Course image";
    }

    const teacherNameEl = document.getElementById("teacher-name");
    const teacherImageEl = document.getElementById("teacher-image");

    if (teacherNameEl) {
        teacherNameEl.textContent = course.teacher || "IT Library Faculty";
    }

    if (teacherImageEl) {
        if (course.teacherImage) {
            teacherImageEl.src = course.teacherImage;
            teacherImageEl.alt = course.teacher;
        } else {
            teacherImageEl.src = "assets/img/thumbnails/default-course.png";
            teacherImageEl.alt = "Instructor";
        }
    }

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

    const prereqList = document.getElementById("prerequisites-list");
    prereqList.innerHTML = "";

    if (!course.prerequisites || course.prerequisites.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No prior knowledge required.";
        li.classList.add("empty-prereq");
        prereqList.appendChild(li);
    } else {
        course.prerequisites.forEach(req => {
            const li = document.createElement("li");
            li.textContent = req;
            prereqList.appendChild(li);
        });
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




