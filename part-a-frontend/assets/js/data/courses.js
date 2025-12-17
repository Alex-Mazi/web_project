/**
 * COURSES PAGE LOGIC
 * Includes: Multi-filter (Category, Level, Search), Array-based Topic Search,
 * Results Counter, and View Toggling.
 */

// 1. Initialize Categories Dropdown
function initCategories() {
    const cats = [...new Set(window.courses.map(course => course.category))].sort();
    const sel = document.getElementById('categoryFilter');
    
    cats.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        sel.appendChild(opt);
    });
}

// 2. Core Filtering Logic
function filtercourses() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const cat = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;

    let filtered = window.courses;

    // Filter by Category
    if (cat) {
        filtered = filtered.filter(course => course.category === cat);
    }

    // Filter by Level
    if (level) {
        filtered = filtered.filter(course => course.level === level);
    }

    // Search by Title, Teacher, or Topics (Array)
    if (search) {
        filtered = filtered.filter(course => {
            const matchesTitle = course.title.toLowerCase().includes(search);
            const matchesTeacher = course.teacher.toLowerCase().includes(search);
            
            // Checks if any string within the topics array matches the search
            const matchesTopic = course.topics && course.topics.some(t => 
                t.toLowerCase().includes(search)
            );

            return matchesTitle || matchesTeacher || matchesTopic;
        });
    }

    displaycourses(filtered);
    updateResultsInfo(filtered.length, window.courses.length);
}

// 3. Render Courses to Grid
function displaycourses(courses) {
    const grid = document.getElementById('coursesGrid');
    
    if (courses.length === 0) {
        grid.innerHTML = `<div class="no-results"><p>No courses found matching your criteria.</p></div>`;
        return;
    }

    grid.innerHTML = courses.map(course => `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}" class="course-image" 
                 onerror="this.src='assets/img/thumbnails/default-course.png'">
            
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-category">${course.category}</p>
                <p class="course-level"><strong>Level:</strong> ${course.level}</p>
                <p class="course-teacher">by ${course.teacher}</p>
                <p class="course-description">${course.shortDescription}</p>
                
                <a href="#" target="_blank" class="course-link">
                    View Course →
                </a>
            </div>
        </div>
    `).join('');
}

// 4. Update Result Counter
function updateResultsInfo(shown, total) {
    const info = document.getElementById('resultsInfo');
    if (info) {
        info.textContent = shown === total 
            ? `Showing all ${total} courses` 
            : `Showing ${shown} of ${total} courses`;
    }
}

// 5. Reset All Filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('levelFilter').value = '';
    filtercourses();
}

// 6. View Toggle (Grid vs List)
function setView(viewType) {
    const grid = document.getElementById('coursesGrid');
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (viewType === 'list') {
        grid.classList.add('list-view');
        if (listBtn) listBtn.classList.add('active');
        if (gridBtn) gridBtn.classList.remove('active');
    } else {
        grid.classList.remove('list-view');
        if (gridBtn) gridBtn.classList.add('active');
        if (listBtn) listBtn.classList.remove('active');
    }
}

// 7. Event Listeners & Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Search input listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', filtercourses);

    // Category filter listener
    const catFilter = document.getElementById('categoryFilter');
    if (catFilter) catFilter.addEventListener('change', filtercourses);

    // Level filter listener
    const levelFilter = document.getElementById('levelFilter');
    if (levelFilter) levelFilter.addEventListener('change', filtercourses);

    // Initial load
    initCategories();
    filtercourses();
});