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
const workspaceInfo = document.getElementById('workspace-info');
const mblCoursePage = document.getElementById('mobile-course-pg');
const calendarInfo = document.getElementById('mbl-calendar');
const calendarIcon = document.getElementById('mobile-calendar-icon');
const calendarIconSelected = document.getElementById('mbl-cal-pink');
const homeIcon = document.getElementById('mbl-home-reg');
const homeIconSelected = document.getElementById('mbl-home-pink');

// Function to launch calendar on mobile when clicked
function mobileCalendarClicked() {
    const workspaceInfo = document.getElementById('workspace-info');
    const mblCoursePage = document.getElementById('mobile-course-pg');
    const calendarInfo = document.getElementById('mbl-calendar');
    const calendarIcon = document.getElementById('mobile-calendar-icon');
    const calendarIconSelected = document.getElementById('mbl-cal-pink');
    const homeIcon = document.getElementById('mbl-home-reg');
    const homeIconSelected = document.getElementById('mbl-home-pink');


    if (calendarInfo.style.display === 'none') {
        calendarInfo.style.display = 'block';
        workspaceInfo.style.display = 'none';
        workspaceInfo.style.display = 'none';
        calendarIcon.style.display = 'none';
        calendarIconSelected.style.display = 'block';
        homeIconSelected.style.display = 'none';
        homeIcon.style.display = 'block';
    } else {
        calendarInfo.style.display = 'none';
        workspaceInfo.style.display = 'block';
        mblCoursePage.style.display = 'block';
        calendarIcon.style.display = 'block';
        calendarIconSelected.style.display = 'none';
    }
}

function mobileCalendarCourseClicked() {
  const mblCoursePage = document.getElementById('mobile-course-pg');
  const calendarInfo = document.getElementById('mbl-calendar');
  const calendarIcon = document.getElementById('mobile-calendar-icon');
  const calendarIconSelected = document.getElementById('mbl-cal-pink');
  const homeIcon = document.getElementById('mbl-home-reg');
  const homeIconSelected = document.getElementById('mbl-home-pink');


  if (calendarInfo.style.display === 'none') {
      calendarInfo.style.display = 'block';
      mblCoursePage.style.display = 'none';
      calendarIcon.style.display = 'none';
      calendarIconSelected.style.display = 'block';
      homeIconSelected.style.display = 'none';
      homeIcon.style.display = 'block';
  } else {
      calendarInfo.style.display = 'none';
      mblCoursePage.style.display = 'block';
      calendarIcon.style.display = 'block';
      calendarIconSelected.style.display = 'none';
  }
}

