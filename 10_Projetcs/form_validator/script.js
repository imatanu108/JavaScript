
const form = document.getElementById('my-form');

form.addEventListener('submit', function (event) {
    // event.preventDefault(); // Prevent the default form submission

    let nameField = document.getElementById("name")
    let mobileField = document.getElementById("mobile-number")
    let emailField = document.getElementById("email")
    let messageField = document.getElementById("message")

    let name = nameField.value
    let mobile = mobileField.value
    let email = emailField.value
    let message = messageField.value

    let nameError = document.getElementById("name-error")
    let mobileError = document.getElementById("mobile-number-error")
    let emailError = document.getElementById("email-error")
    let messageError = document.getElementById("message-error")

    let mobileInt = Number(mobile) // will required to check if the mobile number contains any character

    function checkInputs() {

        if (message.trim() === '') {
            messageError.style.display = "block"
            event.preventDefault();
            messageField.focus()
        } else {
            messageError.style.display = "none"
        }
        if (email.trim() === '') {
            emailError.style.display = "block"
            event.preventDefault();
            emailField.focus()
        } else {
            emailError.style.display = "none"
        }
        if (mobile.trim() === '') {
            mobileError.innerText = 'Mobile number is required!'
            mobileError.style.display = "block"
            event.preventDefault();
            mobileField.focus()
        } else {
            mobileError.style.display = "none"

            // checking mobile number

            if (isNaN(mobileInt) || mobile.length < 10) {
                mobileError.innerText = 'Please enter a valid mobile number!'
                mobileError.style.display = "block"
                event.preventDefault();
                mobileField.focus()
            } else {
                mobileError.style.display = "none"
            }
        }
        if (name.trim() === '') {
            nameError.style.display = "block"
            event.preventDefault();
            nameField.focus()
            return true
        } else {
            nameError.style.display = "none"
        }

        // now returning true for any errors and false for not occuring any errors

        if (message.trim() === '' || email.trim() === '' || mobile.trim() === '' || mobile.trim() === '' || isNaN(mobileInt) || name.trim() === '' || mobile.length < 10) {
            return true
        } else {
            return false
        }
    }

    checkInputs();

    // if there is not any error checkInputs return false, !checkInputs() is true, so submitting and reseting the form

    if (!checkInputs()) {
        form.submit();
        form.reset()
    }

});
