// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let btn = document.getElementById('submit-button');
// <input type="text" id="fullname">,
let fullname = document.getElementById('fullname');

// <input type="text" id="email">
let email = document.getElementById('email');

// <textarea id="message"></textarea>
let message = document.getElementById('message');

// Declare variable that will 
// store regular expression for email
let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateForm() {
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    let data = {};
    // Declare array that will store the errors
    let error = {};

    /* Full Name */
    // Check if fullname is not empty.
    if (fullname.value !== "") {
        // If so:
        // Pass the collected value
        // to your object "data".
        data.fullname = fullname.value;
    } else {
        // Otherwise:
        // Create a corresponding error-message
        // and add it to your array "errors".
        error.fn = "full name is missing";
        // End your conditional here.
    }

    /*EMAIL*/
    // Check if email is not empty.
    if (email.value !== "") {
        // Check if email is valid.
        if (emailPattern.test(email.value)) {
            // If so:
            // Pass the collected value
            // to your object "data".
            data.email = email.value;
        } else {
            // Otherwise:
            // Create a corresponding error-message
            // and add it to your array "errors".
            error.em = "your email is invalid!";
            // End your nested conditional here.
        }
    } else {
        // Otherwise:
        // Create a corresponding error-message
        // and add it to your array "errors"
        error.em = "Email is missing!";
        // End your outer conditional here.
    }

    /* MESSAGE */
    // Check if message is not empty.
    if (message.value !== "") {
        // If so:
        // Pass the collected value
        // to your object "data".
        data.message = message.value;
    } else {
        // Otherwise:
        // Create a corresponding error-message
        // and add it to your array "errors"
        error.msg = "Message is missing!";
        // End your conditional here.
    }

    /* FEEDBACK / ERRORS */
    // Check if there is anything in array errors
    if (Object.keys(error).length !== 0) {
        // If so: 
        // Print it in JavaScript console.
        console.log(error);

    } else {
        // Otherwise:
        // Print the data in JavaScript console.
        console.log(data);
        // Clear text-fields
        document.querySelector("form").reset();
        // End your conditional here.
    }
    // Close your function here
}


btn.addEventListener("click", validateForm);
// Register your form to "click" event.
