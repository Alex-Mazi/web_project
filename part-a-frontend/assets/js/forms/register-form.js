document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    function showError(id, msg) {
        let error = document.getElementById(id + "-error");
        let input = document.getElementById(id);
        error.textContent = msg;
        error.style.display = "block";
        input.classList.add("invalid");
        valid = false;
    }

    function clearError(id) {
        let error = document.getElementById(id + "-error");
        let input = document.getElementById(id);

        if (error) error.style.display = "none";
        if (input) input.classList.remove("invalid");
    }

    let fullName = document.getElementById("fullName").value.trim();
    let nameRegex = /^[A-Za-z'-]+(\s+[A-Za-z'-]+)+$/;
    if (!fullName) showError("fullName", "Name required");
    else if (!nameRegex.test(fullName)) showError("fullName", "Full name required (no special characters or numbers)");
    else clearError("fullName");

    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) showError("email", "Email required");
    else if (!emailRegex.test(email)) showError("email", "Invalid email format");
    else clearError("email");

let dob = document.getElementById("dob").value;

let dobFormatted = dob; 

if (dob) {
    const dateParts = dob.split('-'); 
    if (dateParts.length === 3) {
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
        
        dobFormatted = `${day}/${month}/${year}`;
    }
}

    if (!dob) showError("dob", "Date of birth required");
    else {
        let age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 16) showError("dob", "Must be over 16 years old");
        else clearError("dob");
    }

    let username = document.getElementById("username").value.trim();
    if (username.length < 5) showError("username", "Username must be at least 5 characters");
    else clearError("username");

    let password = document.getElementById("password").value;
    if (password.length < 8) showError("password", "Password must be at least 8 characters");
    else clearError("password");

    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) showError("confirmPassword", "Passwords do not match");
    else clearError("confirmPassword");

    let interests = [...document.querySelectorAll("input[name='interest']:checked")];
    if (interests.length === 0) {
        document.getElementById("interest-error").textContent = "Choose at least one interest";
        document.getElementById("interest-error").style.display = "block";
        valid = false;
    } else {
        document.getElementById("interest-error").style.display = "none";
    }

    function validateCourses() {
        const checkboxes = document.querySelectorAll(".course-checkbox");
        const errorBox = document.getElementById("course-error");

        let selected = 0;
        let courseValid = true;
        let courseSelections = [];

        checkboxes.forEach(cb => {
            const dropdown = document.getElementById(cb.dataset.target);

            if (cb.checked) {
                selected++;

                if (dropdown.value === "") {
                    dropdown.classList.add("invalid");
                    courseValid = false;
                } else {
                    dropdown.classList.remove("invalid");

                    courseSelections.push({
                        course: cb.parentElement.innerText.trim(), 
                        experience: dropdown.value
                    });
                }
            } else {
                dropdown.classList.remove("invalid");
            }
        });

        if (selected === 0) {
            errorBox.textContent = "Select at least one course.";
            errorBox.style.display = "block";
            return { ok: false, data: [] };
        }

        if (!courseValid) {
            errorBox.textContent = "Select experience levels for each selected course.";
            errorBox.style.display = "block";
            return { ok: false, data: [] };
        }

        errorBox.style.display = "none";
        return { ok: true, data: courseSelections };
    }

    const courseCheck = validateCourses();
    if (!courseCheck.ok) valid = false;

    if (!valid) return;

    let summaryData = {
        fullName,
        email,
        dob: dobFormatted,
        username,
        interests: interests.map(i => i.value),
        courses: courseCheck.data
    };

    const summaryTextContainer = document.getElementById("summaryText"); 
    const registerForm = document.getElementById("registerForm");

    let summaryHTML = `
        <div class="summary-section">
            <h4>Personal Details</h4>
            <ul>
                <li><strong>Name:</strong> ${summaryData.fullName}</li>
                <li><strong>Email:</strong> ${summaryData.email}</li>
                <li><strong>Date of Birth:</strong> ${summaryData.dob}</li>
                <li><strong>Username:</strong> ${summaryData.username}</li>
            </ul>
        </div>
    `;

    if (summaryData.interests.length > 0) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Interests</h4>
                <p>${summaryData.interests.join(' • ')}</p>
            </div>
        `;
    }

    if (summaryData.courses.length > 0) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Course Experience</h4>
                <ul class="course-list">
        `;
        
        summaryData.courses.forEach(courseItem => {
            summaryHTML += `
                <li><strong>${courseItem.course}:</strong> ${courseItem.experience}</li>
            `;
        });
        
        summaryHTML += `
                </ul>
            </div>
        `;
    }
    
    summaryTextContainer.innerHTML = summaryHTML;

    if (window.ITLibrary && window.ITLibrary.openModal) {
        ITLibrary.openModal('summary-modal');
    } else {
        console.error("ITLibrary.openModal is not defined. Ensure modal.js is loaded correctly.");
    }
    
    const confirmBtn = document.getElementById("confirmRegistrationBtn");
    
    if (!confirmBtn.hasListener) {
        confirmBtn.addEventListener("click", () => {
            
            if (window.ITLibrary && window.ITLibrary.closeModal) {
                ITLibrary.closeModal('summary-modal');
            }
            
            registerForm.style.display = "none";
            
            const successMessage = document.getElementById("registrationSuccessMessage");
            if (successMessage) {
                successMessage.innerHTML = `
                    <h2>Registration Successful!</h2>
                    <p><strong>Welcome, ${fullName}!</strong> You are now registered for our learning platform.</p>
                    <p>Your journey to success starts here.</p>
                `;
                successMessage.style.display = "block";
            } else {
                alert(`Registration confirmed! Welcome, ${fullName}!`);
            }
            
            registerForm.reset(); 
        });
        confirmBtn.hasListener = true; 
    }
}); 

document.querySelectorAll(".course-checkbox").forEach(cb => {
    cb.addEventListener("change", function () {
        const dropdown = document.getElementById(this.dataset.target);

        if (this.checked) {
            dropdown.disabled = false;
            dropdown.style.display = "inline-block";
        } else {
            dropdown.disabled = true;
            dropdown.value = "";
            dropdown.classList.remove("invalid");
        }
    });
});