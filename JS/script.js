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

// Displays an alert to show the user that the forgot password email has been sent successfully
function displayText() {
    const text = document.getElementById("textField");
    alert("Email sent successfully")
}

const showMsgInfo = document.getElementById('mobile-messages');
const showNftInfo = document.getElementById('mobile-notifications');
const workspaceInfo = document.getElementById('workspace-info');
const calendarInfo = document.getElementById('mbl-calendar');


function notificationsClicked() {
    const showNftInfo = document.getElementById('mobile-notifications');
    const showMsgInfo = document.getElementById('mobile-messages');
    const workspaceInfo = document.getElementById('workspace-info');

    if (showNftInfo.style.display === 'none') {
        showNftInfo.style.display = 'block';
        showMsgInfo.style.display = 'none';
        workspaceInfo.style.display = 'none';
    } else {
        showNftInfo.style.display = 'none';
        workspaceInfo.style.display = 'block';
    }
}

function messagesClicked() {
    const showNftInfo = document.getElementById('mobile-notifications');
    const showMsgInfo = document.getElementById('mobile-messages');
    const workspaceInfo = document.getElementById('workspace-info');

    if (showMsgInfo.style.display === 'none') {
        showMsgInfo.style.display = 'block';
        showNftInfo.style.display = 'none';
        workspaceInfo.style.display = 'none';
        calendarInfo.style.display = 'none';
    } else {
        showMsgInfo.style.display = 'none';
        workspaceInfo.style.display = 'block';
    }
}

function mobileCalendarClicked(){
    const showNftInfo = document.getElementById('mobile-notifications');
    const showMsgInfo = document.getElementById('mobile-messages');
    const workspaceInfo = document.getElementById('workspace-info');
    const calendarInfo = document.getElementById('mbl-calendar');
    const calendarIcon = document.getElementById('mobile-calendar-icon');
    const calendarIconSelected = document.getElementById('mbl-cal-pink');
    const homeIcon = document.getElementById('mbl-home-reg')
    const homeIconSelected = document.getElementById('mbl-home-pink')


    if (calendarInfo.style.display === 'none') {
        calendarInfo.style.display = 'block';
        workspaceInfo.style.display = 'none';
        showMsgInfo.style.display = 'none';
        showNftInfo.style.display = 'none';
        workspaceInfo.style.display = 'none';
        calendarIcon.style.display = 'none';
        calendarIconSelected.style.display = 'block';
        homeIconSelected.style.display = 'none';
        homeIcon.style.display = 'block';
    } else {
        calendarInfo.style.display = 'none';
        showMsgInfo.style.display = 'none';
        workspaceInfo.style.display = 'block';
        calendarIcon.style.display = 'block';
        calendarIconSelected.style.display = 'none';
    }
}