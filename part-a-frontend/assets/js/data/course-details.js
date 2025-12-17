let originalRelatedParent = null;
let originalRelatedNextSibling = null;

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
            teacherImageEl.src = "assets/img/people/default-teacher.png";
            teacherImageEl.alt = "Instructor";
        }
    }

    const outcomesList = document.getElementById("outcomes-list");
    outcomesList.innerHTML = "";
    course.learningOutcomes.forEach(outcome => {
        const li = document.createElement("li");
        li.textContent = outcome;
        outcomesList.appendChild(li);
    });

    const topicsContainer = document.getElementById("topics-container");
    topicsContainer.innerHTML = "";
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
    if (!course) return;

    renderFacts(course);
    renderBookRecommendations(course);
    setupMobileRelated(course);

    requestAnimationFrame(() => {
        renderRelatedCoursesCarousel(course);
    });

    setupMobileRelatedTabs();
});


function renderRelatedCoursesCarousel(currentCourse, attempts = 0) {
    if (!currentCourse) return;

    const carousel = document.querySelector("#related-courses .carousel");
    if (!carousel) return;

    if (carousel.offsetWidth === 0) {
        if (attempts < 10) {
            requestAnimationFrame(() =>
                renderRelatedCoursesCarousel(currentCourse, attempts + 1)
            );
        }
        return;
    }

    const relatedCourses = courses.filter(course =>
        course.category === currentCourse.category &&
        course.id !== currentCourse.id
    );

    if (!relatedCourses.length) {
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

function getRelatedBooks(course) {
    if (!window.bookslist || !course) return [];

    if (course.category !== "Programming") {
        return bookslist.filter(
            book => book.category === course.category
        );
    }

    return bookslist.filter(
        book => course.topics.includes(book.category)
    );
}


function renderBookRecommendations(course) {
    const bookListEl = document.querySelector(".book-recommendations .book-list");
    if (!bookListEl || !window.bookslist || !course) return;

    bookListEl.innerHTML = "";

    const relatedBooks = getRelatedBooks(course);

    if (relatedBooks.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No recommended books for this course.";
        li.classList.add("empty-books");
        bookListEl.appendChild(li);
        return;
    }

    relatedBooks.forEach(book => {
        const li = document.createElement("li");
        li.className = "book-card";

        li.innerHTML = `
            <a href="${book.amazon_link}" target="_blank" rel="noopener">
                <img
                    class="book-cover"
                    src="${book.img}"
                    alt="${book.title} cover"
                />
                <div class="book-meta">
                    <h4 class="book-title">${book.title}</h4>
                    <p class="book-author">${book.author}</p>
                </div>
            </a>
        `;

        bookListEl.appendChild(li);
    });
}

function setupMobileRelated(currentCourse) {
    const mobileContainer = document.querySelector(".mobile-related-body");
    if (!mobileContainer) return;

    const relatedCoursesSection = document.getElementById("related-courses");
    const booksSection = document.querySelector(".book-recommendations");

    if (window.innerWidth > 599) {
        restoreDesktopRelated();
        return;
    }

    // 🔐 Save original position ONCE
    if (!originalRelatedParent && relatedCoursesSection) {
        originalRelatedParent = relatedCoursesSection.parentElement;
        originalRelatedNextSibling = relatedCoursesSection.nextElementSibling;
    }

    // Avoid duplicate moves
    if (mobileContainer.contains(relatedCoursesSection)) return;

    if (relatedCoursesSection) {
        const coursesWrapper = document.createElement("div");
        coursesWrapper.classList.add("mobile-related-panel", "active");
        coursesWrapper.dataset.type = "courses";
        coursesWrapper.appendChild(relatedCoursesSection);
        mobileContainer.appendChild(coursesWrapper);
    }

    if (booksSection && !mobileContainer.querySelector('[data-type="books"]')) {
        const booksWrapper = document.createElement("div");
        booksWrapper.classList.add("mobile-related-panel", "content-card", "highlight-card");
        booksWrapper.dataset.type = "books";

        const title = document.createElement("h3");
        title.className = "section-title";
        title.textContent = "BOOK RECOMMENDATIONS";

        const hint = document.createElement("p");
        hint.className = "section-hint";
        hint.textContent = "Books that complement this course";

        const carousel = document.createElement("div");
        carousel.className = "carousel books-carousel";
        carousel.innerHTML = `
            <div class="carousel-track"></div>
            <button class="carousel-btn prev">‹</button>
            <button class="carousel-btn next">›</button>
        `;

        booksWrapper.append(title, hint, carousel);
        mobileContainer.appendChild(booksWrapper);

        const relatedBooks = getRelatedBooks(currentCourse);
        if (relatedBooks.length) {
            requestAnimationFrame(() => {
                initCarousel(carousel, relatedBooks, createBookCard);
            });
        }
    }
}

function restoreDesktopRelated() {
    const relatedCoursesSection = document.getElementById("related-courses");
    const mobileContainer = document.querySelector(".mobile-related-body");

    if (!originalRelatedParent || !relatedCoursesSection) return;

    // Move section back to original place
    if (originalRelatedNextSibling) {
        originalRelatedParent.insertBefore(
            relatedCoursesSection,
            originalRelatedNextSibling
        );
    } else {
        originalRelatedParent.appendChild(relatedCoursesSection);
    }

    // Remove mobile wrappers
    if (mobileContainer) {
        mobileContainer.innerHTML = "";
    }
}


function setupMobileRelatedTabs() {
    const tabs = document.querySelectorAll(".mobile-related-tab");
    const panels = document.querySelectorAll(".mobile-related-panel");

    if (!tabs.length || !panels.length) return;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.target;

            // tabs
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // panels
            panels.forEach(panel => {
                panel.classList.toggle(
                    "active",
                    panel.dataset.type === target
                );
            });
        });
    });
}

let resizeTimeout;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        const courseId = getCourseIdFromURL();
        const course = findCourseById(courseId);
        if (!course) return;

        setupMobileRelated(course);
        setupMobileRelatedTabs(); 
    }, 150);
});







