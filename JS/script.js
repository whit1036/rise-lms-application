// Creates variables to target DOM elements for student login information
const loginButton = document.getElementById('getLinkBtn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const getPasswordLink = document.getElementById('getPasswordLink')

// Define the correct email and password
const correctEmail = 'risestudent@riseacademy.com';
const correctPassword = 'riseacademy';

// Creates an addeventlistener function to emulate student login features with custom credentials
loginButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting
    
    // Sets entered e-mail to whatever is in the input field
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    // Checks if entered email and password are correct
    if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
        showMessage('Login Successful', 'text-success');
        window.location.href = 'my-workspace.html'
    } else {
        showMessage('Login Incorrect. Please check your credentials.', 'text-danger');
    }

    // Clear the input fields
    emailInput.value = '';
    passwordInput.value = '';
});

// Function that Displays incorrect password message
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
  
// Adds event listener to student login button, linking to student login page.
document.addEventListener('DOMContentLoaded', function () {
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

// Displays an alert to show the user that the profile settings have been updates
function saveUserProfile() {
    alert("Changes saved successfully")
}

// Renders new content when submit file button is clicked on the assignment submission page
function submitFile() {
    const preSubContent = document.getElementById('pre-content')
    preSubContent.innerHTML = (`
    <h3 aria-label="curriculum expectations" class="fs-4 mt-5 mb-4 fw-bold">Submission</h3>
    <p class="mt-3 fs-5 lh-sm">Text Submission</p>
    <div aria-label="" class="card w-75 mt-3 border-danger">
                <div class="card-body text-sub-2">
                    <p class="lh-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium metus a facilisis commodo. Nam posuere elit eu arcu porttitor mollis. Sed varius ex non erat consequat, in pulvinar nibh egestas. Aenean ornare pretium convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Aenean quis sagittis sapien, non vulputate tellus. Nulla finibus vel enim id tristique. Mauris sit amet purus mi. Fusce mollis aliquam tempus. Praesent lacus ligula, finibus sed pharetra eu, consectetur non dui. Vivamus ut quam vitae ipsum suscipit tincidunt eu et mi. Ut vitae mi in elit semper dignissim nec sed eros.</p>
                </div>
              </div>
    <p class="mt-5 fs-5 lh-sm">File Submission</p>
    <table class="table assignment-table-submission table-bordered rounded table-rubric mt-3 w-75">
                            <thead>
                              <tr>
                                <th scope="col" class="fw-bold fs-5">Submission</th>
                                <th scope="col" class="fw-bold fs-5 text-center w-50">Date Submitted</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="fs-5 lh-base fw-bold">Assignment01_Sarah_Smith.pdf</td>
                                <td class="lh-base fs-5">Sept 27, 2022, 10:08 PM</td>
                              </tr>
                            </tbody>
                          </table>
                          <a href="../HTML/assignment-page.html">
                            <button id="done-btn" class="btn mt-2 text-white fw-bold rounded-5">Done</button>
                          </a>`)
}
