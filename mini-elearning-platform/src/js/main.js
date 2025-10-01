// This file initializes the application and handles navigation between pages.

document.addEventListener('DOMContentLoaded', () => {
    const coursesLink = document.querySelectorAll('.course-link');
    
    coursesLink.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const courseId = event.target.dataset.id;
            window.location.href = `course-detail.html?id=${courseId}`;
        });
    });

    const completedButtons = document.querySelectorAll('.completed-button');
    
    completedButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = 'Completed';
            button.disabled = true;
            // Logic to track progress can be added here
        });
    });
});