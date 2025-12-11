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

    // Full Name
    let fullName = document.getElementById("fullName").value.trim();
    let nameRegex = /^[A-Za-z'-]+(\s+[A-Za-z'-]+)+$/;
    if (!fullName) showError("fullName", "Name required");
    else if (!nameRegex.test(fullName)) showError("fullName", "Full name required(no special characters or numbers)");
    else clearError("fullName");

    // Email
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) showError("email", "Email required");
    else if (!emailRegex.test(email)) showError("email", "Invalid email format");
    else clearError("email");

    // Date of birth
    let dob = document.getElementById("dob").value;
    if (!dob) showError("dob", "Date of birth required");
    else {
        let age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 16) showError("dob", "Must be over 16 years old");
        else clearError("dob");
    }

    // Username
    let username = document.getElementById("username").value.trim();
    if (username.length < 5) showError("username", "Username must be at least 5 characters");
    else clearError("username");

    // Password
    let password = document.getElementById("password").value;
    if (password.length < 8) showError("password", "Password must be at least 8 characters");
    else clearError("password");

    // Confirm password
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) showError("confirmPassword", "Passwords do not match");
    else clearError("confirmPassword");

    // Interests
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

                    // Save selection for summary
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

    //Summary Data
    let summaryData = {
        fullName,
        email,
        dob,
        username,
        interests: interests.map(i => i.value),
        courses: courseCheck.data
    };

    // Show summary
    document.getElementById("summaryText").textContent =
        JSON.stringify(summaryData, null, 2);

    document.getElementById("summary").style.display = "block";
});

//Experience dropdown toggle

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