function courseOutlineClicked() {
    const courseContent = document.getElementById('course-content');
    const weekNumber = document.getElementById('weeknumber')
    courseContent.innerHTML = (`<h2 aria-label="course outline title" class="mx-4 fs-2 mt-5 fw-bold">Healthy Lifestyle: Nutrition and Disease Prevention</h2>
    <div class="container-fluid" id="course-content">
        <div class="row">
            <div class="col-8 nopadding">
                <h3 aria-label="curriculum expectations" class="mx-4 fs-5 mt-5 fw-bold">Overall Curriculum Expectations</h3>
                <div aria-label="expectations list" class="card w-100 mt-4 mx-4">
                    <div class="card-body my-2">
                        <p class="fw-bold">LIVING SKILLS</p>
                        <p class="mt-2 lh-sm">Demonstrate personal and interpersonal skills and the use of critical and creative thinking processes as they acquire knowledge and skills in connectionwith the expectations in the Active Living, Movement Competence, and Healthy Living strands for this grade.</p>
                        <p class="fw-bold mt-3">ACTIVE LIVING</p>
                        <p class="fw-bold mt-3">A1:</p>
                        <p class="mt-2 lh-sm">Demonstrate personal and interpersonal skills and the use of critical and creative thinking processes as they acquire knowledge and skills in connectionwith the expectations in the Active Living, Movement Competence, and Healthy Living strands for this grade.</p>
                        <p class="fw-bold mt-3">A2:</p>
                        <p class="mt-2 lh-sm">Demonstrate an understanding of the importance of being physicallyactive, and apply physical fitness concepts and practices that contribute tohealthy, active living;</p>
                        <p class="fw-bold mt-3">A3:</p>
                        <p class="mt-2 lh-sm">Demonstrate responsibility for their own safety and the safety of others asthey participate in physical activities.</p>
                        <p class="fw-bold mt-3">MOVEMENT COMPETENCE: SKILLS, CONCEPTS, AND STRATEGIES</p>
                        <p class="fw-bold mt-3">B1:</p>
                        <p class="mt-2 lh-sm">Perform movement skills, demonstrating an understanding of the basicrequirements of the skills and applying movement concepts as appropriate, asthey engage in a variety of physical activities;</p>
                        <p class="fw-bold mt-3">B2:</p>
                        <p class="mt-2 lh-sm">Apply movement strategies appropriately, demonstrating an understanding of the components of a variety of physical Healthy Living</p>
                        <p class="fw-bold mt-3">HEALTHY LIVING</p>
                        <p class="fw-bold mt-3">C1:</p>
                        <p class="mt-2 lh-sm">Demonstrate an understanding of factors that contribute to healthy development;</p>
                        <p class="fw-bold mt-3">C2:</p>
                        <p class="mt-2 lh-sm">demonstrate the ability to apply health knowledge and living skills tomake reasoned decisions and take appropriate actions relating to theirpersonal health and well-being;</p>
                        <p class="fw-bold mt-3">C3:</p>
                        <p class="mt-2 lh-sm">demonstrate the ability to make connections that relate to health and well-being, how their choices and behaviours affect both themselves and others, and how factors in the world around them affect their own and others health and well-being.</p>
                    </div>
                </div>
                <h3 aria-label="course outline title" class="mx-4 fs-5 mt-5 fw-bold">Experimental Community Learning Program</h3>
                <div aria-label="expectations list" class="card w-100 mt-4 mb-5 mx-4">
                    <div class="card-body my-2">
                        <p>Course of Study</p>
                        <p class="mt-3">Training Hours: 80 hours to be split between the Units below:</p>
                        <p class="mt-3">Unit 1: Living Skills (5 Hours)</p>
                        <p class="mt-3">Unit 2: Active Learning-Training (40 Hours) - Reflection (5 Hours)</p>
                        <p class="mt-3">Unit 3: Movement Competence: Skills, Concepts, and Strategies - Training (40 Hours) - Reflection (5 Hours)</p>
                        <p class="mt-3">Unit 4: Healthy Living (15 Hours) - Culminating Activity (5 Hours)</p>
                        <ul class="mt-3 mx-3">
                            <li class="mt-3 lh-sm">Students will be expected to login into Google Classroom (Learning Management System) at least twice a week.</li>
                            <li class="mt-3 lh-sm">Students required to finish the course within time frame negotiated with facilitator.</li>
                            <li class="mt-3 lh-sm">When 80 hours of training and all course material must be completed inorder to receive the credit.</li>
                            <li class="mt-3 lh-sm">Head coach / president must sign off on training hours in order for creditto be achieved</li>
                        </ul>
                    </div>
                </div>
                <h3 aria-label="course outline title" class="mx-4 fs-5 mt-5 fw-bold">Overall Curriculum Expectations</h3>
                <div aria-label="expectations list" class="card w-100 mt-4 mx-4">
                    <div class="card-body my-2">
                        <p class="lh-sm">Students will receive ongoing feedback from their facilitators throughout theentire semester. 70% of their final mark will be for term work and 30% will befor their summative at the end of the course.</p>
                        <p class="mt-3">Term Work 70%</p>
                        <ul class="mt-3 mx-3">
                            <li class="mt-3 lh-sm">Participation</li>
                            <li class="mt-3 lh-sm">Reflection</li>
                            <li class="mt-3 lh-sm">Inquiries</li>
                            <li class="mt-3 lh-sm">Social Media</li>
                            <li class="mt-3 lh-sm">Reflections</li>
                            <li class="mt-3 lh-sm">Podcast</li>
                        </ul>
                        <p class="mt-3">Summative 30%</p>
                        <ul class="mt-3 mx-3">
                            <li class="mt-3 lh-sm">Personal Reflection</li>
                            <li class="mt-3 lh-sm">Curriculum connections</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <h4 class="mx-4 fs-5 mt-5 fw-bold mb-4">Download the outline document for more details about the course.</h4>
                    <span class="btn w-50 mx-4 bg-success rounded-5 fw-bold mb-5 text-white flex-column"><img class="" src="../images/icons/Share.svg">Course Outline</span>
                </div>
            </div>
            <div class="col-3 col-sm-3 d-flex flex-column align-items-center">
              <div class="calendar-container shadow p-3 mb-5 bg-body-tertiary rounded fixed-width">
                <div class="d-flex flex-wrap align-items-center justify-content-between mb-3 calendar-icons">
                  <h2 class="title-cal-message me-2 fs-5">My Calendar</h2>
                  <img id="calendar-icon" class="calendar-icon icon" src="/Images/icons/u_calendar-alt.svg" alt="calendar-icon">
                  <img id="list-icon" class="list-cal-icon icon" src="/Images/icons/u_list-ul.svg" alt="calendar-icon">
                </div>
                <hr class="primary-line-message mt-2">
                <!-- Jia and Qing add accessibilities  -->
                <!-- This div is for the calendar -->
                <div id="calendar-content" class="bg-body-tertiary rounded p-3" tabindex="0"
                aria-label="View calendar">
                  <div class="d-flex flex-wrap justify-content-between align-items-center" tabindex="0">
                    <p id="current-month" class="current-month"></p>
                    <div class="calendar-arrows" tabindex="0">
                      <img id="left" src="/Images/icons/chevron-2.svg" alt="left-button">
                      <img id="right" src="/Images/icons/chevron.svg" alt="right-button">
                    </div>
                  </div>
                  <div class="calendar d-flex flex-wrap flex-column" tabindex="0">
                    <div class="weeks" tabindex="0">
                      <ul>
                        <li>Su</li>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                      </ul>
                    </div>
                    <div>
                      <ul class="days" tabindex="0"></ul>
                    </div>
                  </div>
                </div>
                <ul id="events-list" style="display: none">
                <!-- Event items will be dynamically added here -->
                </ul>
              </div>
            </div>
        </div>
    </div>`);
}

