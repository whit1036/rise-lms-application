// This JS file is responsible for displaying all of the content of the mobile view pages. Each button is toggled by its id plus the string of 'page'. See the HTML for more details.

// Adds link to each icon corresponding on page clicked
document.addEventListener('DOMContentLoaded', function () {
    
    // retrieves elements with a class of .page
    const pages = document.querySelectorAll('.page');
    
    // Shows whichever page is selected and removes those that aren't
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

    // Handle mobile navigation links
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

// Displays the video chat bootstrap modal automatically without clicking a toggle button
window.addEventListener('load', function() {
    // Simulate delay to demonstrate loading state
    setTimeout(function() {
      document.getElementById('loading-overlay').style.display = 'none';
    }, 3000); // Change 3000 to the desired milliseconds of delay
  });


