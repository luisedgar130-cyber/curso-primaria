// script.js - JavaScript code for interactive activities and navigation features

// Function to display current date and time in UTC
function displayCurrentDateTime() {
    const currentDate = new Date();
    const utcDateTime = currentDate.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC): ' + utcDateTime);
}

displayCurrentDateTime();

// Function to navigate to a different section of the page
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Section not found: ' + sectionId);
    }
}

// Event listeners for navigation buttons
document.getElementById('nav-button').addEventListener('click', function() {
    navigateToSection('target-section');
});
