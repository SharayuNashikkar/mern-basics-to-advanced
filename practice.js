// Basic App JavaScript - DOM method Examples

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

// querySelector Examples

// Example 1: Select single element using querySelector
const mainSection = document.querySelector('.main-section');
if (mainSection) {
    mainSection.style.border = '2px solid blue';
}

// Example 2: Select element with querySelector and chain methods
const submitButton = document.querySelector('button[type="submit"]');
if (submitButton) {
    submitButton.textContent = 'Submit Form';
    submitButton.classList.add('btn-primary');
}

// querySelectorAll Examples

// Example 1: Select all elements with querySelectorAll and loop through them
const allButtons = document.querySelectorAll('button');
allButtons.forEach(function(button) {
    button.style.padding = '10px 20px';
    button.style.cursor = 'pointer';
});

// Example 2: Select multiple elements using complex selector and apply styles
const activeItems = document.querySelectorAll('.menu .item.active');
activeItems.forEach(function(item) {
    item.style.backgroundColor = '#ffeb3b';
    item.addEventListener('click', function() {
        console.log('Active item clicked:', item.textContent);
    });
});
// childNodes and children Examples

// Example 1: Access all child nodes (including text nodes and comments)
const container = document.querySelector('.container');
if (container) {
    console.log('All child nodes:', container.childNodes);
    console.log('Number of child nodes:', container.childNodes.length);
    
    // Loop through child nodes
    container.childNodes.forEach(function(node, index) {
        console.log(`Child node ${index}:`, node.nodeType, node.nodeName);
    });
}

// Example 2: Access only element children (excludes text nodes and comments)
const listElement = document.querySelector('ul');
if (listElement) {
    console.log('Element children:', listElement.children);
    console.log('Number of element children:', listElement.children.length);
    
    // Loop through element children
    for (let i = 0; i < listElement.children.length; i++) {
        const child = listElement.children[i];
        child.style.color = 'blue';
        console.log(`Child element ${i}:`, child.tagName, child.textContent);
    }
}

// Example 3: Compare childNodes vs children
const parentDiv = document.querySelector('.parent');
if (parentDiv) {
    console.log('childNodes count:', parentDiv.childNodes.length);
    console.log('children count:', parentDiv.children.length);
}

// getElementsByName Examples

// Example 1: Get all radio buttons with the same name (gender radio group)
const genderRadios = document.getElementsByName('gender');
console.log('Gender radio buttons:', genderRadios);
console.log('Number of gender options:', genderRadios.length);

// Loop through radio buttons and check their values
for (let i = 0; i < genderRadios.length; i++) {
    const radio = genderRadios[i];
    console.log(`Radio ${i + 1}:`, radio.value, radio.checked ? '(checked)' : '(unchecked)');
}

// Example 2: Get textarea elements by name
const nameTextarea = document.getElementsByName('Name');
const addressTextarea = document.getElementsByName('address');

console.log('Name textarea elements:', nameTextarea);
console.log('Address textarea elements:', addressTextarea);

// Access the first element of the NodeList (since names should be unique)
if (nameTextarea.length > 0) {
    console.log('Name textarea value:', nameTextarea[0].value);
}

if (addressTextarea.length > 0) {
    console.log('Address textarea value:', addressTextarea[0].value);
}

// Example 3: Add event listeners to radio buttons using getElementsByName
const genderOptions = document.getElementsByName('gender');
genderOptions.forEach(function(radio) {
    radio.addEventListener('change', function() {
        console.log('Selected gender:', this.value);
        
        // Update other radio buttons in the group
        genderOptions.forEach(function(otherRadio) {
            if (otherRadio !== this) {
                otherRadio.checked = false;
            }
        }, this);
    });
});
