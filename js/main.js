document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather icons
  feather.replace();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    
    // Change icon based on menu state
    const icon = mobileMenu.classList.contains('hidden') ? 'menu' : 'x';
    menuToggle.innerHTML = '';
    const newIcon = document.createElement('i');
    newIcon.setAttribute('data-feather', icon);
    menuToggle.appendChild(newIcon);
    feather.replace();
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuToggle.innerHTML = '';
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-feather', 'menu');
        menuToggle.appendChild(newIcon);
        feather.replace();
      }
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Load projects
  loadProjects();
  
  // Load skills
  loadSkills();
  
  // Handle contact form submission
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Send form data to backend
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Show success message
      formSuccess.classList.remove('hidden');
      formError.classList.add('hidden');
      contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formSuccess.classList.add('hidden');
      }, 5000);
    })
    .catch(error => {
      // Show error message
      formError.classList.remove('hidden');
      formSuccess.classList.add('hidden');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        formError.classList.add('hidden');
      }, 5000);
      
      console.error('Error:', error);
    });
  });
});

// Function to load projects
function loadProjects() {
  const projectsContainer = document.getElementById('projects-container');
  
  // Project data
  const projects = [
    {
      title: "AirBnB Clone",
      description: "A full-stack web application that replicates core AirBnB functionality with property listings, user authentication, and booking features.",
      techStack: ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Julius-3367/AirBnB_clone"
    },
    {
      title: "Personal Blog",
      description: "A responsive blog platform with content management system, user comments, and category filtering.",
      techStack: ["JavaScript", "HTML", "CSS", "Flask", "MySQL"],
      githubLink: "https://github.com/Julius-3367/blog-platform"
    },
    {
      title: "Inventory Management System",
      description: "A web-based inventory tracking system with real-time updates, reporting, and user role management.",
      techStack: ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Julius-3367/inventory-system"
    }
  ];
  
  // Create project cards
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    const techStackHTML = project.techStack.map(tech => 
      `<span class="project-card-tech-badge">${tech}</span>`
    ).join('');
    
    projectCard.innerHTML = `
      <div class="project-card-header">
        <h3 class="project-card-title">${project.title}</h3>
      </div>
      <div class="project-card-content">
        <p class="project-card-description">${project.description}</p>
        <div class="project-card-tech">
          ${techStackHTML}
        </div>
      </div>
      <div class="project-card-footer">
        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-card-link">
          <i data-feather="github" class="h-4 w-4 mr-2"></i>
          View on GitHub
        </a>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
  
  // Re-initialize Feather icons for the newly added content
  feather.replace();
}

// Function to load skills
function loadSkills() {
  const skillsContainer = document.getElementById('skills-container');
  
  // Skills data
  const skills = ["Python", "Flask", "MySQL", "JavaScript", "HTML", "CSS", "Git", "GitHub", "AI tools"];
  
  // Create skill badges
  skills.forEach(skill => {
    const skillBadge = document.createElement('span');
    skillBadge.className = 'skill-badge';
    skillBadge.textContent = skill;
    
    skillsContainer.appendChild(skillBadge);
  });
}

// Declare feather variable
const feather = window.feather;

