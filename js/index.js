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

const messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;

    console.log('Name:', userName, 'Email:', userEmail, 'Message:', userMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = '<a href="mailto:${userEmail}">${userName}</a><span>: ${userMessage}</span>';

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function() {
        const entry = this.parentNode;
        entry.removeChild();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});