// This file manages the functionality of the course detail page, including displaying course information and updating progress.

document.addEventListener('DOMContentLoaded', function() {
    const courseId = getCourseIdFromURL();
    const course = getCourseDetails(courseId);
    displayCourseDetails(course);
    
    const completedButton = document.getElementById('completed-button');
    completedButton.addEventListener('click', function() {
        markCourseAsCompleted(courseId);
    });
});

function getCourseIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function getCourseDetails(courseId) {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    return courses.find(course => course.id === courseId);
}

function displayCourseDetails(course) {
    if (course) {
        document.getElementById('course-title').innerText = course.title;
        document.getElementById('course-description').innerText = course.description;
        const lessonsList = document.getElementById('lessons-list');
        course.lessons.forEach(lesson => {
            const listItem = document.createElement('li');
            listItem.innerText = lesson;
            lessonsList.appendChild(listItem);
        });
    } else {
        document.getElementById('course-details').innerText = 'Course not found.';
    }
}

function markCourseAsCompleted(courseId) {
    let completedCourses = JSON.parse(localStorage.getItem('completedCourses')) || [];
    if (!completedCourses.includes(courseId)) {
        completedCourses.push(courseId);
        localStorage.setItem('completedCourses', JSON.stringify(completedCourses));
        alert('Course marked as completed!');
    } else {
        alert('You have already completed this course.');
    }
}