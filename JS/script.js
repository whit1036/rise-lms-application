console.log('Hello, World!')

// Student Login

// const loginButton = document.getElementById('getLinkBtn')
// const emailInput = document.getElementById('email')
// const passwordInput = document.getElementById('password')

// loginButton.addEventListener('click', function{

// })

const loginButton = document.getElementById('getLinkBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const getPasswordLink = document.getElementById('getPasswordLink')

// Define the correct email and password
const correctEmail = 'risestudent@riseacademy.com';
const correctPassword = 'riseacademy';

loginButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
        showMessage('Login Successful', 'text-success');
        window.location.href = 'master-template.html'
    } else {
        showMessage('Login Incorrect. Please check your credentials.', 'text-danger');
    }

    // Clear the input fields
    emailInput.value = '';
    passwordInput.value = '';
});

function showMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = `alert ${className}`;

    // Insert the message above the form
    const loginForm = document.getElementById('studentlogin');
    loginForm.insertBefore(messageDiv, loginForm.firstChild);

    // Remove the message after a few seconds (optional)
    setTimeout(function () {
        messageDiv.remove();
    }, 5000); // Remove the message after 5 seconds (adjust as needed)
}

// const selectLogin = document.getElementById('selectLogin');

// selectLogin.addEventListener('click', function () {
//     window.location.href = 'login-student.html';
//     console.log('button clicked');
// });

document.addEventListener('DOMContentLoaded', function () {
    // Your code here, including event listener attachment
    const selectLogin = document.getElementById('selectLogin');
    selectLogin.addEventListener('click', function () {
        window.location.href = 'login-student.html';
        console.log('button clicked')
    });
});

// const getPasswordLink = document.getElementById('getPasswordLink')

// function showPasswordMessage(message, className) {
//     getPasswordLink.addEventListener('click', function(){
//     const passwordMessageDiv = document.createElement('div');
//     passwordMessageDiv.textContent = message;
//     passwordMessageDiv.className = `alert ${className}`;
//     })
// }

// getPasswordLink.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (getPasswordLink.clicked === true) {
//         showMessage('E-Mail sent succesfully.', 'text-success');
//         window.location.href = 'login-password.html'
//     } else {
//         showMessage('Please enter a valid e-mail.', 'text-danger');
//     }
// });

// function showMessage(passwordMessage, className){
//     const passwordMessageDiv = document.createElement('div');
//     passwordMessageDiv.textContent = passwordMessage;
//     passwordMessageDiv.className = `alert ${className}`;

//     const forgotPasswordForm = document.getElementById('forgotPass');
//     forgotPasswordForm.insertBefore(passwordMessageDiv, forgotPasswordForm.firstChild);

//     setTimeout(function () {
//         passwordMessageDiv.remove();
//     }, 5000); 
// }