function workbookClicked() {
    const courseContent = document.getElementById('course-content');
    const weekNumber = document.getElementById('weeknumber');
    weeknumber.style.display = 'block';
    // Restore the default content or any other content you want to set as default
    courseContent.innerHTML = (`<div class="row">
    <div class="col-6 nopadding">
        <h3 aria-label="to do list" class="mx-4 fs-3 mt-5 fw-bold">To do:</h3>
        <div class="to-do card w-100 mt-5 mx-4">
            <div class="card-body m-4 my-2">
                <div class="form-check mt-2">
                    <input aria-label="Check Off Task" class="form-check-input" type="checkbox" value="" id="flexCheckDefault-1-dsk">
                    <label aria-label="Due Date" class="form-check-label p-1 fs-5" for="flexCheckDefault-1-dsk">
                    10-10-2023
                    </label>
                </div>
                <p class="fs-5 mt-4 fw-bold">Watch and read</p>
                <p class="fs-5 mt-4 lh-lg">Doctor shares foods to eat to help combat diseases l GMAList:<br> Antiangiogenic Foods Dr Li</p>
                <p class="fs-5 mt-4 fw-bold">Complete your Lifestyle: Nutrition and Disease Prevention assignment</p>
                <p class="fs-5 mt-4">Due 09/16 at 11:59 pm.</p>
            </div>
        </div>
        <div class="to-do card w-100 mt-5 mb-5 mx-4">
            <div class="card-body m-4 my-2">
                <div class="form-check mt-2">
                    <input aria-label="Check Off Task" class="form-check-input" type="checkbox" value="" id="flexCheckDefault-2-dsk">
                    <label aria-label="Due Date" class="form-check-label p-1 fs-5" for="flexCheckDefault-2-dsk">
                    10-10-2023
                    </label>
                </div>
                <p class="fs-5 mt-4 fw-bold">Watch and read</p>
                <p class="fs-5 mt-4 lh-lg">Doctor shares foods to eat to help combat diseases l GMAList:<br> Antiangiogenic Foods Dr Li</p>
                <p class="fs-5 mt-4 fw-bold">Complete your Lifestyle: Nutrition and Disease Prevention assignment</p>
                <p class="fs-5 mt-4">Due 09/16 at 11:59 pm.</p>
            </div>
        </div>
    </div>
    <div class="col-3 col-sm-3 d-flex flex-column align-items-center">
              <div class="calendar-container shadow p-3 mb-5 bg-body-tertiary rounded fixed-width">
                <div class="d-flex flex-wrap align-items-center justify-content-between mb-3 calendar-icons">
                  <h2 class="title-cal-message me-2 fs-5">My Calendar</h2>
                  <img id="calendar-icon" class="calendar-icon icon" src="/Images/icons/u_calendar-alt.svg" alt="calendar-icon">
                  <img id="list-icon" class="list-cal-icon icon" src="/Images/icons/u_list-ul.svg" alt="calendar-icon">
                </div>
                <hr class="primary-line-message mt-2">
                <!-- Jia and Qing add accessibilities  -->
                <!-- This div is for the calendar -->
                <div id="calendar-content" class="bg-body-tertiary rounded p-3" tabindex="0"
                aria-label="View calendar">
                  <div class="d-flex flex-wrap justify-content-between align-items-center" tabindex="0">
                    <p id="current-month" class="current-month"></p>
                    <div class="calendar-arrows" tabindex="0">
                      <img id="left" src="/Images/icons/chevron-2.svg" alt="left-button">
                      <img id="right" src="/Images/icons/chevron.svg" alt="right-button">
                    </div>
                  </div>
                  <div class="calendar d-flex flex-wrap flex-column" tabindex="0">
                    <div class="weeks" tabindex="0">
                      <ul>
                        <li>Su</li>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                      </ul>
                    </div>
                    <div>
                      <ul class="days" tabindex="0"></ul>
                    </div>
                  </div>
                </div>
                <ul id="events-list" style="display: none">
                <!-- Event items will be dynamically added here -->
                </ul>
              </div>
            </div>
</div>`);
}

// Displays an alert to show the user that the profile settings have been updates
function saveUserProfile() {
    alert("Changes saved successfully")
}