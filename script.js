const player = document.getElementById('player');
const gameContainer = document.querySelector('.game-container');
const dialogueBox = document.getElementById('dialogue');
const dialogueText = document.getElementById('dialogue-text');
const closeDialogueBtn = document.getElementById('close-dialogue');
const objects = document.querySelectorAll('.object');

// Resume data to be displayed in dialogue bubbles
const resumeData = {
    experience: "Your Experience: Wrote code for a cool company from 2023-2025. Developed interactive web applications and led a team of 3 junior developers.",
    skills: "Your Skills: HTML, CSS, JavaScript (React, Vue), Python, C++, Node.js, and more!",
    education: "Your Education: Graduated with a Bachelor of Science in Computer Science from University of Awesome in 2022."
};

// Function to show the dialogue box
function showDialogue(objectId) {
    const data = resumeData[objectId];
    if (data) {
        dialogueText.textContent = data;
        dialogueBox.style.display = 'block';
    }
}

// Function to hide the dialogue box
function hideDialogue() {
    dialogueBox.style.display = 'none';
}

// Add a click listener to each object to show the dialogue box directly
objects.forEach(object => {
    object.addEventListener('click', () => {
        showDialogue(object.id);
    });
});

// Close dialogue button
closeDialogueBtn.addEventListener('click', hideDialogue);
