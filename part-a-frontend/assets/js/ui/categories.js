/**
 * @author Alexandra-Maria Mazi @Alex-Mazi|| p3220111@aueb.gr
 * @author Christina Perifana @c-peri || p3220160@aueb.gr
 * 
 * Dynamically generates category cards for the index page based on available course data.
 */

//Create the categories dynamically based on the courses available in courses
function getCategories() {
    const categoryMap = {};

    courses.forEach(course => {
        if (!categoryMap[course.category]) {
            categoryMap[course.category] = {
                name: course.category,
                description: course.shortDescription
            };
        }
    });

    return Object.values(categoryMap);
}

// Create a category card element with the necessary HTML
function createCategoryCard(category) {
    const card = document.createElement("div");
    card.classList.add("category-card");

    card.innerHTML = `
        <a href="courses.html?category=${encodeURIComponent(category.name)}" class="category-link">
        <h4>${category.name}</h4>
        <p>${category.description}</p>
        </a>
    `;

    return card;
}

// Render all category cards into the container
function renderCategories() {
    const container = document.querySelector(".categories-container");
    if (!container) return;

    const categories = getCategories();

    categories.forEach(category => {
        const card = createCategoryCard(category);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderCategories);
