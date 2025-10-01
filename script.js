// Dummy course data
const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the fundamentals of HTML and structure your first webpage.",
    lessons: ["Introduction", "Tags & Elements", "Forms & Inputs"],
    completed: false
  },
  {
    id: 2,
    title: "CSS Styling",
    description: "Style your webpages with CSS to make them beautiful and responsive.",
    lessons: ["Selectors & Properties", "Flexbox & Grid", "Responsive Design"],
    completed: false
  },
  {
    id: 3,
    title: "JavaScript Intro",
    description: "Understand JavaScript basics and add interactivity to your sites.",
    lessons: ["Variables & Data Types", "Functions", "DOM Manipulation"],
    completed: false
  }
];

// Save to localStorage
function saveCourses() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

// Load from localStorage
function loadCourses() {
  const stored = localStorage.getItem("courses");
  if (stored) {
    const parsed = JSON.parse(stored);
    parsed.forEach((c, i) => courses[i].completed = c.completed);
  }
}

// ========== HOMEPAGE ==========
if (document.getElementById("courseList")) {
  loadCourses();
  const list = document.getElementById("courseList");
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <a href="course.html?id=${course.id}">View Course</a>
      <p>Status: ${course.completed ? "✅ Completed" : "⏳ In Progress"}</p>
    `;
    list.appendChild(card);
  });
}

// ========== COURSE PAGE ==========
if (document.getElementById("courseTitle")) {
  loadCourses();
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const course = courses.find(c => c.id === id);

  if (course) {
    document.getElementById("courseTitle").innerText = course.title;
    document.getElementById("courseDescription").innerText = course.description;

    const lessonList = document.getElementById("lessonList");
    course.lessons.forEach(lesson => {
      const li = document.createElement("li");
      li.textContent = lesson;
      lessonList.appendChild(li);
    });

    updateProgress(course);

    document.getElementById("completeBtn").addEventListener("click", () => {
      course.completed = true;
      saveCourses();
      updateProgress(course);
      alert("Course marked as completed!");
    });
  }

  function updateProgress(course) {
    const percent = course.completed ? 100 : 0;
    document.getElementById("progressPercent").innerText = percent + "%";
    document.getElementById("progressFill").style.width = percent + "%";
  }
}

// ========== LOGIN MODAL ==========
if (document.getElementById("loginBtn")) {
  const modal = document.getElementById("loginModal");
  const closeModal = document.getElementById("closeModal");
  const loginBtn = document.getElementById("loginBtn");
  const submitLogin = document.getElementById("submitLogin");

  loginBtn.onclick = () => { modal.style.display = "flex"; };
  closeModal.onclick = () => { modal.style.display = "none"; };
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  submitLogin.onclick = () => {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    if (user && pass) {
      alert(`Welcome, ${user}!`);
      modal.style.display = "none";
    } else {
      document.getElementById("loginError").innerText = "Please enter username & password!";
    }
  };
}
