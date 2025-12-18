/**
 * @author  Christina Perifana @c-peri || p3220160@aueb.gr
 * @author  Alexandra-Maria Mazi @Alex-Mazi|| p3220111@aueb.gr
 * 
 * */


window.ITLibrary = window.ITLibrary || {};

// Open the modal
window.ITLibrary.openModal = function(modalElementId) {
    const modal = document.getElementById(modalElementId);
    if (modal) {
        modal.classList.remove('modal-hidden');
        
    }
};

// Close the modal
window.ITLibrary.closeModal = function(modalElementId) {
    const modal = document.getElementById(modalElementId);
    if (modal) {
        modal.classList.add('modal-hidden');
    }
};

// Team Member and registration modal logic
document.addEventListener("DOMContentLoaded", function () {
    const memberModal = document.getElementById('member-modal');
    const modalDetails = document.getElementById('modal-details');
    const teamCards = document.querySelectorAll('.team-card'); 
    
    // Team Member Modal Logic
    if (memberModal && modalDetails) {
        
        function openTeamModal(clickedCard) {
            const image = clickedCard.querySelector('.team-photo').outerHTML;
            const dataSpan = clickedCard.querySelector('.member-details-data');
            
            if (!dataSpan) {
                console.error("Missing .member-details-data span in clicked card.");
                return;
            }

            const name = dataSpan.getAttribute('data-full-name');
            const role = dataSpan.getAttribute('data-role');
            const description = dataSpan.getAttribute('data-description');

            modalDetails.innerHTML = `
                ${image}
                <h3>${name}</h3>
                <p class="modal-role">${role}</p>
                <p>${description}</p>
            `;

            ITLibrary.openModal('member-modal'); 
        }

        teamCards.forEach(card => {
            card.addEventListener('click', function() {
                openTeamModal(this); 
            });
        });
    }

    // Generic modal close Logic
    function handleModalClose(modalElement) {
        if (modalElement) {
            window.ITLibrary.closeModal(modalElement.id);

            if (modalElement.id === 'summary-modal') {
                const registerForm = document.getElementById("registerForm");
                const successMessage = document.getElementById("registrationSuccessMessage");
                
                if (registerForm && successMessage.style.display !== 'block') {
                    registerForm.style.display = "block";
                }
            }
        }
    }

    document.querySelectorAll('.modal-close-btn').forEach(button => {
        button.addEventListener('click', function() {
            const modalElement = this.closest('[id$="-modal"]'); 
            handleModalClose(modalElement);
        });
    });

    document.querySelectorAll('[id$="-modal"]').forEach(modalElement => {
        modalElement.addEventListener('click', function(e) {
            if (e.target === modalElement) {
                handleModalClose(modalElement);
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('[id$="-modal"]:not(.modal-hidden)');
            if (openModal) {
                handleModalClose(openModal);
            }
        }
    });

});