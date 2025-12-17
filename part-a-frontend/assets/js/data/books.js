function initCategories() {
    const cats = [...new Set(window.bookslist.map(b => b.category))].sort();
    const sel = document.getElementById('categoryFilter');
    cats.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        sel.appendChild(opt);
    });
}

function filterBooks() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const cat = document.getElementById('categoryFilter').value;

    let filtered = window.bookslist;

    if (cat) filtered = filtered.filter(b => b.category === cat);

    if (search) {
        filtered = filtered.filter(b => 
            b.title.toLowerCase().includes(search) ||
            b.author.toLowerCase().includes(search) ||
            b.isbn.includes(search)
        );
    }

    displayBooks(filtered);
    updateResultsInfo(filtered.length, window.bookslist.length);
}

function displayBooks(books) {
    const grid = document.getElementById('booksGrid');
    
    if (books.length === 0) {
        grid.innerHTML = `<div class="no-results"><p>No books found.</p></div>`;
        return;
    }

    grid.innerHTML = books.map(book => `
        <div class="book-card">
            <img src="${book.img}" alt="${book.title}" class="book-image" 
                 onerror="this.src='https://via.placeholder.com/115x170?text=No+Cover'">
            
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-category">${book.category}</p>
                <p class="book-author">by ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <p class="book-isbn">ISBN: ${book.isbn}</p>
                <a href="${book.amazon_link}" target="_blank" class="book-link">
                    View on Amazon →
                </a>
            </div>
        </div>
    `).join('');
}

function updateResultsInfo(shown, total) {
    const info = document.getElementById('resultsInfo');
    info.textContent = shown === total ? `Showing all ${total} books` : `Showing ${shown} of ${total} books`;
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    filterBooks();
}

function setView(viewType) {
    const grid = document.getElementById('booksGrid');
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (viewType === 'list') {
        grid.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
    } else {
        grid.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    }
}

document.getElementById('searchInput').addEventListener('input', filterBooks);
document.getElementById('categoryFilter').addEventListener('change', filterBooks);

window.onload = () => {
    initCategories();
    filterBooks();
};