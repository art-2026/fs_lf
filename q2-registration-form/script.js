// Access the form
const form = document.getElementById("registrationForm");

// Add submit event
form.addEventListener("submit", function (event) {
    // Prevent form from submitting automatically
    event.preventDefault();

    // Call validation function
    validateForm();
});

function validateForm() {
    // Get values from input fields and remove extra spaces
    const firstName = document.getElementById("firstName").value.trim();
    const middleName = document.getElementById("middleName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const pan = document.getElementById("pan").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    // Get selected gender
    const gender = document.querySelector('input[name="gender"]:checked');

    // Regex patterns
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    const phonePattern = /^[6-9][0-9]{9}$/;

    // Initially assume form is valid
    let isValid = true;

    // Clear all previous messages and styles
    clearErrors();

    // First Name validation
    if (firstName === "") {
        setError("firstName", "firstNameError", "First name is required");
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        setError("firstName", "firstNameError", "Only alphabets allowed");
        isValid = false;
    } else {
        setValid("firstName");
    }

    // Middle Name validation
    if (middleName === "") {
        setError("middleName", "middleNameError", "Middle name is required");
        isValid = false;
    } else if (!namePattern.test(middleName)) {
        setError("middleName", "middleNameError", "Only alphabets allowed");
        isValid = false;
    } else {
        setValid("middleName");
    }

    // Last Name validation
    if (lastName === "") {
        setError("lastName", "lastNameError", "Last name is required");
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        setError("lastName", "lastNameError", "Only alphabets allowed");
        isValid = false;
    } else {
        setValid("lastName");
    }

    // Email validation
    if (email === "") {
        setError("email", "emailError", "Email is required");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        setError("email", "emailError", "Enter a valid email");
        isValid = false;
    } else {
        setValid("email");
    }

    // Password validation
    if (password === "") {
        setError("password", "passwordError", "Password is required");
        isValid = false;
    } else if (password.length < 6) {
        setError("password", "passwordError", "Password must be at least 6 characters");
        isValid = false;
    } else {
        setValid("password");
    }

    // Confirm password validation
    if (confirmPassword === "") {
        setError("confirmPassword", "confirmPasswordError", "Confirm your password");
        isValid = false;
    } else if (password !== confirmPassword) {
        setError("confirmPassword", "confirmPasswordError", "Passwords do not match");
        isValid = false;
    } else {
        setValid("confirmPassword");
    }

    // Gender validation
    if (!gender) {
        document.getElementById("genderError").innerText = "Please select gender";
        isValid = false;
    }

    // DOB validation
    if (dob === "") {
        setError("dob", "dobError", "Date of birth is required");
        isValid = false;
    } else {
        setValid("dob");
    }

    // PAN validation
    if (pan === "") {
        setError("pan", "panError", "PAN number is required");
        isValid = false;
    } else if (!panPattern.test(pan)) {
        setError("pan", "panError", "Enter valid PAN format like ABCDE1234F");
        isValid = false;
    } else {
        setValid("pan");
    }

    // Phone validation
    if (phone === "") {
        setError("phone", "phoneError", "Phone number is required");
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        setError("phone", "phoneError", "Enter valid Indian mobile number");
        isValid = false;
    } else {
        setValid("phone");
    }

    // Address validation
    if (address === "") {
        setError("address", "addressError", "Address is required");
        isValid = false;
    } else if (address.length < 10) {
        setError("address", "addressError", "Address must be at least 10 characters");
        isValid = false;
    } else {
        setValid("address");
    }

    // If everything is valid, show success message
    if (isValid) {
        document.getElementById("successMessage").innerText = "Form submitted successfully!";
        form.reset();

        // Remove green borders after reset
        const fields = document.querySelectorAll("input, textarea");
        fields.forEach(field => {
            field.classList.remove("valid");
        });
    }
}

// Function to show error
function setError(inputId, errorId, message) {
    document.getElementById(errorId).innerText = message;
    document.getElementById(inputId).classList.add("invalid");
    document.getElementById(inputId).classList.remove("valid");
}

// Function to show valid field
function setValid(inputId) {
    document.getElementById(inputId).classList.add("valid");
    document.getElementById(inputId).classList.remove("invalid");
}

// Function to clear old errors
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(error => error.innerText = "");

    document.getElementById("successMessage").innerText = "";

    const fields = document.querySelectorAll("input, textarea");
    fields.forEach(field => {
        field.classList.remove("invalid");
    });
}
