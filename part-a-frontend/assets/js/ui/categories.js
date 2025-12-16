// courses[] already exists globally

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

function createCategoryCard(category) {
    const card = document.createElement("div");
    card.classList.add("category-card");

    card.innerHTML = `
        <h4>${category.name}</h4>
        <p>${category.description}</p>
    `;

    return card;
}

function renderCategories() {
    const container = document.querySelector(".categories-container");
    if (!container) return;

    const categories = getCategories();

    categories.forEach(category => {
        const card = createCategoryCard(category);
        container.appendChild(card);
    });
}

// Run automatically on page load
document.addEventListener("DOMContentLoaded", renderCategories);
