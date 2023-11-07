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
        window.location.href = 'my-workspace.html'
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

// Various mobile design varibales with getElementById
// const workspaceInfo = document.getElementById('workspace-info');
// const mblCoursePage = document.getElementById('mobile-course-pg');
// const calendarInfo = document.getElementById('mbl-calendar');
// const assignInfo = document.getElementById('my-assignments-mbl')
// const calendarIcon = document.getElementById('mobile-calendar-icon');
// const calendarIconSelected = document.getElementById('mbl-cal-pink');
// const homeIcon = document.getElementById('mbl-home-reg');
// const homeIconSelected = document.getElementById('mbl-home-pink');
// const assignIcon = document.getElementById('mbl-assign-icon')
// const assignIconSelected = document.getElementById('mbl-assign-pink')


// function mobileAssignWorkspaceClicked() {
//     const workspaceInfo = document.getElementById('workspace-info');
//     const assignInfo = document.getElementById('my-assignments-mbl');
//     const calendarInfo = document.getElementById('mbl-calendar');
//     const homeIcon = document.getElementById('mbl-home-reg');
//     const homeIconSelected = document.getElementById('mbl-home-pink');
//     const assignIcon = document.getElementById('mbl-assign-icon');
//     const assignIconSelected = document.getElementById('mbl-assign-pink');
//     const calendarIcon = document.getElementById('mobile-calendar-icon');
//     const calendarIconSelected = document.getElementById('mbl-cal-pink');

//     if (assignInfo.style.display === 'none') {
//         assignInfo.style.display = 'block';
//         workspaceInfo.style.display = 'none';
//         calendarInfo.style.display = 'none';
//         homeIconSelected.style.display = 'none';
//         homeIcon.style.display = 'block';
//         assignIconSelected.style.display = 'block';
//         assignIcon.style.display = 'none';
//     } else {
//         assignInfo.style.display = 'none';
//         workspaceInfo.style.display = 'block';
//         calendarInfo.style.display = 'none';
//         assignIconSelected.style.display = 'none';
//         assignIcon.style.display = 'block';
//         calendarIconSelected.style.display = 'none';
//         calendarIcon.style.display = 'block';
//     }
// }

// Function to launch calendar on mobile when clicked
// function mobileCalendarClicked() {
//     const workspaceInfo = document.getElementById('workspace-info');
//     const assignInfo = document.getElementById('my-assignments-mbl')
//     const calendarInfo = document.getElementById('mbl-calendar');
//     const calendarIcon = document.getElementById('mobile-calendar-icon');
//     const calendarIconSelected = document.getElementById('mbl-cal-pink');
//     const homeIcon = document.getElementById('mbl-home-reg');
//     const homeIconSelected = document.getElementById('mbl-home-pink');
//     const assignIcon = document.getElementById('mbl-assign-icon');
//     const assignIconSelected = document.getElementById('mbl-assign-pink');


//     if (calendarInfo.style.display === 'none') {
//         calendarInfo.style.display = 'block';
//         workspaceInfo.style.display = 'none';
//         workspaceInfo.style.display = 'none';
//         assignInfo.style.display = 'none';
//         calendarIcon.style.display = 'none';
//         calendarIconSelected.style.display = 'block';
//         homeIconSelected.style.display = 'none';
//         homeIcon.style.display = 'block';
//     } else {
//         calendarInfo.style.display = 'none';
//         workspaceInfo.style.display = 'block';
//         assignInfo.style.display = 'block';
//         calendarIcon.style.display = 'block';
//         calendarIconSelected.style.display = 'none';
//     }
// }

// function mobileCalendarCourseClicked() {
//   const mblCoursePage = document.getElementById('mobile-course-pg');
//   const calendarInfo = document.getElementById('mbl-calendar');
//   const calendarIcon = document.getElementById('mobile-calendar-icon');
//   const calendarIconSelected = document.getElementById('mbl-cal-pink');
//   const homeIcon = document.getElementById('mbl-home-reg');
//   const homeIconSelected = document.getElementById('mbl-home-pink');


//   if (calendarInfo.style.display === 'none') {
//       calendarInfo.style.display = 'block';
//       mblCoursePage.style.display = 'none';
//       calendarIcon.style.display = 'none';
//       calendarIconSelected.style.display = 'block';
//       homeIconSelected.style.display = 'none';
//       homeIcon.style.display = 'block';
//   } else {
//       calendarInfo.style.display = 'none';
//       mblCoursePage.style.display = 'block';
//       assignInfo.style.display = 'block';
//       calendarIcon.style.display = 'block';
//       calendarIconSelected.style.display = 'none';
//   }
// }

// Displays an alert to show the user that the profile settings have been updates
function saveUserProfile() {
    alert("Changes saved successfully")
}

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