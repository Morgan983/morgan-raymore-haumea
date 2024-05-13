var body = document.body;

var footer = document.createElement('footer');

footer.textContent = "© 2024 Get to Know Me!";

body.appendChild(footer);

var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector('footer');

var copyright = document.createElement('p');

var myName = "Morgan Raymore";
var copyrightContent = `© ${2024} ${myName}`;

copyright.innerHTML = copyrightContent;

footer.appendChild(copyright);

const skills = ["EPIC", "Programming", "Excel", "GitHub"];

const skillsSection = document.getElementById('Skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    
    const skill = document.createElement('li');

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}