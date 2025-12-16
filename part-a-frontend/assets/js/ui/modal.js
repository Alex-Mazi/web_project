document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('member-modal');
    const modalDetails = document.getElementById('modal-details');
    const closeButton = document.querySelector('.modal-close-btn');
    
    const teamCards = document.querySelectorAll('.team-card'); 

    if (!modal) {
        console.error("Modal element #member-modal not found.");
        return;
    }
    
    function openModal(clickedCard) {
        const image = clickedCard.querySelector('.team-photo').outerHTML;
        const dataSpan = clickedCard.querySelector('.member-details-data');
        
        const name = dataSpan.getAttribute('data-full-name');
        const role = dataSpan.getAttribute('data-role');
        const description = dataSpan.getAttribute('data-description');

        modalDetails.innerHTML = `
            ${image}
            <h3>${name}</h3>
            <p class="modal-role">${role}</p>
            <p>${description}</p>
        `;

        modal.classList.remove('modal-hidden');
    }

    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            openModal(this); 
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('modal-hidden');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('modal-hidden');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('modal-hidden')) {
            modal.classList.add('modal-hidden');
        }
    });
});