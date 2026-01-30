function toggleText() {
    const textElement = document.getElementById('text');
    const button = document.getElementById('toggleBtn');
    
    if (button.textContent === 'Show text') {
        // Show the paragraph
        textElement.style.display = 'block';
        button.textContent = 'Hide text';
    } else {
        // Hide the paragraph
        textElement.style.display = 'none';
        button.textContent = 'Show text';
    }
}

// Add event listener when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('toggleBtn');
    button.addEventListener('click', toggleText);
});