/**
 * @author Alexandra-Maria Mazi @Alex-Mazi|| p3220111@aueb.gr
 * @author Christina Perifana @c-peri || p3220160@aueb.gr
 */

//Pass teh URL parameters to the filters so that the page loads with them applied if link has them
function getURLParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        category: params.get('category'),
        level: params.get('level'),
        search: params.get('search')
    };
}

// Apply URL parameters to filters and filter the courses so it shows only matching courses
function applyURLFilters() {
    const params = getURLParams();
    
    if (params.category) {
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            const options = Array.from(categoryFilter.options);
            const matchingOption = options.find(opt => 
                opt.value.toLowerCase() === params.category.toLowerCase()
            );
            
            if (matchingOption) {
                categoryFilter.value = matchingOption.value;
            }
        }
    }
    
    //not used yet but prepared for future use
    if (params.level) {
        const levelFilter = document.getElementById('levelFilter');
        if (levelFilter) {
            const options = Array.from(levelFilter.options);
            const matchingOption = options.find(opt => 
                opt.value.toLowerCase() === params.level.toLowerCase()
            );
            
            if (matchingOption) {
                levelFilter.value = matchingOption.value;
            }
        }
    }
    
    if (params.search) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = decodeURIComponent(params.search);
        }
    }
    
    filtercourses();
}

//Initialize categories in dropdown menu
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

// Filter courses based on search (title, teacher, topics), category, and level of difficulty
function filtercourses() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const cat = document.getElementById('categoryFilter').value;
    const level = document.getElementById('levelFilter').value;

    let filtered = window.courses;

    if (cat) {
        filtered = filtered.filter(course => course.category === cat);
    }

    if (level) {
        filtered = filtered.filter(course => course.level === level);
    }

    if (search) {
        filtered = filtered.filter(course => {
            const matchesTitle = course.title.toLowerCase().includes(search);
            const matchesTeacher = course.teacher.toLowerCase().includes(search);
            
            const matchesTopic = course.topics && course.topics.some(t => 
                t.toLowerCase().includes(search)
            );

            return matchesTitle || matchesTeacher || matchesTopic;
        });
    }

    displaycourses(filtered);
    updateResultsInfo(filtered.length, window.courses.length);
}

// Display courses in the grid or list
function displaycourses(courses) {
    const grid = document.getElementById('coursesGrid');
    
    if (courses.length === 0) {
        grid.innerHTML = `<div class="no-results"><p>No courses found matching your criteria.</p></div>`;
        return;
    }

    // Generate the HTML code for each course
    grid.innerHTML = courses.map(course => `
        <div class="course-card2">
            <img src="${course.image}" srcset="${course.image} 320w, ${course.image} 640w, ${course.image} 960w" sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 300px" alt="${course.title}" class="course-image" loading="lazy" decoding="async" onerror="this.src='assets/img/thumbnails/default-course.png'">
            
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-category">${course.category}</p>
                <p class="course-level"><strong>Level:</strong> ${course.level}</p>
                <p class="course-teacher">by ${course.teacher}</p>
                <p class="course-description">${course.shortDescription}</p>
                
                <a href="course-details.html?id=${course.id}" target="_blank" class="course-link">
                    View Course →
                </a>
            </div>
        </div>
    `).join('');
}

// Change the reslults info text to match the total number of courses
function updateResultsInfo(shown, total) {
    const info = document.getElementById('resultsInfo');
    if (info) {
        info.textContent = shown === total 
            ? `Showing all ${total} courses` 
            : `Showing ${shown} of ${total} courses`;
    }
}

//Resets the filters to default values
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('levelFilter').value = '';
    
    //this changes the URL to remove parameters without reloading the page when reset button is clicked
    window.history.replaceState({}, document.title, window.location.pathname);
    
    filtercourses();
}

// Change the view via toggle to either show grid or list
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

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', filtercourses);

    const catFilter = document.getElementById('categoryFilter');
    if (catFilter) catFilter.addEventListener('change', filtercourses);

    const levelFilter = document.getElementById('levelFilter');
    if (levelFilter) levelFilter.addEventListener('change', filtercourses);

    initCategories();
    applyURLFilters();
});