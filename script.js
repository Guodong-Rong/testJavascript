// Function to validate user data
function validateUserData() {
    // Initialize error count
    var error = 0; // no error

    // Validate first name
    error = validateFirstName(error);

    // Validate surname
    error = validateSurname(error);

    // Validate email
    error = validateEmail(error);

    // Check if there are no errors
    if (error === 0) {
        return true; // no errors found, submit form data
    } else {
        return false; // one or more errors found, stop form submission
    }
}

// Function to validate the first name
function validateFirstName(errorFound) {
    // Check if the user has entered some data
    if (document.getElementById("firstName").value === "") {
        // If no data, show an error message and increment error count
        document.getElementById("errorFirstName").innerHTML = "You must specify your first name.";
        return ++errorFound;
    } else {
        // If data is entered, clear the error message and return the current error count
        document.getElementById("errorFirstName").innerHTML = "*";
        return errorFound;
    }
}


// Function to validate the surname
function validateSurname(errorFound) {
    // Check that surname is between 3 and 20 characters
    var userData = document.getElementById("surname").value;

    if (userData.length >= 3 && userData.length <= 20) {
        // No error found, update error message
        document.getElementById("errorSurname").innerHTML = "*";
    } else {
        // Error found, update error message and increment error count
        document.getElementById("errorSurname").innerHTML = "Your surname must be between 3 and 20 characters";
        return ++errorFound;
    }

    // Check for illegal characters
    var illegalChars = /\W/;

    if (illegalChars.test(userData)) {
        // Error found, update error message and increment error count
        document.getElementById("errorSurname").innerHTML = "Your surname cannot contain illegal characters such as symbols";
        return ++errorFound;
    } else {
        // No error found, update error message and return current error count
        document.getElementById("errorSurname").innerHTML = "*";
        return errorFound;
    }
}


// Function to validate the email address
function validateEmail(errorFound) {
    // Get the user input for the email
    var userData = document.getElementById("email").value;

    // Regular expression for validating email format
    var regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[09]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regExpression.test(userData)) {
        // No error found, update error message
        document.getElementById("errorEmail").innerHTML = "*";
    } else {
        // Error found, update error message and increment error count
        document.getElementById("errorEmail").innerHTML = "The email address is not valid";
        return ++errorFound;
    }

    // Return the current error count
    return errorFound;
}

