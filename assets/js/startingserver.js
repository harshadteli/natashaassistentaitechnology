 const commandElement = document.querySelector('.command');
const outputElement = document.querySelector('.output');
const commands = [
    'Natasha: Initializing...',
    'Natasha: Loading modules...',
    'Natasha: Starting AI engine...',
    'Natasha: Online.',
    'Natasha: Available commands:',
    'Loading Commands Completed !!',
    '  -Get started....'
];
let commandIndex = 0;
let charIndex = 0;

function typeCommand() {
    if (commandIndex < commands.length) {
        const command = commands[commandIndex];
        if (charIndex < command.length) {
            commandElement.textContent += command.charAt(charIndex);
            charIndex++;
            setTimeout(typeCommand, 50);
        } else {
            commandIndex++;
            charIndex = 0;
            outputElement.innerHTML += `<p>${command}</p>`;
            commandElement.textContent = '';
            setTimeout(typeCommand, 500);
        }
    }
}
typeCommand();
setTimeout(() => {
    // Redirect to main page
    window.location.href = 'natasha.html';
},15000);
