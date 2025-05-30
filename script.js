const form = document.getElementById("resume-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const linkedinInput = document.getElementById("linkedin");
const githubInput = document.getElementById("github");
const summaryInput = document.getElementById("summary");

const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewPhone = document.getElementById("preview-phone");
const previewLinkedin = document.getElementById("preview-linkedin");
const previewGithub = document.getElementById("preview-github");
const previewSummary = document.getElementById("preview-summary");

const previewEdu = document.getElementById("preview-education");
const previewExp = document.getElementById("preview-experience");
const previewSkills = document.getElementById("preview-skills");

const progressBar = document.getElementById("progress-bar");

function updateProgress() {
  let filled = 0;
  const total = 9; // Name, Email, Phone, Summary, Education, Experience, Skills
  if (nameInput.value) filled++;
  if (emailInput.value) filled++;
  if (phoneInput.value) filled++;
  if (linkedinInput.value) filled++;
  if (githubInput.value) filled++;
  if (summaryInput.value) filled++;
  if (document.querySelector(".edu-input")?.value) filled++;
  if (document.querySelector(".exp-input")?.value) filled++;
  if (document.querySelectorAll(".skill:checked").length > 0) filled++;
  progressBar.style.width = `${(filled / total) * 100}%`;
}

function updatePreview() {
  previewName.textContent = nameInput.value;
  previewEmail.textContent = emailInput.value;
  previewPhone.textContent = phoneInput.value;
  previewLinkedin.textContent = linkedinInput.value;
  previewGithub.textContent = githubInput.value;
  previewSummary.textContent = summaryInput.value;

  previewEdu.innerHTML = '';
  document.querySelectorAll('.edu-input').forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      previewEdu.appendChild(li);
    }
  });

  previewExp.innerHTML = '';
  document.querySelectorAll('.exp-input').forEach(input => {
    if (input.value.trim()) {
      const li = document.createElement("li");
      li.textContent = input.value;
      previewExp.appendChild(li);
    }
  });

  previewSkills.innerHTML = '';
  document.querySelectorAll('.skill:checked').forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.value;
    previewSkills.appendChild(li);
  });

  updateProgress();
}

function addEducation() {
  const div = document.createElement("div");
  div.classList.add("edu-entry");
  div.innerHTML = `<input type="text" class="edu-input" placeholder="Degree, Institute, Year" />`;
  document.getElementById("education-section").insertBefore(div, document.getElementById("education-section").lastElementChild);
}

function addExperience() {
  const div = document.createElement("div");
  div.classList.add("exp-entry");
  div.innerHTML = `<input type="text" class="exp-input" placeholder="Role, Company, Duration" />`;
  document.getElementById("experience-section").insertBefore(div, document.getElementById("experience-section").lastElementChild);
}

function clearForm() {
  previewName.textContent = '';
  previewEmail.textContent = '';
  previewPhone.textContent = '';
  previewLinkedin.textContent = '';
  previewGithub.textContent = '';
  previewSummary.textContent = '';
  previewEdu.innerHTML = '';
  previewExp.innerHTML = '';
  previewSkills.innerHTML = '';
  progressBar.style.width = '0%';
}

form.addEventListener("input", updatePreview);
