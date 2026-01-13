// Basic App JavaScript - getElementById Examples

document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
    
    // Example 1: Get the main content section
    const contentSection = document.getElementById('content');
    if (contentSection) {
        console.log('Content section found:', contentSection);
    }
    
    // Example 2: Get and modify an element by ID
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.textContent = 'Welcome to My App';
    }
    
    // Example 3: Get form input and set value
    const userInput = document.getElementById('username');
    if (userInput) {
        userInput.value = 'Default User';
    }
    
    // Example 4: Get element and add CSS class
    const messageBox = document.getElementById('message');
    if (messageBox) {
        messageBox.classList.add('highlight');
    }
    
    // Example 5: Get element and add event listener
    const button = document.getElementById('submit-btn');
    if (button) {
        button.addEventListener('click', function() {
            console.log('Button clicked!');
        });
    }
});

// Example function
function greet(name) {
    return `Hello, ${name}!`;
}

// getElementsByClassName Examples

// Example 1: Get all elements with a specific class
const allHighlightedElements = document.getElementsByClassName('highlight');
console.log('Highlighted elements:', allHighlightedElements);

// Example 2: Loop through elements with a class and modify them
const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = '#f0f0f0';
}

// Example 3: Get elements with a class and change text content
const titles = document.getElementsByClassName('title');
for (let title of titles) {
    title.textContent = title.textContent.toUpperCase();
}
