// Basic App JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
    
    // Get the main content section
    const contentSection = document.getElementById('content');
    
    if (contentSection) {
        console.log('Content section found');
    }
});

// Example function
function greet(name) {
    return `Hello, ${name}!`;
}
