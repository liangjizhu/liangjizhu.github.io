// Portfolio data object
const portfolio = {
  name: "Liang Ji Zhu",
  title: "Computer Science Student",
  profilePhoto: "IMG_0521.jpg", // Make sure this matches your image file name
  about:
    "Motivated third-year Computer Science student with a strong foundation in software development, data structures, and cybersecurity. Passionate about solving complex problems through efficient algorithms and secure software practices. Seeking opportunities to apply my skills in a dynamic and innovative environment.",
  education: [
    {
      degree: "Bachelor in Computer Science and Engineering",
      institution: "University of Carlos III de Madrid",
      year: "Class of 2022"
    },
    {
      degree: "Science and Technology Baccalaureate",
      institution: "Colegio Villa de Móstoles",
      grade: "9.60",
      year: "2020"
    }
  ],
  experience: [
    {
      role: "Shop Assistant",
      company: "Alimentación Bazar",
      location: "Madrid, Spain",
      duration: "March 2021 - August 2025"
    },
    {
      role: "Warehouse Organizer",
      company: "Shein",
      location: "Madrid, Spain",
      duration: "June 2022 - August 2022"
    }
  ],
  skills: [
    "Teamwork & Communication",
    "Debugging & Troubleshooting",
    "Mathematical & Logical Thinking",
    "Algorithmic Thinking",
    "Documentation & Code Readability",
    "Project Management Tools",
    "Databases",
    "Programming Languages (Python, Java, JavaScript)",
    "Software & Web Development"
  ],
  languages: [
    "Chinese (Native)",
    "English (B2 Certified)",
    "Spanish (Proficient)"
  ],
  interests: [
    "Cybersecurity",
    "Machine Learning",
    "Open-Source Software",
    "Competitive Programming"
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/liangjizhu/?locale=en_US",
    email: "liangjizhu29@gmail.com",
    github: "https://github.com/liangjizhu"
  }
};

// Render the portfolio onto the page
function renderPortfolio(data) {
  // Profile Photo
  document.getElementById("profile-photo").src = data.profilePhoto;

  // Name and Title
  document.getElementById("name").textContent = data.name;
  document.getElementById("title").textContent = data.title;

  // About
  document.getElementById("about").textContent = data.about;

  // Education
  const educationList = document.getElementById("education-list");
  data.education.forEach((edu) => {
    const li = document.createElement("li");
    li.textContent = `${edu.degree} at ${edu.institution} (${edu.year}${
      edu.grade ? ", Grade: " + edu.grade : ""
    })`;
    educationList.appendChild(li);
  });

  // Experience
  const experienceList = document.getElementById("experience-list");
  data.experience.forEach((exp) => {
    const li = document.createElement("li");
    li.textContent = `${exp.role} at ${exp.company}, ${exp.location} (${exp.duration})`;
    experienceList.appendChild(li);
  });

  // Skills
  const skillsList = document.getElementById("skills-list");
  data.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Languages
  const languagesList = document.getElementById("languages-list");
  data.languages.forEach((lang) => {
    const li = document.createElement("li");
    li.textContent = lang;
    languagesList.appendChild(li);
  });

  // Projects
  const projectsList = document.getElementById("projects-list");
  data.projects.forEach((project) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${project.name}</strong> – 
      ${project.description}<br />
      <em>Technologies:</em> ${project.technologies.join(", ")}<br />
      <a href="${project.link}" target="_blank">View on GitHub</a>
    `;
    projectsList.appendChild(li);
  });

  // Achievements
  const achievementsList = document.getElementById("achievements-list");
  data.achievements.forEach((ach) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${ach.title}:</strong> ${ach.description}`;
    achievementsList.appendChild(li);
  });

  // Interests
  const interestsList = document.getElementById("interests-list");
  data.interests.forEach((interest) => {
    const li = document.createElement("li");
    li.textContent = interest;
    interestsList.appendChild(li);
  });

  // Contact
  document.getElementById("linkedin").href = data.contact.linkedin;
  document.getElementById("email").href = `mailto:${data.contact.email}`;
  document.getElementById("email").textContent = data.contact.email;
  document.getElementById("phone").textContent = data.contact.phone;
  document.getElementById("github").href = data.contact.github;
}

// Call the render function
renderPortfolio(portfolio);
