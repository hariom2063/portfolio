// Data Arrays (Easily Editable)
const skills = [
    { name: "Python", progress: 90 },
    { name: "C", progress: 90 },
    { name: "HTML", progress: 90 },
    { name: "CSS", progress: 80 },
    { name: "JavaScript", progress: 65 }
];

const achievements = [
    {
        title: "Authored Research Paper",
        date: "October 2026",
        category: "Academic",
        description: "Authored an academic research paper titled 'Deepfake Detection using AI'."
    },
    {
        title: "Leo Club Board Member",
        date: "April 2026",
        category: "Leadership",
        description: "Served as a Board Member for the Leo Club of Kathmandu Diamond."
    },
    {
        title: "Workspace Configuration",
        date: "November 2026",
        category: "Technical",
        description: "Successfully researched and configured DNS TXT and MX records to activate Google Workspace services for medecnepal.com."
    }
];

const projects = [
    {
        title: "Full-Stack To-Do List",
        status: "In Progress",
        description: "A web application built utilizing a Python Flask REST API backend, SQLite database, and an HTML, CSS, and JS frontend.",
        technologies: ["Python", "Flask", "SQLite", "HTML", "CSS", "JS"],
        demo: "#",
        github: "#"
    },
    {
        title: "Custom CLI Messaging Script",
        status: "Completed",
        description: "Developed C programs to send personalized message scripts.",
        technologies: ["C", "CLI"],
        demo: "#",
        github: "#"
    },
    {
        title: "Personal Portfolio",
        status: "Completed",
        description: "A fully responsive personal portfolio showcasing skills, progress, and achievements.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demo: "#",
        github: "#"
    }
];

// DOM Elements
const skillsContainer = document.getElementById('skills-container');
const achievementsContainer = document.getElementById('achievements-container');
const achievementsCount = document.getElementById('achievements-count');
const projectsContainer = document.getElementById('projects-container');
const yearSpan = document.getElementById('year');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// Render Skills
function renderSkills() {
    skills.forEach(skill => {
        const skillEl = document.createElement('div');
        skillEl.className = 'skill-item';
        skillEl.innerHTML = `
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" data-progress="${skill.progress}%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillEl);
    });
}

// Render Achievements
function renderAchievements() {
    achievementsCount.innerText = achievements.length;
    achievements.forEach(ach => {
        const achEl = document.createElement('div');
        achEl.className = 'achievement-card';
        achEl.innerHTML = `
            <h3>${ach.title}</h3>
            <div class="achievement-date">${ach.date} | ${ach.category}</div>
            <p>${ach.description}</p>
        `;
        achievementsContainer.appendChild(achEl);
    });
}

// Render Projects
function renderProjects() {
    projects.forEach(proj => {
        const tags = proj.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        const projEl = document.createElement('div');
        projEl.className = 'project-card';
        projEl.innerHTML = `
            <h3>${proj.title} <span style="font-size: 0.8rem; font-weight: normal; color: gray;">(${proj.status})</span></h3>
            <p>${proj.description}</p>
            <div class="tech-tags">${tags}</div>
            <a href="${proj.demo}" class="btn btn-secondary" style="color: var(--primary-color); border-color: var(--primary-color); padding: 0.3rem 0.8rem; font-size: 0.8rem;">Live Demo</a>
            <a href="${proj.github}" class="btn btn-secondary" style="color: var(--primary-color); border-color: var(--primary-color); padding: 0.3rem 0.8rem; font-size: 0.8rem;">Source</a>
        `;
        projectsContainer.appendChild(projEl);
    });
}

// Animate Progress Bars on Scroll
function animateProgressBars() {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach(fill => {
        const rect = fill.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            fill.style.width = fill.getAttribute('data-progress');
        }
    });
}

// Active Nav Link on Scroll
function updateNavOnScroll() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Contact Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic fake submission since we don't have a backend
    formMessage.style.color = "green";
    formMessage.style.marginTop = "10px";
    formMessage.innerText = "Message sent successfully! (Simulated)";
    form.reset();
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderAchievements();
    renderProjects();
    yearSpan.innerText = new Date().getFullYear();
});

window.addEventListener('scroll', () => {
    animateProgressBars();
    updateNavOnScroll();
});
