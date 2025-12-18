function initCategories() {
            const cats = [...new Set(window.videoslist.map(v => v.category))].sort();
            const sel = document.getElementById('categoryFilter');

            cats.forEach(cat => {
                const opt = document.createElement('option');
                opt.value = cat;
                opt.textContent = cat;
                sel.appendChild(opt);
            });
        }

        // Get URL parameters
        function getURLParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                category: params.get('category'),
                search: params.get('search')
            };
        }

        // Apply URL filters
        function applyURLFilters() {
            const params = getURLParams();

            if (params.category) {
                const categoryFilter = document.getElementById('categoryFilter');
                const options = Array.from(categoryFilter.options);
                const matchingOption = options.find(opt =>
                    opt.value.toLowerCase() === params.category.toLowerCase()
                );

                if (matchingOption) {
                    categoryFilter.value = matchingOption.value;
                }
            }

            if (params.search) {
                const searchInput = document.getElementById('searchInput');
                searchInput.value = decodeURIComponent(params.search);
            }

            filterVideos();
        }

        // Filter videos
        function filterVideos() {
            const search = document.getElementById('searchInput').value.toLowerCase().trim();
            const cat = document.getElementById('categoryFilter').value;

            let filtered = window.videoslist;

            if (cat) {
                filtered = filtered.filter(v => v.category === cat);
            }

            if (search) {
                filtered = filtered.filter(v =>
                    v.title.toLowerCase().includes(search) ||
                    v.channel.toLowerCase().includes(search) ||
                    v.description.toLowerCase().includes(search)
                );
            }

            displayVideos(filtered);
            updateResultsInfo(filtered.length, window.videoslist.length);
        }

        // Display videos
        function displayVideos(videos) {
            const grid = document.getElementById('videosGrid');

            if (videos.length === 0) {
                grid.innerHTML = '<div class="no-results">No videos found matching your criteria.</div>';
                return;
            }

            grid.innerHTML = videos.map(video => `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <iframe 
                            src="https://www.youtube.com/embed/${video.videoId}?origin=youtube" 
                            referrerpolicy="strict-origin-when-cross-origin"
                            title="${video.title}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div class="video-info">
                        <span class="video-category">${video.category}</span>
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-channel">${video.channel}</p>
                        <p class="video-description">${video.description}</p>
                        <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank" class="video-link">
                            Watch on YouTube →
                        </a>
                    </div>
                </div>
            `).join('');
        }

        // Update results info
        function updateResultsInfo(shown, total) {
            const info = document.getElementById('resultsInfo');
            if (shown === total) {
                info.textContent = `Showing all ${total} videos`;
            } else {
                info.textContent = `Showing ${shown} of ${total} videos`;
            }
        }

        // Reset filters
        function resetFilters() {
            document.getElementById('searchInput').value = '';
            document.getElementById('categoryFilter').value = '';
            window.history.replaceState({}, document.title, window.location.pathname);
            filterVideos();
        }

        // View toggle
        function setView(viewType) {
            const grid = document.getElementById('videosGrid');
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

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', filterVideos);
        document.getElementById('categoryFilter').addEventListener('change', filterVideos);

        // Initialize
        initCategories();
        applyURLFilters();

        // Menu functionality
        const menuBtn = document.getElementById('menu-btn');
        const sideMenu = document.getElementById('side-menu');
        const overlay = document.getElementById('overlay');

        menuBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        });