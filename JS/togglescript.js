// // app.js
// document.addEventListener('DOMContentLoaded', function () {
//     const pages = document.querySelectorAll('.page');

//     function showPage(pageId) {
//         pages.forEach(function (page) {
//             page.classList.remove('active');
//         });

//         const page = document.getElementById(pageId + 'Page');
//         page.classList.add('active');
//     }

//     // Handle initial page load based on the URL hash
//     const initialPage = window.location.hash ? window.location.hash.slice(1) : 'login';
//     showPage(initialPage);

//     // Handle navigation links
//     const navLinks = document.querySelectorAll('.tog');
//     navLinks.forEach(function (link) {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const page = link.getAttribute('href').slice(1);
//             showPage(page);
//             window.location.hash = page;
//         });
//     });
// });

// app.js
// app.js
// app.js
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page');

    function showPage(pageId) {
        pages.forEach(function (page) {
            page.classList.remove('active');
        });

        const page = document.getElementById(pageId + 'Page');
        page.classList.add('active');
    }

    // Handle initial page load based on the URL hash
    const initialPage = window.location.hash ? window.location.hash.slice(1) : 'home';
    showPage(initialPage);

    // Handle navigation links
    const navLinks = document.querySelectorAll('.tog');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = link.getAttribute('href').slice(1);
            showPage(page);
            window.location.hash = page;
        });
    });
});

// Join Meeting JS

// Displays the modal automatically without clicking a toggle button
window.addEventListener('load', function() {
    // Simulate delay to demonstrate loading state
    setTimeout(function() {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 3000); // Change 3000 to the desired milliseconds of delay
  });


