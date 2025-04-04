// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
  });
});

// Scroll to Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.id = "back-to-top";
scrollToTopButton.innerHTML = "↑";
document.body.appendChild(scrollToTopButton);

// Show/Hide Scroll to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
});

// Scroll to Top Action
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

// Project Hover Animation
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener("mouseenter", () => {
      project.style.transform = "scale(1.05)";
      project.style.transition = "transform 0.3s ease";
  });
  project.addEventListener("mouseleave", () => {
      project.style.transform = "scale(1)";
  });
});

// Mobile Navigation Toggle
const mobileNavToggle = document.createElement('button');
mobileNavToggle.id = "mobile-nav-toggle";
mobileNavToggle.innerHTML = "☰";
document.querySelector('header nav').prepend(mobileNavToggle);

// Toggle Navigation on Mobile
mobileNavToggle.addEventListener('click', () => {
  const navList = document.querySelector('header nav ul');
  navList.classList.toggle('active');
});

// Dynamic Skills Section (Example)
const skillsSection = document.querySelector("#about");
const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'Cybersecurity'];

skillsSection.innerHTML += `
  <h3>Skills</h3>
  <ul id="skills-list">
      ${skills.map(skill => `<li class="skill">${skill}</li>`).join('')}
  </ul>
`;

const skillElements = document.querySelectorAll('.skill');
skillElements.forEach(skill => {
  skill.addEventListener("click", () => {
      alert(`You clicked on ${skill.textContent}`);
  });
});
/* Show button when user scrolls down */
window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 200) {
      document.getElementById('back-to-top').style.display = 'block';
  } else {
      document.getElementById('back-to-top').style.display = 'none';
  }
};

/* Scroll to top functionality */
document.getElementById('back-to-top').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};